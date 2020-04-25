function randomData () {
	return Math.round(Math.random() * 10000000);
}

var center = new Vue({
	el: ".center-top",
	data: {
		sale: 0,
		orderNum: 0,
		update: 13,
		reqTime: 1000,
		numTime: 3000,
		dataInterval: null,
		ratio_tb: 0,
		amount_tq: 0,
		flag:3
	},
	created() {
		this.getData();
		let _this = this;
		setInterval(function () {
			_this.getData();
		}, this.reqTime);
	},
	methods: {
		getData(){
			let _this = this;
			if ( this.dataInterval ) {
				clearInterval(this.dataInterval);
				this.dataInterval = null;
			}

			// Promise.resolve({
			// 	"success": true,
			// 	"data": {
			// 		"current_amount": randomData(),
			// 		"last_amount": 3361067270.32,
			// 		"order_num": 123121312,
			// 		ratio_tb: -0.1311054495529167,
			// 		amount_tq: "25078883",
			// 	}
			// })
			ajax(config.totalAmount)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("站点实物销售额获取失败");
				}
			})
			.then(res => {
				let last_amount = +res.last_amount;
				let current_amount = +res.current_amount;

				let order_num = res.order_num;
				let amount_tq = +res.amount_tq;

				if ( _this.sale === 0 && last_amount ) {
					_this.sale = last_amount;
				}

				_this.orderNum = utils.format(Number(order_num), true);
				_this.sale = current_amount;
				_this.amount_tq = utils.format(Number(amount_tq/10000));
				_this.ratio_tb = utils.isUpOrDown(res.ratio_tb).value;
				_this.flag =  utils.isUpOrDown(res.ratio_tb).flag;
				
				//_this.sale = current_amount > _this.sale? current_amount : _this.sale;

				//let gap = current_amount - last_amount;
				//if ( gap < 0 ) {
				//	_this.sale = 0;
				//}
				//let avg = gap / _this.numTimes;
				//let times = _this.numTimes;
				//if ( gap ) {
				//	var intervalFunc = setInterval(function () {
				//		gap = current_amount - _this.sale;
				//		if ( gap < 10 ) {
				//			clearInterval(intervalFunc);
				//			_this.dataInterval = null;
				//			_this.sale = current_amount;
				//			return;
				//		}
				//		if ( times === 1 ) {
				//			_this.sale += gap;
				//			clearInterval(intervalFunc);
				//			_this.dataInterval = null;
				//			return;
				//		}
				//		avg = gap / times;
				//		_this.sale += avg + (Math.random() * avg);
				//		times--;
				//	}, this.numTime);
				//	_this.dataInterval = intervalFunc;
				//}
			});
		}
	},
	computed: {
		numTimes() {
			return Math.ceil(this.reqTime / this.numTime);
		},
		saleArr() {
			// let arr = parseFloat(this.sale).toFixed(2).toString().split("");
			let arr = parseFloat(this.sale).toFixed(0).toString().split("");
			while ( arr.length < 13 ) {
				arr.unshift("0");
			}

			return arr;
		}
	},
	watch: {
		saleArr(val, prev) {
			let _this = this;
			//if ( _this.sale === 0 ) {
			//	_this.update = 13;
			//	return;
			//}
			for ( let i = 0; i < val.length; i++ ) {
				if ( val[i] !== prev[i] ) {
					_this.update = i;
					break;
				}
			}
		}
	}
});

var leftTop = new Vue({
	el: ".left-top .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var leftBottom = new Vue({
	el: ".left-bottom .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var centerCenterTop = new Vue({
	el: ".center-center-top .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var centerCenterBottom = new Vue({
	el: ".center-center-bottom .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var centerBottomTop = new Vue({
	el: ".center-bottom-top .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var centerBottomBottom = new Vue({
	el: ".center-bottom-bottom .acce-bar",
	data: {},
	created() {},
	methods: {}
});






