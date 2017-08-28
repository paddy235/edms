<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

<%
String ydsgbm=request.getParameter("ydsgbm");


String ddy=request.getParameter("ddy");
String gqmc = request.getParameter("gqdm");//要根据单位代码获得拼音码
String gqpym="";
String kgh = request.getParameter("kgh");
String lb = request.getParameter("lb");
String sgjl = request.getParameter("sgjl");
String tdqd = request.getParameter("tdqd");//对应的是保护装置
String bhzzdm_mc=request.getParameter("bhzzmc");//保护装置的名称
String sjgzdd = request.getParameter("sjgzdd");//实际故障地点
String chzzt= request.getParameter("chzzt");//重合闸状态
String bgsj = request.getParameter("bgsj");
String fhsj = request.getParameter("fhsj");
String tdsf = request.getParameter("tdsf");  
String gzms = request.getParameter("gzms");
String tzyy = request.getParameter("tzyy");
String bz = request.getParameter("bz");
String xb = request.getParameter("xb_add");
String shr = request.getParameter("shr");

Date nowDate =new Date();
SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd ");
System.out.println("qqqqqqqqq ddy"+ddy+"  gqmc"+gqmc+" lb"+lb+"  sgjl"+sgjl+"  tdqd"+tdqd+"  bgsj"+bgsj
+"sjgzdd"+sjgzdd+"chzzt"+chzzt+"  fhsj"+fhsj+"  tdsf"+tdsf+"  gzms"+gzms+"  tzyy"+tzyy+"   bz"+bz);

//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
String sql_gqpym="select * from j_gyjc_gqzd where gqdm='"+gqmc+"'";
java.sql.ResultSet gridResultSet=dbTrade.executeQuery(sql_gqpym);
if(gridResultSet.next())
{
    gqpym=gridResultSet.getString("gqpym");
}
gridResultSet.close();
try {
 String sql_update="update Z_XXGX_YDGZBG set  BGSJ=to_date('"+bgsj+"','yyyy-mm-dd hh24:mi:ss'),GQPYM='"+gqpym
 +"',tdqd='"+tdqd+"',SJGZDD='"+sjgzdd+"',CHZZT='"+chzzt+"',GZMS='"+gzms+"',SGJL='"+sgjl+"',TZYY='"+tzyy+"',FHSJ=to_date('"+fhsj+"','yyyy-mm-dd hh24:mi:ss'),TDSF='"+tdsf+"',LB='"+lb+"',BZ='"+bz+"',DDY='"+ddy+"',bhzzmc='"+bhzzdm_mc+"',xb='"+xb+"',kgh='"+kgh+"',shr='"+shr+"' where ydsgbm='"+ydsgbm+"'";
  
  System.out.println("updat:"+sql_update);
  dbTrade.executeUpdate(sql_update);
  dbTrade.close();
  out.print("{success:true,msg:'数据修改成功！'}");

} 

catch(Exception ex) {
}

%>
