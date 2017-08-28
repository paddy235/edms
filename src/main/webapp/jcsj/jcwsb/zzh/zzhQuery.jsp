<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String xbbm = request.getParameter("XBBM");
String qjzc = request.getParameter("QJZC");
String whereclause="1=1";
try {

	 if(xbbm!="")
    {
    	whereclause=whereclause+ " and xbbm='"+xbbm+"'";
    }
    if(qjzc!="")
    {
    	whereclause=whereclause+ " and qjzc='"+qjzc+"'";
    }
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
