<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String gjz = (String)request.getParameter("gjz");
String zy = (String)request.getParameter("zy");
String gzlb = (String)request.getParameter("gzlb");
String whereclause ="";

if(gjz == ""){
    whereclause="";    
}else{
    whereclause="yanr like '%"+ gjz + "%'";
}


if(zy == ""){    
}else{
   if(zy.equals("ALL")){
   
   }else{
	   if(whereclause==""){
	      whereclause="zy=" + "'" + zy + "'";
	   }else{
	      whereclause +=" and zy=" + "'" + zy + "'";
	   }
   }	   
}


	
if(gzlb == ""){    
}else{ 
    if(gzlb.equals("ALL")){
	   
	}else{	 
	   if(whereclause==""){
	      whereclause="gzlb='" + gzlb + "'";
	   }else{
	      whereclause +=" and gzlb='" +gzlb + "'";
	   }
	}   
}	


try {
	session.setAttribute("whereclause",whereclause);    
    //out.println(json);
    
      out.print("{success:true,msg:'"+ zy+ "'}");
} 

catch(Exception ex) {
}
%>
