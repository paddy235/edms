<%@ page language="java"contentType="text/html;charset=GBK"pageEncoding="GBK" %>
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
	String dwmc =session.getAttribute("gqmc").toString();// "长沙分区亭";
	System.out.println("OPOPOPOP");
	
	
	
	
	
	//session.setAttribute("userName","赵文甫");
//session.setAttribute("userDwid","170100101");

	//得到工作票的信息
	
	String gzph = request.getParameter("txtGZPH");
	String ZYDDNR = request.getParameter("txtZYDDNR");
	
	String Fprq = request.getParameter("txtFprq");
	String FBR = request.getParameter("txtFBR");
	
	String GZSJQ = request.getParameter("inputGZSJQ");
	String GZSJZ = request.getParameter("inputGZSJZ");
	
	String LDRXM = request.getParameter("txtLDRXM");
	String LDRJB = request.getParameter("txtLDRJB").trim();
	
	String cyTotal = request.getParameter("cyTotal").trim();
	String AQCS = request.getParameter("txtAQCS");
	String YZAQCS = request.getParameter("txtYZAQCS");
	
	String AQCS1 = request.getParameter("txtAQCS1");
	String YZAQCS1 = request.getParameter("txtYZAQCS1");
	
	String GZS = request.getParameter("txtGZS");
	String GZZ = request.getParameter("txtGZZ");
	GZZ="2014-04-26 03:34";
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
	
	
		String WLLDRXM=request.getParameter("txtWLLDRXM");
	String WLLDRJB=request.getParameter("txtWLLDRJB").trim();
	String BDSJHR=request.getParameter("txtBDSJHR");
	String BGFBR1=request.getParameter("txtBGFBR1");
	    System.out.println("WLLDRJB"+WLLDRJB+"WLLDRJB");
	    String tt=request.getParameter("tt");
	    System.out.println("tt"+tt+"tt");

	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
	
	//得到工作人员的信息
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
	

	String sql = "update z_yxgl_gzpbds_black set gzph='"+gzph+"',zyddjnr='"+ZYDDNR+"',fpsj=to_date('"+Fprq
	+"','yyyy-mm-dd hh24:mi'),fpr='"+FBR
	+"',ksyxsj=to_date('"+GZSJQ
	+"','yyyy-mm-dd hh24:mi'),jsyxsj=to_date('"+GZSJZ
	+"','yyyy-mm-dd hh24:mi'), gzldr='"+LDRXM
	+"',ldrdj='"+LDRJB+"',cgrs='"+cyTotal+"',cqaqcs='"+AQCS+"',wcaqcs='"+YZAQCS+"',zykssj=to_date('"+GZS+"','yyyy-mm-dd hh24:mi'),zyjssj=to_date('"+GZZ+"','yyyy-mm-dd hh24:mi'),zyzbyqz='"+ZBY+"',ksgzsj=to_date('"+
	GZZXSJ+"','yyyy-mm-dd hh24:mi'),ksgzldrqz='"+GZLDR+"',zyrybgjl='"+BGJL+"',bgfprqz='"+BGFBR+"',bgldrqz='"+BGLDR+"',jssj=to_date('"+JSSJ+"','yyyy-mm-dd hh24:mi'),jsldrqz='"+JSLDR+"',gzpjssj=to_date('"+
	ZYQL+"','yyyy-mm-dd hh24:mi'),zbyqz='"+ZYQLZBY+"',gzpzt='0',zynr='"+ZYDDNR
	+"',AQCS1='"+AQCS1+"',YZAQCS1='"+YZAQCS1+"',WLLDRXM='"+WLLDRXM+"',WLLDRJB='"+WLLDRJB
	+"',BDSJHR='"+BDSJHR+"',BGFBR1='"+BGFBR1+"' where gzpid='"+gzpid+"'";
			
    System.out.println(sql);

	if (dbconn.executeUpdate(sql)) {
		//删除作业人员，重新插入
		String delsql = "delete z_yxgl_zyry where ryb='bds_black' and  gzpid="+gzpid;
		System.out.println(delsql);
		
		 dbconn.executeUpdate(delsql);
	
		for (int i = 1; i < 16; i++) {
			String xm = request.getParameter("cy" + i);
			String jb ="111";// request.getParameter("Aqdj" + i);
			System.out.println(xm + ":" + jb + "    ");
			if (!xm.equalsIgnoreCase("")&& jb != "") {//插入工作人员表
				
				String sql_zyry = "insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"
						+ gzpid + "','" + xm + "','" + jb.trim() + "','bds_black')";
				dbconn.executeUpdate(sql_zyry);
			}
		}
		//关闭数据库连接
		dbconn.close();
		response.sendRedirect("../bdsdszgzpsq/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	}
%>
