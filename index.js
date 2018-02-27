bg1 = document.getElementById('bg1');
bg2 = document.getElementById('bg2');
bg3 = document.getElementById('bg3');
bg4 = document.getElementById('bg4');
main = document.getElementById('main');
mc1 = document.getElementById("mc1");
mc2 = document.getElementById("mc2");
mc3 = document.getElementById("mc3");

bg1.addEventListener("click", function(){
	main.style.display = "block";
    mc1.style.backgroundImage = "url(h1.png)";
	mc2.style.backgroundImage = "url(h2.png)";
	mc3.style.backgroundImage = "url(h3.png)";
    
});

bg2.addEventListener("click", function(){
	main.style.display = "block";
    mc1.style.backgroundImage = "url(b1.png)";
	mc2.style.backgroundImage = "url(b2.png)";
	mc3.style.backgroundImage = "url(b3.png)";
    
});

bg3.addEventListener("click", function(){
	main.style.display = "block";
    mc1.style.backgroundImage = "url(l1.png)";
	mc2.style.backgroundImage = "url(l2.png)";
	mc3.style.backgroundImage = "url(l3.png)";
});
bg4.addEventListener("click", function(){
	main.style.display = "block";
    mc1.style.backgroundImage = "url(f1.png)";
	mc2.style.backgroundImage = "url(f2.png)";
	mc3.style.backgroundImage = "url(f3.png)";
});