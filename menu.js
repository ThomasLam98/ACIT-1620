document.getElementById("open").addEventListener("click", function(){
	document.getElementById("menu").style.left = "0px";
});

document.getElementById("close").addEventListener("click", function(){
	document.getElementById("menu").style.left = "-110px";
});

document.getElementById("makeBg").addEventListener("click", function(){
		bg.style.backgroundImage = zoom.style.backgroundImage;
});

document.getElementById("reset").addEventListener("click", function(){
		bg.style.backgroundImage = "none";
});

document.getElementById("showApp").addEventListener("click", function(){
		app1.style.display = "block";
});

document.getElementById("hideApp").addEventListener("click", function(){
		app1.style.display = "none";
});

