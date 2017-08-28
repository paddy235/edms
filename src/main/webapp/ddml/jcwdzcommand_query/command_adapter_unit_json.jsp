<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
 
<%!   
	private String convertNull(String value)
    {
    	//System.out.println("value:"+value);
      	if(value==null||value.equals("null"))
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return value.replaceAll("\r\n","\\\\r\\\\n");
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
String whereclause=request.getParameter("whereclause");






try {
    
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
   	System.out.println("index:"+index);
   	System.out.println("pageSize:"+pageSize);
   	
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_cmd_bdsdz bdsdz ,J_GYJC_GQZD gq where  gq.gqdm=bdsdz.sldwid and "+whereclause;
	
	System.out.println("sql_Query_count:909090909090"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select bdsdz.*,gq.gqmc from z_yxgl_cmd_bdsdz bdsdz ,J_GYJC_GQZD gq where  gq.gqdm=bdsdz.sldwid and "+ whereclause +" order by flsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println("********"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    
    while(gridResultSet.next()){
		
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",commdid:" +gridResultSet.getLong("commdid")  + 
				",dwid:'"+convertNull(gridResultSet.getString("dwid")) +"'" +
        		",dwmc:'"+ convertNull(gridResultSet.getString("dwmc"))+"'"+
        		",jhid:'"+ convertNull(gridResultSet.getString("jhid"))+"'"+
        		",mlh:'"+convertNull(gridResultSet.getString("mlh")) +"'" +
        		",sldwid:'"+ convertNull(gridResultSet.getString("sldwid"))+"'"+
        		",sldwmc:'"+ convertNull(gridResultSet.getString("sldwmc"))+"'"+
        		",czkah:'"+convertNull(gridResultSet.getString("czkah")) +"'" +
        		",mlnr:'"+ convertNull(gridResultSet.getString("mlnr"))+"'"+
        		",tsdqj:'"+ convertNull(gridResultSet.getString("tsdqj"))+"'"+
        		",flsj:'"+ convertDate(gridResultSet.getDate("flsj"))+" "+convertTime(gridResultSet.getTime("flsj"))+"'"+
        		",pzsj:'"+ convertDate(gridResultSet.getDate("pzsj"))+" "+convertTime(gridResultSet.getTime("pzsj"))+"'"+
        		",xlsj:'"+ convertDate(gridResultSet.getDate("xlsj"))+" "+convertTime(gridResultSet.getTime("xlsj"))+"'"+
        		",flr:'"+convertNull(gridResultSet.getString("flr")) +"'" +
        		",slr:'"+ convertNull(gridResultSet.getString("slr"))+"'"+
        		",xlr:'"+ convertNull(gridResultSet.getString("xlr"))+"'"+
        		",mlbz:'"+convertNull(gridResultSet.getString("mlbz")) +"'" +
        		",mlzt:'"+ convertNull(gridResultSet.getString("mlzt"))+"'"+
        		",mllx:'"+ convertNull(gridResultSet.getString("mllx"))+"'"+
        		",ddy:'"+ convertNull(gridResultSet.getString("ddy"))+"'"+
        		",gqmc:'"+ convertNull(gridResultSet.getString("gqmc"))+"'"+
        		//",tdqdmc:'"+ convertNull(gridResultSet.getString("tdqdmc"))+"'"+
        		",czlx:'"+ convertNull(gridResultSet.getString("czlx"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    db_connection.close();
    System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
