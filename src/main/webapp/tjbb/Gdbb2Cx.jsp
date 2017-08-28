<%@ page language="java" import="java.util.*" pageEncoding="Gb2312"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'Gdbb1Cx.jsp' starting page</title>
    <link rel="stylesheet" href="Report.css" type="text/css"></link>
    <link rel="stylesheet" href="StyleSheet.css" type="text/css"></link>
   </head>
  
  <body>
    <div>
    <table width="99%" border="0" cellpadding="0" cellspacing="0">
    <tr><td colspan=2 style="height: 16px">
 		您当前所在的位置：统计报表---->牵引供电故障跳闸及事故概况表（机电报表2）
    </td></tr>
    <tr height="10"></tr>
    <tr height="30">
      <td  align="left">
      选择单位<select name="dllx" onchange="javascript:setTimeout('__doPostBack(\'dllx\',\'\')', 0)" id="dllx" class="dropDownList" style="width:120px;">
	  <option selected="selected" value="请选择">请选择</option>
	  <option value="">广州供电段</option>
</select>
        选择类型<select name="dllx" onchange="javascript:setTimeout('__doPostBack(\'dllx\',\'\')', 0)" id="dllx" class="dropDownList" style="width:62px;">
	<option selected="selected" value="请选择">请选择</option>
	<option value="年报">年报</option>
	<option value="半年报">半年报</option>
	<option value="季报">季报</option>
	<option value="累计报">累计报</option>
	<option value="月报">月报</option>

</select>
         年份<select name="dln" id="dln" class="dropDownList" style="width:55px;">
	<option value="2005">2005</option>
	<option value="2006">2006</option>
	<option value="2007">2007</option>
	<option value="2008">2008</option>
	<option selected="selected" value="2009">2009</option>
	<option value="2010">2010</option>

</select>
        月份<select name="dlqsy" id="dlqsy" class="dropDownList" style="width:40px;">
	<option selected="selected" value=""></option>
	<option value="01">01</option>
	<option value="02">02</option>
	<option value="03">03</option>
	<option value="04">04</option>
	<option value="05">05</option>
	<option value="06">06</option>
	<option value="07">07</option>
	<option value="08">08</option>
	<option value="09">09</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>

</select>
        <input type="submit" name="Button1" value="查询" id="Button1" class="blueButtonCss" />
      </td>
      <td  align="right">
</td></tr> 
        <tr><td colspan="2">
            <div>
	<table class="a11" cellspacing="0" cellpadding="0" border="0" id="GridView1" style="background-color:White;border-width:1px;border-style:solid;width:100%;border-collapse:collapse;color: black; text-decoration: none">
		<tr class="a10" style="color:#002459;">
			<th scope="col">报表年份</th><th scope="col">报表月份</th><th scope="col">填报单位</th><th scope="col">填报人</th><th scope="col">填报日期</th><th scope="col">详细</th>
		</tr><tr align="center" style="background-color:#CFDDF0;border-width:1px;border-style:solid;height:24px;">
			<td>2009</td><td>03</td><td>雷靠民</td><td>杜悦良</td><td>2009-03-28</td><td align="center"><input type="button" value="查看详细" onclick="window.location.href='Gdbb2_1Tb.jsp';" class="blueButtonCss2" style="width:60px;" /></td>
		</tr>
	</table>
</div>
            <span id="Label1"></span></td></tr>
    </table>
    </div>
  </body>
</html>
