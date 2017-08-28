<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String albm= request.getParameter("albm");
 //response.sendRedirect("zyjhsq.jsp");
try {
    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_DelGzbg="delete from Z_DXSG_SGBG where albm='"+albm+"'";
	String sql_DelGztp="delete from Z_DXSG_SGTP where albm='"+albm+"'";
	String sql_DelGzyy="delete from Z_DXSG_SGYY where albm='"+albm+"'";
	String sql_Del="Begin "+sql_DelGztp+";"+sql_DelGzyy+";"+sql_DelGzbg+"; end;";
	//out.println(sql_Query);
	System.out.println(sql_Del);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Del);
	db_connection.close();
     //out.print("{success:true,msg:'zhao'}");
     response.sendRedirect("Algd.jsp");
     
} 

catch(Exception ex) {
}

%>

