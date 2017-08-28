<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String GQDM = request.getParameter("GQDM");
String GQJC = request.getParameter("GQJC");
String GQMC = request.getParameter("GQMC");
String GQDH = request.getParameter("GQDH");
String GQCZ = request.getParameter("GQCZ");
String GQDZ = request.getParameter("GQDZ");
String JGLBDM = request.getParameter("JGLBDM");
String CJDM = request.getParameter("CJDM");
String DDTDM = request.getParameter("DDTDM");
String GQPYM = request.getParameter("GQPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("startduUUUUUUU:"+GQDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_GQZD set GQJC='"+GQJC+"',GQMC='"+GQMC+"',GQDH='"+GQDH+"',GQCZ='"+GQCZ+"',GQDZ='"+GQDZ+"',JGLBDM='"+JGLBDM+"',CJDM='"+CJDM+"',DDTDM='"+DDTDM+"',GQPYM='"+GQPYM+"',JD='"+JD+"',WD='"+WD+"' where GQDM='"+GQDM+"'";
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
