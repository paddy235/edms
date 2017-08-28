<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String education = request.getParameter("zylb");
String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");

try {
	session.setAttribute("whereclause",education);    
    //out.println(json);
    
      out.print("{success:true,msg:'"+ education+ "'}");
} 

catch(Exception ex) {
}
%>
