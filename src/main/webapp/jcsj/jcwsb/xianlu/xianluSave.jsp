<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
//ID,XLMC,QJZC,XBBM,SXXBM,SBXH,SBCZ,CD,BZ,ZL,SCRQ,TYRQ,SCCJ   
String XLMC = request.getParameter("XLMC");
String QJZC = request.getParameter("QJZC");
String XBBM = request.getParameter("XBBM");
String SXXBM = request.getParameter("SXXBM");
String SBXH = request.getParameter("SBXH");
String SBCZ = request.getParameter("SBCZ");
String CD = request.getParameter("CD");
String BZ = request.getParameter("BZ");
String ZL = request.getParameter("ZL");
String SCRQ = request.getParameter("SCRQ").toString();
String TYRQ = request.getParameter("TYRQ").toString();
String SCCJ = request.getParameter("SCCJ");


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
   		sql="select max(id) maxid from z_jcsj_xianlu";
   		//System.out.println(sql);
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入事故图片数据
		//sql="insert into z_jcsj_wsh(id,xb,xzjg,gdxlmc,qjzc,glb,jcwgh,gd,sz,szsl,jgsl,kfsl,sflc,sftldjn,gqlxr,lxdh,cqdw,cqdwlxr,cqdwlxrdh,bcje,kfrq,bz) values('"
		//	+maxid+"','"+xb+"','"+xzjg+"','"+gdxlmc+"','"+qjzc+"','"+glb+"','"+jcwgh+"','"+gd+"','"+sz+"','"+szsl+"','"+jgsl+"','"+kfsl+"','"+sflc+"','"+sftldjn+"','"+gqlxr+"','"+lxdh+"','"+cqdw+"','"+cqdwlxr+"','"+cqdwlxrdh+"','"+bcje+"',to_date('"+kfrq+"','yyyy-MM-dd'),'"+bz+"')";
    	sql="INSERT INTO Z_JCSJ_XIANLU ( ID ,XLMC ,QJZC ,XBBM ,SXXBM ,SBXH ,SBCZ ,CD ,BZ ,ZL ,SCRQ ,TYRQ ,SCCJ ) VALUES ("+maxid+",'"+XLMC+"','"+QJZC+"','"+XBBM+"','"+SXXBM+"','"+SBXH+"','"+SBCZ+"','"+CD+"','"+BZ+"','"+ZL+"',to_date('"+SCRQ+"','yyyy-MM-dd'),"+"to_date('"+TYRQ+"','yyyy-MM-dd'),'"+SCCJ+"')";
    	System.out.println("INSERT INTO Z_JCSJ_XIANLU :"+sql);
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
