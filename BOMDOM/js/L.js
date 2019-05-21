(function(w) {
    var L = w.L ? w.L : {}; //定义L的框架的根
    //我们占用了全局的L变量名

    L.Dialog = function(selector) {
            // 先判断选择器对应之前创建过了吗 如果创建过了就直接返回
            if (L.Dialog.cache[selector]) {
                return L.Dialog.cache[selector];
            }
            //接受用户传来的选择器
            //要有一个show方法 弹出对话框
            //关闭方法close
            //动态解析用户信息

            var dialogDiv = document.querySelector(selector);
            if (!dialogDiv) {
                return null;
            }
            //拿到用户给的标题文件
            var title = dialogDiv.getAttribute('title');
            //初始化遮罩层

            // <div class="dialog-cover"></div>
            var dialogCover = document.createElement('div');
            dialogCover.className = "dialog-cover";
            dialogCover.style.display = "none";
            document.body.appendChild(dialogCover);
            var strHTML = "";

            strHTML += '<div class="dialog">';
            strHTML += '<div class="dialog-h">';
            strHTML += '<h3>' + title + '</h3>';
            strHTML += '<i class="btn-close">X</i>'
            strHTML += '</div>';
            strHTML += '<div class="dialog-b">';
            strHTML += dialogDiv.innerHTML;
            strHTML += '</div>';
            strHTML += '</div>';
            dialogDiv.innerHTML = strHTML;





            var dialog = {
                dialogDiv: dialogDiv, //用户的div
                title: title, //用户的标题
                dialogCover: dialogCover, //遮罩层属性
                show: function() {
                    //显示遮罩层 显示对话框 给关闭按钮绑定事件
                    this.dialogCover.style.display = "block";
                    this.dialogDiv.style.display = "block";
                    var self = this;
                    var btnClose = document.querySelector('.btn-close');

                    btnClose.onclick = function() {
                        self.close();
                    };
                },
                close: function() {
                    //关闭层
                    //不显示遮罩层 不显示对话框 给关闭按钮取标绑定事件
                    this.dialogCover.style.display = "none";
                    this.dialogDiv.style.display = "none";
                    var self = this;
                    //document.querySelector('.btn-close').onclick = null;
                    var btnClose = document.querySelector('.btn-close');
                    btnClose.onclick = null;
                }

            };

            L.Dialog.cache[selector] = dialog;
            return dialog;
        }
        //在函数上创建一个缓存 放 selector对应的dialog对象
    L.Dialog.cache = {};
    w.L = L;
})(window || {});

//封装动画效果
(function(w) {
    var L = w.L ? w.L : {}; //定义L的框架的根
    //我们占用了全局的L变量名
    /**
     * @description 进行向下展开的函数
     * @param {HTMLElement} element 要进行动画的标签
     * @param {number} duration - 动画持续的时间
     * @return {undefined}
     * */

    L.slideDown = function(element, duration) {
        var start = Date.now(); //开始动画的时间
        element.style.display = "block";
        var originH = element.clientHeight;
        element.style.height = "0px";
        var timer = setInterval(function() {
            var now = date.now();
            element.style.height = (now - start) / duration * priginH + 'px';
            if (now - start >= duration) {
                element.style.height = originH + 'px';
                clearInterval(timer);
            }
        }, 1000 / 60);

    };
    w.L = L;

})(window || {});