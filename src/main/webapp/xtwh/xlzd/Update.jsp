<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XLDM = request.getParameter("XLDM");
String XLM = request.getParameter("XLM");
String XLCD = request.getParameter("XLCD");
String XLBS = request.getParameter("XLBS");
String KZBS = request.getParameter("KZBS");
System.out.println("startduUUUUUUU:"+XLDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_XLZD set XLM='"+XLM+"',XLCD="+XLCD+",XLBS='"+XLBS+"',KZBS='"+KZBS+"' where XLDM="+XLDM;
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'�޸ĳɹ���'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'�޸�ʧ�ܣ�'}");
}

%>
