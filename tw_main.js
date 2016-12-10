chrome.storage.local.get("data", function(items) {
	if (!chrome.runtime.error) {
		//console.log(items.data);

		if (items.data != undefined){
			
			$("#tweet-box-home-timeline").attr("data-placeholder-default", items.data)
			$("form").attr("data-condensed-text", items.data)
		}
	}
});

chrome.storage.local.get("momentos", function(items) {
	if (!chrome.runtime.error) {
		//console.log(items.data);

		if (items.momentos == "on"){ //hide Moments tab
			[].forEach.call(document.querySelectorAll('.js-moments-tab'), function (el) {
				el.style.display = 'none';
			});
		}
	}
});

