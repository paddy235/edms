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

String gqpym= request.getParameter("gqdm");//gqpym����洢��������
String bgsj = request.getParameter("bgsj");
String kgh = request.getParameter("kgh");
String bhzzmc=request.getParameter("bhzzmc");//����װ�õ�����

String chzzt= request.getParameter("chzzt");//�غ�բ״̬tdqd
String bztzt = request.getParameter("bztzt");//�������
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

String ztbz="0";//״̬��ʶ

//û�õ��ֶ�
String sgjl = "null";//�¹ʼ�¼
String gzbh="null";//���ϱ��GZBH
String  bhzzdm= "null";//��Ӧ���Ǳ���װ�õ�dm
String ddy=session.getAttribute("YHMC").toString();//����Ա
String xb ="null";//�߱�
String tdqd ="null";//ͣ������



DbTrade dbTrade=new DbTrade();

try {
   String sql_insert="insert into Z_YXGL_DLGZJL(YDSGBM,YDBGBH,BGSJ,GQPYM,BHZZDM,GZMS,SGJL,ZTBZ,TZYY,SJGZDD,CHZZT,FHSJ,TDSF,LB,BZ,DDY,xb,bhzzmc,kgh,tdqd,shr,bztzt,hfsj,djr) values(YDGZBGSEQ.Nextval,'',to_date('"+bgsj
   +"','yyyy-mm-dd hh24:mi'),'"+gqpym+"',"+bhzzdm+",'"+gzms+"',"+sgjl+",'"+ztbz+"','"+tzyy+"','"+sjgzdd+"','"+chzzt+"',to_date('"+fhsj+"','yyyy-mm-dd hh24:mi'),'"+tdsf+"','"+lb+"','"+bz+"','"+ddy+"',"+xb+",'"+bhzzmc+"','"+kgh+"',"+tdqd+",'"+shr+"','"+bztzt+"',to_date('"+hfsj+"','yyyy-mm-dd hh24:mi'),'"+djr+"')";
   System.out.println("remotefault_add.jsp insert:"+sql_insert);
   dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'������բ��¼��ӳɹ���'}");
} 

catch(Exception ex) {
}

%>
