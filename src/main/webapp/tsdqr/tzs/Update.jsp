<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String TZSID = request.getParameter("TZSID");
String TZSH = request.getParameter("TZSH");
String TZRQ = request.getParameter("TZRQ");
String XDTDM = request.getParameter("XDTDM");
String DDMC = request.getParameter("DDMC");
String XDMC = request.getParameter("XDMC");
String TZNR = request.getParameter("TZNR");
//System.out.println("startduUUUUUUU:"+TZSH);
String ZT ="0";

try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	String sql_Upd="update Z_YXGL_TZS set TZSH="+TZSH+",TZRQ=to_date('"+TZRQ+"','yyyy-mm-dd'),XDTDM='"+XDTDM+"',DDMC='"+DDMC+"',XDMC='"+XDMC+"',TZNR='"+TZNR+"',ZT='"+ZT+"' where TZSID="+TZSID+"";
	//out.println(sql_Query);
	//System.out.println(sql_Upd);

	db_connection.executeUpdate(sql_Upd);
    db_connection.close();
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功'}");
     
} 

catch(Exception ex) {
	out.print("{success:false,msg:'修改失败'}");
}

%>
