<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String xlm = request.getParameter("xlm").toString();//线别
String adw = request.getParameter("adw").toString();//台
String ggdmc = request.getParameter("ggdmc").toString();//所属段
String taskunit = request.getParameter("taskunit").toString();//所听
String ksrq = request.getParameter("ksrq").toString();
String jsrq = request.getParameter("jsrq").toString();

System.out.println("***********************************"+xlm);
System.out.println("***********************************"+adw);
System.out.println("***********************************"+ggdmc);
System.out.println("oooooooooootaskunit"+taskunit);

try {
	
	String whereclause_remotefault="";
	
	if ((xlm.trim()!=""))
	{
		whereclause_remotefault += " xlm='"+xlm+"' ";	
	}
	if ((adw.trim()!=""))
	{
		whereclause_remotefault += " adw='"+adw+"' ";	
	}
	if ((ggdmc.trim()!=""))
	{
		whereclause_remotefault += " ggdmc='"+ggdmc+"' ";	
	}
	if ((taskunit.trim()!=""))
	{
		whereclause_remotefault += " xzjg='"+taskunit+"' ";	
	}
	
	if ((ksrq.trim()!=""))
	{
		if (whereclause_remotefault.indexOf("=")>0) whereclause_remotefault += " and ";
		
		whereclause_remotefault += " bgsj>=to_date('"+ksrq+"','YYYY-MM-DD') ";	
	}
	
	if ((jsrq.trim()!=""))
	{
		if (whereclause_remotefault.indexOf("=")>0) whereclause_remotefault += " and ";
		
		whereclause_remotefault += " bgsj<=to_date('"+jsrq+"','YYYY-MM-DD') ";	
	}
	
	
	System.out.println("whereclause_remotefault:"+whereclause_remotefault);
	session.setAttribute("whereclause_remotefault",whereclause_remotefault);    
    
    
    out.print("{success:true,msg:'查询成功'}");
} 
catch(Exception ex) {

}

%>
