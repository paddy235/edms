<%@ page language="java"contentType="text/html;charset=GBK"pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}

	request.setCharacterEncoding("GBK");
	String jhid = request.getParameter("jhid");
     String jhtype=request.getParameter("jhlb");
	String dwid =session.getAttribute("userDwid").toString();// "0101010101";
	String dwmc =request.getParameter("txtdwmc"); //session.getAttribute("gqmc").toString();// "长沙分区亭";

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
	
	//得到工作人员的信息
	

	String sql = "insert into z_yxgl_dzzyp (GZPID,DWID,DWMC,GZPH,ZYMD,ZYGJ,YXQS,YXQZ,ZYCX,DZZ,DZZQZ,QFRQZ,gzpzt,DDSHY,SPSJ) values(z_yxgl_dzzyp_SEQ.Nextval,'"+dwid+"','"+dwmc
	+"','"+gzph+"','"+ZYMD+"','"+ZYGJ+"',to_date('"+YXQS+"','yyyy-mm-dd hh24:mi'),to_date('"+YXQZ+"','yyyy-mm-dd hh24:mi'),'"+ZYCX+"','"+DZZ+"','"+DZZQZ+"','"+QFRQZ+"','100','',to_date('','yyyy-mm-dd hh24:mi'))";
			System.out.println("TTTTT:"+sql);
	dbconn.executeUpdate(sql); 
        //关闭数据库连接
        dbconn.close();
		response.sendRedirect("../dzzypsq_dd/dzzysq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+" "+"&jhnr="+" ");
	
%>
