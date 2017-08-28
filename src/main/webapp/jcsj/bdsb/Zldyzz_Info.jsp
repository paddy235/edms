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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据--&gt;变电所设备
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>直流电源装置&nbsp; 
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
			  直流电源装置
           </td>
			<td>生产厂家：</td>
			<td>
			
			<input type="text" value="保定器材厂" size="10"/>
			  
			</td>
				<td>状态：</td>
			<td>
			<select >
			   <option>运用</option>
			    <option>备用</option>
		    </select>
			</td>
			</tr>
			<tr>
			<td>规格型号：</td>
			<td><input type="text" value="27.5(35)KV" size="10"/></td>
			<td>运行编号：</td>
			<td><input type="text" value="K0081" size="10"/></td>
				<td>整组额定电压(KV)：</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr>
			<tr>
			<td>额定容量：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>组数：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>额定电流(KA)：</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			<tr>
			<td>单只额定电压：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp; <br></td>
			<td>&nbsp;</td>
			</tr>
			<tr>
			<td>相数：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>绝缘油耗：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>总重：</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			<tr>
			<td>电压比(KV/KV)：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>0.5级容量(VA)：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>1级容量：</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			<tr>
			<td>三级容量：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			<td>最大容量：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>额定电容值：</td>
			<td><input type="text" value="386" size="10"/></td>
			</tr>
			<tr>
				<td>单位：</td>
			<td><input type="text" value="台"   size="10"/></td>
			
					<td>安装日期：</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			
				<td>投运日期：</td>
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
