<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause= request.getParameter("whereclause");

try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_YXGL_GZTB where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.sj,'yyyy-mm-dd hh24:mi') as fssj1,to_char(t.sj,'yyyy-mm-dd hh24:mi') as xjsj1 from Z_YXGL_GZTB t where "+ whereclause +" order by t.sj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println("ss--"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    String json = "{totalCount:" +totalCount +",root:[";

    while(gridResultSet.next()){
		json += "{GZTBID:" +gridResultSet.getString("GZTBID")  + 

        		",SJ:'"+CheckSting(gridResultSet.getString("fssj1")) +"'" +
                ",TZDWDM:'"+CheckSting(gridResultSet.getString("TZDWDM")) +"'" +
        		",TZDWMC:'"+CheckSting(gridResultSet.getString("TZDWMC")) +"'" +
        		",JSR:'"+CheckSting(gridResultSet.getString("JSR"))+"'"+
        		",JSDH:'"+CheckSting(gridResultSet.getString("JSDH")) +"'" +
        		",TBNR:'"+CheckSting(gridResultSet.getString("TBNR")) +"'" +
        		",ZBDD:'"+CheckSting(gridResultSet.getString("ZBDD"))+"'"+ 
        		",BZ:'"+ CheckSting(gridResultSet.getString("BZ"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    db_connection.close();
    //System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
