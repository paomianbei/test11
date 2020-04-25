var rightCenter = new Vue({
	el: ".right-center",
	data: {
		"shencoupon": {
			"create_shencoupon_cnt": 0,
			"return_shencoupon_cnt": 0,
			"use_shencoupon_cnt": 0,
			"use_shencoupon_amt": 0,
			"appuse_shencoupon_cnt":0,
			"appuse_shencoupon_amt":0
		},
		"bluecoupon": {
			"create_bluecoupon_cnt": 0,
			"return_bluecoupon_cnt": 0,
			"use_bluecoupon_cnt": 0,
			"use_bluecoupon_amt": 0
		},
		"user": {
			"register_cnt": 0,
			"app_register_cnt": 0,
			"register_total": 0,
			"app_register_total": 0,
			"add_newuser_ord_cnt": 0,
			"add_app_newuser_ord_cnt": 0,
			"add_olduser_ord_cnt": 0
		},
		"shop_amt": 0,
		"mshop_amt": 0,
		"mall_amt_total": 0,
		"shop_amt_total": 0,
		"mshop_amt_total": 0,
		"mall_amt_total_tb_ratio":0,
		"shop_amt_total_tb_ratio": 0,
		"mshop_amt_total_tb_ratio": 0,
		"mall_amt_total_tb_ratioFlag": 3,
		"shop_amt_total_tb_ratioFlag": 3,
		"mshop_amt_total_tb_ratioFlag": 3
	},
	created() {
		this.getData();
		var _this = this;
		setInterval(function () {
			_this.getData();
		}, 1000);
	},
	methods: {
		getData(){
			var _this = this;
			var url = config.couponUser;
			
			// Promise.resolve({
			// 	"success": true,
			// 	// "data": {
			// 	// 	"app_register": {
			// 	// 		"num": "45678",
			// 	// 		"total": "98765432",
			// 	// 		"task": "98765432",
			// 	// 		"ratio": "0.9100000000001"
			// 	// 	},
			// 	// 	"today_register": {
			// 	// 		"num": "3456",
			// 	// 		"total": "987654",
			// 	// 		"ratio": "0.91"
			// 	// 	},
			// 	// 	"mshop_task": {
			// 	// 		"num": "9876",
			// 	// 		"total": "2345565",
			// 	// 		"task": "2345565",
			// 	// 		"ratio": "0.91"
			// 	// 	},
			// 	// 	"mshop_task_amount": {
			// 	// 		"num": "9876",
			// 	// 		"total": "88888888",
			// 	// 		"task": "2345565",
			// 	// 		"ratio": "0.91"
			// 	// 	}
			// 	// }
			// 	// "data":{
			// 	// 	"shencoupon":{
			// 	// 		"use_shencoupon_cnt":2770000,
			// 	// 		"use_shencoupon_amt":540,
			// 	// 		"return_shencoupon_cnt":688000,
			// 	// 		"create_shencoupon_cnt":225225000
			// 	// 	},
			// 	// 	"bluecoupon":{
			// 	// 		"create_bluecoupon_cnt":67034000,
			// 	// 		"use_bluecoupon_amt":38.95000,
			// 	// 		"use_bluecoupon_cnt":454000
			// 	// 	},
			// 	// 	"user":{
			// 	// 		"add_olduser_ord_cnt":247376000,
			// 	// 		"register_total":30430000,
			// 	// 		"register_cnt":"946700",
			// 	// 		"app_register_total":7202000,
			// 	// 		"add_newuser_ord_cnt":988000,
			// 	// 		"app_register_cnt":"31870000",
			// 	// 		"add_app_newuser_ord_cnt":518000
			// 	// 	}},
			// 	// 	"success":true

			// 	"data":{
			// 	"shencoupon":{
			// 		"use_shencoupon_cnt":245033,
			// 		"use_shencoupon_amt":451400.94,
			// 		"appuse_shencoupon_cnt":226441,
			// 		"appuse_shencoupon_amt":451400.94,
			// 		"create_shencoupon_cnt":830201},
			// 	"bluecoupon":{
			// 		"create_bluecoupon_cnt":301106,
			// 		"use_bluecoupon_amt":451400.94,
			// 		"use_bluecoupon_cnt":2381},
			// 	"user":{
			// 		"add_olduser_ord_cnt":40667400,
			// 		"register_total":35824400,
			// 		"register_cnt":"614200",
			// 		"app_register_total":15030800,
			// 		"add_newuser_ord_cnt":1614200,
			// 		"app_register_cnt":"406000",
			// 		"add_app_newuser_ord_cnt":1136800
			// 	}},
			// 	"success":true
			// })
			ajax(url)
                .then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("神蓝券用户数据接口获取失败");
				}
			}).then(function (data) {
				for ( var key in data ) {
					_this[key].create_shencoupon_cnt = data[key].create_shencoupon_cnt?String(utils.format(data[key].create_shencoupon_cnt, true)):0;
					_this[key].return_shencoupon_cnt = data[key].return_shencoupon_cnt?String(utils.format(data[key].return_shencoupon_cnt, true)):0;
					_this[key].use_shencoupon_cnt = data[key].use_shencoupon_cnt?String(utils.format(data[key].use_shencoupon_cnt, true)):0;
					_this[key].use_shencoupon_amt = data[key].use_shencoupon_amt?String(utils.format(data[key].use_shencoupon_amt, true)):0;
					_this[key].appuse_shencoupon_cnt = data[key].appuse_shencoupon_cnt?String(utils.format(data[key].appuse_shencoupon_cnt, true)):0;
					_this[key].appuse_shencoupon_amt = data[key].appuse_shencoupon_amt?String(utils.format(data[key].appuse_shencoupon_amt, true)):0;

					_this[key].create_bluecoupon_cnt = data[key].create_bluecoupon_cnt?String(utils.format(data[key].create_bluecoupon_cnt, true)):0;
					_this[key].return_bluecoupon_cnt = data[key].return_bluecoupon_cnt?String(utils.format(data[key].return_bluecoupon_cnt, true)):0;
					_this[key].use_bluecoupon_cnt = data[key].use_bluecoupon_cnt?String(utils.format(data[key].use_bluecoupon_cnt, true)):0;
					_this[key].use_bluecoupon_amt = data[key].use_bluecoupon_amt?String(utils.format(data[key].use_bluecoupon_amt, true)):0;

					_this[key].register_cnt = data[key].register_cnt?String(utils.format(data[key].register_cnt, true)):0;
					_this[key].app_register_cnt = data[key].app_register_cnt?String(utils.format(data[key].app_register_cnt, true)):0;
					_this[key].register_total = data[key].register_total?String(utils.format(data[key].register_total, true)):0;
					_this[key].app_register_total = data[key].app_register_total?String(utils.format(data[key].app_register_total, true)):0;
					_this[key].add_newuser_ord_cnt = data[key].add_newuser_ord_cnt?String(utils.format(data[key].add_newuser_ord_cnt, true)):0;
					_this[key].add_app_newuser_ord_cnt = data[key].add_app_newuser_ord_cnt?String(utils.format(data[key].add_app_newuser_ord_cnt, true)):0;
					_this[key].add_olduser_ord_cnt = data[key].add_olduser_ord_cnt?String(utils.format(data[key].add_olduser_ord_cnt, true)):0;
					// _this[key].ratio = String(utils.format(data[key].ratio * 100, true)) + "%";
				}
			});

			// 今日&累计渠道销售
			// Promise.resolve({
			// 	"data":{
			// 		"shop_amt": 451400.94,
			// 		"mshop_amt": 451400.94,
			// 		"mall_amt_total": 451400.94,
			// 		"shop_amt_total": 451400.94,
			// 		"mshop_amt_total": 451400.94,
			//        "mall_amt_total_tb_ratio": -0.1234,
			//        "shop_amt_total_tb_ratio": 0.1234,
			//        "mshop_amt_total_tb_ratio": 0.1234
			// 	},
			// 	"success":true
			// })
			ajax(config.channelSales)
                .then(function (res) {
					if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("今日&累计渠道销售获取失败");
				}
			}).then(function (data) {
				 for ( var key in data ) {
					 if(key.indexOf('ratio') > -1) {
							 _this[key] = utils.isUpOrDown(data[key]).value;
						    _this[key + 'Flag'] =  utils.isUpOrDown(data[key]).flag;
					 }else {
						 _this[key] = data[key]?String(utils.format(data[key], true)):0;
					 }
				}
			});
		}
	}
});
var rightBottom = new Vue({
	el: ".right-bottom",
	data: {

		"uv": 0,
		"order": 0,
		"amount": 0,
		"ratio": 0,
		"red_get": 0,
		"red_use": 0,
		"blue_get": 0,
		"blue_use": 0

		//groupon:{
		//	"uv": "45678",
		//	"order": "98732",
		//	"sale":"876342" ,
		//	"ratio": "0.91"
		//},
		//coupon:{
		//	"redGet":"1234123",
		//	"redUse":"1242342",
		//	"blueGet":"1243441",
		//	"blueUse":"12123123"
		//}

	},
	created() {
		// this.getGrouponData();
		// var _this = this;
		// setInterval(function () {
		// 	_this.getGrouponData();
		// }, 1000);
	},
	methods: {

		getGrouponData(){
			var _this = this;
			// var url = config.coupon;

			//Promise.resolve({
			//	"success": true,
			//	"data": {
			//		"uv": 888.88,
			//		"order": 666.66,
			//		"amount": 555.55,
			//		"ratio": 0.35,
			//		"red_get": 5500,
			//		"red_use": 1800,
			//		"blue_get": 6540,
			//		"blue_use": 2014
			//	}
			//})
			// ajax(url).then(function (res) {
			// 	if ( res.success ) {
			// 		return res.data;
			// 	} else {
			// 		return Promise.reject("团抢数据获取失败");
			// 	}

			// }).then(function (res) {
			// 	_this.uv = utils.format(res.uv, true).toString();
			// 	_this.order = utils.format(res.order, true).toString();
			// 	_this.amount = utils.format(res.amount / 10000).toString() + "万";
			// 	_this.ratio = (parseFloat(res.ratio * 100).toFixed(2) + "%");

			// 	_this.red_get = utils.format(res.red_get, true).toString();
			// 	_this.red_use = utils.format(res.red_use, true).toString();
			// 	_this.blue_get = utils.format(res.blue_get, true).toString();
			// 	_this.blue_use = utils.format(res.blue_use, true).toString();
			// });
		}

	}
});
