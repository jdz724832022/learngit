let username=document.querySelector("#username");
let pwd=document.querySelector("#pwd");
let loginBtn=document.querySelector("#loginBtn");


loginBtn.onclick=function(){
	let data={
		username:username.value,
		pwd:pwd.value
	}
	console.log(data);
	gpAjax({
		url:"../php/login.php",
		type:"post",
		data:data,
		fnSU:function(data){
			if(data==1){
				alert("登录成功");
				location.href='../index.html';
			}else{
				alert("登录失败,请重新输入");
				location.reload();
			}
		}
		
	});
}