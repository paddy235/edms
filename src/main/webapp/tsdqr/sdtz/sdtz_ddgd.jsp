<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String SDTZBH = request.getParameter("SDTZBH");
String SDSJ = request.getParameter("SDSJ");
String SDSF = request.getParameter("SDSF");
String SDGDB = request.getParameter("SDGDB");
String SDNR="";

String SD_XDMLH = request.getParameter("SD_XDMLH");
String SD_XDSJ = request.getParameter("SD_XDSJ");
String SD_XDT = request.getParameter("SD_XDT");
String SD_XDY = request.getParameter("SD_XDY");

String SD_DDMLH = request.getParameter("SD_DDMLH");
String SD_DDSJ = request.getParameter("SD_DDSJ");
String SD_DDT = request.getParameter("SD_DDT");
String SD_DDY = request.getParameter("SD_DDY");

String SD_BZ = request.getParameter("SD_BZ");

String ZT ="9"; 

String sql="";
	try 
	{
		sql="UPDATE Z_TSDQR_SDTZ SET "
			+"ZT='"+ZT+"',"
			+"SJC=sysdate"
			+" WHERE SDTZBH="+SDTZBH;
			
		//System.out.println("+====+"+sql);
		DbTrade dbTrade=new DbTrade();
		dbTrade.executeUpdate(sql);
		dbTrade.close();
		out.print("{success:true,msg:'¹éµµ³É¹¦'}");		
	}
 	catch (Exception e) {
 		System.out.println("SDtz_save  :"+e.toString());
 		out.print("{success:true,msg:'¹éµµÊ§°Ü'}");	
 	}
%>
