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
String jglbdm="";
if(jb.equals("3"))
{
    DbTrade dbTrade_ddmc=new DbTrade();
    String sql_ddtmc="select * from J_GYJC_DDTZD where ddtdm='"+dwid+"'";
    java.sql.ResultSet relult_ddtmc=dbTrade_ddmc.executeQuery(sql_ddtmc);
    while(relult_ddtmc.next())
    {
       ddtmc=relult_ddtmc.getString("ddtmc");
    }
    session.setAttribute("ddtmc",ddtmc);
    if(dwid.length()==3)
    {
         isdd="1";
    }
    else
    {
       isdd="0";
    }
    dbTrade_ddmc.close();
}
else if(jb.equals("6"))
{
    DbTrade dbTrade_ddmc=new DbTrade();
    String sql_ddtmc="select * from j_gyjc_gqzd where gqdm='"+dwid+"'";
    java.sql.ResultSet relult_ddtmc=dbTrade_ddmc.executeQuery(sql_ddtmc);
    while(relult_ddtmc.next())
    {
       jglbdm=relult_ddtmc.getString("jglbdm");
    }
    dbTrade_ddmc.close();
}
System.out.println("menu_yxgl userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc+"JGLBDM:"+jglbdm);

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
  <input type="hidden" name="dwjb" value="<%=dwjb %>">
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
	var dwjb=document.getElementById("dwjb").value;
	item1 = new TaskMenuItem("变电所第一种票申请","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='bdsdyzgzpsq/gzpsq.jsp'");
	item2 = new TaskMenuItem("变电所第一种票审批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='bdsdyzgzpsp/gzpsp.jsp'");
	item3 = new TaskMenuItem("变电所第一种票查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='gzpcx_bdsdyz/gzpcx.jsp'");
	item30 = new TaskMenuItem("变电所第一种票编辑","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdsdyzgzpsq_dd/gzpsq.jsp'");
	
	item4 = new TaskMenuItem("变配电所第三种票申请","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='bdsdszgzpsq/gzpsq.jsp'");
	item5 = new TaskMenuItem("变配电所第三种票申批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='bdsdszgzpsp/gzpsp.jsp'");
	item6 = new TaskMenuItem("变配电所第三种票查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='gzpcx_bdsdsz/gzpcx.jsp'");
	item40 = new TaskMenuItem("变配电所第三种票编辑","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='bdsdszgzpsq_dd/gzpsq.jsp'");
	
	item7 = new TaskMenuItem("停电作业工作票申请","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='gqtdzygzpsq/gzpsq.jsp'");
	item8 = new TaskMenuItem("接触网停电作业工作票申批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='gqtdzygzpsp/gzpsp.jsp'");
	item9 = new TaskMenuItem("接触网停电作业工作票查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='gzpcx_gqtdzy/gzpcx.jsp'");
	item70 = new TaskMenuItem("接触网停电作业工作票编辑","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='gqtdzygzpsq_dd/gzpsq.jsp'");
	
	item10 = new TaskMenuItem("带电作业工作票申请","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='gqddzygzpsq/gzpsq.jsp'");
	item11 = new TaskMenuItem("带电作业工作票申批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='gqddzygzpsp/gzpsp.jsp'");
	item12 = new TaskMenuItem("带电作业工作票查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='gzpcx _gqddzy/gzpcx.jsp'");
	item100 = new TaskMenuItem("带电作业工作票编辑","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='gqddzygzpsq_dd/gzpsq.jsp'");
	
    item13 = new TaskMenuItem("倒闸作业票申请","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='dzzypsq/dzzysq.jsp'");
	item14 = new TaskMenuItem("倒闸作业票申批","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='dzzypsp/dzzysp.jsp'");
	item15 = new TaskMenuItem("倒闸作业票查询","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='dzzypcx/gzpcx.jsp'");
	item130 = new TaskMenuItem("倒闸作业票编辑","../Menu_XpStyle/Image/apply.gif","parent.contents.location.href='dzzypsq_dd/dzzysq.jsp'");
	
	////6:工区级别，5：车间，4：段，3：电调，2：局，1：部
	taskMenu1 = new TaskMenu("变电所第一种票");
	taskMenu2 = new TaskMenu("变配电所第三种票");
	taskMenu4 = new TaskMenu("接触网停电作业工作票");
	taskMenu5 = new TaskMenu("带电作业工作票");
	taskMenu6 = new TaskMenu("倒闸作业票");
	   //作业计划
	   if(dwjb=="3")
	   { 
	   //taskMenu1.add(item1);
	   taskMenu1.add(item2);
	   taskMenu1.add(item3);
	   taskMenu1.add(item30);
	   //工作票
		//taskMenu2.add(item4);
		//taskMenu2.add(item5);
		taskMenu2.add(item6);
		taskMenu2.add(item40);
	   
		//taskMenu4.add(item7);
		taskMenu4.add(item8);
		taskMenu4.add(item9);
	   taskMenu4.add(item70);
	   
		//taskMenu5.add(item10);
		taskMenu5.add(item11);
		taskMenu5.add(item12);
		taskMenu5.add(item100);
		
	    ///taskMenu6.add(item13);
		taskMenu6.add(item14);
		taskMenu6.add(item15);
		taskMenu6.add(item130);
		
		taskMenu1.init();
//		taskMenu2.init();
		taskMenu4.init();
//		taskMenu5.init();
		taskMenu6.init();
		}else if(dwjb=="2")
		{
		  taskMenu1.add(item1);
	   taskMenu1.add(item2);
	   taskMenu1.add(item3);

	   //工作票
		taskMenu2.add(item4);
		taskMenu2.add(item5);
		taskMenu2.add(item6);

	   
		taskMenu4.add(item7);
		taskMenu4.add(item8);
		taskMenu4.add(item9);
	   
		taskMenu5.add(item10);
		taskMenu5.add(item11);
		taskMenu5.add(item12);
		
		taskMenu6.add(item13);
		taskMenu6.add(item14);
		taskMenu6.add(item15);
		
	    taskMenu6.init();
		taskMenu1.init();
		taskMenu2.init();
		taskMenu4.init();
		taskMenu5.init();
	
		}
		else
		{
		 taskMenu1.add(item1);
	   //taskMenu1.add(item2);
	   taskMenu1.add(item3);

	   //工作票
		taskMenu2.add(item4);
		//taskMenu2.add(item5);
		taskMenu2.add(item6);

	   
		taskMenu4.add(item7);
		//taskMenu4.add(item8);
		taskMenu4.add(item9);
	   
		taskMenu5.add(item10);
		//taskMenu5.add(item11);
		taskMenu5.add(item12);
		
		taskMenu6.add(item13);
		//taskMenu6.add(item14);
		taskMenu6.add(item15);
		  if(jglbdm=="1")
		  {  
		  
		   //taskMenu1.init();
			//taskMenu2.init();
			 taskMenu4.init();
		   taskMenu5.init(); 
		   //taskMenu6.init(); 
		  }else
		  {
			taskMenu1.init();
			taskMenu2.init();
			 taskMenu6.init(); 
		   }
		}

		
		
}
</script>
</body>



</html>