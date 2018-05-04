var _rqHostUrl="http://www.xiniu.com/"
$(function () {

    $.ajax({
        type: "GET",
        url: _rqHostUrl + "/Home/GetCloudServer?callback=?",
        cache: false,
        error: function (result) {
            console.log("加载云服务出现异常");
        },
        dataType: "jsonp",
        jsonp: 'callback',
        success: function (result) {
            if (result) {
                if (result.success == true) {
                    var html = "<div class='h_drop_down_box'>";
                    html += " <div class='box_left_mun'>";
                    var html_li = "<ul>";
                    var html_info = "<div class='box_right_cont'>";
                    html_info += "<ul>";
                    $.each(result.result, function (i, item) {
                        var imgUrl = _rqHostUrl + "/" + item.BackgroupImg;
                        var _name = item.Name.replace(/\d+/g, '');
                        if(_name.indexOf('.')>-1)
                            _name = _name.substr(0, _name.length - 1);
                        if (i == 0) {
                            html_li += "<li class='active'><a href='" + item.Url + "' class='v_icon" + item.VersionNumber + "'>" + _name + "</a></li>";
                            html_info += " <li style='background: url(" + imgUrl + ") no-repeat bottom right;display: block;'>";
                        }
                        else {
                            html_li += "<li><a href='" + item.Url + "' class='v_icon" + item.VersionNumber + "'>" + _name + "</a></li>";
                            html_info += " <li style='background: url(" + imgUrl + ") no-repeat bottom right;display: none;'>";
                        }

                        html_info += " <div class='pro_desc'>";
                        html_info += "<span>" + substr(replaceHTMLTag(item.Description), 180) + "</span>";
                        html_info += "  <a href='" + item.Url + "' class='pro_detial' >详情</a>";
                        html_info += "</div>";
                        if (item.MainUrl != "" && item.MainUrl != null)
                            html_info += " <a href='" + item.MainUrl + "' class='goto_pro_site'  target='_blank'>进入产品官网</a>";
                        html_info += " </li>";
                    })
                    html_li += "</ul></div>";
                    html += html_li;
                    html += html_info;
                    $("#nav_cloud").html(html);
                    //下拉框右侧菜单隐藏显示
                    $('.box_left_mun li').on('mouseover', function () {
                        var index = $('.box_left_mun li').index(this);
                        $(this).addClass('active').siblings().removeClass('active');
                        $('.box_right_cont li:eq(' + index + ')').show().siblings().hide();
                    });
                }
                else
                    console.log(result.Message)
            }
        }
    });
})

//js截取字符串，中英文都能用
//如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
//字符串，长度

/**
* js截取字符串，中英文都能用
* @param str：需要截取的字符串
* @param len: 需要截取的长度
*/
function substr(str, len) {
    if (str == null)
        return "";
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (i == (str_len - 1) && str_length == len)
            return str_cut;
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if (str_length < len) {
        return str;
    }
}

//过来html标签
function replaceHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/&nbsp;/ig, ''); //去掉&nbsp;
    return str;
}
