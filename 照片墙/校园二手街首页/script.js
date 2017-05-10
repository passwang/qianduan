//伸缩

window.onload=function(){
	var header=document.getElementById('header');
	var  banner=document.getElementById("banner");
	var   left=document.getElementById("left");
	var   right=document.getElementById("right");
	var  dt=document.getElementsByName("dt");
	var  top=document.getElementById("top");
	var   timer=null;
	var   isTop=true;
	window.onscroll=function(){
		var   w=document.documentElement.scrollTop||document.body.scrollTop;
		if(w<100){
		header.className = " ";
		banner.className = "banner";
	    left.className = "left";
		right.className = "right";
		for (var i = 0; i < dt.length; i++) {
			dt[i].style.display="block";
		}
	
	}
	else {
		header.className = "scroll";
		banner.className = " banner scroll";
	    left.className = "left scroll";
		right.className = "right scroll";
		for (var i = 0; i < dt.length; i++) {
			dt[i].style.display="none";
		}

		if(w>500){
		top.style.visibility="visible";
	   }
	   else{
	   	  	top.style.visibility="hidden";
	   }


	}
	if(!isTop){
		clearInterval(timer);
	}
	isTop=false;

}

		  top.onclick=function(){
		  	var   newtop=document.documentElement.scrollTop||document.body.scrollTop;
           
		  	  
		  			if (newtop != 0) {
		  			timer=setInterval(function(){
		  		 document.documentElement.scrollTop = document.body.scrollTop -= 120 ;
                  isTop=true;

		  		    	},50)
		  	      }
		  	else
		  	{
		  		clearInterval(timer);
		  	}
		  
		 
	}
	

	

	

}