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
	item1 = new TaskMenuItem("������豸","../Menu_XpStyle/Image/port1.gif","parent.window.frames[1].location.href='bdssb/byq/RyMain.jsp'");
	//item2 = new TaskMenuItem("�Ӵ����豸","../Menu_XpStyle/Image/port.gif","parent.window.frames[1].location.href='jcwsb/jcwsbMain.jsp'");
	item3 = new TaskMenuItem("ͼֽ","../Menu_XpStyle/Image/copy.gif","parent.window.frames[1].location.href='tz/tzMain.jsp'");
	item4 = new TaskMenuItem("�����ƶ�","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='gzzd/gzzdMain.jsp'");
	//item5 = new TaskMenuItem("���л���","../Menu_XpStyle/Image/demo.gif","parent.window.frames[1].location.href='yxhj/yxhjMain.jsp'");
	item6 = new TaskMenuItem("����","../Menu_XpStyle/Image/api.gif","parent.window.frames[1].location.href='wlmain/wlmain.jsp'");
	item7 = new TaskMenuItem("����","../Menu_XpStyle/Image/tool.gif","parent.window.frames[1].location.href='gjmain/gjmain.jsp'");
	item8 = new TaskMenuItem("����","../Menu_XpStyle/Image/list.gif","parent.window.frames[1].location.href='zycmain/zycmain.jsp'");
    //item9 = new TaskMenuItem("���ڹ���","../Menu_XpStyle/Image/kqm.gif","parent.window.frames[1].location.href='http://www.cnwebshow.com/'");
    item10 = new TaskMenuItem("��Ա��Ϣ","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='ryxx/RyMain.jsp'");
      

	

	////////////////////////////////////////////////
	
	taskMenu2 = new TaskMenu("�豸����");
	taskMenu2.add(item1);
	//taskMenu2.add(item2,1);
	taskMenu2.init();

	taskMenu3 = new TaskMenu("��������");
	taskMenu3.add(item3);
	taskMenu3.add(item4);
	//taskMenu3.add(item5);
	taskMenu3.init();

	taskMenu4 = new TaskMenu("�Ͼ߹���");
	taskMenu4.add(item6);
	taskMenu4.add(item7);
	taskMenu4.add(item8);
	taskMenu4.init();

	taskMenu5 = new TaskMenu("��Ա����");
	taskMenu5.add(item10);
	taskMenu5.init();
	
	
}
</script>
</head>
</html>