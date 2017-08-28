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
String czlx=request.getParameter("czlx");


System.out.println("sldwid:"+sldwid);
//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
String sql_mlh="select * from  z_yxgl_cmd_bdsdz order by mlh desc";

java.sql.ResultSet resultset_bds_mlh=dbTrade.executeQuery(sql_mlh);
resultset_bds_mlh.next();
  mlh=resultset_bds_mlh.getString("mlh");
System.out.println("9090909090909090"+mlh);
int num_mlh=Integer.valueOf(mlh);

resultset_bds_mlh.close();

try {
    
  String sql_insert="insert into z_yxgl_cmd_bdsdz (commdid,dwid,dwmc,jhid,mlh,sldwid,sldwmc,mllx,czkah,mlnr,tsdqj,mlbz,mlzt,czlx) values(z_yxgl_cmd_bdsdzsquence.nextval,'"+ddtdm+"','"+ddtmc+"','"+jhid+"','"+(num_mlh+1)+"','"+sldwid+"','"+sldwid+"','"+mllx+"','"+czkah+"','"+mlnr+"','"+tsdqj+"','"+mlbz+"','1','"+czlx+"')";
  System.out.println("updat:"+sql_insert);
  dbTrade.executeUpdate(sql_insert);
     dbTrade.close();
   out.print("{success:true,msg:'命令添加成功！'}");

     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
out.print("{success:true,msg:'请选择时间！'}");
}

%>
