<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String KPID = request.getParameter("KPID");
String DWMC = request.getParameter("DWMC");
String DWID = request.getParameter("DWID");
String KPBH = request.getParameter("KPBH");
String KPNR = request.getParameter("KPNR");
String KPMC = request.getParameter("KPMC");
System.out.println("Save.jsp----------------------------------:"+KPID+DWID);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GDGY_CZKP values(j_gdgy_czkpsquence.nextval,'"+DWID+"','"+DWMC+"','"+KPBH+"','"+KPNR+"','"+KPMC+"')";

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
