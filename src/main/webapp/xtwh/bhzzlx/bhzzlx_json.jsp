<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");



String whereclause="";
if (session.getAttribute("whereclause")!=null){
	whereclause=" trim(SXID)='"+session.getAttribute("whereclause").toString().trim()+"'";
System.out.println("session:"+whereclause);

}
else
{
//session.setAttribute("whereclause","");
whereclause=" 1=1 ";
}
session.removeAttribute("whereclause");
try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from J_GDGY_BHZZLX where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from J_GDGY_BHZZLX where "+ whereclause +" order by BHZZLXBM) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{BHZZLXBM:'" +gridResultSet.getString(2)+ "'" + 
        		",BHZZLXMC:'"+ gridResultSet.getString(3).toString()+"'},";
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
