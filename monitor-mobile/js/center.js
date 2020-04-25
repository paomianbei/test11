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
	mounted(){
		let width = window.innerWidth;
		if(width < 375){
			$('.number, .dot').css({
				'font-size':'32px'
			})
		}

	},
	methods: {
		getData(){
			let _this = this;

			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		"current_amount": 364647673.32,
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
			//			"pay": 823456488.88,
			//			"jinli": 623456466.66,
			//			"scene1": 554564325.55,
			//			"scene2": 312456333.5,
			//			"scene3": 512456354.4
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
			ajax(config.channelSale).then(function (res) {
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
					channelSale[key] = utils.format(channelSale[key], true);
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
			let arr = utils.format(this.sale).toString().split("");
			//while ( arr.length < 14 ) {
			//	arr.unshift("0");
			//}

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
		data: [
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
				"saleAmount": 0,
				"orderCount": 0
			},
			{
				"regionName": "区",
				"saleAmount": 0,
				"orderCount": 0
			}
		],
		reqTime: 5 * 1000
	},
	created(){
		this.getData();
		let _this = this;
		setInterval(function () {
			_this.getData();
		}, this.reqTime);
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
			ajax(config.regionSale).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.resolve("线下大区数据获取失败");
				}
			}).then(function (res) {
				res.forEach((item, index) => {
					_this.data[index].regionName = item.regionName;
					_this.data[index].saleAmount = utils.format(item.saleAmount, true);
					_this.data[index].orderCount = utils.format(item.orderCount, true);
				});

			});

		}
	}
});

new Vue({
	el: ".meifubao",
	data: {
		data: []
	},
	created(){
		let _this = this;
		this.getData();
		setInterval(function () {
			_this.getData();
			console.log(_this.data);
		}, 5 * 1000);
	},
	methods: {
		getData(){
			let _this = this;
			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		"total": {
			//			"orderCount": 12,
			//			"saleAmount": 235435.32
			//		},
			//		"online": {
			//			"orderCount": 123,
			//			"saleAmount": 235435.32
			//		},
			//		"offline": {
			//			"orderCount": 123,
			//			"saleAmount": 235435.32
			//		}
			//	}
			//})

			ajax(config.meifubao).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.resolve("线下大区数据获取失败");
				}
			}).then(function (res) {
				_this.data = [];
				for ( let key in res ) {
					let oData = {};
					let type = "";
					switch ( key ) {
						case "total":
							type = "汇总";
							break;
						case "online" :
							type = "线上";
							break;
						case "offline" :
							type = "线下";
							break;
					}
					oData.type = type;
					oData.orderCount = utils.format(res[key].orderCount, true);
					oData.saleAmount = utils.format(res[key].saleAmount, true);
					_this.data.push(oData);
				}
			});

		}
	}
});

new Vue({
	el: ".online",
	data: {
		uv: {
			total:'',
			app:'',
			pc:'',
			wap:''
		},
		channel: {
			total:'',
			app:'',
			pc:'',
			wap:''
		},
		order: {
			total:'',
			app:'',
			pc:'',
			wap:''
		}
	},
	created(){
		let _this = this;
		this.getUV();
		this.getOrder();
		this.getChannel();
		setInterval(function(){
			_this.getUV();
			_this.getOrder();
			_this.getChannel();
		},5 * 1000)
	},

	methods: {
		getUV(){
			let _this = this;
			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		"today": 3862209,
			//		"total": 386220914824,
			//		"data": [
			//			{
			//				"type": "APP",
			//				"value": 52790930720
			//			},
			//			{
			//				"type": "PC",
			//				"value": 76269421453
			//			},
			//			{
			//				"type": "WAP",
			//				"value": 27924962781
			//			}
			//		]
			//	}
			//})
			ajax(config.totalUV)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.resolve("线下大区数据获取失败");
				}
			}).then(function (res) {
				let obj = {};
				obj.total = utils.format(res.today,true);
				res.data.forEach((item)=>{

					switch (item.type){
						case 'APP':
							obj.app = utils.format(item.value,true);
							break;
						case 'PC':
							obj.pc = utils.format(item.value,true);
							break;
						case 'WAP':
							obj.wap = utils.format(item.value,true);
							break;
					}
				})
				_this.uv = obj;
			});

		},
		getChannel(){
			let _this = this;
			//Promise.resolve( {
			//	"success": true,
			//	"data": [
			//		{
			//			"type": "APP",
			//			"value": 3011949.71
			//		},
			//		{
			//			"type": "WAP",
			//			"value": 5077187.48
			//		},
			//		{
			//			"type": "PC",
			//			"value": 9242629.12
			//		}
			//	]
			//})
			ajax(config.siteMaterialSale)
				.then(function (res) {
					if ( res.success ) {
						return res.data;
					} else {
						return Promise.resolve("线下大区数据获取失败");
					}
				}).then(function (res) {
				let obj = {};
				let total = 0;
				res.forEach(item=>{
					total += Number(item.value);
					switch (item.type){
						case 'APP':
							obj.app = utils.format(item.value,true);
							break;
						case 'PC':
							obj.pc = utils.format(item.value,true);
							break;
						case 'WAP':
							obj.wap = utils.format(item.value,true);
							break;
					}
				})
				obj.total = utils.format(total, true);
				_this.channel = obj;
			});
		},
		getOrder(){
			let _this = this;
			//Promise.resolve( {
			//	"success": true,
			//	"data": [
			//		{
			//			"type": "PC",
			//			"value": 8970144.67,
			//			"ratio": 0.12
			//		},
			//		{
			//			"type": "WAP",
			//			"value": 151024.46,
			//			"ratio": 0.24
			//		},
			//		{
			//			"type": "APP",
			//			"value": 2574550.49,
			//			"ratio": 0.32
			//		}
			//	]
			//})
			ajax(config.ratioOrder)
				.then(function (res) {
					if ( res.success ) {
						return res.data;
					} else {
						return Promise.resolve("线下大区数据获取失败");
					}
				}).then(function (res) {
				let obj = {};
				let total = 0;
				res.forEach(item=>{
					total += Number(item.value);
					switch (item.type){
						case 'APP':
							obj.app = utils.format(item.value,true);
							break;
						case 'PC':
							obj.pc = utils.format(item.value,true);
							break;
						case 'WAP':
							obj.wap = utils.format(item.value,true);
							break;
					}
				})
				obj.total = utils.format(total, true);
				_this.order = obj;
			});
		}
	}
});