<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
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
	String sql_Query_count="select count(*) from Z_JCSJ_TZ where "+whereclause;
	System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.*,b.gqmc,c.mc,d.xlm from  Z_JCSJ_TZ a,j_gyjc_gqzd b,j_gyjc_qjzczd c,j_gyjc_xlzd d  where   "+ whereclause +" and a.xzjg=b.gqdm(+) and a.qjzc=c.qjbm(+) and a.xb=d.xldm order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    //xb,xzjg,qjzc,glb,jcwgh,dlxgd,dlxxh,dydj,gs,cqdw,cqdwlxr,cqdwlxrdh,xjnf,bz
    System.out.println(json);
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",tzmc:'"+gridResultSet.getString("tzmc") + "'" +
        		",xzjg:'"+ gridResultSet.getString("xzjg")+ "'"+
        		",xb:'"+ gridResultSet.getString("xb")+ "'"+
        		",fbrq:'"+ gridResultSet.getDate("fbrq").toString() +"'"+        		
        		",zyfl:'"+ gridResultSet.getString("zyfl")+ "'"+
        		",nrfl:'"+ gridResultSet.getString("nrfl")+ "'"+        		
        		",qjzc:'"+ CheckSting(gridResultSet.getString("qjzc"))+ "'"+
        		",th:'"+ CheckSting(gridResultSet.getString("th"))+ "'"+
        		",tzjs:'"+ CheckSting(gridResultSet.getString("tzjs"))+"'"+
        		",xlm:'"+CheckSting(gridResultSet.getString("xlm"))+"'"+
        		",gqmc:'"+CheckSting(gridResultSet.getString("gqmc"))+"'"+
        		",qjzcmc:'"+CheckSting(gridResultSet.getString("mc"))+"'"+	    
        		",tzlj:'"+gridResultSet.getString("tzlj") +"'},";   
}
	System.out.println("json="+json);
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
