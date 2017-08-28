<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
String cj = request.getParameter("sscj");
String ch = request.getParameter("ch");
String bh = request.getParameter("sbbh");
String cx = request.getParameter("cx");
String gq = request.getParameter("tfgq");
String zz = request.getParameter("zz");
String glb = request.getParameter("glb");
String rq = request.getParameter("ccrq").toString();
String gl = request.getParameter("fdjgl");
String bj = request.getParameter("tgzxqxbj");
String sd = request.getParameter("zzyxsd");
String bz = request.getParameter("bz");
System.out.println(bz);
Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0,maxid=0;
//事故图片  ----案例编码贯穿其它两个表
//得到主键
	try 
	{
   		sql="select max(id) maxid from z_jcsj_zyc";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入事故图片数据
		sql="insert into z_jcsj_zyc(id,ch,sscj,sbbh,cx,zz,tfgq,glb,ccrq,fdjgl,tgzxqxbj,zzyxsd,bz) values('"
			+maxid+"','"+ch+"','"+cj+"','"+bh+"','"+cx+"','"+zz+"','"+gq+"','"+glb+"',to_date('"+rq+"','yyyy-MM-dd'),'"+gl+"','"+bj+"','"+sd+"','"+bz+"')";
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	System.out.println(sql);
    	
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
