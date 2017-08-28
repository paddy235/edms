<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String ddtdm=session.getAttribute("userDwid").toString();
String ddtmc=session.getAttribute("ddtmc").toString();

String dwid=request.getParameter("dwid");
String fzr = request.getParameter("fzr");
String zbrs = request.getParameter("zbrs");

String clqk = request.getParameter("clqk");
String bgrq = request.getParameter("bgsj");
String bz = request.getParameter("bz");




Date nowDate =new Date();
SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
System.out.println("qqqqqqqqq");
System.out.println("sfdhl:"+clqk);
//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
try {
  String sql_insert="insert into z_yxgl_sbdbd (bdid,dwid,fzr,zbrs,clqk,jlr,jlsj,bz,dddm) values (z_yxgl_sbdbdSquence.nextval,'"+dwid+"','"+fzr+"','"+zbrs+"','"+clqk+"','',to_date('"+bgrq+"','yyyy-mm-dd hh24:mi'),'"+bz+"','"+ddtdm+"')";
  System.out.println("insert:"+sql_insert);
  dbTrade.executeUpdate(sql_insert);
  dbTrade.close();
  out.print("{success:true,msg:'ÃüÁîÌí¼Ó³É¹¦£¡'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
