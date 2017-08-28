<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
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
	String sql_Query_count="select count(*) from J_GYJC_GQZD a where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.* ,b.jglbmc,c.ddtmc,d.cjmc from J_GYJC_GQZD a,j_gyjc_jglb b,j_gyjc_ddtzd c,j_gyjc_cjzd d where "+ whereclause +" and a.jglbdm = b.jglbdm and a.ddtdm=c.ddtdm and a.cjdm=d.cjdm order by GQDM) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	//String sql_MCDM_Query="select distinct a.CJMC from J_GYJC_CJZD a,J_GYJC_GQZD b where a.CJDM=b.CJDM";
	System.out.println(sql_Query);
	//System.out.println(sql_MCDM_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);

    
    //SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{GQDM:'" +gridResultSet.getString("GQDM")  + "'" +
        		",GQJC:'"+gridResultSet.getString("GQJC") +"'" +
        		",GQMC:'"+ gridResultSet.getString("GQMC")+"'"+
        		",GQDH:'"+(gridResultSet.getString("GQDH")==null?"":gridResultSet.getString(5))+"'"+
        		",GQCZ:'"+(gridResultSet.getString("GQCZ")==null?"":gridResultSet.getString(6))+"'"+
        		",GQDZ:'"+(gridResultSet.getString("GQDZ")==null?"":gridResultSet.getString(7))+"'"+
        		",JGLBDM:'"+gridResultSet.getString("JGLBDM") +"'"+
        		",CJDM:'"+(gridResultSet.getString("CJDM")==null?"":gridResultSet.getString(9))+"'"+
        		",DDTDM:'"+(gridResultSet.getString("DDTDM")==null?"":gridResultSet.getString(10))+"'"+
        		",GQPYM:'"+ (gridResultSet.getString("GQPYM")==null?"":gridResultSet.getString(11))+"'"+
        		",JD:'"+(gridResultSet.getString("JD")==null?"":gridResultSet.getString(12))+"'"+
        		",JGLBMC:'"+gridResultSet.getString("jglbmc") +"'" +
        		",CJMC:'"+gridResultSet.getString("cjmc") +"'" +
        		",DDTMC:'"+gridResultSet.getString("ddtmc") +"'" +
        		",WD:'"+(gridResultSet.getString("WD")==null?"":gridResultSet.getString(13))+"'},";
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
