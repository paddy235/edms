<%@ page language="java" import="java.util.*" pageEncoding="Gb2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html >
<head id="Head1"><title>
	�������ϸſ������籨��3��
</title>
    <link href="Report.css" rel="stylesheet" type="text/css" /> 
    <link rel="stylesheet" href="default.css" type="text/css"></link>
  </head>
  
  <body>
       <div style="width:100%;height:100%;overflow-x:auto;overflow-y:auto">  
     <table id="TABLE2" border="0" cellpadding="0" cellspacing="0" width="80%">
           <tr><td colspan="11" align="center"><h2><span style="font-size: 12pt">2009��03�·�ǣ�����硢ˮ���¹��ٱ���</span></h2></td></tr>
            <tr><td colspan="3" align="left" width="25%">�¹����ڵ�λ��������·�� </td>
                <td colspan="3" align="center" width="25%">����Σ����������</td>
                <td colspan="3" align="right" width="25%">��ţ�<span id="LabBh">09-001</span></td>
                <td colspan="2" align="right" width="25%">JDB6&nbsp;</td>
             </tr>
           </table>
           <table id="tbl1" border="0" cellpadding="0" cellspacing="0" width="80%" class="defaultTable">
	<tr>
		<td rowspan="5">
                    ��<br />
                    ��<br />
                    ��<br />
                    ��</td>
		<td style="border-right-width:0px;" align="left">�߱�
                   </td>
		<td align="left" style="border-left-width:0px;">
                    </td>
		<td align="left">
                    <select name="DlXb" id="DlXb" disabled="disabled" style="width:75px;">
			<option selected="selected" value="000002">¤����</option>
			<option value="000008">������</option>
			<option value="000014">������</option>
			<option value="000020">����������</option>
			<option value="100007">��֧ͭ��</option>
			<option value="100072">���������</option>
			<option value="200010">�·���Ŧ</option>
			<option value="300037">���¾���ר����</option>
			<option value="300038">��֯�Ǿ���ר����</option>
			<option value="300128">��ʯ�������Ϳ�ר��</option>

		</select></td>
		<td align="left" colspan="2">
                   ����
                    </td>
		<td colspan="3" align="left">
                   <input name="TxtZl" type="text" id="TxtZl" class="n2" /></td>
		<td colspan="3">
                </td>
	</tr>
	<tr>
		<td colspan="2" align="left">�ص�
                   </td>
		<td align="left">
                    <input name="TxtDd" type="text" id="TxtDd" class="n2" /></td>
		<td colspan="2" align="left">����ʱ��
                   </td>
		<td colspan="3" align="left">
                    <input name="TxtFssj" type="text" id="TxtFssj" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                    </td>
		<td colspan="3">
                </td>
	</tr>
	<tr>
		<td colspan="2" align="left">ͣ������
                    </td>
		<td align="left">
                    <input name="TxtTdqd" type="text" id="TxtTdqd" class="n2" /></td>
		<td colspan="2" align="left">����ʱ��
                   </td>
		<td colspan="6" align="left">
                    <input name="TxtFxsj" type="text" id="TxtFxsj" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                    </td>
	</tr>
	<tr>
		<td colspan="2" align="left">Ӱ�췶Χ
                    </td>
		<td align="left">
                   <input name="TxtYxfw" type="text" id="TxtYxfw" class="n2" />
                </td>
		<td colspan="2" align="left">֪ͨ����ʱ��
                    </td>
		<td colspan="6" align="left">
                     <input name="TxtTzqxsj" type="text" id="TxtTzqxsj" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                </td>
	</tr>
	<tr>
		<td colspan="2" align="left">Ӱ���г�
                  </td>
		<td align="left">�ͳ�
                    </td>
		<td align="left">
                   <input name="TxtYxkc" type="text" id="TxtYxkc" class="n2" />
                </td>
		<td align="left">
                    ��</td>
		<td align="left">
                    ����</td>
		<td align="left">
                   <input name="TxtYxhc" type="text" id="TxtYxhc" class="n2" />
                </td>
		<td align="left">
                    ��</td>
		<td align="left">
                    �ۼ�</td>
		<td>
                    <input name="TxtXcLj" type="text" readonly="readonly" id="TxtXcLj" class="n2" />
                </td>
		<td align="left">
                    ��</td>
	</tr>
	<tr>
		<td rowspan="10">
                    ��<br />
                    ��<br />
                    ��<br />
                    ��<br />
                    ��<br />
                    ��
                    </td>
		<td colspan="3" align="left">�����������
                    </td>
		<td align="left">
                   <input name="TxtCdbz" type="text" id="TxtCdbz" class="n6" />
                </td>
		<td align="left">
                    ʱ��</td>
		<td colspan="3" align="left">
                   <input name="TxtCdsj" type="text" id="TxtCdsj" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                </td>
		<td align="left">
                    ����</td>
		<td colspan="2" align="left">
                    <input name="TxtCdrs" type="text" id="TxtCdrs" class="n2" />
                </td>
	</tr>
	<tr>
		<td colspan="3" align="left">���絽�����
                   </td>
		<td align="left">
                   <input name="TxtDdbz" type="text" id="TxtDdbz" class="n6" />
                </td>
		<td align="left">
                    ʱ��</td>
		<td colspan="3" align="left">
                  <input name="TxtDdsj" type="text" id="TxtDdsj" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                </td>
		<td align="left">
                    ����</td>
		<td colspan="2" align="left">
                   <input name="TxtDdrs" type="text" id="TxtDdrs" class="n2" />
                </td>
	</tr>
	<tr>
		<td colspan="3" align="left">�����쵼��
                    </td>
		<td align="left">
                  <input name="TxtQxldr" type="text" id="TxtQxldr" class="n6" />
                </td>
		<td align="left">
                    ְ��</td>
		<td colspan="3" align="left">
                   <input name="TxtZw" type="text" id="TxtZw" class="n6" />
                </td>
		<td align="left">
                    ������</td>
		<td colspan="2" align="left">
                   <input name="TxtZrs" type="text" id="TxtZrs" class="n2" />
                </td>
	</tr>
	<tr>
		<td colspan="3" align="left">
                    ͣ��ʱ�� &nbsp;&nbsp; ��</td>
		<td align="left">
                    <input name="TxtTdkssj" type="text" id="TxtTdkssj" class="n6" onclick="ShowCalendar(this);Gdbb6js('TxtTdkssj','TxtTdjssj','TxtTdsjlj');" readonly="readOnly" />
                </td>
		<td align="left">
                    ��</td>
		<td colspan="3" align="left">
                    <input name="TxtTdjssj" type="text" id="TxtTdjssj" class="n6" onclick="ShowCalendar(this);Gdbb6js('TxtTdkssj','TxtTdjssj','TxtTdsjlj');" readonly="readOnly" />
                </td>
		<td align="left">
                    ��</td>
		<td colspan="2" align="left">
                   <input name="TxtTdsjlj" type="text" readonly="readonly" id="TxtTdsjlj" class="n2" />
                </td>
	</tr>
	<tr>
		<td colspan="3" align="left">
                    ����ʱ�� &nbsp;&nbsp; ��</td>
		<td align="left">
                   <input name="TxtQxkssj" type="text" id="TxtQxkssj" class="n6" onclick="ShowCalendar(this);Gdbb6js('TxtQxkssj','TxtQxjssj','TxtQxsjlj');" readonly="readOnly" />
                </td>
		<td align="left">
                    ��</td>
		<td colspan="3" align="left">
                   <input name="TxtQxjssj" type="text" id="TxtQxjssj" class="n6" onclick="ShowCalendar(this);Gdbb6js('TxtQxkssj','TxtQxjssj','TxtQxsjlj');" readonly="readOnly" />
                </td>
		<td align="left">
                    ��</td>
		<td colspan="2" align="left">
                   <input name="TxtQxsjlj" type="text" readonly="readonly" id="TxtQxsjlj" class="n2" />
                </td>
	</tr>
	<tr>
		<td colspan="3" align="left">
                    ��ǰ���з�ʽ</td>
		<td colspan="8" align="left">
                   <input name="TxtYxfs" type="text" id="TxtYxfs" class="n3" style="width:100%;" />
                </td>
	</tr>
	<tr>
		<td colspan="11" align="left">
                    �豸�𻵼���Ա�������</td>
	</tr>
	<tr>
		<td colspan="11" align="left">
                   <textarea name="TxtXhsw" rows="5" cols="20" id="TxtXhsw" class="n3" style="height:100%;width:99%;"></textarea>
                </td>
	</tr>
	<tr>
		<td colspan="11" align="left">
                    ԭ�򼰴�ʩ</td>
	</tr>
	<tr>
		<td colspan="11" align="left">
                   <textarea name="TxtYycs" rows="6" cols="20" id="TxtYycs" class="n3" style="height:100%;width:99%;"></textarea>
                </td>
	</tr>
	<tr>
		<td rowspan="12">
                    ��<br />
                    ��<br />
                    ��<br />
                    ��<br />
                    ��<br />
                    ¼</td>
		<td align="center" colspan="3">
                    ʱ��</td>
		<td align="center" colspan="8">
                    �������ݼ�¼</td>
	</tr>
	<tr>
		<td colspan="3">
                   <input name="TxtQxsj1" type="text" id="TxtQxsj1" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" />
                </td>
		<td colspan="8">
                   <input name="TxtQxnr1" type="text" id="TxtQxnr1" class="n3" style="width:94%;" />
                </td>
	</tr>
	<tr>
		<td colspan="3">
                    <input name="TxtQxsj2" type="text" id="TxtQxsj2" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr2" type="text" id="TxtQxnr2" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj3" type="text" id="TxtQxsj3" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr3" type="text" id="TxtQxnr3" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj4" type="text" id="TxtQxsj4" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr4" type="text" id="TxtQxnr4" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj5" type="text" id="TxtQxsj5" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr5" type="text" id="TxtQxnr5" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                    <input name="TxtQxsj6" type="text" id="TxtQxsj6" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr6" type="text" id="TxtQxnr6" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                    <input name="TxtQxsj7" type="text" id="TxtQxsj7" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr7" type="text" id="TxtQxnr7" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                    <input name="TxtQxsj8" type="text" id="TxtQxsj8" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr8" type="text" id="TxtQxnr8" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj9" type="text" id="TxtQxsj9" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr9" type="text" id="TxtQxnr9" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj10" type="text" id="TxtQxsj10" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr10" type="text" id="TxtQxnr10" class="n3" style="width:94%;" /></td>
	</tr>
	<tr>
		<td colspan="3">
                     <input name="TxtQxsj11" type="text" id="TxtQxsj11" class="n6" onclick="ShowCalendar(this)" readonly="readOnly" /></td>
		<td colspan="8">
                    <input name="TxtQxnr11" type="text" id="TxtQxnr11" class="n3" style="width:94%;" /></td>
	</tr>
</table>

        <br />
        <table id="TABLE3" border="0" cellpadding="0" cellspacing="0" width="80%">
            <tr><td colspan="1" style="width: 194px">�γ����׿��� </td>
                <td colspan="1" style="width: 168px">�Ƴ���������</td>
                <td colspan="1" align="center">�Ʊ��Ÿ�</td>
                <td colspan="2" align="right">����ڣ�2009-3-5</td>
             </tr>
           </table>
        <input type="submit" name="Button2" value="����" id="Button2" class="blueButtonCss" />
        <input type="submit" name="Button1" value="ȡ��" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;Button1&quot;, &quot;&quot;, false, &quot;&quot;, &quot;Gdbb6-1.aspx&quot;, false, false))" id="Button1" class="blueButtonCss" />
        <input name="Button3" type="button" id="Button3" class="blueButtonCss" value="��ӡ" onclick="PrintGdbb6();" /><br />
    </div>
  </body>
</html>
