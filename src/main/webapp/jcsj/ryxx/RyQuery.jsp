<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String szdw = request.getParameter("szdw");
//String gqmc = request.getParameter("tfgq");
String whereclause="";
try {
    
    if(szdw=="")
    {
        whereclause= "";
    }
    else
    {
    	whereclause= "szdw='"+szdw+"'";
	}
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
