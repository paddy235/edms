<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String sj = request.getParameter("SJ");
String TZDWDM = request.getParameter("TZDWDM");
String TZDWMC = request.getParameter("TZDWMC");
String JSR = request.getParameter("JSR");
String JSDH = request.getParameter("JSDH");
String TBNR = request.getParameter("TBNR");
String ZBDD = request.getParameter("ZBDD");
String BZ = request.getParameter("BZ");  

DecimalFormat frmString=new DecimalFormat("0000"); 

//String nowDateTime=frmDate.format(nowDate);   
String sql="",wtkidmax="";
int maxid=0;
if(sj.trim()!="")
{
    //得到主键
	try 
	{
		//连接数据库
		DbTrade db_connection=new DbTrade(); 
   		sql="select max(gztbid) maxid from Z_YXGL_GZTB";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//案例编码贯穿其它两个表
		wtkidmax=frmString.format(maxid);//格式化案例编码
		sql="insert into Z_YXGL_GZTB(GZTBID,SJ,TZDWDM,TZDWMC,JSR,JSDH,TBNR,ZBDD,BZ) values('"
			+wtkidmax+"',to_date('"+sj+"','yyyy-mm-dd HH24:mi'),'"+TZDWDM+"','"+TZDWMC+"','"+JSR+"','"
			+JSDH+"', '"+TBNR+"','"+ZBDD+"','"+BZ+"')";
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
