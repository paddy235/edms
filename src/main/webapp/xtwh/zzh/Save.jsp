<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String ZZHBM = request.getParameter("ZZHBM");
String ZZH = request.getParameter("ZZH");
String XBBM = request.getParameter("XBBM");
String SXXBM = request.getParameter("SXXBM");
String ZZGLB = request.getParameter("ZZGLB");
String ZZJD = request.getParameter("ZZJD");
String ZZWD = request.getParameter("ZZWD");
String KJ = request.getParameter("KJ");
String LXBM = request.getParameter("LXBM");
String SBXH = request.getParameter("SBXH");
String LCZ = request.getParameter("LCZ");
String JCXGD = request.getParameter("JCXGD");
String CMXJ = request.getParameter("CMXJ");
String QXBJ = request.getParameter("QXBJ");
String CZBM = request.getParameter("CZBM");
String SBSCCJ = request.getParameter("SBSCCJ");
String QJZCBM = request.getParameter("QJZCBM");
String TYSJ = request.getParameter("TYSJ");
String XH = request.getParameter("XH");
String SBZP = request.getParameter("SBZP");
System.out.println("save.jsp:"+ZZHBM+ZZH+XBBM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Add="insert into J_GYJC_LJZD values('"+ZZHBM+"','"+ZZH+"','"+XBBM+"','"+SXXBM+"',"+ZZGLB+","+ZZJD+","+ZZWD+","+KJ+",'"+LXBM+"','"+SBXH+"','"+LCZ+"','"+JCXGD+"','"+CMXJ+"','"+QXBJ+"','"+CZBM+"','"+SBSCCJ+"','"+QJZCBM+"','"+TYSJ+"',"+XH+",'"+SBZP+"')";
	
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'zhao'}");
     
} 

catch(Exception ex) {
}

%>
