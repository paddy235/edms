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
String bdid=request.getParameter("bdid");
String dwid=request.getParameter("dwid");
String fzr = request.getParameter("fzr");
String zbrs = request.getParameter("zbrs");
String bgrq = request.getParameter("bgsj");
String clqk = request.getParameter("clqk");
String bz = request.getParameter("bz");



Date nowDate =new Date();
SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
System.out.println("qqqqqqqqq");
System.out.println("sfdhl:"+clqk);
//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
try {
  String sql_update="update z_yxgl_sbdbd set fzr='"+fzr+"',zbrs='"+zbrs+"',clqk='"+clqk+"',jlsj=to_date('"+bgrq+"','yyyy-mm-dd hh24:mi'),bz='"+bz+"' where bdid='"+bdid+"'"; 
   System.out.println("insert:"+sql_update);
  dbTrade.executeUpdate(sql_update);
  dbTrade.close();
  out.print("{success:true,msg:'ÐÞ¸Ä³É¹¦£¡'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
