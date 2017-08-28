<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.regex.Pattern"%>
<%@page import="java.util.regex.Matcher"%>
<%!
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
<%!   public String SetNull(String Str)
    {
    //System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null||Str.equals("null"))
      {
        return "";
      }
      else
      {
       Pattern p = Pattern.compile("\r\n");     
  Matcher m = p.matcher(Str);   
  System.out.println("PPPP"+m.replaceAll("\\\\r\\\\n"));   
       		return m.replaceAll("\\\\r\\\\n");
     }
    } %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String jhid=request.getParameter("jhid");
System.out.println("jhid:jhid:"+jhid);


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;
System.out.println("----------------------");
    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*)  from z_yxgl_cmd_bdsdz bdsdz ,J_GYJC_GQZD gq where   gq.gqdm=bdsdz.sldwid and (mlzt='1' or mlzt='2' or mlzt='3' or mlzt='4') and bdsdz.jhid="+jhid;
	System.out.println("000"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select bdsdz.*,gq.gqmc from z_yxgl_cmd_bdsdz bdsdz ,J_GYJC_GQZD gq  where   gq.gqdm=bdsdz.sldwid and (mlzt='1' or mlzt='2' or mlzt='3' or mlzt='4') and bdsdz.jhid='"+jhid+"' order by mllx desc,bdsdz.sldwid,bdsdz.sldwid)temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println("YYYYYYY:"+sql_Query);
	//out.println(sql_Query);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{commdid:" +gridResultSet.getLong("commdid")+ 
				",xh:"+gridResultSet.getLong("xh") +
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+ gridResultSet.getString("dwmc")+"'"+
        		",jhid:'"+ gridResultSet.getString("jhid")+"'"+
        		",mlh:'"+ SetNull(gridResultSet.getString("mlh"))+"'"+
        		",sldwid:'"+ gridResultSet.getString("sldwid")+"'"+
        		",sldwmc:'"+ gridResultSet.getString("sldwmc")+"'"+
        		",czkah:'"+SetNull( gridResultSet.getString("czkah"))+"'"+
        		",mlnr:'"+ SetNull(gridResultSet.getString("mlnr"))+"'"+
        		",tsdqj:'"+ SetNull(gridResultSet.getString("tsdqj"))+"'"+
        		",flsj:'"+ convertDate(gridResultSet.getDate("flsj"))+" "+convertTime(gridResultSet.getTime("flsj"))+"'"+
        		",pzsj:'"+ convertDate(gridResultSet.getDate("pzsj"))+" "+convertTime(gridResultSet.getTime("pzsj"))+"'"+
        		",xlsj:'"+ convertDate(gridResultSet.getDate("xlsj"))+" "+convertTime(gridResultSet.getTime("xlsj"))+"'"+
        		",flr:'"+ SetNull(gridResultSet.getString("flr"))+"'"+
        		",slr:'"+ SetNull(gridResultSet.getString("slr"))+"'"+
        		",xlr:'"+ SetNull(gridResultSet.getString("xlr"))+"'"+
        		",mlbz:'"+ SetNull(gridResultSet.getString("mlbz"))+"'"+
        		",mlzt:'"+ SetNull(gridResultSet.getString("mlzt"))+"'"+
        		",mllx:'"+ SetNull(gridResultSet.getString("mllx"))+"'"+
        		",ddy:'"+ SetNull(gridResultSet.getString("ddy"))+"'"+
        		",gqmc:'"+ SetNull(gridResultSet.getString("gqmc"))+"'"+
        		
        		//",tdqdmc:'"+ SetNull(gridResultSet.getString("tdqdmc"))+"'"+
        		",czlx:'"+ SetNull(gridResultSet.getString("czlx"))+"'},";
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
