setInterval(function(){
	hideImages();
},1000);

function hideImages() {
	var images = document.getElementsByClassName("image-thumb");
	for(i in images) {
		if(images[i] != undefined && !images[i].hasAttribute("hidden")) {
			var div = document.createElement("div");
			div.style.width = images[i].style.width;
			div.style.height =  images[i].style.height;
			div.style.backgroundColor = "rgba(6, 6, 6, 0.83)";
			div.style.position = "absolute";
			div.style.right = "0px";
			
			images[i].appendChild(div);
			images[i].setAttribute("hidden", "true");
		}
	}
}