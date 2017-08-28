<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
 

<%
String taskunit = request.getParameter("taskunit").toString();
String ksrq = request.getParameter("ksrq").toString();
String jsrq = request.getParameter("jsrq").toString();


System.out.println("taskunit"+taskunit);


try {
	
	String whereclause_command="";
	
	if ((taskunit.trim()!=""))
	{
		whereclause_command += " sldwid='"+taskunit+"' ";	
	}
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_command.indexOf("=")>0) whereclause_command += " and ";
		
		whereclause_command += " flsj>=to_date('"+ksrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_command.indexOf("=")>0) whereclause_command += " and ";
		
		whereclause_command += " flsj<=to_date('"+jsrq+"','YYYY-MM-DD') ";	
	}
	
	
	System.out.println("whereclause_command:"+whereclause_command);
	session.setAttribute("whereclause_command",whereclause_command);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
