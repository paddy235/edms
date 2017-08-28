<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String tdqrid = request.getParameter("tdqrid");
String tdsj = request.getParameter("tdsj");
String tdqk = request.getParameter("tdqk");
String wcqk = request.getParameter("wcqk");
String ssdd = request.getParameter("ssdd");
String wdw = request.getParameter("wdw");
String wdwddy = request.getParameter("wdwddy");

System.out.println("修改:"+tdqrid+tdsj+wdwddy);




try {
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update z_tsdqr_tdqr set tdsj=to_date('"+tdsj+"','yyyy-mm-dd hh24:mi'),tdqk='"+tdqk+"',ssdd='"+ssdd+"',wcqk='"+wcqk+"',wdw='"+wdw+"',wdwddy='"+wdwddy+"' where tdqrid='"+tdqrid+"'";
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
