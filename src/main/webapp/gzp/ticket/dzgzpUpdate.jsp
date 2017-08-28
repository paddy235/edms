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
    System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^66:"+gzpid);

	//得到工作票的信息
	String gzph = request.getParameter("txtGZPH");
		String ZYMD = request.getParameter("ZYMD");
	String ZYGJ = request.getParameter("ZYGJ");

	String YXQS = request.getParameter("txtYXQS");
	String YXQZ = request.getParameter("txtYXQZ");
	String ZYCX = request.getParameter("txtZYCX");
	
	String DZZ = request.getParameter("txtDZZ");
	String DZZQZ = request.getParameter("txtDZZQZ");
	String QFRQZ = request.getParameter("txtQFRQZ"); 
	
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
    DbTrade dbconn1 = new DbTrade();
	//得到工作人员的信息
	System.out.println("--------------------------------------"+YXQS);
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
	String sql = "update z_yxgl_dzzyp set gzph='"+gzph+"',ZYMD='"+ZYMD
	+"',ZYGJ='"+ZYGJ
	+"',YXQS="+YXQS
	+",YXQZ="+YXQZ
	+",ZYCX='"+ZYCX
	+"',DZZ='"+DZZ
	+"',DZZQZ='"+DZZQZ
	+"',QFRQZ='"+QFRQZ
	+"' where gzpid="+gzpid;

	System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%"+sql);

	dbconn.executeUpdate(sql);
		 
		//关闭数据库连接
		dbconn.close();
		 
		response.sendRedirect("../dzzypsq/dzzysq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+" "+"&jhnr="+" ");
	
%>
