<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String ROWID= request.getParameter("ROWID");
 System.out.println(ROWID);
 String[] ary=ROWID.split("-");


try {

    DbTrade db_connection=new DbTrade();
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="delete J_GDGY_KX where GQDM='"+ary[0]+"' and BHZZDM='"+ary[1]+"'";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
     //out.print("{success:true,msg:'zhao'}");
    response.sendRedirect("kx.jsp?GQDM="+ary[0]);
     
} 

catch(Exception ex) {
 			System.out.println("É¾³ýÊ§°Ü£¡"+ex.getMessage() );
}

%>

