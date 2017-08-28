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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt;远动系统</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle>远动系统</TD>
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
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="长沙开闭所"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>设备分类：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="控制设备"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>规格型号：								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="GB212-003"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>RTU数量：</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="3"  name=DwRy2$txtTitle>
								</TD>
								
							  <TD>控制群数量：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="13"  name=DwRy2$txtTitle>
								</TD>
				<td>单位：</td>
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="套" onclick ="showcalendar(this)"   name=DwRy2$txtTitle></td>
								
							</TR>
							
                       	<tr>
							<td>生产厂家：</td>
							<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>ABB</option><option>阿城电器厂</option><option>北京国际系统控制有限公司</option><option>德国西门子公司</option></select></TD>
							<td  width=”10%“>出厂日期：</td>
							<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
							<td  width=”10%“>投运日期：</td>
							<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
							
		  </tr>
			<TR>
				<TD>年度： 
				</TD>
				
				<td colspan="2" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009"   name=DwRy2$txtTitle></td>
				<TD>备注： 
				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="远动系统控制作业用途"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="添加" onclick=history.back();><input type="button" onclick=history.back(); value="取消">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
