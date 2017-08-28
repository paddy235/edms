<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%
String gjz = (String)request.getParameter("gjz");
String zyfl = (String)request.getParameter("zyfl");
String nrfl = (String)request.getParameter("nrfl");
String xzjg = (String)request.getParameter("xzjg");
String whereclause="1=1";
 if(gjz!="")
    {
    	whereclause= whereclause + " and tzmc like '%" + gjz +"%'" ; 
    }
 if(zyfl!="")
    {
    	whereclause=whereclause+ " and zyfl ='"+zyfl+"'";
    }
if(nrfl!="")
    {
    	whereclause=whereclause+ " and nrfl='"+nrfl+"'";
    }
if(xzjg!="")
    {
    	whereclause=whereclause+ " and xzjg='"+xzjg+"'";
    }

try {
	session.setAttribute("whereclause",whereclause);   
	out.print("{success:true,msg:'²éÑ¯³É¹¦!'}"); 
} 

catch(Exception ex) {
}
%>
