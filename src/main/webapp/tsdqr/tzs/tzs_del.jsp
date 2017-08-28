<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String TZSID= request.getParameter("TZSID");
 

try {

    DbTrade db_connection=new DbTrade();
	
	String sql_Add="delete Z_YXGL_TZS where TZSID='"+TZSID+"'";
	
	db_connection.executeUpdate(sql_Add);
	db_connection.close();
    response.sendRedirect("tzs.jsp");
     
} 

catch(Exception ex) {
}

 %>

