<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.sql.*"%>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");

String whereclause="";
if (session.getAttribute("whereclause")!=null){
	whereclause=session.getAttribute("whereclause").toString().trim();
}
else
{
	whereclause=" 1=1 ";
}
session.removeAttribute("whereclause");
try {
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from Z_jcsj_ry where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from Z_JCSJ_ry where "+ whereclause +" order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",szdw:'"+CheckSting(gridResultSet.getString("szdw")) +"'" +
        		",bm:'"+ CheckSting(gridResultSet.getString("bm"))+"'"+
        		",zw:'"+CheckSting(gridResultSet.getString("zw"))+"'"+
        		",zy:'"+ CheckSting(gridResultSet.getString("zy"))+"'"+
        		",xm:'"+ CheckSting(gridResultSet.getString("xm"))+"'"+
        		",gh:'"+CheckSting(gridResultSet.getString("gh")) +"'"+
        		",xb:'"+ CheckSting(gridResultSet.getString("xb"))+"'"+
        		",jg:'"+CheckSting(gridResultSet.getString("jg"))+"'"+
        		",mz:'"+ CheckSting(gridResultSet.getString("mz"))+"'"+
        		",hkxz:'"+CheckSting(gridResultSet.getString("hkxz"))+"'"+
        		",csd:'"+CheckSting(gridResultSet.getString("csd"))+"'"+
        		",csrq:'"+frmDate.format(gridResultSet.getDate("csrq")).toString() +"'"+
        		",sfzh:'"+ CheckSting(gridResultSet.getString("sfzh"))+"'"+
        		",whcd:'"+ CheckSting(gridResultSet.getString("whcd"))+"'"+
        		",zzmm:'"+ CheckSting(gridResultSet.getString("zzmm"))+"'"+
        		",hyzk:'"+ CheckSting(gridResultSet.getString("hyzk"))+"'"+
        		",gz:'"+ CheckSting(gridResultSet.getString("gz"))+"'"+
        		",aqdj:'"+ CheckSting(gridResultSet.getString("aqdj"))+"'"+
        		",ydsgdj:'"+ CheckSting(gridResultSet.getString("ydsgdj"))+"'"+
        		",jsdj:'"+ CheckSting(gridResultSet.getString("jsdj"))+"'"+
        		
        		        		
        		",bc:'"+CheckSting(gridResultSet.getString("bc")) +"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    System.out.println(json);
    db_connection.close();
   // System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
