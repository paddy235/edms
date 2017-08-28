<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<html>
<head>
<script src="../Menu_XpStyle/TaskMenu.js"></script>
<script>
//var taskMenu1;
var taskMenu2;


var item1;
var item2;
var item3;
var item4;
var item5;
var item6;
var item7;
var item8;
var item9;
var item10;
var item11;
var item12;

TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
    item10 = new TaskMenuItem("系统使用说明","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='sysm.htm'");
    item11 = new TaskMenuItem("系统维护说明","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='whsm.htm'");
    
	

	taskMenu2 = new TaskMenu("用户帮助");
	taskMenu2.add(item10);
	taskMenu2.add(item11);
	taskMenu2.init();
}
</script>
</head>
</html>