<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>


  
<%
try {
   
    int totalCount=1;

    DbTrade db_connection=new DbTrade();
	
	String sql_Query="select rowid,t.* from J_GYJC_YH t where yhdm='"+(String)session.getAttribute("YHDM")+"'";
	
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
     String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{YHDM:'" +gridResultSet.getString(2)+"'" +
        		",YHMC:'"+gridResultSet.getString(3)+"'" +
        		",YHMM:'"+gridResultSet.getString(4)+"'"+
        		",YHIP:'"+(gridResultSet.getString(5)==null?"":gridResultSet.getString(5))+"'"+
        		",GWMC:'"+(gridResultSet.getString(6)==null?"":gridResultSet.getString(6))+"'"+
        		",DWJB:'"+(gridResultSet.getString(7)==null?"":gridResultSet.getString(7))+"'"+
        		",DWDM:'"+(gridResultSet.getString(8)==null?"":gridResultSet.getString(8))+"'"+
        		",SESSION_DATE:'"+(gridResultSet.getString(10)==null?"":gridResultSet.getString(10))+"'"+
        		",SESSIONID:'"+(gridResultSet.getString(11)==null?"":gridResultSet.getString(11))+"'"+
        		",BZ:'"+(gridResultSet.getString(12)==null?"":gridResultSet.getString(12))+"'"+
        		",DDTDM:'"+(gridResultSet.getString(13)==null?"":gridResultSet.getString(13))+"'"+
        		",ZCSJ:'"+(gridResultSet.getString(9)==null?"":gridResultSet.getString(9)).toString()+"'},";
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


