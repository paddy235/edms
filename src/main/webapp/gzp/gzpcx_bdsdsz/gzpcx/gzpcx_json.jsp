<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>
 
<%!
      public String SetNull(String Str)
    {
    //System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null ||Str.equals("null"))
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
    }  %>
<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause=request.getParameter("whereclause");
String table=request.getParameter("table");
System.out.println("UUUYYYYYY"+table);


table="z_yxgl_gzpbds_green";


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from "+table+" where "+whereclause;
	System.out.println("gzpCount:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from "+table+" where "+ whereclause +" order by sjc desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println("gzpValue:"+sql_Query);
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
   // System.out.pringln();
    while(gridResultSet.next()){
		json += "{xh:" +gridResultSet.getLong("xh")  + 
				",gzpid:"+gridResultSet.getLong("gzpid") +
        		",gzph:'"+SetNull(gridResultSet.getString("gzph")) +"'" +
        		",dwmc:'"+SetNull(gridResultSet.getString("dwmc")) +"'" +
        		",jhlb:'"+SetNull(gridResultSet.getString("jhlb")) +"'" +
        		",fpr:'"+ SetNull(gridResultSet.getString("fpr"))+"'"+
        		",fpsj:'"+convertDate(gridResultSet.getDate("fpsj"))+" "+convertTime(gridResultSet.getTime("fpsj"))+"'"+
        		",gzldr:'"+ SetNull(gridResultSet.getString("gzldr"))+"'"+
        		",cgrs:'"+ SetNull(gridResultSet.getString("cgrs"))+"'"+
        		",zynr:'"+ SetNull(gridResultSet.getString("zynr"))+"'"+
                ",jssj:'"+ convertDate(gridResultSet.getDate("jssj"))+" "+convertTime(gridResultSet.getTime("jssj"))+"'"+
        		",gzpzt:'"+ gridResultSet.getString("gzpzt")+"'"+
        		",sjc:'"+ convertDate(gridResultSet.getDate("sjc"))+" "+convertTime(gridResultSet.getTime("jssj"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
      db_connection.close();
      System.out.println(json);
      session.removeAttribute("table");
      //session.removeAttribute("whereclause");
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
