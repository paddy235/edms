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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>��ѹ��&nbsp; 
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
			<select>
			<OPTION 
                    value=020100001 selected>��ѹ��</OPTION> <OPTION 
                    value=020200001>��·��</OPTION> <OPTION 
                    value=020300001>���뿪��</OPTION> <OPTION 
                    value=020400001>���ɿ���</OPTION> <OPTION 
                    value=020500001>��ϵ���</OPTION> <OPTION 
                    value=020600001>��ѹ������</OPTION> <OPTION 
                    value=020700001>����������</OPTION> <OPTION 
                    value=020800001>�̶��޹�����װ��</OPTION> <OPTION 
                    value=020900001>��̬�޹�����װ��</OPTION> <OPTION 
                    value=021100001>ֱ����Դװ��</OPTION> <OPTION 
                    value=021200001>����</OPTION> <OPTION 
                    value=021300001>ĸ��</OPTION> <OPTION 
                    value=021400001>������</OPTION> <OPTION 
                    value=021500001>������</OPTION> <OPTION 
                    value=021600001>����Ȧ</OPTION> <OPTION 
                    value=021700001>�ŵ�װ��</OPTION> <OPTION 
                    value=021800001>��Ե���߼���豸</OPTION> <OPTION 
                    value=021900001>��ѹ��</OPTION> <OPTION 
                    value=022000001>��ѹ��(��)</OPTION> <OPTION 
                    value=022100001>�ۺ��Զ���ϵͳ</OPTION> <OPTION 
                    value=022200001>�����ж�װ��</OPTION> <OPTION 
                    value=022300001>Զ��ϵͳ</OPTION> <OPTION 
                    value=022400001>Vͣϵͳ</OPTION> <OPTION 
                    value=022500001>������</OPTION> <OPTION 
                    value=022600001>��Ƶ���ϵͳ</OPTION> <OPTION 
                    value=022700001>�����豸</OPTION>
			
			</select>
           </td>
			<td>�������ң�</td>
			<td>
			<select >
			    <OPTION value=�������ĳ�>�������ĳ�</OPTION>
      <OPTION value=����������ͨ�����豸>����������ͨ�����豸</OPTION> 
		    </select>
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
			<td>����ţ�</td>
			<td><input type="text" value="H-187" size="10"/></td>
			<td>���б�ţ�</td>
			<td><input type="text" value="K0081" size="10"/></td>
				<td>���ѹ(KV)��</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr>
			<tr>
			<td>�����(KA)��</td>
			<td><input type="text" value="36" size="10"/></td>
			<td>�����(kVA)��</td>
			<td><input type="text" value="18" size="10"/></td>
				<td>������</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			</tr>
			<tr>
			<td>�������</td>
			<td><input type="text" value="1" size="10"/></td>
			<td>��ȴ��ʽ��</td>
			<td><input type="text" value="����ȴ" size="10"/></td>
				<td>���ص���(A)��</td>
			<td><input type="text" value="23"  size="10"/></td>
			</tr>
			<tr>
			<td>��������(KW)��</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>��·����(KW)��</td>
			<td><input type="text" value="38" size="10"/></td>
				<td>�迹��ѹ(%)��</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr><tr>
			<td>��Ե�ͺģ�</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>����(KG)��</td>
			<td><input type="text" value="386" size="10"/></td>
				<td>������(KG)��</td>
			<td><input type="text" value="3"   size="10"/></td>
			</tr><tr>
			<td>��������(KG)��</td>
			<td><input type="text" value="7" size="10"/></td>
			<td>����(KG)��</td>
			<td><input type="text" value="18" size="10"/></td>
				<td>��λ��</td>
			<td><input type="text" value="̨"   size="10"/></td>
			</tr>
			<tr>
			<td>�������ڣ�</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			<td>������ţ�</td>
			<td><input type="text" value="20090102002" size="10"/></td>
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
