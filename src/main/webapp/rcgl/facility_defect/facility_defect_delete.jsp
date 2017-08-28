<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>




<%

String qxid = request.getParameter("qxid");

DbTrade db_connection=new DbTrade();
try {
    
	String sql_delete="delete z_yxgl_qxgl where qxid="+qxid;
  	if (db_connection.executeUpdate(sql_delete))
  	{
  
  		out.print("{success:true,msg:'数据删除成功！'}");
  	}
  	db_connection.close();  
} 

catch(Exception ex) {
}

%>
