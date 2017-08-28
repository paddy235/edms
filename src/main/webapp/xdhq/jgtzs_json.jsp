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
	
	
	
	String sql_Query_count="select count(*) from z_yxgl_jgtz where "+whereclause;
	
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
	
	//System.out.println(0%10);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.tzsj,'yyyy-mm-dd hh24:mi') tzsj1,to_char(t.ccsj,'yyyy-mm-dd hh24:mi') ccsj1,"
					+" (select b.xdtmc from j_gyjc_yh a,j_gyjc_xdtzd b where a.dwdm=b.xdtdm and a.yhmc=t.XDY) XDTMC "
					+" from z_yxgl_jgtz t where "+ whereclause +" order by tzsj desc,zt) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);

	System.out.println("================="+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		//System.out.println(gridResultSet.getString("lcddy"));
		
		//System.out.println("lcddy:"+convertNull(gridResultSet.getString("lcddy")));
		
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",tzid:" +gridResultSet.getLong("tzid")  + 
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+ CheckSting(gridResultSet.getString("dwmc"))+"'"+
        		",mlh:'"+ CheckSting(gridResultSet.getString("tzbh"))+"'"+
        		",lcddy:'"+ CheckSting(gridResultSet.getString("lcddy"))+"'"+
        		",jgdd:'"+ CheckSting(gridResultSet.getString("ksjtwz"))+"'"+
        		",jsjtwz:'"+ CheckSting(gridResultSet.getString("jsjtwz"))+"'"+
        		",xb:'"+ CheckSting(gridResultSet.getString("xb"))+"'"+
        		",m_ksjtwx:'"+ CheckSting(gridResultSet.getString("m_ksjtwx"))+"'"+
        		",m_jsjtwx:'"+ CheckSting(gridResultSet.getString("m_jsjtwx"))+"'"+
        		",zbjg:'"+ CheckSting(gridResultSet.getString("t_zbjgb"))+"'"+
        		",tjg:'"+ CheckSting(gridResultSet.getString("t_jgb"))+"'"+
        		",zbjgb:'"+ CheckSting(gridResultSet.getString("zbjgb"))+"'"+
        		",jg:'"+ CheckSting(gridResultSet.getString("jgb"))+"'"+
        		",sg:'"+ CheckSting(gridResultSet.getString("sgb"))+"'"+
        		",tzsj:'"+ CheckSting(gridResultSet.getString("tzsj1"))+"'"+
        		",ccsj:'"+ CheckSting(gridResultSet.getString("ccsj1"))+"'"+
        		",ddy:'"+ CheckSting(gridResultSet.getString("gdddy"))+"'"+
        		",xdy:'"+ CheckSting(gridResultSet.getString("xdy"))+"'"+
        		",pdqk:'"+ CheckSting(gridResultSet.getString("pdqk"))+"'"+
        		",bz:'"+ CheckSting(gridResultSet.getString("bz"))+"'"+
        		",jgyy:'"+ CheckSting(gridResultSet.getString("jgyy"))+"'"+
        		",sgmlh:'"+ CheckSting(gridResultSet.getString("sgmlh"))+"'"+
        		",JGDDY:'"+ CheckSting(gridResultSet.getString("JGDDY"))+"'"+
        		",JGXDY:'"+ CheckSting(gridResultSet.getString("JGXDY"))+"'"+
        		",XDTMC:'"+ CheckSting(gridResultSet.getString("XDTMC"))+"'"+
        		",zt:'"+ CheckSting(gridResultSet.getString("zt"))+"'},";
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
