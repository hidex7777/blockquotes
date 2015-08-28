// A generic onclick callback function.
function openBlockQuote() {
  return function(info, tab) {
    var select = info.selectionText;
    var pageurl = info.pageUrl;
    var title = tab.title;
    document.getElementById('selected').value = '<blockquote title="' + title + '" cite="' + pageurl + '">\n'
          + select + '\n'
          + '<cite><a href="' + pageurl + '" target="_blank" rel="nofollow">（' + title + '）</a></cite>\n'
          + '</blockquote>';
    window.open("new.html", "_blank");
  };
  // var select = "selected str is: " + JSON.stringify(info["selectionText"]);
  // var pageurl = "selected url is: " + JSON.stringify(info["pageUrl"]);
  // var title = "selected title is: " + JSON.stringify(tab["title"]);
  // chrome.tabs.create({"url":"bq.html"}, function(select, pageurl, title){
  //   var tarea = document.getElementById('selected');
  //   tarea.innerText = select + "<br>" + pageurl + "<br>";
  // });
};

// Create one item for context type selection.
var contextId = chrome.contextMenus.create({
  "title": "blockquotes",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": openBlockQuote()
});
