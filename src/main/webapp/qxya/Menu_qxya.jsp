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

var item1;
var item2;
var item3;

TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	taskMenu4 = new TaskMenu("�¹��ٱ�");
	item41 = new TaskMenuItem("�¹��ٱ�","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='sgsb/sgsb.jsp'");
	//item42 = new TaskMenuItem("��������","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='tzs/tzs.jsp'");
	
	taskMenu4.add(item41);
	//taskMenu4.add(item42);
	taskMenu4.init();//

    taskMenu2 = new TaskMenu("���޸���");
	item4 = new TaskMenuItem("����·��ͼ","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='qxlxt/qxlxt.jsp'");
	item5 = new TaskMenuItem("���޻��߲���ͼ","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='jjbdt/jjbdt.jsp'");
	item6 = new TaskMenuItem("���޹����ֲ�ͼ","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='qxgqfbt/qxgqfbt.jsp'");
	item7 = new TaskMenuItem("���޲��Ϸֲ�ͼ","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='qxclfb/qxclfb.jsp'");
	item8 = new TaskMenuItem("��˷ȫ����Ƶ","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='sp/sp.jsp'");
	taskMenu2.add(item4);
	taskMenu2.add(item5);
	taskMenu2.add(item6);
	taskMenu2.add(item7);
	taskMenu2.add(item8);
	taskMenu2.init();//
	
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("����Ԥ���鵵","../Menu_XpStyle/Image/demo.gif","parent.window.contents.location.href='yagd/qxyagd.jsp'");
	item2 = new TaskMenuItem("����Ԥ������","../Menu_XpStyle/Image/api.gif","parent.window.contents.location.href='yacx/qxyacx.jsp'");
	item3 = new TaskMenuItem("��������ͼ����","../Menu_XpStyle/Image/api.gif","parent.window.contents.location.href='qxlctgl/qxlctgl.jsp'");

	taskMenu1 = new TaskMenu("����Ԥ��");	
	taskMenu1.add(item1);
	taskMenu1.add(item2);
	taskMenu1.add(item3);
	taskMenu1.init();//
	
	item31 = new TaskMenuItem("�����¹ʹ鵵","../Menu_XpStyle/Image/demo.gif","parent.contents.location.href='algd/Algd.jsp'");
	item32 = new TaskMenuItem("�����¹ʼ���","../Menu_XpStyle/Image/api.gif","parent.contents.location.href='aljs/AlSrc.jsp'");
	taskMenu3 = new TaskMenu("�����¹�");
	
	
	taskMenu3.add(item31);
	taskMenu3.add(item32);
	taskMenu3.init();//
	
}
</script>
</head>
<body>
    <input type="hidden" id="DWJB" value="<%= session.getAttribute("DWJB")==null?"": session.getAttribute("DWJB")%>">   
</body>
</html>