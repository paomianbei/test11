(function () {
    // reload
    setInterval(function () {
        window.location.reload(true);
    }, 1000 * 60 * 30);

    var timeData = buildTimeData();
    var pieColor = [
        new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#ec7e3f'
        }, {
            offset: 1,
            color: '#f9ce2b'
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
            color: '#ff0098'
        }, {
            offset: 1,
            color: '#eb70a6'
        }]),
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#0052a5'
        }, {
            offset: 1,
            color: '#76b7e5'
        }]),
       
    ];

    var pieLabelColor = ['#ec7e3f', '#da3f10', '#ff0098','#1E90FF'];

    var barColor = [
        new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#ec7e3f'
        }, {
            offset: 1,
            color: '#f9ce2b'
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
            color: '#ff0098'
        }, {
            offset: 1,
            color: '#eb70a6'
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
            color: '#0052a5'
        }, {
            offset: 1,
            color: '#76b7e5'
        }]),
       
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			offset: 0,
			color: "#004b5a"
		}, {
			offset: 1,
			color: "#01a5ac"
        }]),
    ];
    var doubleBarColor = [
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#0028a4'
        }, {
            offset: 1,
            color: '#235fca'
        }]),
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#84002c'
        }, {
            offset: 1,
            color: '#c70156'
        }]),
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#da3f10'
        }, {
            offset: 1,
            color: '#e9780b'
        }])
    ];
    var lineColor = ['#01e7ec', '#d5971b', '#ff0098'];
    var barLabelColor = ['#235fca', '#c70156', '#e9780b', '#007508', '#4f0099', '#deb706', '#01a5ac', '#952a06'];
    var uvBarColor = [
        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#1a1b7d'
        }, {
            offset: 1,
            color: '#02f1f7'
        }]),
        //'#02f1f7',
        '#1a1b7d'
    ];

    var gaugeColor = ['#05a3eb', '#1d92f3', '#397bfc', '#5b66ff',
        '#6b5bff', '#844afc', '#9142f5', '#c322c9', '#e111ab', '#f60095'];

    function getDefaultPieOption () {
        return {

            tooltip: {
                trigger: 'item',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal'
                },
                formatter: '{b} ：{c}万 ({d}%)'
            },
            barGap: 5,
            series: [{
                // name: '销售渠道',
                type: 'pie',
                startAngle: 90,
                radius: '56%',
                center: ['55%', '55%'],
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
                            fontWeight: 'normal'
                        },
                        formatter: '{b}\n{c}万'
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
    }

    function getDefaultGaugeOption () {
        return {

            series: [
                {
                    name: '全站转化率',
                    type: 'gauge',
                    radius: '100%',
                    min: 0,
                    max: 10,
                    title: {
                        color: '#ff00ff',
                        fontSize: 16
                    },
                    axisLabel: {
                        formatter: '{value}',
                        distance: 1
                    },
                    axisLine: {
                        show: false,

                        lineStyle: {
                            color: [[0.2, 'red'], [0.7, 'red'], [5, 'red']],
                            width: 15
                        }
                    },
                    splitLine: {
                        show: true,
                        length: 15,
                        lineStyle: {
                            color: '#26003b'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    detail: {
                        formatter: '{value}%',
                        color: '#fff0a4',
                        backgroundColor: '#5c289c',
                        borderRadius: 5,
                        width: 32,
                        height: 16,
                        fontSize: 16

                    },
                    data: { value: 0, name: '全站转化率' }
                }
            ]
        };
    }

    function getDefaultLineOption () {

        return {
            grid: {
                top: 30,
                left: 0,
                right: 40,
                bottom: 40,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                position: function ( pt ) {
                    return [pt[0], '10%'];
                }
            },
            color: lineColor,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: timeData
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                show: false,
                max: 'dataMax'
            },

            series: [
                {
                    name: 'pc',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    //itemStyle: {
                    //	normal: {
                    //		color: '#d5971b',
                    //
                    //	}
                    //},
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(0,113,188,0.7)'
                        }
                    }

                }, {
                    name: 'wap',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    //itemStyle: {
                    //	normal: {
                    //		color: '#01e7ec'
                    //	}
                    //},
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            //color: 'rgba(107,44,145,0.5)'
                            color: 'rgba(213,151,27,0.6)'
                        }
                    }
                },
                {
                    name: 'app',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    //itemStyle: {
                    //	normal: {
                    //		color: '#01e7ec'
                    //	}
                    //},
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(255,0,152,0.6)'
                        }
                    }
                }
            ]
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
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color: barColor,
            xAxis: {
                type: 'value',
                max: 'dataMax',
                show: false
            },

            yAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLabel: {
                    color: barLabelColor
                }

            },

            series: [{
                // name: '直接访问',
                type: 'bar',
                //barWidth: "80%",

                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}万'

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
                top: 20,
                left: 20,
                right: 20,
                bottom: 0,
                containLabel: true
            },
            color: barColor,
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [{
                type: 'value',
                max: 'maxData',
                show: false,
                min: 0
            }, {
                type: 'value',
                max: 'maxData',
                show: false,
                min: 0
            }],
            yAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLabel: {
                    color: ['#00ffff']
                }

            },

            series: [{
                type: 'bar',
                xAxisIndex: 0,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#00ffff'

                    }
                }
            }, {
                type: 'bar',
                xAxisIndex: 1,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#00ffff'
                    }
                },
                itemStyle: {
                    normal: {
                        color: ''
                    }
                }
            }]
        };
    }

    function Chart ( selector, option ) {
        if ( option == null ) {
            option = {};
        }
        this._opt = option;
        this.dom = document.querySelector(selector);
        this.selector = selector;
        this.instance = echarts.init(this.dom, null, this._getSize());
        // auto resize
        var _this = this;
        var resizeEvent = new Event('resize');
        _this.resizeEventHandler = function () {
            _this.instance.resize(_this._getSize());
            // _this.option && _this.instance.setOption(_this.option);
            //_this.resetAttach();
        };
        _this.dom.addEventListener('resize', _this.resizeEventHandler, false);
        window.addEventListener('resize', function () {
            _this.dom.dispatchEvent(resizeEvent);
        });

    }

    Chart.prototype._getSize = function () {

        var option = this._opt;
        if ( typeof option.width === 'number' ) {
            option.width = {
                value: option.width || 0,
                lock: false
            };
        }
        if ( typeof option.height === 'number' ) {
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
    Chart.prototype.load = function ( data, buildOption ) {
        var chart = this.instance;
        var _this = this;
        var option = buildOption(data);
        if ( option ) {
            option && chart.setOption(option);
            _this.option = option;
        }
    };

    Chart.prototype.dispatch = function ( action ) {
        action(this.instance, this.option);
    };
    window.Chart = Chart;

    function init () {
        //left
        // var uvTodayChart = new Chart('.left .uvToday');
        var uvChannelChart = new Chart('.left .uvChannel');
        var uvTrendChart = new Chart('.left .uvTrend');

        var saleTrendChart = new Chart('.left .saleTrend');

        //center
        var siteMaterialSalePieChart = new Chart('.center .saleChannel');

        var transferRateAndOrderChart = new Chart('.center .transferRateAndOrder');

        // right;
        var totalTransferRateChart = new Chart('.right .totalTransferRate');

        var interval = 1000 * 60 * 3;

        function loadChart () {

            getUVTrend().then(function ( data ) {
            //    // 解决断层的问题
            //    try {
            //      var len = data.current.length -1;
            //      data.current = data.current.slice(0,len);
            //      data.last = data.last.slice(0,len);
            //    } catch (error) {
            //        console.log("error",error);
            //    }
                uvTrendChart.load(data, buildUVTrendOption);
            });

            getSaleTrend().then(function ( data ) {
                // 解决断层的问题
                // try {
                //     var len = data.current.length -1;
                //     data.current = data.current.slice(0,len);
                //     data.last = data.last.slice(0,len);
                // } catch (error) {
                //     console.log("error",error);
                // }
                saleTrendChart.load(data, buildSaleTrendOption);
            });

            getTransferRate().then(function ( data ) {
                totalTransferRateChart.load(data, buildTotalTransferRateOption);
            });

        }

        loadChart();

        function loadChartFast () {
            getUV().then(function ( data ) {
                // uvTodayChart.load(data, buildUVTodayOption);
                // uvChannelChart.load(data.data, buildUVChannelOption);

                uvChannelChart.load(data, buildUVChannelOption);

            });

        }

        function loadChartMin () {
            getsiteMaterialSale().then(function ( data ) {
                siteMaterialSalePieChart.load(data, buildSiteMaterialSaleOption);
            });
            getTransferRateAndOrder().then(function ( data ) {
                //站点实物订单由柱图改为饼图 2018。11。11
                // transferRateAndOrderChart.load(data, buildTransferRateAndOrderOption);
                transferRateAndOrderChart.load(data, buildSiteMaterialOrderOption);
            });
        }

        loadChartFast();
        loadChartMin();

        pieAction(siteMaterialSalePieChart);
        pieAction(transferRateAndOrderChart);

        var timer = setInterval(loadChart, interval);
        var timer2 = setInterval(loadChartFast, 1000);
        setInterval(loadChartMin, 1000 * 60);
        return timer;
    }

    init();

    function pieAction ( chart ) {
        var currentIndex = -1;
        var _action = function () {
            chart.dispatch(function ( myChart, option ) {
                if ( !option ) {
                    return;
                }
                var dataLen = option.series[0].data.length;

                myChart.dispatchAction({
                    type: 'pieUnSelect',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;

                myChart.dispatchAction({
                    type: 'pieSelect',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });

                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
            });
        };
        _action();
        setInterval(_action, 5000);
    }

    //center pie
    function buildSiteMaterialSaleOption ( data ) {
        var defaultServiceRateOption = getDefaultPieOption();
        if ( Array.isArray(data) ) {
            defaultServiceRateOption.series[0].data = data.map(function ( item, index ) {
                return {
                    value: (item.value / 10000).toFixed(2),
                    name: item.type,
                    label: {
                        normal: {
                            color: pieLabelColor[index],
                            formatter: function ( params ) {
                                var str = '';

                                str += params.name + ' ';
                                str += String(utils.format(params.value)) + '万\n';
                                str += params.percent + '%';

                                return str;
                            }
                        }
                    }
                };
            });
            defaultServiceRateOption.tooltip.formatter='{b} ：{c}万 ({d}%)';
            return defaultServiceRateOption;
        }
    }
    function buildSiteMaterialOrderOption ( data ) {
        var defaultServiceRateOption = getDefaultPieOption();
        if ( Array.isArray(data) ) {
            defaultServiceRateOption.series[0].data = data.map(function ( item, index ) {
                return {
                    value: (item.value / 10000).toFixed(2),
                    name: item.type,
                    label: {
                        normal: {
                            color: pieLabelColor[index],
                            formatter: function ( params ) {
                                var str = '';

                                str += params.name + ' ';
                                str += String(utils.format(params.value)) + '万\n';
                                str += params.percent + '%';

                                return str;
                            }
                        }
                    }
                };
            });

            return defaultServiceRateOption;
        }
    }
    // 各站点销售额分布 修改
    function getsiteMaterialSale () {

         //return Promise.resolve({
         //    'success': true,
         //    'data': [
         //        {
         //            'type': 'APP',
         //            'value': 104123.99
         //        }, {
         //            'type': 'WAP',
         //            'value': 133123
         //        }, {
         //            'type': 'PC',
         //            'value': 113123
         //        }, {
         //            'type': '小程序',
         //            'value': 13123
         //        }
         //    ]
         //})
        return ajax(config.siteMaterialSale)
            .then(function ( res ) {
                if ( res.success ) {
                    return res.data;
                } else {
                    return Promise.reject('获取Service Rate失败');
                }
            });

    }
    // 各站点订单量分布
    function getTransferRateAndOrder () {

        // return Promise.resolve({
        //     'success': true,
        //     'data': [{
        //         'type': 'PC',
        //         'value': 930720,
        //         'ratio': '0.0027'
        //     }, {
        //         'type': 'WAP',
        //         'value': 233534,
        //         'ratio': '0.0027'
        //     }, {
        //         'type': 'APP',
        //         'value': 421453,
        //         'ratio': '0.0046'
        //     }, {
        //         'type': '小程序',
        //         'value': 421453,
        //         'ratio': '0.0046'
        //     }]
        
        // })
        return ajax(config.ratioOrder)
            .then(function ( res ) {
                if ( res.success ) {
                    return res.data;
                } else {
                    return Promise.reject('获取订单及转化率失败');
                }
            });
    }

    function getUV () {

        // // return Promise.resolve({
        // //     'success': true,
        // //     'data': {
        // //         'total': 22222222,
        // //         'today': 2000000,
        // //         'task': 99999999,
        // //         'todayTask': 5000000,
        // //         'data': [{
        // //             'type': 'PC',
        // //             'value': 33330,
        // //             'task': 500000
        // //         },
        // //             {
        // //                 'type': 'WAP',
        // //                 'value': 22220,
        // //                 'task': 500000
        // //             },
        // //             {
        // //                 'type': 'APP',
        // //                 'value': 11110,
        // //                 'task': 500000
        // //             }
        // //         ]
        // //     }
        // // })
        // // return ajax(config.totalUV)
        // //     .then(function ( res ) {
        // //         if ( res.success ) {
        // //             return res.data;
        // //         } else {
        // //             return Promise.reject('获取UV失败');
        // //         }
        // //     });

        // // 418 36
        // return Promise.resolve({
        //     "msg": "success",
        //     "code": 200,
        //     "data": [{
        //         "name": "APP",
        //         "value": "437",
        //         "ratio": "0.12"
        //     }, {
        //         "name": "PC",
        //         "value": "974",
        //         "ratio": "0.13"
        //     }, {
        //         "name": "WAP",
        //         "value": "1105",
        //         "ratio": "0.14"
        //     },{
        //         "name": "小程序",
        //         "value": "805",
        //         "ratio": 0
        //     }, {
        //         "name": "全部",
        //         "value": "2516",
        //         "ratio": "0.15"
        //     }]
        // })
        return ajax(config.totalUV)
            .then(function ( res ) {
                if ( res.code === 200 ) {
                    return res.data;
                } else {
                    return Promise.reject('获取UV失败');
                }
            });
    }

    function getUVTrend () {

        // // var cur = [], las = [];
        // // for ( var i = 0; i < 24; i++ ) {
        // // 	var num = (String(Math.random() * 100000).split("."))[0];
        // // 	las.push(num);
        // // }
        // // for ( var i = 0; i < 14; i++ ) {
        // // 	var num = (String(Math.random() * 100000).split("."))[0];
        // // 	cur.push(num);
        // // }
        // // return Promise.resolve({
        // // 	"success": true,
        // // 	"data": {
        // // 		current: cur,
        // // 		last: las
        // // 	}
        // // })
        // return ajax(config.uvTrend)
        //     .then(function ( res ) {
        //         if ( res.success ) {
        //             return res.data;
        //         } else {
        //             return Promise.reject('获取UV趋势失败');
        //         }
        //     });

        // 418 36
        // var data = {
        //     "msg": "",
        //     "code": 200,
        //     "data": {
        //          "hq": [],
        //          "pc": [
        //              {
        //              "hour": "0",
        //              "value": "2.46"
        //          }, {
        //              "hour": "1",
        //              "value": "1.87"
        //          }, {
        //              "hour": "2",
        //              "value": "1.31"
        //          }, {
        //              "hour": "3",
        //              "value": "1.07"
        //          }, {
        //              "hour": "4",
        //              "value": "1.07"
        //          }, {
        //              "hour": "5",
        //              "value": "1.27"
        //          }, {
        //              "hour": "6",
        //              "value": "2.14"
        //          }, {
        //              "hour": "7",
        //              "value": "3.02"
        //          }, {
        //              "hour": "8",
        //              "value": "5.16"
        //          }, {
        //              "hour": "9",
        //              "value": "7.28"
        //          }, {
        //              "hour": "10",
        //              "value": "8.10"
        //          }, {
        //              "hour": "11",
        //              "value": "7.75"
        //          }, {
        //              "hour": "12",
        //              "value": "6.99"
        //          }, {
        //              "hour": "13",
        //              "value": "6.84"
        //          }, {
        //              "hour": "14",
        //              "value": "7.87"
        //          }, {
        //              "hour": "15",
        //              "value": "8.61"
        //          }, {
        //              "hour": "16",
        //              "value": "7.95"
        //          }, {
        //              "hour": "17",
        //              "value": "7.03"
        //          }, {
        //              "hour": "18",
        //              "value": "6.02"
        //          }, {
        //              "hour": "19",
        //              "value": "5.46"
        //          }, {
        //              "hour": "20",
        //              "value": "5.27"
        //          }, {
        //              "hour": "21",
        //              "value": "4.74"
        //          }, {
        //              "hour": "22",
        //              "value": "4.11"
        //          }, {
        //              "hour": "23",
        //              "value": "3.13"
        //          }],
        //         "wap": [{
        //             "hour": "0",
        //             "value": "2.73"
        //         }, {
        //             "hour": "1",
        //             "value": "1.97"
        //         }, {
        //             "hour": "2",
        //             "value": "1.67"
        //         }, {
        //             "hour": "3",
        //             "value": "1.59"
        //         }, {
        //             "hour": "4",
        //             "value": "1.60"
        //         }, {
        //             "hour": "5",
        //             "value": "1.75"
        //         }, {
        //             "hour": "6",
        //             "value": "2.64"
        //         }, {
        //             "hour": "7",
        //             "value": "3.62"
        //         }, {
        //             "hour": "8",
        //             "value": "5.95"
        //         }, {
        //             "hour": "9",
        //             "value": "3.82"
        //         }],
        //         "app": [{
        //             "hour": "0",
        //             "value": "6"
        //         }, {
        //             "hour": "1",
        //             "value": "8"
        //         }, {
        //             "hour": "2",
        //             "value": "4"
        //         }, {
        //             "hour": "3",
        //             "value": "4"
        //         }, {
        //             "hour": "4",
        //             "value": "1.60"
        //         }, {
        //             "hour": "5",
        //             "value": "3"
        //         }, {
        //             "hour": "6",
        //             "value": "2.64"
        //         }, {
        //             "hour": "7",
        //             "value": "1"
        //         }, {
        //             "hour": "8",
        //             "value": "7"
        //         }, {
        //             "hour": "9",
        //             "value": "3"
        //         }]
        //     },
        //     success: true
        // }
        // return Promise.resolve(data)
        // return ajax(config.uvTrend)
        //     .then(function ( res ) {
        //         if ( res.code === 200 ) {
        //             return res.data;
        //         } else {
        //             return Promise.reject('获取UV趋势失败');
        //         }
        //     });
        return ajax(config.uvTrend)
            .then(function ( res ) {
                if ( res.success ) {
                    return res.data;
                } else {
                    return Promise.reject('获取UV趋势失败');
                }
            });
    }

    function getSaleTrend () {
         //
         //var cur = [], las = [];
         //for ( var i = 0; i < 24; i++ ) {
         //	var num = (String(Math.random() * 100000).split("."))[0];
         //	las.push(num);
         //}
         //for ( var i = 0; i < 14; i++ ) {
         // var num = (String(Math.random() * 100000).split("."))[0];
         //	cur.push(num);
         //}
         //return Promise.resolve({
         //	"success": true,
         //	"data": {
         //		current: cur,
         //		last: las
         //	}
         //})
        //var data = {
        //    "msg": "",
        //    "code": 200,
        //    "data": {
        //        "hq": [],
        //        "pc": [
        //            {
        //                "hour": "0",
        //                "value": "2.46"
        //            }, {
        //                "hour": "1",
        //                "value": "1.87"
        //            }, {
        //                "hour": "2",
        //                "value": "1.31"
        //            }, {
        //                "hour": "3",
        //                "value": "1.07"
        //            }, {
        //                "hour": "4",
        //                "value": "1.07"
        //            }, {
        //                "hour": "5",
        //                "value": "1.27"
        //            }, {
        //                "hour": "6",
        //                "value": "2.14"
        //            }, {
        //                "hour": "7",
        //                "value": "3.02"
        //            }, {
        //                "hour": "8",
        //                "value": "5.16"
        //            }, {
        //                "hour": "9",
        //                "value": "7.28"
        //            }, {
        //                "hour": "10",
        //                "value": "8.10"
        //            }, {
        //                "hour": "11",
        //                "value": "7.75"
        //            }, {
        //                "hour": "12",
        //                "value": "6.99"
        //            }, {
        //                "hour": "13",
        //                "value": "6.84"
        //            }, {
        //                "hour": "14",
        //                "value": "7.87"
        //            }, {
        //                "hour": "15",
        //                "value": "8.61"
        //            }, {
        //                "hour": "16",
        //                "value": "7.95"
        //            }, {
        //                "hour": "17",
        //                "value": "7.03"
        //            }, {
        //                "hour": "18",
        //                "value": "6.02"
        //            }, {
        //                "hour": "19",
        //                "value": "5.46"
        //            }, {
        //                "hour": "20",
        //                "value": "5.27"
        //            }, {
        //                "hour": "21",
        //                "value": "4.74"
        //            }, {
        //                "hour": "22",
        //                "value": "4.11"
        //            }, {
        //                "hour": "23",
        //                "value": "3.13"
        //            }],
        //        "wap": [{
        //            "hour": "0",
        //            "value": "2.73"
        //        }, {
        //            "hour": "1",
        //            "value": "1.97"
        //        }, {
        //            "hour": "2",
        //            "value": "1.67"
        //        }, {
        //            "hour": "3",
        //            "value": "1.59"
        //        }, {
        //            "hour": "4",
        //            "value": "1.60"
        //        }, {
        //            "hour": "5",
        //            "value": "1.75"
        //        }, {
        //            "hour": "6",
        //            "value": "2.64"
        //        }, {
        //            "hour": "7",
        //            "value": "3.62"
        //        }, {
        //            "hour": "8",
        //            "value": "5.95"
        //        }, {
        //            "hour": "9",
        //            "value": "3.82"
        //        }],
        //        "app": [{
        //            "hour": "0",
        //            "value": "6"
        //        }, {
        //            "hour": "1",
        //            "value": "8"
        //        }, {
        //            "hour": "2",
        //            "value": "4"
        //        }, {
        //            "hour": "3",
        //            "value": "4"
        //        }, {
        //            "hour": "4",
        //            "value": "1.60"
        //        }, {
        //            "hour": "5",
        //            "value": "3"
        //        }, {
        //            "hour": "6",
        //            "value": "2.64"
        //        }, {
        //            "hour": "7",
        //            "value": "1"
        //        }, {
        //            "hour": "8",
        //            "value": "7"
        //        }, {
        //            "hour": "9",
        //            "value": "3"
        //        }]
        //    },
        //    success: true
        //};
        //return Promise.resolve(data)
        return ajax(config.saleTrend)
        .then(function ( res ) {
            if ( res.success ) {
                return res.data;
            } else {
                return Promise.reject('获取销售趋势失败');
            }
        });
    }

    function getTransferRate () {

        // return Promise.resolve({
        // 	"success": true,
        // 	"data":{
        // 		"site_ratio":0.003123
        // 	}
        // })
        return ajax(config.siteRatio)
            .then(function ( res ) {
                if ( res.success ) {
                    return res.data;
                } else {
                    return Promise.reject('获取全站转化率失败');
                }
            });

    }

    var uvTarget = 27250000;

    function buildUVTodayOption ( data ) {

        return {
            grid: {
                top: 20,
                left: 20,
                right: 30,
                bottom: 0,
                containLabel: true
            },
            yAxis: {
                show: false,
                data: ['a']

            },
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function () {

                    let total = data.total ? utils.format(+data.total, true) : 0;
                    let task = data.task ? utils.format(+data.task, true) : 0;
                    let today = data.today ? utils.format(+data.today, true) : 0;
                    let todayTask = data.todayTask ? utils.format(+data.todayTask, true) : 0;

                    // let str = `
                    // 			今日UV: ${today} <br />
                    // 			累计UV: ${total} <br />
                    // 			今日任务: ${todayTask} <br />
                    // 			累计任务: ${task} <br />
                    // 		`;

                    //去掉任务值
                    let str = `
                    		今日UV: ${today} <br />
                    		累计UV: ${total} <br />
                    	`;

                    //return "累计UV ：" + utils.format(String(data.total), true);

                    return str;
                }

            },

            xAxis: {
                show: false
                // splitLine: {show: false}
            },
            //animationDurationUpdate: 1200,
            series: [{
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        color: '#00ffff',
                        position: ['50%', '110%'],
                        formatter: function ( params ) {
                            //let val = parseInt(+data.task / 10000);

                            if ( !data.task ) {

                                return utils.format(data.total, true);

                            }

                            let percent = utils.format((data.total / data.task) * 100, true);

                            // let str = `任务值：${utils.format(data.total, true)} / ${utils.format(data.task, true)} ( ${percent}% )`;

                            // return str;

                            //去掉任务值
                            return '';

                            // return "任务值：" + val + "万";
                        },
                        fontSize: 10

                    }
                },
                itemStyle: {
                    normal: {
                        color: barColor[1],
                        barBorderRadius: 10
                    }
                },
                barGap: '-100%',
                barWidth: 10,
                data: [data.todayTask]
            }, {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        color: '#00ffff',
                        position: [10, -30],
                        formatter: function ( params ) {

                            let today = utils.format(String(data.today), true);

                            if ( !data.todayTask  ) {
                                return today;
                            }

                            let todayTask = utils.format(String(data.todayTask), true);
                            let percent = utils.format((+data.today / +data.todayTask) * 100, true);

                            // let str = `${today} / ${todayTask} ( ${percent}% )`;
                            let str = `${today}`;

                            //return utils.format(String(data.today), true);

                            return str;
                            // //只显示今日uv
                            // return today;

                        },
                        fontSize: 21,
                        fontWeight: 'bold'

                    }
                },
                itemStyle: {
                    normal: {
                        color: barColor[0],
                        barBorderRadius: 10
                    }
                },
                silent: true,
                barWidth: 10,

                data: [data.today]
            }]
        };

    }

    function buildUVChannelOption ( data ) {
        // 418 36
        var defaultUVChannelBarOption = getDefaultBarOption();
        var ydata = [];
        var sdata = [];
        var values = [];
        var tasks = [];
        var ratios = [];

        for ( var i = 0, len = data.length; i < len; i++ ) {
            var value = data[i].value;

            values.push(value);
            if(data[i].ratio){
                ratios.push(utils.format(+data[i].ratio * 100, true) + "%");
            } else {
                ratios.push(0);
            }
            tasks.push(data[i].task);
            ydata.unshift({
                value: data[i].name,
                textStyle: {
                    color: '#00ffff'//barLabelColor[i]
                }
            });
            sdata.unshift({
                value: value,
                task: data[i].task,
                itemStyle: {
                    normal: {
                        color: barColor[i]
                    }
                }
            });

        }
        if ( values.length ) {
            var maxval = Math.max.apply(null, values);
            var maxtask = Math.max.apply(null, tasks);

            var max = (maxval && maxval.toString()) || '';
            var maxT = (maxtask && maxtask.toString()) || '';

            var len = max.length + maxT.length;

            // var len = max.indexOf('.') ? max.length - 0.8 : max.length;

            // defaultUVChannelBarOption.grid.top = 15;
            // defaultUVChannelBarOption.grid.bottom = 0;
            // defaultUVChannelBarOption.grid.right = len * 10 + 20;

            // defaultUVChannelBarOption.yAxis.data = ydata;
            // defaultUVChannelBarOption.series[0].data = sdata;

            defaultUVChannelBarOption.grid.top = 20;
            defaultUVChannelBarOption.grid.bottom = 0;
            defaultUVChannelBarOption.grid.right = len * 10 + 100;

            defaultUVChannelBarOption.yAxis.data = ydata;
            defaultUVChannelBarOption.series[0].data = sdata;

            defaultUVChannelBarOption.barCategoryGap = 15;
            defaultUVChannelBarOption.series[0].markPoint =  {

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
                        show: true,
                        position: "inside",
                        backgroundColor: "#002060",
                        borderColor: "#1f85b7",
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 10],

                        color: "#fff"

                    }

                },
                data: []

            }
            defaultUVChannelBarOption.series[0].markPoint.symbolOffset = [len * 10 + 40, 0];
            for ( let i = 0, len = values.length, index = len - 1; i < len; i++ ) {

				let dataObj = {
                    label:{
                        normal:{show:true}
                    }
                };

				dataObj.yAxis = len - i - 1;

				if ( +tasks[i] !== 0 ) {
					dataObj.xAxis = values[i];
                }
                if ( +ratios[i] !== 0 ) {
					dataObj.ratio = ratios[i];
				}else{
                    dataObj.label.normal.show = false;
                }

                defaultUVChannelBarOption.series[0].markPoint.data.push(dataObj);

				defaultUVChannelBarOption.series[0].markPoint.label.normal.formatter = function (params) {
					return params.data.ratio;
				};
            }
            
            defaultUVChannelBarOption.series[0].label = {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#00ffff',
                    formatter: function ( opt ) {

                        // var val = String(opt.value).split('.')[0];
                        // val = utils.format(Number(val), true);

                        // var task = opt.data.task ? utils.format(+opt.data.task, true) : 0;

                        // return `${val} / ${task}`;

                        var val = opt.value;
                        return `${val}万`;
                    }

                }

            };
            defaultUVChannelBarOption.tooltip.formatter = '{b}: {c}万';
        }
        // var defaultUVChannelBarOption = getDefaultBarOption();
        // var ydata = [];
        // var sdata = [];
        // var values = [];
        // var tasks = [];

        // for ( var i = 0, len = data.length; i < len; i++ ) {
        //     var value = data[i].value;

        //     values.push(value);
        //     tasks.push(data[i].task);
        //     ydata.unshift({
        //         value: data[i].type,
        //         textStyle: {
        //             color: '#00ffff'//barLabelColor[i]
        //         }
        //     });
        //     sdata.unshift({
        //         value: value,
        //         task: data[i].task,
        //         itemStyle: {
        //             normal: {
        //                 color: barColor[i]
        //             }
        //         }
        //     });

        // }
        // if ( values.length ) {
        //     var maxval = Math.max.apply(null, values);
        //     var maxtask = Math.max.apply(null, tasks);

        //     var max = (maxval && maxval.toString()) || '';
        //     var maxT = (maxtask && maxtask.toString()) || '';

        //     var len = max.length + maxT.length;

        //     // var len = max.indexOf('.') ? max.length - 0.8 : max.length;

        //     defaultUVChannelBarOption.grid.top = 15;
        //     defaultUVChannelBarOption.grid.bottom = 0;
        //     defaultUVChannelBarOption.grid.right = len * 10 + 20;

        //     defaultUVChannelBarOption.yAxis.data = ydata;
        //     defaultUVChannelBarOption.series[0].data = sdata;

        //     defaultUVChannelBarOption.barCategoryGap = 15;
        //     defaultUVChannelBarOption.series[0].label = {
        //         normal: {
        //             show: true,
        //             position: 'right',
        //             color: '#00ffff',
        //             formatter: function ( opt ) {

        //                 var val = String(opt.value).split('.')[0];
        //                 val = utils.format(Number(val), true);

        //                 var task = opt.data.task ? utils.format(+opt.data.task, true) : 0;

        //                 // return `${val} / ${task}`;
        //                 return `${val}`;
        //             }

        //         }

        //     };
        //     defaultUVChannelBarOption.tooltip.formatter = '{b}: {c}';
        // }
        return defaultUVChannelBarOption;
    }

    function buildUVTrendOption ( data ) {
        // var defaultUVTrendOption = getDefaultLineOption();
        // // 解决断层
        // var len = data.current.length;
        // defaultUVTrendOption.xAxis.data = defaultUVTrendOption.xAxis.data.slice(0,len);

        // defaultUVTrendOption.grid.left = 20;

        // defaultUVTrendOption.xAxis.axisLine = {
        //     show: false,
        //     lineStyle: {
        //         color: '#00ffff'
        //     },
        //     onZero: false
        // };
        // defaultUVTrendOption.yAxis.show = true;
        // defaultUVTrendOption.yAxis.splitNumber = 2;
        // defaultUVTrendOption.yAxis.splitLine = {
        //     lineStyle: {
        //         color: '#333333'
        //     }
        // };

        // defaultUVTrendOption.yAxis.axisLabel = {
        //     color: '#00ffff',
        //     formatter: function ( value ) {
        //         var val = value;
        //         val = Math.round(val / 10000);
        //         if ( val == 0 ) {
        //             return '';
        //         } else {
        //             return val + '万';
        //         }

        //     }
        // };
        // var allZeroArr = [];
        // for ( var i = 0; i < 24; i++ ) {
        //     allZeroArr.push(0);
        // }

        // var cur = data.current.length ? data.current : allZeroArr;
        // var las = data.last.length ? data.last : allZeroArr;

        // defaultUVTrendOption.series[0].data = cur;
        // defaultUVTrendOption.series[1].data = las;

        // 418 36
        // 	"data": {
        // 		current: [],
        // 		last: []
        // 	}
        // 	"data": {
        // 		hq: [{"hour": "0","value": "2.73"}], // 以前
        // 		bq: [{"hour": "0","value": "2.73"}], // 当前
        // 	}
        var defaultUVTrendOption = getDefaultLineOption();
        // defaultUVTrendOption.series[1].name = "环比418";
        // 解决断层
        // var len = data.bq.length;
        // defaultUVTrendOption.xAxis.data = defaultUVTrendOption.xAxis.data.slice(0,len);

        defaultUVTrendOption.grid.left = 20;

        defaultUVTrendOption.xAxis.axisLine = {
            show: false,
            lineStyle: {
                color: '#00ffff'
            },
            onZero: false
        };
        defaultUVTrendOption.yAxis.show = true;
        defaultUVTrendOption.yAxis.splitNumber = 2;
        defaultUVTrendOption.yAxis.splitLine = {
            lineStyle: {
                color: '#333333'
            }
        };

        defaultUVTrendOption.yAxis.axisLabel = {
            color: '#00ffff',
            formatter: function ( value ) {
                var val = value;
                // val = Math.round(val / 10000);
                if ( val == 0 ) {
                    return '';
                } else {
                    return val + '万';
                }

            }
        };
        defaultUVTrendOption.tooltip = {
            trigger: 'axis',
            padding: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            formatter: params => {
                if (params && params.length > 0) {
                    let result = '';
                    result = '<div style="text-align: left; padding-bottom: 5px">' + params[0].name + '</div>';
                    params.forEach(item => {
                        const v = +item.value === 0 ? 0 : item.value + '万';
                        result +=
                            '<div style="text-align: left">' +
                            item.marker +
                            ' ' +
                            item.seriesName +
                            ' : ' +
                            v +
                            '</div>';
                    });
                    return result;
                }
            }
        };
        var allZeroArr = [];
        for ( var i = 0; i < 24; i++ ) {
            allZeroArr.push(0);
        }

        //var cur = data.bq.length ? data.bq : allZeroArr;
        //var las = data.hq.length ? data.hq : allZeroArr;
         var pc = data.pc.length ? data.pc : allZeroArr;
         var wap = data.wap.length ? data.wap : allZeroArr;
         var app = data.app.length ? data.app : allZeroArr;
        defaultUVTrendOption.series[0].data = pc;
         defaultUVTrendOption.series[1].data = wap;
         defaultUVTrendOption.series[2].data = app;
        return defaultUVTrendOption;
    }

    function buildSaleTrendOption ( data ) {

        var defaultSaleTrendOption = getDefaultLineOption();
        // 解决断层
        // var len = data.current.length;
        // defaultSaleTrendOption.xAxis.data = defaultSaleTrendOption.xAxis.data.slice(0,len);
        // defaultSaleTrendOption.series[1].name = "同比618";
        defaultSaleTrendOption.grid.left = 20;

        defaultSaleTrendOption.xAxis.axisLine = {
            show: false,
            lineStyle: {
                color: '#00ffff'
            },
            onZero: false
        };
        defaultSaleTrendOption.yAxis.show = true;
        defaultSaleTrendOption.yAxis.splitNumber = 2;
        defaultSaleTrendOption.yAxis.splitLine = {
            lineStyle: {
                color: '#333333'
            }
        };

        defaultSaleTrendOption.yAxis.axisLabel = {
            color: '#00ffff',
            formatter: function ( value ) {
                console.log(value, 111);
                var val = value;
                val = String(val / 10000).split('.')[0];
                if ( val == 0 ) {
                    return '';
                } else {
                    return val + '万';
                }

            }
        };

        var allZeroArr = [];
        for ( var i = 0; i < 24; i++ ) {
            allZeroArr.push(0);
        }

        //var cur = data.current.length ? data.current : allZeroArr;
        //var las = data.last.length ? data.last : allZeroArr;
        //defaultSaleTrendOption.series[0].name = '成交额';
        var pc = data.pc.length ? data.pc : allZeroArr;
        var wap = data.wap.length ? data.wap : allZeroArr;
        var app = data.app.length ? data.app : allZeroArr;
        defaultSaleTrendOption.series[0].data = pc;
         defaultSaleTrendOption.series[1].data = wap;
         defaultSaleTrendOption.series[2].data = app;
        defaultSaleTrendOption.tooltip = {
            trigger: 'axis',
            padding: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            formatter: params => {
                if (params && params.length > 0) {
                    let result = '';
                    result = '<div style="text-align: left; padding-bottom: 5px">' + params[0].name + '</div>';
                    params.forEach(item => {
                        const v = +item.value === 0 ? 0 : utils.format(item.value,true) + '元';
                        result +=
                            '<div style="text-align: left">' +
                            item.marker +
                            ' ' +
                            item.seriesName +
                            ' : ' +
                            v +
                            '</div>';
                    });
                    return result;
                }
            }
        };

        return defaultSaleTrendOption;
    }

    function buildTransferRateAndOrderOption ( data ) {
        var option = getDoubleBarOption();
        var types = [],
            values = [],
            ratios = [];

        for ( var i = 0, len = data.length; i < len; i++ ) {
            types.push(data[i].type);
            values.push(data[i].value);
            ratios.push(data[i].ratio * 100);

        }

        if ( values.length ) {

            var maxval = Math.max.apply(null, values);
            var max = (maxval && maxval.toString()) || '';
            var len = max.indexOf('.') ? max.length - 0.8 : max.length;

            option.grid.right = len * 10 + 40;
            option.grid.bottom = 0;
            option.grid.top = 0;

            var ydata = [];

            option.xAxis[0].max = Math.max.apply(null, ratios);
            option.xAxis[1].max = maxval;

            var data1 = [];
            var data2 = [];

            for ( let i = 0, len = values.length, index = len - 1; i < len; i++ ) {

                ydata.unshift({
                    value: types[i],
                    textStyle: {
                        color: '#00ffff'//barLabelColor[i]
                    }
                });

                data1.unshift({
                    value: ratios[i],
                    itemStyle: {
                        normal: {
                            color: doubleBarColor[i]
                        }
                    }
                });

                option.series[0].label.normal.formatter = function ( params ) {
                    var str = (parseFloat(ratios[index]).toFixed(2) + '%').toString();
                    index--;
                    if ( index < 0 ) index = len - 1;
                    return str;
                };
            }
            for ( let i = 0, len = values.length, index = len - 1; i < len; i++ ) {
                data2.unshift({
                    value: values[i],
                    itemStyle: {
                        normal: {
                            color: barColor[i]
                        }
                    }
                });

                option.series[1].label.normal.formatter = function ( params ) {
                    var str = String(utils.format(values[index], true));
                    index--;
                    if ( index < 0 ) index = len - 1;
                    return str;
                };
            }
            option.series[0].name = '转化率';
            option.series[1].name = '订单';
            option.series[0].data = data1;
            option.series[1].data = data2;
            option.yAxis.data = ydata;
            //option.tooltip.formatter = '{b}:<br/>{a0}: {c0}%<br/> {a1}: {c1}'
            option.tooltip.formatter = function ( params ) {
                var str = '';
                str += params[0].name + '<br/>';
                params.forEach(function ( item ) {
                    str += item.seriesName + ': ';
                    if ( item.seriesName === '转化率' ) {
                        str += (item.data.value).toFixed(2) + '%';
                    } else {
                        str += item.data.value;
                    }
                    str += '<br />';
                });

                return str;
            };
        }

        return option;

    }

    function buildTotalTransferRateOption ( data ) {
        var defaultOption = getDefaultGaugeOption();

        var color = [];
        var num = 0.1;
        for ( var i = 0; i < 10; i++ ) {
            color.push([num, gaugeColor[i]]);
            num += 0.1;
        }
        defaultOption.series[0].axisLine.lineStyle.color = color;
        defaultOption.series[0].data.value = parseFloat(data.site_ratio * 100).toFixed(2);
        return defaultOption;
    }

    function buildTimeData () {
        var arr = [];

        for ( var i = 0; i < 24; i++ ) {
            var str = i + '-' + (i + 1);
            arr.push(str);
        }
        return arr;
    }

})();