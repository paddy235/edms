<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
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
	System.out.println("gzpid:" + gzpid);
	String jhid = request.getParameter("jhid");
	String jhtype = request.getParameter("jhlb");

	//�õ�����Ʊ����Ϣ
	System.out.println("66666");
	String gzph = request.getParameter("txtGZPH");
	String ZYDDNR = request.getParameter("txtZYDDNR");
	System.out.println("zydd:zydd:" + ZYDDNR);
	String GZSJQ = request.getParameter("txtGZSJQ");
	String GZSJZ = request.getParameter("txtGZSJZ");
	String LDRXM = request.getParameter("LDRXM");
	String LDRJB = request.getParameter("LDRJB").trim();
	String AQJCY = request.getParameter("txtAQJCY");
	String CGZRS = request.getParameter("cyTotal").trim();

	String DKGH = request.getParameter("txtDKGH");
	String JDXWZ = request.getParameter("txtJDXWZ");
	String BSPWZ = request.getParameter("txtBSPWZ");
	String DDSB = request.getParameter("txtDDSB");
	String AQCS = request.getParameter("txtAQCS");

	String YDKGH = request.getParameter("txtYDKGH");
	String YJDXWZ = request.getParameter("txtYJDXWZ");
	String YBSPWZ = request.getParameter("txtYBSPWZ");
	String YDDSB = request.getParameter("txtYDDSB");
	String YAQCS = request.getParameter("txtYAQCS");

	String FPRQ = request.getParameter("txtFPRQ").trim();
	String FBR = request.getParameter("txtFBR");
	String DDMLH = request.getParameter("txtDDMLH");
	String ZYKSSJ = request.getParameter("txtZYKSSJ").trim();

	String ZYJSSJ = request.getParameter("txtZYJSSJ").trim();;
	String ZYZBYQZ = request.getParameter("txtZYZBYQZ");
	String KSGZSJ = request.getParameter("txtKSGZSJ").trim();;
	String KSGZLDRQZ = request.getParameter("txtKSGZLDRQZ");
	String BGJL = request.getParameter("txtBGJL");
	String BGFPRQZ = request.getParameter("txtBGFPRQZ");

	String BGLDRQZ = request.getParameter("txtBGLDRQZ");
	String GDDDY = request.getParameter("txtGDDDY");
	String YCSJ = request.getParameter("txtYCSJ").trim();;
	String YCZBYQZ = request.getParameter("txtYCZBYQZ");
	String YCLDRQZ = request.getParameter("txtYCLDRQZ");

	String JSSJ = request.getParameter("txtJSSJ").trim();;
	String JSLDRQZ = request.getParameter("txtJSLDRQZ");
	String JDXZ = request.getParameter("txtJDXZ");
	String JDXG = request.getParameter("txtJDXG");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ").trim();;
	String ZBYQZ_E = request.getParameter("txtZBYQZ_E");


	String RWLY = request.getParameter("txtRWLY");
	String WLLDRXM = request.getParameter("txtWLLDRXM");
	String WLLDRXMDJ = request.getParameter("txtWLLDRJB");
	String AQCSZBY = request.getParameter("txtAQCSZBY");
	String AQCSLDR = request.getParameter("txtAQCSZBY");
	String BDJHR = request.getParameter("txtBDSJHR1");
	String BDJHR1 = request.getParameter("txtBDSJHR2");
	String BDJHR2 = request.getParameter("txtBDSJHR3");
	String BDJHR3 = request.getParameter("txtBDSJHR4");


	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();

	System.out.println("66666-----"+FPRQ+"-----66666");
	//�õ�������Ա����Ϣ
	if(GZSJQ.equals(" "))
	{
	  GZSJQ="";
	}
	if(GZSJZ.equals(" "))
	{
	  GZSJZ="";
	}
	if(FPRQ.equals(" "))
	{
	  FPRQ="";
	}
	if(ZYKSSJ.equals(" "))
	{
	  ZYKSSJ="";
	}
	if(ZYJSSJ.equals(" "))
	{
	  ZYJSSJ="";
	}
	if(KSGZSJ.equals(" "))
	{
	  KSGZSJ="";
	}
	if(YCSJ.equals(" "))
	{
	  YCSJ="";
	}
	if(JSSJ.equals(" "))
	{
	  JSSJ="";
	}
	if(GZPJSSJ.equals(" "))
	{
	  GZPJSSJ="";
	}
	if(GZSJQ.trim().equals(""))
	{
	  GZSJQ="";
	}
		if(GZSJZ.trim().equals(""))
	{
	  GZSJZ="";
	}
	String sql = "update z_yxgl_gzpBds_green set gzph='" + gzph
			+ "',zynr='" + ZYDDNR + "',ksyxsj=to_date('" + GZSJQ
			+ "','yyyy-mm-dd hh24:mi'),jsyxsj=to_date('" + GZSJZ
			+ "','yyyy-mm-dd hh24:mi'),gzldr='" + LDRXM + "',ldrdj='"
			+ LDRJB + "',aqjcy='" + AQJCY + "',cgrs='" + CGZRS
			+ "',cq_dlqhkg='" + DKGH + "',cq_jdxwz='" + JDXWZ
			+ "',cq_bspwz='" + BSPWZ + "',cq_ydsb='" + DDSB
			+ "',cq_qtaqcs='" + AQCS + "',wc_dlqhkg='" + YDKGH
			+ "',wc_jdxwz='" + YJDXWZ + "',wc_bspwz='" + YBSPWZ
			+ "',wc_ydsb='" + YDDSB + "',wc_qtaqcs='" + YAQCS
			+ "',fpsj=to_date('" + FPRQ
			+ "','yyyy-mm-dd hh24:mi'),fpr='" + FBR + "',gjmlh='"
			+ DDMLH + "',zygzsj=to_date('" + ZYKSSJ
			+ "','yyyy-mm-dd hh24:mi'),qygzsj=to_date('" + ZYJSSJ
			+ "','yyyy-mm-dd hh24:mi'),ZYZBYQZ='" + ZYZBYQZ
			+ "',ksgzsj=to_date('" + KSGZSJ
			+ "','yyyy-mm-dd hh24:mi'),ksgzldrqz='" + KSGZLDRQZ
			+ "',zyrybgjl='" + BGJL + "',rybgfqrqz='" + BGFPRQZ
			+ "',rybgldrqz='" + BGLDRQZ + "',ddyxm='" + GDDDY
			+ "',ycdsj=to_date('" + YCSJ
			+ "','yyyy-mm-dd hh24:mi'),yczbyqz='" + YCZBYQZ
			+ "',ycgzldrqz='" + YCLDRQZ + "',wcsj=to_date('" + JSSJ
			+ "','yyyy-mm-dd hh24:mi'),wcgzldrqz='" + JSLDRQZ
			+ "',jdxzs='" + JDXZ + "',jdxgs='" + JDXG
			+ "',jssj=to_date('" + GZPJSSJ
			+ "','yyyy-mm-dd hh24:mi'),zbrqz='" + ZBYQZ_E
			+ "',RWLY='"+RWLY+"',WLLDRXM='"+WLLDRXM+"',WLLDRXMDJ='"+WLLDRXMDJ
			+"',AQCSZBY='"+AQCSZBY+"',AQCSLDR='"+AQCSLDR+"',BDJHR='"+BDJHR+"',BDJHR1='"+BDJHR1+"',BDJHR2='"+BDJHR2+"',BDJHR3='"+BDJHR3+"' where gzpid=" + gzpid;

	System.out.println("red:sql:" + sql);

	dbconn.executeUpdate(sql);
	//ɾ����ҵ��Ա�����²���
	String delsql = "delete z_yxgl_zyry where ryb='bds_green' and  gzpid="
			+ gzpid;
	System.out.println(delsql);

	dbconn.executeUpdate(delsql);

	for (int i = 1; i < 26; i++) {
		String xm = request.getParameter("cy" + i);
		String jb ="111";// request.getParameter("Aqdj" + i);
		if (!xm.equalsIgnoreCase("")&& jb != "") {//���빤����Ա��
		 
			String sql_zyry = "insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"
					+ gzpid
					+ "','"
					+ xm
					+ "','"
					+ jb.trim()
					+ "','bds_green')";
			dbconn.executeUpdate(sql_zyry);
		}
	}
	//�ر����ݿ�����
	dbconn.close();
	response.sendRedirect("../bdsdyzgzpsq_dd/gzpsq.jsp?myid=" + jhid
			+ "&jhtype=" + jhtype);
%>
