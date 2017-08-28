<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String CJDM = request.getParameter("CJDM").toString();
String CJMC = request.getParameter("CJMC").toString();
String DDM = request.getParameter("DDM").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(CJDM!="" && !CJDM.equalsIgnoreCase("all") )
	whereclause+="and CJDM='"+CJDM+"'";
	if(CJMC!="")
	whereclause+="and CJMC='"+CJMC+"'";
	if(DDM!="")
	whereclause+="and DDM='"+DDM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
