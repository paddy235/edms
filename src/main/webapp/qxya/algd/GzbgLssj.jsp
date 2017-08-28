<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
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
	String sql_Query_count="select count(*) from Z_DXSG_SGBG where "+whereclause;
	System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select t.*,to_char(t.fssj,'yyyy-mm-dd hh24:mi') as fssj1,x.XLM,s.sxmc,g.GGDMC,(select y.yhmc from j_gyjc_yh y where t.ZBDDY=y.yhdm) as yhmc  from Z_DXSG_SGBG t,J_GYJC_XLZD x,J_GDGY_SXZD s,J_GYJC_GDDZD g where "
					+ whereclause +" and t.XBBM=x.XLDM and t.SGLX=s.sxid and t.SGSZDW=g.GDDDM  order by sfgd,albm desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);

    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getLong("id")  + 
        		",albm:'"+gridResultSet.getString("albm") +"'" +
        		",almc:'"+ CheckSting(gridResultSet.getString("almc"))+"'"+
        		",fssj:'"+CheckSting(gridResultSet.getString("fssj1"))+"'"+
        		",dd:'"+ CheckSting(gridResultSet.getString("dd"))+"'"+
        		",xbbm:'"+ CheckSting(gridResultSet.getString("xbbm"))+"'"+
        		",sgfl:'"+ CheckSting(gridResultSet.getString("sgfl"))+"'"+
        		",sglx:'"+ CheckSting(gridResultSet.getString("sglx"))+"'"+
        		",sgszdw:'"+ CheckSting(gridResultSet.getString("sgszdw"))+"'"+
        		",zbddy:'"+ CheckSting(gridResultSet.getString("zbddy"))+"'"+
        		",gzxx:'"+ CheckSting(gridResultSet.getString("gzxx"))+"'"+
        		",gzqx:'"+ CheckSting(gridResultSet.getString("gzqx"))+"'"+
        		",sgyyjcs:'"+ CheckSting(gridResultSet.getString("sgyyjcs"))+"'"+
        		",ylwt:'"+ CheckSting(gridResultSet.getString("ylwt"))+"'"+
        		",sfgd:'"+ gridResultSet.getString("sfgd")+"'"+
        		
        		",xlm:'"+ CheckSting(gridResultSet.getString("xlm"))+"'"+
        		",sxmc:'"+ CheckSting(gridResultSet.getString("sxmc"))+"'"+
        		",ggdmc:'"+ CheckSting(gridResultSet.getString("ggdmc"))+"'"+
        		",yhmc:'"+ CheckSting(gridResultSet.getString("yhmc"))+"'"+
        		",sjc:'"+ gridResultSet.getString("sjc").toString()+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    db_connection.close();
    System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
