bg1 = document.getElementById("bg1");
bg2 = document.getElementById("bg2");
bg3 = document.getElementById("bg3");
bg4 = document.getElementById("bg4");
ch1 = document.getElementById("ch1");
ch2 = document.getElementById("ch2");
ch3 = document.getElementById("ch3");
plus = document.getElementById("plus")
minus = document.getElementById("minus")
var num1 = 100;
var num2 = 70;

bg1.addEventListener('click', function(){
    ch1.style.backgroundImage = "url(i1.jpg)";
    ch2.style.backgroundImage = "url(i2.jpg";
    ch3.style.backgroundImage = "url(i3.jpg)";
});

    
bg2.addEventListener('click', function(){
    ch1.style.backgroundImage = "url(i4.jpg)";
    ch2.style.backgroundImage = "url(i5.jpg)";
    ch3.style.backgroundImage = "url(i6.jpg)";
});


bg3.addEventListener('click', function(){
    ch1.style.backgroundImage = "url(i7.jpg)";
    ch2.style.backgroundImage = "url(i8.jpg)";
	ch3.style.backgroundImage = "url(i9.jpg)";
});

bg4.addEventListener('click', function(){
    ch1.style.backgroundImage = "url(i10.jpg)";
    ch2.style.backgroundImage = "url(i11.jpg)";
    ch3.style.backgroundImage = "url(i12.jpg)";
});

ch1.addEventListener("mouseenter", function(){
		zoom.style.backgroundImage = ch1.style.backgroundImage;
});

ch2.addEventListener("mouseenter", function(){
		zoom.style.backgroundImage = ch2.style.backgroundImage;
});

ch3.addEventListener("mouseenter", function(){
		zoom.style.backgroundImage = ch3.style.backgroundImage;
});

document.getElementById('zoom').addEventListener('click', function(){
    document.getElementById('zoomControls').style.display = 'block';
});

plus.addEventListener("click", function(){
		num1 += 10;
		num2 += 7;
		zoom.style.width = num1+"%";
		zoom.style.height = num1+"%";
});

minus.addEventListener("click", function(){
		num1 -= 10;
		num2 -= 7;
		zoom.style.width = num1+"%";
		zoom.style.height = num2+"%";
});

