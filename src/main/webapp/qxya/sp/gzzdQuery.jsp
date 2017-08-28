<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%
String gjz = (String)request.getParameter("gjz");
 
String whereclause="1=1 and lb='4' ";
 if(gjz!="")
    {
    	whereclause= whereclause + " and gzzdmc like '%" + gjz +"%'" ; 
    } 

try {
	session.setAttribute("whereclause",whereclause);   
	out.print("{success:true,msg:'²éÑ¯³É¹¦!'}"); 
} 

catch(Exception ex) {
}
%>
