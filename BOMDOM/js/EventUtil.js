//事件封装

(function(window) {
    //第一个封装绑定时间的兼容处理
    var EventUtil = {
        addEvent: function(element, type, handler, isCapture) {
            if (element.addEventListener) {
                isCapture = isCapture ? true : false;
                element.addEventListener(type, handler, isCapture);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, function() {
                    //window.event;
                    return handler.call(element, window.event); //函数调用模式 this === window
                    //所有的事件处理中 this == event.target || event.srcElement
                })
            } else {
                element['on' + type] = function(e) {

                }
            }
        },
        getEvent: function(e) {
            return e || window.event;
        },
        //获取事件源对象
        getTarget: function(e) {
            return e.target || e.srcElement;
        },
        //阻止事件冒泡
        stopPropagation: function(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancleBubble = true
            }
        },

        //阻止默认行为
        preventDefault: function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    };
    //把我们上面定义的对象赋值给window的属性
    window.EventUtil = EventUtil;
})(window || {});

//给谁绑定 绑定什么时间 绑定事件的处理程序 扑获还是冒泡
//EventUtil.addEvent(element, 'click', function(e) {}, false);