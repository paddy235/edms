<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>

		<title>My JSP 'log_add.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">

		<link rel="stylesheet" href="css/default.css" type="text/css"></link>
	<script type="text/javascript" src="../Calendar/Calendar.js"></script>
	<link rel="stylesheet" href="../Calendar/calendar-skin.css" type="text/css"></link></head>

	<body>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
			
				<TR>
					<TD style="HEIGHT: 24px">
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt;<SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">��ѹ��(��)</SPAN> </TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle><SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">��ѹ��(��)</SPAN> </TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=10%>��λ���ƣ�								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="���ǣ�������"  name=DwRy2$txtTitle>								</TD>
								
								<TD width=10%>�豸���ࣺ								</TD>
								<TD width="23%" align=left style="PADDING-LEFT: 5px" >
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="��ѹ��(��)"  name=DwRy2$txtTitle>								</TD>
								
								<TD width=10%>����ͺţ�								</TD>
								<TD width="23%" colSpan=2 align=left style="PADDING-LEFT: 5px">
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="MODEL-W2314"  name=DwRy2$txtTitle>								</TD>
							</TR>
							<TR>
								<TD>���б�ţ�</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="RUNNING MODEL-98001"  name=DwRy2$txtTitle>								</TD>
								
							  <TD>װ�ù��ɣ�				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��ѹ�̡���ѹ��Ȧ����ѹ��"  name=DwRy2$txtTitle>							  </TD>
							  <TD>��λ��				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��"  name=DwRy2$txtTitle>							  </TD>
							</TR>
							
                       	<tr>
							<td>�������ң�</td>
							<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>SCHIEDERWERK </option><option>��Ĭ��������Դ���޹�˾</option><option>���������е��</option></select></TD>
				
							<td  width=10%>�������ڣ�</td>
							<TD  style="PADDING-LEFT: 5px" align=left colspan="1" >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				<TD>������ţ�				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="SN:2008-01340551"  name=DwRy2$txtTitle>						  </TD>
		  </tr>
			<TR>
				<td colspan="1">Ͷ�����ڣ�</td>
							<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="2" >
				<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				<TD>��ȣ�				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009"   name=DwRy2$txtTitle></td>
				<TD>��ע��				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="��ѹ�̹�"   name=DwRy2$txtTitle></td>
			</TR>
			<TR>
				
				<TD>��Ҫ������				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="��Ƭ�����顢�����"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="���" onclick=history.back();><input type="button" onclick=history.back(); value="ȡ��">				</td>
			</tr>
		</TABLE>
	    <blockquote>&nbsp;</blockquote>
	</body>
</html>
