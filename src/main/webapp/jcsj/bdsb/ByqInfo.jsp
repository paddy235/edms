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
<script type="text/javascript">
function ff()
{
 ///javascript:window.location.href='ByqInfo_add.jsp'
 var f=document.getElementById('select').value;
if(f=="020100001")
{ 
window.location.href='ByqInfo_add.jsp';
}
 else
 {
window.location.href='ByqInfo_add.jsp';
 }

}
</script>
	<body>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
			
				<TR>
					<TD style="HEIGHT: 24px"> 
						&nbsp;您现在所在位置: 首页--&gt; 基础数据--&gt;变电所设备
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>变电所设备&nbsp; 
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<br>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=1>
			<tr>
				<TD colspan="6">
					<SPAN style="FLOAT: left; WIDTH: auto; COLOR: #002499"><B>查询条件</B>
					</SPAN>
				</TD>
			</tr>
			<tr>
			<td>单位：</td>
			<td><select>
			<option>长沙变电所</option>
			<option>韶关变电所</option>
			</select></td>
			<td>设备名称：</td>
			<td>
			<select id="select">
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
			</tr>
			<tr>
			<td>状态：</td>
			<td>
			<select >
			   <option>运用</option>
			    <option>备用</option>
		    </select>
			</td>
			<td>额定电压：</td>
			<td><input type="text" value="27" size="10"/></td>
				<td>额定电流：</td>
			<td><input type="text" value="38" size="10"/></td>
			</tr>
			<tr>
				<td colspan="6" align="center">
					
					<input type="button"
						
						value="查询">
						<input type="button" value="添加"
						onclick="ff()">
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
          <TH scope=col>规格型号</TH>
           <TH scope=col>额定电压</TH>
            <TH scope=col>额定电流</TH>
             <TH scope=col>生产厂家</TH>
              <TH scope=col>出厂序号</TH>
               <TH scope=col>生产日期</TH>
                <TH scope=col>状态</TH>
                 <TH scope=col>备注</TH>
            <TH scope=col>查看详细</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>
						变压器
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						保定器材厂
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						运用
					</td><td>
						良好
					</td><td>
						<a href="ByqInfo_add.jsp">详细</a>
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
						变压器
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						保定器材厂
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						运用
					</td><td>
						良好
					</td><td>
						<a href="ByqInfo_add.jsp">详细</a>
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>
						变压器
					</td>
					<td>
						1988-05-26
					</td>
					<td>
						27
					</td>
					<td>
						23
					</td>
					<td>
						保定器材厂
					</td><td>
						2009080101
					</td><td>
						2008-2-9
					</td><td>
						运用
					</td><td>
						良好
					</td><td>
						<a href="ByqInfo_add.jsp">详细</a>
					</td>
				</tr>
			</TBODY>
		</table>
	</body>
</html>
