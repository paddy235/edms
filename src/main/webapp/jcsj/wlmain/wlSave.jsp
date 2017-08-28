<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
String id= request.getParameter("id");
String ccxh = request.getParameter("ccxh");
String mc = request.getParameter("mc");
String dw = request.getParameter("dw");
String ggxh = request.getParameter("ggxh");
String sccj = request.getParameter("sccj");
String ssdw = request.getParameter("ssdw");
String zt = request.getParameter("zt");
String sl = request.getParameter("sl");
String scrq = request.getParameter("scrq").toString();
String bz = request.getParameter("bz");

Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int maxid=0;
boolean bool=false;
//事故图片  ----案例编码贯穿其它两个表
//得到主键
	try 
	{
   		sql="select max(id) maxid from z_jcsj_wuliao";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入事故图片数据
		sql="insert into z_jcsj_wuliao(id,ccxh,mc,dw,ggxh,sccj,ssdw,zt,scrq,sl,bz) values('"
			+maxid+"','"+ccxh+"','"+mc+"','"+dw+"','"+ggxh+"','"+sccj+"','"+ssdw+"','"+zt+"',to_date('"+scrq+"','yyyy-MM-dd'),'"+sl+"','"+bz+"')";
    	bool=db_connection.executeUpdate(sql);
    	db_connection.close();
    	
    	System.out.println(sql);
    	
    }
 	catch (Exception e) {bool=false;}

System.out.println(sql);
//System.out.println(albm);

if(bool)
{
    out.print("{success:true,msg:'保存成功！'}");
}
else
{
	out.print("{success:true,msg:'保存失败！'}");
}
%>
