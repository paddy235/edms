<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String dwid=request.getParameter("dwid");
//String tsdqj = new String(request.getParameter("tsdqj").getBytes("ISO8859-1"),"GB2312");

System.out.println("&*&*&*&*&*&*&*&*"+dwid);
String gqlb="";
DbTrade dbTrade=new DbTrade();
try {
    //z_yxgl_command_card
  String sql_Query="select jglbdm from j_gyjc_gqzd where gqdm='"+dwid+"'";
  System.out.println("sql:"+sql_Query);
  java.sql.ResultSet gridResultSet=dbTrade.executeQuery(sql_Query);
  
  
  while(gridResultSet.next())
  {
     gqlb=gridResultSet.getString("jglbdm");
  }
  dbTrade.close();
  String json = "{id:'"+gqlb+"',gqlb:'"+gqlb+"'}";
  System.out.println(json);
  out.println(json);
} 

catch(Exception ex) {
}

%>
