function isInt(value) {
    if ((/^(\+|-)?\d+$/.test(value)) || value < 0) {
        return true;
    } else {
        jQuery("#amount").val("0");
        return false;
    }
}

function mAlert(title, value, isError, autoCloseTime, btnFun, closeAlias) {
    try {
        window.parent.document.getElementById("d_close").style.display = 'none';
    } catch (e) { }

    var cls = "ywz_jj_qs_quww";
    if (isError) {
        cls = "ywz_jj_qs_quw";
    }

    var html = "<div class=\"ywzgjx_bj_glink22\">" +
                "<div class=\"ywzgjx_bj_glink_t2t2\">" +
                "<div class=\"ywz_tc_jswenzi\">" + title + "</div>" +
                "<div class=\"ywz_tc_jstb\"></div>" +
              "</div>" +
            "</div>" +
            "<div class=\"ywzgjx_bj_glink_mm2\"><div class=\"ywz_fbtc_guo1\"><div class=\"ywz_fdtc_kuang\">" +
                "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
                    "<tbody><tr>" +
                      "<td class=\"ywz_jj_fd_tc_bgse\" height=\"67\" vAlign=\"middle\" align=\"center\"><table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
                        "<tbody><tr>" +
                          "<td class=\"" + cls + "\" style='background-position-y:center;' vAlign=\"middle\" align=\"center\"></td>" +
                          "<td class=\"ywz_jj_qw_wenzi\" vAlign=\"middle\" align=\"left\">" + value + "</td>" +
                        "</tr>";
    //    if (closeAlias != null && typeof closeAlias != 'undefined') {
    //        html += "<tr><td colspan=2><a id=\"id_close_alias\" class=\"custombuttoninshowbox\">" + closeAlias + "</a></td></tr>";
    //    }
    html += "</tbody></table>" +
                        "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
                      "</table></td>" +
                    "</tr>" +
                  "</tbody></table>";
    if (closeAlias != null && typeof closeAlias != 'undefined') {
        html += "<div  class=\"customshowbox\"><a id=\"id_close_alias\" >" + closeAlias + "</a></div>";
    }
    html += "</div>" +
              "</div>" +
            "</div>" +
          "</div>";

    try {
        autoCloseTime = parseInt(autoCloseTime);
    } catch (e) { autoCloseTime = -1; }

    if (isNaN(autoCloseTime)) {
        autoCloseTime = -1;
    }

    if (parseInt(autoCloseTime, 0) > 0) {
        dialog = art.dialog({
            content: html,
            fixed: false,
            lock: true,
            padding: 0,
            time: (1000 * autoCloseTime)
        });
    } else {
        dialog = art.dialog({
            content: html,
            fixed: false,
            lock: true,
            padding: 0
        });
    }

    if (btnFun != null && typeof btnFun != 'undefined') {
        $("#d_close,#id_close_alias").click(btnFun);
    }
}

function mConfirm(tile, content, okFun) {
    var html =
            "<div class=\"ywzgjx_bj_glink22\" style='height:247px;width:400px; background-color: #fff;'>" +
            "<div class=\"ywzgjx_bj_glink_tt2\">" +
            "<div class=\"ywzgjx_bj_glink_t112\">" +
            "<div class=\"ywzgjx_bj_glink_t1_lq\"></div>" +
            "<div class=\"ywzgjx_bj_glink_t1_mm2\"></div>" +
            "<div class=\"ywzgjx_bj_glink_t1_rr2\"></div>" +
            "</div>" +
            "<div class=\"ywzgjx_bj_glink_t2t2\">" +
            "<div class=\"ywz_tc_jswenzi\">" + tile + "</div>" +
            "<div class=\"ywz_tc_jstb\"></div>" +
            "</div>" +
            "</div>" +
            "<div class=\"ywzgjxa_bj_glink_mm2\">" +
            "<div class=\"ywz_fbtc_guo1\" style=\"height:90px;\"><div class=\"ywz_fdtc_kuang\">" +
            "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "<tbody><tr>" +
            "<td class=\"ywz_jj_fd_tc_bgse\" height=\"67\" vAlign=\"middle\" align=\"center\"><table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "<tbody><tr>" +
            "<td class=\"ywz_jj_qs_quw\" vAlign=\"middle\" align=\"center\"></td>" +
            "<td class=\"ywz_jj_qqw_wenzi\" vAlign=\"middle\" align=\"left\"><span class=\"ywz_sejiac\">提醒：</span>" + content + "</td>" +
            "</tr>" +
            "</tbody></table>" +
            "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "</table></td>" +
            "</tr>" +
            "</tbody></table>" +
            "</div>" +
            "</div>" +
            "<div id=\"ywz_tcc_anniu\">" +
            "<div class=\"ywz_jb_baoichen1\" style=\"margin-left:88px;\"><a hideFocus=\"\" href=\"javascript:;\" id='btnOK'>确  定</a></div>" +
            "<div class=\"ywz_jb_baoichen2\"><a hideFocus=\"\" href=\"javascript:;\" onclick='dialog.close();'>取  消</a></div>" +
            "</div>" +
            "</div>" +
            "<div class=\"ywzgjx_bj_glink_bb2\">" +
            "<div class=\"ywz_tc_zuo1jiao\"></div>" +
            "<div class=\"ywzgjx_bj_glink_b_mm2\"></div>" +
            "<div class=\"ywz_tc_you1jiao\"></div>" +
            "</div>" +
            "</div>";

    dialog = art.dialog({
        content: html,
        fixed: true,
        lock: true,
        padding: 0,
        esc: false
    });

    $('#btnOK').click(okFun);
}
//重载方法,暂时选择终端处使用
function mConfirm2(tile, content, type, okFun) {
    var html =
            "<div class=\"ywzgjx_bj_glink22\" style='height:247px;width:400px; background-color: #fff;'>" +
            "<div class=\"ywzgjx_bj_glink_tt2\">" +
            "<div class=\"ywzgjx_bj_glink_t112\">" +
            "<div class=\"ywzgjx_bj_glink_t1_lq\"></div>" +
            "<div class=\"ywzgjx_bj_glink_t1_mm2\"></div>" +
            "<div class=\"ywzgjx_bj_glink_t1_rr2\"></div>" +
            "</div>" +
            "<div class=\"ywzgjx_bj_glink_t2t2\">" +
            "<div class=\"ywz_tc_jswenzi\">" + tile + "</div>" +
            "<div class=\"ywz_tc_jstb\"></div>" +
            "</div>" +
            "</div>" +
            "<div class=\"ywzgjxa_bj_glink_mm2\">" +
            "<div class=\"ywz_fbtc_guo1\" style=\"height:90px;\"><div class=\"ywz_fdtc_kuang\">" +
            "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "<tbody><tr>" +
            "<td class=\"ywz_jj_fd_tc_bgse\" height=\"67\" vAlign=\"middle\" align=\"center\"><table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "<tbody><tr>" +
            "<td class=\"ywz_jj_qs_quw\" vAlign=\"middle\" align=\"center\"></td>" +
            "<td class=\"ywz_jj_qqw_wenzi\" vAlign=\"middle\" align=\"left\"><span class=\"ywz_sejiac\"></span>" + "<span class=\"ywz_sejiac_2\">" + content + "</span>" + "</td>" +
            "</tr>" +
            "</tbody></table>" +
            "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\">" +
            "</table></td>" +
            "</tr>" +
            "</tbody></table>" +
            "</div>" +
            "</div>" +
            "<div id=\"ywz_tcc_anniu\">" +
            "<div class=\"ywz_jb_baoichen1\" style=\"margin-left:88px;\"><a hideFocus=\"\" href=\"javascript:;\" id='btnOK'>确  定</a></div>" +
            "<div class=\"ywz_jb_baoichen2\"><a hideFocus=\"\" href=\"javascript:;\" onclick='dialog.close();'>取  消</a></div>" +
            "</div>" +
            "</div>" +
            "<div class=\"ywzgjx_bj_glink_bb2\">" +
            "<div class=\"ywz_tc_zuo1jiao\"></div>" +
            "<div class=\"ywzgjx_bj_glink_b_mm2\"></div>" +
            "<div class=\"ywz_tc_you1jiao\"></div>" +
            "</div>" +
            "</div>";

    dialog = art.dialog({
        content: html,
        fixed: true,
        lock: true,
        padding: 0,
        esc: false
    });

    $('#btnOK').click(okFun);
}

/*
* 检测客户端是否存在
*/
function checkeInstalled() {
    try {
        new ActiveXObject("EIMSDll.EIMSCheck");
        return true;
    }
    catch (e) {
        return false;
    }

    return true;
}

function loading(val) {
    var height = $(document.body).height();
    height = parseInt(height, 10) < 1 ? '100%' : height + 'px';
    val = (typeof val == undefined || val == null) ? '正在努力为您加载中，请耐心等待...' : val;

    $(document.body).append("<div class=\"mbody\" style=\"height:" + height + "\" id=\"page_loading\"><div class=\"load_main\"><div class=\"load_img\"><img src=\"../../../site.xiniuyun.com/Images/loading.gif\"/*tpa=http://site.xiniuyun.com/Images/loading.gif*/ width=\"70\" height=\"70\" /></div><div class=\"load_font\"><font size=\"3\">" + val + "</font></div></div></div>");
}

function clearload() {
    $('#page_loading').remove();
}

function initDiagWindowSize(width, height) {
    var _w = width;
    var _h = height;

    if (typeof _w == 'undefined' || _w < 1) {
        _w = document.body.clientWidth;
    }
    if (typeof _h == 'undefined' || _h < 1) {
        _h = document.body.clientHeight;
    }
    try {
        $('#art_iframe', window.parent.document).css({ 'height': _h + 'px', 'width': _w + 'px' });
        parent.dialog.size(_w, _h);
        parent.dialog.position();
    } catch (a) { }
}

$(function () {
    $(window).bind("scroll", function (event) {
        _scrollLoad();
    });

    $('#scrolltop>div').hover(
            function () {
                $(this).find('div:eq(1)').animate({ 'left': '-48px' }, 300);
            },
            function () {
                $(this).find('div:eq(1)').animate({ 'left': '32px' }, 300);
            }
    );

    /* IE6 环境下的提示 */
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    var ieversion;
    if (Sys.ie) {
        ieversion = parseInt(Sys.ie);
        if (ieversion < 7) {
            alert('您的浏览器版本较低！\r\n为了不影响您的正常使用，建议您升级高版本浏览器！');
        }
    }
});

function _scrollLoad() {
    var top = document.documentElement.scrollTop + document.body.scrollTop;
    var textheight = $(document).height();
    /*var elem = $('#scrolltop');

    if (top < 240) {
    if (elem.css('right') == '0px') {
    elem.animate({ 'right': '-40px' }, 500);
    }
    } else {
    if (elem.css('right') == '-40px') {
    elem.animate({ 'right': '0px' }, 500);
    }
    }*/
}

function srcollTop() {
    $('body,html').animate({ 'scrollTop': 0 }, 500);
}

function IsNullOrEmpty(str) {
    if (str == null || str == undefined || typeof str == undefined || str == "null" || str == "undefined" || str == "") { return true; }
    else { return false; }
}

function fnSaveCookie(key, value, expireHour) {
    var exDate = new Date();
    if (!IsNullOrEmpty(expireHour)) {
        exDate.setTime(exDate.getTime() + expireHour * 3600 * 1000); document.cookie = key + "=" + value + (IsNullOrEmpty(expireHour) ? "" : ";expires=" + exDate);
    } else { document.cookie = key + "=" + value; }
}

//处理url中的字符串，取出某个键p的值
function getParam(p) {
    var url = window.location.search;
    var paras = url.substring(url.indexOf("?") + 1, url.length).split("&");
    return splitChain(paras, p);
}
//处理a=1&b=2&c=3这样的字符串，分割并取出键p的值
function splitChain(paras, p) {
    var paraObj = {}
    for (i = 0; j = paras[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    if (p != null) {
        var returnValue = paraObj[p.toLowerCase()];
        if (typeof (returnValue) == "undefined") {
            return "";
        } else {
            return returnValue;
        }
    } else {
        return paraObj;
    }
}

String.prototype.padLeft = function (totalWidth, paddingChar) {
    if (this.length >= totalWidth || (paddingChar == undefined || paddingChar.length == 0))
        return this;
    else {
        left = "";
        while (left.length < (totalWidth - this.length))
            left += paddingChar.toString();
        return left.toString() + this;
    }
};

function WindowOpen(url) {

    var newWindow = window.open(url, "_blank");

    if (IsNullOrEmpty(newWindow)) {

        var form = $(document).find("form:first");

        if (form.length == 0) {
            return;
        }

        var actionUrl = form.attr("action");
        var actionTarget = form.attr("target");

        form.attr({ action: url, target: "_blank" });
        form.submit();

        setTimeout(function () {
            $(document).find("form:first").attr({ action: actionUrl, target: actionTarget });
        }, 1000);
    }
}

function strCut(val, len) {
    if (typeof val == 'undefined' || val == null) {
        return '';
    }

    if (val.length < len) {
        return val;
    }

    return val.substr(0, len) + '..';
}

var timestamp = new Date().getTime();
//判断是否登录，登录后跳转到相应页面
function Login(url) {
    var result;
    $.post("/User/IsLogin", {
    }, function (data) {
        console.log(data);
        result = data;
        if (result == "1") {
            //登录
            location.href = url;
        } else {
            SynShareLogin(url);
        }
    })
    return result;
}
function LoginJumps(fnc) {
    var result;
    $.post("/User/IsLogin", {
    }, function (data) {
        fnc(data);
    })
    return result;
}



//新登录弹出页面
//goUrl:登录成功回调地址
function SynShareLogin(goUrl) {
    var url;

    LoginJumps(function (data) {
        if (data == "1") {
            //已登录刷新
            if (!IsNullOrEmpty(goUrl)) {
                url = goUrl;
            } else {
                url = window.location.href;
            }
            location.href = url;
        } else {
            //没登录弹出登录窗口
            userInfo.loginId = -1;
            $(".login_cont").html(userInfo.divHtml);
            setTimeout(function () {
                if (!IsNullOrEmpty(goUrl)) {
                    url = goUrl;
                } else {
                    url = window.location.href; //回调刷新页面
                }
                var title = "<img src=\"../../img/site/logoniu.png\"/*tpa=http://1.rc.xiniu.com/img/site/logoniu.png*/ style=\"float: left;margin-top: 10px;margin-right: 5px;\"><img src=\"../../img/site/loginlogo.jpg\"/*tpa=http://1.rc.xiniu.com/img/site/loginlogo.jpg*/ style=\"float: left; margin-top: 10px;\">";
                var url = "/Account/Login";

                layer.close(layer.index);
                layer.open({
                    type: 2,
                    title: title,
                    skin: 'layui-layer-mim', //加上边框
                    area: ['500px', '450px'],
                    content: [url,'no']
                });
                $(".layui-layer-content").find("iframe").css("height", "425px");

            }, 100);

        }

    });
}

//登录成功，回调方法
function CloseSynShareLogin(redirect_url) {
    if (redirect_url.indexOf("http://1.rc.xiniu.com/SubPage/SiteBasicInformation.aspx") > -1) {
        //创建站点试用登录回调
        setTimeout(function () {
            dialog = art.dialog({
                content: redirect_url,
                fixed: true,
                lock: true,
                padding: 0,
                height: 368,
                width: 590,
                iframe: true,
                scroll: false
            });
        }, 300);

    } else if (redirect_url.indexOf("http://1.rc.xiniu.com/js/xiniunew/Kevin/DefaultNews.aspx?p") > -1 || redirect_url.indexOf("http://1.rc.xiniu.com/js/xiniunew/Account/Default.aspx") > -1) {
        //加入收藏，登录后自动收藏跳转地址
        setTimeout(function () {
            location.href = redirect_url;
        }, 100);
    }
    else {
        location.reload(true);
    }
    layer.closeAll();
}



/* user info */
var userInfo = {
    loginId: -1,
    divHtml: function () {
        if (userInfo.loginId > 0) {
            //return "您好，<span>" + userInfo.loginId + "</span><a href='http://1.rc.xiniu.com/Account/Default.aspx'>[账户中心]</a><a href='javascript:userInfo.loginOut();'>[退出]</a>";
            return "<a href='javascript:userInfo.loginOut();' class='outlogin'>[退出]</a><div class=\"line\"><i>&nbsp;</i></div><a href='javascript:userInfo.gosite();'>您好！ " + userInfo.loginId + " </a>";
        } else {
            return "<a href='http://isv.xiniuyun.com/Public/AccountCenter/Register.aspx'>注册</a><div class=\"line\"><i>&nbsp;</i></div> <a href='javascript:SynShareLogin(\"\");'>登录</a>";
        }
    },
    loginOut: function () {
        var timestamp = new Date().getTime();
        $(".outlogin").attr("href", "#").html("正在退出...");
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "text", //数据格式:JSON
            url: '/User/LoginOut', //目标地址
            data:"",
            success: function (val) {
                if (val == 'error') {
                    alert('退出失败。');
                    return;
                } else {
                    eval(val);
                }
                setTimeout(function () { window.location.href = 'http://1.rc.xiniu.com/'; }, 1200);
            },
            error: function (a, b, c) {
                alert('退出错误失败。');
            }
        });
    },
    init: function () {
        var timestamp = new Date().getTime();
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "text", //数据格式:JSON
            url: '/User/GetCurrentLoginUserInfo', //目标地址
            data:"",
            success: function (val) {
                userInfo.loginId = parseInt(val);
                $(".login_cont").html("");
                $(".login_cont").html(userInfo.divHtml);
            },
            error: function (a, b, c) {
                //alert('获取用户信息失败。');
            }
        });
    },
    gosite: function () {

        SynShareLogin("/Account/Index");

    }
};
$(function () {
    userInfo.init();
    var i = 0;
    var url= location.href;
    var p= getParam("p");
    if (url.indexOf("Account") > -1 && p!="") {
        var userInfoInterval = setInterval(function () {
            i++
            var t = $(".login_cont").html();
            if (typeof (t) == "undefined") {
                window.clearInterval(userInfoInterval);
            }
            if (typeof (t) != "undefined" && t.indexOf("登录") < 0) {
                window.clearInterval(userInfoInterval);
            }
            if (i > 2) {
                window.clearInterval(userInfoInterval);
            }
            userInfo.init();
        }, 3000);
    }
   
});

/* user info */

function logoutRefresh() {
    //退出回调,空方法，避免回调报错
    location.href = "http:///" + location.host;
}

//风格创意编号批量加前缀
function GetResourcesPrefix(type, number, id) {
    var prefix = ""
    switch (type) {
        case 1:
            prefix = "H_";
            break;
        case 2:
            prefix = "N_";
            break;
        case 3:
            prefix = "Ba_";
            break;
        case 31:
            prefix = "Ba_";
            break;
        case 32:
            prefix = "Ba_";
            break;
        case 4:
            prefix = "B_";
            break;
        case 5:
            prefix = "Bg_";
            break;
        case 6:
            prefix = "M_";
            break;
        case 100001:
            prefix = "C_";
            break;
        case 1001:
            //风格创意
            //prefix = "style_EN_";
            prefix = "S_";
            break;
        case 1002:
            //风格创意
            //prefix = "style_CH_";
            prefix = "S_";
            break;
        default:
            //Logo
            prefix = "L_";
            break;
    }
    if (number != null && number != "undefined" && number != "-1") {
        prefix = prefix + number.toString().padLeft(4, '0');
    } else {
        prefix = prefix + id;
    }

    return prefix;
}

//跳转方法，避免open方法被浏览器阻止
function openwin(url) {
    var a = window.parent.document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("id", "openwin");
    window.parent.document.body.appendChild(a);
    a.click();
}


function SaveCookie(key, value, expireHour) {
    var exDate = new Date();
    if (!IsNullOrEmpty(expireHour)) {
        exDate.setTime(exDate.getTime() + expireHour * 3600 * 1000);
        document.cookie = key + "=" + escape(value) +
            (IsNullOrEmpty(expireHour) ? "" : ";expires=" + exDate);
    } else {
        document.cookie = key + "=" + escape(value);
    }
}

//2014-9-28判断为移动端就隐藏两边的二维码等信息

//var browser = {
//    versions: function () {
//        var u = navigator.userAgent, app = navigator.appVersion;
//        return {
//            trident: u.indexOf('Trident') > -1, //IE内核
//            presto: u.indexOf('Presto') > -1, //opera内核
//            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
//            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
//            iPad: u.indexOf('iPad') > -1, //是否iPad
//            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//        };
//    } ()
//}
//$(function () {
//    if ((browser.versions.mobile && browser.versions.android) || (browser.versions.mobile && browser.versions.ios)) {
//        //判断为移动端就隐藏两边的二维码等信息
//        $(".jb_ewmk").hide();
//        $("iframe").contents().find("http://1.rc.xiniu.com/js/xiniunew/div.main").hide();

//    }
//});
//window.onload = function () {
//    if ((browser.versions.mobile && browser.versions.android) || (browser.versions.mobile && browser.versions.ios)) {
//        //判断为移动端就隐藏两边的二维码等信息
//        $(".jb_ewmk").hide();
//        $("iframe").contents().find("http://1.rc.xiniu.com/js/xiniunew/div.main").hide();

//    }
//};
//end 2014-9-28
