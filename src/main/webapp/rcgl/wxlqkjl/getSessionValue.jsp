<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

session.setAttribute("dwmc", "��ɳ������");

if (session.getAttribute("dwmc")!=null)
{
	String dwmc=session.getAttribute("dwmc").toString();
	out.print( dwmc );

}
else
{

    out.print("����������");
}
%>
