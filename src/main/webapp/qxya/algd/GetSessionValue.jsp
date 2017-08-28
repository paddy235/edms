<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>


<%
//session.setAttribute("id", "6");

if (session.getAttribute("albm")!=null)
{
	String albm=session.getAttribute("albm").toString();
	out.print( albm );
}
else
{
    out.print("没有得到值！");
}
%>
