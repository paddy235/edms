<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%
if (session.getAttribute("DWMC")!=null)
{
	String dwmc=session.getAttribute("DWMC").toString();
	out.print( dwmc );
}
else
{
    out.print("ºâÑôÍø¹¤Çø");
}
%>
