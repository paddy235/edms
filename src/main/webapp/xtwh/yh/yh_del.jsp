<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String YHDM = new String(request.getParameter("YHDM").getBytes("ISO8859-1"),"GB2312");
 
 //response.sendRedirect("xtwh1.jsp");

try {

    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="delete J_GYJC_YH where YHDM='"+YHDM+"'";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
     //out.print("{success:true,msg:'zhao'}");
     response.sendRedirect("yh.jsp");
     
     
} 

catch(Exception ex) {
      System.out.println("ɾ??ʧ?ܣ?"+ex.getMessage() );
}

 %>

