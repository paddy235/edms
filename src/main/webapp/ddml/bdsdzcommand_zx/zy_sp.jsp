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





//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();


try {
   String sql_upd="update z_yxgl_cmd_jcwzy set flr='"+flr+"', mlh='"+mlh+"', sldwid='"+sldwid+"',sldwmc='"+sldwid+"',yqwcsj=to_date('"+yqwcsj+"','yyyy-mm-dd hh24:mi'),mlnr='"+mlnr+"',tdqd='"+tdqd+"',mlbz='"+mlbz+"',mlzt='2',dbb='"+GDB+"' where commandid='"+commadid+"'";
   System.out.println("sql_upd"+sql_upd);
   dbTrade.executeUpdate(sql_upd);
       //查看计划对应的所有的命令是否全部审核通过，如果
  String sql_count_bds="select count(*) from z_yxgl_cmd_bdsdz where jhid="+jhid;
  String sql_count_bds_sp="select count(*) from z_yxgl_cmd_bdsdz where mlzt='2' and jhid="+jhid;
  String sql_count_kg="select count(*) from z_yxgl_cmd_glkgdz where jhid="+jhid;
  String sql_count_kg_sp="select count(*) from z_yxgl_cmd_glkgdz where mlzt='2'and jhid="+jhid;
  String sql_count_zy="select count(*) from z_yxgl_cmd_jcwzy where jhid="+jhid;
  String sql_count_zy_sp="select count(*) from z_yxgl_cmd_jcwzy where mlzt='2' and jhid="+jhid;
  java.sql.ResultSet resultset_bds_count=dbTrade.executeQuery(sql_count_bds);
  java.sql.ResultSet resultset_bds_count_all=dbTrade.executeQuery(sql_count_bds_sp);
  java.sql.ResultSet resultset_kg_count=dbTrade.executeQuery(sql_count_kg);
  java.sql.ResultSet resultset_kg_count_all=dbTrade.executeQuery(sql_count_kg_sp);
  java.sql.ResultSet resultset_zy_count=dbTrade.executeQuery(sql_count_zy);
  java.sql.ResultSet resultset_zy_count_all=dbTrade.executeQuery(sql_count_zy_sp);
  resultset_bds_count.next();
  resultset_bds_count_all.next();
  resultset_kg_count.next();
  resultset_kg_count_all.next();
  resultset_zy_count.next();
  resultset_zy_count_all.next();
  int bds_count=resultset_bds_count.getInt(1);
  int bds_count_all=resultset_bds_count_all.getInt(1);
  int kg_count=resultset_kg_count.getInt(1);
  int kg_count_all=resultset_kg_count_all.getInt(1);
  int zy_count=resultset_zy_count.getInt(1);
  int zy_count_all=resultset_zy_count_all.getInt(1);
  System.out.println("bds_count:"+bds_count+"bds_count_all:"+bds_count_all+"kg_count:"+kg_count+"kg_count_all:"+kg_count_all+"zy_count:"+zy_count+"zy_count_all:"+zy_count_all);
  //命令全部通过审批，计划的状态改变
  if(bds_count==bds_count_all&&kg_count==kg_count_all&&zy_count==zy_count_all)
  {
     String sql_update_jh="update z_yxgl_zyjh set zt='6' where id="+jhid;
     System.out.println("YYYY:"+sql_update_jh);
     dbTrade.executeUpdate(sql_update_jh);
	 out.print("{success:true,msg:'命令审批成功！'}");
  }
   dbTrade.close();
} 

catch(Exception ex) {
	System.out.println("zy_sp.jsp  :"+ex.toString());
   out.print("{success:true,msg:'请输入时间！'}");
}

%>
