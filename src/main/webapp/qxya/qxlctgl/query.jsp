<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>


<%
String gjz = (String)request.getParameter("gjz");
String zy = (String)request.getParameter("zy");
String gzlb = (String)request.getParameter("gzlb");
String whereclause ="";
	
if((gjz == "") && (zy == "") && (gzlb == "")){
        whereclause="";
}else{
       if(gjz!=""){
          whereclause="YANR like '%" + gjz +"%'";    
	       if(zy!=""){
	         whereclause +=" and ZY = " + "'" +zy + "'";  
	         if(gzlb != ""){
	            whereclause += " and GZLB = " + "'" +gzlb + "'";
	         }
	       }else{	         
	         if(gzlb != ""){
	         	whereclause += " and GZLB = " + "'" +gzlb + "'";       
	         }
	       }
	   }else{
	       if(zy != ""){	       
	         whereclause="ZY ='" + zy +"'";
	         if(gzlb != ""){
	            whereclause +=  " and GZLB = " + "'" +gzlb + "'";
	         }
	       }else{
		       if(gzlb != ""){
		          whereclause =  "GZLB = " + "'" +gzlb + "'";
		       }
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
