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

String gqpym= request.getParameter("gqdm");//gqpym里面存储工区代码
String bgsj = request.getParameter("bgsj");
String kgh = request.getParameter("kgh");
String bhzzmc=request.getParameter("bhzzmc");//保护装置的名称

String chzzt= request.getParameter("chzzt");//重合闸状态tdqd
String sgjl = request.getParameter("sgjl");//故标测距
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
String bztzt = "null";//试送情况
String gzbh="null";//故障编号GZBH
String  bhzzdm= "null";//对应的是保护装置的dm
String ddy=session.getAttribute("YHMC").toString();//调度员
String xb ="null";//线别
String tdqd ="null";//停电区段

//牵引新增的字段
String ia = request.getParameter("ia");
String ib = request.getParameter("ib");
String ic = request.getParameter("ic");
String ua = request.getParameter("ua");
String ub = request.getParameter("ub");


DbTrade dbTrade=new DbTrade();

try {
   String sql_insert="insert into Z_YXGL_QYGZJL(YDSGBM,YDBGBH,BGSJ,GQPYM,BHZZDM,GZMS,SGJL,ZTBZ,TZYY,SJGZDD,CHZZT,FHSJ,TDSF,LB,BZ,DDY,xb,bhzzmc,kgh,tdqd,shr,bztzt,hfsj,djr,ia,ib,ic,ua,ub) values(YDGZBGSEQ.Nextval,'',to_date('"+bgsj
   +"','yyyy-mm-dd hh24:mi'),'"+gqpym+"',"+bhzzdm+",'"+gzms+"','"+sgjl+"','"+ztbz+"','"+tzyy+"','"+sjgzdd+"','"+chzzt+"',to_date('"+fhsj+"','yyyy-mm-dd hh24:mi'),'"+tdsf+"','"+lb+"','"+bz+"','"+ddy+"',"+xb+",'"+bhzzmc+"','"+kgh+"',"+tdqd+",'"+shr+"',"+bztzt+",to_date('"+hfsj+"','yyyy-mm-dd hh24:mi'),'"+djr+"','"+ia+"','"+ib+"','"+ic+"','"+ua+"','"+ub+"')";
   System.out.println("qy_add.jsp insert:"+sql_insert);
   dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'牵引跳闸记录添加成功！'}");
} 

catch(Exception ex) {
}

%>
