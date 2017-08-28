<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>

<%

String sglxcx = request.getParameter("sglxcx")==""?"ALL":request.getParameter("sglxcx");;
String ksrq = request.getParameter("ksrq");
String jsrq = request.getParameter("jsrq");
String whereclause="";
try {
    
    if(sglxcx.equals("ALL"))
    {
    	whereclause= "fssj>=to_date('"+ksrq+"','yyyy-mm-dd hh24:mi:ss') and fssj<=to_date('"+jsrq+"','yyyy-mm-dd hh24:mi:ss')";
    }
    else
    {
    	whereclause= "sglx='"+sglxcx+"' and fssj>=to_date('"+ksrq+"','yyyy-mm-dd hh24:mi:ss') and fssj<=to_date('"+jsrq+"','yyyy-mm-dd hh24:mi:ss')";
	}
	session.setAttribute("whereclause",whereclause);    
    out.print("{success:true,msg:'²éÑ¯³É¹¦!'}");
    //System.out.println("whereclause:"+whereclause);
} 

catch(Exception ex) {
}
%>
