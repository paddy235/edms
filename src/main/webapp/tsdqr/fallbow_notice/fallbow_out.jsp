<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>




<%

String tzid = request.getParameter("tzid");
String ccsj = request.getParameter("ccsj");
String sgmlh = request.getParameter("sgmlh");
System.out.println("tzid:"+tzid);


DbTrade db_connection=new DbTrade();
try {
    
	String sql_delete="update z_yxgl_jgtz set zt='1',ccsj=to_date('"+ccsj+"','yyyy-mm-dd hh24:mi'),sgmlh='"+sgmlh+"' where tzid="+tzid;
  	System.out.println("UUU:"+sql_delete);
  	db_connection.executeUpdate(sql_delete);
  	db_connection.close(); 
  
  		out.print("{success:true,msg:'撤出通知成功！'}");
  	
  	 
} 

catch(Exception ex) {
}

%>
