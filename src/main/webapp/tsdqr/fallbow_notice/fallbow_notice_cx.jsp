<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>

<%@page import="mor.commons.db.DbTrade"%>

<html>
  	<head>    

    	<title>降弓</title>
    
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
    </style>
    	
   	   <%
		String myURL="../../errorpage.jsp";
		String userDwid="";
		if(session.getAttribute("DWDM")==null)
		{
			response.sendRedirect(myURL);
		}
		else
		{
		    userDwid=session.getAttribute("DWDM").toString();
		}
		String gzbh="";
		String dljcjgsj="";
		String maxmlh="";
		int num_mlh=0;
		String dwmc=session.getAttribute("DWMC").toString();
		 
		if(request.getParameter("GZBH")!=null&&request.getParameter("GZBH")!=""&&request.getParameter("dljcjgsj")!=""&&request.getParameter("dljcjgsj")!=null)
		{
		   gzbh=request.getParameter("GZBH");
	       dljcjgsj=request.getParameter("dljcjgsj");
		}
		
		//int sql_mlh=0;
		String QX="";
		String YHQX="";
		String isdd="";
		String userName="";
		java.util.Vector ROLE = (java.util.Vector)session.getAttribute("ROLE");
			for(int i=0;ROLE!=null&&i<ROLE.size();i++){
				QX=QX+ROLE.get(i)+",";
		}
	  
	   String [] ROLES=QX.split(",");
	   System.out.println("99999"+ROLES.length);
	     for(int i=0;i<ROLES.length;i++)
		{
		    YHQX=ROLES[i];
		    
			if(YHQX.equals("DDZ"))
			{
			    
				isdd="2";
			}
		}
		
        System.out.println("_+_+_+_+_+"+isdd);

		if(isdd.equals("2"))
		{
		
		}
		else
		{
 
		}
		   %>
   </head>

  	<body>
  	<input type="hidden" id="mlh" value="<%=num_mlh %>"> 
  		 <input type="hidden" id="gzbh" value="<%=gzbh %>"> 
  		  <input type="hidden" id="userName" value="<%=userName %>"> 
  		 <input type="hidden" id="dljcjgsj" value="<%=dljcjgsj %>"> 
  	     <input type="hidden" id="userDwid" value="<%=userDwid %>"> 
         <script type="text/javascript" src="fallbow_notice_cx.js"></script>   
        
          
	</body>
</html>
