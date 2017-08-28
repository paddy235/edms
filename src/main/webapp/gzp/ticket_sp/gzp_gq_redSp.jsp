<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
    ///获得当前用户的名字，单位id

	request.setCharacterEncoding("GBK");
	String username=session.getAttribute("userName").toString();
    String userdwid=session.getAttribute("userDwid").toString();
	String gzpid = request.getParameter("gzpid");
	System.out.println("gzpid:"+gzpid);
	String jhid=request.getParameter("jhid");
	String jhtype = "1";
 	 String del=request.getParameter("del").toString();
 	 
	System.out.println("red:del:"+del);
	String gzpzt="";
	if(del.equals("1111"))
	{
	   gzpzt="10";
	}
	else
	{
	   gzpzt="2";
	}
	String dwmc = request.getParameter("txtdwmc");

	//得到工作票的信息
	String gzph = request.getParameter("txtGZPH");
	String zydd = request.getParameter("ZYDD");
	String FPR = request.getParameter("txtFPR");
	String ZYNR = request.getParameter("txtZYNR");
	String FPRQ = request.getParameter("txtFPRQ");
	String YXQS = request.getParameter("txtYXQS");
	String YXQZ = request.getParameter("txtYXQZ");
	String LDRXM = request.getParameter("txtLDRXM");
	String LDRJB = request.getParameter("txtLDRJB");
	String zrs = request.getParameter("txtzrs");
	String JYGJZT = request.getParameter("txtJYGJZT");
	String  AQJL= request.getParameter("txtAQJL");
	String ZYQFHZS = request.getParameter("txtZYQFHZS");
	String QTAQCS = request.getParameter("txtQTAQCS");
	String CYBGJL = request.getParameter("txtCYBGJL");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ");
	String LDRQZ = request.getParameter("txtLDRQZ");
	String FPRQZ = request.getParameter("txtFPRQZ");
	String txtDD = request.getParameter("txtDD");
	String txtDDSJ = request.getParameter("txtDDSJ"); 
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
    txtDDSJ=txtDDSJ==" "?"":txtDDSJ;
	//得到工作人员的信息
String dateString = formater.format(nowDate);
	String sql = "update z_yxgl_gzpgq_red set gzph='" + gzph
			+ "',zydd='" + zydd + "',fpr='" + FPR + "',zynr='" + ZYNR
			+ "',fpsj=to_date('" + FPRQ
			+ "','yyyy-mm-dd hh24:mi'),t_yxsj=to_date('" + YXQS
			+ "','yyyy-mm-dd hh24:mi'),e_yxsj=to_date('" + YXQZ
			+ "','yyyy-mm-dd hh24:mi'),gzldr='" + LDRXM + "',ldrdj='"
			+ LDRJB + "',cgrs='" + zrs + "',jytzt='" + JYGJZT
			+ "',aqjl='" + AQJL + "',FHCS='" + ZYQFHZS + "',aqcs='"
			+ QTAQCS + "',bgzyryjl='" + CYBGJL + "',jssj=to_date('" + GZPJSSJ
			+ "','yyyy-mm-dd hh24:mi'),ldrqz='"+LDRQZ+"',fprqz='" + FPRQZ + "',gzpzt='"+gzpzt+"',DDSHY='"+username+"',SPSJ=to_date('" + dateString + "','YYYY-MM-DD HH24:MI'), DD='"+txtDD+"',DDSJ=to_date('" +txtDDSJ+ "','YYYY-MM-DD HH24:MI') where gzpid="+gzpid;

	
	System.out.println("red:gzpzt:"+sql);
	 dbconn.executeUpdate(sql);
	dbconn.close();
		response.sendRedirect("../gqddzygzpsp/gzpsp.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
%>
