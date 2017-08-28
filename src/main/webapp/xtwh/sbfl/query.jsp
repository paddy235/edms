<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String SBFLID = request.getParameter("SBFLID");
String SBFLNAME = request.getParameter("SBFLNAME");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
	if(SBFLID=="")
    {
      if(SBFLNAME=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "SXMC='"+SBFLNAME+"'";
    	}
    }
    else
    {
    	if(SBFLNAME=="")
    	whereclause="SBFLID='"+SBFLID+"'";
    	else
    	whereclause= "SBFLNAME='"+SBFLNAME+"' and SBFLID='"+SBFLID+"'";
	}
} 

catch(Exception ex) {
}
%>
