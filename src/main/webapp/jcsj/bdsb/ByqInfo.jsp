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
<script type="text/javascript">
function ff()
{
 ///javascript:window.location.href='ByqInfo_add.jsp'
 var f=document.getElementById('select').value;
if(f=="020100001")
{ 
window.location.href='ByqInfo_add.jsp';
}
 else
 {
window.location.href='ByqInfo_add.jsp';
 }

}
</script>
	<body>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
			
				<TR>
					<TD style="HEIGHT: 24px"> 
						&nbsp;����������λ��: ��ҳ--&gt; ��������--&gt;������豸
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>������豸&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			<tr>
				<TD colspan="6">
					<SPAN style="FLOAT: left; WIDTH: auto; COLOR: #002499"><B>��ѯ����</B>
					</SPAN>
				</TD>
			</tr>
			<tr>
			<td>��λ��</td>
			<td><select>
			<option>��ɳ�����</option>
			<option>�عر����</option>
			</select></td>
			<td>�豸���ƣ�</td>
			<td>
			<select id="select">
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
			</tr>
			<tr>
			<td>״̬��</td>
			<td>
			<select >
			   <option>����</option>
			    <option>����</option>
		    </select>
			</td>
			<td>���ѹ��</td>
			<td><input type="text" value="27" size="10"/></td>
				<td>�������</td>
			<td><input type="text" value="38" size="10"/></td>
			</tr>
			<tr>
				<td colspan="6" align="center">
					
					<input type="button"
						
						value="��ѯ">
						<input type="button" value="���"
						onclick="ff()">
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
          <TH scope=col>����ͺ�</TH>
           <TH scope=col>���ѹ</TH>
            <TH scope=col>�����</TH>
             <TH scope=col>��������</TH>
              <TH scope=col>�������</TH>
               <TH scope=col>��������</TH>
                <TH scope=col>״̬</TH>
                 <TH scope=col>��ע</TH>
            <TH scope=col>�鿴��ϸ</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						��ѹ��
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						�������ĳ�
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						����
					</td><td>
						����
					</td><td>
						<a href="ByqInfo_add.jsp">��ϸ</a>
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						��ѹ��
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						�������ĳ�
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						����
					</td><td>
						����
					</td><td>
						<a href="ByqInfo_add.jsp">��ϸ</a>
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						��ѹ��
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						�������ĳ�
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						����
					</td><td>
						����
					</td><td>
						<a href="ByqInfo_add.jsp">��ϸ</a>
					</td>
				</tr>
			</TBODY>
		</table>
	</body>
</html>
