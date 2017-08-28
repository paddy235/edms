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
						onclick="javascript:window.location.href='Gj_Add.jsp'">
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
						手搬葫芦
					</td>
					<td>
						1.5t
					</td>
					<td>
						个
					</td>
					<td>
						23
					</td>
					<td>
						2009-2-12
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
						手搬葫芦
					</td>
					<td>
						1.5t
					</td>
					<td>
						个
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
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
						手搬葫芦
					</td>
					<td>
						1.5t
					</td>
					<td>
						个
					</td>
					<td>
						23
					</td>
					<td>
						2009-12-12
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
