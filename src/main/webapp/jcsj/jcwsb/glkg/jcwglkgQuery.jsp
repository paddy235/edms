<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String xb = request.getParameter("XBBM");
String qjzc = request.getParameter("QJZC");
String sblx = request.getParameter("SBLX");
String whereclause="1=1";
try {

	 if(qjzc!="")
    {
    	whereclause=whereclause+ " and qjzc='"+qjzc+"'";
    }
    if(xb!="")
    {
    	whereclause=whereclause+ " and xbbm='"+xb+"'";
    }
     if(sblx!="")
    {
    	whereclause=whereclause+ " and sblx='"+sblx+"'";
    }
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
