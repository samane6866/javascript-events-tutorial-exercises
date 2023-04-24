window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		 alert("the elemnt that was clicked is:"+event.target.id)
	});
};
