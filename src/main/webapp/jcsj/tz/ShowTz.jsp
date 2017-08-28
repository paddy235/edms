<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>  
  <%  String name = request.getParameter("id") ;
  		System.out.print(name+"lllllll"); 
  %>
 		
  		<script type="text/javascript">
 		function load()
 		{
 			window.status="<%=name%>"
 		}
 		</script>
    <title>м╪ж╫пео╒</title>
  </head>
 
 
  <body onload="load()">
         
  </body>
</html>
