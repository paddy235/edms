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
if(session.getAttribute("DWDM")==null)
{
	response.sendRedirect(myURL);
}

String tdqrid = request.getParameter("tdqrid");
DbTrade dbTrade=new DbTrade();

try {
   String sql_del=" delete z_tsdqr_tdqr   where tdqrid='"+tdqrid+"'";
   System.out.println("delete:"+sql_del);
   dbTrade.executeUpdate(sql_del);
   dbTrade.close();
 
   response.sendRedirect("tdqr.jsp");
} 

catch(Exception ex) {
}

%>
