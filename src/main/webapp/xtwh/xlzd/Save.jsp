<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XLDM = request.getParameter("XLDM");
String XLM = request.getParameter("XLM");
String XLCD = request.getParameter("XLCD");
String XLBS = request.getParameter("XLBS");
String KZBS = request.getParameter("KZBS");



try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_XLZD(XLDM,XLM,XLCD,XLBS,KZBS) values('"+XLDM+"','"+XLM+"','"+XLCD+"','"+XLBS+"','"+KZBS+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'����ɹ���'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'����ʧ�ܣ�'}");
}

%>
