var strChar = ['最佳', '最具', '最爱', '最赚', '最优', '最优秀', '最好', '最大', '最大程度', '最高', '最高级', '最高端', '最奢侈', '最低', '最低级', '最底', '最便宜', '史上最低价', '最流行', '最受欢迎', '最时尚', '最聚拢', '最符合', '最舒适', '最先', '最先进', '最先进科学', '最先进加工工艺', '最先享受', '最后', '最后一波', '国家级', '全国', '国家级产品', '全球级', '宇宙级', '世界级', '顶级', '顶尖', '尖端', '顶级工艺', '顶级享受', '高级', '极品', '极佳', '绝佳', '绝对', '终极', '极致', '首个', '首选', '独家', '独家配方', '首发', '全网首发', '全国首发', '首家', '全网首家', '全国首家', '首次', '首款', '全国销量冠军', '国家级产品', '国家', '国家免检', '国家领导人', '填补国内空白', '中国驰名', '驰名商标', '国家品质', '第一', '中国第一', '全网第一', '销量第一', '排名第一', '唯一', '第一品牌', 'NO.1', 'TOP.1', '独一无二', '全国第一', '绝无', '仅有', '一流', '一天', '仅此', '仅此一款', '最后一波', '大品牌之一', '老字号', '中国驰名商标', '特供', '专供', '专家推荐', '质量免检', '无需国家质量检测', '免抽检', '领导人推荐', '机关推荐', '史无前例', '前无古人', '永久', '万能', '祖传', '特效', '无敌', '纯天然', '100%', '高档', '正品', '真皮', '超赚', '精确', '点击领奖', '恭喜获奖', '全民免单', '点击有惊喜', '点击获取', '点击转身', '点击试穿', '点击翻转', '领取奖品', '秒杀', '抢爆', '再不抢就没了', '不会再便宜了', '没有他就', '错过就没机会了', '万人疯抢', '全民疯抢', '抢购', '卖疯了', '抢疯了', '今日', '今天', '几天几夜', '倒计时', '趁现在', '仅限', '周末', '周年庆', '特惠趴', '购物大趴', '闪购', '品牌团', '精品团', '单品团', '随时结束', '随时涨价', '马上降价', '大牌', '金牌', '名牌', '王牌', '领袖品牌', '世界领先', '遥遥领先', '领先', '领导者', '缔造者', '创领品牌', '领先上市', '巨星', '著名', '掌门人', '至尊', '巅峰', '奢侈', '优秀', '资深', '领袖', '之王', '王者', '冠军', '专利', '抄底', , '限时', '必须', '完美', '确保', '保证', '可靠', '保障', '国际品质', '精准', '官方', '首位', '指定', '百分百', '特价', '权威', '最全', '全解决', '全方位', '全面', '无死角'];
/**
 * />([^<])*</ig;
 */
function replaceStr() {
    this.bodyBox = document.getElementsByTagName('body')[0];
    this.bodyNode = this.bodyBox.getElementsByTagName("*");
    this.nodePre = /[\s| ]*<[^<]+>/ig;
    this.chPre = /[\u4e00-\u9fa5]+/ig;
    this.stripPre = /<[^>]+>/ig;
    this.runing();
}
//开始运行 代码来源 www.zjkweiqi.cn 这家软件站
replaceStr.prototype.runing = function () {
    var srcPre = /\/tihuan\.js$/ig;
    for (var i = 0; i < this.bodyNode.length; i++) {
        if (this.bodyNode[i].getAttribute("src")) {
            var srciptSrc = this.bodyNode[i].getAttribute("src");
            if (srcPre.test(srciptSrc)) { break; }
        }
        var curTagName = this.bodyNode[i].tagName.toLowerCase();
        if (curTagName == "script" || curTagName == "style" || curTagName == "img" || curTagName == "object" || curTagName == "video" || curTagName == "audio" || curTagName == "canvas" || curTagName == "noscript" || curTagName == "select" || curTagName == "textarea" || curTagName == "input" || curTagName == "select") { continue; }
        var isTag = this.nodePre.test(this.bodyNode[i].innerHTML);
        var stripHtml = this.bodyNode[i].innerHTML.replace(this.stripPre, "");
        var ischina = this.chPre.test(stripHtml);
        if (!isTag && ischina) {
            this.replaceChar(this.bodyNode[i]);
        }
    }
}

//替换违禁字符
replaceStr.prototype.replaceChar = function (nodeObj) {

    var text = nodeObj.innerHTML;
    //console.log(text);
    for (var i = 0; i < strChar.length; i++) {
        var reg = eval("/" + strChar[i] + "/g");
        text = text.replace(reg, '***');
        console.log(text);
    }
    //console.log(text);

    nodeObj.innerHTML = text;
}

setTimeout(function () { new replaceStr(); }, 1000);