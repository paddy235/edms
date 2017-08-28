<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String JLID= request.getParameter("JLID");
try {

    DbTrade db_connection=new DbTrade();
	String sql_Add="delete z_yxgl_stgz where JLID='"+JLID+"'";
	db_connection.executeUpdate(sql_Add);
    response.sendRedirect("stgz.jsp");
} 
catch(Exception ex) {
}

 %>

