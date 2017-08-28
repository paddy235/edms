<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String ID = request.getParameter("ID");
String NAME = request.getParameter("NAME");
String whereclause="";
try {
    
    if(ID=="")
    {
      if(NAME=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "NAME='"+NAME+"'";
    	}
    }
    else
    {
    	if(ID=="")
    	whereclause="NAME='"+NAME+"'";
    	else
    	whereclause= "NAME='"+NAME+"' and ID='"+ID+"'";
	}
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
