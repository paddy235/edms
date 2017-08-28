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
      <label>您当前的位置：人员管理---->人员查询</label>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
          <TD style="HEIGHT: 20px" align="right" width="7%">职 员 姓 名:</TD>
          <TD align="left" style="WIDTH: 160px" nowrap>
          <INPUT id="" style="WIDTH: 140px" onfocus="setday(this)" name=></TD>
           <TD style="HEIGHT: 20px" align="right" width="7%">职员工号:</TD>
           <TD align="left" style="WIDTH: 160px" nowrap>
          <INPUT id=txtQsrq style="WIDTH: 140px" onfocus="setday(this)" name=txtQsrq></TD>
          <TD style="HEIGHT: 20px" align="right" width="7%">所属级别:</TD>
           <TD align="left" style="WIDTH: 80px" nowrap>
          <Select id=txtQsrq style="WIDTH: 60px" onfocus="setday(this)" name=txtQsrq></TD>
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=查询 name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=新增 name=AddButton  onclick="window.location.href='userinfo_manage.jsp';"/></TD>
        </TR>
        
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="12" style="width:100%" align="left" valign="middle">人员信息</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >序号</td>
            <td nowrap>职员姓名</td>
            <td>所属级别</td>
            <td>所属部门</td>
            <td>职务</td>
            <td>专业</td>
            <td>技能等级</td>
            <td>安全等级</td>
            <td>办公室电话</td> 
            <td>手机号码</td>
            <td>查看</td></tr>
          <tr>
            <td>1</td>
            <td>李大林</td>
            <td>白班</td>
            <td>武汉北接触网工区</td>
            <td>网工</td>
            <td>接触网</td>
            <td>供电</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">详细资料</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>李大林</td>
            <td>白班</td>
            <td>武汉北接触网工区</td>
            <td>网工</td>
            <td>接触网</td>
            <td>供电</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">详细资料</a></td>
          </tr>
                    <tr>
            <td>1</td>
            <td>李大林</td>
            <td>白班</td>
            <td>武汉北接触网工区</td>
            <td>网工</td>
            <td>接触网</td>
            <td>供电</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">详细资料</a></td>
          </tr>
                    <tr>
            <td>1</td>
            <td>李大林</td>
            <td>白班</td>
            <td>武汉北接触网工区</td>
            <td>网工</td>
            <td>接触网</td>
            <td>供电</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">详细资料</a></td>
          </tr>           
        </TABLE>  
       </form>       
    </body>
</html>
