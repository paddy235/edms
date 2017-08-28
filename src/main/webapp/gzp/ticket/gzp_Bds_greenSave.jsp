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
	String jhid = request.getParameter("jhid");
	String jhtype=request.getParameter("jhlb");
	String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);   
}
	String dwid =session.getAttribute("userDwid").toString();// "0101010101";
	String dwmc =session.getAttribute("gqmc").toString();// "长沙分区亭";
	//System.out.println("jhtype:OOOOOOOOOOOOOOOOOOOO"+jhtype);
	//System.out.println("dwid:"+dwid+"   dwmc:"+dwmc);
	
	
	
	
	

//

	//得到工作票的信息
	
	String gzph = request.getParameter("txtGZPH");
	String ZYDDNR = request.getParameter("txtZYDDNR");
	
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
	
	
	
	
	String FPRQ = request.getParameter("txtFPRQ");
	String FBR = request.getParameter("txtFBR");
	String DDMLH = request.getParameter("txtDDMLH");
	String ZYKSSJ = request.getParameter("txtZYKSSJ");
	
	//System.out.println("fprqfprq((((((("+FPRQ);
	
	String ZYJSSJ = request.getParameter("txtZYJSSJ");
	String ZYZBYQZ = request.getParameter("txtZYZBYQZ");
	String KSGZSJ = request.getParameter("txtKSGZSJ");
	String KSGZLDRQZ = request.getParameter("txtKSGZLDRQZ");
	String BGJL = request.getParameter("txtBGJL");
	String BGFPRQZ = request.getParameter("txtBGFPRQZ");
	
	
	String BGLDRQZ = request.getParameter("txtBGLDRQZ");
	String GDDDY = request.getParameter("txtGDDDY");
	String YCSJ = request.getParameter("txtYCSJ");
	String YCZBYQZ = request.getParameter("txtYCZBYQZ");
	String YCLDRQZ = request.getParameter("txtYCLDRQZ");
	
	String JSSJ = request.getParameter("txtJSSJ");
	String JSLDRQZ = request.getParameter("txtJSLDRQZ");
	String JDXZ = request.getParameter("txtJDXZ");
	String JDXG = request.getParameter("txtJDXG");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ");
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
	
	//得到工作人员的信息
	

	String sql = "insert into z_yxgl_gzpbds_green values(z_yxgl_gzpbds_greensq.nextval,'"
			+ jhid
			+ "','停电作业','"
			+ dwid
			+ "','"
			+ dwmc
			+ "','"
			+ gzph
			+ "','"
			+ ZYDDNR
			+ "',to_date('"
			+ GZSJQ
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ GZSJZ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ LDRXM
			+ "','"
			+ LDRJB
			+ "','"
			+ AQJCY
			+ "','"
			+ CGZRS
			+ "','"
			+ DKGH
			+ "','"
			+ JDXWZ
			+ "','"
			+ BSPWZ
			+ "','"
			+ DDSB
			+ "','"
			+ AQCS
			+ "','"
			+ YDKGH
			+ "','"
			+ YJDXWZ
			+ "','"
			+ YBSPWZ
			+ "','"
			+ YDDSB
			+ "','"
			+ YAQCS
			+ "',to_date('"
			+ FPRQ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ FBR
			+ "','"
			+ DDMLH
			+ "',to_date('"
			+ ZYKSSJ
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ ZYJSSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ ZYZBYQZ
			+ "',to_date('"
			+ KSGZSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ KSGZLDRQZ
			+ "','"
			+ BGJL
			+ "','"
			+ BGFPRQZ
			+ "','"
			+ BGLDRQZ
			+ "','"
			+ GDDDY
			+ "',to_date('"
			+ YCSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ YCZBYQZ
			+ "','"
			+ YCLDRQZ
			+ "',to_date('"
			+ JSSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ JSLDRQZ
			+ "','"
			+ JDXZ
			+ "','"
			+ JDXG
			+ "',to_date('"
			+ GZPJSSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ ZBYQZ_E
			+ "','0',to_date('"
			+ formater.format(nowDate)
			+ "','yyyy-mm-dd hh24:mi'),'0','"+RWLY+"','"+WLLDRXM+"','"+WLLDRXMDJ
			+"','"+AQCSZBY+"','"+AQCSLDR+"','"+BDJHR+"','"+BDJHR1+"','"+BDJHR2+"','"+BDJHR3+"','',to_date('','yyyy-mm-dd hh24:mi'))";
	//System.out.println(sql);

	dbconn.executeUpdate(sql);
		//得到最大的工作票id
		String sql_max = "select max(gzpid) from z_yxgl_gzpbds_green";
		ResultSet resultSet = dbconn.executeQuery(sql_max);
		String maxid = "";
		try {
			while (resultSet.next()) {

				maxid = String.valueOf(resultSet.getInt(1));
			}
		} catch (Exception ex) {
		}
        for(int i=1;i<26;i++)
        {
            String xm = request.getParameter("cy"+i);
            String jb="111";//request.getParameter("Aqdj"+i);
            if(!xm.equalsIgnoreCase(""))
            {//插入工作人员表 
          //    System.out.println(xm+":"+jb+"    ");
              String sql_zyry="insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"+maxid+"','"+xm+"','"+jb.trim()+"','bds_green')";
              dbconn.executeUpdate(sql_zyry);
            }
        }
        //关闭数据库连接
        dbconn.close();
		response.sendRedirect("../bdsdyzgzpsq/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	
%>
