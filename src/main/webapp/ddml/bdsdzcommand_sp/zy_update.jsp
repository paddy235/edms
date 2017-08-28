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

String wcsj=request.getParameter("wcsj")==null?"":request.getParameter("wcsj");
String jhid=request.getParameter("jhid");


String tdqd = request.getParameter("tdqd");
String glkgh = request.getParameter("glkgh");
String dz = request.getParameter("dz");
String GDB = request.getParameter("GDB");
String zybs = request.getParameter("zybs");




//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();


try {
   String sql_upd="update Z_YXGL_CMD_DZ set   sldwid='"+sldwid+"',sldwmc='"+sldwid+"',flsj=to_date('"+flsj+"','yyyy-mm-dd hh24:mi'),mlnr='"+mlnr+"',tdqd='"+tdqd+"',mlbz='"+mlbz+"',bdb='"+GDB+"',zybs='"+zybs+"' where commandid='"+commadid+"'";
   System.out.println("sql_upd"+sql_upd);
   dbTrade.executeUpdate(sql_upd);  
   dbTrade.close();
    out.print("{success:true,msg:'命令修改成功！'}");
} 

catch(Exception ex) {
	System.out.println("zy_sp.jsp  :"+ex.toString());
   out.print("{success:true,msg:'请输入时间！'}");
}

%>
