<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String XDTDM = request.getParameter("XDTDM").toString();
String XDTMC = request.getParameter("XDTMC").toString();
String XDDM = request.getParameter("XDDM").toString();


String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(XDTDM!="")
	whereclause+="and XDTDM=  like '%"+XDTDM+"%'";
	if(XDTMC!="")
	whereclause+="and XDTMC='"+XDTMC+"'";
	if(XDDM!="")
	whereclause+="and XDDM='"+XDDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
