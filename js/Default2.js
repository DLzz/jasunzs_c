var pageSize = 7;
var type = -1;
$(function () {
	var url1 = GetRequest();
    if(url1["type"]=="4")
	{
		$("#ulNewTypes li").eq(4).click()
	}
    $("#ulRegion li").each(function () {
        var thisallid = $(this).attr("allid");
        var allyId = $('#hidAllyId').val();
        if (allyId == thisallid) {
            $(this).addClass("xny_news_dq_active").siblings().removeClass("xny_news_dq_active");
            return true;
        }
    });
   
    $("#ulNewTypes li").each(function () {
        var mid = $(this).attr("mid");
        var className = $(this).attr("class");
        if (className == "xny_news_nav_active") {
            type = mid;
        }
        if (className == "xny_news_nav_active" && mid == "5") {
            $(".xny_news_list_dq").show();
            type = mid;
            return true;
        }


    });
    pageselectCallback(0, "");

});

///获取url参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function InitData(pageindx) {
    GetNewsCount(type, function (data) {
        $("#Pagination").pagination(parseInt(data), {
            callback: pageselectCallback,
            prev_text: '上一页',
            next_text: '下一页',
            home_text: '首页',
            last_text: '末页',
            items_per_page: 7,    //每页显示记录数
            num_display_entries: 6, //显示分页按钮
            current_page: pageindx,
            num_edge_entries: 2
        });
    });

}

function pageselectCallback(page_id, jq) {
    var allyId = $('#hidAllyId').val();
    GetNewsPageList(type, parseInt(page_id + 1), pageSize, allyId, function (data) {
        if (data != "") {
            $("#dvList").html(data);
            InitData(page_id);
            window.scrollTo(0, 200);   
        }
        else {
            $("#dvList").html("<span style=\"width: 1000px; float: right; text-align: center;\">暂无数据</span>");
        }
    });

}

//选择地区事件
$("#ulRegion li").click(function () {
    $(this).addClass("xny_news_dq_active").siblings().removeClass("xny_news_dq_active");
    var allid = $(this).attr("allid");
    $('#hidAllyId').val(allid);
    pageselectCallback(0, "");
});
//类别事件
$("#ulNewTypes li").click(function () {
	
    $(this).addClass("xny_news_nav_active").siblings().removeClass("xny_news_nav_active");
    type = $(this).attr("mid");
    if (type == "5") {
        $(".xny_news_list_dq").show();
    } else {
        $(".xny_news_list_dq").hide();
    }
    pageselectCallback(0, "");
});




//获取成功案列列表
function GetNewsPageList(_type, pageIndx, pageSize, allyId, func) {
    $.post("/News/GetNewsListDada", {
        type: _type, 
        pageIndx: pageIndx,
        pageSize: pageSize,
        allyId: allyId
    }, function (data) {
        func(data);
    });
}
function GetNewsCount(_type, func) {
    var allyId = $('#hidAllyId').val();
    $.post("/News/GetNewsCountData", {
        type: _type, //类型
        allyId: allyId //地区
    }, function (data) {
        func(data);
    });
}