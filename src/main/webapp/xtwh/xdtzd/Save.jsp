<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String XDTDM = request.getParameter("XDTDM");
String XDTJC = request.getParameter("XDTJC");
String XDTMC = request.getParameter("XDTMC");
String XDTDH = request.getParameter("XDTDH");
String XDTCZ = request.getParameter("XDTCZ");
String XDDM = request.getParameter("XDDM");
String DDTDM = request.getParameter("DDTDM");
String XPYM = request.getParameter("XPYM");


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_XDTZD(XDTDM,XDTJC,XDTMC,XDTDH,XDTCZ,XDDM,DDTDM,XPYM) values('"+XDTDM+"','"+XDTJC+"','"+XDTMC+"','"+XDTDH+"','"+XDTCZ+"','"+XDDM+"','"+DDTDM+"','"+XPYM+"')";
	
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
