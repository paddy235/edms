<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");


System.out.println("ksrq"+ksrq);
System.out.println("jsrq"+jsrq);


try {
	
	String whereclause_changeduty="";
	
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_changeduty.indexOf("=")>0) whereclause_changeduty += " and ";
		
		whereclause_changeduty += " jbsj>=to_date('"+ksrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_changeduty.indexOf("=")>0) whereclause_changeduty += " and ";
		
		whereclause_changeduty += " jbsj<=to_date('"+jsrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
		
	
	System.out.println("whereclause_changeduty:"+whereclause_changeduty);
	session.setAttribute("whereclause_changeduty",whereclause_changeduty);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
