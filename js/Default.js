var pageSize = 16;
var trade = -1;
var mtType = -1;
$(function () {
    //临时调整2017-5-19，考虑分站案例少
    $('#hidAllyId').val("1");
    var allyId = $('#hidAllyId').val();
    $("#ulRegion li").each(function () {
        var thisallid = $(this).attr("allid");

        if (allyId == thisallid) {
            $(this).addClass("xny_case_dq_active").siblings().removeClass("xny_case_dq_active");
        }
    });

    if (allyId == "1") {
         $("#allRegion").addClass("xny_case_dq_active");
$("#ulRegion li").removeClass("xny_case_dq_active");
    }

    //2017-6-22 临时隐藏
    $("#itemsTrade li[mid=7]").hide();
    $("#itemsTrade li[mid=37]").hide();
    $("#itemsTrade li[mid=18]").hide();

    //    //判断是否显示三核四核按钮
    //    var isTnCore = $("#isTnCore").val();
    //    var isGainestown = $("#isGainestown").val();
    //    if (isTnCore == "1") {
    //        $("#mtType li[mid=3]").show();
    //    }
    //    if (isGainestown == "1") {
    //        $("#mtType li[mid=4]").show();
    //    }

    InitData(0)
    pageselectCallback(0, "");

});

function InitData(pageindx) {
    GetCaseCount(trade, mtType, function (data) {
        $("#Pagination").pagination(parseInt(data), {
            callback: pageselectCallback,
            prev_text: '上一页',
            next_text: '下一页',
            home_text: '首页',
            last_text: '末页',
            items_per_page: 16,    //每页显示记录数
            num_display_entries: 6, //显示分页按钮
            current_page: pageindx,
            num_edge_entries: 2
        });
    });

}

function pageselectCallback(page_id, jq) {
    var allyId = $('#hidAllyId').val();
    GetCasePageList(trade, mtType, parseInt(page_id + 1), pageSize, allyId, function (data) {
        if (data != "") {
            $("#dvList").html(data);
            InitData(page_id);
          //  window.scrollTo(0, 200);

            $('.xny_case_caselbli').unbind('mouseenter').unbind('mouseleave');
            $(".xny_case_caselbli").hover(function () {
                $(this).find(".xny_case_casepicbox").show(200);
            }, function () {
                $(this).find(".xny_case_casepicbox").hide(200);
            });

        }
        else {
            $("#dvList").html("<span style=\"text-align: center; float: left; width: 930px; border-top: medium none;\">暂无数据</span>");
        }
    });

}

//选择地区事件
$("#ulRegion li,#allRegion").click(function () {
    $(this).addClass("xny_case_dq_active").siblings().removeClass("xny_case_dq_active");
    var allid = $(this).attr("allid");
    if (allid == "1") {
        $("#ulRegion li").removeClass("xny_case_dq_active");
    } else {
        $("#allRegion").removeClass("xny_case_dq_active");
    }

    $('#hidAllyId').val(allid);
    InitData(0)
    pageselectCallback(0, "");
});
//行业事件
$("#itemsTrade li,#allTrade").click(function () {
    $(this).addClass("xny_case_hy_active").siblings().removeClass("xny_case_hy_active");
    trade = $(this).attr("mid");
    if (trade == "-1") {
        $("#itemsTrade li").removeClass("xny_case_hy_active");
    } else {
        $("#allTrade").removeClass("xny_case_hy_active");
    }
    InitData(0)
    pageselectCallback(0, "");
});

//终端事件
$("#mtType li").click(function () {
    $(this).addClass("xny_case_hy_active").siblings().removeClass("xny_case_hy_active");
    mtType = $(this).attr("mid");
    InitData(0)
    pageselectCallback(0, "");

});



//var ajaxUrl = "/Ashx/Case.ashx?rand=" + Math.random();

//获取成功案列列表
function GetCasePageList(_trade, _mttype, pageIndx, pageSize, allyId, func) {
    $.post("/Case/GetCasePageList", {
        trade: _trade,
        mttype: _mttype, //终端
        pageIndx: pageIndx,
        pageSize: pageSize,
        allyId: allyId
    }, function (data) {
        func(data);
    });
}
function GetCaseCount(_trade, _mttype, func) {
    var allyId = $('#hidAllyId').val();
    $.post("/Case/GetCasePageCount", {
        trade: _trade, //行业
        mttype: _mttype, //终端
        allyId: allyId //地区
    }, function (data) {
        func(data);
    });
}