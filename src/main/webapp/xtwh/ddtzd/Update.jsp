<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String DDTDM = request.getParameter("DDTDM");
String DDTJC = request.getParameter("DDTJC");
String DDTMC = request.getParameter("DDTMC");
String DDTDH = request.getParameter("DDTDH");
String DDTCZ = request.getParameter("DDTCZ");
String DDDM = request.getParameter("DDDM");
String DPYM = request.getParameter("DPYM");
System.out.println("startduUUUUUUU:"+DDTDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_DDTZD set DDTJC='"+DDTJC+"',DDTMC='"+DDTMC+"',DDTDH='"+DDTDH+"',DDTCZ='"+DDTCZ+"',DDDM='"+DDDM+"',DPYM='"+DPYM+"' where DDTDM='"+DDTDM+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功！'}");
     
} 

catch(Exception ex) {
	out.print("{success:false,msg:'修改失败'}");
}

%>
