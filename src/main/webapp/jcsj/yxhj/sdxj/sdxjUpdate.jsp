<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String id= request.getParameter("id");
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String qjzc = request.getParameter("qjzc");
String glb = request.getParameter("glb");
String sdh = request.getParameter("sdh");
String sdm = request.getParameter("sdm");
String sxx = request.getParameter("sxx");
String jcxzdgd = request.getParameter("jcxzdgd");
String sdcd = request.getParameter("sdcd");
String xjnf = request.getParameter("xjnf");
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update z_jcsj_sdxj set xb='"+xb+"',xzjg='"+xzjg+"',qjzc='"+qjzc+"',glb='"+glb+"',sdh='"+sdh+"',sdm='"+sdm+"',sxx='"+sxx+"',jcxzdgd='"+jcxzdgd+"',sdcd='"+sdcd+"',xjnf='"+xjnf+"',bz='"+bz+"' where id='"+id+"'";	
	System.out.println("修改SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
