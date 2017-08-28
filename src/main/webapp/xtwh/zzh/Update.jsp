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
System.out.println("startduUUUUUUU:"+ZZHBM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	//String sql_Add="insert into z_yxgl_zyjh values(z_yxgl_zyjhSquence.Nextval,'"+zylb+"','"+sgdd+"',to_date('"+ksrq+"','YYYY-MM-DD'),'01','带电作业','长沙检修工区','60','2','长沙变电所','Jhon','01',to_date('2009-09-03','YYYY-MM-DD'),'good good good','注意安全','Tom','1','影响范围',to_date('2009-09-03','YYYY-MM-DD'))";
	String sql_Upd="update J_GDGY_ZZH set ZZH='"+ZZH+"',XBBM='"+XBBM+"',SXXBM='"+SXXBM+"',ZZGLB="+ZZGLB+",ZZJD="+ZZJD+",ZZWD="+ZZWD+",KJ="+KJ+",LXBM='"+LXBM+"',SBXH='"+SBXH+"',LCZ='"+LCZ+"',JCXGD='"+JCXGD+"',CMXJ='"+CMXJ+"',QXBJ='"+QXBJ+"',CZBM='"+CZBM+"',SBSCCJ='"+SBSCCJ+"',QJZCBM='"+QJZCBM+"',QJZCBM='"+QJZCBM+"',TYSJ='"+TYSJ+"',XH="+XH+",SBZP='"+SBZP+"' where ZZHBM="+ZZHBM;
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'zhao'}");
     
} 

catch(Exception ex) {
}

%>
