<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
 
<%!   
	private String convertNull(String value)
    {
    	//System.out.println("value:"+value);
      	if(value==null)
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
	
	
	
	String sql_Query_count="select count(*) from Z_YXGL_CMD_DZ jcwzy,J_GYJC_GQZD gq where jcwzy.sldwid=gq.gqdm and ltype='0' and "+whereclause;
	
	System.out.println("sql_Query_count:ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select jcwzy.*,gq.gqmc from Z_YXGL_CMD_DZ jcwzy,J_GYJC_GQZD gq where jcwzy.sldwid=gq.gqdm  and ltype='0' and "+ whereclause +" order by flsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    
    while(gridResultSet.next()){
		
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",commandid:" +gridResultSet.getLong("commandid")  + 
				",dwid:'"+convertNull(gridResultSet.getString("dwid")) +"'" +
        		",dwmc:'"+ convertNull(gridResultSet.getString("dwmc"))+"'"+
        		",jhid:'"+ convertNull(gridResultSet.getString("jhid"))+"'"+
        		",mlh:'"+convertNull(gridResultSet.getString("mlh")) +"'" +
        		",sldwid:'"+ convertNull(gridResultSet.getString("sldwid"))+"'"+
        		",sldwmc:'"+ convertNull(gridResultSet.getString("sldwmc"))+"'"+
        		",flsj:'"+ convertDate(gridResultSet.getDate("flsj"))+"'"+
        		        		",wcsj:'"+ convertDate(gridResultSet.getDate("wcsj"))+" "+convertTime(gridResultSet.getTime("wcsj"))+"'"+
        		",yqwcsj:'"+ convertDate(gridResultSet.getDate("yqwcsj"))+" "+convertTime(gridResultSet.getTime("yqwcsj"))+"'"+
        		",mlnr:'"+ convertNull(gridResultSet.getString("mlnr"))+"'"+
        		",tdqd:'"+ convertNull(gridResultSet.getString("tdqd"))+"'"+
        		",pzsj:'"+ convertDate(gridResultSet.getDate("pzsj"))+" "+convertTime(gridResultSet.getTime("pzsj"))+"'"+
        		",xlsj:'"+ convertDate(gridResultSet.getDate("xlsj"))+" "+convertTime(gridResultSet.getTime("xlsj"))+"'"+
        		",flr:'"+convertNull(gridResultSet.getString("flr")) +"'" +
        		",slr:'"+ convertNull(gridResultSet.getString("slr"))+"'"+
        		",xlr:'"+ convertNull(gridResultSet.getString("xlr"))+"'"+
        		",mlbz:'"+convertNull(gridResultSet.getString("mlbz")) +"'" +
        		",mlzt:'"+ convertNull(gridResultSet.getString("mlzt"))+"'"+
        		 ",gqmc:'"+ convertNull(gridResultSet.getString("gqmc"))+"'"+
        		    ",GDB:'"+ convertNull(gridResultSet.getString("bdb"))+"'"+
        	     ",zybs:'"+ convertNull(gridResultSet.getString("zybs"))+"'"+
        		",ddy:'"+ convertNull(gridResultSet.getString("ddy"))+"'},";
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
	System.out.println(ex.toString());
}

%>
