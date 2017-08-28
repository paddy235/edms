<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String DDDM = request.getParameter("DDDM").toString();
String DDMC = request.getParameter("DDMC").toString();
String LJDM = request.getParameter("LJDM").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(DDDM!="")
	whereclause+="and DDDM='"+DDDM+"'";
	if(DDMC!="")
	whereclause+="and DDMC='"+DDMC+"'";
	if(LJDM!="")
	whereclause+="and LJDM='"+LJDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
