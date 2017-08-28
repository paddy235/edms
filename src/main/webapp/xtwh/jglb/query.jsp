<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String JGLBDM = request.getParameter("JGLBDM");
String JGLBMC = request.getParameter("JGLBMC");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
	if(JGLBDM!="")
	whereclause+="and JGLBDM='"+JGLBDM+"'";
	if(JGLBMC!="")
	whereclause+="and JGLBMC='"+JGLBMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
