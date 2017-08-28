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
String KGH = request.getParameter("KGH");
String KXMC = request.getParameter("KXMC");
String SXX = request.getParameter("SXX");
String XLDM = request.getParameter("XLDM");
String TDQD = request.getParameter("TDQD");
String XCXZFW = request.getParameter("XCXZFW");
String BHZZDM = request.getParameter("BHZZDM");
String GLB = request.getParameter("GLB");
String CJZZDM = request.getParameter("CJZZDM");
System.out.println("startduUUUUUUU:"+GQDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GDGY_KX set KGH='"+KGH+"',KXMC='"+KXMC+"',SXX='"+SXX+"',XLDM='"+XLDM+"',TDQD='"+TDQD+"',XCXZFW='"+XCXZFW+"',GLB='"+GLB+"',CJZZDM='"+CJZZDM+"' where GQDM='"+GQDM+"' and BHZZDM='"+BHZZDM+"'";
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
