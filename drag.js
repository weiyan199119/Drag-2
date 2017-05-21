 function drag(id) {
 	var obj = document.getElementById(id);
 	var disx = 0;
 	var dixY = 0;
 	obj.onmousedown = function(ev){
 		var ev = ev || ev.event;
 		disX = ev.pageX-obj.offsetLeft;
 		disY = ev.pageY-obj.offsetTop;

 		document.onmousemove = function(ev){

 			obj.style.left = ev.clientX-disX+'px';
 			obj.style.top = ev.clientY-disY+'px';
 			
 		}
 		 document.onmouseup = function(ev){
 		 	document.onmousemove = null;
 		 	document.onmouseup = null;
 		 }
 	}

 	return false

 }