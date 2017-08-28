<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%
	String jhid = request.getParameter("jhid");
    String jhlb = request.getParameter("jhlb");
	String dwmc =session.getAttribute("gqmc").toString();

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
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	         
	       }
	       document.getElementById("txtzrs").value=" "+(zry+1);
	     }
	     </script>
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
	       for(var i=1;i<20;i++)
	       {
	         var txtcy= document.getElementById("txtCY"+i).value; 
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         } 
	       }
	       document.getElementById("txtzrs").value=" "+(zry+1);
	     }
	     </script>
	</head>
	<script src="css/Calendar.js" type="text/javascript"></script>
	<body scroll="yes">
	 <form action="gzp_gq_redSave_dd.jsp" name="Register" method="post">
		<DIV style="WIDTH: 100%; TEXT-ALIGN: center">
			<TABLE>
				<TBODY>
					<TR>
						<TD>
							<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
								<TBODY>
									<TR>
										<TD class=tableHeadText style="HEIGHT: 21px" align=middle>
											<STRONG><SPAN style="FONT-SIZE: 14pt">供电线路间接带电作业工作票</SPAN>
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
							<TABLE cellSpacing=0 cellPadding=0 width=900 align=center>
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
															<TD style="HEIGHT: 21px; WIDTH: 250px" align=left>
																<INPUT class=TextUnderCss id=txtdwbm 
																	style="WIDTH: 150px" 
																	name=txtdwbm> 供电工区
															</TD>
															<TD style="WIDTH: 194px" align=right colSpan=3>
																第
																<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 80px"
																	value="" name=txtGZPH>
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
																						value="" name=ZYDD>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					&nbsp;
																					<SPAN id=Label2
																						style="DISPLAY: inline-block; WIDTH: 100px">发票人</SPAN>
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPR
																						style="WIDTH: 140px" maxLength=5 value=""
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
																						style="WIDTH: 218px" value=""
																						name=txtZYNR>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					发票日期
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 26px" align=left  colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPRQ
																						style="WIDTH: 142px" onclick="showcalendar(this,true)" value=""
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
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value=""
																						name=txtYXQS>
																					至
																					<INPUT class=TextUnderCss id=txtYXQZ
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value=""
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
																						style="WIDTH: 100px"  value="" onblur="allnum()"
																						name=txtLDRXM>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 14px">
																					安全等级
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 14px" align=left  colSpan=3>
																					<INPUT class=TextUnderCss id=txtLDRJB
																						style="WIDTH: 101px"   value=""
																						name=txtLDRJB>
																				</TD>
																			</TR>
																			<TR style="HEIGHT: 26px">
																				<TD style="WIDTH: 200px" rowSpan=5>
																					作 业 组 员
																					<BR>
																					姓名及安全等级(安全等级写在姓名后）
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY1
																						style="WIDTH: 60px" value="" onblur="allnum()" name=txtCY1>
																					 
																				</TD>
																				<TD
																					style="WIDTH: 110px; HEIGHT: 25px; TEXT-ALIGN: justify"
																					align=left>
																					<INPUT class=TextUnderCss id=txtCY2
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY2>
																					 
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY3
																						style="WIDTH: 70px" onblur="allnum()" value="" name=txtCY3>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY4
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY4>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtCY4
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY4>
																					 
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY5
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY5>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY6
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY6>
																					 
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY7
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY7>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY8
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY8>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtCY8
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY8>
																					 
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY9
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY9>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY10
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY10>
																					 
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY11
																						style="WIDTH: 70px" value="" onblur="allnum()" name=txtCY11>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY12 onblur="allnum()" value=""
																						style="WIDTH: 70px" name=txtCY12>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtCY12 onblur="allnum()" value=""
																						style="WIDTH: 70px" name=txtCY12>
																					 
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY13
																						style="WIDTH: 70px" onblur="allnum()" value="" name=txtCY13>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY14
																						style="WIDTH: 70px" onblur="allnum()" value="" name=txtCY14>
																					 
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY15
																						style="WIDTH: 70px" onblur="allnum()" value="" name=txtCY15>
																					 
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY16
																						style="WIDTH: 70px" name=txtCY16 value="" onblur="allnum()">
																					 
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 25px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtCY16
																						style="WIDTH: 70px" name=txtCY16 value="" onblur="allnum()">
																					 
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY17
																						style="WIDTH: 70px" name=txtCY17 value="" onblur="allnum()">
																					 
																				</TD>
																				<TD style="WIDTH: 120px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY18
																						style="WIDTH: 70px" onblur="allnum()" value="" name=txtCY18>
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY19
																						style="WIDTH: 70px" name=txtCY19 onblur="allnum()" value="">
																					 
																				</TD>
																				<TD style="WIDTH: 110px; HEIGHT: 25px" align=left>
																					<INPUT class=TextUnderCss id=txtCY19
																						style="WIDTH: 70px" name=txtCY19 onblur="allnum()" value="">
																					 
																				</TD>
																				<TD style="HEIGHT: 25px" align=left colSpan=2>
																					共计
																					<INPUT class=TextUnderCss id=txtzrs
																						style="WIDTH: 17px" maxLength=2 value=0
																						name=txtzrs>
																						<div style="display:none; color:red;" id="divmesg">请填写级别</div>
																					人
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					绝缘工具状态
																				</TD>
																				<TD style="HEIGHT: 26px" colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtXTDSB
																						style="WIDTH: 100%; HEIGHT: 59px" name=txtJYGJZT></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			<TR>
																				<TD>
																					安全距离
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZSJDXWZ
																						style="WIDTH: 100%; HEIGHT: 49px" name=txtAQJL></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					作业区防护措施
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZYQFHZS
																						style="WIDTH: 100%; HEIGHT: 56px" name=txtZYQFHZS></TEXTAREA>
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
																						style="WIDTH: 100%; HEIGHT: 77px" name=txtQTAQCS></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	变更作业组成员记录
																</TD>
																<TD style="HEIGHT: 20px" colSpan=2>
																	<TEXTAREA class=TextUnderCss id=txtCYBGJL
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtCYBGJL></TEXTAREA>
																</TD>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	作业未兑现<br>原因记录
																</TD>
																<TD style="HEIGHT: 20px" colSpan=3>
																	<TEXTAREA class=TextUnderCss id=txtTCWDXYY
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtTCWDXYY></TEXTAREA>
																</TD>
															</TR>
															<tr>
														<TD style="WIDTH: 200px" rowSpan=2 align=center>
																	审票签认
																</TD>
																 <td align=center style="HEIGHT: 30px" >安全员</td>
																  <td><INPUT class=TextUnderCss id=txtAQY style="WIDTH: 70px" name=txtAQY></td>
																   <td align=center>车间干部</td>
																    <td><INPUT class=TextUnderCss id=txtCJGB style="WIDTH: 70px" name=txtCJGB></td>
																     <td align=center style="WIDTH: 80px">电调</td>
																      <td><INPUT class=TextUnderCss id=txtDD style="WIDTH: 70px" name=txtDD></td>
																
															</tr>
															<tr>
																<TD style="WIDTH: 200px" align=center>
																	时间
																</TD>
																 <td align=left>	<INPUT class=TextUnderCss id=txtAQYSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtAQYSJ>
																</td>
																  <td align=center>时间</td>
																   <td><INPUT class=TextUnderCss id=txtCJGBSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtCJGBSJ></td>
																    <td align=center>时间</td>
																     <td><INPUT class=TextUnderCss id=txtDDSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtDDSJ></td> 
															</tr>
															<TR>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	工 作 票
																	<BR>
																	结束时间
																</TD>
																<TD style="HEIGHT: 10px" align=left colSpan=6>
																	<INPUT class=TextUnderCss id=txtGZPJSSJ
																		style="WIDTH: 283px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																</TD>
															</TR>
															<TR>
																		 
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 10px">
																					工作领导人
																					<BR>
																					（签字）
																				</TD>
																				<TD style="HEIGHT: 10px" colSpan=2>
																					<INPUT class=TextUnderCss id=txtLDRQZ name=txtLDRQZ>
																				</TD>
																				<TD style="WIDTH: 206px">
																					发票人
																					<BR>
																					（签字）
																				</TD>
																				<TD  colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPRQZ name=txtFPRQZ>
																				</TD>
																			</TR>
																		</TBODY>
																	</TABLE>
																</DIV>
															</TD>
														</TR>
														<TR>
															<TD align=right colSpan=2>
															<input type="hidden" value="<%=jhid %>" name="jhid"/>
																<INPUT class=blueButtonCss style="WIDTH: 93px"
																	type=button onclick="registerSubmit()" value="提交" />
																<INPUT class=blueButtonCss id=btnFB
																	onclick=history.back(); style="WIDTH: 93px" type=button
																	value="返回" name=btnFB>
															</TD>
														</TR>
													</TBODY>
												</TABLE>
											</DIV>
											</TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></DIV>
											</form>
	</body>
</html>
