<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.sql.*"%>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");

String whereclause="";
if (session.getAttribute("whereclause")!=null){
	whereclause=session.getAttribute("whereclause").toString().trim();
}
else
{
	whereclause=" 1=1 ";
}
session.removeAttribute("whereclause");
try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_jcsj_gj where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.gqmc,c.sbflname from z_jcsj_gj a,j_gyjc_gqzd b,j_gdgy_sbfl c where "+ whereclause +" and a.mc=c.sbflid and a.ssdw=b.gqdm order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println("NO:1 "+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",ccxh:"+CheckSting(gridResultSet.getString("ccxh")) +
        		",mc:'"+ CheckSting(gridResultSet.getString("mc"))+"'"+
        		",dw:'"+ CheckSting(gridResultSet.getString("dw"))+"'"+
        		",ggxh:'"+ CheckSting(gridResultSet.getString("ggxh"))+"'"+
        		",sccj:'"+ CheckSting(gridResultSet.getString("sccj"))+"'"+
        		",ssdw:'"+ CheckSting(gridResultSet.getString("ssdw"))+"'"+
        		",zt:'"+ CheckSting(gridResultSet.getString("zt"))+"'"+
        		",sl:"+ gridResultSet.getInt("sl")+
        		",scrq:'"+frmDate.format(gridResultSet.getDate("scrq")).toString()+"'"+
        			",gqmc:'"+ CheckSting(gridResultSet.getString("gqmc"))+"'"+
        			",sbflname:'"+ CheckSting(gridResultSet.getString("sbflname"))+"'"+
        		",bz:'"+ CheckSting(gridResultSet.getString("bz"))+"'},";
        		
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
   System.out.println("JSON:"+json);
    db_connection.close();
   // System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
