<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>

<%
 String id= request.getParameter("id");

 //response.sendRedirect("zyjhsq.jsp");

try {

    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String del_sql="delete z_jcsj_gzzd where id='"+id+"'";
	
	//out.println(sql_Query);
	System.out.println(del_sql);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(del_sql);
     //out.print("{success:true,msg:'zhao'}");
     response.sendRedirect("gzzdMain.jsp");
     db_connection.close();
     
} 

catch(Exception ex) {
}

 %>

