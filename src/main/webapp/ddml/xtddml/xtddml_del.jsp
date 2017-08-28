<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null)
{
	response.sendRedirect(myURL);
}

String cmdid = request.getParameter("cmdid");
DbTrade dbTrade=new DbTrade();

try {
   String sql_del=" delete z_yxgl_cmd_xtddml where cmdid='"+cmdid+"'";
   System.out.println("delete:"+sql_del);
   dbTrade.executeUpdate(sql_del);
   dbTrade.close();
   response.sendRedirect("xtddml.jsp");
} 

catch(Exception ex) {
}

%>
