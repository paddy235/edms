<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String GDDDM = request.getParameter("GDDDM").toString();
String GGDMC = request.getParameter("GGDMC").toString();
String LJDM = request.getParameter("LJDM").toString();

String whereclause="";
whereclause="1=1";
//System.out.println("whereclause:"+whereclause);
try {
     
	if(GDDDM!="")
	whereclause+="and GDDDM='"+GDDDM+"'";
	if(GGDMC!="")
	whereclause+="and GGDMC='"+GGDMC+"'";
	if(LJDM!="")
	whereclause+="and LJDM='"+LJDM+"'";
	//System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
   
} 

catch(Exception ex) {
	ex.printStackTrace();
}
%>
