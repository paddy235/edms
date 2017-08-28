<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String QJBM = request.getParameter("QJBM").toString();
String MC = request.getParameter("MC").toString();
String GQDM = request.getParameter("GQDM").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(QJBM!="")
	whereclause+="and QJBM='"+QJBM+"'";
	if(MC!="")
	whereclause+="and MC='"+MC+"'";
	if(GQDM!="")
	whereclause+="and GQDM='"+GQDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
