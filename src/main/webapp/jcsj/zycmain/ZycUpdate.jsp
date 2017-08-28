<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String id= request.getParameter("id");
String cj = request.getParameter("sscj");
String ch = request.getParameter("ch");
String bh = request.getParameter("sbbh");
String cx = request.getParameter("cx");
String gq = request.getParameter("tfgq");
String zz = request.getParameter("zz");
String glb = request.getParameter("glb");
String rq = request.getParameter("ccrq");
String gl = request.getParameter("fdjgl");
String tgzxqxbj = request.getParameter("tgzxqxbj");
String sd = request.getParameter("zzyxsd");
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update z_jcsj_zyc set ch='"+ch+"',sscj='"+cj+"',sbbh='"+bh+"',cx='"+cx+"',zz='"+zz+"',tfgq='"+gq+"',glb='"+glb+"',ccrq=to_date('"+rq+"','yyyy-MM-dd'),fdjgl='"+gl+"',zzyxsd='"+sd+"',tgzxqxbj='"+tgzxqxbj+"',bz='"+bz+"' where id='"+id+"'";	
	System.out.println("修改作业车的SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
