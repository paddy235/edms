<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String JSDM = request.getParameter("JSDM").toString();
String JSJC = request.getParameter("JSJC").toString();
String JSMC = request.getParameter("JSMC").toString();


String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(JSDM!="")
	whereclause+="and JSDM='"+JSDM+"'";
	if(JSMC!="")
	whereclause+="and JSMC='"+JSMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
