<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String GDDDM = request.getParameter("GDDDM");
String GDDJC = request.getParameter("GDDJC");
String GGDMC = request.getParameter("GGDMC");
String GGDDH = request.getParameter("GGDDH");
String GDDCZ = request.getParameter("GDDCZ");
String GDDDZ = request.getParameter("GDDDZ");
String LJDM = request.getParameter("LJDM");
String DPYM = request.getParameter("DPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("startduUUUUUUU:"+GDDDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_GDDZD set GDDJC='"+GDDJC+"',GGDMC='"+GGDMC+"',GGDDH='"+GGDDH+"',GDDCZ='"+GDDCZ+"',GDDDZ='"+GDDDZ+"',LJDM='"+LJDM+"',DPYM='"+DPYM+"',JD='"+JD+"',WD='"+WD+"' where GDDDM='"+GDDDM+"'";
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
