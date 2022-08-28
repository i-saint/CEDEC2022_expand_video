function inject()
{
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('content.js');
    document.head.appendChild(s);
}

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status == 'complete' && tab.url.search('cedec.cesa.or.jp') != -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: inject,
        });
    }
});
