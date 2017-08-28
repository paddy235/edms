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
	
	
	
	String sql_Query_count="select count(*) from Z_TJBB_GDGZFX a where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.ggdmc from z_tjbb_gdgzfx a,j_gyjc_gddzd b where "+ whereclause +" and a.gddmc=b.gdddm order by SJ ) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{GZID:" +gridResultSet.getInt(2)+"" +
				",SJ:'"+(gridResultSet.getDate(3)==null?"":gridResultSet.getDate(3))+"'" +
        		",LB:'"+(gridResultSet.getString(4)==null?"":gridResultSet.getString(4))+"'" +
        		",GK:'"+(gridResultSet.getString(5)==null?"":gridResultSet.getString(5)).replaceAll("\\r\\n","\\\\r\\\\n")+"'" +
        		",YY:'"+(gridResultSet.getString(6)==null?"":gridResultSet.getString(6)).replaceAll("\\r\\n","\\\\r\\\\n")+"'" +
        		",GDDMC:'"+(gridResultSet.getString("GDDMC")==null?"":gridResultSet.getString("GDDMC"))+"'" +
        		",GGDMC:'"+(gridResultSet.getString("GGDMC")==null?"":gridResultSet.getString("GGDMC"))+"'" +
        		",bh:'"+(gridResultSet.getString("bh")==null?"":gridResultSet.getString("bh"))+"'" +
        		",dd:'"+(gridResultSet.getString("dd")==null?"":gridResultSet.getString("dd"))+"'" +
        		",yxxc:'"+(gridResultSet.getString("yxxc")==null?"":gridResultSet.getString("yxxc"))+"'" +
        		",tdsf:'"+(gridResultSet.getString("tdsf")==null?"":gridResultSet.getString("tdsf"))+"'" +
        		",BZ:'"+ (gridResultSet.getString(7)==null?"":gridResultSet.getString(7)).replaceAll("\\r\\n","\\\\r\\\\n").toString()+"'},";
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
