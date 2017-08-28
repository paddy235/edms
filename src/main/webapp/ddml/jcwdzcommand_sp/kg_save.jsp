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
String dwid=session.getAttribute("userDwid").toString();
String ddtdm=session.getAttribute("ddtdm").toString();

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
String tdqd = request.getParameter("tdqd");
String qjzc = request.getParameter("qjzc");
String glkgh = request.getParameter("glkgh");
String dz = request.getParameter("dz");
String yqwcsj=request.getParameter("yqwcsj");
int tdqdd=Integer.valueOf(tdqd)+100;
 
//String education = request.getParameter("action");

DbTrade dbTrade=new DbTrade();
 
 
System.out.println("sldwidasdfasdfasdfasdfasd:");
try {
    
  String sql_insert="insert into z_yxgl_cmd_glkgdz (commandid,dwid,dwmc,jhid,mlh,sldwid,sldwmc,qjzc,glkgh,dz,mlzt,yqwcsj,tdqd) values(z_yxgl_cmd_glkgdzsquence.nextval,'"+dwid+"','"+dwid+"','"+jhid+"','"+mlh+"','"+sldwid+"','怀化变网工区','"+qjzc+"','"+glkgh+"','"+dz+"','1',to_date('"+yqwcsj+"','yyyy-mm-dd hh24:mi'),'"+String.valueOf(tdqdd)+"')";
  System.out.println("updat:"+sql_insert);
   String sql_insert2="insert into J_GDGY_MLH values('"+ddtdm+"','3','"+mlh+"')";
   dbTrade.executeUpdate(sql_insert2);
  dbTrade.executeUpdate(sql_insert);
     dbTrade.close();
   out.print("{success:true,msg:'命令添加成功！'}");

     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
out.print("{success:true,msg:'请选择时间！'}");
}

%>
