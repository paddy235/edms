<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%
String gjz = (String)request.getParameter("gjz");
String zyfl = (String)request.getParameter("zyfl");
String jbfl = (String)request.getParameter("jbfl");
String nrfl = (String)request.getParameter("nrfl");
String whereclause="1=1 and lb='1' ";
 if(gjz!="")
    {
    	whereclause= whereclause + " and gzzdmc like '%" + gjz +"%'" ; 
    }
 if(zyfl!="")
    {
    	whereclause=whereclause+ " and zyfl ='"+zyfl+"'";
    }
if(jbfl!="")
    {
    	whereclause=whereclause+ " and jbfl='"+jbfl+"'";
    }
if(nrfl!="")
    {
    	whereclause=whereclause+ " and nrfl='"+nrfl+"'";
    }

try {
	session.setAttribute("whereclause",whereclause);   
	out.print("{success:true,msg:'²éÑ¯³É¹¦!'}"); 
} 

catch(Exception ex) {
}
%>
