<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%
String JGLBDM = request.getParameter("JGLBDM").toString();
String GQMC = request.getParameter("GQMC").toString();
String CJDM = request.getParameter("CJDM").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(GQMC!="")
	whereclause+="and GQMC='"+GQMC+"'";
	if(JGLBDM!="")
	whereclause+="and JGLBDM='"+JGLBDM+"'";
	if(CJDM!="")
	whereclause+="and CJDM='"+CJDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
