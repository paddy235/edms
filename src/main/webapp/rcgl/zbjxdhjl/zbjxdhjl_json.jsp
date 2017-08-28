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
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_zbjxdhjl a,j_gyjc_gqzd b where a.bds=b.gqdm and "+whereclause;
	System.out.println(sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.gqmc from z_yxgl_zbjxdhjl a,j_gyjc_gqzd b where "+ whereclause +" and a.bds=b.gqdm order by dhrq desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{JLID:" +gridResultSet.getInt(2)+"" +
				",BDS:'"+(gridResultSet.getString(3)==null?"":gridResultSet.getString(3))+"'" +
        		",DHRQ:'"+((gridResultSet.getDate(4)+" "+gridResultSet.getTime(4))==null?"":(gridResultSet.getDate(4)+" "+gridResultSet.getTime(4)))+"'" +
        		",GQMC:'"+(gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'" +
        		",YXQK:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5)).toString()+"'},";
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
