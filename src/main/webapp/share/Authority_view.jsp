<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="CheckDateorStr.jsp" %>
<%
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
		String sql_Query="select t.*,q.mc,g.GQDM,g.GQMC from V_Z_QXFZ_GZYTZ t,j_gyjc_qjzczd q,J_GYJC_GQZD g where t.QJZC=q.qjbm and q.gqdm=g.GQDM and GZBH='"+GZBH+"'";
		java.sql.ResultSet gridResultSet = db_connection.executeQuery(sql_Query);
		while(gridResultSet.next())
		{
		   String str = "";
		   if(gridResultSet.getString("YANR") == null){  
		        str = CheckSting(gridResultSet.getString("YANR"));
		   }else{
		        str = gridResultSet.getString("YANR");
		   }
		   GZXX=CheckDate(gridResultSet.getString("XCQRSJ"))+"!#"+                       //6
		        CheckSting(gridResultSet.getString("YTDSJ"))+"!#"+
		        CheckSting(gridResultSet.getString("QJZC"))+"!#"+		              
				CheckSting(gridResultSet.getString("ZZH"))+"!#"+
				CheckSting(gridResultSet.getString("GLB"))+"!#"+                         //10                    
           		CheckSting(gridResultSet.getString("GZDJBM"))+"!#"+           		
        		CheckSting(gridResultSet.getString("GZXZBM"))+"!#"+
        		CheckSting(gridResultSet.getString("GZLXBM"))+"!#"+
        		CheckSting(gridResultSet.getString("SHSB"))+"!#"+
        		CheckSting(gridResultSet.getString("SBSHCD"))+"!#"+                      //15             
        		CheckSting(gridResultSet.getString("YXXCFW"))+"!#"+
        		CheckSting(gridResultSet.getString("JGTGJL"))+"!#"+
        		CheckSting(gridResultSet.getString("DXGD"))+"!#"+
        		CheckSting(gridResultSet.getString("SBSHQK"))+"!#"+
        		CheckSting(gridResultSet.getString("RYSWQK"))+"!#"+                      //20           
        		CheckSting(gridResultSet.getString("GZFSYY"))+"!#"+
        		CheckSting(gridResultSet.getString("LDXM"))+"!#"+
        		CheckSting(gridResultSet.getString("LDZW"))+"!#"+
        		CheckSting(gridResultSet.getString("GQFZR"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZCDGQ"))+"!#"+                      //25 
        		CheckSting(gridResultSet.getString("ZZCDGQSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZCDGQRS"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZDDGQ"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZDDGQSJ"))+"!#"+
        		CheckSting(gridResultSet.getString("ZZDDGQRS"))+"!#"+                    //30
        	    CheckSting(gridResultSet.getString("ZYCH"))+"!#"+
        	    CheckSting(gridResultSet.getString("ZYCX"))+"!#"+
        	    CheckSting(gridResultSet.getString("ZRS"))+"!#"+
        	    CheckSting(gridResultSet.getString("SDLJ"))+"!#"+ 
        		CheckDate(gridResultSet.getString("ZYCCSSJ"))+"!#"+   //35
        		str +"!#"+                    
        		CheckDate(gridResultSet.getString("ZYCDDSJ"));      
        }     
        out.print(YHQX+"!#"+GZXX);      
        System.out.print("ww"+YHQX+"!#"+GZXX);
    }
    else
    {
    	out.print(YHQX);
    	System.out.print("ww11"+YHQX);
    }
	
%>

