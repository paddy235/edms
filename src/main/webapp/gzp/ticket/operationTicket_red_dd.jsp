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
	     {//���б��ķǿ���֤
	       
	        
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
	     {//���б��ķǿ���֤
	       
	        
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
											<STRONG><SPAN style="FONT-SIZE: 14pt">������·��Ӵ�����ҵ����Ʊ</SPAN>
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
																	name=txtdwbm> ���繤��
															</TD>
															<TD style="WIDTH: 194px" align=right colSpan=3>
																��
																<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 80px"
																	value="" name=txtGZPH>
																��<div style="display:none; color:red;" id="gzphmesage">����Ʊ�Ų��ܿ�</div>
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
																					�� ҵ �� ��
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=ddlZYDD
																						style="WIDTH: 200px" maxLength=5
																						value="" name=ZYDD>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					&nbsp;
																					<SPAN id=Label2
																						style="DISPLAY: inline-block; WIDTH: 100px">��Ʊ��</SPAN>
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPR
																						style="WIDTH: 140px" maxLength=5 value=""
																						name=txtFPR>
																						<div style="display:none; color:red;" id="fprmesage">��Ʊ�˲��ܿ�</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 26px">
																					�� ҵ �� ��
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=2>
																					<INPUT class=TextUnderCss id=txtZYNR
																						style="WIDTH: 218px" value=""
																						name=txtZYNR>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 26px">
																					��Ʊ����
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 26px" align=left  colSpan=3>
																					<INPUT class=TextUnderCss id=txtFPRQ
																						style="WIDTH: 142px" onclick="showcalendar(this,true)" value=""
																						name=txtFPRQ>
																						<div style="display:none; color:red;" id="fpsjmesage">��Ʊʱ�䲻�ܿ�</div>
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 26px">
																					����Ʊ��Ч��
																				</TD>
																				<TD style="HEIGHT: 26px" align=left colSpan=6>
																					��
																					<INPUT class=TextUnderCss id=txtYXQS
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value=""
																						name=txtYXQS>
																					��
																					<INPUT class=TextUnderCss id=txtYXQZ
																						style="WIDTH: 146px" onclick="showcalendar(this,true)" value=""
																						name=txtYXQZ>
																					ֹ
																				</TD>
																			</TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 14px">
																					�����쵼��
																				</TD>
																				<TD style="WIDTH: 130px; HEIGHT: 14px">
																					����
																				</TD>
																				<TD style="WIDTH: 66px; HEIGHT: 14px" align=left>
																					<INPUT class=TextUnderCss id=txtLDRXM
																						style="WIDTH: 100px"  value="" onblur="allnum()"
																						name=txtLDRXM>
																				</TD>
																				<TD style="WIDTH: 206px; HEIGHT: 14px">
																					��ȫ�ȼ�
																				</TD>
																				<TD style="WIDTH: 98px; HEIGHT: 14px" align=left  colSpan=3>
																					<INPUT class=TextUnderCss id=txtLDRJB
																						style="WIDTH: 101px"   value=""
																						name=txtLDRJB>
																				</TD>
																			</TR>
																			<TR style="HEIGHT: 26px">
																				<TD style="WIDTH: 200px" rowSpan=5>
																					�� ҵ �� Ա
																					<BR>
																					��������ȫ�ȼ�(��ȫ�ȼ�д��������
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
																					����
																					<INPUT class=TextUnderCss id=txtzrs
																						style="WIDTH: 17px" maxLength=2 value=0
																						name=txtzrs>
																						<div style="display:none; color:red;" id="divmesg">����д����</div>
																					��
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					��Ե����״̬
																				</TD>
																				<TD style="HEIGHT: 26px" colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtXTDSB
																						style="WIDTH: 100%; HEIGHT: 59px" name=txtJYGJZT></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			<TR>
																				<TD>
																					��ȫ����
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZSJDXWZ
																						style="WIDTH: 100%; HEIGHT: 49px" name=txtAQJL></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																				<TD rowSpan=2>
																					��ҵ��������ʩ
																				</TD>
																				<TD colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtZYQFHZS
																						style="WIDTH: 100%; HEIGHT: 56px" name=txtZYQFHZS></TEXTAREA>
																				</TD>
																			</TR>
																			<TR></TR>
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 82px">
																					������ȫ
																					<BR>
																					�� ʩ
																				</TD>
																				<TD style="HEIGHT: 82px" colSpan=6>
																					<TEXTAREA class=TextUnderCss id=txtQTAQCS
																						style="WIDTH: 100%; HEIGHT: 77px" name=txtQTAQCS></TEXTAREA>
																				</TD>
																			</TR>
																			<TR>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	�����ҵ���Ա��¼
																</TD>
																<TD style="HEIGHT: 20px" colSpan=2>
																	<TEXTAREA class=TextUnderCss id=txtCYBGJL
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtCYBGJL></TEXTAREA>
																</TD>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	��ҵδ����<br>ԭ���¼
																</TD>
																<TD style="HEIGHT: 20px" colSpan=3>
																	<TEXTAREA class=TextUnderCss id=txtTCWDXYY
																		style="WIDTH: 100%; HEIGHT: 55px" name=txtTCWDXYY></TEXTAREA>
																</TD>
															</TR>
															<tr>
														<TD style="WIDTH: 200px" rowSpan=2 align=center>
																	��Ʊǩ��
																</TD>
																 <td align=center style="HEIGHT: 30px" >��ȫԱ</td>
																  <td><INPUT class=TextUnderCss id=txtAQY style="WIDTH: 70px" name=txtAQY></td>
																   <td align=center>����ɲ�</td>
																    <td><INPUT class=TextUnderCss id=txtCJGB style="WIDTH: 70px" name=txtCJGB></td>
																     <td align=center style="WIDTH: 80px">���</td>
																      <td><INPUT class=TextUnderCss id=txtDD style="WIDTH: 70px" name=txtDD></td>
																
															</tr>
															<tr>
																<TD style="WIDTH: 200px" align=center>
																	ʱ��
																</TD>
																 <td align=left>	<INPUT class=TextUnderCss id=txtAQYSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtAQYSJ>
																</td>
																  <td align=center>ʱ��</td>
																   <td><INPUT class=TextUnderCss id=txtCJGBSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtCJGBSJ></td>
																    <td align=center>ʱ��</td>
																     <td><INPUT class=TextUnderCss id=txtDDSJ
																		style="WIDTH: 110px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtDDSJ></td> 
															</tr>
															<TR>
																<TD style="WIDTH: 200px; HEIGHT: 20px" align=center>
																	�� �� Ʊ
																	<BR>
																	����ʱ��
																</TD>
																<TD style="HEIGHT: 10px" align=left colSpan=6>
																	<INPUT class=TextUnderCss id=txtGZPJSSJ
																		style="WIDTH: 283px; HEIGHT: 30px" onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																</TD>
															</TR>
															<TR>
																		 
																			<TR>
																				<TD style="WIDTH: 200px; HEIGHT: 10px">
																					�����쵼��
																					<BR>
																					��ǩ�֣�
																				</TD>
																				<TD style="HEIGHT: 10px" colSpan=2>
																					<INPUT class=TextUnderCss id=txtLDRQZ name=txtLDRQZ>
																				</TD>
																				<TD style="WIDTH: 206px">
																					��Ʊ��
																					<BR>
																					��ǩ�֣�
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
																	type=button onclick="registerSubmit()" value="�ύ" />
																<INPUT class=blueButtonCss id=btnFB
																	onclick=history.back(); style="WIDTH: 93px" type=button
																	value="����" name=btnFB>
															</TD>
														</TR>
													</TBODY>
												</TABLE>
											</DIV>
											</TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></DIV>
											</form>
	</body>
</html>
