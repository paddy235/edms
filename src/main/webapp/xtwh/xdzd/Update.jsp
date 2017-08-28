<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XDDM = request.getParameter("XDDM");
String XDJC = request.getParameter("XDJC");
String XDMC = request.getParameter("XDMC");
String XDDH = request.getParameter("XDDH");
String XDCZ = request.getParameter("XDCZ");
String XDDZ = request.getParameter("XDDZ");
String LJDM = request.getParameter("LJDM");
String DPYM = request.getParameter("DPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("startduUUUUUUU:"+XDDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_XDZD set XDJC='"+XDJC+"',XDMC='"+XDMC+"',XDDH='"+XDDH+"',XDCZ='"+XDCZ+"',XDDZ='"+XDDZ+"',LJDM='"+LJDM+"',DPYM='"+DPYM+"',JD='"+JD+"',WD='"+WD+"' where XDDM="+XDDM;
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功！'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'修改失败！'}");
}

%>
