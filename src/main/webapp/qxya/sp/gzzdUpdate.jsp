<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
System.out.println("��ʼ�����޸ġ���");
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
System.out.println("id��ֵ��"+id);
String sql_Upd="";
 
String Name="";
DbTrade db_connection=new DbTrade();
 
try {
   	int num=gzzdPath.lastIndexOf("\\");
	if(num>1)
	{   
	  
   		String SavePath="jcsj\\gzzd";//���ڴ���ϴ��ļ���Ŀ¼;
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
    	out.print("{success:true,msg:'�޸ĳɹ���'}");
    	 
    }
} 

catch(Exception ex) {
 System.out.println("�޸�ʧ�ܣ�"+ex.getMessage() );
}

%>
