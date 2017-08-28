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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>变压器&nbsp; 
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
                    value=020100001 selected>变压器</OPTION> <OPTION 
                    value=020200001>断路器</OPTION> <OPTION 
                    value=020300001>隔离开关</OPTION> <OPTION 
                    value=020400001>负荷开关</OPTION> <OPTION 
                    value=020500001>组合电器</OPTION> <OPTION 
                    value=020600001>电压互感器</OPTION> <OPTION 
                    value=020700001>电流互感器</OPTION> <OPTION 
                    value=020800001>固定无功补偿装置</OPTION> <OPTION 
                    value=020900001>动态无功补偿装置</OPTION> <OPTION 
                    value=021100001>直流电源装置</OPTION> <OPTION 
                    value=021200001>电缆</OPTION> <OPTION 
                    value=021300001>母线</OPTION> <OPTION 
                    value=021400001>避雷器</OPTION> <OPTION 
                    value=021500001>避雷针</OPTION> <OPTION 
                    value=021600001>抗雷圈</OPTION> <OPTION 
                    value=021700001>放电装置</OPTION> <OPTION 
                    value=021800001>绝缘在线监测设备</OPTION> <OPTION 
                    value=021900001>高压柜</OPTION> <OPTION 
                    value=022000001>低压盘(柜)</OPTION> <OPTION 
                    value=022100001>综合自动化系统</OPTION> <OPTION 
                    value=022200001>故障判断装置</OPTION> <OPTION 
                    value=022300001>远动系统</OPTION> <OPTION 
                    value=022400001>V停系统</OPTION> <OPTION 
                    value=022500001>端子箱</OPTION> <OPTION 
                    value=022600001>视频监控系统</OPTION> <OPTION 
                    value=022700001>其它设备</OPTION>
			
			</select>
           </td>
			<td>生产厂家：</td>
			<td>
			<select >
			    <OPTION value=保定器材厂>保定器材厂</OPTION>
      <OPTION value=保定天威鑫通电气设备>保定天威鑫通电气设备</OPTION> 
		    </select>
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
			<td>规格编号：</td>
			<td><input type="text" value="H-187" size="10"/></td>
			<td>运行编号：</td>
			<td><input type="text" value="K0081" size="10"/></td>
				<td>额定电压(KV)：</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr>
			<tr>
			<td>额定电流(KA)：</td>
			<td><input type="text" value="36" size="10"/></td>
			<td>额定容量(kVA)：</td>
			<td><input type="text" value="18" size="10"/></td>
				<td>相数：</td>
			<td><input type="text" value="3"  "  size="10"/></td>
			</tr>
			<tr>
			<td>接线组别：</td>
			<td><input type="text" value="1" size="10"/></td>
			<td>冷却方式：</td>
			<td><input type="text" value="热冷却" size="10"/></td>
				<td>空载电流(A)：</td>
			<td><input type="text" value="23"  size="10"/></td>
			</tr>
			<tr>
			<td>空载消耗(KW)：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>短路消耗(KW)：</td>
			<td><input type="text" value="38" size="10"/></td>
				<td>阻抗电压(%)：</td>
			<td><input type="text" value="27"   size="10"/></td>
			</tr><tr>
			<td>绝缘油耗：</td>
			<td><input type="text" value="27" size="10"/></td>
			<td>油重(KG)：</td>
			<td><input type="text" value="386" size="10"/></td>
				<td>器身重(KG)：</td>
			<td><input type="text" value="3"   size="10"/></td>
			</tr><tr>
			<td>附件总重(KG)：</td>
			<td><input type="text" value="7" size="10"/></td>
			<td>总重(KG)：</td>
			<td><input type="text" value="18" size="10"/></td>
				<td>单位：</td>
			<td><input type="text" value="台"   size="10"/></td>
			</tr>
			<tr>
			<td>出厂日期：</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			<td>出厂序号：</td>
			<td><input type="text" value="20090102002" size="10"/></td>
				<td>安装日期：</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			</tr>
			<tr>
			<td>投运日期：</td>
			<td><input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/></td>
			<td>备注：</td>
			<td><input type="text" value="正常" size="10"/></td>
				<td>&nbsp;</td>
			<td>&nbsp;</td>
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
