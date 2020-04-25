Vue.component("tab", {
  template: `<div class="controlbar">
    <div class="tab">
        <span v-for="(ele,index) in sites" v-bind:class="currentView === site[index] ? 'active' : ''" @click="toggle(site[index])" :type="site[index]" >{{ele}}</span> 
    </div>
    <div class="switch">
        <el-switch v-model="value" on-color="#13ce66" off-color="#ff4949">
        </el-switch>
    </div>
  </div>`,
  data: function() {
    return {
        sites:["所有站点","PC端","WAP端","APP端"],
        site:["ALL","PC","WAP","APP"],
        value: false,
        currentView: "ALL"
    }
  },
  methods: {
    toggle: function(c){
      this.$emit("ct", c);
      this.currentView = c;
    }
  }
});
