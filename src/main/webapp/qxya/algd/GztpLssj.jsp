<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
//String albm=session.getAttribute("albm").toString();
String albm = request.getParameter("albm"); //得不到值，不是提交from
String whereclause="";
if (albm!=""){
	whereclause=" albm='"+albm+"'";
}
else
{
	whereclause=" 1=1 ";
}
try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_DXSG_SGTP where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.scsj,'yyyy-mm-dd hh24:mi') as scsj1,s.sxmc from Z_DXSG_SGTP t,J_GDGY_SXZD s where "+ whereclause +" and t.TPLX=s.sxid order by scsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getLong("id")  + 
        		",albm:'"+gridResultSet.getString("albm") +"'" +
        		",tpmc:'"+ CheckSting(gridResultSet.getString("tpmc"))+"'"+
        		",tplx:'"+ CheckSting(gridResultSet.getString("tplx"))+"'"+
        		",tpms:'"+ CheckSting(gridResultSet.getString("tpms"))+"'"+
        		",tplj:'"+ CheckSting(gridResultSet.getString("tplj"))+"'"+
        		",scsj:'"+CheckSting(gridResultSet.getString("scsj1"))+"'"+
        		
        		",sxmc:'"+CheckSting(gridResultSet.getString("sxmc"))+"'"+
        		",sjc:'"+ gridResultSet.getString("sjc").toString()+"'},";
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
