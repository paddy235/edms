<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String CJDM = request.getParameter("CJDM");
String CJJC = request.getParameter("CJJC");
String CJMC = request.getParameter("CJMC");
String CJDH = request.getParameter("CJDH");
String CJCZ = request.getParameter("CJCZ");
String CJDZ = request.getParameter("CJDZ");
String DDM = request.getParameter("DDM");
String CJPYM = request.getParameter("CJPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("startduUUUUUUU:"+CJDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_CJZD set CJJC='"+CJJC+"',CJMC='"+CJMC+"',CJDH='"+CJDH+"',CJCZ='"+CJCZ+"',CJDZ='"+CJDZ+"',DDM='"+DDM+"',CJPYM='"+CJPYM+"',JD='"+JD+"',WD='"+WD+"' where CJDM='"+CJDM+"'";
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
