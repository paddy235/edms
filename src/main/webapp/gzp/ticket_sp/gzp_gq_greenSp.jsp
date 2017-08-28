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

	 String del=request.getParameter("del").toString();
	String gzpzt="";
	if(del.equals("1"))
	{
	   gzpzt="10";
	}
	else
	{
	   gzpzt="2";
	}
		
	String txtDD1 = new String(request.getParameter("txtDD").getBytes("ISO-8859-1"),"GBK");
	request.setCharacterEncoding("GBK");
	String username=session.getAttribute("userName").toString();
    String userdwid=session.getAttribute("userDwid").toString();
	String gzpid = request.getParameter("gzpid");
	String jhid=request.getParameter("jhid");
	String jhtype = "0";
	String dwid = "0101010101";
	String dwmc = request.getParameter("txtdwmc");

	//得到工作票的信息 
	String YXQS = request.getParameter("txtYXQS");
	String YXQZ = request.getParameter("txtYXQZ"); 
	//String txtDD1 = request.getParameter("txtDD");
	String txtDDSJ = request.getParameter("txtDDSJ");  
	if (txtDDSJ.equals(" ")) { 
		txtDDSJ = "''";
	} else {
		txtDDSJ = "to_date('" + YXQS + "','YYYY-MM-DD HH24:MI')";
	}
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
    DbTrade dbconn1 = new DbTrade();
	//得到工作人员的信息
   if (YXQS.equals(" ")) {
       System.out.println("))))))))))))))))))))))))))))))))))))))))))))))))))");
		YXQS = "''";
	} else {
		YXQS = "to_date('" + YXQS + "','YYYY-MM-DD HH24:MI')";
	}
	if (YXQZ.equals(" ")) {
		YXQZ = "''";
	} else { 
		YXQZ = "to_date('" + YXQZ + "','YYYY-MM-DD HH24:MI')";
	} 
	String dateString = formater.format(nowDate);
	String sql = "update z_yxgl_gzpgq_green set DD='"+txtDD1+"',DDSJ="+txtDDSJ+", gzpzt='"+gzpzt+"' ,DDSHY='"+username+"',SPSJ=to_date('" + dateString + "','YYYY-MM-DD HH24:MI') where gzpid="+gzpid;

	System.out.println(sql);

	if (dbconn.executeUpdate(sql)) { 
		dbconn.close(); 
		response.sendRedirect("../gqtdzygzpsp/gzpsp.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	}
%>
