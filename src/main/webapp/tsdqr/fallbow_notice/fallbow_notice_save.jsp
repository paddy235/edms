<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//��ȡ�ͻ����ύ���ֶ�ֵ
String dwid="";
String dwmc="";

String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null||session.getAttribute("YHMC")==null)
{System.out.println("&*&*&*&*&*");
	response.sendRedirect(myURL);
}
else
{
 dwid=session.getAttribute("DWDM").toString();
 dwmc=session.getAttribute("DWMC").toString();
}

String tzbh=request.getParameter("mlh");//�����
String lcddy=request.getParameter("lcddy");
String ksjtwz=request.getParameter("jgdd");//�����ص�
String jsjtwz=request.getParameter("jsjtwz");
String xb=request.getParameter("xb");//�б�
String m_ksjtwx=request.getParameter("m_ksjtwx");
String m_jsjtwx=request.getParameter("m_jsjtwx");
String t_zbjgb=request.getParameter("zbjg");//׼��������
String t_jgb=request.getParameter("tjg");//T������
String zbjgb=request.getParameter("zbjgb");
String jgb=request.getParameter("jg");//������
String sgb=request.getParameter("sg");//������
String pdqk=request.getParameter("pdqk");//�¶����
String bz=request.getParameter("bz");//��ע
String tzsj=request.getParameter("tzsj");//֪ͨʱ��
String ccsj=request.getParameter("ccsj");//����ʱ��
String gdddy=request.getParameter("ddy");//���Ա
String xdy=request.getParameter("xdy");//�е�Աjgyy
String jgyy=request.getParameter("jgyy");//�е�Ա
String sgmlh=request.getParameter("sgmlh");//���������

//�����ύֵ
if (dwid!=null) {dwid="'" + dwid + "'" ;}  else{dwid="''";}
if (dwmc!=null) {dwmc="'" + dwmc + "'" ;}  else{dwmc="''";} 
if (tzbh!=null) {tzbh="'" + tzbh + "'" ;}  else{tzbh="''";}
if (lcddy!=null) {lcddy="'" + lcddy + "'" ;}  else{lcddy="''";}
if (ksjtwz!=null) {ksjtwz="'" + ksjtwz + "'" ;}  else{ksjtwz="''";}
if (jsjtwz!=null) {jsjtwz="'" + jsjtwz + "'" ;}  else{jsjtwz="''";}
if (xb!=null) {xb="'" + xb + "'" ;}  else{xb="''";}
if (m_ksjtwx!=null) {m_ksjtwx="'" + m_ksjtwx + "'" ;}  else{m_ksjtwx="''";}
if (m_jsjtwx!=null) {m_jsjtwx="'" + m_jsjtwx + "'" ;}  else{m_jsjtwx="''";}
if (t_zbjgb!=null) {t_zbjgb="'" + t_zbjgb + "'" ;}  else{t_zbjgb="''";}
if (t_jgb!=null) {t_jgb="'" + t_jgb + "'" ;}  else{t_jgb="''";}
if (zbjgb!=null) {zbjgb="'" + zbjgb + "'" ;}  else{zbjgb="''";}
if (jgb!=null) {jgb="'" + jgb + "'" ;}  else{jgb="''";}
if (sgb!=null) {sgb="'" + sgb + "'" ;}  else{sgb="''";}
if (tzsj==null||tzsj.equals("")) {tzsj="''";}  else {tzsj="to_date('" + tzsj + "','YYYY-MM-DD hh24:mi')" ;}
if (ccsj==null||ccsj.equals("")) {ccsj="''";}  else {ccsj="to_date('" + ccsj + "','YYYY-MM-DD hh24:mi')" ;}  
if (gdddy!=null) {gdddy="'" + gdddy + "'" ;}  else{gdddy="''";}
if (xdy!=null) {xdy="'" + xdy + "'" ;}  else{xdy="''";}
if (pdqk!=null) {pdqk="'" + pdqk + "'" ;}  else{pdqk="''";}
if (bz!=null) {bz="'" + bz + "'" ;}  else{bz="''";}
if (jgyy!=null) {jgyy="'" + jgyy + "'" ;}  else{jgyy="''";}

//session.setAttribute("jhid", jhid);


DbTrade db_connection=new DbTrade();

try {
    
	String sql_save="insert into z_yxgl_jgtz values(Z_YXGL_JGTZSQUENCE.nextval," 
  												+ dwid +","
  												+ dwmc +","
												+ tzbh +","
  												+ lcddy +","
												+ ksjtwz +","
  												+ jsjtwz +","
												+ xb +","
  												+ m_ksjtwx +","
												+ m_jsjtwx +","
  												+ t_zbjgb +","
												+ t_jgb +","
												+ zbjgb +","
  												+ jgb +","
												+ sgb +","
  												+ tzsj +","
												+ ccsj +","
  												+ gdddy+ ","+xdy+","+pdqk+","+bz+",'0',"+jgyy+","+sgmlh+",'','')";
	System.out.println(sql_save);	
	db_connection.executeUpdate(sql_save);
  db_connection.close();
   		out.print("{success:true,msg:'���ݱ���ɹ���'}");
    
    
} 

catch(Exception ex) {
}

%>
