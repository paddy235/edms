<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

String SXID = request.getParameter("SXID").toString();
String SXMC = request.getParameter("SXMC").toString();
String SXID1="";
String whereclause="";
whereclause="1=1";

try {
	if(SXID!="")
	{
		SXID1=String.valueOf(Integer.parseInt("1"+SXID.substring(0,3).toString())+1)+"000"; //;
		SXID1=SXID1.substring(1);
		//System.out.println("ss-----"+SXID1);
		whereclause+=" and SXID>='"+SXID+"' and SXID<'"+SXID1+"'";
	}
	if(SXMC!="")
		whereclause+="and SXMC='"+SXMC+"'";
	System.out.println("aa:"+whereclause);
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
} 
catch(Exception ex) {
}
%>
