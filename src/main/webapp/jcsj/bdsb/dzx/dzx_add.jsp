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
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt;������</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle> 
						������&nbsp;					</TD>
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
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="����"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=��15%��>���б�ţ�
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="WG-KG0012"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>���л�����</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>����</option><option>����</option></select></TD>
								
								<TD>���</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>���Ͻ�</option><option>����</option><option>�����</option><option>����</option></select></TD>
								
								
							</TR>
							
                
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="���" onclick=history.back();><input type="button" onclick=history.back(); value="ȡ��">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
