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
	String sql_Query_count="select count(*) from z_jcsj_jyq where "+whereclause;

	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from z_jcsj_jyq where "+ whereclause +" order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println("sql_Query="+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
	System.out.println("json1="+json);
	//select ID,SCBH,QJZC,XBBM,SXXBM,SBLX,SBXH,SBCZ,ZZH,SCRQ,TYRQ,SCCJ,GLB from Z_JCSJ_XC
while(gridResultSet.next()){
		json += "{ID:" +gridResultSet.getInt("ID")  + 
        		",XCBH:'"+gridResultSet.getString("XCBH") +"'" +
        		",QJZC:'"+ gridResultSet.getString("QJZC")+"'"+
        		",XBBM:'"+ gridResultSet.getString("XBBM")+"'"+
          		",SXXBM:'"+ gridResultSet.getString("SXXBM")+"'"+
        		",SBLX:'"+ gridResultSet.getString("SBLX")+"'"+
        		",SBXH:'"+ gridResultSet.getString("SBXH")+"'"+
        		",SBCZ:'"+gridResultSet.getString("SBCZ")+"'"+
        		",ZZH:'"+gridResultSet.getString("ZZH")+"'"+
        		",GLB:'"+gridResultSet.getString("GLB")+"'"+
				",SCRQ:'"+frmDate.format(gridResultSet.getDate("SCRQ")).toString() +"'"+ 
				",TYRQ:'"+frmDate.format(gridResultSet.getDate("TYRQ")).toString() +"'"+ 
		 		",SCCJ:'"+gridResultSet.getString("SCCJ") +"'},";
        		
        
        	
	}
	System.out.println("json2="+json);
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
