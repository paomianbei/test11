var time = new Vue({
	el: ".header .time",
	data: {
		time: "2017-04-08 00:00:00"
	},
	created() {
		let _this = this;
		setInterval(function () {
			_this.time = utils.fnDate();
			let time = _this.time.split(" ")[1];
			if ( time === "00:00:00" ) {
				window.location.reload(true);
			}
		}, 1000);
	}
});