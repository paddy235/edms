<%@ page contentType="text/html; charset=gb2312" language="java"  errorPage="" %>

<%@ page import="mor.report.*"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>调度报表</title>
<%
String Uri=request.getRequestURI();
BaseDataBean Bean=(BaseDataBean)request.getAttribute("DataBean");
Uri=Uri.substring(0,Uri.lastIndexOf("/"))+"/templet/"+Bean.getCellFile();

/***************定义一些控制变量***************************/
//时间定义
String ymd=request.getParameter("ymd");
if(ymd==null){
	java.util.Calendar c = java.util.Calendar.getInstance();
	java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
	ymd=sdf.format(c.getTime());
}
%>


<SCRIPT language="JavaScript1.2">
<!--cell控件使用javascript

function SaveToCSV(x1,y1,x2,y2) {
  var s;
  s=new String();
  for (j=y1;j<=y2;j++) {
    
    for (i=x1;i<=x2;i++) {
	s+=DCellWeb1.GetCellString(i,j,0);
	if (i<x2) s+="!,";
    } 
    if (j<y2) s+="#@";
  }   
  return(s);
}

function AutoMerge(col,y1,y2)
{
  var S,lastS,lastY;
  lastS=DCellWeb1.GetCellString(col,y1,0);
  lastY=y1;	
  for (i=y1+1;i<=y2;i++) {
    S=DCellWeb1.GetCellString(col,i,0);
    if (S!=lastS) {
      DCellWeb1.MergeCells(col,lastY,col,i-1);
      lastY=i;
      lastS=S;	
    } 
  }
  DCellWeb1.MergeCells(col,lastY,col,y2);
}

function ExitEdit()
{
  DCellWeb1.SaveEdit();

}

void function  window_onload() {
//调用注册函数
	if (DCellWeb1.Login( "运输生产信息平台", "", "13040352", "1460-1706-0167-6005" ) == 0){
		alert("注册失败!");
	}
	//*****************控制cell控件的外观程序片段**********************	
		set_width_height();			//设置宽度和高度
		DCellWeb1.OpenFile("http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=Uri%>", "");
		DCellWeb1.SetCurSheet(0);			//当前表页为0号
		DCellWeb1.ShowTopLabel(0,0);		//设置是否显示列标
		DCellWeb1.ShowSideLabel(0,0);		//设置是否显示行标
		DCellWeb1.ShowHScroll(1,0);		//设置是否显示水平滚动条
		DCellWeb1.ShowVScroll(1,0);		//设置是否显示垂直滚动条
		DCellWeb1.ShowSheetLabel(0,0);		//设置是否显示页签
		set_cellScale();	//在初始化时以这个百分比显示
	//*****************控制cell控件的外观程序片段**********************	
	//填写数据
	
	write_date();
	timeOutVar=setTimeout('write_data()', 200);
}
function set_cellScale() {
//设置cell控件的显示比例
	var scale=document.form1.scale.value;
	DCellWeb1.SetScreenScale(0, scale);
}
function write_data() {
//填写数据
	parent.status="正在计算数据，请稍等.................";
	<%=Bean.SettingCell()%>
	form1.oldData.value=SaveToCSV(<%=Bean.getArea()%>);
	DCellWeb1.CalculateAll();
	parent.status="打开完毕！";
}
void function  write_date(){
//填写日期
	DCellWeb1.SetCellString(<%=Bean.getDateCell()%>,0,"<%=ymd%>");
}

void function insert1row(_row){
	var TotalRows = DCellWeb1.GetRows(0)-1;	
		DCellWeb1.InsertRow(TotalRows,1,0);
}


void function  button1_onclick(){
//打印预览的过程
		DCellWeb1.PrintPreview(1,DCellWeb1.GetCurSheet);
}
function window_onresize() {
	set_width_height();
}
function set_width_height() {
//设置宽度和高度的方法
	var lWidth = document.body.offsetWidth;
	if( lWidth <= 0) lWidth = 1;
	DCellWeb1.style.width =lWidth-10;
	var lHeight = document.body.offsetHeight - parseInt(DCellWeb1.style.top);
	if( lHeight <= 0 ) lHeight = 1;
	DCellWeb1.style.height = lHeight-1;
}
void function  button2_onclick(){
//打印的过程
		DCellWeb1.PrintSheet(1,2);
}
void function  button3_onclick(){
//另存文件过程
		DCellWeb1.SaveFile();
}
void function  button4_onclick(){
//保存到数据库
		//DCellWeb1.SaveFile();
		form1.newData.value=SaveToCSV(<%=Bean.getArea()%>);
		form1.PostBack.value="true";
			form1.submit();
}
void function  buttonjs_onclick(){
//计算
		//form1.action="/ljjd/query/jd_lj_jcyy_js.jsp";
		form1.recalc.value="true";
		form1.submit();
}

-->
</SCRIPT>
</head>
<body  bgcolor="DFE8F6" topmargin="0" leftmargin="2"  onresize="return window_onresize()" onLoad="window_onload()">
<br>
<table >
<tr><td>
	<form  name="form1" method="post"  action="Report_FlowCtrl">	
		<font color="#ee0000"><b>日 期</b></font>
		<input class="time_input"  name="ymd" onfocus="setdayoff(this,document.all.ymd)" size="9" value="<%=ymd%>">
		
		<input type="submit" name="query" value="查  询">		
		<input type="button" id="button4" name="button4" onClick="button4_onclick()"  value="存  盘" OnMouseOver="ExitEdit()">
		<input type="button" name="buttonjs" value="生  成" onClick="buttonjs_onclick()">
		<input type="button" id="button2" name="button2" onClick="button2_onclick()"  value="打  印">
		<input type="button" id="button1" name="button1" onClick="button1_onclick()"  value="预  览">
		<input type="button" id="button3" name="button3" onClick="button3_onclick()"  value="另  存" OnMouseOver="ExitEdit()">
		
		<font color="#ee00ff"><b>比例</b></font>
		<select name="scale" onChange="set_cellScale()">		
			<option value="0.7" >80%</option>
			<option value="0.6">70%</option>
			<option value="1" selected >100%</option>
			<option value="1.5">150%</option>
		</select>		
		<input type="hidden" name="recalc" value="false">
		<input type="hidden" name="newData">
		<input type="hidden" name="oldData">
		<input type="hidden" name="PostBack" value="false">
		<input type="hidden" name="tableid" value=<%=Bean.getID()%>>
		<input type="hidden" name="subtables" value=<%=Bean.getSubId()%>>
	</form>
</td></tr>
<tr><td> 
<!--**************************声明cell对象**************************-->
<OBJECT classid=clsid:3F166327-8030-4881-8BD2-EA25350E574A id=DCellWeb1  style="LEFT: 5px;top:66px;POSITION:  absolute;" 
	CODEBASE="http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=request.getContextPath()%>/cell/cellweb5.cab#Version=5,1,3,1222">    
	<PARAM NAME="_Version" VALUE="65536">
	<PARAM NAME="_ExtentX" VALUE="15770">
	<PARAM NAME="_ExtentY" VALUE="11192">
	<PARAM NAME="_StockProps" VALUE="0">
</OBJECT>
</td></tr>
</table>
<script  language="JavaScript">
	parent.status="打开完毕";
</script>
<script language="JavaScript" src="calender/calender_new.js"></script>
</body> 
</html> 