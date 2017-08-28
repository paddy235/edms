<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String LJDM = request.getParameter("LJDM").toString();
String LJPYM = request.getParameter("LJPYM").toString();
//String LJQC = request.getParameter("LJQC");
String LJJC = request.getParameter("LJJC").toString();
//String LJPXM = request.getParameter("LJPXM");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(LJDM!="")
	whereclause+="and LJDM='"+LJDM+"'";
	if(LJJC!="")
	whereclause+="and LJJC='"+LJJC+"'";
	if(LJPYM!="")
	whereclause+="and LJPYM='"+LJPYM+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
