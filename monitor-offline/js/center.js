new Vue({
	el: ".center-top",
	data: {
		sale: 0,
		orderNum: 0,
		update: 14,
		reqTime: 1 * 1000,
		orderTime: 5 * 1000,
		numTime: 3000,
		dataInterval: null,
		channelSale: {
			pay: 0,
			jinli: 0,
			scene1: 0,
			scene2: 0,
			scene3: 0
		},
		orderAmount: {
			pay: 0,
			jinli: 0,
			scene1: 0,
			scene2: 0,
			scene3: 0
		}
	},
	created() {
		this.getData();
		this.getChannel();
		let _this = this;
		setInterval(function () {
			_this.getData();
		}, this.reqTime);

		setInterval(function () {
			_this.getChannel();
		}, this.orderTime);
	},
	methods: {
		getData(){
			let _this = this;

			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		"current_amount": 3364647673.32,
			//		"order_num": 12123343
			//	}
			//})
			ajax(config.totalAmount)
				.then(function (res) {
					if ( res.success ) {
						return res.data;
					} else {
						return Promise.reject("站点实物销售额获取失败");
					}
				}).then(res => {
				let current_amount = +res.current_amount;

				let order_num = res.order_num;


				_this.orderNum = utils.format(Number(order_num), true);
				_this.sale = current_amount;
			});
		},

		getChannel() {
			var _this = this;

			//Promise.resolve({
			//
			//	"success": true,
			//	"data": {
			//		channelSale: {
			//			"pay": 823488.88,
			//			"jinli": 623466.66,
			//			"scene1": 554325.55,
			//			"scene2": 312333.5,
			//			"scene3": 512354.4
			//		},
			//		orderAmount: {
			//			"pay": 12888.88,
			//			"jinli": 123666.66,
			//			"scene1": 12555.55,
			//			"scene2": 33233.5,
			//			"scene3": 532254.4
			//		}
			//	}
			//})
			ajax(config.channelSale)
				.then(function (res) {
					if ( res.success ) {
						return res.data;
					} else {
						return Promise.reject("站点实物销售额获取失败");
					}
				}).then(res => {
				//console.log(res);

				var orderAmount = Object.assign({}, res.orderAmount);
				var channelSale = Object.assign({}, res.channelSale);

				for ( var key in channelSale ) {
					channelSale[key] = channelSale[key] >= 10000? utils.format(channelSale[key] / 10000).toString() : parseFloat(channelSale[key] / 10000).toFixed(2).toString();
					_this.channelSale[key] = channelSale[key];
				}

				for ( var key in orderAmount ) {
					orderAmount[key] = utils.format(orderAmount[key], true);
					_this.orderAmount[key] = orderAmount[key];
				}

			});

		}
	},
	computed: {
		numTimes() {
			return Math.ceil(this.reqTime / this.numTime);
		},
		saleArr() {
			let arr = parseFloat(this.sale).toFixed(2).toString().split("");
			while ( arr.length < 14 ) {
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

new Vue({
	el: ".center-center",
	data: {
		data:[
			{
				"regionName": "区",
				"saleAmount":0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount": 0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount": 0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount":0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount": 0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount": 0,
				"orderCount": 0
			}
		],
		reqTime: 1 * 60 * 1000
	},
	created(){
		this.getData();
		let _this = this;
		setInterval(function(){
			_this.getData();
		},this.reqTime)
	},
	methods: {
		getData(){
			let _this = this;
			//Promise.resolve({
			//	"success": true,
			//	"data": [
			//		{
			//			"regionName": "华北一区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 212354
			//		},
			//		{
			//			"regionName": "华北二区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 231254
			//		},
			//		{
			//			"regionName": "东北大区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 2423454
			//		},
			//		{
			//			"regionName": "华北一区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 223454
			//		},
			//		{
			//			"regionName": "华北二区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 252344
			//		},
			//		{
			//			"regionName": "东北大区",
			//			"saleAmount": 8970144.67,
			//			"orderCount": 223454
			//		}
			//	]
			//})
			ajax(config.regionSale)
			.then(function(res){
				if(res.success){
					return res.data;
				} else {
					return Promise.resolve('线下大区数据获取失败')
				}
			}).then(function(res){
				res.forEach((item, index)=>{
					_this.data[index].regionName = item.regionName;
					_this.data[index].saleAmount = +item.saleAmount >= 10000? utils.format(+item.saleAmount / 10000).toString() : parseFloat(+item.saleAmount / 10000).toFixed(2).toString();
					_this.data[index].orderCount = utils.format(item.orderCount, true);
				})

			})

		}
	}
});