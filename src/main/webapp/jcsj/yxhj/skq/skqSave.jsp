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
String qd = request.getParameter("qd");
String glb = request.getParameter("glb");
String sxgh = request.getParameter("sxgh");
String xxgh = request.getParameter("xxgh");
String hljgxs = request.getParameter("hljgxs");
String kqcd = request.getParameter("kqcd");
String hlcc = request.getParameter("hlcc");
String jwgcc = request.getParameter("jwgcc");
String cqssdw = request.getParameter("cqssdw");
String lxdh = request.getParameter("lxdh");
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
   		sql="select max(id) maxid from z_jcsj_skq";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入事故图片数据
		sql="insert into z_jcsj_skq(id,xb,xzjg,qd,glb,sxgh,xxgh,hljgxs,kqcd,hlcc,jwgcc,cqssdw,lxdh,bz) values('"
			+maxid+"','"+xb+"','"+xzjg+"','"+qd+"','"+glb+"','"+sxgh+"','"+xxgh+"','"+hljgxs+"','"+kqcd+"','"+hlcc+"','"+jwgcc+"','"+cqssdw+"','"+lxdh+"','"+bz+"')";
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
