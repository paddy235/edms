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
String xtsj=request.getParameter("xtsj");//ϵͳ����ʱ��
String mlbh = request.getParameter("mlbh");//������
String mlnr = request.getParameter("mlnr");
String czmd = request.getParameter("czmd");
String wcsj = request.getParameter("wcsj");//���ʱ��
String  hbsj= request.getParameter("hbsj");//�㱨ʱ��
String xtddy=request.getParameter("xtddy");//ϵͳ����Ա
String zbddy = request.getParameter("zbddy");
System.out.println("###########ֵ�����Ա:"+zbddy);


DbTrade dbTrade=new DbTrade();
try {
   String sql_insert="insert into z_yxgl_cmd_xtddml(cmdid,xtsj,mlbh,mlnr,czmd,wcsj,hbsj,xtddy,zbddy) values(Z_YXGL_CMD_XTDDMLSQ.Nextval,to_date('"+xtsj+"','yyyy-mm-dd hh24:mi'),'"+mlbh+"','"+mlnr+"','"+czmd+"',to_date('"+wcsj+"','yyyy-mm-dd hh24:mi'),to_date('"+hbsj+"','yyyy-mm-dd hh24:mi'),'"+xtddy+"','"+zbddy+"')";
   System.out.println("���sql���:"+sql_insert);
    dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'������ӳɹ���'}");
} 

catch(Exception ex) {
}

%>
