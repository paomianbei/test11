window.production = false;
// window.production = true;

var host = "";

var config = {
  // 顶部数据
  getTop: host + "/promotion/GomeEeTable/top?",
  // 主活动页数据
  getPromotion: host + "/promotion/GomeEeTable/promotion?",
  // 热销排行榜数据
  getRank: host + "/promotion/GomeEeTable/topRank?",
  // 库存数据
  getStock: host + "/promotion/GomeEeTable/stock?",
  // 比价数据
  getCompare: host + "/promotion/GomeEeTable/compare?",
  //  品类配置
  getCateList: host + "/promotion/GomeEeTable/getCateList",

  // 假接口
  // getTop: "http://192.168.0.107:3000/users?",
  // getPromotion: "http://192.168.0.107:3000/promot?",
  // getRank:"http://192.168.0.107:3000/topRank?",
  // getCompare: "http://192.168.0.107:3000/compare?",
  // getStock:"http://192.168.0.107:3000/stock?",
};
window.config = config;
