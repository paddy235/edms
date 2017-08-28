<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>



<%

String sdsj = request.getParameter("sdsj");
String sdqk = request.getParameter("sdqk");
String wcqk = request.getParameter("wcqk");
String ssdd = request.getParameter("ssdd");
String wdw = request.getParameter("wdw");
String wdwddy = request.getParameter("wdwddy");

System.out.println("Save.jsp:"+sdsj+sdqk+wcqk+wdw+wdwddy);


try {
    
   
    
    DbTrade db_connection=new DbTrade();
	
	String sql_Add="insert into z_tsdqr_sdqr (sdqrid,sdsj,sdqk,wcqk,ssdd,wdw,wdwddy) values(Z_TSDQR_SDQRUENCE.Nextval,to_date('"+sdsj+"','yyyy-mm-dd hh24:mi'),'"+sdqk+"','"+wcqk+"','"+ssdd+"','"+wdw+"','"+wdwddy+"')";
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'数据保存成功！'}");
     
} 

catch(Exception ex) {
    out.print("{success:false,msg:'数据保存失败！'}");
}

%>
