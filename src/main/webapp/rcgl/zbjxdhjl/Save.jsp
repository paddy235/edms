<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String BDS = request.getParameter("BDS");
String DHRQ = request.getParameter("DHRQ");
String YXQK = request.getParameter("YXQK");
System.out.println("Save.jsp----------------------------------:"+BDS+DHRQ);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into z_yxgl_zbjxdhjl values(Z_YXGL_ZBJXDHJLSQUENCE.Nextval,'"+BDS+"',to_date('"+DHRQ+"','yyyy-mm-dd hh24:mi:ss'),'"+YXQK+"')";

	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'±£´æ³É¹¦'}");
     
} 

catch(Exception ex) {
}

%>
