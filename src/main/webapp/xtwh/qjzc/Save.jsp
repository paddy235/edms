<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String QJBM = request.getParameter("QJBM");
String MC = request.getParameter("MC");
String QSGLB  = request.getParameter("QSGLB");
String JZGLB  = request.getParameter("JZGLB");
String GQDM = request.getParameter("GQDM");
String XLDM = request.getParameter("XLDM");
String SX  = request.getParameter("SX");




try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_QJZCZD(QJBM,MC,QSGLB,JZGLB,GQDM,XLDM,SX) values('"+QJBM+"','"+MC+"',"+QSGLB+","+JZGLB+",'"+GQDM+"','"+XLDM+"','"+SX+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'?????ɹ???'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'????ʧ?ܣ?'}");
}

%>
