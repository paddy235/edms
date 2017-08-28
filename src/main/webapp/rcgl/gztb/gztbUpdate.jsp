<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>

<%
String GZTBID = request.getParameter("GZTBID");
String sj = request.getParameter("SJ");
String TZDWDM = request.getParameter("TZDWDM");
String TZDWMC = request.getParameter("TZDWMC");
String JSR = request.getParameter("JSR");
String JSDH = request.getParameter("JSDH");
String TBNR = request.getParameter("TBNR");
String ZBDD = request.getParameter("ZBDD");
String BZ = request.getParameter("BZ");  

try {
    DbTrade db_connection=new DbTrade();
	String sql_Upd="update Z_YXGL_GZTB set sj=to_date('"+sj+"','yyyy-mm-dd HH24:mi'),TZDWDM='"+TZDWDM+"',TZDWMC='"+TZDWMC+"',JSR='"
				+JSR+"',JSDH='"+JSDH+"',TBNR='"+TBNR+"',ZBDD='"+ZBDD+"',BZ='"+BZ+"' where GZTBID='"+GZTBID+"'";
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
