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
 		����ǰ���ڵ�λ�ã�ͳ�Ʊ���---->ǣ�����硢ˮ���¹��ٱ������籨��6��
    </td></tr>
    <tr height="10"></tr>
    <tr height="30">
<td  align="right">
        <select name="dlYear2" id="dlYear2" class="dropDownList" style="width:55px;">
	<option value="2007">2007</option>
	<option value="2008">2008</option>
	<option selected="selected" value="2009">2009</option>
	<option value="2010">2010</option>
	<option value="2011">2011</option>
	<option value="2012">2012</option>

</select>��
        <select name="dlMonth2" id="dlMonth2" class="dropDownList" style="width:40px;">
	<option value="01">01</option>
	<option value="02">02</option>
	<option value="03">03</option>
	<option value="04">04</option>
	<option value="05">05</option>
	<option value="06">06</option>
	<option value="07">07</option>
	<option value="08">08</option>
	<option selected="selected" value="09">09</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>

</select>��
        <input type="submit" name="Button2" value="���ɱ���" id="Button2" onclick="window.location.href='Gdbb6Tb.jsp';" class="blueButtonCss" />
        </td>
      <td  align="right">
</td></tr> 
        <tr><td colspan="2">
            <div>
	<table class="a11" cellspacing="0" cellpadding="0" border="0" id="GridView1" style="background-color:White;border-width:1px;border-style:solid;width:100%;border-collapse:collapse;color: black; text-decoration: none">
		<tr class="a10" style="color:#002459;">
			<th scope="col">�������</th><th scope="col">�����·�</th><th scope="col">���λ</th><th scope="col">���</th><th scope="col">�����</th><th scope="col">��ϸ</th><th scope="col">ɾ��</th>
		</tr><tr align="center" style="background-color:#CFDDF0;border-width:1px;border-style:solid;height:24px;">
			<td>2009</td><td>03</td><td>�׿���</td><td>������</td><td>2009-03-28</td><td align="center"><input type="button" value="�鿴��ϸ"  onclick="window.location.href='Gdbb6Tb.jsp';" class="blueButtonCss2" style="width:60px;" /></td>
			<td align="center">
            <input type="submit" name="GridView1$ctl02$Button2" value="ɾ��" onclick="javaScript:return confirm('���棺ȷ��Ҫɾ��������');" id="GridView1_ctl02_Button2" class="blueButtonCss2" />
		</tr>
	</table>
</div>
            <span id="Label1"></span></td></tr>
    </table>
    </div>
  </body>
</html>
