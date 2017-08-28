<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

 String id= request.getParameter("id");
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String gdxlmc = request.getParameter("gdxlmc");
String qjzc = request.getParameter("qjzc");
String glb = request.getParameter("glb");
String jcwgh = request.getParameter("jcwgh");
String gd = request.getParameter("gd");
String sz = request.getParameter("sz");
String szsl = request.getParameter("szsl");
String jgsl = request.getParameter("jgsl");
String kfsl = request.getParameter("kfsl");
String sflc = request.getParameter("sflc");
String sftldjn = request.getParameter("sftldjn");
String gqlxr = request.getParameter("gqlxr");
String lxdh = request.getParameter("lxdh");
String cqdw = request.getParameter("cqdw");
String cqdwlxr = request.getParameter("cqdwlxr");
String cqdwlxrdh = request.getParameter("cqdwlxrdh");
String bcje = request.getParameter("bcje");
String kfrq = request.getParameter("kfrq").toString();
String bz = request.getParameter("bz");
try {
    DbTrade db_connection=new DbTrade();
		String sql_Upd="update z_jcsj_wsh set xb='"+xb+"',xzjg='"+xzjg+"',gdxlmc='"+gdxlmc+"',qjzc='"+qjzc+"',glb='"+glb+"',jcwgh='"+jcwgh+"',gd='"+gd+"',sz='"+sz+"',szsl='"+szsl+"',jgsl='"+jgsl+"',kfsl='"+kfsl+"',sflc='"+sflc+"',sftldjn='"+sftldjn+"',gqlxr='"+gqlxr+"',lxdh='"+lxdh+"',cqdw='"+cqdw+"',cqdwlxr='"+cqdwlxr+"',cqdwlxrdh='"+cqdwlxrdh+"',bcje='"+bcje+"',kfrq=to_date('"+kfrq+"','yyyy-MM-dd'),bz='"+bz+"' where id='"+id+"'";	
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
