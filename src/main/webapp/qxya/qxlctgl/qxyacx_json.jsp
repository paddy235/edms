<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String start = (String)request.getParameter("start");
String limit = (String)request.getParameter("limit");
String education = (String)request.getParameter("action");
System.out.println("startdddddddddddddddddd:"+start);

String whereclause="";
Object o = session.getAttribute("whereclause");
if(o == null){
whereclause = "";
}else{
whereclause = o.toString();
}
if (!whereclause.equalsIgnoreCase("")){
	whereclause=session.getAttribute("whereclause").toString().trim();
System.out.println("session:"+whereclause);

}
else
{
     whereclause=" 1=1 ";
}


session.removeAttribute("whereclause");
try {
    int index = 0;
    if(start != null){  
         index = Integer.parseInt(start);
    }  
    int pageSize = 10;
    if(limit != null){    
    	 pageSize = Integer.parseInt(limit);
    }
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_qxya_yagd where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from z_qxya_yagd where "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{yabh:" +gridResultSet.getInt("YABH")  + 
        		",zy:'"+gridResultSet.getString("ZY") + "'" +
        		",yamc:'"+ gridResultSet.getString("YAMC")+ "'"+
        		",gzlb:'"+ gridResultSet.getString("GZLB")+ "'"+
        		",gzxz:'"+ gridResultSet.getString("GZXZ")+ "'"+
        		",zdr:'"+ gridResultSet.getString("ZDR")+ "'"+        		
        		",zdrq:'"+ gridResultSet.getDate("ZDRQ").toString() +"'"+
        		",yanr:'"+ gridResultSet.getString("YANR").replaceAll("\r\n","\\\\r\\\\n")        		
        		+ "'},";
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
    db_connection.close();
} 

catch(Exception ex) {
}

%>
