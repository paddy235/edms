<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String JGLBDM = request.getParameter("JGLBDM");
String JGLBMC = request.getParameter("JGLBMC");
System.out.println("Save.jsp:"+JGLBDM+JGLBMC);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grJGLBDMResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grJGLBDMResultSet_count.next();
	//totalCount=grJGLBDMResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_JGLB values('"+JGLBDM+"','"+JGLBMC+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet grJGLBDMResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'保存成功'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'保存失败！'}");
}

%>
