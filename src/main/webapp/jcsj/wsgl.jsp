<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	�Ӵ���Σ��̨��
</title><link href="../etc/Css/default.css" rel="stylesheet" type="text/css" /><link href="../etc/Css/calendar-skin.css" rel="stylesheet" type="text/css" />

    <script language="JavaScript" type="text/JavaScript" src="../etc/Js/Calendar.js"></script>

    <link href="default.css" rel="stylesheet" type="text/css" />

    <script language="javascript" event="onkeydown" for="document">
                                <!--
                                  if(event.keyCode==13 && 
                                event.srcElement.type!='button' && 
                                event.srcElement.type!='submit' && 
                                event.srcElement.type!='reset' && 
                                event.srcElement.type!='')
                                     event.keyCode=9;
                                -->
    </script>

</head>
<body>
    <form name="form1" method="post" action="Wsgl.aspx" id="form1">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="+ciiVuP7z9iVi2NVnW/tMJj2IQLuZ6XMmj3GRZabazA6UrwG7N+Q6Wl6dgakMBvhCAuA/mm1leTtvYAcWbZzYo6Sn6i/HCsyUjY/DTyaEADydQBsWT72hsQ6j2PjV2sedB8FJ+qbsBuYU/hN4ho3RYH2nkNVnUfP8zaancL8FsNK0QFMJuVKua9MXD6tWe6RpU7Yey2CpacE19DYVlSesDv3382c6uXPo/CV6CX6QSYMqxmcI45VjVwYLJVSNPPe5DwGR5iFmZGDMJhG0LYaUSvBZDQ1vOewbdZ/wugtbrTrk1Od44ypRlenfWECkwDbg7joDko9tL4E2ylFh8fuUeC9Pkkqz7jCa5Dqw3Ja/lCmoLL5HsYbgp0iBftza82owPkEhzRVzJ6YoKqiVx48XLkb6dDNtS+T8Gjat3G3mDSDK2BkoFdWIp2ciK4WdvEYubXKyaPcGpsrKR+Rdrl+MRV7jy+yYl8S4ScKvdEpZpwLiy/BHFyw2GOsNlSBkx9Wa+h/bdmSKJGg7bXZkqdycbV+3WElbcfY9sSAT0sO4lYR+5E4NAai4ygm7MD/v5llJJFspSPUZOkigedHX4J2o0ysE1V9ZaPrfx1ultqjnkJQDU4RPZo+S1GJji5P7b4IkTB/yn2gc29JgSwni462HfV/mGMGqVZAS/y+Tylqv4rK3XsP0rkiimHv6nFALuZ5B0afd9Tpphzx4YUKJxAbBbaaJXsb176MX+yBezi72ESc7HdvTSyhK7QGkTHUA0UCra9CT3wMFO44yVGWGj2BF/zXrOXXQf6OWvwbvzJurdAy81ZwpRkGPzpY97lJVCdYdWZstyZH42YPhXqNQpS4dz/9Od+7CS5CywNmLpstPJBI2Dbe/NCKSr95EJ3TeFGlu3DUVB2305r+Lkga8ie/ECkxXLNfjlsUZFCvgmz0z7rgmsBYrVuriIB6rsQ9a54Ont076vE70e44Iy5EWW0XMZAfRfvpUp4hEEAgSt5OJ0oQjGUn4cm2dq+NYdt9Hgzz9s5mbXKruQ5MgbXOT8FtYNJKZdty6BJroXjjbIozA3HN3+HOoXsz1m9L/st1NTOBowCpUhhzU+jARC66PtU6LT+ae/zYSeHr4f/ZUScXrKpH5iPdhG+wSscQNfiBKaHSymex7g5BtFguw3zEKgk/L5vrgXeUkw+ALrB/AOYe1bnbMyBW1FV8CtwajZPUu1WNX5NrFsRRTCvSf1ODpT4Gxc+4LE3HPuBjinbFn8DkgKix45/g9e8Yi8k9kmNjrRqEq1948URjwOxYQxW9ltB6lTDoIzXfai5UMU0OMjH9BuNMdxYVuiU0NgCBVLsNwmZQ0vAwyB6l3nJvGQTTTWe5Ty5IlGEZYkG0zHFXU3tViCcB0teVJSW1DKwlbdS8a8Oym49+evpMHjM76L+riDPt1EgG0tM1hJCGpSgITVTCSgCP11BPKwru+fJV2UsDjw0HofTbOEsB9ipgVvbR/oVhOZDrjpSaM4HFx93l90FsFonnYWxLEE8aLKey9EAdnnbsdpKK2HnJsRh5vCj14vDhEd9q1ybC1qppwAxhUGNvy2GbzTYwN3JDm/TNLjkMVEia7jMjOgkpqHkQLYUkmifgGa5SjYuE8+XPMpoSavPliUsj7ZYafb4kxTY687dUSik1tEB6vLZzvwVuqWFm8tKor+i9OxBZtFCzfy5IaZp0h/06K6e3Mxe9+PgOKUMArYn/TGn94rRKn+yp5XH2cSR2j4hJh2UyifeMLiJw8j7i9TYOJ9gJhjOxHck99XBZ2tevETMNen8S+stEDonNKFk38z8Tl/YIJjJlielO8xYXvLNCiJtmUJk0XR7k4nclAZ+BtbdnpoVB4qc160Fjc2kq9Q==" />
</div>

<script type="text/javascript">
<!--
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
// -->
</script>


<script src="/EMIS_GWJX/WebResource.axd?d=oWik3jf189kHgCpo4l7WCg2&amp;t=633821708454669648" type="text/javascript"></script>


<script src="/EMIS_GWJX/ScriptResource.axd?d=SWeGxmdqJ-NVBmNPaYNVYLoMF7-xb5M5uX9Sf6IQsMCcrAFRdA_qJcEv_7LEr2m2mSLTbLLBWeB8e6mUL9QgQGASYvsfcZDDqHOXMiOZe5I1&amp;t=633874143442223216" type="text/javascript"></script>
<script src="/EMIS_GWJX/ScriptResource.axd?d=SWeGxmdqJ-NVBmNPaYNVYLoMF7-xb5M5uX9Sf6IQsMCcrAFRdA_qJcEv_7LEr2m2mSLTbLLBWeB8e6mUL9QgQFBpX5g2V1WXtWr2naekB2BQCqG4nbwQiE3z1CuZcaZo0&amp;t=633874143442223216" type="text/javascript"></script>
        <div>
            <table border="0" width="1200" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="height: 24px; width: 1200px;" align="left">
                        &nbsp;����������λ��: ��ҳ--&gt; ���л��� --&gt; �Ӵ���Σ��</td>
                </tr>
                <tr>
                    <td align="center" style="height: 24px; width: 1200px;" class="tableHeadText">
                        �Ӵ���Σ��&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" style="height: 24px; width: 1200px;">
                        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ScriptManager2', document.getElementById('form1'));
Sys.WebForms.PageRequestManager.getInstance()._updateControls(['tUpdatePanel2','tUpdatePanel1'], [], [], 90);
//]]>
</script>

                        <div id="UpdatePanel2">
	
                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td colspan="8">
                                            
<div style="text-align: center">
    <div style="text-align: center">
        <table style="width: 100%">
            <tr>
                
            </tr>
        </table>
    </div>
</div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%" align="right">
                                            ��λ&nbsp;</td>
                                        <td align="left" style="width: 186px">
                                            <select name="ddldw" onchange="javascript:setTimeout('__doPostBack(\'ddldw\',\'\')', 0)" id="ddldw" class="grayinput" style="width:119px;">
		<option value="0018410301">Ҥ��Ӵ�������</option>
		<option value="0018410102">�޷�Ӵ�������</option>
		<option value="0018410103">���ؽӴ�������</option>
		<option value="0018410201">μ�ϽӴ�������</option>
		<option value="0018410204">�����Ӵ�������</option>
		<option value="0018410302">��֯�ǽӴ�������</option>
		<option value="0018410402">�������Ӵ�������</option>
		<option value="0018410403">�����Ӵ�������</option>
		<option value="0018410404">����Ӵ�������</option>
		<option value="0018410501">μ���ϽӴ�������</option>
		<option value="0018410502">�̼ҺӽӴ�������</option>
		<option value="0018410503">�ܫ�Ӵ�������</option>
		<option value="0018410504">�⴨�Ӵ�������</option>
		<option value="0018410601">����Ӵ�������</option>
		<option value="0018410602">����Ӵ�������</option>
		<option value="0018410603">�����̽Ӵ�������</option>
		<option value="0018410604">���ͺӽӴ�������</option>
		<option value="0018410101">��ɽ�Ӵ�������</option>
		<option value="0018410203">�·�Ӵ�������</option>
		<option value="0018410401">�������Ӵ�������</option>
		<option value="0018410901">�Ӵ������ް�</option>

	</select>&nbsp;
                                        </td>
                                        <td align="right" style="width: 4%">
                                            �߱�</td>
                                        <td align="left" style="width: 240px">
                                            <select name="ddxb" onchange="javascript:setTimeout('__doPostBack(\'ddxb\',\'\')', 0)" id="ddxb" class="grayinput" style="width:119px;">
		<option value="0">��ѡ���߱�</option>
		<option value="000002">¤����</option>
		<option value="000008">������</option>
		<option value="000014">������</option>
		<option value="000020">����������</option>
		<option value="100007">��֧ͭ��</option>
		<option value="100072">���������</option>
		<option value="200010">�·���Ŧ</option>
		<option value="300037">���¾���ר����</option>
		<option value="300038">��֯�Ǿ���ר����</option>
		<option value="300128">��ʯ�������Ϳ�ר��</option>

	</select>
                                        </td>
                                        <td style="width: 162px">
                                            <input type="submit" name="ButtonCX" value="��ѯ" id="ButtonCX" class="blueButtonCss" /></td>
                                        <td><input type="submit" name="btnxs" value="ȫ����ʾ" id="btnxs" class="blueButtonCss" />&nbsp;</td>
                                        <td align="right">
                                            &nbsp;<input type="submit" name="btndelete" value="����ɾ��" onclick="return confirm('��ȷ��Ҫ�����Ѿ�������Σ����');" id="btndelete" class="blueButtonCss" /></td>
                                        <td width="10%">
                                            &nbsp;<input type="submit" name="addButton" value="����" id="addButton" disabled="disabled" class="blueButtonCss" /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="8" bgcolor="#003366" height="2">
                                        </td>
                                    </tr>
                                </table>
                                <table cellpadding="0" cellspacing="1" style="width: 1200px" class="table_without_detail_lines">
                                    <tr>
                                        
                                        <td style="width: 305px; height: 26px">
                                            �߱�</td>
                                        <td style="width: 5px; height: 26px;">
                                            <select name="ddlXB" id="ddlXB" class="grayinput" style="width:92px;">
		<option value="0">��ѡ���߱�</option>

	</select></td>
                                        <td style="width: 476px; height: 26px">
                                            ������·����</td>
                                        <td style="width: 5px; height: 26px;">
                                            <input name="TextBox31" type="text" id="TextBox31" class="grayinput" style="width:60px;" /></td>
                                        <td align="center" style="width: 388px; height: 26px">
                                            ����վ��</td>
                                        <td align="left" style="height: 26px; width: 61px;">
                                            <select name="ddlQjzc" id="ddlQjzc" class="grayinput" style="width:108px;">
		<option value="0">��ѡ������վ��</option>

	</select></td>
                                        <td style="width: 450px; height: 26px;">
                                            �Ӵ����˺�</td>
                                        <td colspan="1" style="height: 26px; width: 89px;" align="center">
                                            <input name="TextBox51" type="text" id="TextBox51" class="grayinput" style="width:50px;" /></td>
                                        <td align="center" style="width: 492px; height: 26px">
                                            ��·��·�����</td>
                                        <td align="left">
                                            <input name="TextBox61" type="text" id="TextBox61" class="grayinput" style="width:35px;" /></td>
                                        <td align="left" style="width: 85px">
                                            ����</td>
                                        <td align="right">
                                            <input name="txtm" type="text" maxlength="3" id="txtm" class="grayinput" style="width:20px;" /></td>
                                        <td align="left" style="width: 13px">
                                            ��</td>
                                        <td style="width: 133px; height: 26px;">
                                            �߶�</td>
                                        <td colspan="1" style="width: 77px;">
                                            <input name="TextBox71" type="text" id="TextBox71" class="grayinput" style="width:80px;" /></td>
                                        <td style="width: 250px">
                                            ������ϵ��</td>
                                        <td style="height: 26px">
                                            <input name="TextBox141" type="text" id="TextBox141" class="grayinput" style="width:80px;" />&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 221px; height: 15px">
                                            ��֦����</td>
                                        <td style="width: 5px; height: 15px;">
                                            <input name="TextBox91" type="text" id="TextBox91" class="grayinput" style="width:80px;" /></td>
                                        <td style="width: 476px; height: 15px">
                                            �ظ�����</td>
                                        <td style="width: 5px; height: 15px;">
                                            <input name="TextBox101" type="text" id="TextBox101" class="grayinput" style="width:60px;" /></td>
                                        <td align="center" style="width: 388px; height: 15px">
                                            ��������</td>
                                        <td align="left" style="height: 15px; width: 61px;">
                                            <input name="TextBox111" type="text" id="TextBox111" class="grayinput" style="width:60px;" /></td>
                                        <td style="width: 319px; height: 15px;">
                                            �Ƿ�·��</td>
                                        <td colspan="1" style="height: 15px; width: 89px;" align="center">
                                            <input name="TextBox121" type="text" maxlength="1" id="TextBox121" class="grayinput" style="width:49px;" /></td>
                                        <td align="center" style="width: 494px; height: 15px">
                                            �Ƿ���·�ؽ���</td>
                                        <td align="left" colspan="4">
                                            <input name="TextBox131" type="text" maxlength="1" id="TextBox131" class="grayinput" style="width:89px;" /></td>
                                        <td style="width: 133px; height: 15px;">
                                            ����</td>
                                        <td colspan="1" style="height: 15px; width: 77px;">
                                            <input name="TextBox81" type="text" id="TextBox81" class="grayinput" style="width:80px;" /></td>
                                        <td style="width: 80px">
                                            ��ϵ�绰</td>
                                        <td style="height: 15px">
                                            <input name="TextBox151" type="text" id="TextBox151" class="grayinput" style="width:80px;" />&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="width: 221px; height: 12px">
                                            ��Ȩ��λ</td>
                                        <td style="width: 5px; height: 12px;">
                                            <input name="TextBox161" type="text" id="TextBox161" class="grayinput" style="width:80px;" /></td>
                                        <td style="width: 476px; height: 12px">
                                            ��Ȩ��λ��ϵ��</td>
                                        <td style="width: 5px; height: 12px;">
                                            <input name="TextBox171" type="text" id="TextBox171" class="grayinput" style="width:60px;" /></td>
                                        <td align="center" style="width: 388px; height: 12px">
                                            ��Ȩ��λ��ϵ�绰</td>
                                        <td align="left" style="height: 12px; width: 61px;">
                                            <input name="TextBox181" type="text" id="TextBox181" class="grayinput" style="width:60px;" /></td>
                                        <td style="width: 319px; height: 12px;">
                                            �������</td>
                                        <td colspan="1" style="height: 12px; width: 89px;">
                                            <input name="TextBox191" type="text" id="TextBox191" class="grayinput" style="width:49px;" /></td>
                                        <td align="center" style="width: 494px; height: 12px">
                                            ��������</td>
                                        <td align="left" colspan="4">
                                        <input name="txtrq" type="text" id="txtrq" Class="grayinput" onclick="showcalendar(this)" style="width:89px;" />
                                        </td>
                                            <td style="width: 133px">
                                                ��ע</td>
                                            <td colspan="3" align="left">
                                            <input name="TextBox201" type="text" id="TextBox201" class="grayinput" style="width:230px;" /></td>
                                    </tr>
                                </table>
                            
</div>
                        
                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" width="1200" id="browseTable">
                <tr>
                    <td valign="top" align="center">
                        <div>
                            
                            <div id="UpdatePanel1">
	
                                    
                                    <div>

	</div>
                                
</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    
 <p>  
  <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>  
         <TR>
           <td >���</td>
           <td>�߱�</td>
           <td >������·����</td>
           <td >����վ��</td>
           <td >�Ӵ����˺�</td>
           <td >�����</td>
           <td >�߶�</td>
           <td >����</td>
           <td >��֦����</td>
           <td >�ظ�����</td>
           <td >��������</td>
           <td >��������</td>
           <td >�Ƿ�·��</td>
           <td >�Ƿ���·�ؽ���</td>
           <td >������ϵ��</td>
           <td >��ϵ�绰</td>
           <td >��Ȩ��λ</td>
           <td >��Ȩ��λ��ϵ��</td>
           <td >��Ȩ��λ��ϵ�绰</td>
           <td >�������</td>
           <td >��ע</td>
         </TR>
         <tr>
           <td>1</td>
           <td>������ר��</td>
           <td>&nbsp;</td>
           <td>��ɳվ</td>
           <td>179#</td>
           <td>K147+90</td>
           <td>7m</td>
           <td>��ľ</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>��</td>
           <td>��</td>
           <td>����</td>
           <td>65432</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
         <tr>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
         <tr>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
         <tr>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
         <tr>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
         <tr>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
           <td>&nbsp;</td>
         </tr> 
      </TABLE> 


<script type="text/javascript">
<!--
Sys.Application.initialize();
// -->
</script>
</form>
</body>
</html>
