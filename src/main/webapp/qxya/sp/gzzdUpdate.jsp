<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
System.out.println("开始进行修改……");
String id = request.getParameter("id");
//String gzzdmc = request.getParameter("gzzdmc_id");
String fbdw = request.getParameter("fbdw");
String fbrq = request.getParameter("fbrq").toString();
//String zyfl = request.getParameter("zyfl");
//String nrfl = request.getParameter("nrfl");
//String jbfl = request.getParameter("jbfl");
//String gzzdjs = request.getParameter("gzzdjs");
String gzzdmc = new String(request.getParameter("gzzdmc").getBytes("ISO8859-1"),"GB2312");
String zyfl ="";// new String(request.getParameter("zyfl").getBytes("ISO8859-1"),"GB2312");
String nrfl ="";// new String(request.getParameter("nrfl").getBytes("ISO8859-1"),"GB2312");
String jbfl ="";// new String(request.getParameter("jbfl").getBytes("ISO8859-1"),"GB2312");
//String gzzdPath = new String(request.getParameter("gzzdPath_id").getBytes("ISO8859-1"),"GB2312");
String gzzdjs = new String(request.getParameter("gzzdjs").getBytes("ISO8859-1"),"GB2312");
///String fbrq = request.getParameter("fbrq_id").toString();

//String gzzdlj = request.getParameter("gzzdlj_id");
String gzzdPath = new String(request.getParameter("gzzdPath").getBytes("ISO8859-1"),"GB2312");
System.out.println("id的值："+id);
String sql_Upd="";
 
String Name="";
DbTrade db_connection=new DbTrade();
 
try {
   	int num=gzzdPath.lastIndexOf("\\");
	if(num>1)
	{   
	  
   		String SavePath="jcsj\\gzzd";//用于存放上传文件的目录;
	   	Name = new UpLoadFile().FileUpload(request,SavePath,id);
	   	sql_Upd="update Z_JCSJ_GZZD set gzzdmc='"+gzzdmc+"',fbdw='"+fbdw+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),zyfl='"+zyfl+"',nrfl='"+nrfl+"',jbfl='"+jbfl+"',gzzdjs='"+gzzdjs+"',gzzdlj='"+Name+"' where ID='"+id+"'";
	}
	else
	{
    	sql_Upd="update Z_JCSJ_GZZD set gzzdmc='"+gzzdmc+"',fbdw='"+fbdw+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),zyfl='"+zyfl+"',nrfl='"+nrfl+"',jbfl='"+jbfl+"',gzzdjs='"+gzzdjs+"' where ID='"+id+"'";
	}
    if(Name!=""||(num<2&&Name==""))
	{
    	
		System.out.println(sql_Upd);
		db_connection.executeUpdate(sql_Upd);
		db_connection.close();
    	out.print("{success:true,msg:'修改成功！'}");
    	 
    }
} 

catch(Exception ex) {
 System.out.println("修改失败！"+ex.getMessage() );
}

%>
