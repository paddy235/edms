<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String DDTDM = request.getParameter("DDTDM");
String DDTJC = request.getParameter("DDTJC");
String DDTMC = request.getParameter("DDTMC");
String DDTDH = request.getParameter("DDTDH");
String DDTCZ = request.getParameter("DDTCZ");
String DDDM = request.getParameter("DDDM");
String DPYM = request.getParameter("DPYM");




try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_DDTZD(DDTDM,DDTJC,DDTMC,DDTDH,DDTCZ,DDDM,DPYM) values('"+DDTDM+"','"+DDTJC+"','"+DDTMC+"','"+DDTDH+"','"+DDTCZ+"','"+DDDM+"','"+DPYM+"')";
	
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
