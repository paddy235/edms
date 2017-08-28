<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%

String sbmc = request.getParameter("sbmc").toString();

String fxsj = request.getParameter("fxsj");
String qxdj1 = request.getParameter("qxdj1");
String qxdj2 = request.getParameter("qxdj2");
String qxdj3 = request.getParameter("qxdj3");


System.out.println("sbmc"+sbmc);
System.out.println("fxsj"+fxsj);
System.out.println("qxdj1"+qxdj1);
System.out.println("qxdj2"+qxdj2);
System.out.println("qxdj3"+qxdj3);


try {
	
	String whereclause_defect="";
	
	if ((sbmc.trim()!=""))
	{
		whereclause_defect += " sbmc='"+sbmc+"' ";	
	}
	
	
	if ((fxsj.trim()!=""))
	{
		if (whereclause_defect.indexOf("=")>0) whereclause_defect += " and ";
		
		whereclause_defect += " fxsj=to_date('"+fxsj+"','YYYY-MM-DD') ";	
	}
	
	if ((qxdj1!=null)||(qxdj2!=null)||(qxdj3!=null))
	{
		
		if (whereclause_defect.indexOf("=")>0) whereclause_defect += " and ";
		String collectSentence="";
		
		if (qxdj1!=null) {collectSentence += "'"+qxdj1+"'";}
		if (qxdj2!=null) 
		{
			if (collectSentence.lastIndexOf("'")>0){  collectSentence += ",";}
			collectSentence += "'"+qxdj2+"'";
		}
		
		if (qxdj3!=null) 
		{
			if (collectSentence.lastIndexOf("'")>0)  {collectSentence += ",";}
			
			collectSentence += "'"+qxdj3+"'";
		}
		
		whereclause_defect += " trim(qxdj) in (" +collectSentence+") " ;	
	}
	
		
	
	System.out.println("whereclause_defect:"+whereclause_defect);
	session.setAttribute("whereclause_defect",whereclause_defect);    
    
    
    out.print("{success:true,msg:'²éÑ¯³É¹¦'}");
} 
catch(Exception ex) {

}


%>
