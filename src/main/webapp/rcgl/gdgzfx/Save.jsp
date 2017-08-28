<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String SJ = request.getParameter("SJ");
String LB = request.getParameter("LB");
String GK = request.getParameter("GK");
String YY = request.getParameter("YY");
String BZ = request.getParameter("BZ");
String GDDMC = request.getParameter("GDDMC");
String dd = request.getParameter("dd");
String yxxc = request.getParameter("yxxc");
String tdsf = request.getParameter("tdsf");
System.out.println("Save.jsp----------------------------------:"+SJ);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql="select distinct(bh)  from Z_TJBB_GDGZFX";
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql);
	//gridResultSet_count.next();
	//String totalCount=gridResultSet_count.getString("bh");
	//glkg_mlh=Integer.valueOf(mlh_ResultSet.getString("mlh"))+2;
	//out.println("asdfsdfsdf  :"+totalCount);
	
	String sql_Add="insert into z_tjbb_gdgzfx values(gdgzfxSQUENCE.Nextval,to_date('"+SJ+"','yyyy-mm-dd'),'"+LB+"','"+GK+"','"+YY+"','"+BZ+"','"+GDDMC+"','10000','"+dd+"','"+yxxc+"','"+tdsf+"')";

	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'±£´æ³É¹¦'}");
     
} 

catch(Exception ex) {
}

%>
