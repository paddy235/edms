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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						��Ƶ���ϵͳ��ѯ&nbsp;
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<TABLE  style="WIDTH: 100%" cellSpacing=0 cellPadding=0 border=0 >
        <TBODY>
        <TR >
         
          
          <TD>�������ң�</TD>
          <TD > <select><option>��������ϵͳ�������޹�˾</option><option>����̫�����޹�˾</option><option>�人Ӣ����·�����豸�������޹�˾</option></select></TD>
         <TD align="center">״̬��</TD>
          <TD ><select><option>����</option><option>����</option></select></TD>
          <TD>���ѹ��</TD>
          <td><input type ="text" value="220" style="width:50px" /></td>
          <TD>�������</TD>
          <td><input type ="text" value="20"  style="width:50px" /></td>
          
          <TD ><INPUT type="button" value="��ѯ"  name="search"></TD>
           <TD ><INPUT type="button" value="���" onClick="javascript:window.location.href='spjkxt_add.jsp'"></TD>
          </TR>
        </TBODY></TABLE>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>���</TH>
         
         
          <TH scope=col>��ش���</TH>
           <TH scope=col>����ͺ�</TH>
            <TH scope=col>��λ</TH>
             <TH scope=col>��������</TH>
              <TH scope=col>��������</TH>
               <TH scope=col>Ͷ������</TH>
               <TH scope=col>��ע</TH>
                <TH scope=col>���</TH>
                <TH scope=col>�߱�����</TH>
            <TH scope=col>ɾ��</TH>
            <TH scope=col>�༭</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>����ǣ�������</td>
					<td>KGW-0128</td>
					<td>��</td>
					<td>
					  ��������ϵͳ�������޹�˾					</td>
					<td>
						2008-10-23 
					</td>
					<td>2005-05-29</td>
					<td>&nbsp;</td>
					<td>2009</td>
					<td>���</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
					��ɳǣ�������</td>
					<td>GBW-45</td>
					<td>��</td>
					<td>
						����̫�����޹�˾</td>
					<td>2008-09-13</td>
					<td>2004-09-21</td>
					<td>&nbsp;</td>
					<td>2007</td>
					<td>���</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>�عر�������</td>
					<td>UK-PLOAR</td>
					<td>��</td>
					<td>
					  �人Ӣ����·�����豸�������޹�˾					</td>
					<td>2006-05-19</td>
					<td>2001-09-21</td>
					<td>&nbsp;</td>
					<td>2002</td>
					<td>���</td>
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
					<td>KGW-0128</td>
					<td>��</td>
					<td>
					  ��������ϵͳ�������޹�˾					</td>
					<td>
						2008-10-23 
					</td>
					<td>2005-05-29</td>
					<td>&nbsp;</td>
					<td>2009</td>
					<td>���</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
					��ɳǣ�������</td>
					<td>GBW-45</td>
					<td>��</td>
					<td>
						����̫�����޹�˾</td>
					<td>2008-09-13</td>
					<td>2004-09-21</td>
					<td>&nbsp;</td>
					<td>2007</td>
					<td>���</td>
					<td>
						<a href="#">ɾ��</a>
					</td>
					<td>
						<a href="#">�༭</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>�عر�������</td>
					<td>UK-PLOAR</td>
					<td>��</td>
					<td>
					  �人Ӣ����·�����豸�������޹�˾					</td>
					<td>2006-05-19</td>
					<td>2001-09-21</td>
					<td>&nbsp;</td>
					<td>2002</td>
					<td>���</td>
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
