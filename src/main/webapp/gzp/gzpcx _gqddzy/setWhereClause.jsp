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
	//dwlb:是判断网工区还是变电所的，以后还要加代码默认0：网工区
        DbTrade dbconnction=new DbTrade();
        String gqid=session.getAttribute("userDwid").toString();
        String sql_gq="select * from J_GYJC_GQZD where gqdm='"+taskunit+"'";
        System.out.println("///////:"+sql_gq);
        java.sql.ResultSet relust=dbconnction.executeQuery(sql_gq);
        String dwlb="";//判断是网工区还是变电所
        while(relust.next())
        {
          dwlb=relust.getString("jglbdm");
        }
        dbconnction.close();
        
        
        
        
//根据taskunit判断是网工区还是变电所

String table="z_yxgl_gzpGq_Green";
if(dwlb.equals("1"))
{
   if(zylb.equals("0"))//停电作业
   {
     table="z_yxgl_gzpGq_Green";
   }
   else if(zylb.equals("1"))//带电作业
   {
     table="z_yxgl_gzpGQ_red";
   }
   else //远离作业
   {
     table="z_yxgl_gzpGq_black";
   }
}
else
{
   if(zylb.equals("0"))//停电作业
   {
     table="z_yxgl_gzpbds_Green";
   }
   else if(zylb.equals("1"))//带电作业
   {
     table="z_yxgl_gzpbds_red";
   }
   else //远离作业
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
    
    
    out.print("{success:true,msg:'查询成功'}");
} 
catch(Exception ex) {

}

%>
