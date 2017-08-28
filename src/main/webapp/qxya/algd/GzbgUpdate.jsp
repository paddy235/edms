<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String id = request.getParameter("id");
String albm = request.getParameter("albm");
String almc = request.getParameter("almc");
String xb = request.getParameter("xbbm");
String fssj = request.getParameter("fssj");
String dd = request.getParameter("dd");
String sgfl = request.getParameter("sgfl");
String sglx = request.getParameter("sglx");
String sgszdw = request.getParameter("sgszdw");
String zbddy = request.getParameter("zbddy");
String gzxx = request.getParameter("gzxx");
String gzqx = request.getParameter("gzqx");
String sgyyjcs = request.getParameter("sgyyjcs");
String ylwt = request.getParameter("ylwt");
String sfgd = request.getParameter("sfgd");


try {
    DbTrade db_connection=new DbTrade();
	
	if(sfgd==null)
		  sfgd="0";
		else
		  sfgd="1";
	String sql_Upd="update z_dxsg_sgbg set almc='"+almc+"',xbbm='"+xb+"',fssj=to_date('"+fssj+"','yyyy-mm-dd hh24:mi:ss'),dd='"+dd+"',sgfl='"+sgfl+"',sglx='"
					+sglx+"',sgszdw='"+sgszdw+"',zbddy='"+zbddy+"',gzxx='"+gzxx+"',gzqx='"+gzqx+"',sgyyjcs='"+sgyyjcs+"',ylwt='"+ylwt+"',sfgd='"+sfgd+"' where albm='"+albm+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'ÐÞ¸Ä³É¹¦£¡'}");
} 

catch(Exception ex) {
}

%>
