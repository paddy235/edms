<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String GDDDM = request.getParameter("GDDDM");
String GDDJC = request.getParameter("GDDJC");
String GGDMC = request.getParameter("GGDMC");
String GGDDH = request.getParameter("GGDDH");
String GDDCZ = request.getParameter("GDDCZ");
String GDDDZ = request.getParameter("GDDDZ");
String LJDM = request.getParameter("LJDM");
String DPYM = request.getParameter("DPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
System.out.println("Save.jsp:"+GDDDM+GDDJC+GGDMC+GGDDH+GDDCZ+GDDDZ+LJDM+DPYM+JD+WD);



try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_GDDZD (GDDDM,GDDJC,GGDMC,GGDDH,GDDCZ,GDDDZ,LJDM,DPYM,JD,WD) values('"+GDDDM+"','"+GDDJC+"','"+GGDMC+"','"+GGDDH+"','"+GDDCZ+"','"+GDDDZ+"','"+LJDM+"','"+DPYM+"','"+JD+"','"+WD+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'���ݱ���ɹ���'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'���ݱ���ʧ�ܣ�'}");
}

%>
