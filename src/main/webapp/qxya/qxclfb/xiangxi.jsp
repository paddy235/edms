<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String yabh= request.getParameter("yabh");
 
 //response.sendRedirect("zyjhsq.jsp");

try {

    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_xiangxi="select yabh, yanr from z_qxya_yagd where yabh="+yabh;
	
	//out.println(sql_Query);
	System.out.println(sql_xiangxi);
	//java.sql.ResultSet gridResultSet=
	java.sql.ResultSet yanrResultSet=db_connection.executeQuery(sql_xiangxi);
	String a ="";
	while(yanrResultSet.next()){
	  a = yanrResultSet.getString("YANR");	
	}
	session.setAttribute("yanr",a);
     //out.print("{success:true,msg:'zhao'}");
    response.sendRedirect("qxyacx.jsp");
    db_connection.close();
} 

catch(Exception ex) {
}

 %>

