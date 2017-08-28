<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>


<%
System.out.println("zy_sp.jsp-----------------------------");
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}

 
String commadid = request.getParameter("commdid");
String mlh = request.getParameter("mlh");
String sldwid = request.getParameter("sldwid");
String sldwmc = request.getParameter("sldwmc");
String flsj = request.getParameter("flsj");
String pzsj = request.getParameter("pzsj");
String slr = request.getParameter("slr");
String flr = request.getParameter("flr");
String mllx = request.getParameter("mllx");
String czkah = request.getParameter("czkah");
String mlnr = request.getParameter("mlnr");
String tsdqj = request.getParameter("tsdqj");
String mlbz = request.getParameter("mlbz");
String xlsj = request.getParameter("xlsj");
String xlr = request.getParameter("xlr");
String ddy = request.getParameter("ddy");

String yqwcsj=request.getParameter("yqwcsj");
String jhid=request.getParameter("jhid");


String tdqd = request.getParameter("tdqd");
String glkgh = request.getParameter("glkgh");
String dz = request.getParameter("dz");
String GDB = request.getParameter("GDB");

String slsj = request.getParameter("slsj");
String wcsj = request.getParameter("wcsj");



//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();


try {
   String sql_upd="update Z_YXGL_CMD_DZ set wcsj=to_date('"+wcsj+"','yyyy-mm-dd hh24:mi'),slsj=to_date('"+slsj+"','yyyy-mm-dd hh24:mi'),slr='"+slr+"',xlr='"+xlr+"',mlzt='5' where commandid='"+commadid+"'";
   System.out.println("sql_upd"+sql_upd);
   dbTrade.executeUpdate(sql_upd);  
   dbTrade.close();
    out.print("{success:true,msg:'命令审核不成功！'}");
} 

catch(Exception ex) {
	System.out.println("zy_sp.jsp  :"+ex.toString());
   out.print("{success:true,msg:'请输入时间！'}");
}

%>
