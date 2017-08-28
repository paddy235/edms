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

String sdqrid = request.getParameter("sdqrid");
DbTrade dbTrade=new DbTrade();

try {
   String sql_del=" delete z_tsdqr_sdqr   where sdqrid='"+sdqrid+"'";
   System.out.println("delete:"+sql_del);
   dbTrade.executeUpdate(sql_del);
   dbTrade.close();
 
   response.sendRedirect("sdqr.jsp");
} 

catch(Exception ex) {
}

%>
