<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%!   public String SetNull(String Str)
    {     
     
      if(Str==null||Str.equals("null"))
      { 
        return "";
      }
      else
      {
       return Str.replaceAll("\r\n","\\\\r\\\\n");
     }
    }
    
        private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } 
    
    private String convertTime(java.sql.Time value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("HH:mm");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    }
    
     %>
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
	
	String sql_Query_count="select count(*) from z_yxgl_wgztyfs where "+whereclause;
	System.out.println(sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from z_yxgl_wgztyfs where "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{xh:" +gridResultSet.getInt(1)+"" +
				",seq:" +gridResultSet.getInt(2)+"" +
				//",fssj:'" + (gridResultSet.getDate(3)==null?"":gridResultSet.getDate(3))+"'" +
				",fssj:'"+ SetNull(convertDate(gridResultSet.getDate("fssj"))+" "+convertTime(gridResultSet.getTime("fssj")))+"'"+
				",fsdd:'" + (gridResultSet.getString(10)==null?"":gridResultSet.getString(10))+"'"+       		
				",fsyy:'" + (gridResultSet.getString(4)==null?"":gridResultSet.getString(4))+"'"+
        		",fsnr:'"+ (gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",djr:'"+ (gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		//",jcsj:'"+ (gridResultSet.getDate(7)==null?"":gridResultSet.getDate(7))+"'"+
        		",jcsj:'"+ SetNull(convertDate(gridResultSet.getDate("jcsj"))+" "+convertTime(gridResultSet.getTime("jcsj")))+"'"+
        		
        		",jcr:'"+ (gridResultSet.getString("jcr")==null?"":gridResultSet.getString("jcr")).toString().replaceAll("\\r\\n","\\\\r\\\\n")+"'"+
        		",bz:'"+ (gridResultSet.getString("bz")==null?"":gridResultSet.getString("bz")).toString().replaceAll("\\r\\n","\\\\r\\\\n")+"'},";
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
	System.out.println(ex.getMessage());
}

%>
