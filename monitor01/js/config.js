(function () {

    window.production = false;

    //var host = production ?  "http://promot.ds.gome.com.cn" : 'http://promot.atguat.ds.gome.com.cn/';

    var suffix = window.location.search;
    // var url = '';
    var url = 'http://api.prod.bigdata.atguat.com.cn/bdc_sp_bigscreen';//test
    // var url = 'http://api.prod.bigdata.ds.gome.com.cn/bdc_sp_bigscreen';//production

    // var url36 = '';
    var url36 = 'http://dp.atguat.com.cn/api';//test
    // var url36 = 'http://dp.gome.inc/api';//production

    var config = {

        // totalUV: url + '/bigscreen/totalUV' + suffix, //总uv，左上
        // uvTrend: url + '/bigscreen/uvTrend' + suffix,//uv趋势，左中
        // totalUV: url36 + '/bigscreen36/siteFlow' + suffix, //总uv，左上
        // uvTrend: url36 + '/bigscreen36/flowTrend' + suffix,//uv趋势，左中
        totalUV: url + '/bigscreen/siteFlow' + suffix, //总uv，左上
        uvTrend: url + '/bigscreen/uvTrend' + suffix,//uv趋势，左中

        // saleTrend:  '/promotion/bigSale/saleTrend' + suffix,//销售趋势，左下
        saleTrend: url + '/bigscreen/saleTrend' + suffix,//销售趋势，左下
        

        //totalAmount:  url + '/bigscreen/totalAmount' + suffix,  //总销售 中上
        totalAmount:  url + '/bigscreen/totalAmountNew' + suffix,  //总销售 中上
        // channelSale:  url + '/bigscreen/channelSale' + suffix,//订单销售 中上
        // totalAmount:  '/promotion/bigSale/totalAmount' + suffix,  //总销售 中上
        // channelSale: '/promotion/bigSale/channelSale' + suffix,//订单销售 中上
        // siteMaterialSale: '/promotion/bigSale/siteMaterialSale' + suffix,//实物销售额，中中
        // ratioOrder: '/promotion/bigSale/ratioOrder' + suffix,//转化率订单，中下
        siteMaterialSale: url + '/bigscreen/siteMaterialSale' + suffix,//实物销售额，中中
        ratioOrder: url + '/bigscreen/ratioOrder' + suffix,//转化率订单，中下

        siteRatio: url + '/bigscreen/siteRatio' + suffix,//  全站转化率 右上
        // usersTask: url + '/bigscreen/registerTask' + suffix,     //用户注册接口，右中
        // coupon: '/promotion/bigSale/coupon' + suffix  //团购接口，右下
        couponUser: url + '/bigscreen/couponUser' + suffix,//  右下 优惠券
        channelSales: url + '/bigscreen/channelSales' + suffix,//  右下 今日&累计渠道销售
    };

    window.config = config;
})();