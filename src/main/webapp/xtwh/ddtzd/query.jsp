<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String DDTDM = request.getParameter("DDTDM").toString();
String DDTMC = request.getParameter("DDTMC").toString();
String DDDM = request.getParameter("DDDM").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(DDTDM!="")
	whereclause+="and DDTDM='"+DDTDM+"'";
	if(DDTMC!="")
	whereclause+="and DDTMC='"+DDTMC+"'";
    if(DDDM!="")
	whereclause+="and DDDM='"+DDDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
