(function () {
	// reload
	setInterval(function () {
		window.location.reload(true);
	}, 1000 * 60 * 30);

	var pieColor = [
		new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
			offset: 0,
			color: "#ec7e3f"
		}, {
			offset: 1,
			color: "#f9ce2b"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#0052a5"
		}, {
			offset: 1,
			color: "#76b7e5"
		}]),
		new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#ff0098"
		}, {
			offset: 1,
			color: "#eb70a6"
		}]), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
		}])
	];


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
		}])
	];
	var barLabelColor = ["#235fca", "#c70156", "#e9780b", "#007508", "#4f0099", "#deb706", "#01a5ac", "#952a06"];

	function getDefaultPieOption () {
		return {
			grid: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				containLabel: true
			},
			tooltip: {
				trigger: "item",
				textStyle: {
					fontSize: 14,
					fontWeight: "normal"
				},
				formatter: "{b} <br/>{c}万元 <br/>({d}%)"
			},
			barGap: 5,
			series: [{
				// name: '销售渠道',
				type: "pie",
				startAngle: 90,
				radius: "65%",
				center: ["60%", "60%"],
				color: pieColor,
				//labelLine: {
				//	normal: {
				//		length: 10,
				//		length2: 20
				//	}
				//},
				label: {
					normal: {

						textStyle: {
							fontSize: 12,
							fontWeight: "normal"
						},
						formatter: "{b}\n{c}万"
					}
				},
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: "rgba(0, 0, 0, 0.5)"
					}
				}
			}]
		};
	}

	function getDefaultBarOption () {
		return {
			grid: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				containLabel: true
			},
			tooltip: {
				show: true,
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				}
			},
			color: barColor,
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
				//barWidth: "80%",

				label: {
					normal: {
						show: true,
						position: "right",
						formatter: "{c}万"

					}
				},
				// color: barColor,
				itemStyle: {
					normal: {
						// color: barColor
					}
				}
			}]
		};
	}

	function getDoubleBarOption () {
		return {
			grid: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				containLabel: true
			},
			color: barColor,
			tooltip: {
				show: true,
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
				}
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
	Chart.prototype.load = function (data, buildOption) {
		var chart = this.instance;
		var _this = this;
		var option = buildOption(data);
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
		var uvChannelChart = new Chart(".uvChannel");
		var siteMaterialSalePieChart = new Chart(".saleChannel");

		//center
		var regionSaleChart = new Chart(".center-bottom");

		// right;
		var saleAmountRatioPieChart = new Chart(".saleAmountRatio");
		var meifubaoChart = new Chart(".meifubao");

		var interval = 1000 * 60 * 3;

		function loadChartSec () {
			getUV().then(function (data) {
				$(".left-418>span").html(utils.format(data.today, true));

				uvChannelChart.load(data.data, buildUVChannelOption);

			});
		}


		function loadChartMin () {
			getSiteMaterialSale().then(function (data) {
				siteMaterialSalePieChart.load(data, buildSiteMaterialSaleOption);
			});
			getSaleAmountRatio().then(function (data) {
				saleAmountRatioPieChart.load(data, buildSaleAmountRatioOption);
			});
			getRegionSale().then(function (data) {
				regionSaleChart.load(data, buildRegionSaleOption);
			});
			getMeifubao().then(function (data) {
				meifubaoChart.load(data, buildMeifubaoOption);
			});

		}

		loadChartMin();
		loadChartSec();
		pieAction(siteMaterialSalePieChart);
		pieAction(saleAmountRatioPieChart);
		setInterval(loadChartMin, 1000 * 60);
		setInterval(loadChartSec, 1000);
	}

	init();

	function pieAction (chart) {
		var currentIndex = -1;
		var _action = function () {
			chart.dispatch(function (myChart, option) {
				if ( !option ) {
					return;
				}
				var dataLen = option.series[0].data.length;

				myChart.dispatchAction({
					type: "pieUnSelect",
					seriesIndex: 0,
					dataIndex: currentIndex
				});
				currentIndex = (currentIndex + 1) % dataLen;

				myChart.dispatchAction({
					type: "pieSelect",
					seriesIndex: 0,
					dataIndex: currentIndex
				});

				myChart.dispatchAction({
					type: "showTip",
					seriesIndex: 0,
					dataIndex: currentIndex
				});
			});
		};
		_action();
		setInterval(_action, 5000);
	}

	//center pie
	function buildSiteMaterialSaleOption (data) {
		var defaultServiceRateOption = getDefaultPieOption();
		if ( Array.isArray(data) ) {
			defaultServiceRateOption.series[0].data = data.map(function (item, index) {
				return {
					value: (item.value / 10000).toFixed(2),
					name: item.type,
					label: {
						normal: {
							color: "#0ff",
							position: "inside",
							formatter: function (params) {
								var str = "";

								str += params.name + " ";
								str += String(utils.format(params.value)) + "万";
								return str;
							}
						}
					}
				};
			});
			defaultServiceRateOption.tooltip.position= ['90%','20%']
			return defaultServiceRateOption;
		}
	}

	function buildSaleAmountRatioOption (data) {

		var saleData = data.channelSale;

		//{
		//	channelSale: {
		//		"pay": 823488.88,
		//			"jinli": 623466.66,
		//			"scene1": 554325.55,
		//			"scene2": 312333.5,
		//			"scene3": 512354.4
		//	},

		var saleAmountRatioOption = getDefaultPieOption();
		var dataArr = [];
		for ( var key in saleData ) {
			var dataObj = {
				value: (saleData[key] / 10000).toFixed(2),
				name: key,
				label: {

					normal: {
						show:false,
						color: "#0ff",
						position: "outside",
						formatter: function (params) {
							var str = "";
							var name = "";
							switch ( params.name ) {
								case "pay":
									name = "线上订单";
									break;
								case "jinli" :
									name = "金力订单";
									break;
								case "scene1" :
									name = "场景一";
									break;
								case "scene2" :
									name = "场景二";
									break;
								case "scene3" :
									name = "场景三";
									break;
							}
							str += name + "\n";
							str += String(utils.format(params.value)) + "万";
							return str;
						}
					}
				},
				labelLine:{
					normal:{
						show:false
					}
				}

			};
			dataArr.push(dataObj);
		}
		saleAmountRatioOption.series[0].radius = ["70%", "45%"];
		saleAmountRatioOption.series[0].data = dataArr;
		saleAmountRatioOption.tooltip.formatter = function (params) {
			var name = "";
			switch ( params.data.name ) {
				case "pay":
					name = "线上订单";
					break;
				case "jinli" :
					name = "金力订单";
					break;
				case "scene1" :
					name = "场景一";
					break;
				case "scene2" :
					name = "场景二";
					break;
				case "scene3" :
					name = "场景三";
					break;
			}
			return name + "<br/>" + params.value + "万<br/>" + params.percent + "%";
		};
		saleAmountRatioOption.tooltip.position = ['60%','60%']
		return saleAmountRatioOption;
	}

	function getSiteMaterialSale () {

		//return Promise.resolve({
		//	"success": true,
		//	"data": [
		//		{
		//			"type": "APP",
		//			"value": 123123.71
		//		}, {
		//			"type": "WAP",
		//			"value": 123123.48
		//		}, {
		//			"type": "PC",
		//			"value": 123123.12
		//		}
		//	]
		//})
		return ajax(config.siteMaterialSale)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取Service Rate失败");
				}
			});

	}

	function getSaleAmountRatio () {

		//return Promise.resolve({
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
		return ajax(config.channelSale)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取订单及转化率失败");
				}
			});
	}

	function getUV () {
		//
		//return Promise.resolve({
		//	"success": true,
		//	"data": {
		//		"total": 0,
		//		"today": 12312345,
		//		"data": [{
		//			"type": "PC",
		//			"value": 124354
		//		},
		//			{
		//				"type": "WAP",
		//				"value": 21345657
		//			},
		//			{
		//				"type": "APP",
		//				"value": 123454657
		//			}
		//		]
		//	}
		//})
		return ajax(config.totalUV)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取UV失败");
				}
			});
	}

	function getRegionSale () {
		//return Promise.resolve({
		//	"success": true,
		//	"data": [
		//		{
		//			"regionName": "华北一区",
		//			"saleAmount": 8912444.67,
		//			"orderCount": 212354
		//		},
		//		{
		//			"regionName": "华北二区",
		//			"saleAmount": 12324354.67,
		//			"orderCount": 12432
		//		},
		//		{
		//			"regionName": "东北大区",
		//			"saleAmount": 234234.67,
		//			"orderCount": 12344
		//		},
		//		{
		//			"regionName": "华北一区",
		//			"saleAmount": 1234321.67,
		//			"orderCount": 65432
		//		},
		//		{
		//			"regionName": "华北二区",
		//			"saleAmount": 2343245.67,
		//			"orderCount": 17653
		//		},
		//		{
		//			"regionName": "东北大区",
		//			"saleAmount": 3456542.67,
		//			"orderCount": 1234354
		//		}
		//	]
		//})
		return ajax(config.regionSale)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取UV趋势失败");
				}
			});
	}

	function getMeifubao () {

		//return Promise.resolve({
		//	"success": true,
		//	"data": {
		//		"total": {
		//			"orderCount": 123456,
		//			"saleAmount": 124354.32
		//		},
		//		"online": {
		//			"orderCount": 234234,
		//			"saleAmount": 123245654.32
		//		},
		//		"offline": {
		//			"orderCount": 1234567,
		//			"saleAmount": 123345643.32
		//		}
		//	}
		//})
		return ajax(config.meifubao)
			.then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取销售趋势失败");
				}
			});
	}

	function buildUVChannelOption (data) {

		var defaultUVChannelBarOption = getDefaultBarOption();
		var ydata = [];
		var sdata = [];
		var values = [];

		for ( var i = 0, len = data.length; i < len; i++ ) {
			var value = data[i].value;

			values.push(value);
			ydata.unshift({
				value: data[i].type,
				textStyle: {
					color: "#00ffff"//barLabelColor[i]
				}
			});
			sdata.unshift({
				value: value,
				itemStyle: {
					normal: {
						color: barColor[i]
					}
				}
			});

		}
		if ( values.length ) {
			var maxval = Math.max.apply(null, values);
			var max = (maxval && maxval.toString()) || "";
			var len = max.indexOf(".")? max.length - 0.8 : max.length;

			//defaultUVChannelBarOption.grid.top = 15;
			defaultUVChannelBarOption.grid.left = 10;
			defaultUVChannelBarOption.grid.right = len * 10 + 20;

			defaultUVChannelBarOption.yAxis.data = ydata;
			defaultUVChannelBarOption.series[0].data = sdata;

			defaultUVChannelBarOption.barCategoryGap = 15;
			defaultUVChannelBarOption.series[0].label = {
				normal: {
					show: true,
					position: "right",
					color: "#00ffff",
					fontSize: 16,
					formatter: function (opt) {

						var val = String(opt.value).split(".")[0];
						val = utils.format(Number(val), true);
						return String(val);
					}

				},

			};
			defaultUVChannelBarOption.tooltip.formatter = "{b}: {c}";
		}
		return defaultUVChannelBarOption;
	}

	function buildRegionSaleOption (data) {
		var xData = [], lineData = [], barData = [];
		data.forEach((item, index) => {
			xData.push(item.regionName);
			lineData.push(item.orderCount);

			var barObj = {
				value: item.saleAmount,
				itemStyle: {
					normal: {
						color: barColor[index]
					}
				}
			};

			barData.push(barObj);
		});
		var regionSaleOption = {
			grid: {
				top: 30,
				left: 10,
				right: 10,
				bottom: 0,
				containLabel: true
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
					crossStyle: {
						color: "#999"
					}
				}
			},
			legend:{
				data:['订单量','销售额'],
				textStyle:{
					color:'#0ff'
				}
			},

			xAxis: [
				{
					type: "category",
					data: xData,
					axisPointer: {
						type: "shadow"
					},
					axisLine: {
						lineStyle: {
							color: "#999"
						}
					},
				}
			],
			yAxis: [
				{
					type: "value",
					name: "订单量",
					nameTextStyle: {
						color: "#0ff"
					},
					splitNumber: 3,
					splitLine:{
						show:false
					},
					axisLine: {
						lineStyle: {
							color: "#999"
						}
					},
					min: 0,
					max: "dataMax",
					axisLabel: {
						formatter: "{value}"
					}
				},
				{
					type: "value",
					name: "销售额",
					nameTextStyle: {
						color: "#0ff"
					},
					splitNumber: 3,
					splitLine:{
						show:false
					},
					axisLine: {
						lineStyle: {
							color: "#999"
						}
					},
					min: 0,
					max: "dataMax",
					axisLabel: {
						formatter: function (value, index) {
							var str = utils.format(value / 10000, true);
							return str + "万";
						}
					}
				}
			],
			series: [

				{
					name: "订单量",
					type: "line",
					data: lineData,
					itemStyle: {
						normal: {
							color: "#0ff"
						}
					},
					lineStyle: {
						normal: {
							width: 1
						}
					},
					areaStyle: {
						normal: {
							color: "rgba(0,113,188,0.7)"
						}
					},
				},
				{
					name: "销售额",
					type: "bar",
					yAxisIndex: 1,
					data: barData,
					barMaxWidth: 30,
					itemStyle: {
						normal: {
							color: barColor
						}
					}
				}
			]
		};
		return regionSaleOption;
	}

	function buildMeifubaoOption (data) {
		var meifubaoOption = getDoubleBarOption();
		var names = [], amounts = [], orders = [];

		for ( var key in data ) {
			var name = "";
			switch ( key ) {
				case "total":
					name = "汇总";
					break;
				case "online":
					name = "线上";
					break;
				case "offline":
					name = "线下";
					break;
			}

			names.push(name);
			amounts.push(data[key].saleAmount);
			orders.push(data[key].orderCount);

		}

		var maxval = Math.max.apply(null, amounts);
		var max = (maxval && maxval.toString()) || "";
		var len = max.indexOf(".")? max.length - 0.8 : max.length;

		meifubaoOption.grid.right = len * 10 + 10;

		var ydata = [],
			xdata1 = [],
			xdata2 = [];

		for ( let i = 0, len = names.length, index = len - 1; i < len; i++ ) {
			ydata.unshift({
				value: names[i],
				textStyle: {
					color: "#00ffff"//barLabelColor[i]
				}
			});

			xdata1.unshift({
				value: orders[i],
				itemStyle: {
					normal: {
						color: doubleBarColor[i]
					}
				}
			});
			meifubaoOption.series[0].label.normal.formatter = function (params) {
				var str = String(utils.format(orders[index], true));
				index--;
				if ( index < 0 ) index = len - 1;
				return str;
			};

		}

		for ( let i = 0, len = names.length, index = len - 1; i < len; i++ ) {
			xdata2.unshift({
				value: amounts[i],
				itemStyle: {
					normal: {
						color: barColor[i]
					}
				}
			});

			meifubaoOption.series[1].label.normal.formatter = function (params) {
				var str = String(utils.format(amounts[index]/10000)) + '万';
				index--;
				if ( index < 0 ) index = len - 1;
				return str;
			};
		}

		meifubaoOption.tooltip.formatter = "{b}: <br /> {a0}: {c0} <br /> {a1}: {c1}";
		meifubaoOption.series[0].name = "订单量";
		meifubaoOption.series[1].name = "销售额";
		meifubaoOption.series[0].data = xdata1;
		meifubaoOption.series[1].data = xdata2;
		meifubaoOption.yAxis.data = ydata;

		return meifubaoOption;
	}

})();