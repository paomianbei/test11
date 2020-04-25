(function () {
    window.production = false;

    //var host = production ?  "http://promot.ds.gome.com.cn" : 'http://promot.atguat.ds.gome.com.cn/';

    var suffix = window.location.search;

    // var url = ''
    var url = 'http://api.prod.bigdata.atguat.com.cn/bdc_sp_bigscreen';//test
    // var url = 'http://api.prod.bigdata.ds.gome.com.cn/bdc_sp_bigscreen';//production

    var config = {
        saleTask: url + '/bigscreen/saleTask' + suffix, //销售任务，左上
        jiadianCate: url + '/bigscreen/electricMall' + suffix,//电器订单&库存 左下+右下

        // totalAmount:  url + '/bigscreen/totalAmount' + suffix,  //总销售 中上
        totalAmount:  url + '/bigscreen/totalAmountNew' + suffix,  //总销售 中上
        
        // totalAmount: '/promotion/bigSale/totalAmount' + suffix,  //总销售 中上
        platformJiadianCate: url + '/bigscreen/homeAppliances' + suffix, //平台家电  中下

        // service: '/promotion/bigSale/service' + suffix,//  客服数据 右上

        baihuoCate: url + '/bigscreen/departmentStore' + suffix,//百货订单，中下
        
        // baihuoCargo: url + '/bigscreen/departmentStore' + suffix,
        // ansRatio: url + '/promotion/bigSale/ansRatio' + suffix,     //接起率，右中
        // validOrderSale: url + '/promotion/bigSale/validOrderSale' + suffix    //有效订单&销售额

    };

    window.config = config;

})();