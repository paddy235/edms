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
	<script type="text/javascript" src="css/Calendar.js"></script><link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link></head>

	<body>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
			
				<TR>
					<TD style="HEIGHT: 24px"> 
						&nbsp;����������λ��: ��ҳ--&gt; ��������--&gt;������豸
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>����������&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			
			<tr>
			<td>�豸���ƣ�</td>
			<td>
			  ����������
           </td>
			<td>�������ң�</td>
			<td>
			
			<input type="text" value="�������ĳ�" size="10"/>
			  
			</td>
				<td>״̬��</td>
			<td>
			<select >
			   <option>����</option>
			    <option>����</option>
		    </select>
			</td>
			</tr>
			<tr>
			<td>����ͺţ�</td>
			<td><input type="text" value="27.5(35)KV" size="10"/></td>
			<td>���б�ţ�</td>
			<td><input type="text" value="K0081" size="10"/></td>
				<td>���ѹ(KV)��</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr>
			<tr>
			<td>������</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>��Ե�ͺģ�</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>����(KG)��</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			<tr>
				<td>����(KG)��</td>
			<td><input type="text" value="18" size="10"/></td>
			<td>��λ��</td>
			<td><input type="text" value="̨"   size="10"/></td>
				<td>��ѹ��(KV/KV)��</td>
			<td><input type="text" value="7" size="10"/></td>
			</tr>
			<tr>
				<td>0.5��������</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
				<td>1��������</td>
			<td><input type="text" value="20090102002" size="10"/></td>
			
				<td>3��������</td>
			<td><input type="text" value="7" size="10"/></td>
			</tr><tr>
				<td>���������</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
			<td>�������ڣ�</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
		
					<td>������ţ�</td>
			<td><input type="text" value="20090102002" size="10"/></td>
		
			</tr>
			<tr>
				<td>������(A/A)��</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
			<td>��Ȧ1�ȼ���</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
		
					<td>��Ȧ1���ɣ�</td>
			<td><input type="text" value="20090102002" size="10"/></td>
		
			</tr>
			<tr>
				<td>��Ȧ2�ȼ���</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
			<td>��Ȧ2���ɣ�</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
		
					<td>��װ���ڣ�</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
		
			</tr>
			<tr>
			<td>Ͷ�����ڣ�</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			<td>��ע��</td>
			<td><input type="text" value="����" size="10"/></td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			</tr>
			
			
			<tr>
				<td colspan="6" align="center">
						<input type="button" value="���"
						onclick="history.back();">
						<input type="button"
						onclick="history.back();"
						value="ȡ��">
				</td>
			</tr>

		</TABLE>
		
	</body>
</html>
