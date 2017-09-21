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
	
	String whereclause_onduty="";
	
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_onduty.indexOf("=")>0) whereclause_onduty += " and ";
		
		whereclause_onduty += " jssj>=to_date('"+ksrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_onduty.indexOf("=")>0) whereclause_onduty += " and ";
		
		whereclause_onduty += " jssj<=to_date('"+jsrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
		
	
	System.out.println("whereclause_onduty:"+whereclause_onduty);
	session.setAttribute("whereclause_onduty",whereclause_onduty);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
