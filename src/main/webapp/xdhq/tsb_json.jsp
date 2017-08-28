<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../share/CheckDateorStr.jsp" %>

<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");

try {

    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
   	System.out.println("index:"+index);
   	System.out.println("pageSize:"+pageSize);
    int totalCount=0;

    DbTrade db_connection=new DbTrade();

	String sql_Query_count="select count(*) from Z_TJBB_TSDDJB where "+whereclause;
	
	System.out.println("sql_Query_count:"+sql_Query_count);
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	System.out.println(sql_Query_count);
	
	//解决分页最后一条记录更新问题
	if ((totalCount!=0)&&(totalCount<index+1))
	{
		index=index-pageSize;
	}
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.TSDRQ,'yyyy-mm-dd') TSDRQ1,to_char(t.LD_TDQZSJ,'yyyy-mm-dd hh24:mi') LD_TDSJ,to_char(t.LD_TDQZSJ1,'yyyy-mm-dd hh24:mi') LD_SDSJ,to_char(t.SD_SF,'yyyy-mm-dd hh24:mi') SD_SF1 ,to_char(t.ddqrsj,'yyyy-mm-dd hh24:mi') ddqrsj_d ,to_char(t.xdqrsj,'yyyy-mm-dd hh24:mi') xdqrsj_d,"
					+" (select b.ddtmc from j_gyjc_yh a,j_gyjc_ddtzd b where a.dwdm=b.ddtdm and a.yhmc=t.T_GDDDY) DDTMC,"
					+" (select b.xdtmc from j_gyjc_yh a,j_gyjc_xdtzd b where a.dwdm=b.xdtdm and a.yhmc=t.LD_DDY) XDTMC "
					+" from Z_TJBB_TSDDJB t where "+ whereclause +" order by TSDRQ desc,zt) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	System.out.println("==="+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);

    String json = "{totalCount:" +totalCount +",root:[";

    while(gridResultSet.next()){
		json += "{TDSBH:" +gridResultSet.getLong("TDSBH")  +
        		",TSDRQ:'"+ CheckSting(gridResultSet.getString("TSDRQ1"))+"'"+
        		",QJDD:'"+ CheckSting(gridResultSet.getString("QJDD"))+"'"+
        		",TDDY:'"+ CheckSting(gridResultSet.getString("TDDY"))+"'"+
        		",QZSJ:'"+ CheckSting(gridResultSet.getString("QZSJ"))+"'"+
        		",T_GDDDY:'"+ CheckSting(gridResultSet.getString("T_GDDDY"))+"'"+
        		",LD_TDQZSJ:'"+ CheckSting(gridResultSet.getString("LD_TDSJ"))+"'"+
        		",LD_TDQZSJ1:'"+ CheckSting(gridResultSet.getString("LD_SDSJ"))+"'"+
        		",LD_DDY:'"+ CheckSting(gridResultSet.getString("LD_DDY"))+"'"+
        		",SD_SF:'"+ CheckSting(gridResultSet.getString("SD_SF1"))+"'"+
        		",SD_GDDDY:'"+ CheckSting(gridResultSet.getString("SD_GDDDY"))+"'"+
        		",SD_LCDDY:'"+ CheckSting(gridResultSet.getString("SD_LCDDY"))+"'"+
        		
        		",DDTMC:'"+ CheckSting(gridResultSet.getString("DDTMC"))+"'"+
        		",XDTMC:'"+ CheckSting(gridResultSet.getString("XDTMC"))+"'"+
        		",BK:'"+ CheckSting(gridResultSet.getString("BK"))+"'"+
        		",ddqrsj:'"+ CheckSting(gridResultSet.getString("ddqrsj_d"))+"'"+
        		",xdqrsj:'"+ CheckSting(gridResultSet.getString("xdqrsj_d"))+"'"+
        		",ZT:'"+ CheckSting(gridResultSet.getString("ZT"))+"'},";
	}
	
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
    db_connection.close();
    System.out.println(json);
    response.getWriter().write(json);
     
} 

catch(Exception ex) {
}

%>
