function randomData () {
	return Math.round(Math.random() * 10000000);
}

var center = new Vue({
	el: ".center-top",
	data: {
		sale: 0,
		orderNum: 0,
		update: 13,
		reqTime: 1 * 1000,
		orderTime: 5 * 60 * 1000,
		numTime: 3000,
		dataInterval: null,
		ratio_tb: 0,
		amount_tq: 0,
		flag: 3,
		channelSale: {
			nature: 0,
			scan: 0,
			pay: 0,
			mshop: 0,
			finance: 0,
			virtual: 0
		},
		orderAmount: {
			nature: 0,
			scan: 0,
			pay: 0,
			mshop: 0,
			finance: 0,
			virtual: 0
		}
	},
	created() {
		this.getData();
		// this.getChannel();
		let _this = this;
		setInterval(function () {
			_this.getData();
			// _this.getChannel();
		}, this.reqTime);

		//setInterval(function () {
		//	_this.getChannel();
		//}, this.orderTime);
	},
	methods: {
		getData(){
			let _this = this;
			if ( this.dataInterval ) {
				clearInterval(this.dataInterval);
				this.dataInterval = null;
			}

			//if(this.sale<200000){
			//	this.sale += 12676.12
			//}
			//
			// Promise.resolve({
			// 	"success": true,
			// 	"data": {
			// 		"current_amount": randomData(),
			// 		"last_amount": 3361067270.32,
			// 		"order_num": 123121312,
			// 		 ratio_tb: -0.1311054495529167,
			// 		//amount_tq: "0.0",
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
				// let last_amount = +res.last_amount;
				let current_amount = +res.current_amount;

				let order_num = res.order_num;
			    let amount_tq = +res.amount_tq;
				//if ( _this.sale === 0 && last_amount ) {
				//	_this.sale = last_amount;
				//}
			_this.orderNum = utils.format(Number(order_num), true);
				_this.sale = current_amount;
				_this.amount_tq = amount_tq ? utils.format(Number(amount_tq/10000)) : '--';
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
		},

		getChannel() {
			// var _this = this;

			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		channelSale: {
			//			"nature": 8288.88,
			//			"scan": 6166.66,
			//			"pay": 5525.55,
			//			"mshop": 3333.5,
			//			"finance": 5454.4,
			//			"virtual": 8858.88
			//		},
			//		orderAmount: {
			//			"nature": 8765458888,
			//			"scan": 666543366,
			//			"pay": 555565435,
			//			"mshop": 3336545,
			//			"finance": 557654344,
			//			"virtual": 1231
			//		}
			//	}
			//})
			// ajax(config.channelSale).then(function (res) {
			// 	if ( res.success ) {
			// 		return res.data;
			// 	} else {
			// 		return Promise.reject("站点实物销售额获取失败");
			// 	}
			// }).then(res => {
			// 	//console.log(res);

			// 	var orderAmount = Object.assign({}, res.orderAmount);
			// 	var channelSale = Object.assign({}, res.channelSale);

			// 	for ( var key in channelSale ) {
			// 		channelSale[key] = utils.format(channelSale[key], true);
			// 		_this.channelSale[key] = channelSale[key];
			// 	}

			// 	for ( var key in orderAmount ) {
			// 		orderAmount[key] = orderAmount[key] >= 10000? utils.format(orderAmount[key] / 10000).toString() : parseFloat(orderAmount[key] / 10000).toFixed(2).toString();
			// 		_this.orderAmount[key] = orderAmount[key];
			// 	}

			// });

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
