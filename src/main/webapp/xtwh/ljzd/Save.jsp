<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String LJDM = request.getParameter("LJDM");
String LJPYM = request.getParameter("LJPYM");
String LJQC = request.getParameter("LJQC");
String LJJC = request.getParameter("LJJC");
String LJPXM = request.getParameter("LJPXM");
System.out.println("Save.jsp:"+LJDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_LJZD (LJDM,LJPYM,LJQC,LJJC,LJPXM)values('"+LJDM+"','"+LJPYM+"','"+LJQC+"','"+LJJC+"','"+LJPXM+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'保存成功'}");
     
} 

catch(Exception ex) {
         System.out.println("保存失败！"+ex.getMessage() );
}

%>
