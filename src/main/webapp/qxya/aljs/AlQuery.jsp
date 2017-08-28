<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");
String xbbmcx = request.getParameter("xbbmcx")==""?"ALL":request.getParameter("xbbmcx");
String sglxcx = request.getParameter("sglxcx")==""?"ALL":request.getParameter("sglxcx");;
String almccx = request.getParameter("almccx");
String whereclause="sfgd='1' and fssj>=to_date('"+ksrq+"','yyyy-mm-dd hh24:mi:ss') and fssj<=to_date('"+jsrq+"','yyyy-mm-dd hh24:mi:ss')";
try {
    if(!xbbmcx.equals("ALL"))
    {
    	whereclause=whereclause+ " and xbbm='"+xbbmcx+"'";
    }
    if(!sglxcx.equals("ALL"))
    {
    	whereclause=whereclause+ " and sglx='"+sglxcx+"'";
	}
	if(almccx!="")
    {
    	whereclause=whereclause+ " and almc like '%"+almccx+"%'";
    }
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    //System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
