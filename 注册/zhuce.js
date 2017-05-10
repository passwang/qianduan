//计算字符串的长度
function getlength(str){
    return str.replace(/[^\x00-\xff]/g,"aa").length;//双字节字符:汉字
}                                                   //单字节字符:数字，字母，符号，一个字节8比特,0~127
//比较字符串是否相等
function findstr(str,n){
	var t=0;
	for (var i = 0; i < str.length; i++) {
		if(str[i]==n)
		  t++;
	}
	return t;
}
//产生验证码
function createCode(){
   
     code = "";   
     var codeLength = 4;//验证码的长度  
     var checkCode = document.getElementById("code");   
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//随机数  
     for(var i = 0; i < codeLength; i++) {//循环操作  
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
        code += random[index];//根据索引取得随机数加到code上  
  }
    
     checkCode.innerHTML=code;
}

var  f;
window.onload=function()
      {
    
     var ainput=document.getElementsByTagName('input');
     var oName=ainput[0];
     var pwd1=ainput[1];
     var pwd2=ainput[2];
      var yan=ainput[3];
     var ap=document.getElementsByTagName("p");
     var opname=ap[0];
     var oppwd1=ap[1];
     var oppwd2=ap[2];
     var oyanp=ap[3];
     var ab=document.getElementsByTagName("b")[0];
     var aem=document.getElementsByTagName("em");
     var aem1=aem[1];
     var aem2=aem[2];
     var oNamelength=0;
     var opwdlength=0;
    
     //数字，字母（不分大小写），下划线，汉字
     //5-25个字符推荐
     //汉字:\u4e00-\u9fa5
     //var reg=/[^\w\u4e00-\u9fa5]/g;

     //用户名
     //得到焦点
     oName.onfocus=function(){
        opname.style.display="block";
     }
     //按键
    oName.onkeyup=function(){
    	
      ab.style.visibility="visible";
     oNamelength=getlength(this.value);//input里面的内容
     
     ab.innerHTML=oNamelength + '个字符';
     if(oNamelength==0){
     	ab.style.visibility="hidden";
     }


    }
    //失去焦点
   oName.onblur=function(){
     //含有非法字符
     var reg=/[^\w\u4e00-\u9fa5]/g;
     if(reg.test(this.value))
     {
     	opname.innerHTML='<i class="err"></i>含有非法字符';
     	f=false;
     }
     //是否为空
      else if(oName.value=="")
   {
   	 opname.innerHTML='<i class="err"></i>不能为空!';
      f=false;
   	 
   }
  
     //长度超过25个字符
    else if(oNamelength>20)
    {
       opname.innerHTML='<i class="err"></i>长度超过20个字符';
        f=false;
   }
     //长度小于5个字符
     else if(oNamelength<5)
     {
       opname.innerHTML='<i class="err"></i>长度少于5个字符';
        f=false;
   }
    
  
     //ok
     else{
     	opname.innerHTML='<i class="ok"></i>ok';
      f=true;
     }


   }
   //登录密码
   pwd1.onfocus=function(){
 oppwd1.style.display="block";
   }
   pwd1.onkeyup=function(){
   //大于5个字符中
    opwdlength=getlength(this.value);
    if(opwdlength>5)
    {
       aem1.className="active";
       pwd2.removeAttribute("disabled");
       oppwd2.style.display="block";

    }
    else{
    	aem1.className="";
    	pwd2.removeAttribute("disabled");
       oppwd2.style.display="block";

    }

   //大于15个字符强
   if(opwdlength>15)
    {
       aem2.className="active";
       pwd2.removeAttribute("disabled");
       oppwd2.style.display="block";

    }
    else{
    	aem2.className="";
    	pwd2.removeAttribute("disabled");
       oppwd2.style.display="block";

    }


   }
   pwd1.onblur=function(){
   	var m=findstr(pwd1.value,pwd1.value[0]);
   	var re=/[^\d]/g;//全不是数字
   	var re_z=/[^a-zA-Z]/g;
//不能为空
if(pwd1.value=="")
{
	oppwd1.innerHTML='<i class="err"></i>不能为空!';
    f=false;
    
}
//长度应为5-26
else if(pwd1.value.length<5||pwd1.value.length>26)
{
	oppwd1.innerHTML='<i class="err"></i>字符长度应为5-26!';
    f=false;
  
}


//不能使用相同字符
  else if(m==pwd1.value.length)
  {
  	oppwd1.innerHTML='<i class="err"></i>不能使用相同的字符!';
      f=false;
  }




//不能全为数字
else if(!re.test(this.value))
{
	oppwd1.innerHTML='<i class="err"></i>字符不能全为数字!';
    f=false;
}

//不能全为字母
else if(!re_z.test(this.value))
{
	oppwd1.innerHTML='<i class="err"></i>字符不能全为字母!';
    f=false;
}

//ok
else{
	oppwd1.innerHTML='<i class="ok"></i>ok';
  f=true;
}

   }
   //确认密码
   pwd2.onfocus=function(){
   	oppwd2.innerHTML='<i class="ati"></i>请再输入一次!';
      f=false;
   }
  
   pwd2.onblur=function(){
    if(this.value!=pwd1.value)
    {
       oppwd2.innerHTML='<i class="err"></i>两次输入密码不一致!';
        f=false;
    }
    else if(this.value=="")
    {
    		oppwd2.innerHTML='<i class="ati"></i>请再输入一次!';
          f=false;
    }
    else{
    	oppwd2.innerHTML='<i class="ok"></i>ok';
      f=true;
    }
   
}
//验证码
createCode();

yan.onfocus=function(){
   oyanp.style.display="block";

}
  
  yan.onblur=function(){

    if(yan.value.length==0)
    {
      oyanp.innerHTML='<i class="err"></i>验证码为空!';
       f=false;
    }
    else if(yan.value!=code)
    {
      oyanp.innerHTML='<i class="err"></i>验证码不一致!';
      yan.value="";
       f=false;
    }
    else{
       oyanp.innerHTML='<i class="ok"></i>ok!';
        f=true;
    }
    

  }


}

function check(){

  if (f==false) 
    return false;
  
  else
    return true;
  
}