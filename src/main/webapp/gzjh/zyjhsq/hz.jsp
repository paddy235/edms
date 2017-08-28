<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String id = request.getParameter("id");
//String zylb = request.getParameter("dwid");
String jhh = request.getParameter("jhh");
String jhsj = request.getParameter("jhsj");
String xianb = request.getParameter("xianb");
String xingb = request.getParameter("xingb");
String jhlb = request.getParameter("jhlb");
String jhlx = request.getParameter("jhlx");
String wxxm = request.getParameter("wxxm");
String ydsj = request.getParameter("ydsj");
String phdw = request.getParameter("phdw");
String fzr = request.getParameter("fzr");
String tbsj = request.getParameter("tbsj");
String sgdd = request.getParameter("sgdd");
String nrjyq = request.getParameter("nrjyq");
String bz = request.getParameter("bz");
String yxfw = request.getParameter("yxfw");

//新加
String mlh=request.getParameter("mlh");
String ylz=request.getParameter("ylz");
String fsfw=request.getParameter("fsfw");
String jhnr=request.getParameter("jhnr");
String gdcnr=request.getParameter("gdcnr");
Date nowDate =new Date();

//单位id和单位名称不可以更改
String sql="update z_yxgl_zyjh set jhh='"+jhh+"', jhsj=to_date('"+jhsj+"','yyyy-mm-dd  hh24:mi'),xb='"+xianb
+"',xingb='"+xingb+"',jhlb='"+jhlb+"',sgdd='"+sgdd+"',ydsj='"+ydsj+"',wxxm='"+wxxm
+"',phdw='"+phdw+"',fzr='"+fzr+"',jhlx='"+jhlx+"',tbsj=to_date('"+tbsj.trim()+"','yyyy-mm-dd  hh24:mi'),nrjyq='"+nrjyq
+"',bz='"+bz+"',spr='null',zt='1',mlh='"+mlh+"',ylz='"+ylz+"',fsfw='"+fsfw+"',jhnr='"+jhnr+"',gdcnr='"+gdcnr+"' where id='"+id+"'";


try
{
	DbTrade dbconn_up=new DbTrade();

	 String message="汇总成功！";
	 System.out.println("up.jsp: sql"+sql);
     dbconn_up.executeUpdate(sql);//修改计划的状态
	 dbconn_up.close();
   
   out.print("{success:true,msg:'"+message+"'}");
}catch(Exception ex)
	{
	  System.out.println("up.jsp:"+ex.toString());
	  out.print("{success:true,msg:'汇总失败！'}");
	}
  
   
%>
