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
<title>中国神华神朔铁路分公司供电调度管理信息系统</title>
<script src="../Menu_XpStyle/TaskMenu.js"></script>

<%
///获得当前用户的信息
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
 ddtdm=session.getAttribute("DDTDM").toString();//电调台代码
 ddtmc=session.getAttribute("DDTMC").toString();//电调台名称
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

	item5 = new TaskMenuItem("施工主任审批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhsgdsp/zyjhsgdsp.jsp'");  
	item3 = new TaskMenuItem("作业计划查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='taskplan_query/taskplan_query.jsp'");
    item1 = new TaskMenuItem("注销退出","../Menu_XpStyle/Image/review.gif","parent.location.href='../logout.jsp'"); 
	
	taskMenu1 = new TaskMenu("作业计划管理");
	taskMenu3 = new TaskMenu("系统管理");
	   //作业计划
	   taskMenu1.add(item5);
	   taskMenu1.add(item3);
	   taskMenu3.add(item1);
	taskMenu1.init();
	taskMenu3.init();
}
</script>
</body>



</html>