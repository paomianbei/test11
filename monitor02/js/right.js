// var rightTop = new Vue({
// 	el: ".right-top",
// 	data: {
// 		"service": {
// 			"agent_abandon_count": 0,
// 			"ans_count": 0,
// 			"call_count": 0,
// 			"wait_num": 0
// 		},
// 		"phone": {
// 			"agent_abandon_count": 0,
// 			"ans_count": 0,
// 			"call_count": 0,
// 			"manual_count": 0
// 		},
// 		reqTime: 5 * 60 * 1000
// 	},
// 	created() {
// 		this.getData();
// 		let _this = this;
// 		setInterval(function(){
// 			_this.getData();
// 		},this.reqTime)
// 	},
// 	methods: {
// 		getData(){
// 			var _this = this;
// 			//var url = config.service;
// 			//fetch(url).then(function (res) {
// 			//   return res.json();
// 			//})
// 			//Promise.resolve({
// 			//	"success": true,
// 			//	"data": {
// 			//		"service": {
// 			//			"agent_abandon_count": 61,
// 			//			"ans_count": 865,
// 			//			"call_count": 1730,
// 			//			"wait_num": 926
// 			//
// 			//		},
// 			//		"phone": {
// 			//			"agent_abandon_count": 61,
// 			//			"ans_count": 865,
// 			//			"call_count": 1730,
// 			//			"manual_count": 926
// 			//
// 			//		}
// 			//	}
// 			//})
// 			// ajax(config.service).then(function (res) {
// 			// 	if ( res.success ) {
// 			// 		return res.data;
// 			// 	} else {
// 			// 		return Promise.reject("站点实物销售额获取失败");
// 			// 	}
// 			// }).then(function (data) {
// 			// 	for(var key in data.service){
// 			// 		_this.service[key] = String(utils.format(data.service[key],true))
// 			// 	}
// 			// 	for(var key in data.phone){
// 			// 		_this.phone[key] = String(utils.format(data.phone[key], true))
// 			// 	}
// 			// });
// 		}
// 	}
// });

// var rightCenter = new Vue({
// 	el:'.validOrderSale',
// 	data:{
// 		"validOrder":'',
// 		"validSale":'',
// 		"reqTime":5 * 60 * 1000
// 	},
// 	created(){
// 		this.getData()
// 		var _this = this;

// 		setInterval(function(){
// 			_this.getData()
// 		}, this.reqTime);
// 	},
// 	methods:{
// 		getData(){
// 			var _this = this;



// 			//Promise.resolve({
// 			//	success:true,
// 			//	data:{
// 			//		validOrder:123123,
// 			//		validSale:1234567689
// 			//	}
// 			//})
// 			ajax(config.validOrderSale)
// 				.then(function(res){
// 					if(res.success){
// 						return res.data
// 					} else{
// 						return Promise.reject('有效订单及销售额获取失败')
// 					}
// 				}).then(function(data){
// 					_this.validOrder = utils.format(data.validOrder, true).toString();
// 					_this.validSale = utils.format(data.validSale, true).toString();
// 				})
// 		}
// 	}
// })

var rightTop = new Vue({
	el: ".right-top .acce-bar",
	data: {},
	created() {},
	methods: {}
});

var rightBottom = new Vue({
	el: ".right-bottom .acce-bar",
	data: {},
	created() {},
	methods: {}
});

