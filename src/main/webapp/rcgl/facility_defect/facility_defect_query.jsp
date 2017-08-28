<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>

<%

//String sbmc = request.getParameter("sbmc").toString();
System.out.println("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
String dwid=request.getParameter("dwid");
String kssj = request.getParameter("kssj");
String jssj = request.getParameter("jssj");
String qxdj1 = request.getParameter("qxdj1");
String qxdj2 = request.getParameter("qxdj2");
String qxdj3 = request.getParameter("qxdj3");


System.out.println("dwid"+dwid);
System.out.println("qxdj1"+qxdj1);
System.out.println("qxdj2"+qxdj2);
System.out.println("qxdj3"+qxdj3);


try {
	
	String whereclause_defect="";
	
	if ((dwid.trim()!=""))
	{
		whereclause_defect += " dwid='"+dwid+"' ";	
	}
	
	
	if ((kssj.trim()!="")&&jssj.trim()!="")
	{
		if (whereclause_defect.indexOf("=")>0) whereclause_defect += " and ";
		
		whereclause_defect += " fxsj>to_date('"+kssj+"','YYYY-MM-DD hh24:mi') and fxsj<to_date('"+jssj+"','YYYY-MM-DD hh24:mi') ";	
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
