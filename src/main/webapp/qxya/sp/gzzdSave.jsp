<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();

//id,gzzdmc,fbdw,fbrq,zyfl,nrfl,jbfl,gzzdjs,gzzdlj
String gzzdmc = new String(request.getParameter("gzzdmc_id").getBytes("ISO8859-1"),"GB2312");
String zyfl = "";//new String(request.getParameter("zyfl_id").getBytes("ISO8859-1"),"GB2312");
String nrfl = "";//new String(request.getParameter("nrfl_id").getBytes("ISO8859-1"),"GB2312");
String jbfl ="";// new String(request.getParameter("jbfl_id").getBytes("ISO8859-1"),"GB2312");
//String gzzdPath = new String(request.getParameter("gzzdPath_id").getBytes("ISO8859-1"),"GB2312");
String gzzdjs = new String(request.getParameter("gzzdjs_id").getBytes("ISO8859-1"),"GB2312");
String fbrq = request.getParameter("fbrq_id");
//String gzzdlj = request.getParameter("tzlj");

Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";

String Name="";
int bool=0,maxid=0;

//得到主键
	try 
	{
		sql="select max(id) maxid from z_jcsj_gzzd";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}   		
   		String SavePath="jcsj\\vedio";//用于存放上传文件的目录;

	   	Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
	   	System.out.println("Name="+Name);
   		//boolean b=new UpLoadFile().FileUpload(tzpath,SavePath,Name);
		//插入数据
		sql="insert into z_jcsj_gzzd(id,gzzdmc,fbrq,zyfl,nrfl,jbfl,gzzdjs,gzzdlj,lb) values('"+maxid+"','"+gzzdmc+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+zyfl+"','"+nrfl+"','"+jbfl+"','"+gzzdjs+"','"+Name+"','4')";
			
			
	
		//sql="insert into z_jcsj_tz(id,tzmc,xb,xzjg,fbrq,zyfl,nrfl,qjzc,th,tzjs,tzlj) values('"+maxid+"','"+tzmc+"','"+xb+"','"+xzjg+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+zyfl+"','"+nrfl+"','"+qjzc+"','"+th+"','"+tzjs+"','"+Name+"')";
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	
    	
    }
 	catch (Exception e) {bool=0;}

	System.out.println("insertsql="+sql);
//System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'保存成功！'}");
}
else
{
	out.print("{success:true,msg:'保存失败！'}");
}
%>
