var express = require('express');
var wechat = require('wechat');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// 指定回复消息
var sEncodingAESKey = "DeWevWLjAQX622XL6sSvNkut5HYWiq4btWrALrfGl1m";

app.use(express.query());
app.use('/wechat', wechat('nowgaonttest', function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin, result = {};
    if (message) {
        result = {
            type: "music",
            content: {
                title: "电影《后会无期》主题曲",
                description: "平凡之路",
                musicUrl: "http://yinyueshiting.baidu.com/data2/music/121949522/12152327672000128.mp3?xcode=cd9a9a908e59c050896752204fb577051185dbd0cbb5163e",
                hqMusicUrl: "http://yinyueshiting.baidu.com/data2/music/121949522/12152327672000128.mp3?xcode=cd9a9a908e59c050896752204fb577051185dbd0cbb5163e"
            }
        };
        switch (message.MsgType) {
            //文本消息
            case "text":

                break
                //image
            case "image":
                result = [
                  {
                      title: '微软123导航',
                      description: '哥们共同努力的导航',
                      picurl: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=37a280b77af0f736d8fe4a003a57b382/4d086e061d950a7b9ecef80c08d162d9f3d3c97b.jpg',
                      url: 'http://123.msn.com/?form=bntmes&pc=nowgoant&DT=020614'
                  }
                ];
                break
                //语音为voice
            case "voice":
                break
            case "video":
                break
            case "link":
                break
            case "location":
                break
            default:
                break
        }

        res.reply(result);
    }
}));
app.use('/scanwechat', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, '/public', '/scanwechat/scanWechat.html'));
});

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
