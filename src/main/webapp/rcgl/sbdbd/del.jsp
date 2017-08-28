<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String ddtdm=session.getAttribute("userDwid").toString();
String ddtmc=session.getAttribute("ddtmc").toString();
String bdid=request.getParameter("bdid");





Date nowDate =new Date();
SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
System.out.println("qqqqqqqqq");
System.out.println("sfdhl:"+bdid);
//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
try {
  String sql_del="delete z_yxgl_sbdbd where bdid='"+bdid+"'";
  System.out.println("insert:"+sql_del);
  dbTrade.executeUpdate(sql_del);
  dbTrade.close();
  out.print("{success:true,msg:'É¾³ý³É¹¦£¡'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
