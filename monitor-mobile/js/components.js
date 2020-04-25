Vue.component("number", {
	template: "<span :class='isNum'>{{showNum}}</span>",
	props: [ "num", "index", "delay", "arr", "update" ],
	data() {
		return {
			showNum: this.num,
		};
	},
	created() {
	},
	methods: {
		animate() {
			let _this = this;

			if ( isNaN(+_this.num) ) {
				_this.showNum = this.num;
				return;
			}
			_this.showNum = +this.num;
			let intervalFunc;
			let interval = 30;
			intervalFunc = setInterval(function () {
				if ( _this.showNum === 9 ) {
					_this.showNum = 0;
				} else {
					_this.showNum++;
				}
			}, interval);

			setTimeout(function () {
				clearInterval(intervalFunc);
				_this.showNum = _this.num;
			}, this.delay - 20 * _this.index);
		}
	},
	computed:{
		isNum(){
			if(this.num === '.' || this.num === ','){
				return 'dot'
			} else {
				return 'number'
			}
		}
	},
	watch: {
		arr() {
			if ( this.index >= this.update ) {
				this.animate();
			}
		}
	}
});