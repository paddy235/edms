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
String dqyh=session.getAttribute("YHMC").toString();//当前用户
String jlr="";
 
DbTrade dbTrade=new DbTrade();
try {
    //z_yxgl_command_card
  String sql_Query="select * from z_yxgl_zbjs t where t.dwid=\'"+dwid+"\' and sfjbrqr='是' and jbrqr='null' and jlr!='"+dqyh+"'";
  java.sql.ResultSet gridResultSet=dbTrade.executeQuery(sql_Query);
  System.out.println("sql：记事:"+sql_Query);
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

  //kpmc="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;231（马龙上行）馈线断路器送电 </br>";
  //kpnr=" 1.闭合2311确认 </br>2.确认2310已联动断开</br>3.确认231断路器小车在运行位置且储能正常</br>4.闭合231确认</br>5.在2311外侧验明已有电";
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
