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
String whereclause=request.getParameter("whereclause");

String dwid="";
String dwmc="";
String myURL="../../errorpage.jsp";
if(session.getAttribute("DWMC")!=null||session.getAttribute("DWDM")!=null)
{
    dwmc=session.getAttribute("DWMC").toString();
    dwid=session.getAttribute("DWDM").toString();
}
else
{
    response.sendRedirect(myURL);
}
//whereclause=whereclause + "and  t.bdsdwid like  '"+dwid+"%' ";
try {
    
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
   	System.out.println("index:"+index);
   	System.out.println("pageSize:"+pageSize);
   	
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from view_zbrz t where  "+whereclause;
	
	System.out.println("sql_Query_count:"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,gq.gqmc from view_zbrz t,j_gyjc_gqzd gq where gq.gqdm=t.bdssldwid  and  "+ whereclause +" order by t.bdsflsj) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    
    while(gridResultSet.next()){
		
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
        		",bdsmlh:'"+convertNull(gridResultSet.getString("bdsmlh")) +"'" +
        		",bdsflsj:'"+ convertDate(gridResultSet.getDate("bdsflsj"))+" "+convertTime(gridResultSet.getTime("bdsflsj"))+"'"+
        		",bdssldwid:'"+ convertNull(gridResultSet.getString("bdssldwid"))+"'"+
        		",bdsmlnr:'"+ convertNull(gridResultSet.getString("bdsmlnr"))+"'"+
        		",bdsczkah:'"+ convertNull(gridResultSet.getString("bdsczkah"))+"'"+
        		",bdspzsj:'"+ convertDate(gridResultSet.getDate("bdspzsj"))+" "+convertTime(gridResultSet.getTime("bdspzsj"))+"'"+
        		",bdsxlsj:'"+ convertDate(gridResultSet.getDate("bdsxlsj"))+" "+convertTime(gridResultSet.getTime("bdsxlsj"))+"'"+
        		",bdsflr:'"+ convertNull(gridResultSet.getString("bdsflr"))+"'"+
        		",bdsslr:'"+ convertNull(gridResultSet.getString("bdsslr"))+"'"+
        		",mlh:'"+ convertNull(gridResultSet.getString("mlh"))+"'"+
        		",flsj:'"+ convertDate(gridResultSet.getDate("flsj"))+" "+convertTime(gridResultSet.getTime("flsj"))+"'"+
        		",pzsj:'"+ convertDate(gridResultSet.getDate("pzsj"))+" "+convertTime(gridResultSet.getTime("pzsj"))+"'"+
        		",yqwcsj:'"+ convertDate(gridResultSet.getDate("yqwcsj"))+" "+convertTime(gridResultSet.getTime("yqwcsj"))+"'"+
        		",xlsj:'"+ convertDate(gridResultSet.getDate("xlsj"))+" "+convertTime(gridResultSet.getTime("xlsj"))+"'"+
        		",slr:'"+ convertNull(gridResultSet.getString("slr"))+"'"+
        		",mlnr:'"+ convertNull(gridResultSet.getString("mlnr"))+"'"+
        		",gqmc:'"+ convertNull(gridResultSet.getString("gqmc"))+"'},";
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
