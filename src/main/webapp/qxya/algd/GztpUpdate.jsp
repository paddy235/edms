<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String id = request.getParameter("tp_id");
String tpmc = new String(request.getParameter("tpmc_id").getBytes("ISO8859-1"),"GB2312");
String tplx = request.getParameter("tplx_id");
String tpms = new String(request.getParameter("tpms_id").getBytes("ISO8859-1"),"GB2312");
String tplj = new String(request.getParameter("tplj_id").getBytes("ISO8859-1"),"GB2312");
String Name="";
String sql_Upd="";
try {
	int num=tplj.lastIndexOf("\\");
	if(num>1)
   	{
	   	String SavePath="dxsg\\Images\\";//用于存放上传文件的目录;
	    Name = new UpLoadFile().FileUpload(request,SavePath,id);
	    sql_Upd="update z_dxsg_sgtp set tpmc='"+tpmc+"',tplx='"+tplx+"',tpms='"+tpms+"',tplj='"+Name+"',scsj=sysdate where id='"+id+"'";
	}
	else
	{
		sql_Upd="update z_dxsg_sgtp set tpmc='"+tpmc+"',tplx='"+tplx+"',tpms='"+tpms+"',scsj=sysdate where id='"+id+"'";
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
