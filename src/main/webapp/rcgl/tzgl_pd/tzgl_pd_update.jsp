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

String gqpym= request.getParameter("gqdm");//gqpym里面存储工区代码
String bgsj = request.getParameter("bgsj");
String kgh = request.getParameter("kgh");
String bhzzmc=request.getParameter("bhzzmc");//保护装置的名称

String chzzt= request.getParameter("chzzt");//重合闸状态tdqd
String bztzt = request.getParameter("bztzt");//试送情况
String lb = request.getParameter("lb");//类别
String fhsj = request.getParameter("fhsj");//复合时间

String hfsj = request.getParameter("hfsj");//恢复时间
String tdsf = request.getParameter("tdsf"); //停电时分
String shr = request.getParameter("shr");//登记人
String djr = request.getParameter("djr");//审核人

String sjgzdd = request.getParameter("sjgzdd");//停电范围 实际故障地点
String tzyy = request.getParameter("tzyy");//跳闸原因

String gzms = request.getParameter("gzms");//停电范围车流情况
String bz = request.getParameter("bz");//备注

String ztbz="0";//状态标识

//没用的字段
String sgjl = "null";//事故记录
String gzbh="null";//故障编号GZBH
String  bhzzdm= "null";//对应的是保护装置的dm
String ddy=session.getAttribute("YHMC").toString();//调度员
String xb ="null";//线别
String tdqd ="null";//停电区段


DbTrade dbTrade=new DbTrade();

try {
 String sql_update="update Z_YXGL_DLGZJL set  BGSJ=to_date('"+bgsj+"','yyyy-mm-dd hh24:mi'),GQPYM='"+gqpym
 +"',tdqd="+tdqd+",SJGZDD='"+sjgzdd+"',CHZZT='"+chzzt+"',GZMS='"+gzms+"',SGJL="+sgjl+",TZYY='"+tzyy+"',FHSJ=to_date('"+fhsj+"','yyyy-mm-dd hh24:mi'),TDSF='"+tdsf+"',LB='"+lb+"',BZ='"+bz+"',DDY='"+ddy+"',bhzzmc='"+bhzzmc+"',xb="+xb+",kgh='"+kgh+"',shr='"+shr+"',bztzt='"+bztzt+"',HFSJ=to_date('"+hfsj+"','yyyy-mm-dd hh24:mi'),DJR='"+djr+"',ztbz='"+ztbz+"' where ydsgbm='"+ydsgbm+"'";
  
  //System.out.println("updat:"+sql_update);
  dbTrade.executeUpdate(sql_update);
  dbTrade.close();
  out.print("{success:true,msg:'电力跳闸记录修改成功！'}");

} 

catch(Exception ex) {
	System.out.println("updat:"+ex.toString());
}

%>
