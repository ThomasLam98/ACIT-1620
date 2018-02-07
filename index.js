avatar = document.getElementById("img1");
center_div = document.getElementById("center");
menuChange = 0;
var num = 0;
var num2 = 0;
var avatarsize = avatar.height;
document.getElementById("avatar1").addEventListener("click", function(){
    avatar.src = "ava1.png";
});

document.getElementById("avatar2").addEventListener("click", function(){
    avatar.src = "ava2.png";
});

document.getElementById("right").addEventListener("click", function(){
	num = num + 7;
	center_div.style.left = num+"px"; 
	});
	
document.getElementById("left").addEventListener("click", function(){
	num = num - 7;
	center_div.style.left = num+"px";
	
	});

document.getElementById("up").addEventListener("click", function(){
	num2 = num2 + 7;
	center_div.style.bottom = num2+"px";
	});
	
document.getElementById("down").addEventListener("click", function(){
	num2 = num2 - 7;
	center_div.style.bottom = num2+"px";
	});
	
	
document.getElementById("plus").addEventListener("click", function(){
    avatarsize *= 1.01;
    avatar.style.height = avatarsize+"px";
});

document.getElementById("minus").addEventListener("click", function(){
    avatarsize *= 0.99;
    avatar.style.height = avatarsize+"px";
});

avatar.addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "0";
	document.getElementById("buttons2").style.opacity = "0";
});

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "1";
	document.getElementById("buttons2").style.opacity = "1";
});

document.getElementById("menuB").addEventListener("click", function() {
	if (menuChange == 0) {
		document.getElementById("menu").style.right = "0px";
		menuChange = menuChange + 1
	
	}else {
		document.getElementById("menu").style.right = "-75px";
		menuChange = menuChange - 1
	}
});


document.getElementById("but1").addEventListener("click", function() {
	document.getElementById("hat").style.display = "block";

});

document.getElementById("but2").addEventListener("click", function() {
	document.getElementById("shirt").style.display = "block";

});

document.getElementById("but3").addEventListener("click", function() {
	document.getElementById("bow").style.display = "block";

});