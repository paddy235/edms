<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
    
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String gdxlmc = request.getParameter("gdxlmc");
String qjzc = request.getParameter("qjzc");
String glb = request.getParameter("glb");
String jcwgh = request.getParameter("jcwgh");
String gd = request.getParameter("gd");
String sz = request.getParameter("sz");
String szsl = request.getParameter("szsl");
String jgsl = request.getParameter("jgsl");
String kfsl = request.getParameter("kfsl");
String sflc = request.getParameter("sflc");
String sftldjn = request.getParameter("sftldjn");
String gqlxr = request.getParameter("gqlxr");
String lxdh = request.getParameter("lxdh");
String cqdw = request.getParameter("cqdw");
String cqdwlxr = request.getParameter("cqdwlxr");
String cqdwlxrdh = request.getParameter("cqdwlxrdh");
String bcje = request.getParameter("bcje");
String kfrq = request.getParameter("kfrq").toString();
String bz = request.getParameter("bz");




Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0,maxid=0;
//得到主键
	try 
	{
   		sql="select max(id) maxid from z_jcsj_wsh";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入事故图片数据
		sql="insert into z_jcsj_wsh(id,xb,xzjg,gdxlmc,qjzc,glb,jcwgh,gd,sz,szsl,jgsl,kfsl,sflc,sftldjn,gqlxr,lxdh,cqdw,cqdwlxr,cqdwlxrdh,bcje,kfrq,bz) values('"
			+maxid+"','"+xb+"','"+xzjg+"','"+gdxlmc+"','"+qjzc+"','"+glb+"','"+jcwgh+"','"+gd+"','"+sz+"','"+szsl+"','"+jgsl+"','"+kfsl+"','"+sflc+"','"+sftldjn+"','"+gqlxr+"','"+lxdh+"','"+cqdw+"','"+cqdwlxr+"','"+cqdwlxrdh+"','"+bcje+"',to_date('"+kfrq+"','yyyy-MM-dd'),'"+bz+"')";
    	System.out.println(sql);
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	
    	
    }
 	catch (Exception e) {bool=0;}

System.out.println(sql);
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
