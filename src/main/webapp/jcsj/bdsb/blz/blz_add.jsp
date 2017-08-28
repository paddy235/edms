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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt;<SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">避雷针</SPAN></TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 5px" align=middle><SPAN id="ctl00_ContentPlaceHolder1_GridView1_ctl02_dropSbmc1">避雷针</SPAN></TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1 >
							<TR>
								<TD width=10%>单位名称：								</TD>
								<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="武广开闭所"  name=DwRy2$txtTitle>								</TD>
								
								<TD width=10%>设备分类：								</TD>
								<TD width="23%" colSpan=1 align=left style="PADDING-LEFT: 5px">
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="避雷针"  name=DwRy2$txtTitle>								</TD>
				
								<TD width=10%>规格型号：								</TD>
								<TD width="23%" colSpan=2 align=left style="PADDING-LEFT: 5px">
							    <INPUT class=grayinput id=DwRy2_txtTitle  value="MODEL-W2314"  name=DwRy2$txtTitle>								</TD>
							</TR>
							<TR>
								<TD>设备数量：</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="10"  name=DwRy2$txtTitle>								</TD>
								
							  <TD>运行编号：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="RunningModel-100398"  name=DwRy2$txtTitle>							  </TD>
							  <TD>额定电压：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="110kv"  name=DwRy2$txtTitle>							  </TD>
							</TR>
						<TR>
								<TD>高度：</TD>
          						<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="14.5"  name=DwRy2$txtTitle>								</TD>
								
							  <TD>类别：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left >
									 <select><option>升降式</option><option>固定式</option></select>					  </TD>
							  
		  </TR>							
							
                       	<tr>
							<TD>工频电压：				</TD>
				            <TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="27.5kv"  name=DwRy2$txtTitle>							  </TD>
							<td>自灭弧能力：</td>
							<TD colSpan=1 style="PADDING-LEFT: 5px"> <INPUT class=grayinput id=DwRy2_txtTitle  value="12.5kv"  name=DwRy2$txtTitle>	</TD>
				
							<td  width=10%>承受短路电流能力：</td>
							<TD  style="PADDING-LEFT: 5px" align=left colspan="1" >
					<INPUT class=grayinput id=DwRy2_txtTitle  value="37A"  name=DwRy2$txtTitle>				</TD>
				
		  </tr>
			<TR>
				<TD>主要部件构成：				</TD>
				<TD style="PADDING-LEFT: 5px" align=left colSpan=2>
									 <INPUT class=grayinput id=DwRy2_txtTitle  value="避雷针、避雷塔座"  name=DwRy2$txtTitle>						  </TD>
				<td colspan="1">单位：</td>
							<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput id=DwRy2_txtTitle  value="台"  name=DwRy2$txtTitle>			</TD>
				<TD>生产厂家：				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><select><option>保定器材厂</option><option>北京灯塔电气有限责任公司</option><option>电化局天津器材厂</option></select></td>
				
			</TR>
			<TR>
				<TD colspan="1">出厂日期：				</TD>
				
				<td colspan="2"><INPUT class=grayinput value="2007-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				<td colspan="1">出厂序号：</td>
							<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput id=DwRy2_txtTitle  value="SN：70001-34598"  name=DwRy2$txtTitle>				</TD>
				<TD>投运日期：				</TD>
				
				<TD width="24%" align=left  style="PADDING-LEFT: 5px" colspan="1" >
				<INPUT class=grayinput value="2009-08-30" onclick ="showcalendar(this)"   name=DwRy2$txtTitle>				</TD>
				
			</TR>
			<TR>
				<TD>备注：				</TD>
				
				<td colspan="2" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="避雷设备"   name=DwRy2$txtTitle></td>
				<TD>年度：				</TD>
				
				<td colspan="1" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="2008"   name=DwRy2$txtTitle></td>
				<TD>主要部件：				</TD>
				
				<td colspan="4" style="PADDING-LEFT: 5px"><INPUT class=grayinput value="避雷针、接地引线"   name=DwRy2$txtTitle></td>
			</TR>
			<tr>
				<td colspan="5" align="center">
					<input type="button" value="添加" onclick=history.back();><input type="button" onclick=history.back(); value="取消">				</td>
			</tr>
		</TABLE>
	    <blockquote>&nbsp;	</blockquote>
	</body>
</html>
