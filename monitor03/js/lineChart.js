var option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    },
    show: false
  },
  color: ["rgba(254, 192, 58, 0.3)","rgba(23, 165, 255, 0.3)"],
  grid: {
    top: "5px",
    bottom: "5px"
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [],
      show: false
    }
  ],
  yAxis: [
    {
      type: "value",
      show: false
      // max: "dataMax"
    }
  ],
  series: [
    {
      animation: false,
      smooth: true,
      symbol: "none",
      type: "line",
      areaStyle: { normal: {} },
      data: []
    },
    {
      animation: false,
      smooth: true,
      symbol: "none",
      type: "line",
      areaStyle: { normal: {} },
      data: []
    }
  ]
};
var colors = ["#ff339a", "#cccccc", "#f8bd0e", "#ccc"];
var bigOptions = {
  color: colors,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  grid: {
    // right: "20%"
  },
  legend: {
    data: ["销售", "去年销售", "UV", "去年UV"],
    bottom: "0px"
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: false,
        lineStyle: {
          color: "#483d8b",
          type: "dashed",
          width: 1
        }
      },
      // max: "dataMax",
      name: "UV",
      // min: 0,
      // max: 250,
      position: "right",
      axisLine: {
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: "{value} W",
        color: "red"
      }
    },
    {
      type: "value",
      splitLine: {
        show: false,
        lineStyle: {
          color: "#483d8b",
          type: "dashed",
          width: 1
        }
      },
      // max: "dataMax",
      name: "销量",
      // min: 0,
      // max: 25,
      position: "left",
      axisLine: {
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: "{value} W"
      }
    }
  ],
  series: [
    {
      name: "销售",
      type: "bar",
      animation: false,
      smooth: true,
      symbol: "none",
      barGap: "0", // Make series be overlap
      yAxisIndex: 1,
      data: []
    },
    {
      name: "去年销售",
      type: "bar",
      animation: false,
      smooth: true,
      symbol: "none",
      barGap: "0", // Make series be overlap
      yAxisIndex: 1,
      data: []
    },
    {
      name: "UV",
      type: "line",
      animation: false,
      smooth: true,
      yAxisIndex: 0,
      data: []
    },
    {
      name: "去年UV",
      type: "line",
      animation: false,
      smooth: true,
      yAxisIndex: 0,
      data: []
    }
  ]
};
Vue.component("line-chart", {
  template: `
    <div class="database waterwave1">
      <div class="linecontainer">
        <div  class="site" v-for="(item,index) in list">
            <div class="site-mark">{{item[0].title}}</div>
            <div class="line" v-for="(ele,i) in item[0].data">
                <div class="line-item">
                  <div class="des">
                    <div>{{ele.name}}</div>
                    <div class="light" v-if="i === 5">{{ele.value | float2}}%</div>
                    <div class="light" v-else-if="i === 1 || i === 3">¥{{ele.value | format}}</div>
                    <div class="light" v-else>{{ele.value | format}}</div>
                    <span>
                      <p>
                        <span v-bind:class="ele.add > 0 ? 'mark green' : 'mark red'"></span> 
                        <span>{{ele.add | percent}}%</span>
                        <span>同比去年</span>
                      </p>
                    </span>
                  </div>
                  <div :class="'main-'+index" style="height:60px;width:150px;"></div>
                </div>
            </div> 
        </div>
        <div class="bigChart" style="height:400px;width:100%;">
        </div>
      </div>
    </div>
    `,
  props: ["type"],
  data: function() {
    return {
      list: [],
      type: this.type,
      date: []
    };
  },
  created: function() {
    this.getData().then(data => {
      this._renderCharts(data);
    });
    setInterval(() => {
      this.getData().then(data => {
        this._renderCharts(data);
      });
    }, 3 * 60 * 1000);
  },
  updated:function () { 
    let username = utils.GetCookie("admin-optool_username") 
    let img = utils.waterwave(username,logindate);
    let $div = document.querySelector('.waterwave1');
    $div.style.backgroundImage = "url(" + img;
  },
  methods: {
    handle: function(topDatas) {
      //假数据
      let keys = Object.keys(topDatas);
      //formatData用于组装渲染数据
      let formatData = {};
      let rev_json_one = {
        "0": "全部",
        "1": "PC",
        "2": "WAP",
        "3": "APP"
      };
      let sites = {
        ALL: "全部",
        PC: "PC",
        WAP: "WAP",
        APP: "APP"
      };
      let rev_json_two = {
        "0": "UV",
        "1": "毛销售",
        "2": "毛订单",
        "3": "支付销售",
        "4": "支付订单",
        "5": "转化率"
      };
      keys.forEach((item, index) => {
        //创建第一层key，all,web,app...，值为[{}]
        formatData[item] = [{}];
        let w_obj = formatData[item][0];
        for (var i in formatData) {
          for (var j in sites) {
            if (i === j) {
              w_obj.title = sites[j];
            }
          }
        }
        // w_obj.title = rev_json_one[index];
        w_obj.data = [{}, {}, {}, {}, {}, {}];
        w_obj.data.forEach((item, index) => {
          item.y_one = [];
          item.y_two = [];
          item.name = rev_json_two[index];
        });
        //数据模型外层已完成
        //开始处理接收的数据
        //1，拿到返回数据中，每项对应的数据对象
        let top_data_item = topDatas[item];
        //2，拿到日期keys数组
        let topData_keys = Object.keys(top_data_item);
        this.date = topData_keys;
        //3，便利日期数组，取出对应的值
        topData_keys.forEach((e, i) => {
          //每一天对应的值
          let data_item = top_data_item[e];
          let {
            uv_now,
            uv_last,
            amount_now,
            amount_last,
            order_now,
            order_last,
            pay_amount_now,
            pay_amount_last,
            pay_order_now,
            pay_order_last,
            rate_now,
            rate_last
          } = data_item;
          _handerData(uv_now, uv_last, 0);
          _handerData(amount_now, amount_last, 1);
          _handerData(order_now, order_last, 2);
          _handerData(pay_amount_now, pay_amount_last, 3);
          _handerData(pay_order_now, pay_order_last, 4);
          _handerData(rate_now, rate_last, 5);
          function _handerData(now, last, index) {
            if (now >= 0) {
              w_obj.data[index].y_one.push(now);
              w_obj.data[index].value = now;
              // w_obj.data[index].add = parseInt((now - last) * 100 / last);
              w_obj.data[index].add = (now - last)/ last;
            }
            w_obj.data[index].y_two.push(last);
          }
        });
      });
      return formatData;
    },
    getData: function() {
      return ajax(`${config.getTop}site=${this.type}`).then(res => {
        if (res && res.success) {
          this.list = this.handle(res.data);
          return this.list;
        } else {
          return Promise.reject("获取顶部数据失败");
        }
      });
    },
    _renderCharts(list) {
      if (list) {
        //  渲染小图
        for (var i in list) {
          let itemList = document.querySelectorAll(".main-" + i);
          for (var j = 0; j < itemList.length; j++) {
            let myChart = echarts.init(itemList[j]);
            let opt = Object.assign({}, option);
            opt.series[0].data = this.list[i][0].data[j].y_one;
            opt.series[1].data = this.list[i][0].data[j].y_two;
            opt.xAxis[0].data = this.list[i][0].data[j].y_two;
            myChart.setOption(opt);
          }
        }
        // 渲染大图
        let bigChart = document.querySelectorAll(".bigChart");
        let myChart2 = echarts.init(bigChart[0]);
        let opt2 = Object.assign({}, bigOptions);
        opt2.xAxis[0].data = this.date;
        // 万元换算
        function convert(data) {
          data.forEach(function(ele, index) {
            data[index] = ele / 10000;
          });
          return data;
        }
        let xy1 = list[this.type][0].data[3].y_one;
        let xy2 = list[this.type][0].data[3].y_two;
        let uy1 = list[this.type][0].data[0].y_one;
        let uy2 = list[this.type][0].data[0].y_two;

        opt2.series[0].data = convert(xy1);
        opt2.series[1].data = convert(xy2);
        opt2.series[2].data = convert(uy1);
        opt2.series[3].data = convert(uy2);
        
        myChart2.setOption(opt2);
      }
    }
  },
  watch: {
    type: function() {
      this.getData().then(data => {
        this._renderCharts(data);
      });
    }
  }
});
