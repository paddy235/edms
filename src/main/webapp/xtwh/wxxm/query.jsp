<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String ID = request.getParameter("ID").toString();
String NAME = request.getParameter("NAME").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);

try {
	if(ID!="")
	whereclause+="and ID='"+ID+"'";
	if(NAME!="")
	whereclause+="and NAME='"+NAME+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
} 
catch(Exception ex) {
}
%>
