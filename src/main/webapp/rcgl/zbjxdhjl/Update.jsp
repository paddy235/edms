<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String JLID = request.getParameter("JLID");
String BDS = request.getParameter("BDS");
String DHRQ = request.getParameter("DHRQ");
String YXQK = request.getParameter("YXQK");
System.out.println("startduUUUUUUU:"+BDS);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grXBSBFLIDResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grXBSBFLIDResultSet_count.next();
	//totalCount=grXBSBFLIDResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	//String sql_Add="insert into z_yxgl_zyjh values(z_yxgl_zyjhSquence.Nextval,'"+zylb+"','"+sgdd+"',to_date('"+ksrq+"','YYYY-MM-DD'),'01','带电作业','长沙检修工区','60','2','长沙变电所','Jhon','01',to_date('2009-09-03','YYYY-MM-DD'),'good good good','注意安全','Tom','1','影响范围',to_date('2009-09-03','YYYY-MM-DD'))";
	String sql_Upd="update z_yxgl_zbjxdhjl set BDS='"+BDS+"',DHRQ=to_date('"+DHRQ+"','yyyy-mm-dd hh24:mi:ss'),YXQK='"+YXQK+"' where JLID="+JLID+"";
	//out.println(sql_Query);
	System.out.println(sql_Upd);

	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功'}");
     
} 

catch(Exception ex) {
	out.print("{success:false,msg:'修改失败'}");
}

%>
