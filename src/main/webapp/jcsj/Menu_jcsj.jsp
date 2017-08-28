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
var taskMenu5;

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
var item13;
var item14;
var item15;

TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("变电所设备","../Menu_XpStyle/Image/port1.gif","parent.window.frames[1].location.href='bdssb/byq/RyMain.jsp'");
	//item2 = new TaskMenuItem("接触网设备","../Menu_XpStyle/Image/port.gif","parent.window.frames[1].location.href='jcwsb/jcwsbMain.jsp'");
	item3 = new TaskMenuItem("图纸","../Menu_XpStyle/Image/copy.gif","parent.window.frames[1].location.href='tz/tzMain.jsp'");
	item4 = new TaskMenuItem("规章制度","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='gzzd/gzzdMain.jsp'");
	//item5 = new TaskMenuItem("运行环境","../Menu_XpStyle/Image/demo.gif","parent.window.frames[1].location.href='yxhj/yxhjMain.jsp'");
	item6 = new TaskMenuItem("物料","../Menu_XpStyle/Image/api.gif","parent.window.frames[1].location.href='wlmain/wlmain.jsp'");
	item7 = new TaskMenuItem("工具","../Menu_XpStyle/Image/tool.gif","parent.window.frames[1].location.href='gjmain/gjmain.jsp'");
	item8 = new TaskMenuItem("车辆","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='zycmain/zycmain.jsp'");
    //item9 = new TaskMenuItem("考勤管理","../Menu_XpStyle/Image/kqm.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/'");
    item10 = new TaskMenuItem("人员信息","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='ryxx/RyMain.jsp'");
      

	

	////////////////////////////////////////////////
	
	taskMenu2 = new TaskMenu("设备管理");
	taskMenu2.add(item1);
	//taskMenu2.add(item2,1);
	taskMenu2.init();

	taskMenu3 = new TaskMenu("技术资料");
	taskMenu3.add(item3);
	taskMenu3.add(item4);
	//taskMenu3.add(item5);
	taskMenu3.init();

	taskMenu4 = new TaskMenu("料具管理");
	taskMenu4.add(item6);
	taskMenu4.add(item7);
	taskMenu4.add(item8);
	taskMenu4.init();

	taskMenu5 = new TaskMenu("人员管理");
	taskMenu5.add(item10);
	taskMenu5.init();
	
	
}
</script>
</head>
</html>