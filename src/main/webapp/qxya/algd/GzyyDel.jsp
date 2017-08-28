<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%
 String YyName= request.getParameter("id");
 String albm= request.getParameter("albm");
 String id=YyName.substring(0,YyName.indexOf("."));

try {
    DbTrade db_connection=new DbTrade();
	String sql_DelGztp="delete Z_DXSG_SGYY where id='"+id+"'";
	//out.println(sql_Query);
	System.out.println(sql_DelGztp);
	db_connection.executeUpdate(sql_DelGztp);
	db_connection.close();
	
	String SavePath="dxsg\\vedio\\";//用于存放上传文件的目录;
	boolean b=new UpLoadFile().DelFile(SavePath,YyName);
    response.sendRedirect("Gzyy.jsp?albm="+albm);
} 

catch(Exception ex) {
}

%>

