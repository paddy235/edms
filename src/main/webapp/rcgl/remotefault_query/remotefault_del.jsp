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
if(session.getAttribute("DWDM")==null)
{
	response.sendRedirect(myURL);
}

String ydsgbm=request.getParameter("ydsgbm");
DbTrade dbTrade=new DbTrade();

try {
   String sql_del=" delete Z_XXGX_YDGZBG   where ydsgbm='"+ydsgbm+"'";
   System.out.println("insert:"+sql_del);
   dbTrade.executeUpdate(sql_del);
   dbTrade.close();
   out.print("{success:true,msg:'数据删除成功！'}");
} 

catch(Exception ex) {
}

%>
