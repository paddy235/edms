<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
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
	String sql_Query_count="select count(*) from Z_JCSJ_FHKG where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from Z_JCSJ_FHKG where "+ whereclause +" order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",szdw:'"+gridResultSet.getString("szdw") +"'" +
        		",bm:'"+ gridResultSet.getString("bm")+"'"+
        		",zw:'"+gridResultSet.getString("zw")+"'"+
        		",zy:'"+ gridResultSet.getString("zy")+"'"+
        		",xm:'"+ gridResultSet.getString("xm")+"'"+
        		",gh:'"+gridResultSet.getString("gh") +"'"+
        		",xb:'"+ gridResultSet.getString("xb")+"'"+
        		",jg:'"+gridResultSet.getString("jg")+"'"+
        		",mz:'"+ gridResultSet.getString("mz")+"'"+
        		",hkxz:'"+gridResultSet.getString("hkxz")+"'"+
        		",csd:'"+gridResultSet.getString("csd")+"'"+
        		",csrq:'"+frmDate.format(gridResultSet.getDate("csrq")).toString() +"'"+
        		",sfzh:'"+ gridResultSet.getString("sfzh")+"'"+
        		",whcd:'"+ gridResultSet.getString("whcd")+"'"+
        		",zzmm:'"+ gridResultSet.getString("zzmm")+"'"+
        		",hyzk:'"+ gridResultSet.getString("hyzk")+"'"+
        		",gz:'"+ gridResultSet.getString("gz")+"'"+
        		",aqdj:'"+ gridResultSet.getString("aqdj")+"'"+
        		",ydsgdj:'"+ gridResultSet.getString("ydsgdj")+"'"+
        		",jsdj:'"+ gridResultSet.getString("jsdj")+"'"+
        		",bc:'"+gridResultSet.getString("bc") +"'},";
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
