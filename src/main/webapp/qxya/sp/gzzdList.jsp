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
	whereclause=" 1=1 and lb='4'";
}
session.removeAttribute("whereclause");
try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_JCSJ_GZZD where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from Z_JCSJ_GZZD where "+ whereclause +" order by ID) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println("99999999999999999999"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    //xb,xzjg,qjzc,glb,jcwgh,dlxgd,dlxxh,dydj,gs,cqdw,cqdwlxr,cqdwlxrdh,xjnf,bz
    
    while(gridResultSet.next()){
		json += "{xh:"+gridResultSet.getLong("xh") +
		        ",id:" +gridResultSet.getInt("id")  + 
        		",gzzdmc:'"+gridResultSet.getString("gzzdmc") + "'" +
        		",fbdw:'"+ gridResultSet.getString("fbdw")+ "'"+
        		",fbrq:'"+ gridResultSet.getDate("fbrq").toString() +"'"+        		
        		",zyfl:'"+ gridResultSet.getString("zyfl")+ "'"+
        		",nrfl:'"+ gridResultSet.getString("nrfl")+ "'"+        		
        		",jbfl:'"+ gridResultSet.getString("jbfl")+ "'"+
        		",gzzdjs:'"+ CheckSting(gridResultSet.getString("gzzdjs"))+"'"+
        		",gzzdlj:'"+gridResultSet.getString("gzzdlj") +"'},";   
}
	System.out.println("json="+json);
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //System.out.println(json);
    db_connection.close();
   // System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
