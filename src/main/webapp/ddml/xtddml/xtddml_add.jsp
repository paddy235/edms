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
String xtsj=request.getParameter("xtsj");//系统命令时间
String mlbh = request.getParameter("mlbh");//命令编号
String mlnr = request.getParameter("mlnr");
String czmd = request.getParameter("czmd");
String wcsj = request.getParameter("wcsj");//完成时间
String  hbsj= request.getParameter("hbsj");//汇报时间
String xtddy=request.getParameter("xtddy");//系统调度员
String zbddy = request.getParameter("zbddy");
System.out.println("###########值班调度员:"+zbddy);


DbTrade dbTrade=new DbTrade();
try {
   String sql_insert="insert into z_yxgl_cmd_xtddml(cmdid,xtsj,mlbh,mlnr,czmd,wcsj,hbsj,xtddy,zbddy) values(Z_YXGL_CMD_XTDDMLSQ.Nextval,to_date('"+xtsj+"','yyyy-mm-dd hh24:mi'),'"+mlbh+"','"+mlnr+"','"+czmd+"',to_date('"+wcsj+"','yyyy-mm-dd hh24:mi'),to_date('"+hbsj+"','yyyy-mm-dd hh24:mi'),'"+xtddy+"','"+zbddy+"')";
   System.out.println("添加sql语句:"+sql_insert);
    dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'数据添加成功！'}");
} 

catch(Exception ex) {
}

%>
