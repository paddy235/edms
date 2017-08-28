<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="CheckDateorStr.jsp" %>
<%
String Yhmc = (String)session.getAttribute("YHMC");
String YHQX="";
if (session.getAttribute("ROLE")!=null)//==null)//
{
	String Admin="0";
	String Approve="0";
	String Edit="0";
	String Browse="0";
	String Qxfz="0";
	String Ddz="0";		
	java.util.Vector ROLE = (java.util.Vector)session.getAttribute("ROLE");
	for(int i=0;ROLE!=null&&i<ROLE.size();i++)
	{
		YHQX=ROLE.get(i).toString();
		if(YHQX.equalsIgnoreCase("admin"))
		{
			Admin="1";
		}
		if(YHQX.equalsIgnoreCase("approve"))
		{
			Approve="1";
		}
		if(YHQX.equalsIgnoreCase("edit"))
		{
			Edit="1";
		}
		if(YHQX.equalsIgnoreCase("browse"))
		{
			Browse="1";
		}
		if(YHQX.equalsIgnoreCase("qxfz"))
		{
			Qxfz="1";
		}
		if(YHQX.equalsIgnoreCase("ddz"))
		{
			Ddz="1";
		}
	} 
	//String YHQX="0,1,0,1";
	YHQX=Admin+"!#"+Approve+"!#"+Edit+"!#1!#"+Qxfz+"!#"+Ddz;
}
else
{
    //out.print("没有得到值！");
    YHQX="0!#0!#0!#1!#0!#0";
}

    //得到故障信息
	String GZBH=request.getParameter("GZBH")==null?"":request.getParameter("GZBH");
	String GZXX="";
	if(GZBH!="")
	{
	    DbTrade db_connection=new DbTrade(); 
		String sql_Query="select t.*,q.mc,g.GQDM,g.GQMC from V_Z_QXFZ_GZSB t,j_gyjc_qjzczd q,J_GYJC_GQZD g where t.QJZC=q.qjbm and q.gqdm=g.GQDM and GZBH='"+GZBH+"'";
		java.sql.ResultSet gridResultSet = db_connection.executeQuery(sql_Query);
		while(gridResultSet.next())
		{
		 
		   GZXX=CheckSting(gridResultSet.getString("GZSZTLJ"))+"!#"+                       //6
		        CheckSting(gridResultSet.getString("GDD"))+"!#"+
		        CheckSting(gridResultSet.getString("GDDDY"))+"!#"+		              
				CheckSting(gridResultSet.getString("XB"))+"!#"+
				CheckSting(gridResultSet.getString("ZL"))+"!#"+                         //10                    
           		CheckSting(gridResultSet.getString("TQ"))+"!#"+           		
        		CheckDate(gridResultSet.getString("GZFSSJ"))+"!#"+
        		CheckDate(gridResultSet.getString("FXSJ"))+"!#"+
        		CheckDate(gridResultSet.getString("TZQXSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("GZDD1"))+"!#"+                      //15             
        		CheckSting(gridResultSet.getString("TDQD"))+"!#"+
        		CheckSting(gridResultSet.getString("YXFW"))+"!#"+
        		CheckSting(gridResultSet.getString("YXCC"))+"!#"+
        		CheckSting(gridResultSet.getString("GZBH"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZCDGQ"))+"!#"+                      //20           
        		CheckDate(gridResultSet.getString("ZZCDGQSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZCDGQRS"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZDDGQ"))+"!#"+
        		CheckDate(gridResultSet.getString("ZZDDGQSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZDDGQRS"))+"!#"+                      //25 
        		CheckSting(gridResultSet.getString("QXLDR"))+"!#"+
        		CheckSting(gridResultSet.getString("ZW"))+"!#"+
        		CheckSting(gridResultSet.getString("ZRS"))+"!#"+
        		CheckDate(gridResultSet.getString("TDQSSJ"))+"!#"+
        		CheckDate(gridResultSet.getString("TDJSSJ"))+"!#"+                    //30
        	    CheckSting(gridResultSet.getString("TDSC"))+"!#"+
        	    CheckDate(gridResultSet.getString("QXQSSJ"))+"!#"+
        	    CheckDate(gridResultSet.getString("QXJSSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("QXSC"))+"!#"+  
        		CheckSting(gridResultSet.getString("DQYXFS"))+"!#"+                     //35
        		CheckSting(gridResultSet.getString("SBSHJRYSWQK"))+"!#"+ 
        		CheckSting(gridResultSet.getString("GZLCBS"))+"!#"+ 
        		Yhmc+"!#"+
        		CheckSting(gridResultSet.getString("YYJCS"))+"!#"+     
        		CheckSting(gridResultSet.getString("GZDD"));
        }     
        out.print(YHQX+"!#"+GZXX+"!#"+Yhmc);      
        System.out.print("ww"+YHQX+"!#"+GZXX+"!#"+Yhmc);
    }
    else
    {
    	out.print(YHQX);
    	System.out.print("ww11"+YHQX);
    }
	
%>

