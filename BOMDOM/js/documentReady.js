//jQuery实现文档加载完成后 事件的原理

/*封装绑定文档加载完成后的时间处理程序

@callback function 页面文档加载完成后的回调函数
*/





document.myReady = function(callback) {

    //封装标准浏览器和ie浏览器
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState == 'interactive') {
                callback(window.event);
            };
        });
    } else {
        window.onload = callback;
    }
};