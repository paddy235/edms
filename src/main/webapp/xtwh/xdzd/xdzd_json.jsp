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
	
	
	
	String sql_Query_count="select count(*) from J_GYJC_XDZD b where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.*, b.ljqc from J_GYJC_XDZD a,j_gyjc_ljzd b where "+whereclause+" and a.ljdm=b.ljdm order by XDDM) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{XDDM:'" +gridResultSet.getString(2)+"'" +
        		",XDJC:'"+gridResultSet.getString(3)+"'" +
        		",XDMC:'"+ gridResultSet.getString(4)+"'"+
        		",XDDH:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",XDCZ:'"+ (gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		",XDDZ:'"+ (gridResultSet.getString(7)==null?"":gridResultSet.getString(7))+"'"+
        		",LJDM:'"+ (gridResultSet.getString(8)==null?"":gridResultSet.getString(8))+"'"+
        		",JD:'"+ (gridResultSet.getString(10)==null?"":gridResultSet.getString(10))+"'"+
        		",WD:'"+ (gridResultSet.getString(11)==null?"":gridResultSet.getString(11))+"'"+
        		",LJQC:'"+ (gridResultSet.getString(12)==null?"":gridResultSet.getString(12))+"'"+
        		",DPYM:'"+ gridResultSet.getString(9).toString()+"'},";
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


