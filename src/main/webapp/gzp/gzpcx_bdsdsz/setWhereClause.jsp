<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
 
<%
String taskunit = request.getParameter("taskunit").toString();//taskunit
String ksrq = request.getParameter("ksrq").toString();
String jsrq = request.getParameter("jsrq").toString();
String jhzt = request.getParameter("jhzt").toString();
String zylb = request.getParameter("zylb").toString();
	//dwlb:���ж����������Ǳ�����ģ��Ժ�Ҫ�Ӵ���Ĭ��0��������
        DbTrade dbconnction=new DbTrade();
        String gqid=session.getAttribute("userDwid").toString();
        String sql_gq="select * from J_GYJC_GQZD where gqdm='"+taskunit+"'";
        System.out.println("///////:"+sql_gq);
        java.sql.ResultSet relust=dbconnction.executeQuery(sql_gq);
        String dwlb="";//�ж������������Ǳ����
        while(relust.next())
        {
          dwlb=relust.getString("jglbdm");
        }
        dbconnction.close();
        
        
        
        
//����taskunit�ж������������Ǳ����

String table="z_yxgl_gzpGq_Green";
if(dwlb.equals("1"))
{
   if(zylb.equals("0"))//ͣ����ҵ
   {
     table="z_yxgl_gzpGq_Green";
   }
   else if(zylb.equals("1"))//������ҵ
   {
     table="z_yxgl_gzpGQ_red";
   }
   else //Զ����ҵ
   {
     table="z_yxgl_gzpGq_black";
   }
}
else
{
   if(zylb.equals("0"))//ͣ����ҵ
   {
     table="z_yxgl_gzpbds_Green";
   }
   else if(zylb.equals("1"))//������ҵ
   {
     table="z_yxgl_gzpbds_red";
   }
   else //Զ����ҵ
   {
     table="z_yxgl_gzpbds_black";
   }
}


//System.out.println("taskunit"+taskunit);


try {
	
	String whereclause="";
	
	if ((taskunit.trim()!=""))
	{
		whereclause += " dwid='"+taskunit+"' ";	
	}
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause.indexOf("=")>0) whereclause += " and ";
		
		whereclause += " fpsj>=to_date('"+ksrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause.indexOf("=")>0) whereclause += " and ";
		
		whereclause += " fpsj<=to_date('"+jsrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jhzt.trim()!=""))
	{
		if (whereclause.indexOf("=")>0) whereclause += " and ";
		
		whereclause += " gzpzt='"+jhzt+"' ";	
	}
	
	  

	
	
	
	System.out.println("whereclause:"+whereclause);
	session.setAttribute("whereclause",whereclause);
	session.setAttribute("table",table);    
    
    
    out.print("{success:true,msg:'��ѯ�ɹ�'}");
} 
catch(Exception ex) {

}

%>
