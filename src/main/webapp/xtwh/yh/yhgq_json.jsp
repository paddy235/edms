<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>



<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");



String whereclause="YHDM='"+request.getParameter("YHDM")+"'";


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from J_GYJC_YHGQ where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select s.*,t.gqmc from J_GYJC_YHGQ s,J_GYJC_GQZD t where s.gqdm=t.gqdm AND "+whereclause+") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);

	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{YHDM:'" +gridResultSet.getString(2)+"'" +
        		",GQDM:'"+gridResultSet.getString(3)+"'" +
        		",GQMC:'"+gridResultSet.getString(4)+"'" +
        		",ROWID:'"+gridResultSet.getString(2)+"-"+gridResultSet.getString(3)+"'},";
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

