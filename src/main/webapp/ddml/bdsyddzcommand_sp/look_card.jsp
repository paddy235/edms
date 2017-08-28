<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%> 
<%@page import="mor.commons.db.DbTrade"%>

<%@page import="java.util.regex.Pattern"%>
<%@page import="java.util.regex.Matcher"%>
<%!   public String SetNull(String Str)
    {
    //System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null)
      {
        return "";
      }
      else
      {  
      Pattern p = Pattern.compile("\r\n");     
  	  Matcher m = p.matcher(Str);   
      return m.replaceAll("\\\\r\\\\n");
     }
    } %>

<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String kpid=request.getParameter("kpbh");
String com_sldw=request.getParameter("com_sldw");

DbTrade dbTrade=new DbTrade();
try {
    //z_yxgl_command_card
  String sql_Query="select * from J_gdgy_Czkp where kpid=\'"+kpid+"\'";
  java.sql.ResultSet gridResultSet=dbTrade.executeQuery(sql_Query);
  System.out.println("updat:"+sql_Query);
  String kpnr="";
  String kpmc="";
  String kpmcT="";
  String json ="";
  while(gridResultSet.next())
  {
  json = "{id:'"+gridResultSet.getString("kpmc")+"',kpmc:'"+gridResultSet.getString("kpmc")+"',kpnr:'"+SetNull(gridResultSet.getString("kpnr"))+"'}";

  }
    kpmcT=kpmc;
  //kpmc="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;231（马龙上行）馈线断路器送电 </br>";
  //kpnr=" 1.闭合2311确认 </br>2.确认2310已联动断开</br>3.确认231断路器小车在运行位置且储能正常</br>4.闭合231确认</br>5.在2311外侧验明已有电";
  dbTrade.close();
  //out.print("{success:true,msg:'"+kpmc+kpnr+"'}");

  System.out.println(json);
  out.println(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
