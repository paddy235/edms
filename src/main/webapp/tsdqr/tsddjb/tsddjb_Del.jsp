<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String TDSBH = request.getParameter("TDSBH");

try {
    DbTrade db_connection=new DbTrade();
	String sql_Del="delete from z_tjbb_tsddjb where TDSBH='"+TDSBH+"'";
	System.out.println(sql_Del);
	db_connection.executeUpdate(sql_Del);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'É¾³ý³É¹¦£¡'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'É¾³ýÊ§°Ü'}");		
 	}
%>
