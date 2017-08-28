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
		String sql_Query="select * from v_z_qxfz_gzxx where GZBH='"+GZBH+"'";
		java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
		while(gridResultSet.next())
		{
			GZXX=CheckSting1(gridResultSet.getString("QJZC"))+"!#"+                  //6
				CheckSting1(gridResultSet.getString("ZZH"))+"!#"+
				CheckSting1(gridResultSet.getString("GLB"))+"!#"+
           		CheckSting1(gridResultSet.getString("GZDJBM"))+"!#"+
        		CheckSting1(gridResultSet.getString("GZXZBM"))+"!#"+                //10
        		CheckSting1(gridResultSet.getString("GZLXBM"))+"!#"+
        		CheckSting1(gridResultSet.getString("XCXZFW"))+"!#"+
        		CheckSting1(gridResultSet.getString("TDQD"))+"!#"+
        		CheckSting1(gridResultSet.getString("KGH"))+"!#"+
        		CheckSting1(gridResultSet.getString("GDB"))+"!#"+					//15
        		CheckSting1(gridResultSet.getString("JGBM"))+"!#"+
        		CheckSting1(gridResultSet.getString("GQMC"))+"!#"+
        		CheckSting1(gridResultSet.getString("MC"))+"!#"+
        		CheckSting1(gridResultSet.getString("TZXDSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("GZFSSJ1"))+"!#"+				//20
        		CheckSting1(gridResultSet.getString("GZYLWT"))+"!#"+
        		CheckSting1(gridResultSet.getString("YXCC"))+"!#"+
        		
        		CheckSting1(gridResultSet.getString("GZBH")) +"!#" +
        		CheckSting1(gridResultSet.getString("GZLCBS"))+"!#"+
        		CheckSting1(gridResultSet.getString("DJMC"))+"!#"+					//25
        		CheckSting1(gridResultSet.getString("XZMC"))+"!#"+
        		CheckSting1(gridResultSet.getString("LXMC"))+"!#"+
        		
        		//变电所设备状态
        		CheckSting1(gridResultSet.getString("XZJG"))+"!#"+
        		CheckSting1(gridResultSet.getString("SBZT"))+"!#"+
        		CheckSting1(gridResultSet.getString("SBGZQK"))+"!#"+					//30
        		CheckSting1(gridResultSet.getString("FKR"))+"!#"+
        		CheckSting1(gridResultSet.getString("FKSJ1"))+"!#"+
        		
        		//抢修出动
        		CheckSting1(gridResultSet.getString("TZLDSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("LDXM"))+"!#"+
        		CheckSting1(gridResultSet.getString("LDDDSJ1"))+"!#"+				//35
        		CheckSting1(gridResultSet.getString("TZGQSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("TZNR"))+"!#"+
        		CheckSting1(gridResultSet.getString("GQDDSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("GQFZR"))+"!#"+
        		CheckSting1(gridResultSet.getString("SDLJ"))+"!#"+					//40
        		CheckSting1(gridResultSet.getString("GQCDRS"))+"!#"+
        		CheckSting1(gridResultSet.getString("ZYCH"))+"!#"+
        		CheckSting1(gridResultSet.getString("ZYCCSSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("ZYCDDSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("SLR"))+"!#"+					//45
        		CheckSting1(gridResultSet.getString("GQCDSJ1"))+"!#"+   
        		
        		//故障确定
        		CheckSting1(gridResultSet.getString("XCQRSJ1"))+"!#"+
        		CheckSting1(gridResultSet.getString("SHSB"))+"!#"+
        		CheckSting1(gridResultSet.getString("SBSHCD"))+"!#"+
        		CheckSting1(gridResultSet.getString("JGTGJL"))+"!#"+					//50
        		CheckSting1(gridResultSet.getString("DXGD"))+"!#"+
        		CheckSting1(gridResultSet.getString("XCZP"))+"!#"+
        		CheckSting1(gridResultSet.getString("SBSHQK"))+"!#"+
        		CheckSting1(gridResultSet.getString("RYSWQK"))+"!#"+
        		CheckSting1(gridResultSet.getString("GZFSYY"))+"!#"+				   //55
        		
        		//追加字段 抢修出动
        		CheckSting1(gridResultSet.getString("GQDM"))+"!#"+   
        		CheckSting1(gridResultSet.getString("HBR1"))+"!#"+ 
        		CheckSting1(gridResultSet.getString("ZYCX"))+"!#"+   
        		CheckSting1(gridResultSet.getString("LDZW"))+"!#"+ 
        		CheckSting1(gridResultSet.getString("GQMC1"))+"!#"+ 				 //60
        		
        		//追加字段 故障确定
        		CheckSting1(gridResultSet.getString("YXXCFW"))+"!#"+   
        		CheckSting1(gridResultSet.getString("ZZDDGQ"))+"!#"+ 
        		CheckSting1(gridResultSet.getString("ZZDDRS"))+"!#"+   
        		CheckSting1(gridResultSet.getString("ZRS"))+"!#"+ 
        		CheckSting1(gridResultSet.getString("ZZDDSJ1"))+"!#"+ 				//65
        		CheckSting1(gridResultSet.getString("DQYXFS"))+"!#"+ 			 
        		CheckSting1(gridResultSet.getString("GQMC2")); 
        }
        out.print(YHQX+"!#"+GZXX);
        //System.out.print("ww"+YHQX+","+GZXX);
        db_connection.close();
    }
    else
    {
    	out.print(YHQX);
    	//System.out.print("ww11"+YHQX);
    }
	
%>

