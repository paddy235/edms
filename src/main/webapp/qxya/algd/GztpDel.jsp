<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%
 String TpName= request.getParameter("id");
 String albm= request.getParameter("albm");
 //String albm=session.getAttribute("albm").toString();
 String id=TpName.substring(0,TpName.indexOf(".")); 
try {
    DbTrade db_connection=new DbTrade();
	String sql_DelGztp="delete Z_DXSG_SGTP where id='"+id+"'";
	System.out.println(sql_DelGztp);
	db_connection.executeUpdate(sql_DelGztp);
	db_connection.close();
	
	String SavePath="dxsg\\Images\\";//用于存放上传文件的目录;
	boolean b=new UpLoadFile().DelFile(SavePath,TpName);
    response.sendRedirect("Gztp.jsp?albm="+albm);
} 

catch(Exception ex) {
}

%>

