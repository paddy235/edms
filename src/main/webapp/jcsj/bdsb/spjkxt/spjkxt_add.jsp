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
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt; ��Ƶ���ϵͳ
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle> 
						��Ƶ���ϵͳ&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=��15%��>
									��ش�����
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��ɳǣ�������"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=��15%��>
									����ͺţ�
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="KGB-0239"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=��15%��>
									��λ��
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>�������ң�</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>��������ϵͳ�������޹�˾</option><option>����̫�����޹�˾</option><option>�人Ӣ����·�����豸�������޹�˾</option></select></TD>
								
								<TD>
					�������ڣ�
				</TD>
				<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
				<td>Ͷ�����ڣ�</td>
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009-08-31" onclick ="showcalendar(this)"   name=DwRy2$txtTitle></td>
								
							</TR>
							
                       	<tr>
							<td>��ȣ�</td>
							<td style="PADDING-LEFT: 5px"  width=��10%�� colSpan=2><INPUT class=grayinput value="2008"   name=DwRy2$txtTitle></td>
							<td  width=��10%��>�߱����ƣ�</td>
							<td style="PADDING-LEFT: 5px"  width=��25%�� colspan="5"   >
							<INPUT class=grayinput  value="��� "name=DwRy2$txtTitle>
							</td>
							
		  </tr>
			<TR>
				<TD>��ע�� 
				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="���ӵ�����ҵ��;"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="���" onclick=history.back();><input type="button" onclick=history.back(); value="ȡ��">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
