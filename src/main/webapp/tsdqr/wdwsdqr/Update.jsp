<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String sdqrid = request.getParameter("sdqrid");
String sdsj = request.getParameter("sdsj");
String sdqk = request.getParameter("sdqk");
String wcqk = request.getParameter("wcqk");
String ssdd = request.getParameter("ssdd");
String wdw = request.getParameter("wdw");
String wdwddy = request.getParameter("wdwddy");

System.out.println("修改:"+sdqrid+sdsj+sdqk);




try {
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update z_tsdqr_sdqr set sdsj=to_date('"+sdsj+"','yyyy-mm-dd hh24:mi'),sdqk='"+sdqk+"',wcqk='"+wcqk+"',ssdd='"+ssdd+"',wdw='"+wdw+"',wdwddy='"+wdwddy+"' where sdqrid='"+sdqrid+"'";
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
