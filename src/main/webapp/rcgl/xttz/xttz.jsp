<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>



<html>
  	<head>

    	<title>My JSP 'taskplan_apply' starting page</title>
    
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">   
	
	
		<!-- ExtJS???? -->	
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-all.css" />
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-patch.css" />
		
		
		
    	<!-- GC -->
 		<!-- LIBS -->
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-base.js"></script>
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-all-debug.js"></script>
 		<!-- ENDLIBS -->
    	<script type="text/javascript" src="../../extjs-3.0/ext-all.js"></script>
    	<script type="text/javascript" src="../../extjs-3.0/src/locale/ext-lang-zh_CN.js"></script>
    	
    	<!-- ExtJS grid ???? -->
		<script type="text/javascript" src="../../extjs-3.0/examples/ux/RowExpander.js"></script>
      	<link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/grid/grid-examples.css" />

    	<!-- Common Styles for the examples -->
    	<link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/shared/examples.css" />
				
		<style type="text/css">
        body .x-panel {
            margin-bottom:0px;
        }
        .icon-grid {
            background-image:url(../../../../extjs-3.0/examples/shared/icons/fam/grid.png) !important;
        }
        #button-grid .x-panel-body {
            border:1px solid #99bbe8;
            border-top:0 none;
        }
        .add {
            background-image:url(../../extjs-3.0/examples/shared/icons/fam/add.gif) !important;
        }
        .option {
            background-image:url(../../extjs-3.0/examples/shared/icons/fam/plugin.gif) !important;
        }
        .remove {
            background-image:url(../../extjs-3.0/examples/shared/icons/fam/delete.gif) !important;
        }
        .save {
            background-image:url(../../extjs-3.0/examples/shared/icons/save.gif) !important;
        }
    </style>
    	
   	<script type="text/javascript" src="../../My97DatePicker/WdatePicker.js"></script>
    
   </head>
  <%
//???ݾ???Ŀ¼???????޸?myURL??ֵ?????統ǰҳ???????й????£???myURL="../errorpage.jsp"
String myURL="../errorpage.jsp";
if(session.getAttribute("YHDM")==null){
	System.out.println("???ӹ??ڣ??????µ?¼");
	response.sendRedirect(myURL);
}
java.util.Vector ROLE = (java.util.Vector)session.getAttribute("ROLE");
String ddz="0";
for(int i=0;ROLE!=null&&i<ROLE.size();i++){
	if("DDZ".equalsIgnoreCase((String)ROLE.get(i))){
		ddz="1";
		break;
	}
}
%>  
<script language="JavaScript">
         
         var ddz='<%=ddz%>';
         
  </SCRIPT>
  	<body>
  	     <script type="text/javascript" src="xttz.js"></script>   
  	</body>
</html>
