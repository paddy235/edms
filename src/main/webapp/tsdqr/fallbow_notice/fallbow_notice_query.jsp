<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

System.out.println("chenzhen");

String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");
String tzdw=request.getParameter("tzdw");

System.out.println("tzdw"+tzdw);
System.out.println("ksrq"+ksrq);
System.out.println("jsrq"+jsrq);


try {
	
	String whereclause_fallbow="";
	
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_fallbow.indexOf("=")>0) whereclause_fallbow += " and ";
		
		whereclause_fallbow += " tzsj>=to_date('"+ksrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_fallbow.indexOf("=")>0) whereclause_fallbow += " and ";
		
		whereclause_fallbow += " tzsj<=to_date('"+jsrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	//if ((tzdw.trim()!=""))
	//{
	//	if (whereclause_fallbow.indexOf("=")>0) whereclause_fallbow += " and ";
		
	//	whereclause_fallbow += " dwid like '"+tzdw+"%' ";	
	//}
		
	
	System.out.println("whereclause_fallbow:"+whereclause_fallbow);
	session.setAttribute("whereclause_fallbow",whereclause_fallbow);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
