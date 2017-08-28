<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>

<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String TZSH = request.getParameter("TZSH");
String TZRQ = request.getParameter("TZRQ");
String XDTDM = request.getParameter("XDTDM");
String DDMC = request.getParameter("DDMC");
String XDMC = request.getParameter("XDMC");
String TZNR = request.getParameter("TZNR");
String ZT ="0";
//System.out.println("Save.jsp----------------------------------:"+TZSH+TZRQ);


try {

    DbTrade db_connection=new DbTrade();
	
	String sql_Add="insert into Z_YXGL_TZS(TZSID,TZSH,TZRQ,XDTDM,DDMC,XDMC,TZNR,ZT)  values(Z_YXGL_TZSsquence.nextval,"+TZSH+",to_date('"+TZRQ+"','yyyy-mm-dd'),'"+XDTDM+"','"+DDMC+"','"+XDMC+"','"+TZNR+"','"+ZT+"')";
	db_connection.executeUpdate(sql_Add);
    db_connection.close();
     
     out.print("{success:true,msg:'±£´æ³É¹¦'}");
     
} 

catch(Exception ex) {
}

%>
