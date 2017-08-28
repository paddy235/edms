<%@ page language="java"
contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%

try {
	
	 String myURL="../../errorpage.jsp";
	 String name="";
   if(session.getAttribute("YHMC")!=null)
   {
     name=session.getAttribute("YHMC").toString();
   }
   else
   {
        response.sendRedirect(myURL);
   }
	
    
   out.print( name);	
   

} 

catch(Exception ex) {
}
    
    %>
