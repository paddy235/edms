<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>
<html>
  <head>  
    <title>案例归档</title>
     <!-- ExtJS所用 -->	
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-all.css" />
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/ext-patch.css" />
		<link rel="stylesheet" type="text/css" href="../../extjs-3.0/resources/css/xtheme-gray.css" />
    
    <!-- GC -->
 	<!-- LIBS -->
 	<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-base.js"></script>
 	<script type="text/javascript" src="../../extjs-3.0/adapter/ext/ext-all-debug.js"></script>
 	<!-- ENDLIBS -->

    <script type="text/javascript" src="../../extjs-3.0/ext-all.js"></script>
    <script type="text/javascript" src="../../extjs-3.0/src/locale/ext-lang-zh_CN.js"></script>

    <!-- Tabs Example Files -->
    <link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/form/file-upload.css"/>
    <link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/form/combos.css" />
    <script type="text/javascript" src="../../extjs-3.0/examples/ux/FileUploadField.js"></script>
    
    <!-- ExtJS grid 所用 -->
		<script type="text/javascript" src="../../extjs-3.0/examples/ux/RowExpander.js"></script>
      	<link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/grid/grid-examples.css" />
    
    <script type="text/javascript" src="../../extjs-3.0/examples/form/states.js"></script>

    <!-- Common Styles for the examples -->
    <link rel="stylesheet" type="text/css" href="../../extjs-3.0/examples/shared/examples.css" />
     <style type="text/css">
        .upload-icon {
            background: url('../../extjs-3.0/examples/shared/icons/fam/image_add.png') no-repeat 0 0 !important;
        }
        #fi-button-msg {
            border: 2px solid #ccc;
            padding: 5px 10px;
            background: #eee;
            margin: 5px;
            float: left;
        }
        
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
  </head>
  <%
String myURL="../errorpage.jsp";
if(session.getAttribute("YHDM")==null){
	System.out.println("连接过期，请重新登录");
	response.sendRedirect(myURL);
}
%>
  <body>
     <script type="text/javascript" src="../../extjs-3.0/examples/shared/examples.js"></script>
      <!-- 案例归档所用Css、Js -->	
       <input type="hidden" id="dwjb" value="<%= (String)session.getAttribute("DWJB")==null?"": (String)session.getAttribute("DWJB")%>">
      <script type="text/javascript" src="sp.js"></script>  
      <img id="custom"  width="700" height="400"  src="" style="position:absolute;left:0;top:0;"/>
                 <div id="hello-win" class="x-hidden">
    	<div class="x-window-header">影音播放</div>
    	<div id="hello-tabs">
			<div style="position:absolute;left:0px;top:0px;z-index:20" >
				<p id=player><embed src=""></p>
			</div>
		</div>
	 </div>
  </body>
</html>
