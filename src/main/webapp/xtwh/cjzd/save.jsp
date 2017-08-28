<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String CJDM = request.getParameter("CJDM");
String CJJC = request.getParameter("CJJC");
String CJMC = request.getParameter("CJMC");
String CJDH = request.getParameter("CJDH");
String CJCZ = request.getParameter("CJCZ");
String CJDZ = request.getParameter("CJDZ");
String DDM = request.getParameter("DDM");
String CJPYM = request.getParameter("CJPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("Save.jsp:"+CJDM+CJJC+CJMC);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_CJZD(CJDM,CJJC,CJMC,CJDH,CJCZ,CJDZ,DDM,CJPYM,JD,WD) values('"+CJDM+"','"+CJJC+"','"+CJMC+"','"+CJDH+"','"+CJCZ+"','"+CJDZ+"','"+DDM+"','"+CJPYM+"','"+JD+"','"+WD+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'数据保存成功！'}");
     
} 

catch(Exception ex) {
    out.print("{success:false,msg:'数据保存失败！'}");
}

%>
