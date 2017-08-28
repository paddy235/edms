<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>

<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");
System.out.println("whereclause" + whereclause);


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    int totalCount=0;
    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_stgz a,j_gyjc_gqzd b where a.gqdm=b.gqdm and "+whereclause;
	System.out.println("STGZ "+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.gqmc from z_yxgl_stgz a,j_gyjc_gqzd b where "+ whereclause +" and a.gqdm=b.gqdm order by djrq desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println("STGZ "+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{JLID:" +gridResultSet.getInt("JLID")+"" +				
        		",DJRQ:'"+CheckDate(gridResultSet.getString("DJRQ"))+"'" +
        		",GQMC:'"+CheckSting(gridResultSet.getString("GQMC"))+"'" +
        		",LB:'"+CheckSting(gridResultSet.getString("LB"))+"'" +
        		",SBMC:'"+CheckSting(gridResultSet.getString("SBMC"))+"'" +
        		",GK:'"+CheckSting(gridResultSet.getString("GK"))+"'" +
        		",BZ:'"+CheckSting(gridResultSet.getString("BZ"))+"'" +
        		",DJR:'"+CheckSting(gridResultSet.getString("DJR"))+"'" +
        		",HFRQ:'"+CheckDate(gridResultSet.getString("HFRQ"))+"'" +
        		",TXR:'"+CheckSting(gridResultSet.getString("TXR"))+"'" +
        		",GQDM:'"+ CheckSting(gridResultSet.getString("GQDM"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    System.out.println(json);
    response.getWriter().write(json);
} 

catch(Exception ex) {
 System.out.println(ex);
}

%>
