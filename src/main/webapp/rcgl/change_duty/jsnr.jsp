<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%!
private String convertNull(String value)
    {
    	//System.out.println("value:"+value);
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return value.replaceAll("\r\n","\\\\r\\\\n");
     	}
    }
 %>

<%

 String myURL="../../errorpage.jsp";
if(session.getAttribute("DWMC")==null)
{
	response.sendRedirect(myURL);
}
String kpid=request.getParameter("kpbh");
String com_sldw=request.getParameter("com_sldw");
String dwid=session.getAttribute("DWDM").toString();
String dqyh=session.getAttribute("YHMC").toString();//��ǰ�û�
String jlr="";
 
DbTrade dbTrade=new DbTrade();
try {
    //z_yxgl_command_card
  String sql_Query="select * from z_yxgl_zbjs t where t.dwid=\'"+dwid+"\' and sfjbrqr='��' and jbrqr='null' and jlr!='"+dqyh+"'";
  java.sql.ResultSet gridResultSet=dbTrade.executeQuery(sql_Query);
  System.out.println("sql������:"+sql_Query);
  String jsnr="";
  String jsid="";
  int i=0;
  while(gridResultSet.next())
  {
     i++;
     jsnr=jsnr+String.valueOf(i)+"."+convertNull(gridResultSet.getString("jsnr"))+"<br>";
     jsid=jsid+gridResultSet.getString("jsid")+",";
     jlr=gridResultSet.getString("jlr");
  }
  System.out.println("::::"+i);
  session.removeAttribute("jsid");
  if(i>0)
  {
  session.setAttribute("jsid",jsid);
  }

  //kpmc="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;231���������У����߶�·���͵� </br>";
  //kpnr=" 1.�պ�2311ȷ�� </br>2.ȷ��2310�������Ͽ�</br>3.ȷ��231��·��С��������λ���Ҵ�������</br>4.�պ�231ȷ��</br>5.��2311����������е�";
  dbTrade.close();

  //out.print("{success:true,msg:'"+kpmc+kpnr+"'}");
  System.out.println("OPOP:"+jsnr);
  String json = "{id:'"+jsnr+"',kpmc:'"+jsnr+"',jlr:'"+jlr+"'}";
  System.out.println("IOIOIO:"+json);
  out.println(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
