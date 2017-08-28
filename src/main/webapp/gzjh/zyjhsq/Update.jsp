<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String id = request.getParameter("id");
String dwid = request.getParameter("dwid");
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
String gdcnr=request.getParameter("gdcnr");

//新加
String mlh=request.getParameter("mlh");
String ylz=request.getParameter("ylz");
String fsfw=request.getParameter("fsfw");
String jhnr=request.getParameter("jhnr");
Date nowDate =new Date();

//单位id和单位名称不可以更改
SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
String sql="update z_yxgl_zyjh set jhh='"+jhh+"', jhsj=to_date('"+jhsj+"','yyyy-mm-dd  hh24:mi'),xb='"+xianb
+"',xingb='"+xingb+"',jhlb='"+jhlb+"',sgdd='"+sgdd+"',ydsj='"+ydsj+"',wxxm='"+wxxm
+"',phdw='"+phdw+"',fzr='"+fzr+"',jhlx='"+jhlx+"',tbsj=to_date('"+tbsj.trim()+"','yyyy-mm-dd  hh24:mi'),nrjyq='"+nrjyq
+"',bz='"+bz+"',spr='null',zt='0',mlh='"+mlh+"',ylz='"+ylz+"',fsfw='"+fsfw+"',jhnr='"+jhnr+"',gdcnr='"+gdcnr+"' where id='"+id+"'";

System.out.println("NUNUNUNNUNUNUU:"+sql);        	
DbTrade dbTrade=new DbTrade();

try{
dbTrade.executeUpdate(sql);

dbTrade.close();
out.print("{success:true,msg:'数据修改成功！'}");
			}catch(Exception ex)
			{
			  dbTrade.close();
			  out.print("{success:true,msg:'数据修改失败！'}");
			}
%>
