// 热销组件
var nameArr = ["品类", "城市", "品牌", "普通单品", "团抢单品"];
var nameBrr = ["category", "city", "brand", "product", "group"];
Vue.component("top-rank", {
  template: `
  <div class="topRank">
    <h3>热销排行榜</h3>
    <div class="hotsale waterwave3">
        <div v-for="(value, key, i) in hotData" :class="'table-'+key">
            <div class="table-head">
                <table>
                    <colgroup>
                        <col style="width: 6%;"></col>
                        <col style="width: 20%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 10%;"></col>
                        <col style="width: 10%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 10%;"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th v-for="(them,index) in thems">
                                <i v-if="index == 'name'">{{nameArr[i]}}</i>
                                <i v-else>{{them}}</i>
                                <span class="sort" v-if="index !='rank' && index !='name' && index !='pay_rate'">
                                    <i class="mark up" v-on:click="getOrder(event)" :sort="sort.asc" :orderby="index" :type="nameBrr[i]"></i>
                                    <i class="mark down" v-on:click="getOrder(event)" :sort="sort.desc" :orderby="index" :type="nameBrr[i]" ></i>
                                </span>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="table-body">
                <table style="table-layout: fixed;width:100%;">
                    <colgroup>
                        <col style="width: 6%;"></col>
                        <col style="width: 20%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 10%;"></col>
                        <col style="width: 10%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 11%;"></col>
                        <col style="width: 10%;"></col>
                    </colgroup>
                    <tbody>
                        <tr v-for="(category,index) in value">
                            <td>{{category.rank}}</td>
                            <td :title="category.name" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{category.name}}</td>
                            <td>{{category.detail_uv | format}}</td>
                            <td>{{category.detail_pv | format}}</td>
                            <td>{{category.order | format}}</td>
                            <td>¥{{category.amount | format}}</td>
                            <td>{{category.pay_order | format}}</td>
                            <td>¥{{category.pay_amount | format}}</td>
                            <td>{{category.pay_rate | float2}}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
      `,
  props: ["type"],
  data: function() {
    return {
      hotData: {},
      thems: {
        rank: "排名",
        name: "品类",
        detail_uv: "详情页UV",
        detail_pv: "详情页PV",
        order: "毛订单",
        amount: "毛销售",
        pay_order: "已支付订单",
        pay_amount: "已支付销售",
        pay_rate: "支付转化率"
      },
      sort: {
        asc: "asc",
        desc: "desc"
      },
      orderby: "",
      click_range: ""
    };
  },
  created: function() {
    // 初次加载
    this.getinit();
    // 定时器
    setInterval(() => {
      if(this.click_range){
        this.getUpdate();
      }else{
        this.getinit();
      }
    }, 4 * 60 * 1000);
  },
  updated:function () { 
    let username = utils.GetCookie("admin-optool_username") 
    let img = utils.waterwave(username,logindate);
    let $div = document.querySelector('.waterwave3');
    $div.style.backgroundImage = "url(" + img;
  },
  methods: {
    getinit:function() {
      return ajax(`${config.getRank}site=${this.type}`).then(res => {
        if (res && res.success) {
          this.hotData = res.data;
          return this.hotData;
        } else {
          return Promise.reject("获取热销排行榜数据失败");
        }
      });
    },
    getRange:function(data) {
      var url = data ? "&" + utils.joinUrl(data) : "";
        ajax(`${config.getRank}site=${this.type}${url}`).then(res => {
          if (res && res.success) {
            this.hotData = Object.assign(this.hotData, res.data);
            return this.hotData;
          } else {
            return Promise.reject("获取热销排行榜数据失败");
          }
        });
    },
    getUpdate:function () {  
      var url = this.click_range ? "&" + utils.joinUrl(this.click_range) : ""
      // 两个请求 排序／全部
      var url1 = `${config.getRank}site=${this.type}${url}`;
      var url2 = `${config.getRank}site=${this.type}`;
      var urls = [url1, url2];
      Promise.all(urls.map(url =>
          fetch(url).then(resp => resp.text())
      )).then(texts => {
          let orderdata = JSON.parse(texts[0]).data;
          let alldata = JSON.parse(texts[1]).data;
          this.hotData = Object.assign(alldata,orderdata)
      }).catch(err => {
        console.log(err)
      });
    },
    getOrder(e) {
      let data = {
        type: e.target.getAttribute("type"),
        orderby: e.target.getAttribute("orderby"),
        sort: e.target.getAttribute("sort")
      };
      this.click_range = data;
      this.getRange(data);
      $(".selectedup,.selecteddown")
        .removeClass("selectedup")
        .removeClass("selecteddown");
      let className = "mark";
      className +=
        data.sort === "asc" ? " up selectedup" : " down selecteddown";
      e.target.setAttribute("class", className);
    }
  },
  watch: {
    type: function() {
      if(this.click_range){
        this.getUpdate();
      }else{
        this.getinit();
      }
    }
  }
});
