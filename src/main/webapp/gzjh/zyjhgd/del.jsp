<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%

String id = request.getParameter("id");
String sql="update z_yxgl_zyjh set zt='8' where id='"+id+"'";
DbTrade dbTrade=new DbTrade();

try{
	dbTrade.executeUpdate(sql);
	dbTrade.close();
	out.print("{success:true,msg:'取消成功！！'}");
}catch(Exception ex){
	dbTrade.close();
	out.print("{success:true,msg:'取消失败！'}");
}		
        
%>
