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
	
	
	
	String sql_Query_count="select count(*) from J_GDGY_KX a where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.*, b.xlm, c.gqmc from J_GDGY_KX a,j_gyjc_xlzd b,J_GYJC_GQZD c where "+whereclause+" and a.xldm=b.xldm and a.gqdm=c.gqdm ) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{GQDM:'"+gridResultSet.getString(2)+"'" +
        		",KGH:'"+(gridResultSet.getString(3)==null?"":gridResultSet.getString(3))+"'" +
        		",KXMC:'"+ (gridResultSet.getString(4)==null?"":gridResultSet.getString(4))+"'"+
        		",SXX:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",XLDM:'"+ (gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		",TDQD:'"+ (gridResultSet.getString(7)==null?"":gridResultSet.getString(7))+"'"+
        		",BHZZDM:'"+ (gridResultSet.getString(10)==null?"":gridResultSet.getString(10))+"'"+
        		",GLB:'"+ (gridResultSet.getString(9)==null?"":gridResultSet.getString(9))+"'"+
        		",CJZZDM:'"+ (gridResultSet.getString(11)==null?"":gridResultSet.getString(11))+"'"+
        		",XLM:'"+ (gridResultSet.getString(12)==null?"":gridResultSet.getString(12))+"'"+
        		",GQMC:'"+ (gridResultSet.getString(13)==null?"":gridResultSet.getString(13))+"'"+
        		",XCXZFW:'"+ (gridResultSet.getString(8)==null?"":gridResultSet.getString(8))+"'"+
        		",ROWID:'"+gridResultSet.getString(2)+"-"+gridResultSet.getString(10)+"'},";
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


