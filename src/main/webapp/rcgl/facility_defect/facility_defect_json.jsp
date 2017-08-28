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
String whereclause_defect=request.getParameter("whereclause");



try {
    
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
     
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_qxgl qx where  "+whereclause_defect;
	
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	//解决分页最后一条记录更新问题
	if ((totalCount!=0)&&(totalCount<index+1))
	{
		index=index-pageSize;
	}
	
	//System.out.println(0%10);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select qx.*,'' mc from z_yxgl_qxgl qx where  "+ whereclause_defect +" order by fxsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println("OPOPOPOPOPO:"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		//System.out.println(gridResultSet.getString("lcddy"));
		
		//System.out.println("lcddy:"+convertNull(gridResultSet.getString("lcddy")));
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",qxid:" +gridResultSet.getLong("qxid")  + 
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+ convertNull(gridResultSet.getString("dwmc"))+"'"+
        		",qjbh:'"+ convertNull(gridResultSet.getString("qjbh"))+"'"+
        		",qjmc:'"+ convertNull(gridResultSet.getString("qjmc"))+"'"+
        		",xb:'"+ convertNull(gridResultSet.getString("xb"))+"'"+
        		",gh:'"+ convertNull(gridResultSet.getString("gh"))+"'"+
        		",fxsj:'"+ convertDate(gridResultSet.getDate("fxsj"))+" "+convertTime(gridResultSet.getTime("fxsj"))+"'"+
        		",sbmc:'"+ convertNull(gridResultSet.getString("sbmc"))+"'"+
        		",qxnr:'"+ convertNull(gridResultSet.getString("qxnr"))+"'"+
        		",qxdj:'"+ convertNull(gridResultSet.getString("qxdj"))+"'"+
        		",fkr:'"+ convertNull(gridResultSet.getString("fkr"))+"'"+
        		",fkbm:'"+ convertNull(gridResultSet.getString("fkbm"))+"'"+
        		",zrr:'"+ convertNull(gridResultSet.getString("zrr"))+"'"+
        		",zrbm:'"+ convertNull(gridResultSet.getString("zrbm"))+"'"+
        		",cljg:'"+ convertNull(gridResultSet.getString("cljg"))+"'"+
        		",xjsj:'"+ convertDate(gridResultSet.getDate("xjsj"))+" "+convertTime(gridResultSet.getTime("xjsj"))+"'"+
        		",xlbgr:'"+ convertNull(gridResultSet.getString("xlbgr"))+"'"+
        		",clfzr:'"+ convertNull(gridResultSet.getString("clfzr"))+"'"+
        		",clcs:'"+ convertNull(gridResultSet.getString("clcs"))+"'"+
        		",mc:'"+ convertNull(gridResultSet.getString("mc"))+"'"+
        		",clgc:'"+ convertNull(gridResultSet.getString("clgc"))+"'},";
	}
	
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
    db_connection.close();
    //System.out.println(json);
    response.getWriter().write(json);
     
} 

catch(Exception ex) {
}

%>
