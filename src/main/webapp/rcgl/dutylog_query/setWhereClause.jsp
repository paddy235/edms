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
	
	String whereclause_dutylog="";
	
	if ((taskunit.trim()!=""))
	{
		whereclause_dutylog += " t.bdsdwid='"+taskunit+"' ";	
	}
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_dutylog.indexOf("=")>0) whereclause_dutylog += " and ";
		
		whereclause_dutylog += "t.bdsflsj >=to_date('"+ksrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_dutylog.indexOf("=")>0) whereclause_dutylog += " and ";
		
		whereclause_dutylog += " t.bdsflsj <=to_date('"+jsrq+"','YYYY-MM-DD hh24:mi') ";	
	}
	
	
	System.out.println("whereclause_dutylog:"+whereclause_dutylog);
	session.setAttribute("whereclause_dutylog",whereclause_dutylog);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
