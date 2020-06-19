//@parmers url 路径 
// 			fnSU 成功时的处理方法
//			fnER 失败时的处理方法
// 			默认是get请求
function ajax(url,fnSU,fnER){
	var xhr;
	if (window.XMLHttpRequest)
	{
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xhr=new XMLHttpRequest();
	}
	else
	{
	    // IE6, IE5 浏览器执行代码
	    xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET",url);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status=200){
				var data=xhr.responseText;
				fnSU(data);
			}else{
				fnER();
			}
		}		
	}
}
 /** ajax get,post请求
   * @param type       <string >  请求方式   
   * @param url        <string>   请求的路径
   * @param data       <object>   向后台传输的数据
   * @param fnSU       <function> 请求成功以后的回调函数
   * @param fnER       <function> 请求失败以后的回调函数
   */
function gpAjax(obj){
	if (window.XMLHttpRequest)
	{
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    var xhr=new XMLHttpRequest();
	}
	else
	{
	    // IE6, IE5 浏览器执行代码
	   var xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str='';
	for(var i in obj.data){
		str+=i+"="+obj.data[i]+"&";
	}
	str=str.replace(/&$/,"");
	if(obj.type.toLowerCase()=="get"){
		if(str==''){
			xhr.open("get",obj.url);
		}else{
		xhr.open("get",obj.url+"?"+str);
		
		}
		xhr.send();
	}
	if(obj.type.toLowerCase()=="post"){
		xhr.open("post",obj.url);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);	
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status=200){
				var data=xhr.responseText;
				obj.fnSU(data);
			}else{
				if(obj.fnER){
				obj.fnER();
				}
			}
		}		
	}
}