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
 
 String ddtdm = request.getParameter("ddtdm");
String commadid = request.getParameter("commdid");
String mlh = request.getParameter("mlh");
String sldwid = request.getParameter("sldwid");
String sldwmc = request.getParameter("sldwmc");
String flsj = request.getParameter("flsj");
String pzsj = request.getParameter("pzsj")==null?"":request.getParameter("pzsj");
String slr = request.getParameter("slr");
String flr =session.getAttribute("userName").toString();
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


String values = request.getParameter("values");
SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
System.out.println("values:"+values+"  "+mlh);

DbTrade dbTrade=new DbTrade();
 String strValues [] =values.split("\\|");

 


try {
for (int i=0;i<strValues.length;i++)
{
   String sql_upd="update Z_YXGL_CMD_DZ set flr='"+flr+"', mlzt='2' ,pzsj=to_date('"+pzsj+"','yyyy-mm-dd hh24:mi') , mlh='"+mlh+"' where  commandid='"+strValues[i]+"'";
  String sql_insert2="insert into J_GDGY_MLH values('"+ddtdm+"','2','"+mlh+"')";
   dbTrade.executeUpdate(sql_upd);
  
 dbTrade.executeUpdate(sql_insert2);
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
