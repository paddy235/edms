<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<html>
<head>
<script src="../Menu_XpStyle/TaskMenu.js"></script>
<%
///��õ�ǰ�û�����Ϣ
boolean admin=false;
if(session.getAttribute("ROLE")==null)
{
String myURL="../errorpage.jsp";
response.sendRedirect(myURL);
}
else
{
 	java.util.Vector ROLE = (java.util.Vector)session.getAttribute("ROLE");
	for(int i=0;ROLE!=null&&i<ROLE.size();i++){
		String qx=(String)ROLE.get(i);
		if(qx.equalsIgnoreCase("admin")){
			admin=true;
			break;
		}
	} 	
}
%>
</head>
<body>
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

TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////
	item1 = new TaskMenuItem("�û�����","../Menu_XpStyle/Image/demo.gif","parent.window.frames[1].location.href='yh/yh.jsp'");
	item2 = new TaskMenuItem("��ɫ����","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='js/js.jsp'");
	item3 = new TaskMenuItem("�û���Ϣ","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='yhxx/yhxx.jsp'");
	item4 = new TaskMenuItem("�û���½��Ϣ","../Menu_XpStyle/Image/friends.gif","parent.window.frames[1].location.href='yhlog/yhlog.jsp'");
	//item5 = new TaskMenuItem("������־","../Menu_XpStyle/Image/dload.gif","parent.window.frames[1].location.href=''");
	item6 = new TaskMenuItem("�����ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='sxzd/sxzd.jsp'");
	item7 = new TaskMenuItem("ά����Ŀ","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='wxxm/wxxm.jsp'");
	item8 = new TaskMenuItem("�豸����","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='sbfl/sbfl.jsp'");
	item9 = new TaskMenuItem("������Ƭ","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='czkp/czkp.jsp'");
	item10 = new TaskMenuItem("�豸��������","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='sbsccj/sbsccj.jsp'");
	//item11 = new TaskMenuItem("����װ������","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='bhzzlx/bhzzlx.jsp'");
	item12 = new TaskMenuItem("���߱�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='kx/kx.jsp'");
	//item13 = new TaskMenuItem("���ϴ���״̬","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='gzclzt/gzclzt.jsp'");
	item14 = new TaskMenuItem("��˾�ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='ljzd/ljzd.jsp'");
	item15 = new TaskMenuItem("������ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='gddzd/gddzd.jsp'");
	item16 = new TaskMenuItem("�����ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='cjzd/cjzd.jsp'");
	item17 = new TaskMenuItem("�����ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='gqzd/gqzd.jsp'");
	item18 = new TaskMenuItem("��·�ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='xlzd/xlzd.jsp'");
	item19 = new TaskMenuItem("�����ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='ddzd/ddzd.jsp'");
	item20 = new TaskMenuItem("���̨�ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='ddtzd/ddtzd.jsp'");
	item21 = new TaskMenuItem("�е��ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='xdzd/xdzd.jsp'");
	item22 = new TaskMenuItem("�е�̨�ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='xdtzd/xdtzd.jsp'");
	item23 = new TaskMenuItem("����վ���ֵ�","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='qjzc/qjzc.jsp'");	
	item24 = new TaskMenuItem("�������","../Menu_XpStyle/Image/update.gif","parent.window.frames[1].location.href='jglb/jglb.jsp'");


	////////////////////////////////////////////////
	taskMenu1 = new TaskMenu("�û�����");
	taskMenu2 = new TaskMenu("��־����",false);
	taskMenu3 = new TaskMenu("ҵ���ֵ�");
	taskMenu4 = new TaskMenu("�����ֵ�");
	<% if (admin){ %>

	//�û�����
	taskMenu1.add(item1);
	taskMenu1.add(item2);
	taskMenu1.add(item3);
	//��־����
	taskMenu2.add(item4);
	//ҵ���ֵ�
	taskMenu3.add(item6);
	taskMenu3.add(item7);
	taskMenu3.add(item8);
	taskMenu3.add(item9);
	taskMenu3.add(item10);
	taskMenu3.add(item12);
	//�����ֵ�
	taskMenu4.add(item14);
	taskMenu4.add(item15);
	taskMenu4.add(item16);
	taskMenu4.add(item17);
	taskMenu4.add(item18);
	taskMenu4.add(item19);
	taskMenu4.add(item20);
	taskMenu4.add(item21);
	taskMenu4.add(item22);
	taskMenu4.add(item23);
	taskMenu4.add(item24);
	<%}
	else{
	%>
	taskMenu1.add(item3);
	<%}%>
	
	taskMenu1.init();//
	taskMenu2.init();
	taskMenu3.init();
	taskMenu4.init();
}
</script>
</body>
</html>