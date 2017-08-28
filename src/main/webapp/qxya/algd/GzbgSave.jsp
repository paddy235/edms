<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String almc = request.getParameter("almc");
String xb = request.getParameter("xbbm");
String fssj = request.getParameter("fssj");
String dd = request.getParameter("dd");
String sgfl = request.getParameter("sgfl");
String sglx = request.getParameter("sglx");
String sgszdw = request.getParameter("sgszdw");
String zbddy = request.getParameter("zbddy");
String gzxx = request.getParameter("gzxx");
String gzqx = request.getParameter("gzqx");
String sgyyjcs = request.getParameter("sgyyjcs");
String ylwt = request.getParameter("ylwt");
String sfgd = request.getParameter("sfgd");

Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="",albm="";
int bool=0,maxid=0;
//故障报告
if(almc.trim()!="")
{
    //得到主键
	try 
	{
   		sql="select max(id) maxid from z_dxsg_sgbg";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//案例编码贯穿其它两个表
		albm=frmString.format(maxid);//格式化案例编码
		if(sfgd==null)
		  sfgd="0";
		else
		  sfgd="1";
		//插入故障报告数据
		sql="insert into z_dxsg_sgbg(id,albm,almc,xbbm,fssj,dd,sgfl,sglx,sgszdw,zbddy,gzxx,gzqx,sgyyjcs,ylwt,sfgd,sjc) values('"
			+maxid+"','"+albm+"','"+almc+"','"+xb+"',to_date('"+fssj+"','yyyy-mm-dd hh24:mi:ss'),'"+dd+"','"+sgfl+"','"+sglx+"','"
			+sgszdw+"','"+zbddy+"','"+gzxx+"','"+gzqx+"','"+sgyyjcs+"','"+ylwt+"','"+sfgd+"', sysdate)";
		db_connection.executeUpdate(sql);
		db_connection.close();
		//session.setAttribute("albm", albm);
		bool=1;		
	}
 	catch (Exception e) {bool=0;}
}
System.out.println(sql);
System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'"+albm+"'}");
}
%>
