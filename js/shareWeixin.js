function loadWeiXinShareConfig(data) {
    if (!data || data.appid.length == 0) {
        return;
    }
    $.getScript("../../res.wx.qq.com/open/js/jweixin-1.0.0.js"/*tpa=http://res.wx.qq.com/open/js/jweixin-1.0.0.js*/)
        .done(function () { //微信JS接口地址
            //通过config接口注入权限验证配置
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appid, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名
                // 必填，需要使用的JS接口列表
                jsApiList: [
                    'onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ]
            });

            //通过ready接口处理成功验证
            wx.ready(function () {
                //朋友分享
                wx.onMenuShareAppMessage({
                    title: data.title,
                    desc: data.desc,
                    link: data.url,
                    imgUrl: data.msgImg,
                    success: function (res) {

                    },
                    cancel: function (res) {

                    },
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });

                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: data.title, // 分享标题
                    link: data.url, // 分享链接
                    imgUrl: data.msgImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享到QQ
                wx.onMenuShareQQ({
                    title: data.title, // 分享标题
                    desc: data.desc, // 分享描述
                    link: data.url, // 分享链接
                    imgUrl: data.msgImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: data.title, // 分享标题
                    desc: data.desc, // 分享描述
                    link: data.url, // 分享链接
                    imgUrl: data.msgImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });


                //分享到QQ空间
                wx.onMenuShareQZone({
                    title: data.title, // 分享标题
                    desc: data.desc, // 分享描述
                    link: data.url, // 分享链接
                    imgUrl: data.msgImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

            });

        });
}

function callback(config) {
     loadWeiXinShareConfig(config); 
}

$(function () {
    if (window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>=0) {
        var url = window.location.href;
        var img = "../../www.xiniu.com/images/weixina.png"/*tpa=http://www.xiniu.com/images/weixina.png*/
        var desc = "犀牛云·企业云网站,移动品牌营销专家"


        $.ajax({
            type:'POST',
            url: "http://gz.site.xiniu.com/Scripts/Collections/ShareWeiXin.ashx",
            dataType: 'jsonp',
            data: {
                title: document.title,
                desc: desc,
                msgImg: img,
                url: url
            },
            jsonp: 'callback',
            success: function(result) {
                console.log(result);
            },
            timeout: 3000
        });
    }
});
