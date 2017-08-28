<%@ page contentType="text/html; charset=gb2312" language="java" errorPage="" %>
<%@ page import="java.sql.*,org.jdom.*,java.io.*,java.util.*"%>
<%@page import="mor.commons.db.DbTrade"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>xxx具体表名</title>
<%
/***************获得当前jsp文件所在路径，用来查找cell的模板文件，一般只要***************/
/***************模板保存在jsp所在路径中templet目录中，且和jsp文件同名，这里不需要修改***/
String Uri=request.getRequestURI();
Uri=Uri.substring(0,Uri.lastIndexOf("/"))+"/templet"+Uri.substring(Uri.lastIndexOf("/"),Uri.lastIndexOf("."))+".cll";

/******执行动作判断，如果点击保存或者生成，则执行存储或者存储过程*************/
String act=request.getParameter("act");
if(act==null)act="1";
System.out.println("获得用户点击那个按钮:"+act);
 try {
        DbTrade db_connection = new DbTrade();
        if(act.equalsIgnoreCase("2")){
        	//保存逻辑
        	//db_connection.executeUpdate("保存sql语句");
        }else if(act.equalsIgnoreCase("3")){
        	//执行存储过程逻辑
        	//db_connection.executeProcedure("存储过程名字");
        }
        db_connection.close();
    } catch (Exception ex) {

    }
/****时间定义，获取当前时间********/
String ymd=request.getParameter("ymd");
if(ymd==null){
	java.util.Calendar c = java.util.Calendar.getInstance();
	java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
	ymd=sdf.format(c.getTime());
}
%>
<SCRIPT language="JavaScript1.2">
<!--cell控件使用javascript
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
	write_DATA();
	//计算所有公式
	DCellWeb1.CalculateAll();	
	//填写日期、表头、填报人等信息
	write_Title();	
	//移动焦点到何时的位置，为了界面美观
	DCellWeb1.MoveToCell(3,5);
}

void function  write_Title(){
//填写日期	
<%System.out.println("这里可以放入java代码，从数据库中读取信息，按照下面的样子往cell表格中填写");%>	
	DCellWeb1.SetCellString(2,2,0,"<%=ymd%>");
}
void function  write_DATA(){

}

void function  button1_onclick(){
//打印预览的过程
		DCellWeb1.PrintPreview(1,DCellWeb1.GetCurSheet);
}
void function  button2_onclick(){
//打印的过程
		DCellWeb1.PrintSheet(1,2);
}
function window_onresize() {
	set_width_height();
}
function set_cellScale() {
//设置cell控件的显示比例
	//alert(document.form1.scale.value);
	var scale=document.form1.scale.value;
	DCellWeb1.SetScreenScale(0, scale);
}
function set_width_height() {
//设置宽度和高度的方法
	var lWidth = document.body.offsetWidth;
	if( lWidth <= 0) lWidth = 1;
	DCellWeb1.style.width = lWidth-10;
	var lHeight = document.body.offsetHeight - parseInt(DCellWeb1.style.top);
	if( lHeight <= 0 ) lHeight = 1;
	DCellWeb1.style.height = lHeight;
}
void function  set_act(i){
	document.all("act").value=i;
	//alert(i);
}
function open_window(url,thisWidth,thisHeight,scrollbar){
//打开一居中窗口
    var left = (screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2-50;
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
}
void function  button3_onclick(){
//另存文件过程
		DCellWeb1.SaveFile();
}
-->
</SCRIPT>
</head>
<body  bgcolor="DFE8F6" topmargin="0" leftmargin="2"  onresize="return window_onresize()" onLoad="window_onload()">
<br>
<table>
<tr><td>
	<!-- form的action需要修改成本jsp界面 -->
	<form  name="form1" method="post" action="jdb2-1.jsp">	
		<font color="#000000"><b>选择日期</b></font>
		<input type="hidden" name="act" value="0">
		<input type="text" name="ymd" onfocus="setdayoff(this,document.all.ymd)" size="10" value="<%=ymd%>">
		<input type="submit" name="query" value="查  询" onClick="set_act(1)">	
		<!--input type=submit name=save value=保  存 onClick=set_act(2) -->
		<!-- input type=submit name=gen value=生  成 onClick=set_act(3) -->
		<input type=button id=button1 name=button2 onClick="button2_onclick()"  value="打  印">
		<input type=button id=button1 name=button1 onClick="button1_onclick()"  value="预  览">
		<input type=button id=button3 name=button3 onClick="button3_onclick()"  value="另  存">
		<font color="#000000"><b>比例</b></font>
		<select name="scale" onChange="set_cellScale()">		
			<option value="0.8" >80%</option>
			<option value="0.7">70%</option>
			<option value="1" selected>100%</option>
			<option value="1.5">150%</option>
		</select>
	</form>
</td></tr>
<tr><td>
<!--**************************声明cell对象**************************-->
<OBJECT classid=clsid:3F166327-8030-4881-8BD2-EA25350E574A id=DCellWeb1  style="LEFT: 5px;top:66px;POSITION:  absolute;" 	CODEBASE="http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=request.getContextPath()%>/cell/cellweb5.cab#Version=5,1,3,1222">
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
<script language="JavaScript" src="../../calender/calender_new.js"></script>
</body> 
</html>  
