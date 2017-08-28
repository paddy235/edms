<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
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
    }%>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");

String whereclause=request.getParameter("whereclause"); 
  
try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_JCSJ_qxlxt where "+whereclause;
	System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	 
	String sql_Query="select * from (select rownum xh,temp.* from (select * from Z_JCSJ_qxlxt where "+ whereclause +" order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println("sdfsdfsdfsdfsfsdfsdfsdfsdfsfsdfs"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    //xb,xzjg,qjzc,glb,jcwgh,dlxgd,dlxxh,dydj,gs,cqdw,cqdwlxr,cqdwlxrdh,xjnf,bz
    
    while(gridResultSet.next()){
		json += "{xh:"+gridResultSet.getLong("xh") +
		        ",id:" +gridResultSet.getInt("id")  + 
        		",ZYZDSMC:'"+gridResultSet.getString("ZYZDSMC") + "'" +
        		//",fbdw:'"+ gridResultSet.getString("fbdw")+ "'"+
        		",FBRQ:'"+ gridResultSet.getDate("FBRQ").toString() +"'"+   
        		",GZZDLJ:'"+convertNull(gridResultSet.getString("GZZDLJ")) +"'},";   
}
	System.out.println("json="+json);
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //System.out.println(json);
    db_connection.close();
   // System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
