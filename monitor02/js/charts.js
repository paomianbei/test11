(function () {
	var baseurl = "http://optool.ic.pre.gomeplus.com";
	// reload
	setInterval(function () {
		window.location.reload(true);
	}, 1000 * 60 * 30);

	var barColor = [
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#0050a3"
		}, {
			offset: 1,
			color: "#75b6e4"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#cf0080"
		}, {
			offset: 1,
			color: "#eb69a3"
		}]),

		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#ec7e3f"
		}, {
			offset: 1,
			color: "#f9cb2d"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#00a20e"
		}, {
			offset: 1,
			color: "#75e473"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#7232ff"
		}, {
			offset: 1,
			color: "#c353ff"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#ecc33f"
		}, {
			offset: 1,
			color: "#d4f92d"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#00ceab"
		}, {
			offset: 1,
			color: "#69eaeb"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#b54800"
		}, {
			offset: 1,
			color: "#e97b00"
		}])
	];
	var doubleBarColor = [
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#0028a4"
		}, {
			offset: 1,
			color: "#235fca"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#84002c"
		}, {
			offset: 1,
			color: "#c70156"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#da3f10"
		}, {
			offset: 1,
			color: "#e9780b"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#003504"
		}, {
			offset: 1,
			color: "#007508"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#2c0063"
		}, {
			offset: 1,
			color: "#4f0099"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#c76609"
		}, {
			offset: 1,
			color: "#deb706"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#004b5a"
		}, {
			offset: 1,
			color: "#01a5ac"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#4c1106"
		}, {
			offset: 1,
			color: "#952a06"
		}])
	];
	var barLabelColor = ["#235fca", "#c70156", "#e9780b", "#007508", "#4f0099", "#deb706", "#01a5ac", "#b54800"];

	function getDefaultLineOption () {

		return {
			grid: {
				top: 30,
				left: 0,
				right: 40,
				bottom: 0,
				containLabel: true
			},
			tooltip: {
				trigger: "axis",

			},
			legend: {
				show: true,
				top: 0,
				left: "0",
			},
			xAxis: {
				type: "category",

			},
			yAxis: {
				type: "value",
				boundaryGap: [0, "100%"],
				show: false,
				max: 1,
				min: 0.3
			},
			color: ["#d5971b", "#01e7ec"],
			series: [{
				type: "line",
				smooth: true,
				symbol: "none",
				sampling: "average",
				//itemStyle: {
				//	normal: {
				//		color: '#d5971b',
				//
				//	}
				//},
				lineStyle: {
					normal: {
						color: "#d5971b",
						width: 1
					}
				},
				areaStyle: {
					normal: {
						color: "#3d4092"
					}
				},
			}, {
				type: "line",
				smooth: true,
				symbol: "none",
				sampling: "average",
				//itemStyle: {
				//	normal: {
				//		color: '#01e7ec'
				//	}
				//},
				lineStyle: {
					normal: {
						color: "#01e7ec",
						width: 1
					}
				},
				areaStyle: {
					normal: {
						color: "#0068ad"
					}
				},
			}]
		};

	}

	function getDefaultBarOption () {
		return {
			grid: {
				top: 20,
				left: 20,
				right: 20,
				bottom: 0,
				containLabel: true
			},
			color: barColor,
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			xAxis: {
				type: "value",
				max: "dataMax",
				show: false
			},

			yAxis: {
				type: "category",
				axisTick: { show: false },
				axisLabel: {
					color: barLabelColor
				}

			},

			series: [{
				// name: '直接访问',
				type: "bar",
				barWidth: "80%",
				barMinHeight:0.001,

				label: {
					normal: {
						show: true,
						position: "right",
						formatter: "{c}万",
						color: barLabelColor
					}
				},
				//color: barLabelColor,
				itemStyle: {
					normal: {
						// color: barColor
					}
				},
				markPoint: {

					show: true,
					symbol: "roundRect",
					symbolOffset: ["140%", 0],
					itemStyle: {
						normal: {
							color: "rgba(255,255,255,0)",

						}
					},

					label: {
						normal: {
							lineHeight: 17,
							//formatter: function (params) {
							//
							//	console.log('aaa',params.value)
							//
							//	return "30%";
							//},
							show: true,
							position: "inside",
							backgroundColor: "#002060",
							borderColor: "#1f85b7",
							borderWidth: 1,
							borderRadius: 4,
							padding: [2,6],

							color: "#fff"

						}

					},
					data: []

				}
			}]
		};
	}

	function getDoubleBarOption () {
		return {
			grid: {
				top: 20,
				left: 20,
				right: 20,
				bottom: 0,
				containLabel: true
			},
			color: barColor,
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			xAxis: [{
				type: "value",
				max: "maxData",
				show: false,
				min: 0,
			}, {
				type: "value",
				max: "maxData",
				show: false,
				min: 0
			}],

			yAxis: {
				type: "category",
				axisTick: { show: false },
				axisLabel: {
					color: ["#00ffff"]
				}

			},

			series: [{
				type: "bar",
				xAxisIndex: 0,
				label: {
					normal: {
						show: true,
						position: "right",
						color: "#00ffff"

					}
				},
				markPoint: {
					show: true,
					symbol: "roundRect",
					symbolOffset: ["150%", 0],
					itemStyle: {
						normal: {
							color: "rgba(255,255,255,0)",

						}
					},
					label: {
						normal: {
							lineHeight: 14,
							
							show: true,
							position: "inside",
							backgroundColor: "#002060",
							borderColor: "#1f85b7",
							borderWidth: 1,
							borderRadius: 4,
							padding: [2,6],
							color: "#fff"
						}
					},
					data: []
				}
			}, {
				type: "bar",
				xAxisIndex: 1,
				label: {
					normal: {
						show: true,
						position: "right",
						color: "#00ffff"
					}
				},

				itemStyle: {
					normal: {
						color: ""
					}
				},
				markPoint: {
					show: true,
					symbol: "roundRect",
					symbolOffset: ["150%", 0],
					itemStyle: {
						normal: {
							color: "rgba(255,255,255,0)",

						}
					},
					label: {
						normal: {
							lineHeight: 14,
							//formatter: function (params) {
							//
							//	console.log('aaa',params.value)
							//
							//	return "30%";
							//},
							show: true,
							position: "inside",
							backgroundColor: "#002060",
							borderColor: "#1f85b7",
							borderWidth: 1,
							borderRadius: 4,
							padding: [4, 6],
							color: "#fff"
						}
					},
					data: []
				},
			}]
		};
	}

	function Chart (selector, option) {
		if ( option == null ) {
			option = {};
		}
		this._opt = option;
		this.dom = document.querySelector(selector);
		this.selector = selector;
		this.instance = echarts.init(this.dom, null, this._getSize());
		// auto resize
		var _this = this;
		var resizeEvent = new Event("resize");
		_this.resizeEventHandler = function () {
			_this.instance.resize(_this._getSize());
			// _this.option && _this.instance.setOption(_this.option);
			//_this.resetAttach();
		};
		_this.dom.addEventListener("resize", _this.resizeEventHandler, false);
		window.addEventListener("resize", function () {
			_this.dom.dispatchEvent(resizeEvent);
		});

	}

	Chart.prototype._getSize = function () {

		var option = this._opt;
		if ( typeof option.width === "number" ) {
			option.width = {
				value: option.width || 0,
				lock: false
			};
		}
		if ( typeof option.height === "number" ) {
			option.height = {
				value: option.height,
				lock: false
			};
		}
		this._getWidth = function () {
			return this.dom.clientWidth;// + (this._opt.width.value || 0);
		};
		this._getHeight = function () {
			return this.dom.clientHeight; //+ (this._opt.height.value || 0);
		};
		this._width = this._getWidth();
		this._height = this._getHeight();
		//option.width.lock && (this._getWidth = function () {
		//	return this._width;
		//});
		//option.height.lock && (this._getHeight = function () {
		//	return this._height;
		//});
		this._getSize = function () {
			return ({
				width: this._getWidth(),
				height: this._getHeight()
			});
		};
		return this._getSize();
	};
	Chart.prototype.load = function (data, buildOption, type = undefined,label,kind) {
		var chart = this.instance;
		var _this = this;
		var option = buildOption(data, type,label,kind);
		if ( option ) {
			option && chart.setOption(option);
			_this.option = option;
		}
	};

	Chart.prototype.dispatch = function (action) {
		action(this.instance, this.option);
	};
	window.Chart = Chart;

	function init () {
		//left
		var electricRealtimeChart = new Chart(".left .electric-realtime");
		var electricSummeryChart = new Chart(".left .electric-summery");

		//center
		var saleTaskRealtimeChart = new Chart(".saleTask-realtime");
		var saleTaskSummeryChart = new Chart(".saleTask-summery");

		var noneleRealtimeChart = new Chart(".nonelectric-realtime");
		var noneleSummeryChart = new Chart(".nonelectric-summery");

		// right
		//var decorationChart = new Chart(".decoration");
		// var applianceChart = new Chart(".appliance");
		var platformRealtimeChart = new Chart(".platform-realtime");
		var platformSummeryChart = new Chart(".platform-summery");

		// var baihuoCargoChart = new Chart(".center .baihuoCargo");

		// right;
		//var serviceRateChart = new Chart(".right .serviceRate");
		// var jiandianCargoChart = new Chart(".right .jiadianCargo");
		// var baihuoSaleChart = new Chart(".center .baihuoSale");


		var interval = 1000 * 60 * 3;

		function loadChart () {
			// 1.销售任务
			getSaleTask().then(function (data) {
				var dataNormal = Object.assign([], data);
				saleTaskRealtimeChart.load(dataNormal, buildSaleOption,true,"销售任务(万)");
				saleTaskSummeryChart.load(dataNormal, buildSaleOption,true,"销售任务(万)",'total');
			});
			
			// 2.电器城订单
			// getJiadianCate().then(function (data) {
			// 	jiandianSaleChart.load(data, buildCateSaleOption,true);
			// 	// jiandianCargoChart.load(data, buildCateCargoOption);
			// });
			getJiadianCate().then(function (data) {
				electricRealtimeChart.load(data, buildSaleOption,true,"销售额");
				electricSummeryChart.load(data, buildSaleOption,true,"销售额",'total');
			});

			// 3.平台家电
			// getPlatformCate().then(function (data) {
			// 	applianceChart.load(data, buildCateSaleOption,true);
			// });
			getPlatformCate().then(function (data) {
				platformRealtimeChart.load(data, buildSaleOption,true,"销售额");
				platformSummeryChart.load(data, buildSaleOption,true,"销售额",'total');
			});

			// 4.百货城订单
			// getBaihuoCate().then(function (data) {
			// 	baihuoSaleChart.load(data, buildCateSaleOption,true);
			// 	//decorationChart.load(data, buildDecorationApplianceOption, "家居家装");
			// 	// applianceChart.load(data, buildDecorationApplianceOption, "平台家电");
			// });
			getBaihuoCate().then(function (data) {
				noneleRealtimeChart.load(data, buildSaleOption,true,"销售额");
				noneleSummeryChart.load(data, buildSaleOption,true,"销售额",'total');
			});
			

			// 百货城库存
			// getBaihuoCargo().then(function (data) {
			// 	// baihuoCargoChart.load(data, buildCateCargoOption, true);
			// });

			//getServiceRate().then(function (data) {
			//	serviceRateChart.load(data, buildServiceRateOption);
			//});

		}

		loadChart();

		//function loadChartFast () {
		//
		//}

		//loadChartFast();

		var timer = setInterval(loadChart, interval);
		//var timer2 = setInterval(loadChartFast, 1000);
		return timer;
	}

	setTimeout(()=>{
		init();
	},0)

	// 获取数据部分
	// 1.销售任务
	function getSaleTask () {
		//return fetch(config.saleTask).then(function (res) {
		//	return res.json();
		//})
		// return Promise.resolve({
		// 	"success": true,
		// 	data: [
		// 		{
		// 			type: "非电器",
		// 			amount: 4569139.59,
		// 			amount_tq: 8328569,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.4514,
		// 			total_amount: 447458603,
		// 			total_amount_tq: 8328569,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 52.7257
		// 		},
		// 		{
		// 			type: "电器城",
		// 			amount: 900877.99,
		// 			amount_tq: 10740366,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9161,
		// 			total_amount: 770177187,
		// 			total_amount_tq: 10740366,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 70.7087
		// 		},
		// 		{
		// 			type: "平台家电",
		// 			amount: 10822068.3,
		// 			amount_tq: 8809461,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: 0.22849999999999993,
		// 			total_amount: 770177187,
		// 			total_amount_tq: 8809461,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 86.4261
		// 		}
		// 	]
		// })

		return ajax(config.saleTask)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取销售任务失败");
				}
			});
	}
	// 2.电器城订单
	function getJiadianCate () {
		//return fetch(config.jiadianCate).then(function (res) {
		//	return res.json();
		//})
		// return Promise.resolve({
		// 	"success": true,
		// 	"data": [
		// 		{
		// 			type: "冰洗",
		// 			amount: 91678,
		// 			amount_tq: 1739639,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9473,
		// 			total_amount: 43601608,
		// 			total_amount_tq: 1739639,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 24.0636
		// 		},
		// 		{
		// 			type: "厨卫",
		// 			amount: 95986,
		// 			amount_tq: 240573.00000000003,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.601,
		// 			total_amount: 10347677,
		// 			total_amount_tq: 240573.00000000003,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 42.0126
		// 		},
		// 		{
		// 			type: "生活家电",
		// 			amount: 47615.9,
		// 			amount_tq: 115404,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.5873999999999999,
		// 			total_amount: 6001000,
		// 			total_amount_tq: 115404,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 50.9999
		// 		},
		// 		{
		// 			type: "彩电",
		// 			amount: 116672.9,
		// 			amount_tq: 1762862,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9338,
		// 			total_amount: 27330201,
		// 			total_amount_tq: 1762862,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 14.5033
		// 		},
		// 		{
		// 			type: "智能",
		// 			amount: 151500.82,
		// 			amount_tq: 332361.99999999994,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.5442,
		// 			total_amount: 23450540,
		// 			total_amount_tq: 332361.99999999994,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 69.5572
		// 		},
		// 		{
		// 			type: "电脑",
		// 			amount: 137002.77,
		// 			amount_tq: 2547597,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9462,
		// 			total_amount: 487010429,
		// 			total_amount_tq: 2547597,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 190.1646
		// 		},
		// 		{
		// 			type: "空调",
		// 			amount: 170090,
		// 			amount_tq: 925802,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.8163,
		// 			total_amount: 27756758,
		// 			total_amount_tq: 925802,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 28.9813
		// 		},
		// 		{
		// 			type: "通讯",
		// 			amount: 90511.6,
		// 			amount_tq: 3076127,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9706,
		// 			total_amount: 144678974,
		// 			total_amount_tq: 3076127,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 46.0328
		// 		}
		// 	]
				
		// })
		return ajax(config.jiadianCate)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取家电城销售及库存失败");
				}
			});
	}
	// 3.平台家电
	function getPlatformCate () {
		//return fetch(config.jiadianCate).then(function (res) {
		//	return res.json();
		//})
		// return Promise.resolve({
		// 	"success": true,
		// 	"data": [
		// 		{
		// 			type: "冰洗",
		// 			amount: 128350,
		// 			amount_tq: 1045361,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.8772,
		// 			total_amount: 43601608,
		// 			total_amount_tq: 1045361,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 40.7096
		// 		},
		// 		{
		// 			type: "厨卫",
		// 			amount: 47000,
		// 			amount_tq: 47704.00000000001,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.014800000000000035,
		// 			total_amount: 10347677,
		// 			total_amount_tq: 47704.00000000001,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 215.9142
		// 		},
		// 		{
		// 			type: "生活家电",
		// 			amount: 37696.7,
		// 			amount_tq: 54604,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.3096,
		// 			total_amount: 6001000,
		// 			total_amount_tq: 54604,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 108.9004
		// 		},
		// 		{
		// 			type: "彩电",
		// 			amount: 51226.8,
		// 			amount_tq: 3307933,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9845,
		// 			total_amount: 27330201,
		// 			total_amount_tq: 3307933,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 7.2620000000000005
		// 		},
		// 		{
		// 			type: "智能",
		// 			amount: 83011.6,
		// 			amount_tq: 19521,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: 3.2523999999999997,
		// 			total_amount: 23450540,
		// 			total_amount_tq: 19521,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 1200.2981
		// 		},
		// 		{
		// 			type: "电脑",
		// 			amount: 8812402.9,
		// 			amount_tq: 1416275,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: 5.2222,
		// 			total_amount: 487010429,
		// 			total_amount_tq: 1416275,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 342.8671
		// 		},
		// 		{
		// 			type: "空调",
		// 			amount: 42585,
		// 			amount_tq: 931935,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.9543,
		// 			total_amount: 27756758,
		// 			total_amount_tq: 931935,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 28.784
		// 		},
		// 		{
		// 			type: "通讯",
		// 			amount: 1624794.2,
		// 			amount_tq: 1986128,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.18189999999999995,
		// 			total_amount: 144678974,
		// 			total_amount_tq: 1986128,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 71.8447
		// 		}
		// 	]
		// })
		return ajax(config.platformJiadianCate)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取平台家电订单&销售完成情况失败");
				}
			});
	}
	// 4.百货城订单
	function getBaihuoCate () {
		//return fetch(config.baihuoCate).then(function (res) {
		//	return res.json();
		//})
		// return Promise.resolve({
		// 	"success": true,
		// 	"data": [
		// 		{
		// 			type: "国美超市百货",
		// 			amount: 3896128.18,
		// 			amount_tq: 6269961,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.37860000000000005,
		// 			total_amount: 199006845,
		// 			total_amount_tq: 6269961,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 30.7397
		// 		},
		// 		{
		// 			type: "国美新业务",
		// 			amount: 171786.5,
		// 			amount_tq: 1192320,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.8559,
		// 			total_amount: 184450393,
		// 			total_amount_tq: 1192320,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 153.6987
		// 		},
		// 		{
		// 			type: "家具家装",
		// 			amount: 560578.31,
		// 			amount_tq: 866288,
		// 			order: null,
		// 			amount_task: null,
		// 			ratio: null,
		// 			ratio_tb: -0.3529,
		// 			total_amount: 64001365,
		// 			total_amount_tq: 866288,
		// 			total_ratio: 0,
		// 			total_ratio_tb: 72.88
		// 		}
		// 	],
				
		// })

		return ajax(config.baihuoCate)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取百货城订单&销量完成情况失败");
				}
			});
	}

	// 百货城库存
	// function getBaihuoCargo () {

	// 	//return Promise.resolve({
	// 	//	"success": true,
	// 	//	"data": [
	// 	//		{
	// 	//			"type": "彩电",
	// 	//			"order": 1111,
	// 	//			"amount": 1111111.37,
	// 	//			"stockout": 111,
	// 	//			"arrive": 1111,
	// 	//			"ratio": 0.1
	// 	//		}
	// 	//	]
	// 	//})
	// 	return ajax(config.baihuoCargo)
	// 		.then(function (res) {
	// 			if ( res.success ) {
	// 				return res.data;
	// 			} else {
	// 				return Promise.reject("获取百货城库存失败");
	// 			}

	// 		});
	// }

	//function getServiceRate () {
	//	//return fetch(config.ansRatio).then(function (res) {
	//	//	return res.json();
	//	//})
	//	//return Promise.resolve({
	//	//	"success": true,
	//	//	"data": {
	//	//
	//	//		"phone": [
	//	//			0.6,
	//	//			0.8,
	//	//			0.7,
	//	//			0.9,
	//	//			0.6,
	//	//			1,
	//	//			0.7,
	//	//			0.9,
	//	//			0.6,
	//	//			0.8,
	//	//			0.7,
	//	//			0.9
	//	//
	//	//		],
	//	//		"service": [
	//	//			0.7,
	//	//			0.9,
	//	//			0.6,
	//	//			0.8,
	//	//			0.7,
	//	//			0.9,
	//	//			0.6,
	//	//			0.8,
	//	//			0.7,
	//	//			0.9,
	//	//			0.6,
	//	//			0.8
	//	//		]
	//	//	}
	//	//
	//	//})
	//	return ajax(config.ansRatio).then(function (res) {
	//		if ( res.success ) {
	//			return res.data;
	//		} else {
	//			return Promise.reject("获取客服数据失败");
	//		}
	//	});
	//}

	function buildSaleOption (data,showTq,label,kind) {
		var defaultSaleTaskBarOption = getDefaultBarOption();
		var ydata = [];
		var sdata = [];
		var values = [];
		var ratios = [];
		var tqs = [];
		var tasks = [];
		var amountKey = kind?kind+'_amount':'amount';
		var amounttqKey = kind?kind+'_amount_tq':'amount_tq';
		var ratio_tbkey =  kind?kind+'_ratio_tb':'ratio_tb';
		

		for ( var i = 0, len = data.length; i < len; i++ ) {
			var value = (data[i][amountKey] / 10000).toFixed(2);
			var tqamount = (data[i][amounttqKey] / 10000).toFixed(2);
			values.push(value);
			ydata.unshift({
				value: data[i].type,
				textStyle: {
					color: "#00ffff"//barLabelColor[i]
				}
			});

			if(data[i].ratio){
                ratios.push(utils.format(+data[i].ratio * 100, true) + "%");
            } else {
                ratios.push( "- %");
			}
			
			tqs.push(data[i][ratio_tbkey]);
			tasks.push(data[i].task);

			sdata.unshift({
				value: value,
				tqamount:tqamount,
				itemStyle: {
					normal: {
						color: barColor[i]
					}
				}
			});
		}
		if ( values.length ) {
			var maxval = Math.max.apply(null, values);
			var max = (maxval && maxval.toString()) || "0.00";
			var len = max.indexOf(".")? max.length - 0.8 : max.length;

			defaultSaleTaskBarOption.grid.top = 10;
			defaultSaleTaskBarOption.grid.bottom = 0;
			defaultSaleTaskBarOption.grid.right = len * 10 + 120;
			defaultSaleTaskBarOption.yAxis.data = ydata;
			defaultSaleTaskBarOption.series[0].data = sdata;

			defaultSaleTaskBarOption.series[0].markPoint.symbolOffset = [len * 10 + 65, 0];

			for ( let i = 0, len = values.length, index = len - 1; i < len; i++ ) {

				let dataObj = {};

				dataObj.yAxis = len - i - 1;

				if ( +tasks[i] !== 0 ) {
					dataObj.xAxis = values[i];
				}

				dataObj.ratio = ratios[i];
				dataObj.tq = tqs[i];

				defaultSaleTaskBarOption.series[0].markPoint.data.push(dataObj);

				defaultSaleTaskBarOption.series[0].markPoint.label.normal.formatter = function (params) {
					var str;
					var flag = utils.isUpOrDown(params.data.tq).flag;
					var tq = utils.isUpOrDown(params.data.tq).value;
					if(showTq){
						//  1: "正" 绿 上升 2："负" 红色 下降 3:"--"
						if(flag === 1){
							console.log();
							str = [
								// `{a|完成 }{a|${params.data.ratio}}`,
								`{a|同比 }{a|${tq}}{c|↑}`
							].join('\n');
						};
						if(flag === 2){
							str = [
								// `{a|完成 }{a|${params.data.ratio}}`,
								`{a|同比 }{a|${tq}}{b|↓}`
							].join('\n');
						}
						if(flag === 3){
							str = [
								// `{a|完成 }{a|${params.data.ratio}}`,
								`{a|同比 }{a|${tq}}`
							].join('\n');
						}
					}else{
						str = utils.format(+params.data.ratio * 100, true) + "%";
					}
					return str;
				};

				defaultSaleTaskBarOption.series[0].markPoint.label.normal.rich =  {
					a: {
						color: '#fff'
					},
					b: {
						color: 'red',
						fontSize: 14,
					},
					c:{
						color: 'Lime'
					}
				}
			}

			defaultSaleTaskBarOption.barCategoryGap = 20;
			defaultSaleTaskBarOption.series[0].label.normal.formatter = function (opt) {

				var val = Number(opt.value);
				val = utils.format(Number(val));
				return String(val) + "万";
			};
			defaultSaleTaskBarOption.tooltip.formatter = function (params) {
				var str;
				if(showTq){
					str = `${params[0].name} : <br />
						2019年${label} : ${params[0].value} <br />
						2018年${label} : ${params[0].data && params[0].data.tqamount && params[0].data.tqamount?params[0].data.tqamount:0} <br />
						`;
				}else{
					str = `${params[0].name} : <br />
						${`销售任务(万)`} : ${params[0].value} <br />
					`;
				}
				return str;
			};
		}
		return defaultSaleTaskBarOption;
	}

	function buildCateSaleOption (data,showTq) {
		var defaultCateSaleOption = getDoubleBarOption();
		var types = [],
			orders = [],
			amounts = [],
			ratios = [],
			bursts = [],
			burstMarks = [],
			tqamounts = [],
			tqs = [];
		for ( let i = 0, len = data.length; i < len; i++ ) {

			//418 整体过滤汽车用品
			// if ( data[i].type === "汽车用品" ) continue;

			// if ( data[i].type !== "家居家装" && data[i].type !== "平台家电" ) {
				types.push(data[i].type);
				orders.push(data[i].order);
				amounts.push((+data[i].amount / 10000).toFixed(2));
				if(showTq){
					tqamounts.push((data[i].amount_tq / 10000).toFixed(2));
					data[i].tqamounts = tqamounts;
				}

				if ( data[i].burst ) {
					bursts.push(data[i].burst);
					burstMarks.push(data[i].burst.amount_ratio);
				} else {
					bursts.push(false);
					burstMarks.push(false);
				}

				if(data[i].ratio){
					ratios.push(utils.format(+data[i].ratio * 100, true) + "%");
				} else {
					ratios.push( "- %");
				}

				tqs.push(data[i].ratio_tb);

				//ratio里少放一个汽车用品
				// if ( data[i].type !== "汽车用品" ) {
				// 	ratios.push(data[i].ratio);
				// }

			// }

		}
		

		var maxval = Math.max.apply(null, amounts);
		var max = (maxval && maxval.toString()) || "";
		var len = max.indexOf(".")? max.length - 0.8 : max.length;

		defaultCateSaleOption.grid.right = len * 10 + 120;
		defaultCateSaleOption.grid.bottom = 20;
		defaultCateSaleOption.grid.top = -20;
		defaultCateSaleOption.series[1].markPoint.symbolOffset = [len * 10 + 65, 0];
		defaultCateSaleOption.series[0].markPoint.symbolOffset = [len * 10 + 65, 0];

		var ydata = [],
			xdata1 = [],
			xdata2 = [];

		for ( let i = 0, len = amounts.length, index = len - 1; i < len; i++ ) {

			if ( bursts[i] ) {
				ydata.unshift({
					value: types[i],
					textStyle: {
						color: "#da3f10"
					}
				});
			} else {
				ydata.unshift({
					value: types[i],
					textStyle: {
						color: "#00ffff"//barLabelColor[i]
					}
				});
			}

			xdata1.unshift({
				value: orders[i],
				burst: bursts[i],
				itemStyle: {
					normal: {
						color: doubleBarColor[i]
					}
				}
			});
			defaultCateSaleOption.series[0].label.normal.formatter = function (params) {
				var str = String(utils.format(orders[index], true));
				index--;
				if ( index < 0 ) index = len - 1;
				return str;
			};

		}

		for ( let i = 0, len = amounts.length, index = len - 1; i < len; i++ ) {
			xdata2.unshift({
				value: amounts[i],
				tqamount:tqamounts[i],
				itemStyle: {
					normal: {
						color: barColor[i]
					}
				}
			});

			defaultCateSaleOption.series[1].label.normal.formatter = function (params) {
				var str = String(utils.format(amounts[index])) + "万";
				index--;
				if ( index < 0 ) index = len - 1;
				return str;
			};
		}

		//index 的长度 -1， 多减一个汽车用品
		let mark = false;
		for ( let i = 0, len = amounts.length, index = len - 1; i < len; i++ ) {

			//汽车用品略过
			if ( types[len - i - 1] === "汽车用品" ) {
				index--;
				mark = true;
				continue;
			}

			//任务完成率
			let dataObj = {};
			dataObj.xAxis = amounts[len - 1 - i];
			dataObj.yAxis = i;
			dataObj.tq = tqs[len - 1 - i];
			dataObj.ratio = ratios[len - 1 - i];
			

			defaultCateSaleOption.series[1].markPoint.data.push(dataObj);

			defaultCateSaleOption.series[1].markPoint.label.normal.formatter = function (params) {
				var str;
				var flag = utils.isUpOrDown(params.data.tq).flag;
				var tq = utils.isUpOrDown(params.data.tq).value;
				if(showTq){
					//  1: "正" 绿 上升 2："负" 红色 下降 3:"--"
					if(flag === 1){
						console.log();
						str = [
							`{a|完成 }{a|${params.data.ratio}}`,
							`{a|同比 }{a|${tq}}{c|↑}`
						].join('\n');
					};
					if(flag === 2){
						str = [
							`{a|完成 }{a|${params.data.ratio}}`,
							`{a|同比 }{a|${tq}}{b|↓}`
						].join('\n');
					}
					if(flag === 3){
						str = [
							`{a|完成 }{a|${params.data.ratio}}`,
							`{a|同比 }{a|${tq}}`
						].join('\n');
					}
				}else{
					str = utils.format(+params.data.ratio * 100, true) + "%";
				}
				return str;
			};

			defaultCateSaleOption.series[1].markPoint.label.normal.rich =  {
				a: {
					color: '#fff'
				},
				b: {
					color: 'red'
				},
				c:{
					color: 'Lime'
				}
			}
		}

		//添加爆品率的markpoint

		defaultCateSaleOption.series[0].markPoint.label.normal.color = "#f00";

		for ( let i = 0, len = burstMarks.length; i < len; i++ ) {

			let obj = {};

			obj.yAxis = len - 1 - i;
			obj.burst = bursts[i];

			if ( burstMarks[i] ) {
				obj.xAxis = orders[i];
			}

			defaultCateSaleOption.series[0].markPoint.data.push(obj);

			defaultCateSaleOption.series[0].markPoint.label.normal.formatter = function (params) {

				let str = `爆品：${utils.format(+params.data.burst.amount_ratio * 100, true)}%`;

				return str;
			};

		}

		//defaultCateSaleOption.tooltip.formatter = function (params) {
		//	var str = "";
		//
		//	str += params[0].name + ' :' + '<br/>';
		//	params.forEach(function (item) {
		//		str += "<span style=\"display:inline-block;margin-right:5px;margin-top:5px;border-radius:10px;width:9px;height:9px;background-color:" + item.color.colorStops[0].color + "\"></span>";
		//		str += item.seriesName + ": " + utils.format(item.value);
		//		str += "<br />";
		//	});
		//
		//	return str;
		//};
		//defaultCateSaleOption.tooltip.formatter = "{b}: <br /> {a0}: {c0} <br /> {a1}: {c1}";

		//618增加爆品纬度
		defaultCateSaleOption.tooltip.formatter = function (params) {
			var str;
			if(showTq){
				str = `${params[0].name} : <br />
					${params[0].seriesName} : ${params[0].value} <br />
					${params[1].seriesName} : ${params[1].value} <br />
					${`2018年销售额(万)`} : ${params[1].data && params[1].data.tqamount && params[1].data.tqamount?params[1].data.tqamount:0} <br />
					`;
			}else{
				str = `${params[0].name} : <br />
					${params[0].seriesName} : ${params[0].value} <br />
					${params[1].seriesName} : ${params[1].value} <br />
					`;
			}

			if ( params[0].data.burst ) {
				let burst = params[0].data.burst;

				str += `
					爆品订单数量：${burst.order} <br />
					爆品销售金额(万)：${(burst.amount / 10000).toFixed(2)} 	<br />
					爆品订单占比：${(burst.order_ratio * 100).toFixed(2)}% <br />
					爆品销售金额占比：	${(burst.amount_ratio * 100).toFixed(2)}% <br />
				`;
			}

			return str;
		};

		defaultCateSaleOption.series[0].name = "2019年订单量";
		defaultCateSaleOption.series[1].name = "2019年销售额(万)";
		defaultCateSaleOption.series[0].data = xdata1;
		defaultCateSaleOption.series[1].data = xdata2;
		defaultCateSaleOption.yAxis.data = ydata;
		return defaultCateSaleOption;

	}

	function buildDecorationApplianceOption (data, type) {
		var defaultCateSaleOption = getDoubleBarOption();

		var ydata, xdata1, xdata2;

		for ( let i = 0, len = data.length; i < len; i++ ) {
			if ( data[i].type === type ) {
				let item = data[i];
				let len = item.amount && item.amount.toString().indexOf(".")? item.amount.toString().length - 0.8 : item.amount.toString().length;
				defaultCateSaleOption.grid.right = len * 10 + 60;
				defaultCateSaleOption.grid.bottom = type === "平台家电"? 50 : 0;
				defaultCateSaleOption.grid.top = type === "平台家电"? -20 : 0;
				defaultCateSaleOption.series[1].markPoint.symbolOffset = [len * 10 + 10, 0];

				let burst = item.burst;

				if ( burst ) {
					ydata = {
						value: item.type,
						textStyle: {
							color: "#da3f10"
						}
					};
					//console.log('123123123',item.order)
					xdata1 = {
						value: item.order,
						//插入爆品数据
						burst: burst,
						textStyle: {
							normal: {
								color: doubleBarColor[2]
							}
						}
					};
				} else {
					ydata = {
						value: item.type,
						textStyle: {
							color: "#0ff"
						}
					};

					xdata1 = {
						value: item.order,
						textStyle: {
							normal: {
								color: doubleBarColor[2]
							}
						}
					};
				}

				//ydata = {
				//	value: item.type,
				//	textStyle: {
				//		color: "#0ff"
				//	}
				//};

				//xdata1 = {
				//	value: item.order,
				//	textStyle: {
				//		normal: {
				//			color: doubleBarColor[2]
				//		}
				//	}
				//};

				xdata2 = {
					value: item.amount,
					itemStyle: {
						normal: {
							color: barColor[2]
						}
					}
				};

				defaultCateSaleOption.series[0].label.normal.formatter = function (params) {
					var str = String(utils.format(item.order, true));

					return str;
				};

				defaultCateSaleOption.series[1].label.normal.formatter = function (params) {
					var str = String(utils.format(item.amount / 10000)) + "万";

					return str;
				};

				let dataObj = {
					xAxis: item.amount,
					yAxis: 0
				};
				defaultCateSaleOption.series[1].markPoint.data.push(dataObj);
				defaultCateSaleOption.series[1].markPoint.label.normal.formatter = function (params) {
					var str = utils.format(item.ratio * 100, true) + "%";

					return str;
				};

				//defaultCateSaleOption.tooltip.formatter = "{b}: <br /> {a0}: {c0} <br /> {a1}: {c1}";
				defaultCateSaleOption.tooltip.formatter = function (params) {

					//console.log('=========',params)
					var str = "";
					str += params[0].name + "<br />";
					str += params[0].seriesName + ": " + utils.format(params[0].value) + "<br />";

					str += params[1].seriesName + "(万): " + utils.format(params[1].value / 10000) + "<br />";

					//618增加爆品纬度
					let burst = params[0].data.burst;

					if ( burst ) {

						str += `
							爆品订单数量：${burst.order} <br />
							爆品销售金额(万)：${(burst.amount / 10000).toFixed(2)} 	<br />
							爆品订单占比：${(burst.order_ratio * 100).toFixed(2)}% <br />
							爆品销售金额占比：	${(burst.amount_ratio * 100).toFixed(2)}% <br />
						`;
					}

					return str;
				};
				defaultCateSaleOption.series[0].name = "订单数量";
				defaultCateSaleOption.series[1].name = "销售";
				defaultCateSaleOption.series[0].data = [xdata1];
				defaultCateSaleOption.series[1].data = [xdata2];
				defaultCateSaleOption.yAxis.data = [ydata];

				return defaultCateSaleOption;
			}
		}
	}

	function buildCateCargoOption (data, isSingle) {
		var defaultCateCargoOption = getDoubleBarOption();

		//{
		//	"type": "彩电",
		//	"order": 2422,
		//	"amount": 4551476.37,
		//	"stockout": 200,
		//	"arrive": 2000,
		//	"ratio":0.7
		//}
		//
		var types = [],
			stockouts = [],
			arrives = [];

		for ( let i = 0, len = data.length; i < len; i++ ) {
			types.push(data[i].type);
			stockouts.push(data[i].stockout);
			arrives.push(data[i].arrive);
		}
		var maxval = Math.max.apply(null, arrives);
		var maxval2 = Math.max.apply(null, stockouts);
		var max = (maxval && maxval.toString()) || "";
		var max2 = (maxval2 && maxval2.toString()) || "";
		var len = max.length + max2.length;

		defaultCateCargoOption.grid.right = len * 10 + 20;
		defaultCateCargoOption.grid.bottom = 10;
		defaultCateCargoOption.grid.top = isSingle? 10 : 16;
		var ydata = [],
			xdata1 = [],
			xdata2 = [];

		for ( let i = 0, len = types.length; i < len; i++ ) {
			ydata.unshift({
				value: types[i],
				textStyle: {
					color: "#00ffff"//barLabelColor[i]
				}
			});
			xdata1.unshift({
				value: arrives[i],
				itemStyle: {
					normal: {
						color: "#585858"
					}
				}
			});
			xdata2.unshift({
				value: stockouts[i],
				itemStyle: {
					normal: {
						color: barColor[i]
					}
				}
			});

		}
		defaultCateCargoOption.xAxis.shift();
		delete defaultCateCargoOption.series[0].xAxisIndex;
		delete defaultCateCargoOption.series[1].xAxisIndex;
		delete defaultCateCargoOption.series[1].label;

		defaultCateCargoOption.series[0].barGap = "-100%";
		defaultCateCargoOption.series[0].data = xdata1;
		defaultCateCargoOption.series[1].data = xdata2;
		defaultCateCargoOption.yAxis.data = ydata;

		for ( let i = 0, len = types.length, index = len - 1; i < len; i++ ) {

			defaultCateCargoOption.series[0].label.normal.formatter = function () {
				var str = stockouts[index] + "/" + arrives[index];
				index--;
				if ( index < 0 ) index = len - 1;
				return str;
			};

		}
		defaultCateCargoOption.tooltip.formatter = "{b}: {c1} / {c0}";

		return defaultCateCargoOption;
	}

	//function buildServiceRateOption (data) {
	//	var defaultServiceRateOption = getDefaultLineOption();
	//	var xAxisData = [];
	//
	//	var len = Math.min(data.service.length, data.phone.length);
	//	for ( let i = 0; i < len; i++ ) {
	//		xAxisData.push("");
	//	}
	//	defaultServiceRateOption.tooltip.position = ["60%", "10%"];
	//	defaultServiceRateOption.tooltip.formatter = function (params) {
	//		var str = "";
	//
	//		params.forEach(function (item) {
	//			str += "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + item.color + "\"></span>";
	//			str += item.seriesName + ": " + utils.format(item.value * 100, true) + "%";
	//			str += "<br />";
	//		});
	//
	//		return str;
	//	};
	//
	//	defaultServiceRateOption.data = xAxisData;
	//	defaultServiceRateOption.xAxis.show = false;
	//	defaultServiceRateOption.series[0].data = data.service;
	//	defaultServiceRateOption.series[1].data = data.phone;
	//	defaultServiceRateOption.series[0].name = "客服接起率";
	//	defaultServiceRateOption.series[1].name = "400接起率";
	//	defaultServiceRateOption.legend.left = "25%";
	//	defaultServiceRateOption.legend.data = [{
	//		name: "客服接起率",
	//		icon: "line",
	//		textStyle: {
	//			color: "#d5971b"
	//		}
	//	}, {
	//		name: "400接起率",
	//		icon: "line",
	//		textStyle: {
	//			color: "#01e7ec"
	//		}
	//	}];
	//
	//	defaultServiceRateOption.series[0].markLine = {
	//		symbol: "line",
	//		data: [{
	//			yAxis: 0.9,
	//			lineStyle: {
	//				normal: {
	//					color: "#fff"
	//				}
	//			},
	//			label: {
	//				normal: {
	//					color: "#0ff",
	//					fontSize: 10,
	//					formatter: function () {
	//						return "90%";
	//					}
	//				}
	//			}
	//		}]
	//	};
	//
	//	return defaultServiceRateOption;
	//}

})();