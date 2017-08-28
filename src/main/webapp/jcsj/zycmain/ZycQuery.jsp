<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String cjmc = request.getParameter("sscj");
String gqmc = request.getParameter("tfgq");
String whereclause="";
try {
    
    if(cjmc=="")
    {
      if(gqmc=="")
      {
        whereclause= "";
      }
      else
      {
    	whereclause= "tfgq='"+gqmc+"'";
    	}
    }
    else
    {
    	whereclause= "sscj='"+cjmc+"' and tfgq='"+gqmc+"'";
	}
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
