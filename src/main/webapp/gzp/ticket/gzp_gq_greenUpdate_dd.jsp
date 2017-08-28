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
	String jhid=request.getParameter("jhid");
	String jhtype=request.getParameter("jhlb");
    System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^66"+jhtype);

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
	String XTDSB = request.getParameter("txtXTDSB");
	String ZSJDXWZ = request.getParameter("txtZSJDXWZ");
	String ZYQFHZS = request.getParameter("txtZYQFHZS");
	String QTAQCS = request.getParameter("txtQTAQCS");
	String CYBGJL = request.getParameter("txtCYBGJL");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ");
	String LDRQZ = request.getParameter("txtLDRQZ");
	String FPRQZ = request.getParameter("txtFPRQZ");
	String TCWDXYY = request.getParameter("txtTCWDXYY");
	
	String AQY= request.getParameter("txtAQY");
	String CJGB= request.getParameter("txtCJGB");
	String DD= request.getParameter("txtDD");
	
	String AQYSJ= request.getParameter("txtAQYSJ");
	System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+AQYSJ);
	String CJGBSJ= request.getParameter("txtCJGBSJ");
	System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"+CJGBSJ);
	String DDSJ= request.getParameter("txtDDSJ");
	System.out.println("**********************************"+DDSJ);
	
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
    DbTrade dbconn1 = new DbTrade();
	//得到工作人员的信息
	System.out.println("--------------------------------------"+YXQS);
	 if (FPRQ.equals(" ")) {  
		FPRQ = "''";
	} else {
		FPRQ = "to_date('" + FPRQ + "','YYYY-MM-DD HH24:MI')";
	}
   if (YXQS.equals(" ")) {
		YXQS = "''";
	} else {
		YXQS = "to_date('" + YXQS + "','YYYY-MM-DD HH24:MI')";
	}
	if (YXQZ.equals(" ")) {
		YXQZ = "''";
	} else {
		
		YXQZ = "to_date('" + YXQZ + "','YYYY-MM-DD HH24:MI')";
	}
    if (GZPJSSJ.equals(" ")) {
		GZPJSSJ = "''";
	} else {
		GZPJSSJ = "to_date('" + GZPJSSJ + "','YYYY-MM-DD HH24:MI')";
	}
    if (AQYSJ.equals(" ")) {
		AQYSJ = "''";
	} else {
		AQYSJ = "to_date('" + AQYSJ + "','YYYY-MM-DD HH24:MI')";
	}
	if (CJGBSJ.equals(" ")) {
		CJGBSJ = "''";
	} else {
		CJGBSJ = "to_date('" + CJGBSJ + "','YYYY-MM-DD HH24:MI')";
	}
	if (DDSJ.equals(" ")) {
		DDSJ = "''";
	} else {
		DDSJ = "to_date('" + DDSJ + "','YYYY-MM-DD HH24:MI')";
	}
	String sql = "update z_yxgl_gzpgq_green set gzph='" + gzph
			+ "',zydd='" + zydd + "',fpr='" + FPR + "',zynr='" + ZYNR
			+ "',fpsj="+FPRQ+",t_yxsj=" + YXQS
			+ ",e_yxsj=" + YXQZ
			+ ",gzldr='" + LDRXM + "',ldrdj='"
			+ LDRJB + "',cgrs='" + zrs + "',tdsb='" + XTDSB
			+ "',JDXWZ='" + ZSJDXWZ + "',FHCS='" + ZYQFHZS + "',aqcs='"
			+ QTAQCS + "',bgzyryjl='" + CYBGJL + "',jssj=" + GZPJSSJ
			+ ",ldrqz='"+LDRQZ+"',fprqz='" + FPRQZ + "',TCWDXYY='"+TCWDXYY+"',AQYSJ="+AQYSJ+",CJGBSJ="+CJGBSJ+",DDSJ="+DDSJ+",AQY='"+AQY+"',CJGB='"+CJGB+"',DD='"+DD+"' where gzpid="+gzpid;

	System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%"+sql);

	dbconn.executeUpdate(sql);
		//删除作业人员，重新插入
		String delsql = "delete z_yxgl_zyry where ryb='gq_green' and gzpid="+gzpid;
		System.out.println(delsql);
		
		 dbconn1.executeUpdate(delsql);
		
	
		for (int i = 1; i < 20; i++) {
			String xm = request.getParameter("txtCY" + i);
			String jb="111";//request.getParameter("txtAQJB"+i); 
			if (!xm.equalsIgnoreCase("")&& jb != "") {//插入工作人员表
				System.out.println(xm + ":" + jb + "    ");
				String sql_zyry = "insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"
						+ gzpid + "','" + xm + "','" + jb.trim() + "','gq_green')";
				dbconn.executeUpdate(sql_zyry);
			}
		}
		//关闭数据库连接
		dbconn.close();
		dbconn1.close();
		response.sendRedirect("../gqtdzygzpsq_dd/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+" "+"&jhnr="+" ");
	
%>
