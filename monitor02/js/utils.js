(function () {
    function fnDate ( selector ) {
        var date = new Date();
        var year = date.getFullYear();//当前年份
        var month = date.getMonth();//当前月份
        var data = date.getDate();//天
        var hours = date.getHours();//小时
        var minute = date.getMinutes();//分
        var second = date.getSeconds();//秒
        var time = year + '-' + fnW((month + 1)) + '-' + fnW(data) + ' ' + fnW(hours) + ':' + fnW(minute) + ':' + fnW(second);
        return time;
    }

    function YMD(date){
		return {
			year:date.getFullYear(),
			month:date.getMonth()+1,
			day:date.getDate()
		}
	}
	
    function getTimeDate () {
        var specialDate = "2019/12/01";
        var specialTime = new Date(Date.parse(specialDate));

        var date = new Date();
        var today = fnW(date.getFullYear()) + "/"+fnW(date.getMonth()+1) + "/" + fnW(date.getDate());
        var todayTime = new Date(Date.parse(today));
        var todayMD = fnW(date.getMonth()+1) + "." + fnW(date.getDate());

        var yesterTime = new Date(Date.parse(today)-24*60*60*1000);
        var yesterdayMd = fnW(yesterTime.getMonth()+1) + "." + fnW(yesterTime.getDate());
        var diffTime =todayTime-specialTime; 
        
        specialDate = diffTime<0?"2019/11/26":"2019/12/01";
        var specialDates = specialDate.split("/");
        var specialMd = specialDates[1]+"."+specialDates[2];
      
		return {
			time:diffTime==0?specialMd+"-"+todayMD:specialMd+"-"+yesterdayMd,
			today:todayMD
		}
	}

    function fnW ( str ) {
        var num;
        num = str >= 10 ? str : ('0' + str);
        return num;
    }

    function ajax ( url ) {
        return fetch(url, { credentials: 'include' }).then(res => res.json()).then(result => {
            if ( !result.success ) {
                console.log(`接口错误, ${url}`);
            }
            return Promise.resolve(result);
        }).catch(e => console.log('请求出错', e));
    }

    function max ( arr, col ) {
        var max = 0;
        var len = arr.length;
        for ( var i = 1; i < len; i++ ) {
            if ( arr[i][col] > max ) {
                max = arr[i][col];
            }
        }
        return max;
    }

    function format ( num, parseint ) {
        var result = [], counter = 0;
        var fixNum = parseint ? parseFloat(num).toFixed(0) : parseFloat(num).toFixed(2);
        var numArr = (fixNum || 0).toString().split('.');
        var int = numArr[0], float = numArr[1];
        for ( var i = int.length - 1; i >= 0; i-- ) {
            counter++;
            result.unshift(int[i]);
            if ( !(counter % 3) && i !== 0 ) {
                result.unshift(',');
            }
        }

        if ( parseint ) {
            return result.join('');
        } else {
            return result.join('') + '.' + float;
        }

    }

    window.ajax = ajax;

    var isUpOrDown = (value, num) => {
        num = num?num:0;
        // 处理 箭头
        let flag = 3; 
        if (value) {
            value = '' + value;
            if (value.indexOf('-') === -1 && value.indexOf('.') > -1) {
                value *= 100;
                value = `${parseFloat(value).toFixed(num)}%`;
                flag = 1;
            } else if (value.indexOf('-') > -1) {
                value = parseFloat(value.split('-')[1] * 100);
                value = ('' + value).indexOf('.') > -1 ? `${parseFloat(value).toFixed(num)}%` : `${value}%`;
                flag = 2;
            } else {
                console.log('value',value);
                if(+value === 0){
                    value = '0%';
                    flag = 3;
                }else{
                    value *= 100;
                    value = `${parseFloat(value).toFixed(num)}%`;
                    flag = 1;
                }
            }
        } else {
            // "" undefined null  0=>number
            value = typeof value === 'number' ? '0%' : '--';
            flag = 3;
        }
        return {
            value,
            flag
        };
    };

    window.utils = {
        fnDate, fnW, max, format, isUpOrDown,getTimeDate
    };
})();