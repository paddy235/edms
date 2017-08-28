<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%!
SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
 
public String gettime(Date timeDate)
{ 
  if(timeDate==null)
  {
    return "";
  }
  else
  {
    return dateFormat.format(timeDate).toString();
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
    private String SetTime(String tm)
    {
           if(tm.equals(" "))
           {
             return "";
           }
           else
           {
             return tm;
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
       return Str.replaceAll("\r\n","\\\\r\\\\n");
     }
    } %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String jhid=request.getParameter("jhid");
System.out.println("jhid:jhid:"+jhid);
System.out.println("zy:zy zyzyzyzyzyzyzyzyzyy");

try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;
  
    DbTrade db_connection=new DbTrade();
   
	String sql_Query_count="select count(*) from z_yxgl_cmd_jcwzy jcwzy,J_GYJC_GQZD gq where jcwzy.sldwid=gq.gqdm  and ltype='0' and (mlzt='100') and jhid='"+jhid+"'";
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select jcwzy.*,gq.gqmc from z_yxgl_cmd_jcwzy jcwzy,J_GYJC_GQZD gq where jcwzy.sldwid=gq.gqdm  and ltype='0' and  (mlzt='100' ) and jhid='"+jhid+"')temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    System.out.println("jcwzy:jcwzy:"+sql_Query);
    
    SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{commdid:" +gridResultSet.getLong("commandid")  + 
				",xh:"+gridResultSet.getLong("xh") +
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+ gridResultSet.getString("dwmc")+"'"+
        		",jhid:'"+ gridResultSet.getString("jhid")+"'"+
        		",mlh:'"+ SetNull(gridResultSet.getString("mlh"))+"'"+
        		",sldwid:'"+ gridResultSet.getString("sldwid")+"'"+
        		",sldwmc:'"+ gridResultSet.getString("sldwmc")+"'"+
        		",flsj:'"+SetTime( gettime(gridResultSet.getDate("flsj")))+"'"+
        		",yqwcsj:'"+ SetTime(gettime(gridResultSet.getDate("yqwcsj"))+" "+convertTime(gridResultSet.getTime("yqwcsj")))+"'"+
        		",mlnr:'"+ SetNull(gridResultSet.getString("mlnr"))+"'"+
        	    ",tdqd:'"+ SetNull(gridResultSet.getString("tdqd"))+"'"+
        		",pzsj:'"+ SetTime(gettime(gridResultSet.getDate("pzsj"))+" "+convertTime(gridResultSet.getTime("pzsj")))+"'"+
        		",xlsj:'"+ SetTime(gettime(gridResultSet.getDate("xlsj"))+" "+convertTime(gridResultSet.getTime("xlsj")))+"'"+
        		",slsj:'"+ SetTime(gettime(gridResultSet.getDate("slsj"))+" "+convertTime(gridResultSet.getTime("slsj")))+"'"+
        		",flr:'"+ SetNull(gridResultSet.getString("flr"))+"'"+
        		",slr:'"+ SetNull(gridResultSet.getString("slr"))+"'"+
        		",xlr:'"+ SetNull(gridResultSet.getString("xlr"))+"'"+
        		",mlbz:'"+ SetNull(gridResultSet.getString("mlbz"))+"'"+
        		",mlzt:'"+ SetNull(gridResultSet.getString("mlzt"))+"'"+
        		",xlnr:'"+ SetNull(gridResultSet.getString("xlnr"))+"'"+
        	    ",gqmc:'"+ SetNull(gridResultSet.getString("gqmc"))+"'"+
        	    ",GDB:'"+ SetNull(SetNull(gridResultSet.getString("bdb")))+"'"+
        	     ",zybs:'"+ SetNull(gridResultSet.getString("zybs"))+"'"+
        		",ddy:'"+ SetNull(gridResultSet.getString("ddy"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
     db_connection.close();
      System.out.println("jcwzy:jcwzy:"+json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
