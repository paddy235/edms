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
System.out.println("startduUUUUUUU:"+QJBM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_QJZCZD set MC='"+MC+"',QSGLB="+QSGLB+",JZGLB="+JZGLB+",GQDM='"+GQDM+"',XLDM='"+XLDM+"',SX='"+SX+"' where QJBM='"+QJBM+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功！'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'修改失败！'}");
}

%>
