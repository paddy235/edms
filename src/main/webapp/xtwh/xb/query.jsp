<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String XBID = request.getParameter("XBID");
String XBMC = request.getParameter("XBMC");

String whereclause="";
whereclause="1=1";
System.out.println("whereclause:"+whereclause);
try {
	if(XBID=="")
    {
      if(XBMC=="")
      {
        whereclause= "1=1";
      }
      else
      {
    	whereclause= "XBMC='"+XBMC+"'";
    	}
    }
    else
    {
    	if(XBMC=="")
    	whereclause="XBID='"+XBID+"'";
    	else
    	whereclause= "XBMC='"+XBMC+"' and XBID='"+XBID+"'";
	}
} 

catch(Exception ex) {
}
%>
