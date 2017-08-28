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
	String jhid=request.getParameter("jhid");
	String jhtype=request.getParameter("jhlb");


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

String TCWDXYY = request.getParameter("txtTCWDXYY");
	
	String AQY= request.getParameter("txtAQY");
	String CJGB= request.getParameter("txtCJGB");
	String DD= request.getParameter("txtDD");
	
	String AQYSJ= request.getParameter("txtAQYSJ");
	String CJGBSJ= request.getParameter("txtCJGBSJ");
	String DDSJ= request.getParameter("txtDDSJ");
	//DDSJ=DDSJ==" "?"":DDSJ;
	//DDSJ=DDSJ==" "?"":DDSJ;
	if(DDSJ.equalsIgnoreCase(" "))
	{
	DDSJ="";
	}else
	{
	DDSJ=DDSJ;
	}
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();

	//得到工作人员的信息

	String sql = "update z_yxgl_gzpgq_red set gzph='" + gzph
			+ "',zydd='" + zydd + "',fpr='" + FPR + "',zynr='" + ZYNR
			+ "',fpsj=to_date('" + FPRQ
			+ "','yyyy-mm-dd hh24:mi'),t_yxsj=to_date('" + YXQS
			+ "','yyyy-mm-dd hh24:mi'),e_yxsj=to_date('" + YXQZ
			+ "','yyyy-mm-dd hh24:mi'),gzldr='" + LDRXM + "',ldrdj='"
			+ LDRJB + "',cgrs='" + zrs + "',jytzt='" + JYGJZT
			+ "',aqjl='" + AQJL + "',FHCS='" + ZYQFHZS + "',aqcs='"
			+ QTAQCS + "',bgzyryjl='" + CYBGJL + "',jssj=to_date('"+GZPJSSJ
			+"','yyyy-mm-dd hh24:mi'),ldrqz='"+LDRQZ+"',fprqz='"+FPRQZ+"',TCWDXYY='"+TCWDXYY+"',AQYSJ=to_date('"+AQYSJ
			+"','yyyy-mm-dd hh24:mi'),CJGBSJ=to_date('"+CJGBSJ
			+"','yyyy-mm-dd hh24:mi'),DDSJ=to_date('"+DDSJ+"','yyyy-mm-dd hh24:mi'),AQY='"+AQY+"',CJGB='"+CJGB+"',DD='"+DD+"' where gzpid="+gzpid;

	System.out.println("red:sql:"+sql);

	if (dbconn.executeUpdate(sql)) {
		//删除作业人员，重新插入
		String delsql = "delete z_yxgl_zyry where ryb='gq_red' and  gzpid="+gzpid;
		System.out.println(delsql);
		
		 dbconn.executeUpdate(delsql);
		
	
		for (int i = 1; i < 20; i++) {
			String xm = request.getParameter("txtCY" + i);
			String jb ="111";// request.getParameter("txtAQJB" + i);
			if (!xm.equalsIgnoreCase("")&& jb != "") {//插入工作人员表 
				String sql_zyry = "insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"
						+ gzpid + "','" + xm + "','" + jb.trim() + "','gq_red')";
				dbconn.executeUpdate(sql_zyry);
			}
		}
		//关闭数据库连接
		dbconn.close();
		response.sendRedirect("../gqddzygzpsq_dd/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	}
%>
