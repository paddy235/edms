<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String taskunit = request.getParameter("taskunit").toString();
String ksrq = request.getParameter("ksrq").toString();
String jsrq = request.getParameter("jsrq").toString();

String jhzt = request.getParameter("jhzt");
String zylb1 = request.getParameter("zylb1");
String zylb2 = request.getParameter("zylb2");
String zylb3 = request.getParameter("zylb3");

System.out.println("jhzt"+jhzt);


try {
	
	String whereclause_taskplan="gq.gqdm=jh.dwid and wxxmmc.id=jh.wxxm and jhlx.sxid=jh.jhlx and xb.xldm=jh.xb and ";
	
	if ((taskunit.trim()!=""))
	{
		whereclause_taskplan += " dwid='"+taskunit+"' ";	
	}
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_taskplan.indexOf("=")>0) whereclause_taskplan += " and ";
		
		whereclause_taskplan += " jhsj>=to_date('"+ksrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_taskplan.indexOf("=")>0) whereclause_taskplan += " and ";
		
		whereclause_taskplan += " jhsj<=to_date('"+jsrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jhzt!=null)&&(!jhzt.equals("5")))
	{
		if (whereclause_taskplan.indexOf("=")>0) whereclause_taskplan += " and ";
		
		whereclause_taskplan += " zt='"+jhzt+"' ";	
	}
	
	  
	if ((zylb1!=null)||(zylb2!=null)||(zylb3!=null))
	{
		
		if (whereclause_taskplan.indexOf("=")>0) whereclause_taskplan += " and ";
		String collectSentence="";
		
		if (zylb1!=null) {collectSentence += "'"+zylb1+"'";}
		if (zylb2!=null) 
		{
			if (collectSentence.lastIndexOf("'")>0){  collectSentence += ",";}
			collectSentence += "'"+zylb2+"'";
		}
		
		if (zylb3!=null) 
		{
			if (collectSentence.lastIndexOf("'")>0)  {collectSentence += ",";}
			
			collectSentence += "'"+zylb3+"'";
		}
		
		whereclause_taskplan += " trim(jhlb) in (" +collectSentence+")" ;	
	}
	
	
	
	System.out.println("whereclause_taskplan:"+whereclause_taskplan);
	session.setAttribute("whereclause_taskplan",whereclause_taskplan);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}

%>
