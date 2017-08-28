<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
	//String start = request.getParameter("start");
	//String limit = request.getParameter("limit");
	//String education = request.getParameter("action");
	///获得当前用户的名字，单位id
    String username=session.getAttribute("userName").toString();
    String userdwid=session.getAttribute("userDwid").toString();
	 String del=request.getParameter("del").toString();
	String gzpzt="";
	if(del.equals("11"))
	{
	   gzpzt="10";
	}
	else
	{
	   gzpzt="2";
	}
		System.out.println("asddddddddddddddddddddddd   "+del);
	request.setCharacterEncoding("GBK");
	String gzpid = request.getParameter("gzpid");
	String jhid=request.getParameter("jhid");
	String jhtype = "0";
	String dwid = "0101010101";
	String dwmc = request.getParameter("txtdwmc");
  
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
    DbTrade dbconn1 = new DbTrade();
	 String dateString = formater.format(nowDate);
	String sql = "update z_yxgl_dzzyp set gzpzt='"+gzpzt+"',DDSHY='"+username+"',SPSJ=to_date('" + dateString + "','YYYY-MM-DD HH24:MI') where gzpid="+gzpid;

	System.out.println(sql);

	if (dbconn.executeUpdate(sql)) {
		dbconn.close(); 
		response.sendRedirect("../dzzypsp/dzzysp.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	}
%>
