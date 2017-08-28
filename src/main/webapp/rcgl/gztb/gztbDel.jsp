<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>

<%
String GZTBID = request.getParameter("GZTBID");

try {
    DbTrade db_connection=new DbTrade();
	String sql_Upd="delete from Z_YXGL_GZTB where GZTBID='"+GZTBID+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'É¾³ý³É¹¦£¡'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'É¾³ýÊ§°Ü'}");		
 	}
%>
