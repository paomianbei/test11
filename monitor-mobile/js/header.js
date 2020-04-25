var header = new Vue({
	el: ".header .date",
	data: {
		time: "2017-04-08 00:00:00"
	},
	created() {
		let _this = this;
		this.getTime();
		setInterval(function () {
			_this.getTime();
			//console.log('===================',_this.time)
		}, 1000);
	},
	methods:{
		getTime(){

			var date = new Date();
			var year = date.getFullYear();//当前年份
			var month = date.getMonth();//当前月份
			var data = date.getDate();//天
			var hours = date.getHours();//小时
			var minute = date.getMinutes();//分
			var second = date.getSeconds();//秒
			var time = year + "-" + this.fillZero(month + 1) + "-" + this.fillZero(data) + " " + this.fillZero(hours) + ":" + this.fillZero(minute) + ":" + this.fillZero(second);
			this.time = time;
			let ding = time.split(" ")[1];
			if ( ding === "00:00:00" ) {
				window.location.reload(true);
			}



		},
		fillZero(num){
			if(num<10){
				return '0'+num
			} else {
				return String(num);
			}
		}

	}

});