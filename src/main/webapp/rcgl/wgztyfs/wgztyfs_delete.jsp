<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String seq = request.getParameter("seq");
 try {

    DbTrade db_connection=new DbTrade();
	
	String sql_Del = "delete z_yxgl_wgztyfs where seq='" + seq + "'";
	
	System.out.println(sql_Del);
	if(db_connection.executeUpdate(sql_Del))
	{
		out.print("{success:true,msg:'����ɾ���ɹ���'}");
	}
   db_connection.close();    
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'����ɾ��ʧ�ܣ�'}");
	System.out.println("Exception of wgztyfs_delete.jsp: " + ex.getMessage());
}

 %>
