<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

System.out.println("chenzhen");

String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");


System.out.println("ksrq"+ksrq);
System.out.println("jsrq"+jsrq);


try {
	
	String whereclause_fallbow="";
	
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_fallbow.indexOf("=")>0) whereclause_fallbow += " and ";
		
		whereclause_fallbow += " tzsj>=to_date('"+ksrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_fallbow.indexOf("=")>0) whereclause_fallbow += " and ";
		
		whereclause_fallbow += " tzsj<=to_date('"+jsrq+"','YYYY-MM-DD') ";	
	}
	
		
	
	System.out.println("whereclause_fallbow:"+whereclause_fallbow);
	session.setAttribute("whereclause_fallbow",whereclause_fallbow);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
