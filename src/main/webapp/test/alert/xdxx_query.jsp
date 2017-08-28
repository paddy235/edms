<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%

String ddt = request.getParameter("ddt");
String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");
String education="";
try {
	if(ksrq!=null && !ksrq.equalsIgnoreCase("")){
		education=" and rk_date>=to_date('"+ksrq+"','yyyy-mm-dd')";		
	}
	if(jsrq!=null && !jsrq.equalsIgnoreCase("")){
		education=education+" and rk_date=<to_date('"+jsrq+"','yyyy-mm-dd')";		
	}
	if(ddt!=null && !ddt.equalsIgnoreCase("") && !ddt.equalsIgnoreCase("all")){
		education=education+" and ddt like '%"+ddt+"%'";		
	}
	session.setAttribute("xdxx_whereclause",education);    
    //out.println(json);
    System.out.println("education"+education);
     //out.println(json);
    out.print("{success:true,msg:'query success'}");
} 

catch(Exception ex) {
}
%>
