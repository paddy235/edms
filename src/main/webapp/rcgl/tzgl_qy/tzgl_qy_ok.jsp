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

String gqpym= request.getParameter("gqdm");//gqpym����洢��������
String bgsj = request.getParameter("bgsj");
String kgh = request.getParameter("kgh");
String bhzzmc=request.getParameter("bhzzmc");//����װ�õ�����

String chzzt= request.getParameter("chzzt");//�غ�բ״̬tdqd
String sgjl = request.getParameter("sgjl");//�ʱ���
String lb = request.getParameter("lb");//���
String fhsj = request.getParameter("fhsj");//����ʱ��

String hfsj = request.getParameter("hfsj");//�ָ�ʱ��
String tdsf = request.getParameter("tdsf"); //ͣ��ʱ��
String shr = request.getParameter("shr");//�Ǽ���
String djr = request.getParameter("djr");//�����

String sjgzdd = request.getParameter("sjgzdd");//ͣ�緶Χ ʵ�ʹ��ϵص�
String tzyy = request.getParameter("tzyy");//��բԭ��

String gzms = request.getParameter("gzms");//ͣ�緶Χ�������
String bz = request.getParameter("bz");//��ע

String ztbz="1";//״̬��ʶ��1 ȷ��

//û�õ��ֶ�
String bztzt = "null";//�������
String gzbh="null";//���ϱ��GZBH
String  bhzzdm= "null";//��Ӧ���Ǳ���װ�õ�dm
String ddy=session.getAttribute("YHMC").toString();//����Ա
String xb ="null";//�߱�
String tdqd ="null";//ͣ������
//ǣ���������ֶ�
String ia = request.getParameter("ia");
String ib = request.getParameter("ib");
String ic = request.getParameter("ic");
String ua = request.getParameter("ua");
String ub = request.getParameter("ub");


DbTrade dbTrade=new DbTrade();

try {
 String sql_update="update Z_YXGL_QYGZJL set  BGSJ=to_date('"+bgsj+"','yyyy-mm-dd hh24:mi'),GQPYM='"+gqpym
 +"',tdqd="+tdqd+",SJGZDD='"+sjgzdd+"',CHZZT='"+chzzt+"',GZMS='"+gzms+"',SGJL='"+sgjl+"',TZYY='"+tzyy+"',FHSJ=to_date('"+fhsj+"','yyyy-mm-dd hh24:mi'),TDSF='"+tdsf+"',LB='"+lb+"',BZ='"+bz+"',DDY='"+ddy+"',bhzzmc='"+bhzzmc+"',xb="+xb+",kgh='"+kgh+"',shr='"+shr+"',bztzt="+bztzt+",HFSJ=to_date('"+hfsj+"','yyyy-mm-dd hh24:mi'),DJR='"+djr+"',ztbz='"+ztbz+"',ia='"+ia+"',ib='"+ib+"',ic='"+ic+"',ua='"+ua+"',ub='"+ub+"' where ydsgbm='"+ydsgbm+"'";
  
  //System.out.println("updat:"+sql_update);
  dbTrade.executeUpdate(sql_update);
  dbTrade.close();
  out.print("{success:true,msg:'������բ��¼ȷ�ϳɹ���'}");

} 

catch(Exception ex) {
	System.out.println("ok:"+ex.toString());
}

%>
