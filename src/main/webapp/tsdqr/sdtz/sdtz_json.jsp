<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>



<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");

try {

    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
    int totalCount=0;

    DbTrade db_connection=new DbTrade();

	String sql_Query_count="select count(*) from z_tsdqr_sdtz where "+whereclause;
	
	//System.out.println("sql_Query_count:"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	//解决分页最后一条记录更新问题
	if ((totalCount!=0)&&(totalCount<index+1))
	{
		index=index-pageSize;
	}
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.SDSJ,'yyyy-mm-dd hh24:mi') SDSJ1,to_char(t.SD_XDSJ,'yyyy-mm-dd hh24:mi') SD_XDSJ1,to_char(t.SD_DDSJ,'yyyy-mm-dd hh24:mi') SD_DDSJ1  from z_tsdqr_sdtz t  where  "+ whereclause +" order by SDSJ desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	//System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);

    String json = "{totalCount:" +totalCount +",root:[";

    while(gridResultSet.next()){
		json += "{SDTZBH:" +gridResultSet.getLong("SDTZBH")  +
        		",SDSJ:'"+ CheckSting(gridResultSet.getString("SDSJ1"))+"'"+
        		",SDSF:'"+ CheckSting(gridResultSet.getString("SDSF"))+"'"+
        		",SDGDB:'"+ CheckSting(gridResultSet.getString("SDGDB"))+"'"+
        		",SD_XDMLH:'"+ CheckSting(gridResultSet.getString("SD_XDMLH"))+"'"+
        		",SD_XDSJ:'"+ CheckSting(gridResultSet.getString("SD_XDSJ1"))+"'"+
        		",SD_XDT:'"+ CheckSting(gridResultSet.getString("SD_XDT"))+"'"+
        		",SD_XDY:'"+ CheckSting(gridResultSet.getString("SD_XDY"))+"'"+
        		",SD_DDMLH:'"+ CheckSting(gridResultSet.getString("SD_DDMLH"))+"'"+
        		",SD_DDSJ:'"+ CheckSting(gridResultSet.getString("SD_DDSJ1"))+"'"+
        		",SD_DDT:'"+ CheckSting(gridResultSet.getString("SD_DDT"))+"'"+
        		",SD_DDY:'"+ CheckSting(gridResultSet.getString("SD_DDY"))+"'"+
        		",SD_BZ:'"+ CheckSting(gridResultSet.getString("SD_BZ"))+"'"+
        		",ZT:'"+ CheckSting(gridResultSet.getString("ZT"))+"'},";
	}
	
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
    db_connection.close();
    //System.out.println(json);
    response.getWriter().write(json);
     
} 

catch(Exception ex) {
}

%>
