<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String DDDM = request.getParameter("DDDM");
String DDJC = request.getParameter("DDJC");
String DDMC = request.getParameter("DDMC");
String DDDH = request.getParameter("DDDH");
String DDCZ = request.getParameter("DDCZ");
String DDDZ = request.getParameter("DDDZ");
String LJDM = request.getParameter("LJDM");
String DPYM = request.getParameter("DPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("startduUUUUUUU:"+DDDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_DDZD set DDJC='"+DDJC+"',DDMC='"+DDMC+"',DDDH='"+DDDH+"',DDCZ='"+DDCZ+"',DDDZ='"+DDDZ+"',LJDM='"+LJDM+"',DPYM='"+DPYM+"',JD='"+JD+"',WD='"+WD+"' where DDDM='"+DDDM+"'";
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
