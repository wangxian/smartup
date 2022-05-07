console.log("scroll");
var fn_scroll = {
  init: function () {
    chrome.runtime.sendMessage({type: "scroll"}, function (response) {
      var _options = {
        left: 0,
        top: 0,
        behavior: (response.effect ? "smooth" : "instant")
      };
      switch (response.type) {
        case"up":
          _options.left = document.documentElement.offsetLeft;
          _options.top = -(window.document.height == window.innerHeight ? 0 : (window.innerHeight - 20));
          break;
        case"down":
          _options.left = document.documentElement.offsetLeft;
          _options.top = (window.document.height == window.innerHeight ? 0 : (window.innerHeight - 20));
          break;
        case"left":
          _options.left = -(window.innerWidth - 20);
          _options.top = 0;
          break;
        case"right":
          _options.left = (window.innerWidth - 20);
          _options.top = 0;
          break;
        case"top":
          _options.left = document.documentElement.offsetLeft;
          _options.top = -(window.pageYOffset + 50);
          break;
        case"bottom":
          _options.left = document.documentElement.offsetLeft;
          _options.top = Math.max(document.body.offsetHeight, document.body.clientHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.offsetHeight, document.documentElement.scrollHeight) - window.innerHeight - window.pageYOffset + 50;
          break;
        case"leftmost":
          _options.left = -(window.pageXOffset + 50);
          _options.top = 0;
          break;
        case"rightmost":
          _options.left = Math.max(document.body.offsetWidth, document.body.clientWidth, document.body.scrollWidth, document.documentElement.clientWidth, document.documentElement.offsetWidth, document.documentElement.scrollWidth) - window.innerWidth - window.pageXOffset + 50;
          _options.top = 0;
          break;
      }
      window.scrollBy(_options);
    })
  }
}
fn_scroll.init();
