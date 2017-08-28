<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String XLDM = request.getParameter("XLDM").toString();
String XLM = request.getParameter("XLM").toString();



String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(XLDM!="")
	whereclause+="and XlDM='"+XLDM+"'";
	if(XLM!="")
	whereclause+="and XLM='"+XLM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
