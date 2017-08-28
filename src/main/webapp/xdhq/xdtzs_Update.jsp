<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
System.out.println("22222");
String TZSID = request.getParameter("TZSID");
String TZSH = request.getParameter("TZSH");
String TZRQ = request.getParameter("TZRQ");
String XDTDM = request.getParameter("XDTDM");
String DDMC = request.getParameter("DDMC");
String XDMC = request.getParameter("XDMC");
String TZNR = request.getParameter("TZNR");
String ZT =request.getParameter("ZT");

String msg="";
try {
    DbTrade db_connection=new DbTrade();
    String sql_Upd="";
    ZT=String.valueOf(Integer.parseInt(ZT)+1);
    if(ZT.equals("3"))//行调签收
    {
    	msg="签收";
      	sql_Upd="update Z_YXGL_TZS set ZT='"+ZT+"' where TZSID="+TZSID+"";
	}
	else if(ZT.equals("4"))//行调签认
	{
		msg="签认";
		sql_Upd="update Z_YXGL_TZS set XDMC='"+XDMC+"',ZT='"+ZT+"' where TZSID="+TZSID+"";
	}
	else if(ZT.equals("5"))//电调签收
	{
		msg="签收";
		sql_Upd="update Z_YXGL_TZS set ZT='"+ZT+"' where TZSID="+TZSID+"";
	}
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'"+msg+"成功！'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'"+msg+"失败！'}");		
 	}
%>
