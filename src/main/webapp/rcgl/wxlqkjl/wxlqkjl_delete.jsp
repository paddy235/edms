<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String jlbh = request.getParameter("jlbh");
System.out.println("jlbh: "+jlbh);

DbTrade db_connection=new DbTrade();
try {
    
	String sql_delete="delete z_yxgl_wxlqkjl where jlbh="+jlbh;
  	if (db_connection.executeUpdate(sql_delete))
  	{
  
  		out.print("{success:true,msg:'数据删除成功！'}");
  	}
  	db_connection.close();  
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'数据删除成功！'}");
	System.out.println("Exception wxlqkjl_delete.jsp: " + ex.getMessage());
}


%>
