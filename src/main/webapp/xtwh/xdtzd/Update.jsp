<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XDTDM = request.getParameter("XDTDM");
String XDTJC = request.getParameter("XDTJC");
String XDTMC = request.getParameter("XDTMC");
String XDTDH = request.getParameter("XDTDH");
String XDTCZ = request.getParameter("XDTCZ");
String XDDM = request.getParameter("XDDM");
String DDTDM = request.getParameter("DDTDM");
String XPYM = request.getParameter("XPYM");
System.out.println("startduUUUUUUU:"+XDTDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_XDTZD set XDTJC='"+XDTJC+"',XDTMC='"+XDTMC+"',XDTDH='"+XDTDH+"',XDTCZ='"+XDTCZ+"',XDDM='"+XDDM+"',DDTDM='"+DDTDM+"',XPYM='"+XPYM+"' where XDTDM='"+XDTDM+"'";
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
