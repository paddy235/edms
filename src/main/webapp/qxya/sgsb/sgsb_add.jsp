<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.Date"%>

<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null)
{
	response.sendRedirect(myURL);
}
String gzfssj=request.getParameter("gzfssj");
String gzdd = request.getParameter("gzdd");//故障地点
String gzlb = request.getParameter("gzlb");
String tdqd = request.getParameter("tdqd");
String yxfw = request.getParameter("yxfw");
String  zrbz= request.getParameter("zrbz");//责任班组
String gstzsj=request.getParameter("gstzsj");//公司通知时间
String ysdtzsj = request.getParameter("ysdtzsj");
String bztzsj= request.getParameter("bztzsj");
String yxlc = request.getParameter("yxlc");
String zzcdbz = request.getParameter("zzcdbz");
String sj1 = request.getParameter("sj1");  
String rs1 = request.getParameter("rs1");
String zzddbz = request.getParameter("zzddbz");
String sj2 = request.getParameter("sj2");
String rs2 = request.getParameter("rs2");
String qxldr = request.getParameter("qxldr");
String zw = request.getParameter("zw");
String zrs = request.getParameter("zrs");
String tdkssj = request.getParameter("tdkssj");
String tdjssj = request.getParameter("tdjssj");
String ztdsj = request.getParameter("ztdsj");
String qxkssj = request.getParameter("qxkssj");
String qxjssj = request.getParameter("qxjssj");
String zqxsj = request.getParameter("zqxsj");
String sbqk = request.getParameter("sbqk");
String cljg = request.getParameter("cljg");
String yy = request.getParameter("yy");
String jxqkjl = request.getParameter("jxqkjl");
String zbddy = request.getParameter("zbddy");
System.out.println("###########值班调度员:"+gzlb);
String tbsj = request.getParameter("tbsj");

DbTrade dbTrade=new DbTrade();
try {
   String sql_insert="insert into z_qxfz_sgsb(gzid,GZFSSJ,GZDD,GZLB,TDQD,YXFW,ZRBZ,GSTZSJ,YSDTZSJ,BZTZSJ,YXLC,ZZCDBZ,SJ1,RS1,ZZDDBZ,SJ2,RS2,QXLDR,ZW,ZRS,TDKSSJ,TDJSSJ,ZTDSJ,QXKSSJ,QXJSSJ,ZQXSJ,SBQK,CLJG,YY,JXQKJL,ZBDDY,TBSJ) values(Z_QXFZ_SGSBSQUENCE.Nextval,to_date('"+gzfssj+"','yyyy-mm-dd hh24:mi'),'"+gzdd+"','"+gzlb+"','"+tdqd+"','"+yxfw+"','"+zrbz+"',to_date('"+gstzsj+"','yyyy-mm-dd hh24:mi'),to_date('"+ysdtzsj+"','yyyy-mm-dd hh24:mi'),to_date('"+bztzsj+"','yyyy-mm-dd hh24:mi'),'"+yxlc+"','"+zzcdbz+"',to_date('"+sj1+"','yyyy-mm-dd hh24:mi'),'"+rs1+"','"+zzddbz+"',to_date('"+sj2+"','yyyy-mm-dd hh24:mi'),'"+rs2+"','"+qxldr+"','"+zw+"','"+zrs+"',to_date('"+tdkssj+"','yyyy-mm-dd hh24:mi'),to_date('"+tdjssj+"','yyyy-mm-dd hh24:mi'),'"+ztdsj+"',to_date('"+qxkssj+"','yyyy-mm-dd hh24:mi'),to_date('"+qxjssj+"','yyyy-mm-dd hh24:mi'),'"+zqxsj+"','"+sbqk+"','"+cljg+"','"+yy+"','"+jxqkjl+"','"+zbddy+"',to_date('"+tbsj+"','yyyy-mm-dd hh24:mi'))";
   //System.out.println("添加sql语句:"+sql_insert);
    dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'数据添加成功！'}");
} 

catch(Exception ex) {
}

%>
