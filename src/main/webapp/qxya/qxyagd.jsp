<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>


<html>
  <head>
    <title>My JSP 'gzbg.jsp' starting page</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css"> 
 <script type="text/javascript" src="mycalendar2.js"></script>
  </head>
  
  <body> 
    <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>	 
    <tbody> 	
   		<tr>
   		<td width="10%">制定日期: </td><td><input name="r1" onfocus="setday(this)" type="text" id="" value=""></td>
   		<td>制定人: </td><td ><input  name="r1"  type="text" id="" value=""></td>	
   		<td>预案名称:</td><td><input type="text"></td>
   		</tr>   		
          <tr><td width="10%">专业:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>接触网</OPTION> 
               <OPTION value=0018410201>变电所</OPTION> 
               <OPTION value=0018410204>电力</OPTION> 
               <OPTION value=0018410203>分区亭</OPTION></SELECT></td>
          <td width="10%">故障性质:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>永久性接地</OPTION> 
               <OPTION value=0018410201>瞬时接地</OPTION> 
               <OPTION value=0018410204>断续接地</OPTION> 
               <OPTION value=0018410203>支柱断</OPTION></SELECT></td>
          <td width="10%">故障分类</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>接触线断线</OPTION> 
               <OPTION value=0018410201>支柱断</OPTION></SELECT></td>
     </tr>  
     </tbody>
     </table>
    <table>
      <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
      <tbody> 
        <tr height=300px>
          <td style="width:7%">预案内容</td><td style="width:93%"><font size="3"><textarea style="width:100%;height:100%"  >当发生导线断线时，首先应查明断线发生的确切位置，断口两侧的损坏情况，断线波及的范围等情况。
1.导线断线损坏范围较小,断口两侧无较大损伤、变形，可以直接紧线对接。导线严重损伤在一个跨距以内，必须加换一段导线，这时可在地面上先做好一个接头，网上将新旧线紧起后作另一个接头。
2.导线断线损坏范围较大时，可视具体情况确定方案，如果列车惰行可以通过故障区段时，可将接触网脱离接地采取降弓通过的方法，先行送电通车。具体应遵循如下原则：
⑴站场侧线断线，可先将线索紧起，保证咽喉区行车，送电先开通正线。站场正线或区间断线，可将线索紧起，采取降弓通过的办法送电通车。
⑵利用紧线方式送电时，必须加装分流短接线，严禁利用受力工具导通电流回路。
3．导线断线处理后，必须将该锚段全部巡视一遍，特别是中心锚结、线岔、补偿装置、锚段关节等设备，是否可以通车，同时应考虑气温变化时对设备的影响。
</textarea></td>
        </tr>
      </tbody>
    </table>
     <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
     <tbody> 
        <tr height="100px">
        <td align="center">
        <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=保存 name=SrcButton>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  
       <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=重置 name=SrcButton> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
       
       </td>
       </tr>
    </tbody>
    </table>       
  </body>
</html>
