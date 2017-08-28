<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GBK"%>

<%
	String jhid = request.getParameter("jhid");
    String jhlb = request.getParameter("jhlb");
	String dwmc =session.getAttribute("gqmc").toString();

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>


		<title>My JSP 'operationTicket.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
	     <script type="text/javascript">
	     function registerSubmit()
	     { 
	             document.Register.submit(); 
	     }
	     
	    
	     </script>

		<link rel="stylesheet" href="css/Bdsgzpblack.css" type="text/css"></link>
		<link rel="stylesheet" href="css/GZP.css" type="text/css"></link>
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="/edms/gzp/ticket/css/Calendar.js" type="text/javascript"></script>
	
	</head>

	<body scroll="yes">
	  <form action="dzgzpSave.jsp" name="Register" method="post">
		<DIV style="WIDTH: 100%; TEXT-ALIGN: center">

			<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
				<TBODY>
					<TR>
						<TD class=tableHeadText style="HEIGHT: 21px" align=middle>
							<STRONG><SPAN style="FONT-SIZE: 14pt">倒 闸 作 业 票</SPAN> </STRONG>&nbsp;
						</TD>
					</TR>
					<TR>
						<TD align=middle></TD>
					</TR>
				</TBODY>
			</TABLE>

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
											<TD style="HEIGHT: 21px;WIDTH: 500px" align=left>
												<INPUT class=TextUnderCss id=txtdwbm style="WIDTH: 141px"
													readOnly value="<%=dwmc %>" name=txtdwmc>
													
											</TD>
											<TD style="WIDTH: 194px" align=right>
												第
												<INPUT class=TextUnderCss id="txtGZPH" style="WIDTH: 80px"
													value="" name="txtGZPH">
												号<div style="display:none; color:red;" id="gzphmesage">工作票号不能空</div>
											</TD>
										</TR>
										<TR>
											<TD style="HEIGHT: 21px" vAlign=top colSpan=2>
												<DIV style="TEXT-ALIGN: center">
													<TABLE class=tbl style="WIDTH: 780px" cellSpacing=0
														cellPadding=0 border=1>
														<TBODY>
															<TR>
																<TD style=" HEIGHT: 26px"  align=center>
																	倒闸作业目的
																</TD>
																<TD style="HEIGHT: 26px" align=left colSpan=6>
																	<INPUT class="TextUnderCss" style="WIDTH: 218px" 
																		value="" name="ZYMD"/>
																</TD>
																 
																 
															</TR>
															<TR>
																<TD style="WIDTH: 100px; HEIGHT: 26px"  align=center>
																	倒闸作业根据
																</TD>
																<TD style="HEIGHT: 26px" align=left colSpan=6>
																	<INPUT class=TextUnderCss id=txtZYNR
																		style="WIDTH: 218px" value=""
																		name=ZYGJ>
																</TD>
																 
																 
															</TR>
															<TR>
																<TD style=" HEIGHT: 26px"  align=center>
																	日期
																</TD>
																<TD style="HEIGHT: 26px" align=left colSpan=6>
																	自
																	<INPUT class=TextUnderCss id=txtYXQS
																		style="WIDTH: 146px" value="" onclick="showcalendar(this,true)"
																		name=txtYXQS>
																	至
																	<INPUT class=TextUnderCss id=txtYXQZ
																		style="WIDTH: 146px" value="" onclick="showcalendar(this,true)"
																		name=txtYXQZ>
																	止
																</TD>
															</TR>
															 
														 
															<TR>
																<TD rowSpan=2 align=center>
																	倒闸作业程序
																</TD>
																<TD style="HEIGHT: 226px" colSpan=6>
																	<TEXTAREA class=TextUnderCss id=txtXTDSB
																		style="WIDTH: 100%; HEIGHT: 429px"  name=txtZYCX></TEXTAREA>
																</TD>
															</TR>
															<TR></TR>
															  
															  
															 
															 
															
															<TR>
																<TD style=" HEIGHT: 29px" align=center>
																	倒闸者
																</TD>
																<TD style="HEIGHT: 29px" colSpan=2>
																	<INPUT class=TextUnderCss id=txtDZZ name=txtDZZ>
																</TD>
																<TD style="WIDTH: 106px" align=center> 
																签字
																</TD>
																<TD colSpan=3>
																	<INPUT class=TextUnderCss id=txtDZZQZ name=txtDZZQZ>
																</TD>
															</TR>
															<TR>
																<TD style=" HEIGHT: 20px" align=center>
																	签发人签字
																</TD>
																<TD style="HEIGHT: 10px" align=left colSpan=6>
																	<INPUT class=TextUnderCss  
																		style="WIDTH: 283px; HEIGHT: 30px"  name=txtQFRQZ>
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
											 <input type="hidden" value="<%=jhlb%>" name="jhlb" />
												<INPUT class=blueButtonCss  style="WIDTH: 93px" type=button onclick="registerSubmit()"  value="提交" />
												<INPUT class=blueButtonCss id=btnFB onclick=history.back();
													style="WIDTH: 93px" type=button value="返回" name=btnFB>

											</TD>
										</TR>
									</TBODY>
								</TABLE>
							</DIV>
						</TD>
					</TR>
				</TBODY>
			</TABLE>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</DIV>
</form>
	</body>
</html>
