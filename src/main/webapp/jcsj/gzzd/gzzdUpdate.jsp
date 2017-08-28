<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%
System.out.println("开始进行修改……");
String id = request.getParameter("id");
String gzzdmc = request.getParameter("gzzdmc");
String fbdw = request.getParameter("fbdw");
String fbrq = request.getParameter("fbrq").toString();
String zyfl = request.getParameter("zyfl");
String nrfl = request.getParameter("nrfl");
String jbfl = request.getParameter("jbfl");
String gzzdjs = request.getParameter("gzzdjs");
//String gzzdlj = request.getParameter("gzzdlj");
String gzzdPath = new String(request.getParameter("gzzdPath").getBytes("ISO8859-1"),"GB2312");
try {
   		
   		String SavePath="jcsj\\gzzd";//用于存放上传文件的目录;
		String fileName = gzzdPath.substring(gzzdPath.lastIndexOf("\\") + 1);
	   	String extfile = fileName.substring(fileName.indexOf("."));
	   	String Name=id+extfile;
	   	System.out.println("gzzdPath="+gzzdPath);
	   	System.out.println("SavePath="+SavePath);
	   	System.out.println("Name="+Name);
		boolean b=new UpLoadFile().FileUpload(gzzdPath,SavePath,Name);   		
    if(b)
	{
    	DbTrade db_connection=new DbTrade();
		String sql_Upd="update Z_JCSJ_GZZD set gzzdmc='"+gzzdmc+"',fbdw='"+fbdw+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),zyfl='"+zyfl+"',nrfl='"+nrfl+"',jbfl='"+jbfl+"',gzzdjs='"+gzzdjs+"',gzzdlj='"+Name+"' where id='"+id+"'";
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
