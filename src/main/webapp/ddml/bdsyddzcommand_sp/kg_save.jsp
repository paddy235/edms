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

String qjzc = request.getParameter("qjzc");
String glkgh = request.getParameter("glkgh");
String dz = request.getParameter("dz");
String yqwcsj=request.getParameter("yqwcsj");


System.out.println("sldwid:"+sldwid);
//String education = request.getParameter("action");

DbTrade dbTrade=new DbTrade();
 
int num_mlh=100;
System.out.println("sldwidasdfasdfasdfasdfasd:");
try {
    
  String sql_insert="insert into z_yxgl_cmd_glkgdz (commandid,dwid,dwmc,jhid,mlh,sldwid,sldwmc,qjzc,glkgh,dz,mlzt,yqwcsj) values(z_yxgl_cmd_glkgdzsquence.nextval,'"+dwid+"','"+dwid+"','"+jhid+"','"+(num_mlh+1)+"','"+sldwid+"','������������','"+qjzc+"','"+glkgh+"','"+dz+"','1',to_date('"+yqwcsj+"','yyyy-mm-dd hh24:mi'))";
  System.out.println("updat:"+sql_insert);
  dbTrade.executeUpdate(sql_insert);
     dbTrade.close();
   out.print("{success:true,msg:'������ӳɹ���'}");

     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
out.print("{success:true,msg:'��ѡ��ʱ�䣡'}");
}

%>
