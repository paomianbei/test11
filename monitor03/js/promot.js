//  主活动页
Vue.component("promot-data", {
  template: `
  <div class="promotion">
    <h3>活动主页数据</h3>
    <div class="pro-content waterwave2">
        <input type="text" v-model="promote.url" disabled="true" />
        <div class="target">
          <div v-for="(value, key) in promote" v-if="(type!='APP')">
            <p>{{target[key]}}</p>
            <p>
                <p v-if="key === 'take_order_rate'">{{(Number(value)*100).toFixed(2)}}%</p>
                <p v-if="key === 'order_total_amount'">¥{{value | format}}</p>
                <p v-if="(key != 'take_order_rate') && (key != 'order_total_amount') && (key != 'url')">{{value | format}}</p>
            </p>
          </div>
          <div v-for="(value, key) in promote" v-if="(type==='APP') && (key != 'click') && (key != 'entries_count')">
            <p>{{target[key]}}</p>
            <p>
                <p v-if="key === 'take_order_rate'">{{(Number(value)*100).toFixed(2)}}%</p>
                <p v-if="key === 'order_total_amount'">¥{{value | format}}</p>
                <p v-if="(key != 'take_order_rate') && (key != 'order_total_amount') && (key != 'url')">{{value | format}}</p>
            </p>
          </div>
        </div>
    </div>
  </div>
      `,
  props: ["type"],
  data: function() {
    return {
      target: {
        uv: "UV",
        pv: "PV",
        vistor: "访问",
        click: "点击量",
        entries_count: "登入次数",
        order_total_amount: "参与-销售",
        take_order_count: "参与-订单量",
        take_order_rate: "参与-转化率"
      },
      promote: {}
    };
  },
  created: function() {
    this.getData()
    setInterval(()=>{
        this.getData()
    },4*60*1000)
  },
  updated:function () { 
    let username = utils.GetCookie("admin-optool_username") 
    let img = utils.waterwave(username,logindate);
    let $div = document.querySelector('.waterwave2');
    $div.style.backgroundImage = "url(" + img;
  },
  methods: {
    getData: function() {
      return ajax(`${config.getPromotion}site=${this.type}`).then(res => {
        if (res && res.success) {
            this.promote = res.data;
          return this.promote;
        } else {
          this.promote = {}
          return Promise.reject("获取主活动页数据失败");
        }
      });
    }
  },
  watch: {
    type: function() {
      this.getData();
    }
  }
});
