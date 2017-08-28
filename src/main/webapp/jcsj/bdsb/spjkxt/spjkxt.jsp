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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt; 视频监控系统
					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						视频监控系统查询&nbsp;
					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<TABLE  style="WIDTH: 100%" cellSpacing=0 cellPadding=0 border=0 >
        <TBODY>
        <TR >
         
          
          <TD>生产厂家：</TD>
          <TD > <select><option>北京国际系统控制有限公司</option><option>北京太格有限公司</option><option>武汉英康铁路电气设备工程有限公司</option></select></TD>
         <TD align="center">状态：</TD>
          <TD ><select><option>运用</option><option>备用</option></select></TD>
          <TD>额定电压：</TD>
          <td><input type ="text" value="220" style="width:50px" /></td>
          <TD>额定电流：</TD>
          <td><input type ="text" value="20"  style="width:50px" /></td>
          
          <TD ><INPUT type="button" value="查询"  name="search"></TD>
           <TD ><INPUT type="button" value="添加" onClick="javascript:window.location.href='spjkxt_add.jsp'"></TD>
          </TR>
        </TBODY></TABLE>
		<table class=table_without_detail_lines id=GridView1 
      style="WIDTH: 100%; WORD-BREAK: break-all; BORDER-COLLAPSE: collapse; WORD-WRAP: break-word" 
      cellSpacing=0 rules=cols border=1>
		  <TBODY>
		  <tr>
		   <TH scope=col>序号</TH>
         
         
          <TH scope=col>监控处所</TH>
           <TH scope=col>规格型号</TH>
            <TH scope=col>单位</TH>
             <TH scope=col>生产厂家</TH>
              <TH scope=col>出厂日期</TH>
               <TH scope=col>投运日期</TH>
               <TH scope=col>备注</TH>
                <TH scope=col>年度</TH>
                <TH scope=col>线别名称</TH>
            <TH scope=col>删除</TH>
            <TH scope=col>编辑</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>衡阳牵引变电所</td>
					<td>KGW-0128</td>
					<td>套</td>
					<td>
					  北京国际系统控制有限公司					</td>
					<td>
						2008-10-23 
					</td>
					<td>2005-05-29</td>
					<td>&nbsp;</td>
					<td>2009</td>
					<td>武广</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>
						2
					</td>
					<td>
					长沙牵引变电所</td>
					<td>GBW-45</td>
					<td>套</td>
					<td>
						北京太格有限公司</td>
					<td>2008-09-13</td>
					<td>2004-09-21</td>
					<td>&nbsp;</td>
					<td>2007</td>
					<td>武广</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>
						3
					</td>
					<td>韶关北开闭所</td>
					<td>UK-PLOAR</td>
					<td>套</td>
					<td>
					  武汉英康铁路电气设备工程有限公司					</td>
					<td>2006-05-19</td>
					<td>2001-09-21</td>
					<td>&nbsp;</td>
					<td>2002</td>
					<td>武广</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>4</td>
					<td>衡阳牵引变电所</td>
					<td>KGW-0128</td>
					<td>套</td>
					<td>
					  北京国际系统控制有限公司					</td>
					<td>
						2008-10-23 
					</td>
					<td>2005-05-29</td>
					<td>&nbsp;</td>
					<td>2009</td>
					<td>武广</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>
					长沙牵引变电所</td>
					<td>GBW-45</td>
					<td>套</td>
					<td>
						北京太格有限公司</td>
					<td>2008-09-13</td>
					<td>2004-09-21</td>
					<td>&nbsp;</td>
					<td>2007</td>
					<td>武广</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>韶关北开闭所</td>
					<td>UK-PLOAR</td>
					<td>套</td>
					<td>
					  武汉英康铁路电气设备工程有限公司					</td>
					<td>2006-05-19</td>
					<td>2001-09-21</td>
					<td>&nbsp;</td>
					<td>2002</td>
					<td>武广</td>
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
