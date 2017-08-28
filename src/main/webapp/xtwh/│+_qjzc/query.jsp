<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String QJBM = request.getParameter("QJBM").toString();
String MC = request.getParameter("MC").toString();


String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(QJBM!="")
	whereclause+="and QJBM='"+QJBM+"'";
	if(MC!="")
	whereclause+="and MC='"+MC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
