<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
	//String start = request.getParameter("start");
	//String limit = request.getParameter("limit");
	//String education = request.getParameter("action");
	String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
	request.setCharacterEncoding("GBK");
	String jhid = request.getParameter("jhid");
	String jhtype=request.getParameter("jhlb");
	String dwid =session.getAttribute("userDwid").toString();// "0101010101";
	String dwmc =session.getAttribute("gqmc").toString();// "长沙分区亭";
	
	 

	//得到工作票的信息
	
	String gzph = request.getParameter("txtGZPH");
	String ZYDDNR = request.getParameter("txtZYDDNR");
	
	String Fprq = request.getParameter("txtFprq").trim();
	String FBR = request.getParameter("txtFBR");
	
	String GZSJQ = request.getParameter("inputGZSJQ");
	String GZSJZ = request.getParameter("inputGZSJZ");
	
	String LDRXM = request.getParameter("txtLDRXM");
	String LDRJB = request.getParameter("txtLDRJB").trim();
		System.out.println("LDRJB:"+LDRJB);
	String cyTotal = request.getParameter("cyTotal").trim();
	String AQCS = request.getParameter("txtAQCS");
	String YZAQCS = request.getParameter("txtYZAQCS");
	String AQCS1 = request.getParameter("txtAQCS1");
	String YZAQCS1 = request.getParameter("txtYZAQCS1");
	String GZS = request.getParameter("txtGZS");
	String GZZ = request.getParameter("txtGZZ");
	GZZ="2014-04-26 03:34";
	String ZBY = request.getParameter("txtZBY");
	String GZZXSJ = request.getParameter("txtGZZXSJ").trim();
	
	
	String GZLDR = request.getParameter("txtGZLDR");
	String BGJL = request.getParameter("txtBGJL");
	
	String BGFBR = request.getParameter("txtBGFBR");
	String BGLDR = request.getParameter("txtBGLDR");
	
	
	String JSSJ = request.getParameter("txtJSSJ").trim();
	String JSLDR = request.getParameter("txtJSLDR"); 
	
	String ZYQL = request.getParameter("txtZYQL");
	String ZYQLZBY = request.getParameter("txtZYQLZBY");
	
	String WLLDRXM=request.getParameter("txtWLLDRXM");
	String WLLDRJB=request.getParameter("txtWLLDRJB").trim();
	String BDSJHR=request.getParameter("txtBDSJHR");
	String BGFBR1=request.getParameter("txtBGFBR1");
	
	

	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
	
	//得到工作人员的信息
	

	String sql = "insert into z_yxgl_gzpbds_black values(z_yxgl_gzpbds_blacksq.nextval,'"
			+ dwid
			+ "','"
			+ dwmc
			+ "','"
			+ gzph
			+ "','"
			+ ZYDDNR
			+ "',to_date('"
			+ Fprq
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ FBR
			+ "',to_date('"
			+ GZSJQ
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ GZSJZ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ LDRXM
			+ "','"
			+ LDRJB
			+ "','"
			+ cyTotal
			+ "','"
			+ AQCS
			+ "','"
			+ YZAQCS
			+ "',to_date('"
			+ GZS
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ GZZ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ ZBY
			+ "',to_date('"+GZZXSJ+"','yyyy-mm-dd hh24:mi'),'"
			+ GZLDR
			+ "','"
			+ BGJL
			+ "','"+BGFBR+"','"+BGLDR+"',to_date('"
			+ JSSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ JSLDR
			+ "',to_date('"+JSSJ+"','yyyy-mm-dd hh24:mi'),'"+ZYQLZBY+"',to_date('"
			+ formater.format(nowDate)
			+ "','yyyy-mm-dd hh24:mi'),'"+jhid+"','停电作业','0','0','"+ZYDDNR+"','"+WLLDRXM+"','"+BDSJHR+"','"+BDSJHR+"','"+BGFBR1+"','"+AQCS1+"','"+YZAQCS1+"')";


	dbconn.executeUpdate(sql);
		//得到最大的工作票id
		String sql_max = "select max(gzpid) from z_yxgl_gzpbds_black";
		ResultSet resultSet = dbconn.executeQuery(sql_max);
		String maxid = "";
		try {
			while (resultSet.next()) {

				maxid = String.valueOf(resultSet.getInt(1));
			}
		} catch (Exception ex) {
		}
        for(int i=1;i<16;i++)
        {
            String xm = request.getParameter("cy"+i);
            String jb="111";//request.getParameter("Aqdj"+i); 
            if(!xm.equalsIgnoreCase(""))
            {//插入工作人员表
              String sql_zyry="insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"+maxid+"','"+xm+"','"+jb+"','bds_black')";
              System.out.println(sql_zyry);
              dbconn.executeUpdate(sql_zyry);
            }
        }
        //关闭数据库连接
        dbconn.close();
		response.sendRedirect("../bdsdszgzpsq/gzpsq.jsp?myid=" + jhid + "&jhtype=" + jhtype); 
%>
