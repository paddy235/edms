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
       		return " ";
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
       		return " ";
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

//String education = request.getParameter("action");
//System.out.println("chenzhen:");







try {
    
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
   	System.out.println("index:"+index);
   	System.out.println("pageSize:"+pageSize);
   	
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_jgtz where "+whereclause;
	
	System.out.println("sql_Query_count:"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	
	//解决分页最后一条记录更新问题
	if ((totalCount!=0)&&(totalCount<index+1))
	{
		index=index-pageSize;
	}
	
	//System.out.println(0%10);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select z.*,to_char(tzsj,'yyyy-mm-dd hh:mi') tzsj1,to_char(ccsj,'yyyy-mm-dd hh:mi') ccsj1 from z_yxgl_jgtz z where "+ whereclause +" order by tzsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		//System.out.println(gridResultSet.getString("lcddy"));
		
		//System.out.println("lcddy:"+convertNull(gridResultSet.getString("lcddy")));
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",tzid:" +gridResultSet.getLong("tzid")  + 
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+ convertNull(gridResultSet.getString("dwmc"))+"'"+
        		",mlh:'"+ convertNull(gridResultSet.getString("tzbh"))+"'"+
        		",lcddy:'"+ convertNull(gridResultSet.getString("lcddy"))+"'"+
        		",jgdd:'"+ convertNull(gridResultSet.getString("ksjtwz"))+"'"+
        		",jsjtwz:'"+ convertNull(gridResultSet.getString("jsjtwz"))+"'"+
        		",xb:'"+ convertNull(gridResultSet.getString("xb"))+"'"+
        		",m_ksjtwx:'"+ convertNull(gridResultSet.getString("m_ksjtwx"))+"'"+
        		",m_jsjtwx:'"+ convertNull(gridResultSet.getString("m_jsjtwx"))+"'"+
        		",zbjg:'"+ convertNull(gridResultSet.getString("t_zbjgb"))+"'"+
        		",tjg:'"+ convertNull(gridResultSet.getString("t_jgb"))+"'"+
        		",zbjgb:'"+ convertNull(gridResultSet.getString("zbjgb"))+"'"+
        		",jg:'"+ convertNull(gridResultSet.getString("jgb"))+"'"+
        		",sg:'"+ convertNull(gridResultSet.getString("sgb"))+"'"+
        		",tzsj:'"+ convertNull(gridResultSet.getString("tzsj1"))+"'"+
        		",ccsj:'"+ convertNull(gridResultSet.getString("ccsj1"))+"'"+
        		",ddy:'"+ convertNull(gridResultSet.getString("gdddy"))+"'"+
        		",xdy:'"+ convertNull(gridResultSet.getString("xdy"))+"'"+
        		",pdqk:'"+ convertNull(gridResultSet.getString("pdqk"))+"'"+
        		",bz:'"+ convertNull(gridResultSet.getString("bz"))+"'"+
        		",jgyy:'"+ convertNull(gridResultSet.getString("jgyy"))+"'"+
        		",sgmlh:'"+ convertNull(gridResultSet.getString("sgmlh"))+"'"+
        		",zt:'"+ convertNull(gridResultSet.getString("zt"))+"'},";
	}
	
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
    db_connection.close();
    System.out.println(json);
    response.getWriter().write(json);
     
} 

catch(Exception ex) {
}

%>
