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
						&nbsp;����������λ��: ��ҳ--&gt; ��������--&gt;�Ͼ߹���
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>����&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=8 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			<tr>
				<TD colspan="8">
					<SPAN style="FLOAT: left; WIDTH: auto; COLOR: #002499"><B>��ѯ����</B>
					</SPAN>
				</TD>
			</tr>
			<tr>
			<td>��λ��</td>
			<td><select>
			<option>��ɳ����������</option>
			<option>�عؼ���������</option>
			</select></td>
			<td>�豸���ƣ�</td>
			<td>
			<select>
			<OPTION 
                    value=020100001 selected>���Ӻ͹���</OPTION> <OPTION 
                    value=020200001>����</OPTION> <OPTION 
                    value=020300001>������</OPTION> <OPTION 
                    value=020400001>�ְ��«</OPTION> <OPTION 
                    value=020500001>������</OPTION> <OPTION 
                    value=020600001>������</OPTION> <OPTION 
                    value=020700001>�Ӵ��߽��߽��̼о�</OPTION> <OPTION 
                    value=020800001>����������</OPTION> <OPTION 
                    value=020900001>�Ӵ������������</OPTION> <OPTION 
                    value=021100001>Ƥ��</OPTION> <OPTION 
                    value=021200001>�α꿨��</OPTION> <OPTION 
                    value=021300001>ˮƽ�߼�����</OPTION> <OPTION 
                    value=021400001>��ŷ��</OPTION> <OPTION 
                    value=021500001>�����</OPTION> <OPTION 
                    value=021600001>����</OPTION> <OPTION 
                    value=021700001>�ӵ���</OPTION> <OPTION 
                    value=021800001>�ȵ�λ��</OPTION> <OPTION 
                    value=021900001>��ȫ��</OPTION> <OPTION 
                    value=022000001>��Ե����</OPTION> <OPTION 
                    value=022100001>�������ź���</OPTION> <OPTION 
                    value=022200001>���źŵ�</OPTION> <OPTION 
                    value=022300001>�������źű�־</OPTION> <OPTION 
                    value=022400001>�����绰</OPTION> <OPTION 
                    value=022500001>���������</OPTION> <OPTION 
                    value=022600001>��Զ��</OPTION> <OPTION 
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
				<td>���</td>
			<td>
			<input type="text" value="1.5t"   size="10"/>
			</td>
			</tr>
			
			<tr>
				<td colspan="8" align="center">
					
					<input type="button"
						
						value="��ѯ">
						<input type="button" value="���"
						onclick="javascript:window.location.href='Gj_Add.jsp'">
				</td>
			</tr>

		</TABLE>
		<br>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>���</TH>
         
          <TH scope=col>�豸����</TH>
          <TH scope=col>���</TH>
           <TH scope=col>��λ</TH>
            <TH scope=col>����</TH>
             
               <TH scope=col>��������</TH>
              
                 <TH scope=col>��ע</TH>
            <TH scope=col>�鿴��ϸ</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						�ְ��«
					</td>
					<td>
						1.5t
					</td>
					<td>
						��
					</td>
					<td>
						23
					</td>
					<td>
						2009-2-12
					</td><td>
						����
					</td><td>
						��ϸ
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						�ְ��«
					</td>
					<td>
						1.5t
					</td>
					<td>
						��
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
					</td><td>
						����
					</td><td>
						��ϸ
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						�ְ��«
					</td>
					<td>
						1.5t
					</td>
					<td>
						��
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
					</td><td>
						����
					</td><td>
						��ϸ
					</td>
				</tr>
			</TBODY>
		</table>
	</body>
</html>
