<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

session.setAttribute("dwmc", "长沙网工区");

if (session.getAttribute("dwmc")!=null)
{
	String dwmc=session.getAttribute("dwmc").toString();
	out.print( dwmc );

}
else
{

    out.print("衡阳网工区");
}
%>
