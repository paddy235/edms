<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");

try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from Z_YXGL_TZS a where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.xdtmc from Z_YXGL_TZS a,j_gyjc_xdtzd b where "+ whereclause +" and a.xdtdm=b.xdtdm order by tzrq desc ) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	//System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{TZSID:" +gridResultSet.getInt(2)+"" +
				",TZSH:" +gridResultSet.getInt(3)+"" +
        		",TZRQ:'"+(gridResultSet.getDate(4)==null?"":gridResultSet.getDate(4))+"'" +
        		",XDTDM:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",DDMC:'"+ (gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		",XDMC:'"+ (gridResultSet.getString(7)==null?"":gridResultSet.getString(7))+"'"+
				",ZT:'"+ (gridResultSet.getString(9)==null?"":gridResultSet.getString(9))+"'"+
        		",XDTMC:'"+ (gridResultSet.getString(11)==null?"":gridResultSet.getString(11))+"'"+
        		",TZNR:'"+ (gridResultSet.getString(8)==null?"":gridResultSet.getString(8)).toString().replaceAll("\\r\\n","\\\\r\\\\n")+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    
    //  System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
