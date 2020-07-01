var i = 0;
setInterval(function(){
	window.scrollTo(0, document.body.scrollHeight/1*i);   //1800为自定义滑动距离，当前代码为每秒向下滑动1/1800
	i++;
	console.log(i);
 }, 2000);  // 1000为间隔时间，单位毫秒