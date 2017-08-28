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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据--&gt;料具管理
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>轨道车&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			
			<tr>
			<td>设备名称：</td>
			<td>
			 <select>
			<OPTION 
                    value=020100001 selected>轨道平车</OPTION> <OPTION 
                    value=020200001>轨道车</OPTION> <OPTION 
                    value=020300001>接触网作业车</OPTION> <OPTION 
                    value=020400001>轨道吊车</OPTION> <OPTION 
                    value=020500001>接触网架线车</OPTION> <OPTION 
                    value=020600001>接触网放线车</OPTION> <OPTION 
                    value=020700001>接触网巡检车</OPTION> <OPTION 
                    value=020800001>公铁两用车</OPTION> <OPTION 
                    value=020900001>接触网综合检测车</OPTION> <OPTION 
                    value=021100001>罐车</OPTION> <OPTION 
                    value=021200001>其它</OPTION> 
			
			</select>
           </td>
			<td>生产厂家：</td>
			<td>
			
			<input type="text" value="青岛解放" size="10"/>
			  
			</td>
				<td>车型：</td>
			<td>
			<input type="text" value="27"   size="10"/>
			</td>
			</tr>
			<tr>
			<td>车号：</td>
			<td><input type="text" value="27.5(35)KV" size="10"/></td>
			<td>载重(吨)：</td>
			<td><input type="text" value="K0081" size="10"/></td>
				<td>自重(吨)：</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr>
			<tr>
			<td>停放地点：</td>
			<td><input type="text" value="长沙检修网工区"  "  size="10"/></td>
			<td>单位：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>数量：</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			
			
			
			
			
			<tr>
				<td>用途：</td>
			<td><input type="text" value="干活"   size="10"/></td>
			
					<td>记事：</td>
			<td><input type="text" value="无"   size="10"/></td>
			
				<td>投运日期<br></td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
			</tr>
			<tr>
				<td>出厂日期：</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
		
					<td>出厂序号：</td>
			<td><input type="text" value="20090102002" size="10"/></td>
		
					<td>备注：</td>
			<td><input type="text" value="正常" size="10"/></td><td>&nbsp;</td>
		
			</tr>
			<tr>
			
			</tr>
			
			
			<tr>
				<td colspan="6" align="center">
						<input type="button" value="添加"
						onclick="history.back();">
						<input type="button"
						onclick="history.back();"
						value="取消">
				</td>
			</tr>

		</TABLE>
		
	</body>
</html>
