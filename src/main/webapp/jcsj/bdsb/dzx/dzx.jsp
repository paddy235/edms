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
						&nbsp;您现在所在位置: 首页--&gt; 基础数据 --&gt; 端子箱					</TD>
				</TR>
				<TR>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						端子箱查询&nbsp;					</TD>
				</TR>
				<TR>
					<TD bgColor=#003366 colSpan=6 height=2></TD>
				</TR>
			
		</TABLE>
		<TABLE  style="WIDTH: 100%" cellSpacing=0 cellPadding=0 border=0 >
        <TBODY>
        <TR >
         
          
          <TD>运行环境：</TD>
          <TD > <select><option>室内</option><option>室外</option></select></TD>
         <TD align="center">类别：</TD>
          <TD ><select><option>铝合金</option><option>喷塑</option><option>不锈钢</option><option>喷漆</option></select></TD>
          
          <TD ><INPUT type="button" value="查询"  name="search"></TD>
           <TD ><INPUT type="button" value="添加" onClick="javascript:window.location.href='dzx_add.jsp'"></TD>
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
            <TH scope=col>运行编号</TH>
             <TH scope=col>运行环境</TH>
              <TH scope=col>类别</TH>
               
            <TH scope=col>删除</TH>
            <TH scope=col>编辑</TH>
		  </tr>
				<tr>
					<td>
						1
					</td>
					<td>武广牵引变电所</td>
					<td>电气</td>
					<td>WG-KG0012</td>
					<td>室内</td>
					<td>铝合金 </td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>衡阳牵引变电所</td>
					<td>电气</td>
					<td>WG-KG0019</td>
					<td>室外</td>
					<td>喷塑</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>武广牵引变电所</td>
					<td>电气</td>
					<td>WG-KG0012</td>
					<td>室内</td>
					<td>铝合金 </td>
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
					<td>电气</td>
					<td>WG-KG0019</td>
					<td>室外</td>
					<td>喷塑</td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td>武广牵引变电所</td>
					<td>电气</td>
					<td>WG-KG0012</td>
					<td>室内</td>
					<td>铝合金 </td>
					<td>
						<a href="#">删除</a>
					</td>
					<td>
						<a href="#">编辑</a>
					</td>
				</tr>
				<tr>
					<td>6</td>
					<td>衡阳牵引变电所</td>
					<td>电气</td>
					<td>WG-KG0019</td>
					<td>室外</td>
					<td>喷塑</td>
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
