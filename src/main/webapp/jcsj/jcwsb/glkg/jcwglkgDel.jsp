<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String ID= request.getParameter("ID");
 //response.sendRedirect("zyjhsq.jsp");
try {
    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql="delete Z_jcsj_jcwglkg where id='"+ID+"'";
	//System.out.println(sql);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql);
	db_connection.close();
     //out.print("{success:true,msg:'zhao'}");
     response.sendRedirect("jcwglkgMain.jsp");
     
} 

catch(Exception ex) {
}

%>

