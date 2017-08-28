<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>

<%
String wtkid = request.getParameter("wtkid");
String fssj = request.getParameter("fssj");
String wtms = request.getParameter("wtms");
String djr = request.getParameter("djr");
String xjsj = request.getParameter("xjsj");
String clgc = request.getParameter("clgc");
String xjr = request.getParameter("xjr");
String zt = request.getParameter("zt");

try {
    DbTrade db_connection=new DbTrade();
	String sql_Upd="update Z_YXGL_WTK set fssj=to_date('"+fssj+"','yyyy-mm-dd HH24:mi'),wtms='"+wtms+"',djr='"+djr+"',xjsj=to_date('"+xjsj+"','yyyy-mm-dd HH24:mi'),clgc='"
				+clgc+"',xjr='"+xjr+"',zt='"+zt+"' where wtkid='"+wtkid+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'修改失败'}");		
 	}
%>
