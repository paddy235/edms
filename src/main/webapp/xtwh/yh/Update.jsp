<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String YHDM = new String(request.getParameter("YHDM").getBytes("ISO8859-1"),"GB2312");
String YHMC = request.getParameter("YHMC");
String YHMM = request.getParameter("YHMM");
String YHIP = request.getParameter("YHIP");
String GWMC = request.getParameter("GWMC");
String DWJB = request.getParameter("DWJB");
String DWDM = request.getParameter("DWDM");
String BZ = request.getParameter("BZ");
System.out.println("startduUUUUUUU:"+YHDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update J_GYJC_YH set YHMC='"+YHMC+"',YHMM='"+YHMM+"',YHIP='"+YHIP+"',GWMC='"+GWMC+"',DWJB='"+DWJB+"',DWDM='"+DWDM+"',BZ='"+BZ+"'  where YHDM='"+YHDM+"'";
	//System.out.println(sql_Upd);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   

   
     
     out.print("{success:true,msg:'�޸ĳɹ���'}");
     
} 

catch(Exception ex) {
        //System.out.println("�޸�ʧ�ܣ�"+ex.getMessage() );
     out.print("{success:false,msg:'�޸�ʧ�ܣ�'}");
}

%>
