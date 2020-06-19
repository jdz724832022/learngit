let oput=document.querySelector("input");
let oul=document.querySelector("ul");
oput.oninput=function(){
	let scr=document.createElement("script");
	scr.src=`
	https://www.yohobuy.com/product/
	search/
	suggest?
	callback=aa
	&return_type=jsonp
	&keyword=${oput.value}&_=1591581649727
	`;
	document.body.appendChild(scr);
	document.body.removeChild(scr);
}
function aa(data){
	let res=data.data;
	console.log(res);
	let str='';
	res.forEach((item)=>{
		str+=`<li>${item.keyword}</li>`;
	});
	oul.innerHTML=str;
}