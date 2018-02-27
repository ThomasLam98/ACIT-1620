downImg = document.getElementById('downImg');
menuChange = 0;

downImg.addEventListener("click", function() {
	if (menuChange == 0) {
		document.getElementById("menu").style.top = "0px";
		menuChange = menuChange + 1
	
	}else {
		document.getElementById("menu").style.top = "-70px";
		menuChange = menuChange - 1
	}
});