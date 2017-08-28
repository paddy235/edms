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

TaskMenu.setStyle("../Menu_XpStyle/Blue/BlueStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(true);
	TaskMenu.setScrollbarEnabled(false);
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("变电所设备","../Menu_XpStyle/Image/port1.gif","parent.window.frames[1].location.href='TaskMenu_Demo.html'");
	item2 = new TaskMenuItem("接触网设备","../Menu_XpStyle/Image/port.gif","parent.window.frames[1].location.href='TaskMenu_API.html'");
	item3 = new TaskMenuItem("图纸","../Menu_XpStyle/Image/copy.gif","parent.window.frames[1].location.href='TaskMenu_readme.html'");
	item4 = new TaskMenuItem("规章制度","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/bbs'");
	item5 = new TaskMenuItem("运行环境","../Menu_XpStyle/Image/demo.gif","parent.window.frames[1].location.href='TaskMenu_Demo.html'");
	item6 = new TaskMenuItem("物料","../Menu_XpStyle/Image/api.gif","parent.window.frames[1].location.href='TaskMenu_API.html'");
	item7 = new TaskMenuItem("工具","../Menu_XpStyle/Image/tool.gif","parent.window.frames[1].location.href='TaskMenu_readme.html'");
	item8 = new TaskMenuItem("车辆","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/bbs'");
    item9 = new TaskMenuItem("考勤管理","../Menu_XpStyle/Image/kqm.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/'");
    item10 = new TaskMenuItem("人员信息","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='userinfo_manage.jsp'");
    //item11 = new TaskMenuItem("供电系统GIS","../Menu_XpStyle/Image/image_xl.gif","window.parent.document.getElementById('frmTitle').style.display='none';window.parent.document.getElementById('switchPoint').innerText=8;window.parent.document.getElementById('midbar').style.display='block';parent.window.frames[1].location.href='http://localhost:8088/njggis/default.faces'");
    item11 = new TaskMenuItem("图层控制","../Menu_XpStyle/Image/image_xl.gif","parent.window.frames[1].location.href='http://localhost:8088/edms/gis/mygis.jsp'");
    item12 = new TaskMenuItem("专题图","../Menu_XpStyle/Image/image_xl.gif","parent.window.location.href='http://localhost:7080/njggis/default.faces'");
	

	////////////////////////////////////////////////
	taskMenu1 = new TaskMenu("GIS分布查询");
	taskMenu1.add(item11);
	taskMenu1.add(item12);
	taskMenu1.init();
	taskMenu2 = new TaskMenu("设备管理");
	taskMenu2.add(item1);
	taskMenu2.add(item2,1);
	taskMenu2.setBackground("../Menu_XpStyle/Image/bg.gif");
	taskMenu2.init();//
	taskMenu3 = new TaskMenu("技术资料");
	taskMenu3.add(item3);
	taskMenu3.add(item4);
	taskMenu3.add(item5);
	taskMenu3.init();
	taskMenu4 = new TaskMenu("料具管理");
	taskMenu4.add(item6);
	taskMenu4.add(item7);
	taskMenu4.add(item8);
	taskMenu4.init();
	taskMenu5 = new TaskMenu("人员管理",false);
	taskMenu5.add(item9);
	taskMenu5.add(item10);
	taskMenu5.init();
	
	
}
</script>
</head>
</html>