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
<title>�й�����˷��·�ֹ�˾������ȹ�����Ϣϵͳ</title>
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
var item47;
TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);

	item5 = new TaskMenuItem("ʩ����������","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhsgdsp/zyjhsgdsp.jsp'");  
	item3 = new TaskMenuItem("��ҵ�ƻ���ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='taskplan_query/taskplan_query.jsp'");
    item1 = new TaskMenuItem("ע���˳�","../Menu_XpStyle/Image/review.gif","parent.location.href='../logout.jsp'"); 
	
	taskMenu1 = new TaskMenu("��ҵ�ƻ�����");
	taskMenu3 = new TaskMenu("ϵͳ����");
	   //��ҵ�ƻ�
	   taskMenu1.add(item5);
	   taskMenu1.add(item3);
	   taskMenu3.add(item1);
	taskMenu1.init();
	taskMenu3.init();
}
</script>
</body>



</html>