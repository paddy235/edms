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
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_cmd_xtddml where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	String sql_Query="select * from (select rownum xh,temp.* from (select cmdid,to_char(xtsj,'yyyy-mm-dd hh24:mi')xtsj,mlbh,mlnr,czmd,to_char(wcsj,'yyyy-mm-dd hh24:mi')wcsj,to_char(hbsj,'yyyy-mm-dd hh24:mi')hbsj,xtddy,zbddy from z_yxgl_cmd_xtddml where "+ whereclause +" order by xtsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");

    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{cmdid:'"+gridResultSet.getString("cmdid")+"'" +
		        ",xh:'"+ gridResultSet.getString("xh")+"'"+
		        ",xtsj:'"+(gridResultSet.getString("xtsj")==null?"":gridResultSet.getString("xtsj"))+"'"+
        		",mlbh:'"+ gridResultSet.getString("mlbh")+"'"+
        		",mlnr:'"+ gridResultSet.getString("mlnr")+"'"+
        		",czmd:'"+ gridResultSet.getString("czmd")+"'"+
        		",wcsj:'"+ gridResultSet.getString("wcsj")+"'"+
        		",hbsj:'"+ gridResultSet.getString("hbsj")+"'"+
        		",xtddy:'"+ gridResultSet.getString("xtddy")+"'"+
        	    ",zbddy:'"+ gridResultSet.getString("zbddy")+"'},";
    }
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
   
    System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>


