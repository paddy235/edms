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
var item16;
var item17;
var item18;

var item19;
var item20;
var item21;
var item22;
var item23;
var item24;
var item25;
var item26;
var item27;
var item28;
TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
	TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("���籨��1","../Menu_XpStyle/Image/demo.gif","parent.contents.location.href='query/jdb1.jsp'");
	item2 = new TaskMenuItem("���籨��2-1","../Menu_XpStyle/Image/api.gif","parent.contents.location.href='query/jdb2-1.jsp'");
	item3 = new TaskMenuItem("���籨��2-2","../Menu_XpStyle/Image/api.gif","parent.contents.location.href='query/jdb2-2.jsp'");
	item4 = new TaskMenuItem("���籨��5","../Menu_XpStyle/Image/dload.gif","parent.contents.location.href='query/wjxtcgk.jsp'");
	item5 = new TaskMenuItem("���籨��6","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/sgsb.jsp'");

	item6 = new TaskMenuItem("�����ձ�","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/gdrb.jsp'");
    item7 = new TaskMenuItem("������Ϸ���","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/gdgzfx.jsp'");
    item8 = new TaskMenuItem("������բ��¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/tzjl.jsp'");
    item9 = new TaskMenuItem("ǣ������ͣ���͵�ǼǱ�","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/tsddjb.jsp'");
    item10 = new TaskMenuItem("����豸���ϼ�¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='stgz/stgz.jsp'");
    item11 = new TaskMenuItem("�������¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='zbjxdhjl/zbjxdhjl.jsp'");
    item12 = new TaskMenuItem("�Ӵ������Ϸ�����¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/wgztyfs.jsp'");
    item13 = new TaskMenuItem("����֪ͨ","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='jgtz/jgtz.jsp'");
    item14 = new TaskMenuItem("�е�֪ͨ��","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='tzs1/tzs1.jsp'");
    item21 = new TaskMenuItem("��·���Զ���բ��¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/dlqzdtzjl.jsp'");
    item22 = new TaskMenuItem("ֵ����־","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='../rcgl/dutylog_query/dutylog_query.jsp'");
    item23 = new TaskMenuItem("ȱ�ݹ���","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='../yxgl/qxgl_cell/facility_defect.jsp'");

    item15 = new TaskMenuItem("����ά����ҵ�ƻ�����","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/wxzyjh.jsp'");
    item16 = new TaskMenuItem("�������բ��������","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/bdsdzczml.jsp'");
    item17 = new TaskMenuItem("���뿪�ص�բ��������","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/jcwglkgdzml.jsp'");
    item18 = new TaskMenuItem("�Ӵ�����ҵ����","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/jcwzyml.jsp'");
	item19 = new TaskMenuItem("�ط����������¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/dfddmljl.jsp'");
   	item20 = new TaskMenuItem("�����������¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/wxl.jsp'");
    
    item24 = new TaskMenuItem("�����ͣ����ҵ�����¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/bdstdzyml.jsp'");
    item25 = new TaskMenuItem("����ͣ����ҵ�����¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/gqtdzyml.jsp'");
    item26 = new TaskMenuItem("������բ���������¼","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/dzczmljl.jsp'");
    item27 = new TaskMenuItem("��(��)������բ����","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='query/bdsdzml.jsp'");
    
	/*taskMenu1 = new TaskMenu("���籨��");
	taskMenu1.add(item1);
	taskMenu1.add(item2);
	taskMenu1.add(item3);
	taskMenu1.add(item4);
	taskMenu1.add(item5);
	taskMenu1.init();*/
	
	taskMenu2 = new TaskMenu("�ճ�����");
	taskMenu2.add(item6);
	taskMenu2.add(item7);
	taskMenu2.add(item8);
	taskMenu2.add(item13);
	taskMenu2.add(item14);
	taskMenu2.add(item9);
	taskMenu2.add(item10);
	taskMenu2.add(item11);
	taskMenu2.add(item12);
	taskMenu2.add(item21);
	taskMenu2.add(item22);
    taskMenu2.add(item23);
	//taskMenu2.init();
	
	taskMenu3 = new TaskMenu("�ƻ��������");
	/*taskMenu3.add(item15);	
	taskMenu3.add(item16);
    taskMenu3.add(item17);
    taskMenu3.add(item18);
    taskMenu3.add(item19);
    taskMenu3.add(item20);*/
  	taskMenu3.add(item24);
  	taskMenu3.add(item25);
    taskMenu3.add(item26);
    taskMenu3.add(item27);
	taskMenu3.init();
}
</script>
</head>
</html>