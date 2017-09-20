<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String TDTZBH = request.getParameter("TDTZBH");
String TDSJ = request.getParameter("TDSJ");
String TDSF = request.getParameter("TDSF");
String TDGDB = request.getParameter("TDGDB");
String TDNR="";

String TD_XDMLH = request.getParameter("TD_XDMLH");
String TD_XDSJ = request.getParameter("TD_XDSJ");
String TD_XDT = request.getParameter("TD_XDT");
String TD_XDY = request.getParameter("TD_XDY");

String TD_DDMLH = request.getParameter("TD_DDMLH");
String TD_DDSJ = request.getParameter("TD_DDSJ");
String TD_DDT = request.getParameter("TD_DDT");
String TD_DDY = request.getParameter("TD_DDY");

String TD_BZ = request.getParameter("TD_BZ");

String ZT ="0"; 

String sql="";
	try 
	{
		sql="UPDATE Z_TSDQR_TDTZ SET "			
			+"TDSJ=to_date('"+TDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"TDSF='"+TDSF+"',"
			+"TDGDB='"+TDGDB+"',"
			+"TD_XDMLH='"+TD_XDMLH+"',"
			+"TD_XDSJ=to_date('"+TD_XDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"TD_XDT='"+TD_XDT+"',"
			+"TD_XDY='"+TD_XDY+"',"
			+"TD_DDMLH='"+TD_DDMLH+"',"
			+"TD_DDSJ=to_date('"+TD_DDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"TD_DDT='"+TD_DDT+"',"
			+"TD_DDY='"+TD_DDY+"',"
			+"TD_BZ='"+TD_BZ+"',"
			+"ZT='"+ZT+"',"
			+"SJC=sysdate"
			+" WHERE TDTZBH="+TDTZBH;
			
		//System.out.println("+====+"+sql);
		DbTrade dbTrade=new DbTrade();
		dbTrade.executeUpdate(sql);
		dbTrade.close();
		out.print("{success:true,msg:'修改成功'}");		
	}
 	catch (Exception e) {
 		System.out.println("tdtz_save  :"+e.toString());
 		out.print("{success:true,msg:'修改失败'}");	
 	}
%>
