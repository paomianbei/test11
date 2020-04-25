//父组件
new Vue({
  el: "#container",
  data: {
    type: "ALL"
  },
  methods: {
    changeType: function(value) {
      this.type = value;
    }
  }
});
