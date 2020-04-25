Vue.component("stock-data", {
  template: `
    <div class="stock" ref="stock">
        <h3>库存数据</h3>
        <div class="stockList waterwave4">
            <div class="stockitem" v-for="(value, key,i) in stock" >
                <div class="table-head">
                    <table>
                        <colgroup>
                            <col style="width: 64%;"></col>
                            <col style="width: 20%;"></col>
                            <col style="width: 16%;"></col>
                        </colgroup>
                        <thead>
                            <tr class="stockthem">
                                <th>{{value.title}}</th>
                                <th  colspan="2" style="font-size:14px; text-align:right;">{{value.desc}}</th>
                            </tr>
                            <tr :kind = "value.type">
                                <th>商品名称</th>
                                <th style="text-align:right;">到达城市量</th>
                                <th style="text-align:right;">缺货率</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table-body">
                    <table  class="table-scroll" style="table-layout: fixed;width:100%;"
                    >
                        <colgroup>
                            <col style="width: 64%;"></col>
                            <col style="width: 20%;"></col>
                            <col style="width: 16%;"></col>
                        </colgroup>
                        <tbody>
                            <tr v-for="(item,index) in value.list">
                                <td style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;" :title="item.name">{{item.name}}</td>
                                <td style="text-align:right;padding:0 5px;"">{{item.arrive | format}}</td>
                                <td style="text-align:right;padding:0 5px;">{{parseInt((item.stockout_rate*100))}}%</td>
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
      stock: []
    };
  },
  created: function() {
    // 初次加载
    this.getData();
    // 定时器
    setInterval(() => {
      this.getData();
    }, 5 * 60 * 1000);
  },
  mounted: function() {
    this.$nextTick(function() {
      // DOM 现在更新了
      // `this` 绑定到当前实例
      function polling($table) {
        $table.animate({ top: `-41px` }, 1000, "linear", () => {
          $table.css("top", "-0px");
        });
        setTimeout(() => {
          this.stock &&
            this.stock.forEach((item, index) => {
              let { list } = item;
              if (Array.isArray(list)) {
                if(list.length){
                  let first = list.shift();
                  list.push(first);
                }
              }
            });
        }, 1000);
      }
      setTimeout(() => {
        let $table = $(".table-scroll");
        polling = polling.bind(this);
        polling($table);
        setInterval(() => {
          polling($table);
        }, 3000);
      }, 3000);
    });
  },
  updated:function () { 
    let username = utils.GetCookie("admin-optool_username") 
    let img = utils.waterwave(username,logindate);
    let $div = document.querySelector('.waterwave4');
    $div.style.backgroundImage = "url(" + img;
  },
  methods: {
    getData() {
      return ajax(`${config.getStock}site=${this.type}`).then(res => {
        if (res && res.success) {
          this.stock = res.data;
          return this.stock;
        } else {
          return Promise.reject("获取库存数据失败");
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
