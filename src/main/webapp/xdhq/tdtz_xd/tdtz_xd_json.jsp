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

	String sql_Query_count="select count(*) from z_tsdqr_tdtz where "+whereclause;
	
	//System.out.println("sql_Query_count:"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	//解决分页最后一条记录更新问题
	if ((totalCount!=0)&&(totalCount<index+1))
	{
		index=index-pageSize;
	}
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.TDSJ,'yyyy-mm-dd hh24:mi') TDSJ1,to_char(t.TD_XDSJ,'yyyy-mm-dd hh24:mi') TD_XDSJ1,to_char(t.TD_DDSJ,'yyyy-mm-dd hh24:mi') TD_DDSJ1,s.xdtmc,r.ddtmc from z_tsdqr_tdtz t,j_gyjc_xdtzd s,j_gyjc_ddtzd r where t.td_xdt=s.xdtdm and t.td_ddt=r.ddtdm and "+ whereclause +" order by TDSJ desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	//System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);

    String json = "{totalCount:" +totalCount +",root:[";

    while(gridResultSet.next()){
		json += "{TDTZBH:" +gridResultSet.getLong("TDTZBH")  +
        		",TDSJ:'"+ CheckSting(gridResultSet.getString("TDSJ1"))+"'"+
        		",TDSF:'"+ CheckSting(gridResultSet.getString("TDSF"))+"'"+
        		",TDGDB:'"+ CheckSting(gridResultSet.getString("TDGDB"))+"'"+
        		",TD_XDMLH:'"+ CheckSting(gridResultSet.getString("TD_XDMLH"))+"'"+
        		",TD_XDSJ:'"+ CheckSting(gridResultSet.getString("TD_XDSJ1"))+"'"+
        		",TD_XDT:'"+ CheckSting(gridResultSet.getString("TD_XDT"))+"'"+
        		",TD_XDY:'"+ CheckSting(gridResultSet.getString("TD_XDY"))+"'"+
        		",TD_DDMLH:'"+ CheckSting(gridResultSet.getString("TD_DDMLH"))+"'"+
        		",TD_DDSJ:'"+ CheckSting(gridResultSet.getString("TD_DDSJ1"))+"'"+
        		",TD_DDT:'"+ CheckSting(gridResultSet.getString("TD_DDT"))+"'"+
        		",TD_DDY:'"+ CheckSting(gridResultSet.getString("TD_DDY"))+"'"+
        		",TD_BZ:'"+ CheckSting(gridResultSet.getString("TD_BZ"))+"'"+
				",xdtmc:'"+ CheckSting(gridResultSet.getString("xdtmc"))+"'"+
				",ddtmc:'"+ CheckSting(gridResultSet.getString("ddtmc"))+"'"+
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
	System.out.println(ex.toString());
}

%>
