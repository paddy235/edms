<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%
System.out.println("开始进行修改……");
String id = request.getParameter("id");
String tzmc = request.getParameter("tzmc");
String xzjg = request.getParameter("xzjg");
String fbrq = request.getParameter("fbrq").toString();
String zyfl = request.getParameter("zyfl");
String nrfl = request.getParameter("nrfl");
String qjzc = request.getParameter("qjzc");
String th = request.getParameter("th");
String tzjs = request.getParameter("tzjs");
//String gzzdlj = request.getParameter("tzlj");
String tzpath = new String(request.getParameter("tzPath").getBytes("ISO8859-1"),"GB2312");
try {
   		
   		String SavePath="jcsj\\gzzd";//用于存放上传文件的目录;
		String fileName = tzpath.substring(tzpath.lastIndexOf("\\") + 1);
	   	String extfile = fileName.substring(fileName.indexOf("."));
	   	String Name=id+extfile;
	   	System.out.println("tzPath="+tzpath);
	   	System.out.println("SavePath="+SavePath);
	   	System.out.println("Name="+Name);
		boolean b=new UpLoadFile().FileUpload(tzpath,SavePath,Name);   		
    if(b)
	{
    	DbTrade db_connection=new DbTrade();
		String sql_Upd="update Z_JCSJ_TZ set tzmc='"+tzmc+"',xzjg='"+xzjg+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),zyfl='"+zyfl+"',nrfl='"+nrfl+"',qjzc='"+qjzc+"',th='"+th+"',tzjs='"+tzjs+"',tzlj='"+Name+"' where id='"+id+"'";
		System.out.println(sql_Upd);

		db_connection.executeUpdate(sql_Upd);
		db_connection.close();
    	out.print("{success:true,msg:'修改成功！'}");
    }
    else
    {
    	out.print("{success:true,msg:'修改失败！'}");
    }
} 

catch(Exception ex) {
 System.out.println("修改失败！"+ex.getMessage() );
}

%>
