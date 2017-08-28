<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>

<html>
  	<head>

    	<title>My JSP 'taskplan_apply' starting page</title>
    
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">   
	
	
		<!-- ExtJS所用 -->	
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-all.css" />
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-patch.css" />
		
		
		
    	<!-- GC -->
 		<!-- LIBS -->
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-base.js"></script>
 		<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-all-debug.js"></script>
 		<!-- ENDLIBS -->
    	<script type="text/javascript" src="../../extjs-3.0/ext-all.js"></script>
    	<script type="text/javascript" src="../../extjs-3.0/src/locale/ext-lang-zh_CN.js"></script>
    	 <!-- 时间控件 所用 -->
        <script type="text/javascript" src="../../My97DatePicker/WdatePicker.js"></script>
    	
    	
    	
    	<!-- ExtJS grid 所用 -->
		<script type="text/javascript" src="../../extjs-3.0/examples/ux/RowExpander.js"></script>
      	<link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/grid/grid-examples.css" />

    	<!-- Common Styles for the examples -->
    	<link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/shared/examples.css" />
	    
	    <!-- date 所用 -->
	    <script type="text/javascript" src="../../date/CalendarDate.js"></script>
	    <link rel="stylesheet" type="text/css" href="../../date/dateshow.css" />
	    <link rel="stylesheet" type="text/css" href="../../date/calendar-skin.css" />
	    
	    
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
	<style type="text/css">
		.x-panel-body p {
		margin: 10px;
		font-size: 12px;
		}
 	</style>

	</head>
  <%
  	String myURL="../../errorpage.jsp";
    String ddtdm="";
    String ddtmc="";
    String username="";
    String userDwid="";
	if(session.getAttribute("userName")!=null&&session.getAttribute("userDwid")!=null&&session.getAttribute("ddtdm")!=null&&session.getAttribute("ddtmc")!=null)
	{
	 username=session.getAttribute("userName").toString();
     userDwid=session.getAttribute("userDwid").toString();
    
     ddtdm=session.getAttribute("ddtdm").toString();
     ddtmc=session.getAttribute("ddtmc").toString();
	}
	else
	{
	response.sendRedirect(myURL);
	
	}


   %>
  	<body >
     <input type="hidden" value="<%=userDwid %>" id="userDwid">
     <input type="hidden" value="<%=ddtdm %>" id="ddtdm">
	 <input type="hidden" value="<%=username %>" id="userName">
  	 <script type="text/javascript" src="zyjhxdsp.js"></script>   
        
        
          
	</body>
</html>
