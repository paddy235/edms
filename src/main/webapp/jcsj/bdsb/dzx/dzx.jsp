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
						&nbsp;����������λ��: ��ҳ--&gt; �������� --&gt; ������					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						�������ѯ&nbsp;					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<TABLE  style="WIDTH: 100%" cellSpacing=0 cellPadding=0 border=0 >
        <TBODY>
        <TR >
         
          
          <TD>���л�����</TD>
          <TD > <select><option>����</option><option>����</option></select></TD>
         <TD align="center">���</TD>
          <TD ><select><option>���Ͻ�</option><option>����</option><option>�����</option><option>����</option></select></TD>
          
          <TD ><INPUT type="button" value="��ѯ"  name="search"></TD>
           <TD ><INPUT type="button" value="���" onClick="javascript:window.location.href='dzx_add.jsp'"></TD>
          </TR>
        </TBODY></TABLE>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>���</TH>
         
         
          <TH scope=col>��λ����</TH>
           <TH scope=col>�豸����</TH>
            <TH scope=col>���б��</TH>
             <TH scope=col>���л���</TH>
              <TH scope=col>���</TH>
               
            <TH scope=col>ɾ��</TH>
            <TH scope=col>�༭</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>���ǣ�������</td>
					<td>����</td>
					<td>WG-KG0012</td>
					<td>����</td>
					<td>���Ͻ� </td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>����ǣ�������</td>
					<td>����</td>
					<td>WG-KG0019</td>
					<td>����</td>
					<td>����</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>���ǣ�������</td>
					<td>����</td>
					<td>WG-KG0012</td>
					<td>����</td>
					<td>���Ͻ� </td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>����ǣ�������</td>
					<td>����</td>
					<td>WG-KG0019</td>
					<td>����</td>
					<td>����</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>���ǣ�������</td>
					<td>����</td>
					<td>WG-KG0012</td>
					<td>����</td>
					<td>���Ͻ� </td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>����ǣ�������</td>
					<td>����</td>
					<td>WG-KG0019</td>
					<td>����</td>
					<td>����</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				
			</TBODY>
		</table>
	</body>
</html>
