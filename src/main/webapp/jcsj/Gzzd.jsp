<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<html>
  <head>    
    <title>My JSP 'Algd.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css">   
    <script type="text/javascript" src="mycalendar2.js"></script>
    </head>
   <body>
    <form >
      <label>您当前的位置：技术资料---->规章制度</label>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
            <TD>发布单位:</TD> 
            <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
               <OPTION value=0018410201>广州供电调度室</OPTION> 
               <OPTION value=0018410201>李家段接触网工区</OPTION></SELECT>
            </TD>
            <TD>专业分类:</TD> 
            <TD><SELECT id=DrlLx style="WIDTH: 80px" > 
               <OPTION value=0018410201>接触网</OPTION>
               <OPTION value=0018410201>变电所</OPTION> 
               <OPTION value=0018410201>电力</OPTION></SELECT>
            </TD>
            <TD>类型名称:</TD> 
            <TD><SELECT id=DrlLx style="WIDTH: 80px" >
               <OPTION value=0018410201>抢修</OPTION>
                <OPTION value=0018410201>调度</OPTION>
               <OPTION value=0018410201>检修</OPTION>
               <OPTION value=0018410201>安全</OPTION></SELECT>
            </TD>
            <TD>名&nbsp; &nbsp;称:</TD> 
            <TD><INPUT id=txtmc style="WIDTH: 120px">
            </TD>    
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=查询 name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=新增 name=AddButton  onclick="window.location.href='GzzdAdd.jsp';"/></TD>
        </TR>
        <TR>
          <TD bgColor=#003366 colSpan=10 height=2></TD>
        </TR>
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="10" style="width:100%" align="left" valign="middle">规章制度信息</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >序号</td>
            <td nowrap>名称</td>
            <td>专业分类</td>
            <td>类型名称</td>
            <td nowrap width="40%">规章制度简述</td>
            <td>发布单位</td>
            <td>发布时间</td>
            <td>上传时间</td>
            <td nowrap>规章制度显示</td> 
            <td>操作</td>
         </tr>
          <tr>
            <td>1</td>
            <td>接触网故障抢修规则</td>
            <td>接触网</td>
            <td>抢修</td>
            <td>接触网....</td>
            <td>铁道部</td>
            <td>2009-09-01</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="Gzzd.doc">规章制度</a></td>
            <td><a href="GzzdAdd.jsp" target="_self">编辑</a>  <a href="#" target="_self">删除</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>铁路供电、水电调度规则</td>
            <td>接触网</td>
            <td>调度</td>
            <td>接触网....</td>
            <td>铁道部</td>
            <td>2009-09-01</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="Gzzd1.doc">规章制度</a></td>
            <td><a href="GzzdAdd.jsp" target="_self">编辑</a>  <a href="#" target="_self">删除</a>
            </td>
          </tr>
        </TABLE>  
       </form>       
    </body>
</html>
