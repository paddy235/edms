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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>工具&nbsp; 
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
                    value=020100001 selected>梯子和挂梯</OPTION> <OPTION 
                    value=020200001>车梯</OPTION> <OPTION 
                    value=020300001>滑轮组</OPTION> <OPTION 
                    value=020400001>手搬葫芦</OPTION> <OPTION 
                    value=020500001>断线器</OPTION> <OPTION 
                    value=020600001>紧线器</OPTION> <OPTION 
                    value=020700001>接触线紧线紧固夹具</OPTION> <OPTION 
                    value=020800001>导线正弯器</OPTION> <OPTION 
                    value=020900001>接触网激光测量仪</OPTION> <OPTION 
                    value=021100001>皮尺</OPTION> <OPTION 
                    value=021200001>游标卡尺</OPTION> <OPTION 
                    value=021300001>水平尺及道尺</OPTION> <OPTION 
                    value=021400001>兆欧表</OPTION> <OPTION 
                    value=021500001>验电器</OPTION> <OPTION 
                    value=021600001>抛线</OPTION> <OPTION 
                    value=021700001>接地线</OPTION> <OPTION 
                    value=021800001>等电位杆</OPTION> <OPTION 
                    value=021900001>安全带</OPTION> <OPTION 
                    value=022000001>绝缘手套</OPTION> <OPTION 
                    value=022100001>防护用信号旗</OPTION> <OPTION 
                    value=022200001>手信号灯</OPTION> <OPTION 
                    value=022300001>升降弓信号标志</OPTION> <OPTION 
                    value=022400001>防护电话</OPTION> <OPTION 
                    value=022500001>数码照相机</OPTION> <OPTION 
                    value=022600001>望远镜</OPTION> <OPTION 
                    value=022700001>其它设备</OPTION>
			
			</select>
           </td>
			<td>生产厂家：</td>
			<td>
			
			<input type="text" value="鑫旺集团" size="10"/>
			  
			</td>
				<td>规格型号：</td>
			<td>
			<input type="text" value="27"   size="10"/>
			</td>
			</tr>
			<tr>
			<td>单位：</td>
			<td><input type="text" value="个" size="10"/></td>
			<td>状态：</td>
			<td>
          <select> <option>已用</option><option>备用</option></select>
            </td>
				<td>数量：</td>
			<td><input type="text" value="24" size="10"/></td>
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
