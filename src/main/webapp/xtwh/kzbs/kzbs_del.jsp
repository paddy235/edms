<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String ID= request.getParameter("ID");
 
response.sendRedirect("kzbs.jsp");

try {

    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grJGLBDMResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grJGLBDMResultSet_count.next();
	//totalCount=grJGLBDMResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="delete J_GYJC_KZBS where ID="+ID;
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet grJGLBDMResultSet=
	db_connection.executeUpdate(sql_Add);
     //out.print("{success:true,msg:'zhao'}");
     //response.sendRedirect("xb.jsp");
     
} 

catch(Exception ex) {
}

 %>

