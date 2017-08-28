<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String yabh = request.getParameter("yabh");
String lctlj = request.getParameter("lctlj");


//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0;
//事故图片  ----案例编码贯穿其它两个表
		//插入事故图片数据
   try{		
		sql="update  z_qxya_yagd  set LCTLJ = '" + lctlj +"' where yabh='" + yabh +"'";
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
