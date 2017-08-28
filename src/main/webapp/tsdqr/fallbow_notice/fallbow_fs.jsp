<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>




<%

String tzid = request.getParameter("tzid");
DbTrade db_connection=new DbTrade();
try {
    
	String sql_delete="update z_yxgl_jgtz set zt='1' where tzid="+tzid;
  	System.out.println("UUU:"+sql_delete);
  	db_connection.executeUpdate(sql_delete);
  	db_connection.close(); 
  
  		out.print("{success:true,msg:'·¢ËÍ³É¹¦£¡'}");
  	
  	 
} 

catch(Exception ex) {
}

%>
