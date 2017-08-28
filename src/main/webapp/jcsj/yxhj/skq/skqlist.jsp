<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%@ include file="../../../share/CheckDateorStr.jsp" %>
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
	String sql_Query_count="select count(*) from Z_JCSJ_SKQ where "+whereclause;
	//System.out.println("session:"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select a.*,b.gqmc,c.xlm,d.mc from Z_JCSJ_SKQ a,j_gyjc_gqzd b,j_gyjc_xlzd c ,j_gyjc_qjzczd d where "+ whereclause +" and a.xzjg=b.gqdm and a.xb=c.xldm and a.qd=d.qjbm order by ID desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		json += "{id:" +gridResultSet.getInt("id")  + 
        		",xb:'"+CheckSting(gridResultSet.getString("xb")) +"'" +
        		",xzjg:'"+ CheckSting(gridResultSet.getString("xzjg"))+"'"+
        		",qd:'"+CheckSting(gridResultSet.getString("qd"))+"'"+
        		",glb:'"+ CheckSting(gridResultSet.getString("glb"))+"'"+
        		",sxgh:'"+ CheckSting(gridResultSet.getString("sxgh"))+"'"+
        		",xxgh:'"+CheckSting(gridResultSet.getString("xxgh"))+"'"+
        		",hljgxs:'"+ String.valueOf( gridResultSet.getFloat("hljgxs"))+"'"+
        		",kqcd:'"+String.valueOf( gridResultSet.getFloat("kqcd"))+"'"+
        		",hlcc:'"+String.valueOf( gridResultSet.getFloat("hlcc"))+"'"+
        		",jwgcc:'"+String.valueOf( gridResultSet.getFloat("jwgcc"))+"'"+
        		",cqssdw:'"+CheckSting(gridResultSet.getString("cqssdw")) +"'"+
        		",lxdh:'"+ CheckSting(gridResultSet.getString("lxdh"))+"'"+
        		",gqmc:'"+CheckSting(gridResultSet.getString("gqmc"))+"'"+
        		",xlmc:'"+CheckSting(gridResultSet.getString("xlm"))+"'"+
        		",qjzcmc:'"+CheckSting(gridResultSet.getString("mc"))+"'"+
        		",bz:'"+CheckSting(gridResultSet.getString("bz")) +"'},";
        		
        		
        		
        	
	}
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
