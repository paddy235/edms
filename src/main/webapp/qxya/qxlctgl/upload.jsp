<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String yabh = request.getParameter("yabh");
String lctlj = request.getParameter("lctlj");


//�������ݿ�
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0;
//�¹�ͼƬ  ----��������ᴩ����������
		//�����¹�ͼƬ����
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
    out.print("{success:true,msg:'����ɹ���'}");
}
else
{
	out.print("{success:true,msg:'����ʧ�ܣ�'}");
}
%>
