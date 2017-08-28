<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");
System.out.println("whereclause" + whereclause);


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_tsdqr_sgsq where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select sgid,to_char(sqsj,'yyyy-mm-dd hh24:mi')sqsj,to_char(sgkssj,'yyyy-mm-dd hh24:mi')sgkssj,to_char(sgjssj,'yyyy-mm-dd hh24:mi')sgjssj,sgsj,sgdd,sgnr,tdfw,fstkxl,gdc,bz,sqr from z_tsdqr_sgsq where "+ whereclause +" order by sqsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");

    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
    System.out.println("###########Êý¾ÝÄØ:"+gridResultSet.getString("sqr"));
		
		
		json += "{sgid:'"+gridResultSet.getString("sgid")+"'" +
		        ",sqsj:'"+ gridResultSet.getString("sqsj")+"'"+
        		",sgkssj:'"+ gridResultSet.getString("sgkssj")+"'"+
        		",sgjssj:'"+ gridResultSet.getString("sgjssj")+"'"+
        		",sgsj:'"+ (gridResultSet.getString("sgsj")==null?"":gridResultSet.getString("sgsj"))+"'"+
        		",sgdd:'"+ (gridResultSet.getString("sgdd")==null?"":gridResultSet.getString("sgdd"))+"'"+
        		",sgnr:'"+ (gridResultSet.getString("sgnr")==null?"":gridResultSet.getString("sgnr"))+"'"+
        		",tdfw:'"+ (gridResultSet.getString("tdfw")==null?"":gridResultSet.getString("tdfw"))+"'"+
        		",fstkxl:'"+ (gridResultSet.getString("fstkxl")==null?"":gridResultSet.getString("fstkxl"))+"'"+
        		",gdc:'"+ (gridResultSet.getString("gdc")==null?"":gridResultSet.getString("gdc"))+"'"+
        		",bz:'"+ (gridResultSet.getString("bz")==null?"":gridResultSet.getString("bz"))+"'"+
        		",sqr:'"+ (gridResultSet.getString("sqr")==null?"":gridResultSet.getString("sqr"))+"'},";
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


