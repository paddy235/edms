<%@ page language="java" contentType="text/html; charset=GBK" pageEncoding="GBK" %>

<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<html>
  	<head>

    	<title>接班管理</title>
    
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
		String userName="";
		if(session.getAttribute("DWDM")==null||session.getAttribute("DWMC")==null)
		{
			response.sendRedirect(myURL);
		}
		else
		{
		    userDwid=session.getAttribute("DWDM").toString();
		    userName=session.getAttribute("YHMC").toString();
		}
		String QX="";
		String YHQX="";
		String isdd="";
		String sql_whr="";
		String qy_dl="";
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
		DbTrade db_connection=new DbTrade();
		SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
        Date nowDate =new Date();
        
		//电调长
		if(isdd.equals("2"))
		{
		  qy_dl="ddz";
		}//电调台，自动向数据库中自动插入数据
		else
		{
		  //判断是电力台还是牵引台  0：牵引  1：电力
		  String sql_qd="select * from j_gyjc_ddtzd where ddtdm='"+userDwid+"'";
		  System.out.println("判断是电力台还是牵引台  0：牵引  1：电力"+sql_qd);
		  java.sql.ResultSet resultset_qd=db_connection.executeQuery(sql_qd);
		  resultset_qd.next();
		   qy_dl=resultset_qd.getString("ddtcz");
		  resultset_qd.close();
		  System.out.println("判断是电力台还是牵引台  0：牵引  1：电力");
		  String sql_now="select count(*) a from z_yxgl_sbdbd where dddm='"+qy_dl+"' and to_char(jlsj, 'yyyy-mm-dd')='"+formater.format(nowDate)+"'";//查看当天的数据是否插入数据库
		  System.out.println(sql_now+"         iiiiiiiiiiiiiii");
		  java.sql.ResultSet resultset_now=db_connection.executeQuery(sql_now);
		  resultset_now.next();
		  String count=resultset_now.getString("A");
		  if(count.equals("0"))
		  {
		     String gdd="select * from j_gyjc_gddzd";
		     java.sql.ResultSet resultset_gdd=db_connection.executeQuery(gdd);
		     if(qy_dl.equals("0"))
		     {
		     while(resultset_gdd.next())
		     {  
		        
		          sql_whr=sql_whr+"insert into z_yxgl_sbdbd (bdid,dwid,fzr,zbrs,clqk,jlr,jlsj,bz,dddm) values (z_yxgl_sbdbdSquence.nextval,'"+resultset_gdd.getString(3)+"','','','良好','',to_date('"+formater.format(nowDate)+"','YYYY-MM-DD hh24:mi'),'','0');";
		          String sql_cj="select * from j_gyjc_cjzd where ddm='"+resultset_gdd.getString(1)+"'";
		          java.sql.ResultSet resultset_cj=db_connection.executeQuery(sql_cj);
		          while(resultset_cj.next())
		          {
		             sql_whr=sql_whr+"insert into z_yxgl_sbdbd (bdid,dwid,fzr,zbrs,clqk,jlr,jlsj,bz,dddm) values (z_yxgl_sbdbdSquence.nextval,'"+resultset_cj.getString(3)+"','','','良好','',to_date('"+formater.format(nowDate)+"','YYYY-MM-DD hh24:mi'),'','0');";
		             String sql_gq="select * from J_GYJC_GQZD where (jglbdm='1' or jglbdm='2') and cjdm='"+resultset_cj.getString(1)+"'";
		             java.sql.ResultSet resultset_gq=db_connection.executeQuery(sql_gq);
		             while(resultset_gq.next())
		             {
		                sql_whr=sql_whr+"insert into z_yxgl_sbdbd (bdid,dwid,fzr,zbrs,clqk,jlr,jlsj,bz,dddm) values (z_yxgl_sbdbdSquence.nextval,'"+resultset_gq.getString(3)+"','','','良好','',to_date('"+formater.format(nowDate)+"','YYYY-MM-DD hh24:mi'),'','0');";
		             }
		             resultset_gq.close();
		          }
		          resultset_cj.close();
		          
		        }
		     }
		      else
		      {
		             String sql_gq="select * from J_GYJC_GQZD where (jglbdm='7') ";
		             java.sql.ResultSet resultset_gq=db_connection.executeQuery(sql_gq);
		             while(resultset_gq.next())
		             {
		                sql_whr=sql_whr+"insert into z_yxgl_sbdbd (bdid,dwid,fzr,zbrs,clqk,jlr,jlsj,bz,dddm) values (z_yxgl_sbdbdSquence.nextval,'"+resultset_gq.getString(3)+"','','','良好','',to_date('"+formater.format(nowDate)+"','YYYY-MM-DD hh24:mi'),'','1');";
		             }
		             resultset_gq.close();
		      }
		     resultset_gdd.close();
		  sql_whr="Begin "+sql_whr+" End;";
          System.out.println("pcl:::::::"+sql_whr);
          db_connection.executeUpdate(sql_whr);
          db_connection.close();
		  }
		 
		  resultset_now.close();
		}
		 
   %>
   </head>
  
  	<body>
  		    <input type="hidden" id="qd" value="<%=qy_dl %>"> 
  		   <input type="hidden" id="userDwid" value="<%=userDwid %>"> 
  	       <input type="hidden" id="userName" value="<%=userName %>">
         <script type="text/javascript" src=sbdbd.js></script>   
        
          
	</body>
</html>
