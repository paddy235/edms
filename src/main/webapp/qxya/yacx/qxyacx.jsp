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
    <script type="text/javascript" src="../../My97DatePicker/WdatePicker.js"></script>
     	
   
  <body>
     <script type="text/javascript" src="../../extjs-3.0/examples/shared/examples.js"></script>
      <!-- 案例归档所用Css、Js -->	
      <script type="text/javascript" src="qxyacx.js"></script>  
      <img id="custom"  width="600" height="800"  src="" style="position:absolute;left:0;top:0;"/>
       	<input type="hidden" id="DWJB" value="<%= session.getAttribute("DWJB")==null?"": session.getAttribute("DWJB")%>">
  </body>
</html>
