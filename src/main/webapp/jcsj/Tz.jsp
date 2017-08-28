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
    <SCRIPT language="JavaScript1.2">
void function  input_onclick3(url)
{
    //alert(url);
	open_window(url,900,500,1);
}

function open_window(url,thisWidth,thisHeight,scrollbar){
//打开一居中窗口
    var left =(screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2;
    //left=300;   
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
}
</SCRIPT> 
<script language="JScript"> 
var n=0; 
function go(url){ 
n==0?new function(){frames("frame1").location=url,n=1}:null; 
document.all("frame1").readyState!="complete"?setTimeout(go,10):so(); 
function so(){frames("frame1").document.execCommand("SaveAs"),n=0}; 
} 
</script> 
    </head>
   <body>
    <form >
        <div style="width:100%">    
           <div style="float:left; width:30%"> <label>您当前的位置：技术资料---->图纸</label></div>
           <div style="float:right;width:60%" align="right">
             <iframe id="frame1" style="display:none"> </iframe> 
           <a href="javascript:go('ktcj.msi')">看图插件</a>       
         </div>
       </div>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
            <TD>单&nbsp; &nbsp;位:</TD> 
            <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
               <OPTION value=0018410201>广州供电调度室</OPTION> 
               <OPTION value=0018410201>李家段接触网工区</OPTION></SELECT>
            </TD>
            <TD>专&nbsp; &nbsp;业:</TD> 
            <TD><SELECT id=DrlZy style="WIDTH: 80px" > 
               <OPTION value=0018410201>接触网</OPTION> 
               <OPTION value=0018410201>变电所</OPTION>
               <OPTION value=0018410201>电力</OPTION></SELECT>
            </TD>
            <TD>图纸类型:</TD> 
            <TD><SELECT id=DrlZy style="WIDTH: 80px" > 
               <OPTION value=0018410201>线路图</OPTION>
               <OPTION value=0018410201>平面图</OPTION> 
               <OPTION value=0018410201>装配图</OPTION></SELECT>
            </TD>
            <TD>图纸名称:</TD> 
            <TD><INPUT id=txtTzmc style="WIDTH: 120px">
            </TD>    
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=查询 name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=新增 name=AddButton  onclick="window.location.href='TzAdd.jsp';"/></TD>
        </TR>
        <TR>
          <TD bgColor=#003366 colSpan=10 height=2></TD>
        </TR>
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="14" style="width:100%" align="left" valign="middle">图纸信息</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >序号</td>
            <td nowrap>图纸名称</td>
            <td>图号</td>
            <td>专业</td>
            <td>图纸类型</td>
            <td>比例</td>
            <td>长度</td>
            <td>宽度</td>
            <td nowrap width="40%">图纸简述</td>
            <td>关联设备</td>
            <td>所属单位</td>
            <td>上传时间</td>
            <td nowrap>图纸显示</td> 
            <td>操作</td>
         </tr>
          <tr>
            <td>1</td>
            <td>接触网线路图</td>
            <td>0001-01</td>
            <td>接触网</td>
            <td>线路图</td>
            <td>1：1000</td>
            <td>30</td>
            <td>10</td>
            <td>李家段网工区接触网线路图....</td>
            <td>接触线</td>
            <td align="center">李家段网工区</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="#" onclick="javascript:input_onclick3('ShowTz.jsp')">图纸</a></td>
            <td><a href="TzAdd.jsp" target="_self">编辑</a>  <a href="#" target="_self">删除</a>
            </td>
          </tr>
           <tr>
            <td>2</td>
            <td>接触网线路图</td>
            <td>0002-02</td>
            <td>接触网</td>
            <td>线路图</td>
            <td>1：1000</td>
            <td>30</td>
            <td>10</td>
            <td>李家段网工区接触网线路图....</td>
            <td>接触线</td>
            <td align="center">李家段网工区</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="#" onclick="javascript:input_onclick3('ShowTz.jsp')">图纸</a></td>
            <td><a href="TzAdd.jsp" target="_self">编辑</a>  <a href="#" target="_self">删除</a>
            </td>
          </tr>
        </TABLE>
       </form>       
    </body>
</html>
