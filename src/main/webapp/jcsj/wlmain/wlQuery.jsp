<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String ssdw = request.getParameter("ssdw");
String mc = request.getParameter("mc");
String whereclause="";
try {
    
    if(ssdw=="")
    {
      if(mc=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "mc='"+mc+"'";
    	}
    }
    else
    {
    	if(mc=="")
    	whereclause="ssdw='"+ssdw+"'";
    	else
    	whereclause= "ssdw='"+ssdw+"' and mc='"+mc+"'";
	}
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
