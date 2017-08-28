<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String fssj = request.getParameter("fssj");
String wtms = request.getParameter("wtms");
String djr = request.getParameter("djr");
String xjsj = request.getParameter("xjsj");
String clgc = request.getParameter("clgc");
String xjr = request.getParameter("xjr");
String zt = request.getParameter("zt");
String dwdm = session.getAttribute("DWDM")==null?"": session.getAttribute("DWDM").toString();
String dwmc = session.getAttribute("DWMC")==null?"": session.getAttribute("DWMC").toString();

DecimalFormat frmString=new DecimalFormat("0000"); 

//String nowDateTime=frmDate.format(nowDate);   
String sql="",wtkidmax="";
int maxid=0;
if(fssj.trim()!="")
{
    //得到主键
	try 
	{
		//连接数据库
		DbTrade db_connection=new DbTrade(); 
   		sql="select max(wtkid) maxid from Z_YXGL_WTK";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//案例编码贯穿其它两个表
		wtkidmax=frmString.format(maxid);//格式化案例编码
		sql="insert into Z_YXGL_WTK(wtkid,dwdm,dwmc,fssj,wtms,djr,xjsj,clgc,xjr,zt) values('"
			+wtkidmax+"','"+dwdm+"','"+dwmc+"',to_date('"+fssj+"','yyyy-mm-dd HH24:mi'),'"+wtms+"','"
			+djr+"',to_date('"+xjsj+"','yyyy-mm-dd HH24:mi'),'"+clgc+"','"+xjr+"','"+zt+"')";
		db_connection.executeUpdate(sql);
		
		//session.setAttribute("albm", albm);
		
		db_connection.close();
		out.print("{success:true,msg:'保存成功'}");		
	}
 	catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'保存失败'}");		
 	}
}
System.out.println(sql);
%>
