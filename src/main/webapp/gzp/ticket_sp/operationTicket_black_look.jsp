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
	 String sql="select * from z_yxgl_gzpgq_black where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 
	 //得到作业人员的数据
	 String sql_zyry="select * from z_yxgl_zyry where ryb='gq_black' and gzpid="+id;
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
	   for(int i=1;i<(20-j);i++)
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
    
    <title>My JSP 'operationTicket_black_look.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="/edms/yxgl/ticket_sp/css/calendar-skin.css" type="text/css"></link>
	  <link rel="stylesheet" href="/edms/yxgl/ticket_sp/css/Bdsgzpblack.css" type="text/css"></link>
  <link rel="stylesheet" href="/edms/yxgl/ticket_sp/css/calendar-skin.css" type="text/css"></link>
<script src="/edms/yxgl/ticket_sp/css/Calendar.js" type="text/javascript"></script>
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
	       for(var i=1;i<20;i++)
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
  
<body scroll="yes">
	 <form action="gzp_gq_blackSp.jsp" name="Register" method="post">
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
											<STRONG><SPAN style="FONT-SIZE: 14pt">接 触 网 第
													三 种 工 作 票</SPAN><input type="hidden" name="jhid" value="<%=resultSet.getString("jhid")%>">
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
															<TD style="HEIGHT: 21px" align=left>
																<INPUT class=TextUnderCss id=txtdwbm
																	style="WIDTH: 141px" readOnly value="<%=SetNull(resultSet.getString("dwmc")) %>"
																	name=txtdwmc>
															</TD>
															<TD style="WIDTH: 194px" align=right>
																第
																<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 80px"
																	value="<%=SetNull(resultSet.getString("gzph")) %>" name=txtGZPH>
																号<div style="display:none; color:red;" id="gzphmesage">工作票号不能空</div>
															</TD>
														</TR>
														<TR>
															<TD style="HEIGHT: 21px" vAlign=top colSpan=2>
																<DIV style="TEXT-ALIGN: center">
																	<TABLE class=tbl style="WIDTH: 581px" cellSpacing=0
																		cellPadding=0 border=1>
																		<TBODY>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 26px">
																					作 业 地 点
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=ddlZYDD
																						style="WIDTH: 200px" maxLength=5
																						value="<%=SetNull(resultSet.getString("zydd")) %>" name="ZYDD">
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					&nbsp;
																					<SPAN id=Label2
																						style="DISPLAY: inline-block; WIDTH: 100px">发票人</SPAN>
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtFPR
																						style="WIDTH: 140px" maxLength=5 value="<%=SetNull(resultSet.getString("fpr")) %>"
																						name=txtFPR>
																						<div style="display:none; color:red;" id="fprmesage">发票人不能空</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 26px">
																					作 业 内 容
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtZYNR
																						style="WIDTH: 218px" value="<%=SetNull(resultSet.getString("zynr")) %>"
																						name=txtZYNR>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					发票日期
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 26px" align=left>
																					<INPUT class=TextUnderCss id=txtFPRQ
																						style="WIDTH: 142px" onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("fpsj"))%>"
																						name=txtFPRQ>
																						<div style="display:none; color:red;" id="fpsjmesage">发票时间不能空</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 26px">
																					工作票有效期
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=4>
																					自
																					<INPUT class=TextUnderCss id=txtYXQS
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("t_yxsj"))+" "+convertTime(resultSet.getTime("t_yxsj"))%>"
																						name=txtYXQS>
																					至
																					<INPUT class=TextUnderCss id=txtYXQZ
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("e_yxsj"))+" "+convertTime(resultSet.getTime("e_yxsj"))%>"
																						name=txtYXQZ>
																					止
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 14px">
																					工作领导人
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 14px">
																					姓名
																				</TD>
																				<TD style="WIDTH: 66px; HEIGHT: 14px" align=left>
																					<INPUT class=TextUnderCss id=txtLDRXM
																						style="WIDTH: 100px"  value="<%=SetNull(resultSet.getString("gzldr")) %>"
																						name=txtLDRXM>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 14px">
																					安全等级
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 14px" align=left>
																					<INPUT class=TextUnderCss id=txtLDRJB
																						style="WIDTH: 101px" maxLength=1 value="<%=resultSet.getString("ldrdj") %>"
																						name=txtLDRJB>
																				</TD>
																			</TR>
																			<TR style="HEIGHT: 26px">
																				<TD style="WIDTH: 1557px" rowSpan=5>
																					作 业 组 员
																					<BR>
																					姓名及安全等级(安全等级写在括号内）
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY1
																						style="WIDTH: 60px" value="<%=mcList.get(0).toString() %>" onblur="allnum()" name=txtCY1>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB1
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(0).toString() %>" onblur="allnum()"
																						name=txtAQJB1>
																					)
																				</TD>
																				<TD
																					style="WIDTH: 110px; HEIGHT: 25px; TEXT-ALIGN: justify"
																					align=left>
																					<INPUT class=TextUnderCss id=txtCY2
																						style="WIDTH: 60px" value="<%=mcList.get(1).toString() %>" onblur="allnum()" name=txtCY2>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB2
																						style="WIDTH: 15px" onblur="allnum()" maxLength=1 value="<%=jbList.get(1).toString() %>"
																						name=txtAQJB2>
																					)
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY3
																						style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(2).toString() %>" name=txtCY3>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB3
																						style="WIDTH: 15px" onblur="allnum()" maxLength=1 value="<%=jbList.get(2).toString() %>"
																						name=txtAQJB3>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY4
																						style="WIDTH: 60px" value="<%=mcList.get(3).toString() %>" onblur="allnum()" name=txtCY4>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB4
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(3).toString() %>"
																						name=txtAQJB4>
																					)
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY5
																						style="WIDTH: 60px" value="<%=mcList.get(4).toString() %>" onblur="allnum()" name=txtCY5>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB5
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(4).toString() %>" onblur="allnum()"
																						name=txtAQJB5>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY6
																						style="WIDTH: 60px" value="<%=mcList.get(5).toString() %>" onblur="allnum()" name=txtCY6>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB6
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(5).toString() %>" onblur="allnum()"
																						name=txtAQJB6>
																					)
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY7
																						style="WIDTH: 60px" value="<%=mcList.get(6).toString() %>" onblur="allnum()" name=txtCY7>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB7
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(6).toString() %>" name=txtAQJB7>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY8
																						style="WIDTH: 60px" value="<%=mcList.get(7).toString() %>" onblur="allnum()" name=txtCY8>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB8
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(7).toString() %>"
																						name=txtAQJB8>
																					)
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY9
																						style="WIDTH: 60px" value="<%=mcList.get(8).toString() %>" onblur="allnum()" name=txtCY9>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB9
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(8).toString() %>" onblur="allnum()"
																						name=txtAQJB9>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY10
																						style="WIDTH: 60px" value="<%=mcList.get(9).toString() %>" onblur="allnum()" name=txtCY10>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB10
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(9).toString() %>" onblur="allnum()"
																						name=txtAQJB10>
																					)
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY11
																						style="WIDTH: 60px" value="<%=mcList.get(10).toString() %>" onblur="allnum()" name=txtCY11>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB11
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(10).toString() %>"
																						name=txtAQJB11>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY12 onblur="allnum()" value="<%=mcList.get(11).toString() %>"
																						style="WIDTH: 60px" name=txtCY12>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB12
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(11).toString() %>" name=txtAQJB12>
																					)
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY13
																						style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(12).toString() %>" name=txtCY13>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB13
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(12).toString() %>" onblur="allnum()" name=txtAQJB13>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY14
																						style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(13).toString() %>" name=txtCY14>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB14
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(13).toString() %>" name=txtAQJB14>
																					)
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY15
																						style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(14).toString() %>" name=txtCY15>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB15
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(14).toString() %>" name=txtAQJB15>
																					)
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY16
																						style="WIDTH: 60px" name=txtCY16 value="<%=mcList.get(15).toString() %>" onblur="allnum()">
																					(
																					<INPUT class=TextUnderCss id=txtAQJB16
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(15).toString() %>" name=txtAQJB16>
																					)
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY17
																						style="WIDTH: 60px" name=txtCY17 value="<%=mcList.get(16).toString() %>" onblur="allnum()">
																					(
																					<INPUT class=TextUnderCss id=txtAQJB17
																						style="WIDTH: 15px" maxLength=1 value="<%=jbList.get(16).toString() %>" onblur="allnum()" name=txtAQJB17>
																					)
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY18
																						style="WIDTH: 60px" onblur="allnum()" value="<%=mcList.get(17).toString() %>" name=txtCY18>
																					(
																					<INPUT class=TextUnderCss id=txtAQJB18
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(17).toString() %>" name=txtAQJB18>
																					)
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY19
																						style="WIDTH: 60px" name=txtCY19 onblur="allnum()" value="<%=mcList.get(18).toString() %>">
																					(
																					<INPUT class=TextUnderCss id=txtAQJB19
																						style="WIDTH: 15px" maxLength=1 onblur="allnum()" value="<%=jbList.get(18).toString() %>" name=txtAQJB19>
																					)
																				</TD>
																				<TD style="HEIGHT: 25px" align=left>
																					共计
																					<INPUT class=TextUnderCss id=txtzrs
																						style="WIDTH: 17px" maxLength=2 value="<%=resultSet.getString("cgrs") %>"
																						name=txtzrs>
																						<div style="display:none; color:red;" id="divmesg">请填写级别</div>
																					人
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					需停电设备
																				</TD>
																				<TD style="HEIGHT: 26px" colSpan=4>
																					<TEXTAREA class=TextUnderCss id=txtXTDSB
																						style="WIDTH: 480px; HEIGHT: 59px" name=txtXTDSB><%=SetNull(resultSet.getString("tdsb")) %></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			
																			
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 82px">
																					安 全 措 施
																				</TD>
																				<TD style="HEIGHT: 82px" colSpan=4>
																					<TEXTAREA class=TextUnderCss id=txtQTAQCS
																						style="WIDTH: 480px; HEIGHT: 77px" name=txtQTAQCS><%=SetNull(resultSet.getString("aqcs"))%></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 29px">
																					变更作业组成员记录
																				</TD>
																				<TD style="HEIGHT: 29px" colSpan=4>
																					<TEXTAREA class=TextUnderCss id=txtCYBGJL
																						style="WIDTH: 478px; HEIGHT: 55px" name=txtCYBGJL
																						><%=SetNull(resultSet.getString("bgzyryjl")) %></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 10px">
																					工 作 票
																					<BR>
																					结束时间
																				</TD>
																				<TD style="HEIGHT: 10px" align=left colSpan=4>
																					<INPUT class=TextUnderCss id=txtGZPJSSJ
																						style="WIDTH: 283px; HEIGHT: 30px" value="<%=convertDate(resultSet.getDate("jssj"))+" "+convertTime(resultSet.getTime("jssj"))%>" onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 1557px; HEIGHT: 10px">
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
																				<TD>
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
																<INPUT class=blueButtonCss  style="WIDTH: 93px" type=button onclick="registerSubmit()"  value="通过" />
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
