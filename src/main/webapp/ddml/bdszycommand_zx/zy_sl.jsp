<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

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
String slr =session.getAttribute("userName").toString();//request.getParameter("slr");
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


SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
 

DbTrade dbTrade=new DbTrade();
 System.out.println("sql_upd： AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa     "+slr);
//String education = request.getParameter("action");
 


try {
   String sql_upd="update z_yxgl_cmd_jcwzy set slr='"+slr+"' , slsj=to_date('"+df.format(new Date())+"','yyyy-mm-dd hh24:mi'),mlzt='3' where commandid='"+commadid+"'";
   System.out.println("sql_upd：      "+sql_upd);
   dbTrade.executeUpdate(sql_upd);  
   dbTrade.close();
    out.print("{success:true,msg:'命令受令成功！'}");
} 

catch(Exception ex) {
	System.out.println("zy_sp.jsp  :"+ex.toString());
   out.print("{success:true,msg:'请输入时间！'}");
}

%>
