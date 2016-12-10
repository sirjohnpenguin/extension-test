// options.js

document.body.onload = function() {
	chrome.storage.local.get("data", function(items) {
		if (!chrome.runtime.error) {
			//console.log(items);
			document.getElementById("data").innerText = "Current value: ";
			document.getElementById("text").value = items.data;
		}
	});
	
	chrome.storage.local.get("momentos", function(items) {
		if (!chrome.runtime.error) {
			//console.log(items);
			document.getElementById("momentos").innerText = "Hide Momentos: ";
			if (items.momentos == "on")
			{
				var selectedValue = document.getElementById("mome1");
				selectedValue.checked = true;
			}

			if (items.momentos == "off")
			{
				var selectedValue2 = document.getElementById("mome2");
				selectedValue2.checked = true;
			}
			if (items.momentos == undefined)
			{
				var selectedValue2 = document.getElementById("mome2");
				selectedValue2.checked = true;
			}
		}
	});
  
}

document.getElementById("set").onclick = function() {
	var d = document.getElementById("text").value;
	var selectedValue = document.getElementById("mome1");
	var selectedValue2 = document.getElementById("mome2");
	var moments_status
	
	if (selectedValue.checked == true){
		moments_status = "on";
	}else{
		moments_status = "off";
	}
	
	if (selectedValue2.checked == true){
		moments_status = "off";
	}else{
		moments_status = "on";
	}

	chrome.storage.local.set({ "data" : d }, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
	});
  
	chrome.storage.local.set({ "momentos" : moments_status }, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
	});
	
	window.close(); // save and close window
}
