<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String xb = request.getParameter("XBBM");
String xzjg = request.getParameter("QJZC");
String sbmc = request.getParameter("XLMC");
String whereclause="1=1";
try {

	 if(xzjg!="")
    {
    	whereclause=whereclause+ " and QJZC='"+xzjg+"'";
    }
    if(xb!="")
    {
    	whereclause=whereclause+ " and XBBM='"+xb+"'";
    }
   if(sbmc!="")
    {
    	whereclause=whereclause+ " and XLMC='"+sbmc+"'";
    }
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
