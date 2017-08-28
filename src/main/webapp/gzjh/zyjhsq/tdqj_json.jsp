<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.ResultSet"%>

<%!   public String SetNull(String Str)
    {
    System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null)
      {
        return "  ";
      }
      else
      {
       return Str;
     }
    } %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String jhid=request.getParameter("jhid");
System.out.println("tdqd:jhid:"+jhid);
//String education = request.getParameter("action");

String whereclause=" jhid='"+jhid+"' and 1=1 ";
try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from z_yxgl_zyjh_Tdqd where "+whereclause;
	System.out.println("YYYYYY"+sql_Query_count);
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	System.out.println("))))))))))))))))))))))))))))))))))))))))))"+totalCount);
    
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select tdqjid,a.dwid, c.gqmc dwmc,a.tdqdid,b.mc tdqdmc from z_yxgl_zyjh_Tdqd a,j_gyjc_qjzczd b,j_gyjc_gqzd c where a.dwid=c.gqdm and a.tdqdid=b.qjbm and "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	//String sql_Query="select * from z_yxgl_zyjh_Tdqd where jhid="+'1';
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
 
    //SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
    
    	System.out.println("json:"+gridResultSet.getString("tdqjid"));
    	
		json += "{xh:" +gridResultSet.getLong("xh")  + 
				",tdqjid:'"+gridResultSet.getString("tdqjid")+"'" +
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",dwmc:'"+gridResultSet.getString("dwmc") +"'" +
        		",tdqdid:'"+ gridResultSet.getString("tdqdid")+"'"+
        		",tdqdmc:'"+gridResultSet.getString("tdqdmc") +"'},";
        		
        		
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
