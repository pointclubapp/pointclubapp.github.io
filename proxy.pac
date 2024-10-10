function FindProxyForURL(url, host) {
    var PROXY_9502 = "PROXY stg.checkproxy.rakuten-it.com:9502";
    var PROXY_9514 = "PROXY stg.checkproxy.rakuten-it.com:9514";
    
    var whiteList_9502 = [
        "https://grp01.id.rakuten.co.jp",
        "https://grp02.id.rakuten.co.jp",
        "https://grp03.id.rakuten.co.jp",
        "https://grp04.id.rakuten.co.jp",
        "https://get.luckypoint.rakuten.co.jp",
        "https://my.rakuten.co.jp",
        "https://luckypoint.rakuten.co.jp",
        "https://getpoint.rakuten.co.jp",
        "https://member.id.rakuten.co.jp",
        "https://app.rakuten.co.jp",
        "https://stg.app.rakuten.co.jp"
    ];
    
    for (var index in whiteList_9502) {
        if (shExpMatch(url, whiteList_9502[index] + "*")) {
            return PROXY_9502;
        }
    }
    
    var whiteList_9514 = [
        "https://point.rakuten.co.jp"
    ];
    
    for (var index in whiteList_9514) {
        if (shExpMatch(url, whiteList_9514[index] + "*")) {
            return PROXY_9502;
        }
    }
    
    return "DIRECT";
}