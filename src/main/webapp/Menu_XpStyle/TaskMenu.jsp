<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<html>
<head>
<script src="../Menu_XpStyle/TaskMenu.js"></script>
<script>
var taskMenu1;
var taskMenu2;
var taskMenu3;
var taskMenu4;

var item1;
var item2;
var item3;
var item4;
var item5;
var item6;
var item7;
var item8;
TaskMenu.setStyle("../Menu_XpStyle/Blue/BlueStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(true);
	//TaskMenu.setScrollbarEnabled(true);
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("TaskMenu 演示","Image/demo.gif","parent.window.frames[1].location.href='TaskMenu_Demo.html'");
	item2 = new TaskMenuItem("TaskMenu 3.0 API","Image/api.gif","parent.window.frames[1].location.href='TaskMenu_API.html'");
	item3 = new TaskMenuItem("一些补充说明","Image/copy.gif","parent.window.frames[1].location.href='TaskMenu_readme.html'");
	item4 = new TaskMenuItem("好的建议与留言","Image/friends.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/bbs'");
	item5 = new TaskMenuItem("TaskMenu 3.0 下载","Image/dload.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/'");
	item6 = new TaskMenuItem("Ajax中国","Image/update.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com'");
	item7 = new TaskMenuItem("<B>TaskMenu</B>");
	item8 = new TaskMenuItem();
	item8.setLabel("当前版本 <b style='color:purple'>3.0</b>");

	////////////////////////////////////////////////
	taskMenu1 = new TaskMenu("关于 TaskMenu");
	taskMenu1.add(item1);
	taskMenu1.add(item2,1);
	taskMenu1.setBackground("../Menu_XpStyle/Image/bg.gif");
	taskMenu1.init();
	taskMenu2 = new TaskMenu("TaskMenu 其他");
	taskMenu2.add(item3);
	taskMenu2.add(item4);
	taskMenu2.add(item5);
	taskMenu2.add(item6);
	taskMenu2.init();
	taskMenu3 = new TaskMenu("测试菜单");
	taskMenu3.init();
	taskMenu4 = new TaskMenu("TaskMenu 版本");
	taskMenu4.init();
	taskMenu4.add(item7);
	taskMenu4.add(item8);
}
</script>
</head>
</html>