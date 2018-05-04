var currentMtType = 2;
var loading = false;
$(function () {
    //友情链接下拉效果
    var dwnLink = $('.drop_down_link'),
            linkBox = $('.link_cont_box'),
            ulH = linkBox.find('ul').outerHeight();

    if (ulH > 26) {
        dwnLink.show().on('click', function () {
            if (linkBox.height() > 26) {
                dwnLink.removeClass('down');
                linkBox.height(26);
                return;
            }
            dwnLink.addClass('down');
            linkBox.height(ulH);
        });
    }
    if ($(".xny_friend_link").text() != "") {
        $(".pro_nav_list").css("border-bottom", "none");
    }
    init();

    $('.x_main_lx .x_main_lx_sub').eq(0).addClass('x_main_lx_sub1');
    $('.x_main_lx .x_main_lx_sub').eq(1).addClass('x_main_lx_sub2');
    $('.x_main_lx .x_main_lx_sub').eq(2).addClass('x_main_lx_sub3');
    $('.x_main_lx .x_main_lx_sub').eq(3).addClass('x_main_lx_sub4');
    $('.x_main_lx .x_main_lx_sub').eq(4).addClass('x_main_lx_sub5');
    $('.x_main_lx .x_main_lx_sub').eq(5).addClass('x_main_lx_sub6');
    $('.x_main_lx .x_main_lx_sub').eq(6).addClass('x_main_lx_sub7');
    $('.x_main_lx .x_main_lx_sub').eq(7).addClass('x_main_lx_sub2');
    $('.x_main_lx .x_main_lx_sub').eq(8).addClass('x_main_lx_sub3');

    $("#x_main_lx_ul li").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");

        var mtType = $(this).attr("mid");
        currentMtType = mtType;
        InitModels(mtType, true);
    });

    $("#x_main_lx_count").dayuwscroll({
        parent_ele: '#x_main_lx',
        pre_btn: '#left1',
        next_btn: '#right1',
        path: 'left',
        auto: false,
        time: 3000,
        num: 5,
        gd_num: 5,
        waite_time: 1000
    });
});

function init() {
    $('#xiniuNews>li:first').remove();
    $('#xiniuNews').scroll({ timeout: 4000, speed: 1000 });
}

function modelJump(modelId) {
    //window.location.href = "http://1.rc.xiniu.com/Account/ReleaseSite/Models.aspx?mid=" + modelId + "&mtType=" + currentMtType;
     window.open("HotProduct/Index.html?mid=" + modelId + "&mtType=" + currentMtType)
    //window.open("http://1.rc.xiniu.com/js/xiniunew/HotProduct/Index.html")
}

(function ($) {
    $.fn.scroll = function (config) {
        return $.scroll(this, config);
    };

    $.scroll = function (elem, config) {
        var runonce = true;
        $(elem).mouseover(function () { runonce = false; }).mouseout(function () { runonce = true; });
        setInterval(function () {
            if (runonce) {
                var elements = $(elem).children();
                $(elements[0]).animate({ marginTop: '-' + $(elements[0]).height() + 'px' }, config.speed, function () {
                    $(elements[0]).appendTo($(elem));
                    $(elements[0]).css({ marginTop: 0 });
                });
            }
        }, config.timeout);
    }
})(jQuery);



function scrollLoad() {
    try {
        //滚动条到网页头部的 高度，兼容ie,ff,chrome 
        var top = document.documentElement.scrollTop + document.body.scrollTop;
        //网页的高度 
        var textheight = $(document).height();
        // 网页高度-top-当前窗口高度
        //        console.log(textheight - top - $(window).height());
        if (textheight - top - $(window).height() <= 1250) {
            //默认加载PC云网站
            InitModels(2, false);
        }
    } catch (e) {

    }

}

//根据终端类型来获取对应的型号列表
function InitModels(type, isclick) {
    if (loading && isclick == false) return;

    $.ajax({
        type: "post",
        timeout: 30 * 1000, //单位毫秒
        url: "/Home/GetModelsByType",
        data: {"type": type },
        cache: true,
        async: true,
        dataType: "text",
        beforeSend: function () {
            loading = true;
        },
        success: function (data) {
            ShowHtml(data);
        },
        error: function (msg) {
            loding = false;
        }
    });
}

function ShowHtml(data) {
    if (data.length == 0) {
        $("#x_main_lx_count").html("");
        return;
    }
    var resultValue = $.parseJSON(data).data;

    $("#x_main_lx_count").html("");
    $(resultValue).each(function (i, n) {
        var modelId = resultValue[i].Type;
        var name = resultValue[i].Name;
        if (modelId != 4) {  //过滤行业门户型

            var id = resultValue[i].ID;
            var image_path = resultValue[i].ImagePath;
            //var price = resultValue.Price.ToString().replace(".00", "");
            var price = resultValue[i].Price;
            var description = resultValue[i].Description;
            var tValue = "<li class=\"x_main_lx_sub x_main_lx_sub" + parseInt(i + 1) + "\"><a href='javascript:modelJump(" + modelId + ")'>" +
                                        "<dl class=\"x_main_lx_sub_c\">" +
                                            "<dd class=\"dd1\">" +
                                                "<img src='" + image_path + "' width=\"86\" height=\"86\" /></dd>" +
                                            "<dd class=\"dd2\">" +
                                                name + "</dd>" +
                                            "<dd class=\"dd3\">" +
                                                "<span class=\"span1\"><strong>" +
                                                     "</strong></span><span></span></dd>" +
                                            "<dd class=\"dd4\">" +
                                                description + "</dd>" +
                                            "<dd class=\"dd5\">" +
                                               " 查看详情>>" +
                                           " </dd></dl> </a></li>";

            $("#x_main_lx_count").append(tValue);

            $("#x_main_lx_count").dayuwscroll({
                parent_ele: '#x_main_lx',
                pre_btn: '#left1',
                next_btn: '#right1',
                path: 'left',
                auto: false,
                time: 3000,
                num: 5,
                gd_num: 5,
                waite_time: 1000
            });
        }
    });
}