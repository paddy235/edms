<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String id= request.getParameter("id");
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String qd = request.getParameter("qd");
String glb = request.getParameter("glb");
String sxgh = request.getParameter("sxgh");
String xxgh = request.getParameter("xxgh");
String hljgxs = request.getParameter("hljgxs");
String kqcd = request.getParameter("kqcd");
String hlcc = request.getParameter("hlcc");
String jwgcc = request.getParameter("jwgcc");
String cqssdw = request.getParameter("cqssdw");
String lxdh = request.getParameter("lxdh");
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
	String sql_Upd="update z_jcsj_skq set xb='"+xb+"',xzjg='"+xzjg+"',qd='"+qd+"',glb='"+glb+"',sxgh='"+sxgh+"',xxgh='"+xxgh+"',hljgxs='"+hljgxs+"',kqcd='"+kqcd+"',hlcc='"+hlcc+"',jwgcc='"+jwgcc+"',cqssdw='"+cqssdw+"',lxdh='"+lxdh+"',bz='"+bz+"' where id='"+id+"'";	
	System.out.println("修改上跨桥的SQL为："+sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'修改成功！'}");
} 

catch(Exception ex) {
}

%>
