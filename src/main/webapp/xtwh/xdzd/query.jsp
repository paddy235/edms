<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String XDDM = request.getParameter("XDDM").toString();
String XDJC = request.getParameter("XDJC").toString();
String XDMC = request.getParameter("XDMC").toString();


String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(XDDM!="")
	whereclause+="and XDDM='"+XDDM+"'";
	if(XDJC!="")
	whereclause+="and XDJC='"+XDJC+"'";
	if(XDMC!="")
	whereclause+="and XDMC='"+XDMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
