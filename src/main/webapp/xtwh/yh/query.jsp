<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String YHMC = request.getParameter("YHMC").toString();
String YHDM = request.getParameter("YHDM_Q").toString();



String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
     
	if(YHMC!="")
	whereclause+="and YHMC='"+YHMC+"'";
	if(YHDM!="")
	whereclause+="and YHDM='"+YHDM+"'";
	
    session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
