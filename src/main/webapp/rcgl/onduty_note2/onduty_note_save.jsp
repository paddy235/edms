<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//��ȡ�ͻ����ύ���ֶ�ֵ
String dwid="";
String dwmc="";
String jlr="";

String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null||session.getAttribute("YHMC")==null)
{System.out.println("&*&*&*&*&*");

	response.sendRedirect(myURL);
}
else
{
 dwid=session.getAttribute("DWDM").toString();
 dwmc=session.getAttribute("DWMC").toString();
 jlr=session.getAttribute("YHMC").toString();
}

System.out.println(dwmc);	

	
String tq=request.getParameter("tq");
String jssj=request.getParameter("jssj");
String sfjbrqr=request.getParameter("sfjbrqr");
String jsnr=request.getParameter("jsnr");
String jbrqr=request.getParameter("jbrqr");

//�����ύֵ
if (dwid!=null) {dwid="'" + dwid + "'" ;}  else{dwid="''";}
if (dwmc!=null) {dwmc="'" + dwmc + "'" ;}  else{dwmc="''";} 
if (tq!=null) {tq="'" + tq + "'" ;}  else{tq="''";}
if (jssj!=null) {jssj="to_date('" + jssj + "','YYYY-MM-DD hh24:mi')" ;}  else{jssj="''";}
if (sfjbrqr!=null) {sfjbrqr="'" + sfjbrqr + "'" ;}  else{sfjbrqr="''";}
if (jsnr!=null) {jsnr="'" + jsnr + "'" ;}  else{jsnr="''";}
if (jbrqr!=null) {jbrqr="'" + jbrqr + "'" ;}  else{jbrqr="'null'";}
if (jlr!=null) {jlr="'" + jlr + "'" ;}  else{jlr="''";}

DbTrade db_connection=new DbTrade();
try {
    
	String sql_save="insert into z_yxgl_zbjs2 values(Z_YXGL_ZBJSSQUENCE.nextval,"
  												+ dwid +","
  												+ dwmc +","
												+ tq +","
												+ jssj +","
												+ sfjbrqr +","
  												+ jsnr +","
  												+ jbrqr+ ","
  												+jlr+")";
	System.out.println(sql_save);												  												
	db_connection.executeUpdate(sql_save);
  	db_connection.close(); 
  
   		out.print("{success:true,msg:'���ݱ���ɹ���'}");
    
    
   
} 

catch(Exception ex) {
}

%>
