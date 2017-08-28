<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String ID = request.getParameter("ID");
String XLMC = request.getParameter("XLMC");
String QJZC = request.getParameter("QJZC");
String XBBM = request.getParameter("XBBM");
String SXXBM = request.getParameter("SXXBM");
String SBXH = request.getParameter("SBXH");
String SBCZ = request.getParameter("SBCZ");
String CD = request.getParameter("CD");
String BZ = request.getParameter("BZ");
String ZL = request.getParameter("ZL");
String SCRQ = request.getParameter("SCRQ").toString();
String TYRQ = request.getParameter("TYRQ").toString();
String SCCJ = request.getParameter("SCCJ");


try {
    DbTrade db_connection=new DbTrade();
	String sql_Upd="update Z_JCSJ_XIANLU set XLMC = '"+XLMC+"',QJZC = '"+QJZC+"',XBBM = '"+XBBM+"',SXXBM = '"+SXXBM+"',SBXH = '"+SBXH+"',SBCZ = '"+SBCZ+"',CD = '"+CD+"',BZ = '"+BZ+"',ZL = '"+ZL+"',SCRQ=to_date('"+SCRQ+"','yyyy-MM-dd'),TYRQ=to_date('"+TYRQ+"','yyyy-MM-dd'),SCCJ='"+SCCJ+"' where ID='"+ ID+"'";	
	 
	System.out.println("修改SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.println("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
