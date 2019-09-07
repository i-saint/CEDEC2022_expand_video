chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.search("cedec.cesa.or.jp/2019/session/detail/")) {
        chrome.tabs.executeScript(tabId, { file: "content.js" })
    }
})