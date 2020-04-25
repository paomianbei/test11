(function () {
    function fnDate(selector) {
        var date = new Date();
        var year = date.getFullYear();//当前年份
        var month = date.getMonth();//当前月份
        var data = date.getDate();//天
        var hours = date.getHours();//小时
        var minute = date.getMinutes();//分
        var second = date.getSeconds();//秒
        var time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
        return time
    }

    function fnW(str) {
        var num;
        num = str >= 10 ? str : ("0" + str);
        return num;
    }

    function ajax(url) {
        return fetch(url,{credentials: 'same-origin'}).then(res => res.json()).then(result => {
            if (!result.success) {
                console.log(`接口错误, ${url}`);
            }
           return Promise.resolve(result)
        }).catch(e => console.log('请求出错', e))
    }
   
    function max(arr, col) {
        var max = 0;
        var len = arr.length;
        for (var i = 1; i < len; i++) {
            if (arr[i][col] > max) {
                max = arr[i][col];
            }
        }
        return max
    }

    function joinUrl(params) {
        var url = "";
        for(var item in params){
            url += item+"="+params[item]+"&"
        }
        return url.substring(0,url.length-1);
    }
    
    function format(num){
		if(num > 1){
            var result = [], counter = 0;
            num = (num || 0).toString().split(".")[0];
            for ( var i = num.length - 1; i >= 0; i-- ) {
                counter++;
                result.unshift(num[i]);
                if ( !(counter % 3) && i !== 0 ) {
                    result.unshift(",");
                }
            }
            return result.join("");
        }else{
            return num;
        }
    }
    
    function GetCookie(sName){
        var aCookie = document.cookie.split("; ");
        for (var i=0; i < aCookie.length; i++){
            var aCrumb = aCookie[i].split("=");
            if (sName == aCrumb[0])
            return unescape(aCrumb[1]);
        }
        return null;
    }

    function waterwave (value,date) {
        var canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 400;
        var ctx = canvas.getContext('2d');
        ctx.font = '20px microsoft yahei';
        ctx.fillStyle = 'rgba(170,187,204,0.4)';
        ctx.textAlign="center"
        ctx.rotate(35 * Math.PI / 180);
        ctx.fillText(value, 150, 20);
        // var now = new Date();
        // var date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        ctx.fillText(date.toLocaleString(), 150, 50);
        return canvas.toDataURL();
    };

    window.ajax = ajax

    window.utils = {
        fnDate, fnW, max, joinUrl, format ,GetCookie ,waterwave
    }
})()