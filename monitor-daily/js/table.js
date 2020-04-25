/**
 * Created by miinow on 2017/11/3.
 */
Vue.filter("format", function (num) {
	var result = [], counter = 0;
	var numArr = (num || 0).toString().split(".");
	var int = numArr[0], float = numArr[1];
	for ( var i = int.length - 1; i >= 0; i-- ) {
		counter++;
		result.unshift(int[i]);
		if ( !(counter % 3) && i !== 0 ) {
			result.unshift(",");
		}
	}
	if(float){
		return result.join("") + '.' + float;
	} else {
		return result.join('')
	}


});

Vue.filter('float', function(num){
	return +num.toFixed(2)
})

Vue.component("task-table", {
	template: `
		<table>
			<caption class="title">{{this.title}}</caption>
            <tr class="head">
                <td>销售</td>
                <td>支付金额(万)</td>
                <td>目标值(万)</td>
                <td>完成百分比</td>
            </tr>
            <tr class="content" v-for="item in this.data" v-if="item.name !== '金融'">
            	<td>{{item.name}}</td>
            	<td>{{item.value | format}}</td>
            	<td>{{item.task | format}}</td>
            	<td>{{Number(item.ratio)*100 | float}}%</td>
			</tr>
            
        </table>
	`,
	props: ["data", "title"],

});

Vue.component("cate-table", {
	template: `
		<table>
			<caption class="title">{{this.title}}</caption>
            <tr class="head">
                <td>销售</td>
                <td>支付金额(万)</td>
                <td>目标值(万)</td>
                <td>完成百分比</td>
            </tr>
            <tr class="content" v-for="item in this.data">
            	<td>{{item.type}}</td>
            	<td>{{item.amount | format}}</td>
            	<td>{{item.amount_task | format}}</td>
            	<td>{{Number(item.ratio)*100 | float}}%</td>
			</tr>
            
        </table>
	`,
	props: ["data", "title"],

});

Vue.component("pay-transfer", {
	template: `
		<table>
			<caption class="title">{{this.title}}</caption>
            <tr class="head"> 
                <td v-for="item in this.head">{{item}}</td>
            </tr>
            <tr class="content" v-for="item in this.data">
            	<td>{{item.name}}</td>
            	<td>{{item.uv | format}}</td>
            	<td>{{Number(item.uvComp)*100 | float}}%</td>
            	<td>{{item.orderAmount | format}}</td>
            	<td>{{Number(item.orderAmountComp)*100| float}}%</td>
            	<td>{{item.saleAmount | format}}</td>
            	<td>{{Number(item.saleAmountComp)*100| float}}%</td>
            	<td>{{Number(item.ratio)*100 | float}}%</td>
            	<td>{{Number(item.ratioComp)*100| float}}%</td>
			</tr>
            
        </table>
	`,
	props: ["data", "title"],
	data: function () {
		return {
			head: ["站点", "UV", "UV同比", "支付订单量", "支付订单量同比", "支付销售额/万", "支付销售额同比", "支付转化率", "转化率同比"]
		};
	},
	created(){
		//let _this = this;
		//setInterval(function(){
		//	console.log(_this.data)
		//},1000)
	}

});

new Vue({
	el: ".main",
	data: {
		saleTask: {
			title: "一、今日销售任务",
			data: []
		},
		baihuo: {
			title: "三、今日百货城各品类完成情况",
			data: []
		},
		jiadian: {
			title: "二、今日电器城各品类完成情况",
			data: []
		},
		pay: {
			title: "四、今日三端支付转化情况",
			data: []
		}
	},
	created(){
		this.getSaleTask();
		this.getJiadian();
		this.getBaihuo();
		this.getPayTransfer();
	},
	methods: {
		getSaleTask(){
			let _this = this;
			ajax(config.saleTask).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取每日任务失败");
				}
			}).then(function (res) {
				//_this.saleTask.data = res;

				let total = {};
				total.name = "合计";
				total.value = 0;
				total.task = 0;

				res.forEach(item => {

					if(item.name === '金融')return;

					let data = {};
					data.value = (item.value/10000).toFixed(2);
					data.task = (item.task/10000).toFixed(2);
					data.name = item.name;
					data.ratio = item.ratio;

					total.value += Number(data.value);

					total.task += Number(data.task);

					_this.saleTask.data.push(data);
				});
				total.value = (total.value).toFixed(2)
				total.task = (total.task).toFixed(2)
				total.ratio = (total.value / total.task).toFixed(2);
				_this.saleTask.data.push(total);

			});
		},
		getJiadian(){
			let _this = this;
			ajax(config.jiadianCate).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取家电数据失败");
				}
			}).then(function (res) {

				//_this.jiadian.data = res;

				let total = {};
				total.type = "合计";
				total.amount = 0;
				total.amount_task = 0;

				res.forEach(item => {
					let data = {};
					data.amount = (item.amount/10000).toFixed(2);
					data.amount_task = (item.amount_task/10000).toFixed(2);
					data.type = item.type;
					data.ratio = item.ratio;

					total.amount += Number(data.amount);

					total.amount_task += Number(data.amount_task);

					_this.jiadian.data.push(data);


				});

				total.amount = (total.amount).toFixed(2)
				total.amount_task = (total.amount_task).toFixed(2)
				total.ratio = (total.amount / total.amount_task).toFixed(2);
				_this.jiadian.data.push(total);

			});
		},
		getBaihuo(){
			let _this = this;
			ajax(config.baihuoCate).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取百货数据失败");
				}
			}).then(function (res) {

				//_this.baihuo.data = res;
				let total = {};
				total.type = "合计";
				total.amount = 0;
				total.amount_task = 0;

				res.forEach(item => {
					let data = {};
					data.amount = (item.amount/10000).toFixed(2);
					data.amount_task = (item.amount_task/10000).toFixed(2);
					data.type = item.type;
					data.ratio = item.ratio;

					total.amount += Number(data.amount);

					total.amount_task += Number(data.amount_task);
					_this.baihuo.data.push(data);
				});
				total.amount = (total.amount).toFixed(2)
				total.amount_task = (total.amount_task).toFixed(2)
				total.ratio = (total.amount / total.amount_task).toFixed(2);
				_this.baihuo.data.push(total);

			});
		},
		getPayTransfer(){
			let _this = this;
			ajax(config.payTransfer).then(function (res) {
				if ( res.success ) {
					return res.data;
				} else {
					return Promise.reject("获取支付转化数据失败");
				}
			}).then(function (res) {
				let date = new Date();
				date = date.getFullYear() + zeroFillToString(date.getMonth() + 1) + zeroFillToString(date.getDate());

				let aData = [];
				let totalAmount = 0;
				for ( let key in res ) {

					if(key ==='ALL') continue;
					for ( let d in res[key] ) {
						if ( d === date ) {
							let obj = res[key][d];
							let oData = {
								name: key,
								uv: obj.uv_now,
								uvComp: obj.sc_uv_last,

								orderAmount: obj.pay_order_now,
								orderAmountComp: obj.sc_order_last,
								saleAmount: (Number(obj.pay_amount_now)/10000).toFixed(2),
								saleAmountComp: obj.sc_pay_amount_last,
								ratio: obj.rate_now,
								ratioComp: obj.sc_rate_last
							};
							totalAmount += Number(oData.saleAmount);
							aData.push(oData);

							break;
						}
					}

				}
				for ( let key in res ){
					if(key === 'ALL'){
						for ( let d in res[key] ) {
							if ( d === date ) {
								let obj = res[key][d];
								let oData = {
									name: '全站',
									uv: obj.uv_now,
									uvComp: obj.sc_uv_last,

									orderAmount: obj.pay_order_now,
									orderAmountComp: obj.sc_order_last,
									saleAmountComp: obj.sc_pay_amount_last,
									ratio: obj.rate_now,
									ratioComp: obj.sc_rate_last
								};
								oData.saleAmount = totalAmount.toFixed(2);
								aData.push(oData);

								break;
							}
						}
					}
				}

				_this.pay.data = aData;

				function zeroFillToString (num) {
					if ( num < 10 ) return "0" + num;

					return num.toString();
				}
			});
		}

	}

});

function ajax(url) {
	return fetch(url).then(res => res.json()).then(result => {
		if (!result.success) {
			console.log(`接口错误, ${url}`);
		}
		return Promise.resolve(result)
	}).catch(e => console.log('请求出错', e))
}