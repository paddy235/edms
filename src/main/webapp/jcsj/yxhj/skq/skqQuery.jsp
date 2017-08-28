<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String whereclause="1=1";
try {

	 if(xzjg!="")
    {
    	whereclause=whereclause+ " and xzjg='"+xzjg+"'";
    }
    if(xb!="")
    {
    	whereclause=whereclause+ " and xb='"+xb+"'";
    }
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
