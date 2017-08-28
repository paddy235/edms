<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
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
	String sql_Query_count="select count(*) from Z_GDGY_ZZH where "+whereclause;

	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from Z_GDGY_ZZH where "+ whereclause +" order by ZZHBM desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";

    while(gridResultSet.next()){
		json += "{ZZHBM:" +gridResultSet.getInt("ZZHBM")  + 
        		",ZZHMC:'"+gridResultSet.getString("ZZHMC") +"'" +
        		",QJZC:'"+ gridResultSet.getString("QJZC")+"'"+        		
          		",XBBM:'"+ gridResultSet.getString("XBBM")+"'"+
        		",SXXBM:'"+ gridResultSet.getString("SXXBM")+"'"+
        		",ZZGLB:'"+gridResultSet.getString("ZZGLB")+"'"+
        		",SBXH:'"+gridResultSet.getString("ZZLB")+"'"+
        		",ZZLB:'"+gridResultSet.getString("ZZLB")+"'"+
        		",ZZCZ:'"+gridResultSet.getString("ZZCZ")+"'"+        		
        	    ",KJ:'"+gridResultSet.getString("KJ")+"'"+ 
        	    ",LCZ:'"+gridResultSet.getString("LCZ")+"'"+ 
        	    ",JCXGD:'"+gridResultSet.getString("JCXGD")+"'"+
        		",CMXJ:'"+gridResultSet.getString("CMXJ")+"'"+
        		",QXBJ:'"+gridResultSet.getString("QXBJ")+"'"+
        		",SCCJ:'"+gridResultSet.getString("SCCJ")+"'"+        		
        	    ",RYRQ:'"+frmDate.format(gridResultSet.getDate("RYRQ"))+"'"+ 
        	    ",JD:'"+gridResultSet.getString("JD")+"'"+  
        	    ",WD:'"+gridResultSet.getString("WD")+"'"+ 
        	    ",SXH:'"+gridResultSet.getString("SXH")+"'"+              		
        		",ZP:'"+gridResultSet.getString("ZP") +"'},"; 
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
