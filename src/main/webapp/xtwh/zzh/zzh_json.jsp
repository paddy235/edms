<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");




String whereclause="";
if (session.getAttribute("whereclause")!=null){
	whereclause=session.getAttribute("whereclause").toString().trim();

}
else
{
//session.setAttribute("whereclause","");
whereclause=" 1=1 ";
}
session.removeAttribute("whereclause");
try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from J_GDGY_ZZH where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from J_GDGY_ZZH where "+whereclause+") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");
    
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{ZZHBM:'" +gridResultSet.getString(2)+"'" +
        		",ZZH:'"+gridResultSet.getString(3) +"'" +
        		",XBBM:'"+ gridResultSet.getString(4)+"'"+
        		",SXXBM:'"+ gridResultSet.getString(5)+"'"+
        		",ZZGLB:'"+ gridResultSet.getInt(5)+
        		",ZZJD:'"+ gridResultSet.getInt(5)+
        		",ZZWD:'"+ gridResultSet.getInt(5)+
        		",KJ:'"+ gridResultSet.getInt(5)+
        		",LXBM:'"+ gridResultSet.getString(5)+"'"+
        		",SBXH:'"+ gridResultSet.getString(5)+"'"+
        		",LCZ:'"+ gridResultSet.getString(5)+"'"+
        		",JCXGD:'"+ gridResultSet.getString(5)+"'"+
        		",CMXJ:'"+ gridResultSet.getString(5)+"'"+
        		",QXBJ:'"+ gridResultSet.getString(5)+"'"+
        		",CZBM:'"+ gridResultSet.getString(5)+"'"+
        		",SBSCCJ:'"+ gridResultSet.getString(5)+"'"+
        		",QJZCBM:'"+ gridResultSet.getString(5)+"'"+
        		",TYSJ:'"+ gridResultSet.getString(5)+"'"+
        		",XH:'"+ gridResultSet.getInt(5)+
        		",SBZP:'"+ gridResultSet.getString(6).toString()+"'},";
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
