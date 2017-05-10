 
	function todouble(num){
        if(num<10){
           return('0'+num);
             }
           else{
           	return(''+num);
           }
	}
	 
	function upTime(){
	var obx=document.getElementById('bx');
	var oDate=new Date();
	var str=''+oDate.getHours()+todouble(oDate.getMinutes())+todouble(oDate.getSeconds());
	obx.innerHTML='<h2>'+str.charAt(0)+str.charAt(1)+':'+str.charAt(2)
		+str.charAt(3)+':'+str.charAt(4)+str.charAt(5)+'</h2>';
		
}

        
   window.onload=function(){

   	 var obt1=document.getElementById('bt1');
	var obt2=document.getElementById('bt2');
    var timer=null;
	obt1.onclick=function()
	{
		timer=setInterval(upTime,1000);
	};
	obt2.onclick=function()
	{
		clearInterval(timer);
	};
};