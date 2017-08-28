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
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>车辆&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
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
			<select >
			    <OPTION value=保定器材厂>保定器材厂</OPTION>
      <OPTION value=保定天威鑫通电气设备>保定天威鑫通电气设备</OPTION> 
		    </select>
			</td>
				<td>日期：</td>
			<td>
			<input type="text" value="2009-08-23"  onclick ="showcalendar(this)"  size="10"/>
			</td>
			</tr>
			
			<tr>
				<td colspan="8" align="center">
					
					<input type="button"
						
						value="查询">
						<input type="button" value="添加"
						onclick="javascript:window.location.href='Wdlcl_Info.jsp'">
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
          <TH scope=col>车号</TH>
           <TH scope=col>车型</TH>
            <TH scope=col>载重(吨)</TH>
             <TH scope=col>自重(吨)</TH>
              <TH scope=col>停放地点</TH>
               <TH scope=col>生产日期</TH>
                <TH scope=col>单位</TH>
                 <TH scope=col>备注</TH>
            <TH scope=col>查看详细</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						轨道平车
					</td>
					<td>
						湘A-80213
					</td>
					<td>
						货车
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						长沙检修工区
					</td><td>
						2008-2-9
					</td><td>
						辆
					</td><td>
						良好
					</td><td>
						详细
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						轨道平车
					</td>
					<td>
						湘A-80213
					</td>
					<td>
						货车
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						长沙检修工区
					</td><td>
						2008-2-9
					</td><td>
						辆
					</td><td>
						良好
					</td><td>
						详细
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						轨道平车
					</td>
					<td>
						湘A-80213
					</td>
					<td>
						货车
					</td>
					<td>
						23
					</td>
					<td>
						12
					</td><td>
						长沙检修工区
					</td><td>
						2008-2-9
					</td><td>
						辆
					</td><td>
						良好
					</td><td>
						详细
					</td>
				</tr>
			</TBODY>
		</table>
	</body>
</html>
