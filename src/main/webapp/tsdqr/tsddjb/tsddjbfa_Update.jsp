<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String TDSBH = request.getParameter("TDSBH");
String TSDRQ = request.getParameter("TSDRQ");
String QZSJ = request.getParameter("QZSJ");
String T_GDDDY = request.getParameter("T_GDDDY");
String QJDD = request.getParameter("QJDD");
String TDDY = request.getParameter("TDDY");
String BK = request.getParameter("BK");
String ZT ="1";//request.getParameter("ZT");//request.getParameter("GZLCBS");

try {
    DbTrade db_connection=new DbTrade();

	String sql_Upd="update z_tjbb_tsddjb set ZT='"+ZT+"' where TDSBH='"+TDSBH+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'发送成功！'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'发送失败'}");		
 	}
%>
