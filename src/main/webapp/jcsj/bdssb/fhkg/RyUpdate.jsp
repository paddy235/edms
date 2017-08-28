<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
System.out.println("开始进行修改……");
String id = request.getParameter("id");
String szdw = request.getParameter("szdw");
String bm = request.getParameter("bm");
String zw = request.getParameter("zw");
String zy = request.getParameter("zy");
String xm = request.getParameter("xm");
String gh = request.getParameter("gh");
String xb = request.getParameter("xb");
String jg = request.getParameter("jg");
String mz = request.getParameter("mz");
String hkxz = request.getParameter("hkxz");
String csd = request.getParameter("csd");
String csrq = request.getParameter("csrq").toString();
String sfzh = request.getParameter("sfzh");
String whcd = request.getParameter("whcd");
String zzmm = request.getParameter("zzmm");
String hyzk = request.getParameter("hyzk");
String gz = request.getParameter("gz");
String aqdj = request.getParameter("aqdj");
String ydsgdj = request.getParameter("ydsgdj");
String jsdj = request.getParameter("jsdj");
String bc = request.getParameter("bc");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update Z_JCSJ_FHKG set szdw='"+szdw+"',bm='"+bm+"',zw='"+zw+"',zy='"+zy+"',xm='"+xm+"',gh='"+gh+"',xb='"+xb+"',csrq=to_date('"+csrq+"','yyyy-MM-dd'),jg='"+jg+"',mz='"+mz+"',hkxz='"+hkxz+"',csd='"+csd+"',sfzh='"+sfzh+"',whcd='"+whcd+"',zzmm='"+zzmm+"',hyzk='"+hyzk+"',gz='"+gz+"',aqdj='"+aqdj+"',ydsgdj='"+ydsgdj+"',jsdj='"+jsdj+"',bc='"+bc+"' where id='"+id+"'";	
	System.out.println("修改SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
     System.out.println("修改成功！");
} 

catch(Exception ex) {
 System.out.println("修改失败！"+ex.getMessage() );
}

%>
