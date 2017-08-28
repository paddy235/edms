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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>材料&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=8 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			<tr>
				<TD colspan="8">
					<SPAN style="FLOAT: left; WIDTH: auto; COLOR: #002499"><B>查询条件</B>
					</SPAN>
				</TD>
			</tr>
			<tr>
			<td>单位：</td>
			<td><select>
			<option>长沙检修网工区</option>
			<option>韶关检修网工区</option>
			</select></td>
			<td>设备名称：</td>
			<td>
			<select>
			<OPTION 
                    value=020100001 selected>轻型支柱 </OPTION> <OPTION 
                    value=020200001>支柱</OPTION> <OPTION 
                    value=020300001>常用的定位支撑结构</OPTION> <OPTION 
                    value=020400001>非常用的腕臂固定底座</OPTION> <OPTION 
                    value=020500001>软定位器</OPTION> <OPTION 
                    value=020600001>隧道内悬挂及定位埋入杆件</OPTION> <OPTION 
                    value=020700001>补偿滑轮</OPTION> <OPTION 
                    value=020800001>坠砣</OPTION> <OPTION 
                    value=020900001>锚板及拉线</OPTION> <OPTION 
                    value=021100001>承力索及接触线</OPTION> <OPTION 
                    value=021200001>供电线、正馈线</OPTION> <OPTION 
                    value=021300001>回流线、保护线及架空地线</OPTION> <OPTION 
                    value=021400001>钢绞线</OPTION> <OPTION 
                    value=021500001>电连接线</OPTION> <OPTION 
                    value=021600001>承力索终端线夹</OPTION> <OPTION 
                    value=021700001>附加导线终端线夹</OPTION> <OPTION 
                    value=021800001>接触线终端线夹</OPTION> <OPTION 
                    value=021900001>接触线接头线夹</OPTION> <OPTION 
                    value=022000001>承力索接头线夹</OPTION> <OPTION 
                    value=022100001>附加导线接头线夹</OPTION> <OPTION 
                    value=022200001>横承力索线夹</OPTION> <OPTION 
                    value=022300001>定位环线夹</OPTION> <OPTION 
                    value=022400001>球头挂环</OPTION> <OPTION 
                    value=022500001>开式螺旋扣</OPTION> <OPTION 
                    value=022600001>悬式绝缘子</OPTION> <OPTION 
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
				<td>规格：</td>
			<td>
			<input type="text" value="1.5t"   size="10"/>
			</td>
			</tr>
			
			<tr>
				<td colspan="8" align="center">
					
					<input type="button"
						
						value="查询">
						<input type="button" value="添加"
						onclick="javascript:window.location.href='Wl_Add.jsp'">
				</td>
			</tr>

		</TABLE>
		<br>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>序号</TH>
         
          <TH scope=col>设备名称</TH>
          <TH scope=col>规格</TH>
           <TH scope=col>单位</TH>
            <TH scope=col>数量</TH>
             
               <TH scope=col>生产日期</TH>
              
                 <TH scope=col>备注</TH>
            <TH scope=col>查看详细</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						补偿滑轮 
					</td>
					<td>
						各种变比
					</td>
					<td>
						套
					</td>
					<td>
						23
					</td>
					<td>
						2009-2-12
					</td><td>
						视管内情况定
					</td><td>
						详细
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						补偿滑轮 
					</td>
					<td>
						各种变比
					</td>
					<td>
						套
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
					</td><td>
						视管内情况定
					</td><td>
						详细
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						补偿滑轮 
					</td>
					<td>
						各种变比
					</td>
					<td>
						套
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
					</td><td>
						视管内情况定
					</td><td>
						详细
					</td>
				</tr>
			</TBODY>
		</table>
	</body>
</html>
