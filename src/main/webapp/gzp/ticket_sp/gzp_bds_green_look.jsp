<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%!
    
    private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } 
    
    private String convertTime(java.sql.Time value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("HH:mm");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    }
 %>
 <%!
 public String SetNull(String str)
{
  if(str==null)
  {
    return"";
  }
  else
  {
    return str;
  }
}
 
 
  %>
<%
	
	String id = request.getParameter("id");
	System.out.println("id=:" + id);
	 DbTrade db_connection=new DbTrade();
	 String sql="select * from z_yxgl_gzpbds_green where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 
	 //得到作业人员的数据
	 String sql_zyry="select * from z_yxgl_zyry where ryb='bds_green' and gzpid="+id;
	 ResultSet resultSet1=db_connection.executeQuery(sql_zyry);
	 List mcList=new ArrayList();
	 List jbList=new ArrayList();
	 try{
	
	   while(resultSet1.next())
	   {
	     mcList.add(resultSet1.getString("rymc").toString());
	     jbList.add(resultSet1.getString("rydj").toString());
	   }
	   System.out.println("rrrrrrr"+mcList.size());
	   int j=mcList.size();
	   for(int i=1;i<(26-j);i++)
	   {
	     mcList.add("");
	     jbList.add("");
	   }
	   //System.out.println("afsdfasdfasdfasdf  "+mcList.get(0).toString()+"   j:"+jbList.get(0).toString());
	      
	 }catch(Exception ex) {
	 
	 }
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>


		<title>My JSP 'operationPlan_Electric.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="/edms/yxgl/ticket/css/Calendar.js" type="text/javascript"></script>
		<link rel="stylesheet" href="/edms/yxgl/ticket/css/BdsgzpGreen.css"
			type="text/css"></link>


		<script type="text/javascript">
		 function registerSubmit()
	     {//进行表单的非空验证
	       
	        
	           var gzph=document.getElementById("txtGZPH").value;
	           var ldr=document.getElementById("txtLDRXM").value;
	           
	            if(gzph=="")
	            {
	               //alert("NONO");gzphmesage  fprmesage fpsjmesage
	               document.getElementById("gzphmesage").style.display="block";
	            }
	            else if(ldr=="")
	            {
	            document.getElementById("ldrmessage").style.display="block";
	            }
	            else
	            {
	             document.getElementById("gzphmesage").style.display="none";
	             document.getElementById("ldrmessage").style.display="none";
	             document.Register.submit();
	            }
	        
	     }
		
		
		
		
		function allnum()
	     {
	       var zry=0;
	       var jb=0;
	       for(var i=1;i<26;i++)
	       {
	         var txtcy= document.getElementById("cy"+i+"_txtTitle").value;
	         var txtAQJB= document.getElementById("Aqdj"+i).value;
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	         if(txtAQJB!="")
	         {
	          jb=jb+1;
	         }
	       }
	       if(jb==zry)
	       {
	         document.getElementById("divmesg").style.display="none";
	       }
	       else
	       {
	        document.getElementById("divmesg").style.display="block";
	       }
	       document.getElementById("cyTotal").value=zry+1;
	     }
		</script>










	</head>

	<BODY scroll="yes">
		<form action="gzp_bds_greenSp.jsp" name="Register" method="post">
		   <%
	  
	      try{
	        while(resultSet.next())
	        {
	   %>
			<div>
				<DIV style="TEXT-ALIGN: center">
					<TABLE style="WIDTH: 100%">
						<TBODY>
							<TR>
								<TD style="COLOR: #000000; TEXT-ALIGN: left" colSpan=3></TD>
							</TR>
							<TR>
								<TD style="TEXT-ALIGN: left" colSpan=3>
									&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
									&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
									<STRONG>&nbsp; <SPAN style="FONT-SIZE: 14pt">&nbsp;第一种工作票</SPAN>
									</STRONG>
									<input type="hidden" name="jhid" value="<%=resultSet.getString("jhid")%>">
								</TD>
							</TR>
							<TR>
								<TD>
									<TABLE style="WIDTH: 100%">
										<TBODY>
											<TR>
												<TD align=left>
													<INPUT class=TextUnderCss id=inputBdsname
														style="WIDTH: 141px" readOnly value="<%=SetNull(resultSet.getString("dwmc")) %>" name=Bdsname>
													所（亭)
												</TD>
												<TD align=right>
													<SPAN id=gzphmesage
														style="DISPLAY: none; COLOR: red">工作票号不能为空！</SPAN>第&nbsp;
													<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 48px" value="<%=SetNull(resultSet.getString("gzph")) %>"
														name=txtGZPH>
													&nbsp;号
												</TD>
											</TR>
										</TBODY>
									</TABLE>
								</TD>
								<TD align=right colSpan=2></TD>
							</TR>
							<TR>
								<TD style="WIDTH: 525px; HEIGHT: 400px" vAlign=top>
									<TABLE class=tbl id=TABLE1 style="WIDTH: 525px; HEIGHT: 400px"
										cellSpacing=0 cellPadding=0 border=1>
										<TBODY>
											<TR>
												<TD style="WIDTH: 48px" align=middle>
													作业地点及内容
												</TD>
												<TD style="WIDTH: 375px; HEIGHT: 20px" align=left colSpan=5>
													<INPUT class=TextUnderCss name="txtZYDDNR"
														style="WIDTH: 440px; HEIGHT: 32px" value="<%=SetNull(resultSet.getString("zynr")) %>" >
													<SPAN id=RequiredFieldValidator4
														style="DISPLAY: none; COLOR: red">作业地点及内容不能为空！</SPAN>
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 48px; HEIGHT: 29px" align=middle>
													工作时间
												</TD>
												<TD style="WIDTH: 375px; HEIGHT: 29px" align=left colSpan=5>
													自
													<INPUT class=TextUnderCss id=inputGZSJQ
														onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("ksyxsj"))+" "+convertTime(resultSet.getTime("ksyxsj"))%>" name=txtGZSJQ>
													至
													<INPUT class=TextUnderCss id=inputGZSJZ
														onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("jsyxsj"))+" "+convertTime(resultSet.getTime("jsyxsj"))%>" name=txtGZSJZ>
													止
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 48px; HEIGHT: 39px" align=middle>
													工作领导人
												</TD>
												<TD style="WIDTH: 375px; HEIGHT: 39px" align=left colSpan=5>
													姓名:
													<INPUT class=TextUnderCss id=txtLDRXM
														style="WIDTH: 151px"  value="<%=SetNull(resultSet.getString("gzldr")) %>" name=LDRXM>
													<SPAN id=ldrmessage
														style="DISPLAY: none; COLOR: red">工作领导人不能为空！</SPAN> 安全等级:
													<INPUT class=TextUnderCss id=inputLDRJB value="<%=SetNull(resultSet.getString("ldrdj")) %>" maxLength=1 size=4
														name=LDRJB>
													<SPAN id=RequiredFieldValidator3
														style="DISPLAY: none; COLOR: red">安全等级不能为空！</SPAN>
													<SPAN id=RegularExpressionValidator1
														style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN>
													<SPAN id=CompareValidator1
														style="DISPLAY: none; COLOR: red">领导人等级要求至少为3！</SPAN>
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 48px" align=middle rowSpan=6>
													作业组成员姓名及安全等级
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy1_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(0).toString() %>" name=cy1>
													(
													<INPUT class=TextUnderCss id=Aqdj1 style="WIDTH: 13px"
														maxLength=1 onblur="allnum()" value="<%=jbList.get(0).toString() %>" name=Aqdj1>
													)

												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy2_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(1).toString() %>" name=cy2>
													(
													<INPUT class=TextUnderCss id=Aqdj2 style="WIDTH: 13px"
														onblur="allnum()" maxLength=1 value="<%=jbList.get(1).toString() %>" name=Aqdj2>
													)

												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy3_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(2).toString() %>" name=cy3>
													(
													<INPUT class=TextUnderCss id=Aqdj3 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(2).toString() %>"
														maxLength=1 name=Aqdj3>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy4_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(3).toString() %>" name=cy4>
													(
													<INPUT class=TextUnderCss id=Aqdj4 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(3).toString() %>"
														maxLength=1 name=Aqdj4>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy5_txtTitle onblur="allnum()" value="<%=mcList.get(4).toString() %>"
														style="WIDTH: 43px" name=cy5>
													(
													<INPUT class=TextUnderCss id=Aqdj5 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(4).toString() %>"
														maxLength=1 name=Aqdj5>
													)
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy6_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(5).toString() %>" name=cy6>
													(
													<INPUT class=TextUnderCss id=Aqdj6 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(5).toString() %>"
														maxLength=1 name=Aqdj6>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy7_txtTitle onblur="allnum()" value="<%=mcList.get(6).toString() %>"
														style="WIDTH: 43px" name=cy7>
													(
													<INPUT class=TextUnderCss id=Aqdj7 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(6).toString() %>"
														maxLength=1 name=Aqdj7>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy8_txtTitle onblur="allnum()" value="<%=mcList.get(7).toString() %>"
														style="WIDTH: 43px" name=cy8>
													(
													<INPUT class=TextUnderCss id=Aqdj8 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(7).toString() %>"
														maxLength=1 name=Aqdj8>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy9_txtTitle onblur="allnum()" value="<%=mcList.get(8).toString() %>"
														style="WIDTH: 43px" name=cy9>
													(
													<INPUT class=TextUnderCss id=Aqdj9 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(8).toString() %>"
														maxLength=1 name=Aqdj9>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy10_txtTitle onblur="allnum()" value="<%=mcList.get(9).toString() %>"
														style="WIDTH: 43px" name=cy10>
													(
													<INPUT class=TextUnderCss id=Aqdj10 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(9).toString() %>"
														maxLength=1 name=Aqdj10>
													)
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy11_txtTitle onblur="allnum()" value="<%=mcList.get(10).toString() %>"
														style="WIDTH: 43px" name=cy11>
													(
													<INPUT class=TextUnderCss id=Aqdj11 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(10).toString() %>"
														maxLength=1 name=Aqdj11>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy12_txtTitle onblur="allnum()" value="<%=mcList.get(11).toString() %>"
														style="WIDTH: 43px" name=cy12>
													(
													<INPUT class=TextUnderCss id=Aqdj12 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(11).toString() %>"
														maxLength=1 name=Aqdj12>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy13_txtTitle onblur="allnum()" value="<%=mcList.get(12).toString() %>"
														style="WIDTH: 43px" name=cy13>
													(
													<INPUT class=TextUnderCss id=Aqdj13 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(12).toString() %>"
														maxLength=1 name=Aqdj13>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy14_txtTitle onblur="allnum()" value="<%=mcList.get(13).toString() %>"
														style="WIDTH: 43px" name=cy14>
													(
													<INPUT class=TextUnderCss id=Aqdj14 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(13).toString() %>"
														maxLength=1 name=Aqdj14>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy15_txtTitle onblur="allnum()" value="<%=mcList.get(14).toString() %>"
														style="WIDTH: 43px" name=cy15>
													(
													<INPUT class=TextUnderCss id=Aqdj15 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(14).toString() %>"
														maxLength=1 name=Aqdj15>
													)
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy16_txtTitle onblur="allnum()" value="<%=mcList.get(15).toString() %>"
														style="WIDTH: 43px" name=cy16>
													(
													<INPUT class=TextUnderCss id=Aqdj16 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(15).toString() %>"
														maxLength=1 name=Aqdj16>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy17_txtTitle onblur="allnum()" value="<%=mcList.get(16).toString() %>"
														style="WIDTH: 43px" name=cy17>
													(
													<INPUT class=TextUnderCss id=Aqdj17 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(16).toString() %>"
														maxLength=1 name=Aqdj17>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy18_txtTitle onblur="allnum()" value="<%=mcList.get(17).toString() %>"
														style="WIDTH: 43px" name=cy18>
													(
													<INPUT class=TextUnderCss id=Aqdj18 onblur="allnum()" style="WIDTH: 13px"
														maxLength=1 name=Aqdj18>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy19_txtTitle onblur="allnum()" value="<%=mcList.get(18).toString() %>"
														style="WIDTH: 43px" name=cy19>
													(
													<INPUT class=TextUnderCss id=Aqdj19 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(18).toString() %>"
														maxLength=1 name=Aqdj19>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy20_txtTitle onblur="allnum()" value="<%=mcList.get(19).toString() %>"
														style="WIDTH: 43px" name=cy20>
													(
													<INPUT class=TextUnderCss id=Aqdj20 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(19).toString() %>"
														maxLength=1 name=Aqdj20>
													)
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy21_txtTitle onblur="allnum()" value="<%=mcList.get(20).toString() %>"
														style="WIDTH: 43px" name=cy21>
													(
													<INPUT class=TextUnderCss id=Aqdj21 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(20).toString() %>"
														maxLength=1 name=Aqdj21>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy22_txtTitle onblur="allnum()" value="<%=mcList.get(21).toString() %>"
														style="WIDTH: 43px" name=cy22>
													(
													<INPUT class=TextUnderCss id=Aqdj22 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(21).toString() %>"
														maxLength=1 name=Aqdj22>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy23_txtTitle onblur="allnum()" value="<%=mcList.get(22).toString() %>"
														style="WIDTH: 43px" name=cy23>
													(
													<INPUT class=TextUnderCss id=Aqdj23 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(22).toString() %>"
														maxLength=1 name=Aqdj23>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy24_txtTitle onblur="allnum()" value="<%=mcList.get(23).toString() %>"
														style="WIDTH: 43px" name=cy24>
													(
													<INPUT class=TextUnderCss id=Aqdj24 onblur="allnum()" style="WIDTH: 13px" value="<%=jbList.get(23).toString() %>"
														maxLength=1 name=Aqdj24>
													)
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy25_txtTitle onblur="allnum()" value="<%=mcList.get(24).toString() %>"
														style="WIDTH: 43px" name=cy25>
													(
													<INPUT class=TextUnderCss id=Aqdj25 style="WIDTH: 13px" onblur="allnum()" value="<%=jbList.get(24).toString() %>"
														maxLength=1 name=Aqdj25>
													)
												</TD>
											</TR>
											<TR>
												<TD colSpan=4>
													安全检查员：
													<INPUT class=TextUnderCss id=AQJCY_txtTitle value="<%=SetNull(resultSet.getString("aqjcy")) %>"
														style="WIDTH: 151px" name=txtAQJCY>
													<SPAN id=AQJCY_dlshow
														style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
															id=AQJCY_DDLTitle onblur=hiddeDl(this)
															style="WIDTH: 151px" name=AQJCY$DDLTitle>
															<OPTION value=0 selected>
																请选择人员
															</OPTION>
														</SELECT> </SPAN><SPAN id=AQJCY_RequiredFieldValidator1
														style="DISPLAY: none; COLOR: red">安全检查员不能为空！</SPAN>
												</TD>
												<TD style="WIDTH: 100px" align=right>
													共计
													<INPUT class=TextUnderCss id=cyTotal maxLength=100 size=2 value=" <%=SetNull(resultSet.getString("cgrs")) %>"
														name=cyTotal>
													人
													<div style="display: none; color: red;" id="divmesg">
														安全等级不能为空！
													</div>
												</TD>
											</TR>
											<TR>
												<TD style="HEIGHT: 327px" vAlign=top colSpan=4>
													<DIV style="TEXT-ALIGN: left">
														<TABLE style="WIDTH: 100%" class=tbl>
															<TBODY>
																<TR>
																	<TD align=middle>
																		必须采取的安全措施
																		<BR>
																		<BR>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		1、断开的断路器和隔离开关:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 58px">
																		<TEXTAREA id=txtDKGH
																			style="WIDTH: 276px; HEIGHT: 51px" name=txtDKGH> <%=SetNull(resultSet.getString("cq_dlqhkg")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 10px">
																		2、安装接地线的位置:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 30px">
																		<TEXTAREA id=txtJDXWZ
																			style="WIDTH: 277px; HEIGHT: 50px" name=txtJDXWZ> <%=SetNull(resultSet.getString("cq_jdxwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		3、装设防护栅、悬挂标示牌的位置
																	</TD>
																</TR>
																<TR>
																	<TD>
																		<TEXTAREA id=txtZBH style="WIDTH: 277px; HEIGHT: 48px"
																			name=txtBSPWZ> <%=SetNull(resultSet.getString("cq_bspwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		4、注意作业地点附近有电的设备是:
																	</TD>
																</TR>
																<TR>
																	<TD>
																		<BR>
																		<TEXTAREA lang=100 id=inputZDDSB
																			style="WIDTH: 280px; HEIGHT: 67px" name=txtDDSB
																			type="text" size="43"><%=SetNull(resultSet.getString("cq_ydsb")) %></TEXTAREA>
																	</TD>
																</TR>
															</TBODY>
														</TABLE>
													</DIV>
												</TD>
												<TD style="HEIGHT: 327px" vAlign=top colSpan=2>
													<DIV style="TEXT-ALIGN: left">
														<TABLE style="WIDTH: 100%" class=tbl>
															<TBODY>
																<TR>
																	<TD align=middle>
																		已经完成的安全措施
																		<BR>
																		<BR>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		1、已经断开的断路器和隔离开关:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 58px">
																		<TEXTAREA id=txtYDKGH
																			style="WIDTH: 150px; HEIGHT: 51px" name=txtYDKGH> <%=SetNull(resultSet.getString("wc_dlqhkg")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		2、接地线装设的位置及其号码:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 30px">
																		<TEXTAREA id=txtYJDXWZ
																			style="WIDTH: 150px; HEIGHT: 50px" name=txtYJDXWZ><%=SetNull(resultSet.getString("wc_jdxwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		3、防护栅、标示牌装设的位置:
																	</TD>
																</TR>
																<TR>
																	<TD>
																		<TEXTAREA id=txtYZBH
																			style="WIDTH: 150px; HEIGHT: 48px" name=txtYBSPWZ><%=SetNull(resultSet.getString("wc_bspwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		4、注意作业地点附近有电的设备是:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 38px">
																		<TEXTAREA lang=100 id=inputYZDDSB style="HEIGHT: 65px"
																			name=txtYDDSB type="text" size="22"><%=SetNull(resultSet.getString("wc_ydsb")) %></TEXTAREA>
																	</TD>
																</TR>
															</TBODY>
														</TABLE>
													</DIV>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
								</TD>
								<TD style="WIDTH: 10px" vAlign=top></TD>
								<TD style="WIDTH: 475px; HEIGHT: 300px" vAlign=top>
									<TABLE class=tbl style="WIDTH: 475px; HEIGHT: 400px"
										cellSpacing=0 cellPadding=0 border=1>
										<TBODY>
											<TR>
												<TD vAlign=top align=left>
													5、其它安全措施:
													<BR>
													<TEXTAREA lang=200 id=inputAQCS
														style="WIDTH: 260px; HEIGHT: 227px" name=txtAQCS
														type="text" size="35"><%=SetNull(resultSet.getString("cq_qtaqcs")) %></TEXTAREA>
												</TD>
												<TD style="WIDTH: 239px; HEIGHT: 200px" vAlign=top
													align=left>
													5、其它安全措施:
													<BR>
													<TEXTAREA lang=200 id=intputYZAQCS
														style="WIDTH: 260px; HEIGHT: 227px" name=txtYAQCS
														type="text" size="35"> <%=SetNull(resultSet.getString("wc_qtaqcs")) %></TEXTAREA>
													<BR>
												</TD>
											</TR>
											<TR>
												<TD colSpan=2>
													<TABLE style="WIDTH: 100%; HEIGHT: 320px" class=tbl>
														<TBODY>
															<TR>
																<TD align=left>
																	发票日期
																	<INPUT class=TextUnderCss2 id=txtFPRQ
																		onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("fpsj"))%>"
																		name=txtFPRQ>
																	&nbsp;&nbsp;
																</TD>
																<TD style="WIDTH: 40%" align=right>
																	发 票 人
																
																	<INPUT class=TextUnderCss2 id=txtFBR_txtTitle
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("fpr")) %>" name=txtFBR>
																	<SPAN id=txtFBR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red">发票人不能为空！</SPAN>
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	根据供电调度员的第
																	<INPUT class=TextUnderCss2 id=txtDDMLH
																		style="WIDTH: 60px" value="<%=SetNull(resultSet.getString("gjmlh")) %>" name=txtDDMLH>
																	号命令准予在
																	<INPUT class=TextUnderCss2 id=txtGZS
																		onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("zygzsj"))+" "+convertTime(resultSet.getTime("zygzsj"))%>" name=txtZYKSSJ>
																	开始工作要
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 60%; HEIGHT: 16px" align=left>
																	求在
																	<INPUT class=TextUnderCss2 id=txtGZZ
																		onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("qygzsj"))+" "+convertTime(resultSet.getTime("qygzsj"))%>"  name=txtZYJSSJ>
																	结束工作。
																</TD>
																<TD style="WIDTH: 40%; HEIGHT: 16px" align=right>
																	值&nbsp; 班&nbsp; 员
																	<INPUT class=TextUnderCss2 id=txtZBY_txtTitle
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("zyzbyqz")) %>" name=txtZYZBYQZ>
																	<SPAN id=txtZBY_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 23px" align=left colSpan=2>
																	经检查安全措施已做好,并于
																	<INPUT class=TextUnderCss2 id=txtGZZXSJ
																		onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("ksgzsj"))+" "+convertTime(resultSet.getTime("ksgzsj"))%>"  name=txtKSGZSJ>
																	开始工作。
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2>
																	工作领导人
																	<INPUT class=TextUnderCss2 id=txtGZLDR_txtTitle value="<%=SetNull(resultSet.getString("ksgzldrqz")) %>"
																		style="WIDTH: 74px"
																		 name=txtKSGZLDRQZ>
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 5px" align=left colSpan=2>
																	变更作业组成员记录
																	<INPUT class=TextUnderCss2 id=txtBGJL
																		style="WIDTH: 320px" maxLength=50 value="<%=SetNull(resultSet.getString("zyrybgjl")) %>" name=txtBGJL>
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2 rowSpan=2>
																	发&nbsp; 票&nbsp; 人
																	
																	<INPUT class=TextUnderCss2 id=txtBGFPR_txtTitle value="<%=SetNull(resultSet.getString("rybgfqrqz")) %>"
																		style="WIDTH: 74px" name=txtBGFPRQZ>
																	<SPAN id=txtBGFPR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			class=grayinput id=txtBGFPR_DDLTitle
																			onblur=hiddeDl(this) style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtBGFPR$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtBGFPR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																	<BR>
																	<BR>
																	工作领导人
																	<INPUT class=TextUnderCss2 id=txtBGLDR_txtTitle value="<%=SetNull(resultSet.getString("rybgldrqz")) %>"
																		style="WIDTH: 74px" name=txtBGLDRQZ>
																	<SPAN id=txtBGLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtBGLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtBGLDR$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtBGLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR></TR>
															<TR>
																<TD style="HEIGHT: 23px" align=left colSpan=2>
																	经供电调度员
																	<INPUT class=TextUnderCss2 id=txtYCTY_txtTitle
																		style="WIDTH: 50px" onclick=showDl(this) value="<%=SetNull(resultSet.getString("ddyxm")) %>"
																		name=txtGDDDY>
																	<SPAN id=txtYCTY_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtYCTY_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 50px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtYCTY$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN>同意,工作票有效期延长到
																	<INPUT class=TextUnderCss2 id=inputYCSJZ value="<%=convertDate(resultSet.getDate("ycdsj"))+" "+convertTime(resultSet.getTime("ycdsj")) %>"
																		onclick="showcalendar(this,true)" name=txtYCSJ>
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 25px" align=right colSpan=2 rowSpan=2>
																	值&nbsp; 班&nbsp; 员
																	<INPUT class=TextUnderCss2 id=txtYCZBY_txtTitle value="<%=SetNull(resultSet.getString("yczbyqz")) %>"
																		style="WIDTH: 74px" name=txtYCZBYQZ>
																	<SPAN id=txtYCZBY_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtYCZBY_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtYCZBY$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtYCZBY_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																	<BR>
																	<BR>
																	工作领导人
																	<INPUT class=TextUnderCss2 id=txtYCLDR_txtTitle value="<%=SetNull(resultSet.getString("ycgzldrqz")) %>"
																		style="WIDTH: 74px" name=txtYCLDRQZ>
																	<SPAN id=txtYCLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtYCLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtYCLDR$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtYCLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR></TR>
															<TR>
																<TD style="HEIGHT: 16px" align=left colSpan=2>
																	工作已于
																	<INPUT class=TextUnderCss2 id=txtJSSJ value="<%=convertDate(resultSet.getDate("wcsj"))+" "+convertTime(resultSet.getTime("wcsj")) %>"
																		onclick="showcalendar(this,true)" name=txtJSSJ>
																	<SPAN id=CompareValidator29
																		style="VISIBILITY: hidden; COLOR: red">时间有误</SPAN>
																	<SPAN id=CompareValidator30
																		style="VISIBILITY: hidden; COLOR: red">时间有误</SPAN>
																	全部结束。
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2>
																	工作领导人
																	<INPUT class=TextUnderCss2 id=txtJSLDR_txtTitle value="<%=SetNull(resultSet.getString("wcgzldrqz")) %>"
																		style="WIDTH: 74px" name=txtJSLDRQZ>
																	<SPAN id=txtJSLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtJSLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtJSLDR$DDLTitle>
																			<OPTION value=0 selected>
																				请选择人员
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtJSLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	接地线共
																	<INPUT class=TextUnderCss2 id=txtCDX value="<%=SetNull(resultSet.getString("jdxzs")) %>"
																		style="WIDTH: 20px" name=txtJDXZ>
																	组
																	<INPUT class=TextUnderCss2 id=JG style="WIDTH: 20px" value="<%=SetNull(resultSet.getString("jdxgs")) %>"
																		name=txtJDXG>
																	根和临时防护栅及标示牌已拆除,并恢复了常设防护栅和标示牌,工作票于
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	<INPUT class=TextUnderCss2 id=txtCDXSJ value="<%=convertDate(resultSet.getDate("jssj"))+" "+convertTime(resultSet.getTime("jssj")) %>"
																		onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																	<SPAN id=CompareValidator31
																		style="VISIBILITY: hidden; COLOR: red">时间有误</SPAN>
																	<SPAN id=CompareValidator32
																		style="VISIBILITY: hidden; COLOR: red">时间有误</SPAN> 结束。
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 25px" align=right colSpan=2>
																	值&nbsp; 班 &nbsp;员
																	<INPUT class=TextUnderCss2 id=txtCDXZBY_txtTitle value="<%=SetNull(resultSet.getString("zbrqz")) %>"
																		style="WIDTH: 74px" name=txtZBYQZ_E>
																</TD>
															</TR>
														</TBODY>
													</TABLE>
												</TD>
											</TR>
											<TR></TR>
										</TBODY>
									</TABLE>
								</TD>
							</TR>
							<tr>
								<td align="right">

									<input type="hidden" value="<%=id%>" name="gzpid" />
                                   <input type="hidden" value="<%=SetNull(resultSet.getString("dwid"))%>" name="dwid" />

									<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="通过" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="返回" name=btnFB>
								</td>
							<tr>
						</TBODY>
					</TABLE>
				</DIV>
			</div>
																<%}
	      }catch(Exception ex) {
} %>
		</form>
	</BODY>
</html>
