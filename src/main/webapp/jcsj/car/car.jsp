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
					<TD bgColor=#003366 colSpan=6 height=2></TD>
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
                    value=020100001 selected>���ƽ��</OPTION> <OPTION 
                    value=020200001>�����</OPTION> <OPTION 
                    value=020300001>�Ӵ�����ҵ��</OPTION> <OPTION 
                    value=020400001>�������</OPTION> <OPTION 
                    value=020500001>�Ӵ������߳�</OPTION> <OPTION 
                    value=020600001>�Ӵ������߳�</OPTION> <OPTION 
                    value=020700001>�Ӵ���Ѳ�쳵</OPTION> <OPTION 
                    value=020800001>�������ó�</OPTION> <OPTION 
                    value=020900001>�Ӵ����ۺϼ�⳵</OPTION> <OPTION 
                    value=021100001>�޳�</OPTION> <OPTION 
                    value=021200001>����</OPTION> 
			
			</select>
           </td>
			<td>�������ң�</td>
			<td>
			<select >
			    <OPTION value=�������ĳ�>�������ĳ�</OPTION>
      <OPTION value=����������ͨ�����豸>����������ͨ�����豸</OPTION> 
		    </select>
			</td>
				<td>���ڣ�</td>
			<td>
			<input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/>
			</td>
			</tr>
			
			<tr>
				<td colspan="8" align="center">
					
					<input type="button"
						
						value="��ѯ">
						<input type="button" value="���"
						onclick="javascript:window.location.href='Wdlcl_Info.jsp'">
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
          <TH scope=col>����</TH>
           <TH scope=col>����</TH>
            <TH scope=col>����(��)</TH>
             <TH scope=col>����(��)</TH>
              <TH scope=col>ͣ�ŵص�</TH>
               <TH scope=col>��������</TH>
                <TH scope=col>��λ</TH>
                 <TH scope=col>��ע</TH>
            <TH scope=col>�鿴��ϸ</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						���ƽ��
					</td>
					<td>
						��A-80213
					</td>
					<td>
						����
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						��ɳ���޹���
					</td><td>
						2008-2-9
					</td><td>
						��
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
						���ƽ��
					</td>
					<td>
						��A-80213
					</td>
					<td>
						����
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						��ɳ���޹���
					</td><td>
						2008-2-9
					</td><td>
						��
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
						���ƽ��
					</td>
					<td>
						��A-80213
					</td>
					<td>
						����
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						��ɳ���޹���
					</td><td>
						2008-2-9
					</td><td>
						��
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
