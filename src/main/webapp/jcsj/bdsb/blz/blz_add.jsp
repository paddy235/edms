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
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt;<SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">������</SPAN></TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle><SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">������</SPAN></TD>
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
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="��㿪����"  name=DwRy2$txtTitle>								</TD>
								
								<TD width=10%>�豸���ࣺ								</TD>
								<TD width="23%" colSpan=1 align=left style="PADDING-LEFT: 5px">
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="������"  name=DwRy2$txtTitle>								</TD>
				
								<TD width=10%>����ͺţ�								</TD>
								<TD width="23%" colSpan=2 align=left style="PADDING-LEFT: 5px">
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="MODEL-W2314"  name=DwRy2$txtTitle>								</TD>
							</TR>
							<TR>
								<TD>�豸������</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="10"  name=DwRy2$txtTitle>								</TD>
								
							  <TD>���б�ţ�				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="RunningModel-100398"  name=DwRy2$txtTitle>							  </TD>
							  <TD>���ѹ��				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="110kv"  name=DwRy2$txtTitle>							  </TD>
							</TR>
						<TR>
								<TD>�߶ȣ�</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="14.5"  name=DwRy2$txtTitle>								</TD>
								
							  <TD>���				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <select><option>����ʽ</option><option>�̶�ʽ</option></select>					  </TD>
							  
		  </TR>							
							
                       	<tr>
							<TD>��Ƶ��ѹ��				</TD>
				            <TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="27.5kv"  name=DwRy2$txtTitle>							  </TD>
							<td>����������</td>
							<TD colSpan=1 style="PADDING-LEFT: 5px"> <INPUT class=grayinput id=DwRy2_txtTitle  value="12.5kv"  name=DwRy2$txtTitle>	</TD>
				
							<td  width=10%>���ܶ�·����������</td>
							<TD  style="PADDING-LEFT: 5px" align=left colspan="1" >
					<INPUT class=grayinput id=DwRy2_txtTitle  value="37A"  name=DwRy2$txtTitle>				</TD>
				
		  </tr>
			<TR>
				<TD>��Ҫ�������ɣ�				</TD>
				<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="�����롢��������"  name=DwRy2$txtTitle>						  </TD>
				<td colspan="1">��λ��</td>
							<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput id=DwRy2_txtTitle  value="̨"  name=DwRy2$txtTitle>			</TD>
				<TD>�������ң�				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><select><option>�������ĳ�</option><option>�������������������ι�˾</option><option>�绯��������ĳ�</option></select></td>
				
			</TR>
			<TR>
				<TD colspan="1">�������ڣ�				</TD>
				
				<td colspan="2"><INPUT class=grayinput value="2007-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				<td colspan="1">������ţ�</td>
							<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput id=DwRy2_txtTitle  value="SN��70001-34598"  name=DwRy2$txtTitle>				</TD>
				<TD>Ͷ�����ڣ�				</TD>
				
				<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				
			</TR>
			<TR>
				<TD>��ע��				</TD>
				
				<td colspan="2" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="�����豸"   name=DwRy2$txtTitle></td>
				<TD>��ȣ�				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2008"   name=DwRy2$txtTitle></td>
				<TD>��Ҫ������				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="�����롢�ӵ�����"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="���" onclick=history.back();><input type="button" onclick=history.back(); value="ȡ��">				</td>
			</tr>
		</TABLE>
	    <blockquote>&nbsp;	</blockquote>
	</body>
</html>
