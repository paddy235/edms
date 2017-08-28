<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String id = request.getParameter("yy_id");
String yymc = new String(request.getParameter("yymc_id").getBytes("ISO8859-1"),"GB2312");
String yylx = request.getParameter("yylx_id");
String yyms = new String(request.getParameter("yyms_id").getBytes("ISO8859-1"),"GB2312"); 
String yylj = new String(request.getParameter("yylj_id").getBytes("ISO8859-1"),"GB2312");
String Name="";
String sql_Upd="";
try {
	int num=yylj.lastIndexOf("\\");
	if(num>1)
   	{
		String SavePath="dxsg\\vedio\\";//用于存放上传文件的目录;
		Name = new UpLoadFile().FileUpload(request,SavePath,id);
		sql_Upd="update z_dxsg_sgyy set yymc='"+yymc+"',yylx='"+yylx+"',yyms='"+yyms+"',yylj='"+Name+"',scsj=sysdate where id='"+id+"'";
	}
	else
	{
		sql_Upd="update z_dxsg_sgyy set yymc='"+yymc+"',yylx='"+yylx+"',yyms='"+yyms+"',scsj=sysdate where id='"+id+"'";
	}
	if(Name!=""||(num<2&&Name==""))
	{
    	DbTrade db_connection=new DbTrade();
		System.out.println(sql_Upd);
		db_connection.executeUpdate(sql_Upd);
		db_connection.close();
    	out.print("{success:true,msg:'修改成功！'}");
    }
} 

catch(Exception ex) {
}

%>
