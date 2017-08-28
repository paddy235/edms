<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>
<%@page import="mor.commons.db.DbTrade"%>


<html>
  	<head>

    	<title>My JSP 'taskplan_apply' starting page</title>
    
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
            background-image:url(../../extjs-3.0/examples/shared/icons/fam/grid.png) !important;
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
    	<%
    	 String myURL="../../errorpage.jsp";
            
    	String jhid=request.getParameter("jhid");
    	System.out.println("command_jhid:"+jhid);
    	String ddtdm ="";
    	String userDwid="";
    	String username="";
    	if(session.getAttribute("ddtdm")!=null&&session.getAttribute("userDwid")!=null)
    	{
    	ddtdm=session.getAttribute("ddtdm").toString();
    	userDwid=session.getAttribute("userDwid").toString();
    	}	
   	   else
   	   {
   	      response.sendRedirect(myURL);
   	   }

        %>
   	
   </head>
  
  	<body>
  
  	 <inpput type="hidden" value="<%=ddtdm %>" id="ddtdm">
  	 <inpput type="hidden" value="<%=userDwid %>" id="userDwid">
  	     <input type="hidden" name="jhid" value=<%=jhid%>>
         <script type="text/javascript" src="command.js"></script>   
        
          
	</body>
</html>
