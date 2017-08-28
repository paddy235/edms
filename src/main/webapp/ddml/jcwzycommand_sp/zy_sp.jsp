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

String username=session.getAttribute("userName").toString();
String commadid = request.getParameter("commdid");
String ddtdm = request.getParameter("ddtdm");

String mlh = request.getParameter("mlh");
String sldwid = request.getParameter("sldwid");
String sldwmc = request.getParameter("sldwmc");
String flsj = request.getParameter("flsj");
String pzsj = request.getParameter("pzsj")==null?"":request.getParameter("pzsj");
String slr = request.getParameter("slr");
String flr = username;//request.getParameter("flr");
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

SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
String values = request.getParameter("values");
 String strValues [] =values.split("\\|");

//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();


try {
for (int i=0;i<strValues.length;i++)
{
   String sql_upd="update z_yxgl_cmd_jcwzy set mlh='"+mlh+"',mlzt='2' , pzsj=to_date('"+pzsj+"','yyyy-mm-dd hh24:mi') , flr='"+flr+"'where commandid='"+strValues[i]+"'";
    System.out.println(sql_upd);
     String sql_insert="insert into J_GDGY_MLH values('"+ddtdm+"','1','"+mlh+"')";
   dbTrade.executeUpdate(sql_upd);
   dbTrade.executeUpdate(sql_insert);
   mlh=String.valueOf(Integer.parseInt(mlh)+1);
}

	 out.print("{success:true,msg:'命令下令成功！'}");
 
   dbTrade.close();
} 

catch(Exception ex) {
	System.out.println("zy_sp.jsp  :"+ex.toString());
   out.print("{success:true,msg:'请输入时间！'}");
}

%>
