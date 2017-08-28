<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String ZDRQ = request.getParameter("zdrq");
String ZDR = request.getParameter("zdr");
String YAMC = request.getParameter("yamc");
String ZY = request.getParameter("zy");
String GZXZ = request.getParameter("gzxz");
String GZLB = request.getParameter("gzlb");
String YANR = request.getParameter("yanr");
System.out.println("startdddddddddddddddddd:"+ZDR+ZDRQ+GZLB);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into z_qxya_yagd values(z_yxgl_zyjhSquence.Nextval,z_yxgl_zyjhSquence.Nextval+1000,'"+ZY+"','"+YAMC+"','"+GZLB+"','"+GZXZ+"','"+ZDR+"',"+"to_date('"+ZDRQ+"','YYYY-MM-DD HH24:MI'),'"+YANR+"','')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'zhao'}");
     db_connection.close();
     
} 

catch(Exception ex) {
     out.print("{failure:true,msg:'zhao'}");
}

%>
