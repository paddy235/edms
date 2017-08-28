<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String id= request.getParameter("id");
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String qjzc = request.getParameter("qjzc");
String glb = request.getParameter("glb");
String jcwgh = request.getParameter("jcwgh");
String dlxgd = request.getParameter("dlxgd");
String dlxxh = request.getParameter("dlxxh");
String dydj = request.getParameter("dydj");
String gs = request.getParameter("gs");
String cqdw = request.getParameter("cqdw");
String cqdwlxr = request.getParameter("cqdwlxr");
String cqdwlxrdh = request.getParameter("cqdwlxrdh");
String xjnf = request.getParameter("xjnf");
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update z_jcsj_skx set xb='"+xb+"',xzjg='"+xzjg+"',qjzc='"+qjzc+"',glb='"+glb+"',jcwgh='"+jcwgh+"',dlxgd='"+dlxgd+"',dlxxh='"+dlxxh+"',dydj='"+dydj+"',gs='"+gs+"',cqdw='"+cqdw+"',cqdwlxr='"+cqdwlxr+"',cqdwlxrdh='"+cqdwlxrdh+"',xjnf='"+xjnf+"',bz='"+bz+"' where id='"+id+"'";	
	System.out.println("修改树的SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
