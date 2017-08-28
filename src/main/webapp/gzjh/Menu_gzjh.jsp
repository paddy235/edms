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

String jb=dwjb;
String isdd="";
String jglbdm="dd";
if(dwid.equals("023")){
	jglbdm="xd";
}
//System.out.println("menu_yxgl userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc);

//session.setAttribute("userName","赵文甫");
//session.setAttribute("userDwid","17010201");//变电所
//session.setAttribute("userDwid","17010102");//网工区
//session.setAttribute("userDwid","00301");//电调台
//session.setAttribute("userdj","3");
//session.setAttribute("ddtdm","00301");
//session.setAttribute("ddtmc","客专一台");

//String jb="3";

 
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
	 
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////parent.contents.location.href
	item1 = new TaskMenuItem("作业计划填写","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item7 = new TaskMenuItem("作业计划汇总","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item8 = new TaskMenuItem("作业计划上报","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item2 = new TaskMenuItem("作业计划审批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhsp/zyjhsp.jsp'");
	item3 = new TaskMenuItem("作业计划查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='taskplan_query/taskplan_query.jsp'");
	item4 = new TaskMenuItem("作业计划归档","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhgd/zyjhgd.jsp'");
	item5 = new TaskMenuItem("调度主任审批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhxdsp/zyjhxdsp.jsp'");      
	item6 = new TaskMenuItem("施工计划查询","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='sgjh_query/taskplan_query.jsp'");      
	
	////6:工区级别，5：车间，4：段，3：电调，2：局，1：部
	taskMenu1 = new TaskMenu("作业计划填报");
	taskMenu2 = new TaskMenu("作业计划审批");
	taskMenu3 = new TaskMenu("作业计划查询");
	taskMenu4 = new TaskMenu("调度主任审批");
	taskMenu5 = new TaskMenu("作业计划填写");
	taskMenu6 = new TaskMenu("施工计划查询");
	   //作业计划
	   taskMenu1.add(item1);
	   taskMenu1.add(item8);
       
	   taskMenu5.add(item1);
	   taskMenu5.add(item7);
		taskMenu2.add(item1);
	   taskMenu2.add(item2);
	   taskMenu2.add(item4);

	   taskMenu4.add(item5);

	   taskMenu3.add(item3);
	   taskMenu6.add(item6);
	if(jglbdm=='xd'){
		taskMenu4.init();
	}else{
		if(qx=='6'||qx=='5'){			
			taskMenu5.init();
			taskMenu6.init();
		}else if(qx=='4'){
			taskMenu1.init();
			taskMenu6.init();
		}else{
			taskMenu2.init();
			taskMenu6.init();
		}
		taskMenu3.init();
		taskMenu6.init();
	}
}
</script>
</body>



</html>