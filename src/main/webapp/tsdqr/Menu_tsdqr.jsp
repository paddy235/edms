<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>

<html>
<head>
<script src="../Menu_XpStyle/TaskMenu.js"></script>

<%
///��õ�ǰ�û�����Ϣ
String dwjb="";
String dwid="";
String name="";
String ddtdm="";
String ddtmc="";
String dwmc="";
if(session.getAttribute("DWJB")==null||session.getAttribute("DWDM")==null||session.getAttribute("YHMC")==null||session.getAttribute("DDTDM")==null||session.getAttribute("DDTMC")==null)
{
String myURL="../errorpage.jsp";
response.sendRedirect(myURL);
}
else
{
 dwjb=session.getAttribute("DWJB").toString();
 dwid=session.getAttribute("DWDM").toString();
 dwmc=session.getAttribute("DWMC").toString();
 name=session.getAttribute("YHMC").toString();
 ddtdm=session.getAttribute("DDTDM").toString();//���̨����
 ddtmc=session.getAttribute("DDTMC").toString();//���̨����
}

session.setAttribute("userName",name);
session.setAttribute("userDwid",dwid);
session.setAttribute("userdj",dwjb);
session.setAttribute("ddtdm",dwid);
session.setAttribute("ddtmc",ddtmc);

String jb=dwjb;
String isdd="";
String jglbdm="dd";
if(dwid.indexOf("023")==0){
	jglbdm="xd";
}
System.out.println("menu_tsdqr userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc);

 %>
</head>
<body>
  <input type="hidden" name="qx" value="<%=jb%>">
  <input type="hidden" name="jglbdm" value="<%=jglbdm%>">
  <input type="hidden" name="isdd" value="<%=isdd%>">
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
var item47;
TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
	var qx=document.getElementById("qx").value;
	var isdd=document.getElementById("isdd").value;
	var jglbdm=document.getElementById("jglbdm").value;
	//alert(jglbdm);
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////parent.contents.location.href
	item15=new TaskMenuItem("ͣ��ǩ�ϵǼ�","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='tdtz/tdtz.jsp'");
	item16=new TaskMenuItem("ͣ��ǩ�ϲ�ѯ","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='tdtz/tdtz_cx.jsp'");

	item13=new TaskMenuItem("�͵�ǩ�ϵǼ�","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='sdtz/sdtz.jsp'");
	item14=new TaskMenuItem("�͵�ǩ�ϲ�ѯ","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='sdtz/sdtz_cx.jsp'");

	item17=new TaskMenuItem("����֪ͨ","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='fallbow_notice/fallbow_notice.jsp'");
    item22=new TaskMenuItem("�е�һ��֪ͨ��","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='tzs/tzs.jsp'");
    
	item35=new TaskMenuItem("�е�->ǩ���Զ�֪ͨ","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='../xdhq/xdhq2.jsp'");
    item31=new TaskMenuItem("�е�->ͣ��ǩ��","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='../xdhq/tdtz_xd/tdtz_xd.jsp'");
	item32=new TaskMenuItem("�е�->�͵�ǩ��","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='../xdhq/sdtz_xd/sdtz_xd.jsp'");
	item33=new TaskMenuItem("�е�->����֪ͨǩ��","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='../xdhq/tdtz_xd/tdtz_xd.jsp'");
	item34=new TaskMenuItem("�е�->֪ͨ��ǩ��","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='../xdhq/tzs_xd/tzs_xd.jsp'");
	
	item10=new TaskMenuItem("�ⵥλͣ��ǩ�ϵǼ�","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='wdwtdqr/tdqr.jsp'");
	item11=new TaskMenuItem("�ⵥλ�͵�ǩ�ϵǼ�","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='wdwsdqr/sdqr.jsp'");
	item12=new TaskMenuItem("�ⵥλʩ������Ǽ�","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='wdwsgsq/sgsq.jsp'");
	
		taskMenu5 = new TaskMenu("��˷������ⵥλǩ����ϵ��");

		taskMenu5.add(item10);
		taskMenu5.add(item11);
        taskMenu5.add(item12);
	
	
	taskMenu4 = new TaskMenu("ͣ��ǩ�Ϲ���");

		taskMenu4.add(item15);
		taskMenu4.add(item16);
	
	taskMenu1 = new TaskMenu("�͵�ǩ�Ϲ���");

		taskMenu1.add(item13);
		taskMenu1.add(item14);
	    
	 taskMenu3 = new TaskMenu("֪ͨ�����");  
		//taskMenu3.add(item17);
	    taskMenu3.add(item22);
	 taskMenu2 = new TaskMenu("�е���ǩ����"); 
		taskMenu2.add(item31);
		taskMenu2.add(item32);
		taskMenu2.add(item34);
		
		if(jglbdm=='xd'){
			taskMenu2.init();
		}else{
			taskMenu4.init();
			taskMenu1.init();
			taskMenu3.init();
			taskMenu5.init();
		}
	
	
}
</script>
</body>



</html>