//function browserRedirect() {
//    try {
//        var domain = document.domain;
//        var sUserAgent = navigator.userAgent.toLowerCase();
//        var isMobile = sUserAgent.match(/mobile/i) == "mobile";
//        var isIphone = sUserAgent.match(/iphone/i) == "iphone";
//        var isOperaMini = sUserAgent.match(/opera mini/i) == "opera mini";
//        var isAndroid = sUserAgent.match(/android/i) == "android";
//        if (isMobile || isIphone || isOperaMini || isAndroid) {
//            var reg = new RegExp("http://1.rc.xiniu.com/js/xiniunew/xiniu.com", "i");
//            if (reg.test(domain)) {
//                window.location.href = "http://m.site.xiniu.com/m/";
//            } else {
//                window.location.href = "http://m.site.xiniuyun.com/m/";
//            }
//        }
//    } catch (e) {

//    }

//}


$(function () {
    //xiniu域名跳转xiniuyun
    //    try {
    //        var domain = document.domain;
    //        var reg = new RegExp("http://1.rc.xiniu.com/js/xiniunew/xiniuyun.com", "i");
    //        if (reg.test(domain)) {
    //            var url = window.location.href;
    //            url = url.replace(new RegExp("http://1.rc.xiniu.com/js/xiniunew/xiniuyun.com", "gi"), "http://1.rc.xiniu.com/js/xiniunew/xiniu.com");
    //            window.location.href = url;
    //        }
    //    } catch (e) {
    //    }

    //下拉框右侧菜单隐藏显示
    $('.box_left_mun li').on('mouseover', function () {
        var index = $('.box_left_mun li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.box_right_cont li:eq(' + index + ')').show().siblings().hide();
    });

    //下拉框显示后，栏目高亮
    $('.drop_down_item').hover(function () {
        $(this).find('.pro_item i').addClass('cur');
    }, function () {
        if ($(this).find('.h_drop_down_box').is(':hidden')) {
            $(this).find('.pro_item i').removeClass('cur');
        }
    });

    //browserRedirect();

    var path = window.location.href.toLowerCase();
    var pathList = path.toLowerCase().replace("http://", "").split("/");

    var nIndex = 0;
    if (pathList.length > 1) {

        if (path.indexOf("hotproduct") >= 0) {
            //移动云网站
            nIndex = 1;
        }
        else if (pathList[1].indexOf("account") >= 0) {
            if (path.indexOf("producthigh") >= 0) {
                nIndex = 2;
            } else {
                nIndex = 9;
            }
        }
        else if (path.indexOf("producthigh") >= 0) {
            nIndex = 2;
        }
        else if (pathList[1].indexOf("helper") >= 0) {
            //犀牛学院
            nIndex = 6;
        }

        else if (pathList[1].indexOf("case") >= 0) {
            //成功案例
            nIndex = 4;
        }
        else if (pathList[1].indexOf("userservice") >= 0) {
            nIndex = 6;
        } else if (pathList[1].indexOf("Home") >= 0) {
            //域名注册
            nIndex = 5;
        }
        else if (pathList[1].indexOf("newscenter") >= 0 || pathList[1].indexOf("news") >= 0) {
            //资讯中心
            nIndex = 6;
        }
        else if (pathList[1].indexOf("aftersale") >= 0) {
            //售后服务
            nIndex = 7;
        }
        else if (pathList[1].indexOf("about") >= 0) {
            //关于我们
            nIndex = 8;
        } else if (path.indexOf("http://1.rc.xiniu.com/js/xiniunew/order.html") >= 0) {
            nIndex = 9;
        }
    }

    $('#pnNavigate .ased').attr('class', ''); $('#pnNavigate .on').attr('class', ''); $('#pnNavigate a').eq(nIndex).attr('class', 'on');
    //if (nIndex == 9) {
    //    $('#pnNavigate li').eq(nIndex).css("background", "#fff none repeat scroll 0 0");
    //}

    var Timer;
    var TimerFeed;
    var autoNight = function () {
        //夜晚
        try {
            //  var bgimg = $(window.frames[1].document).find(".bg").css("background-image");
            //   if (bgimg != "") {
            //$("#divfeedback").show();
            //   }
            //   if (bgimg != 'url("../../img/site/nightcon.jpg"/*tpa=http://1.rc.xiniu.com/img/site/nightcon.jpg*/)') {
            //       $(window.frames[1].document).find(".bg .content").css("display", "none");
            //       $(window.frames[1].document).find(".bg").css("background-image", "url(http://1.rc.xiniu.com/img/site/nightcon.jpg)");

            //兼容会员中心模式下的
            //       $(window.frames[2].document).find(".bg .content").css("display", "none");
            //       $(window.frames[2].document).find(".bg").css("background-image", "url(http://1.rc.xiniu.com/img/site/nightcon.jpg)");
            //       clearInterval(Timer);
            //   }

            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = "../../../hm.baidu.com/hm.js-1ddf091d02a7584b0fb8f0480dffd383"/*tpa=https://hm.baidu.com/hm.js?1ddf091d02a7584b0fb8f0480dffd383*/;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
            clearInterval(Timer);
            Timer = setInterval(function () {
                $("iframe").each(function () {
                    $(window.frames[1].document).find(".bg .content").css("display", "none");
                    $(window.frames[1].document).find(".bg").css("background-image", "url(http://1.rc.xiniu.com/img/site/nightcon.jpg)");
                	$(window.frames[1].document).find(".bg").html('<a href="https://webpage.qidian.qq.com/2/chat/pc/index.html?linkType=0&env=ol&kfuin=2852151185&fid=58&key=c547bb4b7be187c45bfeba5e740fac6a&cate=7&type=9&ftype=1&_type=wpa&qidian=true&roleValue=0&roleData=2852367654" style="display:block;height:200px;"  target="_blank"></a>');
                //    if ($(this).attr("src") == "about:blank") {
                  //      $(this).css("display", "none");
                        clearInterval(Timer);
                    //}
                });
            }, 50);
        } catch (e) {

        }
        //统一晚间咨询热线
        $(".jb_tel_j").find("s").eq(0).html("晚间咨询热线:");
        $(".jb_tel_j").find(".jb_tel_hs_j").eq(0).html("400-107-9009");

        //总站两个需要清空一个
        $(".jb_tel_j").find("s").eq(1).html("");
        $(".jb_tel_j").find(".jb_tel_hs_j").eq(1).html("");
        
    }
    var autofeedback = function () {
        //白天
        try {

            var bgimg = $(window.frames[1].document).find(".bg").css("background-image");
            if (bgimg != "") {
                //$("#divfeedback").show();
                clearInterval(TimerFeed);
            }
            //春节营销QQ替换
            //<img border=\"0\" src=\"http://wpa.qq.com/pa?p=2:616385555:52\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\" style=\"width: 22px;\">
            //            $(window.frames[1].document).find(".content").html("").html("<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=616385555&site=qq&menu=yes\"><div class=\"launchBtn\"></div></a>");
            //            $(window.frames[1].document).find(".content").html("").html("<div id=\"launchBtn\" class=\"launchBtn btn\" onclick=\"_hmt.push(['_trackEvent','qqzixun','click','yemian'])\"></div>");

        } catch (e) {

        }
    }
    var timestamp = new Date().getHours();
    if ((timestamp >= 19 && timestamp <= 24) || (timestamp >= 0 && timestamp < 8)) {
        Timer = setInterval(autoNight, 500);
    } else {
        TimerFeed = setInterval(autofeedback, 500);
    }
});
$(function () {
    $(".jb_nav_z li").click(function () {
        if ($(this).html().indexOf("/Helper/") > -1) {
            SaveCookie("leftmenuclick", "", 1);
            SaveCookie("navclick", "", 1);
        }
    });



    //用户反馈
    $("#divfeedback").click(function () {
        IsLogin(function (data) {
            if (data == "1") {
                var url = 'http://1.rc.xiniu.com/feedback/Userfeedback.aspx';
                setTimeout(function () {
                    dialog = art.dialog({
                        content: url,
                        fixed: true,
                        lock: true,
                        padding: 0,
                        height: 413,
                        width: 430,
                        iframe: true,
                        scroll: false
                    });
                }, 30);
            } else {
                var url = '/SubPage/Login.aspx?isAtFrame=1&RequestLoginPage=' + (window.location.pathname + window.location.search);
                setTimeout(function () {
                    dialog = art.dialog({
                        content: url,
                        fixed: true,
                        lock: true,
                        padding: 0,
                        height: 360,
                        width: 590,
                        iframe: true,
                        scroll: false
                    });

                }, 30);

            }
        });

    });

});


//pop右下角弹窗函数
function Pop() {
    //显示
    this.showDiv();
    //关闭
    this.closeDiv();
}
Pop.prototype = {
    showDiv: function (time) {
        $('#pop').slideDown(1000).delay(1000);
    },
    closeDiv: function () {
        $("#popClose").click(function () {
            $('#pop').hide();
        }
    );
    }
}

var timestamp = new Date().getTime();
var AjaxSkinList = "../Ashx/SkinList.ashx?d=" + timestamp;
function IsLogin(func) {
    var result;
    $.post(AjaxSkinList, {
        action: "IsLogin"
    }, function (data) {
        result = data;
        func(data);
    })
    return result;
}