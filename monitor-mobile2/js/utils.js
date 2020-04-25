(function () {
	function fnDate (selector) {
		var date = new Date();
		var year = date.getFullYear();//当前年份
		var month = date.getMonth();//当前月份
		var data = date.getDate();//天
		var hours = date.getHours();//小时
		var minute = date.getMinutes();//分
		var second = date.getSeconds();//秒
		var time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
		return time;
	}

	function fnW (str) {
		var num;
		num = str >= 10? str : ("0" + str);
		return num;
	}

	function ajax (url) {
		return fetch(url,{credentials: 'same-origin'}).then(res => res.json()).then(result => {
			if ( !result.success ) {
				console.log(`接口错误, ${url}`);
			}
			return Promise.resolve(result);
		}).catch(e => console.log("请求出错", e));
	}

	function max (arr, col) {
		var max = 0;
		var len = arr.length;
		for ( var i = 1; i < len; i++ ) {
			if ( arr[i][col] > max ) {
				max = arr[i][col];
			}
		}
		return max;
	}

	function format (num, parseint) {
		var result = [], counter = 0;
		var numArr = (parseFloat(num).toFixed(2) || 0).toString().split(".");
		var int = numArr[0], float = numArr[1];
		for ( var i = int.length - 1; i >= 0; i-- ) {
			counter++;
			result.unshift(int[i]);
			if ( !(counter % 3) && i !== 0 ) {
				result.unshift(",");
			}
		}
		if(parseint){
			return result.join("");
		} else {
			return result.join("") + '.' + float;
		}
	}

	window.ajax = ajax;

	window.utils = {
		fnDate, fnW, max, format
	};
})();