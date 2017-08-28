<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>

<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>


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
    	//request.setCharacterEncoding("GBK");
		//response.setContentType("text/html;charset=GBK");
    	String jhid=request.getParameter("myid");
    	String jhlx=request.getParameter("jhtype");
    	String dwid=session.getAttribute("DWDM").toString();
    	//dwlb:是判断网工区还是变电所的，以后还要加代码默认0：网工区
    	
    	//dwlb:是判断网工区还是变电所的，以后还要加代码默认0：网工区
         String myURL="../../../errorpage.jsp";
if(session.getAttribute("userDwid")==null)
{
System.out.println("IOIOIOIOIOIOIOI");
	response.sendRedirect(myURL);
}
        DbTrade dbconnction=new DbTrade();
        String gqid=session.getAttribute("userDwid").toString();
        String sql_gq="select * from J_GYJC_GQZD where gqdm='"+gqid+"'";
        System.out.println("///////:"+sql_gq);
        java.sql.ResultSet relust=dbconnction.executeQuery(sql_gq);
        String dwlb="";
        String gqmc="";
        while(relust.next())
        {
          dwlb=relust.getString("jglbdm");
          gqmc=relust.getString("gqmc");
        }
        dbconnction.close();
    	System.out.println("Myid:"+dwlb+"jhtype"+jhlx);
    	System.out.println("gqmcCS:"+gqmc);
        if(gqmc==null||gqmc=="")
        {
           gqmc="测试工区名称";
        }
    	//session.setAttribute("myid",jhid);
    	session.setAttribute("dwlb",dwlb);
    	session.setAttribute("gqmc",gqmc);
    	 %>
   	
   </head>
  
  	<body>
  		 
  		  
  	       <input type="hidden" name="jhid" id="jhid" value="<%=jhid%>" >
  	       <input type="hidden" name="jhlx" id="jhlb" value="<%=jhlx%>">
  	        <input type="hidden" name="dwlb" id="dwlb" value="<%=dwlb%>">
  	         <input type="hidden" name="dwlb" id="gqid" value="<%=gqid%>">
  	             <input type="hidden" value="<%=dwid %>" id="dwid">
         <script type="text/javascript" src="dzzysp.js"></script>   
        
          
	</body>
</html>
