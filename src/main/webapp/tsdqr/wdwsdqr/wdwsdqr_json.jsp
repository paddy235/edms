<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


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
	
	
	
	String sql_Query_count="select count(*) from z_tsdqr_sdqr where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select sdqrid,to_char(sdsj,'yyyy-mm-dd hh24:mi')sdsj,sdqk,wcqk,ssdd,wdw,wdwddy from z_tsdqr_sdqr where "+ whereclause +" order by sdsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");

    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
  
		
		
		json += "{sdqrid:'"+gridResultSet.getString("sdqrid")+"'" +
		        ",sdsj:'"+ gridResultSet.getString("sdsj")+"'"+
        	    ",sdqk:'"+ gridResultSet.getString("sdqk")+"'"+
        	    ",wcqk:'"+ gridResultSet.getString("wcqk")+"'"+
        	    ",ssdd:'"+ gridResultSet.getString("ssdd")+"'"+
        	    ",wdw:'"+ gridResultSet.getString("wdw")+"'"+
        		",wdwddy:'"+ (gridResultSet.getString("wdwddy")==null?"":gridResultSet.getString("wdwddy"))+"'},";
    }
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>


