<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String GQDM = request.getParameter("GQDM").toString();
String KGH = request.getParameter("KGH").toString();
String KXMC = request.getParameter("KXMC").toString();


String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(GQDM!="")
	whereclause+="and GQDM='"+GQDM+"'";
	if(KGH!="")
	whereclause+="and KGH='"+KGH+"'";
	if(KXMC!="")
	whereclause+="and KXMC='"+KXMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
