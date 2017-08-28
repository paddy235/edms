<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
 String id= request.getParameter("id");
String ccxh = request.getParameter("ccxh");
String mc = request.getParameter("mc");
String dw = request.getParameter("dw");
String ggxh = request.getParameter("ggxh");
String sccj = request.getParameter("sccj");
String ssdw = request.getParameter("ssdw");
String zt = request.getParameter("zt");
String sl = request.getParameter("sl");
String scrq = request.getParameter("scrq").toString();
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update z_jcsj_wuliao set ccxh='"+ccxh+"',mc='"+mc+"',dw='"+dw+"',ggxh='"+ggxh+"',sccj='"+sccj+"',ssdw='"+ssdw+"',zt='"+zt+"',scrq=to_date('"+scrq+"','yyyy-MM-dd'),sl='"+sl+"',bz='"+bz+"' where id='"+id+"'";	
	
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'ÐÞ¸Ä³É¹¦£¡'}");
} 

catch(Exception ex) {
}

%>
