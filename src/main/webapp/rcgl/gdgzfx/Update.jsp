<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String GZID = request.getParameter("GZID");
String SJ = request.getParameter("SJ");
String LB = request.getParameter("LB");
String GK = request.getParameter("GK");
String YY = request.getParameter("YY");
String BZ = request.getParameter("BZ");
String GDDMC = request.getParameter("GDDMC");
String dd = request.getParameter("dd");
String yxxc = request.getParameter("yxxc");
String tdsf = request.getParameter("tdsf");
System.out.println("startduUUUUUUU:"+GZID);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grXBSBFLIDResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grXBSBFLIDResultSet_count.next();
	//totalCount=grXBSBFLIDResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	//String sql_Add="insert into z_yxgl_zyjh values(z_yxgl_zyjhSquence.Nextval,'"+zylb+"','"+sgdd+"',to_date('"+ksrq+"','YYYY-MM-DD'),'01','带电作业','长沙检修工区','60','2','长沙变电所','Jhon','01',to_date('2009-09-03','YYYY-MM-DD'),'good good good','注意安全','Tom','1','影响范围',to_date('2009-09-03','YYYY-MM-DD'))";
	String sql_Upd="update z_tjbb_gdgzfx set SJ=to_date('"+SJ+"','yyyy-mm-dd'),LB='"+LB+"',GK='"+GK+"',YY='"+YY+"',BZ='"+BZ+"',GDDMC='"+GDDMC+"',dd='"+dd+"',yxxc='"+yxxc+"',tdsf='"+tdsf+"' where GZID="+GZID+"";
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
