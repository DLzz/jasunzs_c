$(function () {
    InitData(0);
    pageselectCallback(0, "");
});

function pageselectCallback(page_id, jq) {
    var type = $("#hidTypeId").val();
    var allyId = $('#hidAllyId').val();
    var labKey = $('#hidLableKey').val();
    var typeId = $('#hidTypeId').val();

    GetNewsDataTable(parseInt(page_id + 1), type, allyId, labKey, typeId,7, function (dataHTML) {
        $("#yh_news_list").html(dataHTML);
        InitData(page_id);
        window.scrollTo(0, 200);
    });
}

function InitData(pageindx) {
    $("#Pagination").pagination(mastPage, {
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
}

//获取新闻列表数据
function GetNewsDataTable(currentPage, type, allyId, labKey, typeId, pageSize, func) {
    $.post("/News/NewsListCenterData", {
        currentPage: currentPage,
        type: type,
        allyId: allyId,
        labKey: labKey,
        typeId: typeId,
        pageSize: pageSize
    }, function (data) {
        func(data);
    });
}