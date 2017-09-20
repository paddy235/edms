<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>




<%

String jsid = request.getParameter("jsid");
System.out.println("jsid:"+jsid);

DbTrade db_connection=new DbTrade();
try {
    
	String sql_delete="delete z_yxgl_zbjs2 where jsid="+jsid;
	System.out.println("sql_delete:"+sql_delete);
  	if (db_connection.executeUpdate(sql_delete))
  	{
  
  		out.print("{success:true,msg:'数据删除成功！'}");
  	}
  	db_connection.close();  
} 

catch(Exception ex) {
}

%>
