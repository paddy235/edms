<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String GQDM= request.getParameter("GQDM");
 //response.sendRedirect("zyjhsq.jsp");
try {
    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql="delete J_GYJC_GQZD where GQDM='"+GQDM+"'";
	//System.out.println(sql);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql);
	db_connection.close();
     //out.print("{success:true,msg:'zhao'}");
     response.sendRedirect("gqzd.jsp");
     
} 

catch(Exception ex) {
}

%>

