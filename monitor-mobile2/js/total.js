new Vue({
  el: "#total",
  data: {
	selected:'',
    order_num: 0,
    current_amount: 0,
    channelSale: {
    },
    orderAmount: {
	},
	time:[],
	today:[],
	date:""
  },
  created() {
	var now = new Date();
	var hour = now.getHours();
	for(let i=1; i <= hour;i++){
		if(i<10){
			i="0"+i
		}
		this.time.push(i)
	}
	this.time = this.time.reverse()
	this.today = utils.fnDate().split(" ")[0];
	this.date = this.today.split("-").join("")
	this.getTotal();
  },
  methods: {
	selectVal: function(e) {
		this.selected = e.target.value;
	},
    getTotal() {
		let _this = this;
		if(!this.selected){
			this.selected = this.date+this.time[0]
		}
        ajax(`${config.totalSale}?datetime=${this.selected}`)
          .then(function(res) {
            if (res.success) {
				return res.data;
            } else {
              return Promise.reject("数据获取失败");
            }
          })
          .then(res => {
			var orderAmount = Object.assign({}, res.orderAmount);
			var channelSale = Object.assign({}, res.channelSale);
			this.order_num = utils.format(res.order_num,true).toString();
			this.current_amount =  utils.format(res.current_amount,true).toString()

            for (var key in channelSale) {
              channelSale[key] =utils.format(channelSale[key],true).toString()
              _this.channelSale[key] = channelSale[key];
            }

            for (var key in orderAmount) {
              orderAmount[key] = utils.format(orderAmount[key], true);
              _this.orderAmount[key] = orderAmount[key];
            }
          });
    }
  },
  watch: {
    selected:function(){
		this.getTotal();
    }
  }
});
