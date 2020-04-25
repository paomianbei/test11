(function() {
  // 返回页面顶部
  var timer = null;
  box.onclick = function() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop =
          oTop - 50;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
      if (oTop > document.documentElement.clientHeight) {
        $("#box").css("display", "block");
      }
    });
  };

  // 开启滚动模式
  var timer_switch = null;
  $(".el-switch__label").click(() => {
    if (timer_switch != null) {
      clearInterval(timer_switch);
      timer_switch = null;
    } else {
      animate_scroll();
      timer_switch = setInterval(() => {
        animate_scroll();
      }, 12000);
    }
  });
  function animate_scroll() {
    var $html = $("html,body");
    var top = $("html").scrollTop() || $("body").scrollTop() || 0;
    var height = $html.height();
    $html.animate(
      {
        scrollTop: top + 500
      },
      3000,
      function() {
        if (top + window.screen.height > height) {
          setTimeout(() => {
            $html.scrollTop(0);
          }, 1000);
        }
      }
    );
  }

})();
