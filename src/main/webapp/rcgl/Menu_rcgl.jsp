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
System.out.println("menu_yxgl userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc);

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
var item31;
var item11;
var item12;
var item42;
var item32;
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
	item31 = new TaskMenuItem("电力跳闸管理","../Menu_XpStyle/Image/tzjl.gif","parent.contents.location.href='remotefault_query2/remotefault_query.jsp'");
	item11 = new TaskMenuItem("牵引跳闸管理","../Menu_XpStyle/Image/tzjl.gif","parent.contents.location.href='remotefault_query/remotefault_query.jsp'");

    item42 = new TaskMenuItem("值班主任记事","../Menu_XpStyle/Image/report1.gif","parent.contents.location.href='onduty_note3/onduty_note.jsp'");
    item12 = new TaskMenuItem("值班记事","../Menu_XpStyle/Image/report1.gif","parent.contents.location.href='onduty_note/onduty_note.jsp'");
    item32 = new TaskMenuItem("设备记事","../Menu_XpStyle/Image/report1.gif","parent.contents.location.href='onduty_note2/onduty_note.jsp'");
    item13 = new TaskMenuItem("交接班管理","../Menu_XpStyle/Image/report.gif","parent.contents.location.href='change_duty/change_duty.jsp'");
    item33 = new TaskMenuItem("值班主任交接班管理","../Menu_XpStyle/Image/report.gif","parent.contents.location.href='change_duty2/change_duty.jsp'");
    item14 = new TaskMenuItem("缺陷管理","../Menu_XpStyle/Image/qxgl.gif","parent.contents.location.href='facility_defect/facility_defect.jsp'");
    item16 = new TaskMenuItem("天窗信息","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='dormerInfo/dormerInfo.jsp'");
	item18=new TaskMenuItem("值班日志查询","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='dutylog_query/dutylog_query.jsp'");
	item19=new TaskMenuItem("晚消令情况记录","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='wxlqkjl/wxlqkjl.jsp'");
	item20=new TaskMenuItem("接触网故障停用、封锁记录","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='wgztyfs/wgztyfs.jsp'");
    item21=new TaskMenuItem("日常通知","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='xttz/xttz.jsp'");
    item23=new TaskMenuItem("主变进线变更记录","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='zbjxdhjl/zbjxdhjl.jsp'");
   	item24=new TaskMenuItem("设备故障记录","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='stgz/stgz.jsp'");

    item48=new TaskMenuItem("供电故障分析","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='gdgzfx/gdgzfx.jsp'");
    item49=new TaskMenuItem("18点报到","../Menu_XpStyle/Image/twindow.gif","parent.contents.location.href='sbdbd/sbdbd.jsp'");
    item50 = new TaskMenuItem("牵引供电停送电登记薄","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='tsddjb/tsddjb.jsp'");
    item51 = new TaskMenuItem("问题库","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='wtk/Wtk.jsp'");
    item52 = new TaskMenuItem("电力设备故障记录","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='dlsbgzjl/remotefault_query.jsp'");
    item53 = new TaskMenuItem("牵引变电所值班日志","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='qybdszbrz/qybdszbrz.jsp'");
    item54 = new TaskMenuItem("故障通报","../Menu_XpStyle/Image/update.gif","parent.contents.location.href='gztb/gztb.jsp'");

	
	////6:工区级别，5：车间，4：段，3：电调，2：局，1：部
	taskMenu1 = new TaskMenu("作业计划管理");
	taskMenu2 = new TaskMenu("工作票管理");
	taskMenu4 = new TaskMenu("日常管理");
	
	

		//日常管理		
		taskMenu4.add(item33);
//		taskMenu4.add(item42);
		taskMenu4.add(item12);
		taskMenu4.add(item13);
		taskMenu4.add(item14);
		taskMenu4.add(item15);
		taskMenu4.add(item31);
		taskMenu4.add(item11);
		taskMenu4.add(item18);
		taskMenu4.add(item19);
	    taskMenu4.add(item20);
	    taskMenu4.add(item21);
	    taskMenu4.add(item23);
		taskMenu4.add(item24);

		taskMenu4.add(item48);
		//taskMenu4.add(item49);
	    taskMenu4.add(item50);
		taskMenu4.add(item51);
//		taskMenu4.add(item52);

		taskMenu4.add(item53);
		taskMenu4.add(item54);
		taskMenu4.add(item32);
	taskMenu4.init();
}
</script>
</body>



</html>