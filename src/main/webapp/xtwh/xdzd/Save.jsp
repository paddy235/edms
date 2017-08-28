<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XDDM = request.getParameter("XDDM");
String XDJC = request.getParameter("XDJC");
String XDMC = request.getParameter("XDMC");
String XDDH = request.getParameter("XDDH");
String XDCZ = request.getParameter("XDCZ");
String XDDZ = request.getParameter("XDDZ");
String LJDM = request.getParameter("LJDM");
String DPYM = request.getParameter("DPYM");
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");



try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_XDZD(XDDM,XDJC,XDMC,XDDH,XDCZ,XDDZ,LJDM,DPYM,JD,WD) values('"+XDDM+"','"+XDJC+"','"+XDMC+"','"+XDDH+"','"+XDCZ+"','"+XDDZ+"','"+LJDM+"','"+DPYM+"','"+JD+"','"+WD+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'保存成功！'}");
     
} 

catch(Exception ex) {
	out.print("{success:false,msg:'保存失败！'}");
}

%>
