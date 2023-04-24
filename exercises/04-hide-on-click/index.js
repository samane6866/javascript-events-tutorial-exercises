window.myEventListener = function myEventListener()
{
	//your code here
	let firstDiv=document.getElementById("firstDiv");
	firstDiv.addEventListener("click", function(){
		firstDiv.style.display="none";
	})
}
