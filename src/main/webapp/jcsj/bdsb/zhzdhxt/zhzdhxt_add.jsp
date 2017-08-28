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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt;综合自动化系统</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle>综合自动化系统</TD>
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
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="武广牵引变电所"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>设备分类：								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="综合自动化设备"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>规格型号：								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="MODEL-W2314"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>运行编号：</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="RUNNING MODEL-98001"  name=DwRy2$txtTitle>
								</TD>
								
							  <TD>装置构成：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="数据采集、处理、综合分析"  name=DwRy2$txtTitle>
							  </TD>
							  <TD>单位：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="套"  name=DwRy2$txtTitle>
							  </TD>
								
							</TR>
							
                       	<tr>
							<td>生产厂家：</td>
							<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>ABB</option><option>北京清华紫光</option><option>许继集团有限公司</option></select></TD>
				
							<td  width=”10%“>出厂日期：</td>
							<TD  style="PADDING-LEFT: 5px" align=left colspan="1" >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
				<TD>出厂序号：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="SN:2008-01340551"  name=DwRy2$txtTitle>
						  </TD>
							
							
		  </tr>
			<TR>
				<td  width=”10%“ colspan="2">投运日期：</td>
							<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
				<TD>年度： 
				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009"   name=DwRy2$txtTitle></td>
				<TD>备注： 
				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="综合自动化系统"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="添加" onclick=history.back();><input type="button" onclick=history.back(); value="取消">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
