<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String ZZHBM = request.getParameter("ZZHBM").toString();
String ZZHMC = request.getParameter("ZZHMC").toString();
String LJJC = request.getParameter("LJJC").toString();

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(ZZHBM!="")
	whereclause+="and ZZHBM='"+ZZHBM+"'";
	if(ZZHMC!="")
	whereclause+="and ZZHMC='"+ZZHMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
