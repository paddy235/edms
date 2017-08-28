<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>



<%

String tdsj = request.getParameter("tdsj");
String tdqk = request.getParameter("tdqk");
String wcqk = request.getParameter("wcqk");
String ssdd = request.getParameter("ssdd");
String wdw = request.getParameter("wdw");
String wdwddy = request.getParameter("wdwddy");

System.out.println("Save.jsp:"+tdsj+tdqk+wcqk+wdw+wdwddy);


try {
    
   
    
    DbTrade db_connection=new DbTrade();
	
	String sql_Add="insert into z_tsdqr_tdqr (tdqrid,tdsj,tdqk,wcqk,ssdd,wdw,wdwddy) values(Z_TSDQR_TDQRUENCE.Nextval,to_date('"+tdsj+"','yyyy-mm-dd hh24:mi'),'"+tdqk+"','"+wcqk+"','"+ssdd+"','"+wdw+"','"+wdwddy+"')";
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
