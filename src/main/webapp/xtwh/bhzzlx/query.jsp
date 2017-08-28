<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String BHZZLXBM = request.getParameter("BHZZLXBM");
String BHZZLXMC = request.getParameter("BHZZLXMC");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
	if(BHZZLXBM=="")
    {
      if(BHZZLXMC=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "BHZZLXMC='"+BHZZLXMC+"'";
    	}
    }
    else
    {
    	if(BHZZLXMC=="")
    	whereclause="BHZZLXBM='"+BHZZLXBM+"'";
    	else
    	whereclause= "BHZZLXMC='"+BHZZLXMC+"' and BHZZLXBM='"+BHZZLXBM+"'";
	}
} 

catch(Exception ex) {
}
%>
