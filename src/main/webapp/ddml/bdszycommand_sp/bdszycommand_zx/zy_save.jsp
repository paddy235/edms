<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
 

<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String ddtdm=session.getAttribute("ddtdm").toString();
String ddtmc=session.getAttribute("ddtmc").toString();

String jhid=request.getParameter("jhid");
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
String tdqd = request.getParameter("tdqd");
String glkgh = request.getParameter("glkgh");
String dz = request.getParameter("dz");
String GDB = request.getParameter("GDB");

System.out.println("sldwid:"+sldwid);
//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();

 
 
try {
    
  String sql_insert="insert into z_yxgl_cmd_jcwzy (commandid,dwid,dwmc,jhid,mlh,sldwid,sldwmc,yqwcsj,mlnr,tdqd,mlbz,mlzt,ltype,bdb) values(z_yxgl_cmd_glkgdzsquence.nextval,'"+ddtdm+"','"+ddtmc+"','"+jhid+"','"+mlh+"','"+sldwid+"','怀化变网工区',to_date('"+yqwcsj+"','yyyy-mm-dd hh24:mi'),'"+mlnr+"','"+tdqd+"','"+mlbz+"','1','0','"+GDB+"')";
  System.out.println("updat:"+sql_insert);
  dbTrade.executeUpdate(sql_insert);
     dbTrade.close();
   out.print("{success:true,msg:'命令审批成功！'}");

     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
 out.print("{success:true,msg:'请选择时间！'}");
}

%>
