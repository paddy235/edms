<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");
System.out.println("whereclause:" + whereclause);


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
        
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	String sql_Query_count="select count(*) from z_yxgl_wxlqkjl xl where " + whereclause;
	System.out.println(sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select xl.*,zd.gqmc as mc from z_yxgl_wxlqkjl xl,j_gyjc_gqzd zd where xl.gqmc=zd.gqdm  and "+ whereclause +" order by jlrq desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
      
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){

		json += "{xh:" +gridResultSet.getInt(1)+"" +
				",jlbh:" +gridResultSet.getInt(2)+"" +
				",jlrq:'" + (gridResultSet.getDate(3)==null?"":gridResultSet.getDate(3))+"'" +
				",gqmc:'" + (gridResultSet.getString(4)==null?"":gridResultSet.getString(4))+"'"+
        		",ddnr:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",pzsj:'"+ (gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		",yqwcsj:'"+ (gridResultSet.getString(7)==null?"":gridResultSet.getString(7))+"'"+
        		",wxlsj:'"+ (gridResultSet.getString(8)==null?"":gridResultSet.getString(8))+"'"+
        		",mc:'"+ (gridResultSet.getString("mc")==null?"":gridResultSet.getString("mc"))+"'"+
        		",txr:'"+ (gridResultSet.getString(9)==null?"":gridResultSet.getString(9)).toString().replaceAll("\\r\\n","\\\\r\\\\n")+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
      System.out.println("json:" + json);
      response.getWriter().write(json);
} 

catch(Exception ex) {
	System.out.println(ex.getMessage());
}

%>
