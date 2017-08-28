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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt;端子箱</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle> 
						端子箱&nbsp;					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=”15%“>单位名称：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="长沙牵引变电所"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>设备分类：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="电气"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>运行编号：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="WG-KG0012"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>运行环境：</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>室内</option><option>室外</option></select></TD>
								
								<TD>类别：</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>铝合金</option><option>喷塑</option><option>不锈钢</option><option>喷漆</option></select></TD>
								
								
							</TR>
							
                
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="添加" onclick=history.back();><input type="button" onclick=history.back(); value="取消">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
