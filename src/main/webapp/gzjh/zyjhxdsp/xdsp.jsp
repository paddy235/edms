<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%
	
///��õ�ǰ�û������֣���λid,���ж�session�Ƿ�Ϊ��
String username=session.getAttribute("userName").toString();
    

String id = request.getParameter("id");

//�¼��е����� �촰��ʼʱ�� �촰����ʱ��
String xdzr=request.getParameter("xdzr");
String tcsjks=request.getParameter("tcsjks");
String tcsjjs=request.getParameter("tcsjjs");
 
Date nowDate =new Date();

SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
String sql="update z_yxgl_zyjh set xdzr='"+xdzr+"',zt=6, tcsjks=to_date('"+tcsjks+"','yyyy-mm-dd  hh24:mi'),tcsjjs=to_date('"+tcsjjs+"','yyyy-mm-dd  hh24:mi') where id='"+id+"'";
//System.out.println("------------"+sql);
DbTrade dbTrade=new DbTrade();

try{
	dbTrade.executeUpdate(sql);
	dbTrade.close();
	out.print("{success:true,msg:'�����ɹ�����'}");
}catch(Exception ex){
	dbTrade.close();
	out.print("{success:true,msg:'����ʧ�ܣ�'}");
}		
        
%>
