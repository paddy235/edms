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
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt;Vͣϵͳ</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle>Vͣϵͳ</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=��15%��>��λ���ƣ�
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��ɳǣ�������"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=��15%��>�豸���ࣺ
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="�����豸"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=��15%��>����ͺţ�								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="GB212-003"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>�¿ع�������</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="3"  name=DwRy2$txtTitle>
								</TD>
								
							  <TD>����Ⱥ������				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="13"  name=DwRy2$txtTitle>
								</TD>
				<td>��λ��</td>
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="��" onclick ="showcalendar(this)"   name=DwRy2$txtTitle></td>
								
							</TR>
							
                       	<tr>
							<td>�������ң�</td>
							<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>�����磩�Ͼ��Զ����豸���޹�˾</option><option>��򳤳����޹�˾</option><option>�ɶ���âʵҵ���޹�˾</option></select></TD>
							<td  width=��10%��>�������ڣ�</td>
							<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
							<td  width=��10%��>Ͷ�����ڣ�</td>
							<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
							
		  </tr>
			<TR>
				<TD>��ȣ� 
				</TD>
				
				<td colspan="2" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009"   name=DwRy2$txtTitle></td>
				<TD>��ע�� 
				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="Vͣϵͳ������ҵ��;"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="���" onclick=history.back();><input type="button" onclick=history.back(); value="ȡ��">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
