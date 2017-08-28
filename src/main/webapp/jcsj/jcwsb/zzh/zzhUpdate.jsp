<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

String ZZHBM = request.getParameter("ZZHBM");
String ZZHMC = request.getParameter("ZZHMC");
String QJZC = request.getParameter("QJZC");
String XBBM = request.getParameter("XBBM");
String SXXBM = request.getParameter("SXXBM");
String ZZGLB = request.getParameter("ZZGLB");
String SBXH = request.getParameter("SBXH");
String ZZLB = request.getParameter("ZZLB");
String ZZCZ = request.getParameter("ZZCZ");
String KJ = request.getParameter("KJ");
String LCZ = request.getParameter("LCZ");
String JCXGD = request.getParameter("JCXGD");
String CMXJ = request.getParameter("CMXJ");
String QXBJ = request.getParameter("QXBJ");
String SCCJ = request.getParameter("SCCJ");
String RYRQ = request.getParameter("RYRQ").toString();
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
String SXH = request.getParameter("SXH");
String ZP = request.getParameter("ZP");

System.out.println("ZZHBM="+ZZHBM);
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update Z_GDGY_ZZH set ZZHMC ='"+ZZHMC+"',QJZC='"+ QJZC+"',XBBM='"+  XBBM+"',SXXBM='"+  SXXBM+"',ZZGLB='"+  ZZGLB+"',SBXH='"+  SBXH+"',ZZLB='"+  ZZLB+"',ZZCZ='"+  ZZCZ+"',KJ='"+  KJ+"',LCZ='"+  LCZ+"',JCXGD='"+  JCXGD+"',CMXJ='"+  CMXJ+"',QXBJ='"+  QXBJ+"',SCCJ='"+  SCCJ+"',RYRQ=to_date('"+RYRQ+"','yyyy-MM-dd'),JD='"+  JD+"',WD='"+  WD+"',SXH='"+  SXH+"',ZP='"+ ZP+"' where ZZHBM='"+ZZHBM+"'";	
	 
	System.out.println("修改树的SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.println("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
