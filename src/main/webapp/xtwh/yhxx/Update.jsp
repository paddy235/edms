<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String YHDM = request.getParameter("YHDM");
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
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 
catch(Exception ex) {
        System.out.println("修改失败！"+ex.getMessage() );
}

%>
