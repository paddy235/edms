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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt;V停系统</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						V停系统查询&nbsp;					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<TABLE  style="WIDTH: 100%" cellSpacing=0 cellPadding=0 border=0 >
        <TBODY>
        <TR >
         
          
          <TD>生产厂家：</TD>
          <TD > <select><option>（国电）南京自动化设备有限公司</option><option>天津长城有限公司</option><option>成都光芒实业有限公司</option></select></TD>
         <td>投运日期：</td>
				<td ><INPUT class=grayinput value="2009-08-31" onclick ="showcalendar(this)"   name=DwRy2$txtTitle></td>
				 
          <TD ><INPUT type="button" value="查询"  name="search"></TD>
           <TD ><INPUT type="button" value="添加" onClick="javascript:window.location.href='vtxt_add.jsp'"></TD>
          </TR>
        </TBODY></TABLE>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>序号</TH>
         
         
          <TH scope=col>单位名称</TH>
           <TH scope=col>设备分类</TH>
            <TH scope=col>规格型号</TH>
             <TH scope=col>温控柜数量</TH>
              <TH scope=col>控制群数量</TH>
               <TH scope=col>单位</TH>
               <TH scope=col>生产厂家</TH>
                <TH scope=col>出厂日期</TH>
                <TH scope=col>投运日期</TH>
            <TH scope=col>备注</TH>
            <TH scope=col>年度</TH>
			<TH scope=col>删除</TH>
            <TH scope=col>编辑</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>衡阳牵引变电所</td>
					<td>控制设备</td>
					<td>KGW-0128</td>
					<td>
					  3</td>
					<td>
						324 
					</td>
					<td>套 </td>
					<td>（国电）南京自动化设备有限公司</td>
					<td>2009-03-26</td>
					<td>2009-09-02</td>
					<td>控制群数量为34</td>
					<td>2008</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>武广牵引变电所</td>
					<td>控制设备</td>
					<td>GB212-003</td>
					<td>6</td>
					<td>25</td>
					<td>套 </td>
					<td>成都光芒实业有限公司</td>
					<td>2004-02-27</td>
					<td>2009-07-01</td>
					<td>成都光芒公司生产</td>
					<td>2007</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>衡阳牵引变电所</td>
					<td>控制设备</td>
					<td>KGW-0128</td>
					<td>
					  3</td>
					<td>
						324 
					</td>
					<td>套 </td>
					<td>（国电）南京自动化设备有限公司</td>
					<td>2009-03-26</td>
					<td>2009-09-02</td>
					<td>控制群数量为34</td>
					<td>2008</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>武广牵引变电所</td>
					<td>控制设备</td>
					<td>GB212-003</td>
					<td>6</td>
					<td>25</td>
					<td>套 </td>
					<td>成都光芒实业有限公司</td>
					<td>2004-02-27</td>
					<td>2009-07-01</td>
					<td>成都光芒公司生产</td>
					<td>2007</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				
			</TBODY>
		</table>
	</body>
</html>
