<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
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
	String sql_Query_count="select count(*) from Z_jcsj_ZYC where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.*,b.cjmc,c.gqmc from  z_jcsj_zyc a,j_gyjc_cjzd b,j_gyjc_gqzd c where "+ whereclause +" and a.sscj=b.cjdm and a.tfgq = c.gqdm order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println("NO:1"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    //  System.out.println("NO:2"+json);
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",ch:'"+CheckSting(gridResultSet.getString("ch")) +"'" +
        		",sscj:'"+ gridResultSet.getString("sscj")+"'"+
        		",ccrq:'"+frmDate.format(gridResultSet.getDate("ccrq")).toString()+"'"+
        		",sbbh:'"+ CheckSting(gridResultSet.getString("sbbh"))+"'"+
        		",cx:'"+ CheckSting(gridResultSet.getString("cx"))+"'"+
        		",zz:'"+String.valueOf(gridResultSet.getFloat("zz")) +"'"+
        		",tfgq:'"+ CheckSting(gridResultSet.getString("tfgq"))+"'"+
        		",glb:'"+String.valueOf(CheckSting(gridResultSet.getString("glb")))+"'"+
        		",fdjgl:'"+ CheckSting(gridResultSet.getString("fdjgl"))+"'"+
        		",tgzxqxbj:'"+String.valueOf( gridResultSet.getFloat("tgzxqxbj"))+"'"+
        		",zzyxsd:'"+String.valueOf(gridResultSet.getFloat("zzyxsd")) +"'"+
        		",bz:'"+ CheckSting(gridResultSet.getString("bz"))+"'"+
        		",jd:'"+String.valueOf(gridResultSet.getFloat("jd")) +"'"+
        		",wd:'"+String.valueOf(gridResultSet.getFloat("wd")) +"'"+
        		",gqmc:'"+ gridResultSet.getString("gqmc")+"'"+
        		",cjmc:'"+ gridResultSet.getString("cjmc") +"'},"; 
        		
        		
        		
        	
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    System.out.println("NO:3"+json);
    db_connection.close();
   // System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
