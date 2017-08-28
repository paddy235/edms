<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>

<%
String start = (String)request.getParameter("start");
String limit = (String)request.getParameter("limit");
String whereclause = request.getParameter("whereclause");
System.out.println("whereclause" + whereclause);


try {
    int index = 0;
    if(start != null){  
         index = Integer.parseInt(start);
    }  
    int pageSize = 10;
    if(limit != null){    
    	 pageSize = Integer.parseInt(limit);
    }
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_qxya_yagd where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
//	String sql_Query="select * from (select rownum xh,temp.* from (select * from z_qxya_yagd where "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,(select sxmc from J_GDGY_SXZD where sxid=t.ZY) as ZYMC,(select sxmc from J_GDGY_SXZD where sxid=t.GZXZ) as XZMC,(select sxmc from J_GDGY_SXZD where sxid=t.GZLB) as LBMC from z_qxya_yagd t where "
					+ whereclause +"  ) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{yabh:" + CheckSting(gridResultSet.getString("YABH"))  + 
        		",zy:'"+ CheckSting(gridResultSet.getString("ZY")) + "'" +
        		",yamc:'"+ CheckSting(gridResultSet.getString("YAMC"))+ "'"+
        		",gzlb:'"+ CheckSting(gridResultSet.getString("GZLB"))+ "'"+
        		",gzxz:'"+ CheckSting(gridResultSet.getString("GZXZ"))+ "'"+
        		",XZMC:'"+ CheckSting(gridResultSet.getString("XZMC"))+ "'"+
        		",LBMC:'"+ CheckSting(gridResultSet.getString("LBMC"))+ "'"+
        		",ZYMC:'"+ CheckSting(gridResultSet.getString("ZYMC"))+ "'"+
        		",zdr:'"+ CheckSting(gridResultSet.getString("ZDR"))+ "'"+        		
        		",zdrq:'"+ CheckDate(gridResultSet.getString("ZDRQ")) +"'"+
        		",yanr:'"+ CheckSting(gridResultSet.getString("YANR"))        		
        		+ "'},";
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
    db_connection.close();
} 

catch(Exception ex) {
}

%>
