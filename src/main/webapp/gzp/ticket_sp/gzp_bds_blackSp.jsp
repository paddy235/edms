<%@ page language="java"contentType="text/html;charset=GBK"pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
	//String start = request.getParameter("start");
	//String limit = request.getParameter("limit");
	//String education = request.getParameter("action");
	request.setCharacterEncoding("GBK");
	String gzpid = request.getParameter("gzpid");
	System.out.println("gzpid:"+gzpid);
	String jhid = request.getParameter("jhid");
	String jhtype=request.getParameter("jhlb");
	String dwid =session.getAttribute("userDwid").toString();// "0101010101";
	String dwmc =session.getAttribute("gqmc").toString();// "��ɳ����ͤ";
	
	
	
	
	
	//session.setAttribute("userName","���ĸ�");
//session.setAttribute("userDwid","170100101");

	//�õ�����Ʊ����Ϣ
	
	String gzph = request.getParameter("txtGZPH");
	String ZYDDNR = request.getParameter("txtZYDDNR");
	
	String Fprq = request.getParameter("txtFprq");
	String FBR = request.getParameter("txtFBR");
	
	String GZSJQ = request.getParameter("inputGZSJQ");
	String GZSJZ = request.getParameter("inputGZSJZ");
	
	String LDRXM = request.getParameter("txtLDRXM");
	String LDRJB = request.getParameter("txtLDRJB");
	
	String cyTotal = request.getParameter("cyTotal");
	String AQCS = request.getParameter("txtAQCS");
	String YZAQCS = request.getParameter("txtYZAQCS");
	
	String GZS = request.getParameter("txtGZS");
	String GZZ = request.getParameter("txtGZZ");
	
	String ZBY = request.getParameter("txtZBY");
	String GZZXSJ = request.getParameter("txtGZZXSJ");
	
	
	String GZLDR = request.getParameter("txtGZLDR");
	String BGJL = request.getParameter("txtBGJL");
	
	String BGFBR = request.getParameter("txtBGFBR");
	String BGLDR = request.getParameter("txtBGLDR");
	
	
	String JSSJ = request.getParameter("txtJSSJ");
	String JSLDR = request.getParameter("txtJSLDR");
	
	
	String ZYQL = request.getParameter("txtZYQL");
	String ZYQLZBY = request.getParameter("txtZYQLZBY");
	
	
		//�õ�������Ա����Ϣ
	if(Fprq.equals(" "))
	{
	   Fprq="";
	}
	if(GZSJQ.equals(" "))
	{
	   GZSJQ="";
	}
	if(GZSJZ.equals(" "))
	{
	   GZSJZ="";
	}
	if(GZS.equals(" "))
	{
	   GZS="";
	}
	if(GZZ.equals(" "))
	{
	   GZZ="";
	}
	if(GZZXSJ.equals(" "))
	{
	   GZZXSJ="";
	}
	if(JSSJ.equals(" "))
	{
	   JSSJ="";
	}
	if(ZYQL.equals(" "))
	{
	   ZYQL="";
	}
	

	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
	
	//�õ�������Ա����Ϣ
	

	String sql = "update z_yxgl_gzpbds_black set gzpzt='2' where gzpid='"+gzpid+"'";
			
   System.out.println(sql);

	dbconn.executeUpdate(sql);
		//ɾ����ҵ��Ա�����²���
		String delsql = "update z_yxgl_zyry where ryb='bds_black' and  gzpid="+gzpid;
		System.out.println(delsql);
		
		 dbconn.executeUpdate(delsql);
	
	 
		//�ر����ݿ�����
		dbconn.close();
		response.sendRedirect("../gzpsp/gzpsp.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	
%>
