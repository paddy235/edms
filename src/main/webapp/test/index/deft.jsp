<%@ page contentType="text/html; charset=gb2312" language="java" %>
<html><head>
<link href="css/bodyStyle.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>管理系统</title>
<script language="JavaScript" src="js/openWin.js"></script>
<!--mouse上移变色-->
<script language="JavaScript">
nereidFadeObjects = new Object();
nereidFadeTimers = new Object();

function nereidFade(object, destOp, rate, delta) {
	if (!document.all) return
	if (object != "[object]"){
		setTimeout("nereidFade("+object+","+destOp+","+rate+","+delta+")",0);
		return;
	}
	clearTimeout(nereidFadeTimers[object.sourceIndex]);
	diff = destOp-object.filters.alpha.opacity;
	direction = 1;
	if (object.filters.alpha.opacity > destOp){
		direction = -1;
	}
	delta=Math.min(direction*diff,delta);
	object.filters.alpha.opacity+=direction*delta;
	if (object.filters.alpha.opacity != destOp){
		nereidFadeObjects[object.sourceIndex]=object;
		nereidFadeTimers[object.sourceIndex]=setTimeout("nereidFade(nereidFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);
	}
}
</script>
<script language="JavaScript">
<!--
function showUrl(theUrl)
{ 
	parent.main.location.href = theUrl
	parent.mainFrameSet.cols="0,10,*"
	//newwin=window.open(theUrl,'newwindow','fullscreen=1')
//newwin.resizeTo(550,400)
//newwin.moveTo(screen.width/2-275,screen.height/2-200)
}
//-->
</script>
<style type="text/css">
<!--
.style13 {font-size: 14px}
body {
	background-image: url();
}
.style14 {color: #FFFFFF}
-->
</style>
</head>
<body bgcolor="#EFEEEC" leftMargin="0" topMargin="0" rightmargin="0">
</body>
</html>
