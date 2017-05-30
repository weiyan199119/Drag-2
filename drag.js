 function drag(id) {
 	var obj = document.getElementById(id);
 	var disx = 0;
 	var dixY = 0;
 	obj.onmousedown = function(ev){
 		var ev = ev || ev.event;
 		disX = ev.pageX-obj.offsetLeft;
 		disY = ev.pageY-obj.offsetTop;
 	}

 	return false

 }
