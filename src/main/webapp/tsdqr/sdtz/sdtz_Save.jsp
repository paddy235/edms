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

String ZT ="0"; 

//SEQ_Z_TSDQR_SDTZ.Nextval  
String sql="";
	try 
	{
		sql="insert into Z_TSDQR_SDTZ("
			+"SDTZBH,"
			+"SDSJ,"
			+"SDSF,"
			+"SDGDB,"
			+"SDNR,"
			+"SD_XDMLH,"
			+"SD_XDSJ,"
			+"SD_XDT,"
			+"SD_XDY,"
			+"SD_DDMLH,"
			+"SD_DDSJ,"
			+"SD_DDT,"
			+"SD_DDY,"
			+"SD_BZ,"
			+"ZT) values(SEQ_Z_TSDQR_SDTZ.Nextval,"
			+"to_date('"+SDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"'"+SDSF+"',"
			+"'"+SDGDB+"',"
			+"'"+SDNR+"',"
			+"'"+SD_XDMLH+"',"
			+"to_date('"+SD_XDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"'"+SD_XDT+"',"
			+"'"+SD_XDY+"',"
			+"'"+SD_DDMLH+"',"
			+"to_date('"+SD_DDSJ+"','yyyy-mm-dd hh24:mi'),"
			+"'"+SD_DDT+"',"
			+"'"+SD_DDY+"',"
			+"'"+SD_BZ+"',"
			+"'"+ZT+"')";
		System.out.println("+====+"+sql);
		DbTrade dbTrade=new DbTrade();
		dbTrade.executeUpdate(sql);
		dbTrade.close();
		out.print("{success:true,msg:'保存成功'}");		
	}
 	catch (Exception e) {
 		System.out.println("SDtz_save  :"+e.toString());
 		out.print("{success:true,msg:'保存失败'}");		
 	}
%>
