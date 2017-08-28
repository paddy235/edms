<%@ page language="java" import="java.util.*" pageEncoding="Gb2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html >
<head id="Head1"><title>
	弓网故障概况表（机电报表3）
</title>
    <link href="Report.css" rel="stylesheet" type="text/css" /> 
    <link rel="stylesheet" href="default.css" type="text/css"></link>
  </head>
  
  <body>
       <div style="width:100%;height:100%;overflow-x:auto;overflow-y:auto">  
           <table id="TABLE2" border="0" cellpadding="0" cellspacing="0" width="99%">
           <tr><td colspan="4" align="center"><h2><span style="font-size: 12pt">2009年03月份弓网故障概况表</span></h2></td></tr>
            <tr><td colspan="2" align="left">填报单位:西安供电段</td>
                <td colspan="2" align="right">JDB3&nbsp;</td>
             </tr>
        <tr><td colspan="4" style="border-bottom: 1px solid; border-right: 1px solid;">
       <div>
	<table cellspacing="0" rules="all" border="1" id="GridView2" style="width:100%;border-collapse:collapse;">
		<tr>
			<th rowspan="2">序号</th><th rowspan='2' align='center'>线别</th><th colspan='2' align='center'>地点</th><th rowspan='2' align='center'>发生时间</th><th colspan='3' align='center'>停电时间</th><th rowspan='2' align='center'>车次</th><th rowspan='2' align='center'>机车车型<br/>及车号</th><th rowspan='2' align='center'>故障原因</th><th rowspan='2' align='center'>供电原因<br/>分类</th><th rowspan='2' align='center'>设备破损</th><th rowspan='2' align='center'>概况</th></tr><tr><th align='center'>区间<br/>车站</th><th align='center'>支柱或隧<br/>道悬挂点</th><th align='center'>开始</th><th align='center'>恢复</th><th align='center'>计(h)</th></tr><tr><th align='center'>1</th><th align='center'>3</th><th align='center'>4</th><th align='center'>5</th><th align='center'>6</th><th align='center'>7</th><th align='center'>8</th><th align='center'>9</th><th align='center'>10</th><th align='center'>11</th><th align='center'>12</th><th align='center'>13</th><th align='center'>14</th><th align='center'>15</th></tr><th></th>
		<tr></tr><tr>
			<td style="display:none;"><input name="GridView2$ctl03$txt00" type="text" id="GridView2_ctl03_txt00" value="200903000002001841000001" size="2" readonly="true" class="n3" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt01" type="text" id="GridView2_ctl03_txt01" value="01" size="2" readonly="true" class="n5" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt02" type="text" id="GridView2_ctl03_txt02" value="陇海线" size="2" readonly="true" class="n1" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt03" type="text" id="GridView2_ctl03_txt03" size="2" class="n2" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt04" type="text" id="GridView2_ctl03_txt04" size="2" class="n1" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt05" type="text" id="GridView2_ctl03_txt05" size="2" class="n6" readonly="true" enableviewstate="true" onclick="ShowCalendar(this)" /></td><td><input name="GridView2$ctl03$txt06" type="text" id="GridView2_ctl03_txt06" size="2" class="n6" readonly="true" enableviewstate="true" onclick="ShowCalendar(this)" /></td><td><input name="GridView2$ctl03$txt07" type="text" id="GridView2_ctl03_txt07" size="2" class="n6" readonly="true" enableviewstate="true" onclick="ShowCalendar(this)" /></td><td><input name="GridView2$ctl03$txt08" type="text" id="GridView2_ctl03_txt08" size="2" class="n1" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt09" type="text" id="GridView2_ctl03_txt09" size="2" class="n2" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt010" type="text" id="GridView2_ctl03_txt010" size="2" class="n3" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt011" type="text" id="GridView2_ctl03_txt011" size="2" class="n3" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt012" type="text" id="GridView2_ctl03_txt012" size="2" class="n3" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt013" type="text" id="GridView2_ctl03_txt013" size="2" class="n3" enableviewstate="true" /></td><td><input name="GridView2$ctl03$txt014" type="text" id="GridView2_ctl03_txt014" size="2" class="n3" enableviewstate="true" /></td>
		</tr>
	</table>
</div>
        </td></tr>
        <tr><td colspan="4">&nbsp;</td></tr>
        <tr><td style="width: 100px" >段长：雷靠民 </td>
            <td >科长：杜悦良</td>
            <td align="center" >制表：张刚</td>
            <td align="right">填报日期：2009-3-5</td>
        </tr>
        </table>
        <input type="submit" name="Button2" value="保存" id="Button2" class="blueButtonCss" />
        <input type="submit" name="Button1" value="取消" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;Button1&quot;, &quot;&quot;, false, &quot;&quot;, &quot;Gdbb3-1.aspx&quot;, false, false))" id="Button1" class="blueButtonCss" />
        <input id="Button3" class="blueButtonCss" type="button" value="打印" onclick="PrintGdbb3();" /><br />
    </div>
  </body>
</html>
