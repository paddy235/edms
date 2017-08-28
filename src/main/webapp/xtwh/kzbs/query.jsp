<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String ID = request.getParameter("ID");
String MC = request.getParameter("MC");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
	if(ID=="")
    {
      if(MC=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "MC='"+MC+"'";
    	}
    }
    else
    {
    	if(MC=="")
    	whereclause="ID='"+ID+"'";
    	else
    	whereclause= "MC='"+MC+"' and ID='"+ID+"'";
	}
} 

catch(Exception ex) {
}
%>
