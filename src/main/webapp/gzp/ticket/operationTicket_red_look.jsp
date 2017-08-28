<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%!
SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
public String gettime(Date timeDate)
{ System.out.println("value:"+timeDate);
  if(timeDate==null)
  {
    return "";
  }
  else
  {
    return dateFormat.format(timeDate).toString();
  }
}
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
    	System.out.println("value:"+value);
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
    } %>
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
	 String sql="select * from z_yxgl_gzpgq_red where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 
	 //得到作业人员的数据
	 String sql_zyry="select * from z_yxgl_zyry where ryb='gq_red' and gzpid="+id;
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
		

		<title>My JSP 'operationTicket_red.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link rel="stylesheet" href="css/GZP.css" type="text/css"></link>
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<link rel="stylesheet" href="css/BdsgzpRed.css"
			type="text/css"></link>
				     <script type="text/javascript">
	     function registerSubmit()
	     {//进行表单的非空验证
	       
	        
	           var gzph=document.getElementById("txtGZPH").value;
	           var fpr=document.getElementById("txtFPR").value;
	            var FPRQ=document.getElementById("txtFPRQ").value;
	          
	            if(gzph=="")
	            {
	               //alert("NONO");gzphmesage  fprmesage fpsjmesage
	               document.getElementById("gzphmesage").style.display="block";
	            }
	            else if(fpr=="")
	            {
	            document.getElementById("fprmesage").style.display="block";
	            }
	            else if(FPRQ=="")
	            {
	            document.getElementById("fpsjmesage").style.display="block";
	            }
	            else
	            {
	             document.getElementById("gzphmesage").style.display="none";
	             document.getElementById("fprmesage").style.display="none";
	             document.getElementById("fpsjmesage").style.display="none";
	             document.Register.submit();
	            }
	        
	     }
	     
	     function allnum()
	     {
	       var zry=0;
	       var jb=0;
	       for(var i=1;i<26;i++)
	       {
	         var txtcy= document.getElementById("txtCY"+i).value;
	         var txtAQJB= document.getElementById("txtAQJB"+i).value;
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
	       document.getElementById("txtzrs").value=zry+1;
	     }
	     </script>
	</head>
	<script src="css/Calendar.js" type="text/javascript"></script>
	<body scroll="yes">
	 <form action="gzp_gq_redUpdate.jsp" name="Register" method="post">
	   <%
	  
	      try{
	        while(resultSet.next())
	        {
	   %>
		<DIV style="WIDTH: 100%; TEXT-ALIGN: center">
			<TABLE>
				<TBODY>
					<TR>
						<TD>
							<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
								<TBODY>
									<TR>
										<TD class=tableHeadText style="HEIGHT: 21px" align=middle>
											<STRONG><SPAN style="FONT-SIZE: 14pt">供电线路间接带电作业工作票</SPAN><input type="hidden" name="jhid" value="<%=resultSet.getString("jhid")  %>">
											</STRONG>&nbsp;
										</TD>
									</TR>
									<TR>
										<TD align=middle></TD>
									</TR>
								</TBODY>
							</TABLE>
						</TD>
					</TR>
					<TR>
						<TD>
							<TABLE cellSpacing=0 cellPadding=0 width=800 align=center>
								<TBODY>
									<TR>
										<TD vAlign=top align=middle>
											<DIV>
												<TABLE id=browseTable>
													<TBODY>
														<TR>
															<TD style="TEXT-ALIGN: right" colSpan=2></TD>
														</TR>
														<TR>
															<TD style="HEIGHT: 21px;WIDTH: 500px" align=left>
																<INPUT class=TextUnderCss id=txtdwbm
																	style="WIDTH: 150px" readOnly value="<%=resultSet.getString("dwmc") %>"
																	name=txtdwbm> 供电工区
															</TD>
															<TD style="WIDTH: 194px" align=right>
																第
																<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 80px"
																	value="<%=resultSet.getString("gzph") %>" name=txtGZPH>
																号<div style="display:none; color:red;" id="gzphmesage">工作票号不能空</div>
															</TD>
														</TR>
														<TR>
															<TD style="HEIGHT: 21px" vAlign=top colSpan=2>
																<DIV style="TEXT-ALIGN: center">
																	<TABLE class=tbl style="WIDTH: 750px" cellSpacing=0
																		cellPadding=0 border=1>
																		<TBODY>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 26px">
																					作 业 地 点
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=ddlZYDD
																						style="WIDTH: 200px" maxLength=5
																						value="<%=resultSet.getString("zydd") %>" name="ZYDD">
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					&nbsp;
																					<SPAN id=Label2
																						style="DISPLAY: inline-block; WIDTH: 100px">发票人</SPAN>
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPR
																						style="WIDTH: 140px" maxLength=5 value="<%=resultSet.getString("fpr") %>"
																						name=txtFPR>
																						<div style="display:none; color:red;" id="fprmesage">发票人不能空</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 26px">
																					作 业 内 容
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtZYNR
																						style="WIDTH: 218px" value="<%=resultSet.getString("zynr") %>"
																						name=txtZYNR>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					发票日期
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 26px" align=left colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPRQ
																						style="WIDTH: 142px" onclick="showcalendar(this,true)" value="<%=gettime(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("e_yxsj"))%>"
																						name=txtFPRQ>
																						<div style="display:none; color:red;" id="fpsjmesage">发票时间不能空</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 26px">
																					工作票有效期
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=6>
																					自
																					<INPUT class=TextUnderCss id=txtYXQS
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value="<%=gettime(resultSet.getDate("t_yxsj"))+" "+convertTime(resultSet.getTime("t_yxsj"))%>"
																						name=txtYXQS>
																					至
																					<INPUT class=TextUnderCss id=txtYXQZ
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value="<%=gettime(resultSet.getDate("e_yxsj"))+" "+convertTime(resultSet.getTime("e_yxsj"))%>"
																						name=txtYXQZ>
																					止
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 14px">
																					工作领导人
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 14px">
																					姓名
																				</TD>
																				<TD style="WIDTH: 66px; HEIGHT: 14px" align=left>
																					<INPUT class=TextUnderCss id=txtLDRXM
																						style="WIDTH: 100px"  value="<%=resultSet.getString("gzldr") %>"
																						name=txtLDRXM>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 14px">
																					安全等级
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 14px" align=left colSpan=3>
																					<INPUT class=TextUnderCss id=txtLDRJB
																						style="WIDTH: 101px"   value="<%=resultSet.getString("ldrdj") %>"
																						name=txtLDRJB>
																				</TD>
																			</TR>
																			<TR style="HEIGHT: 26px">
																<TD style="WIDTH: 200px" rowSpan=5>
																	作 业 组 员
																	<BR>
																	姓名及安全等级(安全等级写在括号内）
																</TD>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="<%=mcList.get(0).toString() %>" onblur="allnum()" name=txtCY1>
																	 
																</TD>
																<TD
																	style="WIDTH: 150px; HEIGHT: 25px; TEXT-ALIGN: justify"
																	align=left>
																	<INPUT class=TextUnderCss id=txtCY2 style="WIDTH: 60px"
																		value="<%=mcList.get(1).toString() %>" onblur="allnum()" name=txtCY2>
																	 
																</TD>
																<TD
																	style="WIDTH: 110px; HEIGHT: 25px; TEXT-ALIGN: justify"
																	align=left>
																	<INPUT class=TextUnderCss id=txtCY3 style="WIDTH: 60px"
																		value="<%=mcList.get(2).toString() %>" onblur="allnum()" name=txtCY3>
																	 
																</TD>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY4 style="WIDTH: 60px"
																		value="<%=mcList.get(3).toString() %>" onblur="allnum()" name=txtCY4>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																	<INPUT class=TextUnderCss id=txtCY5 style="WIDTH: 60px"
																		value="<%=mcList.get(4).toString() %>" onblur="allnum()" name=txtCY5>
																	 
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY6 style="WIDTH: 60px"
																		value="<%=mcList.get(5).toString() %>" onblur="allnum()" name=txtCY6>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY7 style="WIDTH: 60px"
																		value="<%=mcList.get(6).toString() %>" onblur="allnum()" name=txtCY7>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY8 style="WIDTH: 60px"
																		value="<%=mcList.get(7).toString() %>" onblur="allnum()" name=txtCY8>
																	 
																</TD>
																<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY9 style="WIDTH: 60px"
																		value="<%=mcList.get(8).toString() %>" onblur="allnum()" name=txtCY9>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																	<INPUT class=TextUnderCss id=txtCY10 style="WIDTH: 60px"
																		value="<%=mcList.get(9).toString() %>" onblur="allnum()" name=txtCY10>
																	 
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY11 style="WIDTH: 60px"
																		value="<%=mcList.get(10).toString() %>" onblur="allnum()" name=txtCY11>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY12
																		style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(11).toString()%>" name=txtCY12>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY13
																		style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(12).toString()%>" name=txtCY13>
																	 
																</TD>
																<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY14
																		style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(13).toString() %>" name=txtCY14>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																	<INPUT class=TextUnderCss id=txtCY15 value="<%=mcList.get(14).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY15>
																	 
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY16 value="<%=mcList.get(15).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY16>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY17 value="<%=mcList.get(16).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY17>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY18 value="<%=mcList.get(17).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY18>
																	 
																</TD>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY19 value="<%=mcList.get(18).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY19>
																	 
																</TD>
																<TD style="WIDTH: 130px; HEIGHT: 25px" align=left colSpan=2>
																	<INPUT class=TextUnderCss id=txtCY20 value="<%=mcList.get(19).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY20>
																	 
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY21 value="<%=mcList.get(20).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY121>
																	 
																</TD>
																<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY22 value="<%=mcList.get(21).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY22>
																	 
																</TD>
																<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY23 value="<%=mcList.get(22).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY23>
																	 
																</TD>
																<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																	<INPUT class=TextUnderCss id=txtCY24 value="<%=mcList.get(23).toString() %>"
																		style="WIDTH: 60px" onblur="allnum()" name=txtCY24>
																	 
																</TD>
																<TD style="HEIGHT: 25px" align=left colSpan=2>
																	共计
																	<INPUT class=TextUnderCss id=txtzrs style="WIDTH: 17px"
																		maxLength=3 value="<%=resultSet.getString("cgrs") %>" name=txtzrs>
																	人<div style="display:none; color:red;" id="divmesg">请填写级别</div>
																</TD>
															</TR>
																			<TR>
																				<TD rowSpan=2>
																					绝缘工具状态
																				</TD>
																				<TD style="HEIGHT: 26px" colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtXTDSB
																						style="WIDTH: 100%; HEIGHT: 59px" name=txtJYGJZT><%=SetNull(resultSet.getString("jytzt")) %></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			<TR>
																				<TD>
																					安全距离
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZSJDXWZ
																						style="WIDTH: 100%; HEIGHT: 49px" name=txtAQJL><%=SetNull(resultSet.getString("aqjl")) %></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					作业区防护措施
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZYQFHZS
																						style="WIDTH: 100%; HEIGHT: 56px" name=txtZYQFHZS><%=SetNull(resultSet.getString("fhcs")) %></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 82px">
																					其它安全
																					<BR>
																					措 施
																				</TD>
																				<TD style="HEIGHT: 82px" colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtQTAQCS
																						style="WIDTH: 100%; HEIGHT: 77px" name=txtQTAQCS><%=SetNull(resultSet.getString("aqcs"))%></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																<TD style="WIDTH: 200px; HEIGHT: 29px">
																	变更作业组成员记录
																</TD>
																<TD style="HEIGHT: 29px" colSpan=2>
																	<TEXTAREA class=TextUnderCss id=txtCYBGJL
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtCYBGJL
																		><%=SetNull(resultSet.getString("bgzyryjl")) %></TEXTAREA>
																</TD>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	天窗未兑现<br>原因记录
																</TD>
																<TD style="HEIGHT: 20px" colSpan=3>
																	<TEXTAREA class=TextUnderCss id=txtTCWDXYY
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtTCWDXYY><%=SetNull(resultSet.getString("TCWDXYY")) %></TEXTAREA>
																</TD>
															</TR>
															<tr>
														<TD style="WIDTH: 200px" rowSpan=2 align=center>
																	审票签认
																</TD>
																 <td align=center style="HEIGHT: 30px" >安全员</td>
																  <td><INPUT class=TextUnderCss id=txtAQY value="<%=SetNull(resultSet.getString("AQY")) %>" style="WIDTH: 60px" name=txtAQY></td>
																   <td align=center>车间干部</td>
																    <td><INPUT class=TextUnderCss id=txtCJGB value="<%=SetNull(resultSet.getString("CJGB")) %>" style="WIDTH: 60px" name=txtCJGB></td>
																     <td align=center style="WIDTH: 80px">电调</td>
																      <td><INPUT class=TextUnderCss id=txtDD value="<%=SetNull(resultSet.getString("DD")) %>" style="WIDTH: 60px" name=txtDD></td>
																
															</tr>
															<tr>
																<TD style="WIDTH: 200px" align=center>
																	时间
																</TD>
																 <td align=left>	<INPUT class=TextUnderCss id=txtAQYSJ
																		style="WIDTH: 110px; HEIGHT: 30px" value="<%=gettime(resultSet.getDate("AQYSJ"))+" "+convertTime(resultSet.getTime("AQYSJ")) %>"  onclick="showcalendar(this,true)" name=txtAQYSJ>
																</td>
																  <td align=center>时间</td>
																   <td><INPUT class=TextUnderCss id=txtCJGBSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" value="<%=gettime(resultSet.getDate("CJGBSJ"))+" "+convertTime(resultSet.getTime("CJGBSJ"))%>"   name=txtCJGBSJ></td>
																    <td align=center>时间</td>
																     <td><INPUT class=TextUnderCss id=txtDDSJ
																		style="WIDTH: 110px; HEIGHT: 30px" value="<%=gettime(resultSet.getDate("DDSJ"))+" "+convertTime(resultSet.getTime("DDSJ"))%>"    onclick="showcalendar(this,true)" name=txtDDSJ>
																		 
																		</td> 
															</tr>
															 
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 10px">
																					工 作 票
																					<BR>
																					结束时间
																				</TD>
																				<TD style="HEIGHT: 10px" align=left colSpan=6>
																					<INPUT class=TextUnderCss id=txtGZPJSSJ
																						style="WIDTH: 283px; HEIGHT: 30px" value="<%=gettime(resultSet.getDate("jssj"))+" "+convertTime(resultSet.getTime("jssj")) %>" onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 10px">
																					工作领导人
																					<BR>
																					（签字）
																				</TD>
																				<TD style="HEIGHT: 10px" colSpan=2>
																					<INPUT class=TextUnderCss id=txtLDRQZ value="<%=SetNull(resultSet.getString("ldrqz")) %>" name=txtLDRQZ>
																				</TD>
																				<TD style="WIDTH: 206px">
																					发票人
																					<BR>
																					（签字）
																				</TD>
																				<TD colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPRQZ value="<%=SetNull(resultSet.getString("fprqz")) %>" name=txtFPRQZ>
																				</TD>
																			</TR>
																		</TBODY>
																	</TABLE>
																</DIV>
															</TD>
														</TR>
														<TR>
															<TD align=right colSpan=2>
															<input type="hidden" value="<%=id%>" name="gzpid"/>
																<INPUT class=blueButtonCss  style="WIDTH: 93px" type=button onclick="registerSubmit()"  value="修改" />
																<INPUT class=blueButtonCss id=btnFB
																	onclick=history.back(); style="WIDTH: 93px" type=button
																	value="返回" name=btnFB>
															</TD>
														</TR>
													</TBODY>
												</TABLE>
											</DIV>
											</TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></DIV>
													<%}
	      }catch(Exception ex) {
} %>
											</form>
	</body>
</html>
