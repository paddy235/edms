<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String ID = request.getParameter("ID");
String MC = request.getParameter("MC");
System.out.println("save.jsp:"+ID+MC);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grXBIDResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grXBIDResultSet_count.next();
	//totalCount=grXBIDResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_KZBS values('"+ID+"','"+MC+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet grXBIDResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'Ìí¼Ó³É¹¦}");
     
} 

catch(Exception ex) {
}

%>
