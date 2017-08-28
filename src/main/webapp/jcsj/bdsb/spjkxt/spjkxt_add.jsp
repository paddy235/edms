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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt; 视频监控系统
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle> 
						视频监控系统&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=”15%“>
									监控处所：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="长沙牵引变电所"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>
									规格型号：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="KGB-0239"  name=DwRy2$txtTitle>
								</TD>
								
								<TD width=”15%“>
									单位：
								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="套"  name=DwRy2$txtTitle>
								</TD>
								
							</TR>
							<TR>
								<TD>生产厂家：</TD>
          						<TD colSpan=2 style="PADDING-LEFT: 5px"> <select><option>北京国际系统控制有限公司</option><option>北京太格有限公司</option><option>武汉英康铁路电气设备工程有限公司</option></select></TD>
								
								<TD>
					出厂日期：
				</TD>
				<TD  style="PADDING-LEFT: 5px" align=left >
					<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>
				</TD>
				<td>投运日期：</td>
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2009-08-31" onclick ="showcalendar(this)"   name=DwRy2$txtTitle></td>
								
							</TR>
							
                       	<tr>
							<td>年度：</td>
							<td style="PADDING-LEFT: 5px"  width=”10%“ colSpan=2><INPUT class=grayinput value="2008"   name=DwRy2$txtTitle></td>
							<td  width=”10%“>线别名称：</td>
							<td style="PADDING-LEFT: 5px"  width=”25%“ colspan="5"   >
							<INPUT class=grayinput  value="武广 "name=DwRy2$txtTitle>
							</td>
							
		  </tr>
			<TR>
				<TD>备注： 
				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="监视调车作业用途"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="添加" onclick=history.back();><input type="button" onclick=history.back(); value="取消">
				</td>
			</tr>

		</TABLE>
	</body>
</html>
