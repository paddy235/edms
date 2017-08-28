<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>
 
<html>
  	<head>

    	<title>调度命令查询</title>
    
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">   
	
	
		<!-- ExtJS所用 -->	
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-all.css" />
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-patch.css" />
		
		<!-- 时间控件 所用 -->
        <script type="text/javascript" src="../../My97DatePicker/WdatePicker.js"></script>
		
		
    	<!-- GC -->
 		<!-- LIBS -->
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-base.js"></script>
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-all-debug.js"></script>
 		<!-- ENDLIBS -->
    	<script type="text/javascript" src="../../extjs-3.0/ext-all.js"></script>
    	<script type="text/javascript" src="../../extjs-3.0/src/locale/ext-lang-zh_CN.js"></script>
    	
    	<!-- ExtJS grid 所用 -->
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
       
.x-grid-record-red table{
   background: #E6D1E3;
}
.x-grid-record-yellow table{
   background: #F3FEC2;
}
.x-grid-record-green table{
   background: #92FCCC;
}
 
    </style><%
		String myURL="../../errorpage.jsp";
		String userDwid="";
		String userdj="";
		if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null)
		{
			response.sendRedirect(myURL);
		}
		else
		{
		    userDwid=session.getAttribute("userDwid").toString();
		    userdj=session.getAttribute("userdj").toString();
		}
   %>
   </head>
   
  	<body> 
  		 
  		  <input type="hidden" value="<%=userdj%>" id="userdj">
  	       <input type="hidden" id="userDwid" value="<%=userDwid %>"> 
         <script type="text/javascript" src="command_query.js"></script>   
        
          
	</body>
</html>
