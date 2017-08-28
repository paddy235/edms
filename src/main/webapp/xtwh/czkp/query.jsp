<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String KPID = request.getParameter("KPID");
String DWMC = request.getParameter("DWMC");
String KPBH = request.getParameter("KPBH");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
if(KPID!="")
	whereclause+="and KPID='"+KPID+"'";
	if(DWMC!="")
	whereclause+="and DWMC='"+DWMC+"'";
	if(KPBH!="")
	whereclause+="and KPBH='"+KPBH+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
