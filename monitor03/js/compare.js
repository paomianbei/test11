Vue.filter("format", function(num) {
  if (num > 1) {
    var result = [],
      counter = 0;
    num = (num || 0).toString().split(".")[0];
    for (var i = num.length - 1; i >= 0; i--) {
      counter++;
      result.unshift(num[i]);
      if (!(counter % 3) && i !== 0) {
        result.unshift(",");
      }
    }
    return result.join("");
  } else {
    return num;
  }
});
Vue.filter("percent", function(num) {
  return Math.abs(Math.round(num * 100))
});
Vue.filter("float2", function(num) {
  return parseFloat(num * 100).toFixed(2)
});

new Vue({
  el: ".pricelist",
  data: {
    list: [],
    catelist:[],
    selected:'001'
  },
  created() {
    this.getCategory()
    this.getPrice()
    setInterval(() => {
      this.getPrice()
    }, 5 * 60 * 1000);
  },
  updated:function () { 
    let username = utils.GetCookie("admin-optool_username") 
    let img = utils.waterwave(username,logindate);
    let $div = document.querySelector('.waterwave5');
    $div.style.backgroundImage = "url(" + img;
  },
  methods: {
    selectVal: function(e) {
      this.selected = e.target.value;
    },
    getCategory() {
      return ajax(config.getCateList).then(res => {
        if (res && res.success) {
          this.catelist = res.data["DQC"].list;
          return this.catelist;
        } else {
          return Promise.reject("获取品类配置数据失败");
        }
      });
    },
    getPrice() {
      return ajax(`${config.getCompare}cate_code=${this.selected}`).then(res => {
        if (res && res.success) {
          this.list = res.data[0].list;
          return this.list;
        } else {
          return Promise.reject("获取比价数据失败");
        }
      });
    }
  },
  watch: {
    selected:function(){
      this.getPrice()
    }
  }
});
