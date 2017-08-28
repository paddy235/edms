<%@ page contentType="text/html; charset=gb2312" language="java" errorPage="" %>
<%@ page import="java.sql.*,org.jdom.*,java.io.*,java.util.*"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>xxx具体表名</title>
<%
	/***************获得当前jsp文件所在路径，用来查找cell的模板文件，一般只要***************/
	/***************模板保存在jsp所在路径中templet目录中，且和jsp文件同名，这里不需要修改***/
	String Uri = request.getRequestURI();
	Uri = Uri.substring(0, Uri.lastIndexOf("/")) + "/templet"
			+ Uri.substring(Uri.lastIndexOf("/"), Uri.lastIndexOf("."))
			+ ".cll";

	/******执行动作判断，如果点击保存或者生成，则执行存储或者存储过程*************/
	String act = request.getParameter("act");
	if (act == null)
		act = "1";
	System.out.println("获得用户点击那个按钮:" + act);
    Vector v=new Vector();
	/****站所定义，获取所选站所****/
	String gqpym = request.getParameter("StID");
	System.out.println(gqpym);

	/****时间定义，获取当前时间********/
	String ymd_begin = request.getParameter("ymd1");
	System.out.println("ymd_begin:" + ymd_begin);
	String ymd_end = request.getParameter("ymd2");

	if (ymd_begin == null) {
		java.util.Calendar c = java.util.Calendar.getInstance();
		java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat(
				"yyyy-MM-dd");
		ymd_begin = sdf.format(c.getTime());
		System.out.println("ymd_begin1:" + ymd_begin);
	}

	if (ymd_end == null) {
		Calendar c = Calendar.getInstance();
		java.text.SimpleDateFormat sdf = new SimpleDateFormat(
				"yyyy-MM-dd");
		ymd_end = sdf.format(c.getTime());
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
	//alert(<%=ymd_begin%>);
	var ymd_begin_end = "<%=ymd_begin%>" +" 至 " + "<%=ymd_end%>";
	DCellWeb1.SetCellString(2,2,0,ymd_begin_end);
}

void function  write_DATA(){
<%
	try {
        DbTrade db_connection = new DbTrade();
        ResultSet myRs =null;        
        String sql;
        
        //填写下拉列表
        sql = "select distinct gqmc, gqpym from j_gyjc_gqzd  where jglbdm not in('1','3')";
        myRs= db_connection.executeQuery(sql);
        while (myRs.next()) {   
            String[] ary=new String[2];
            ary[0]=myRs.getString("gqmc");
            ary[1]=myRs.getString("gqpym");
            v.add(ary); 
        }
        myRs.close();
       
       //根据站所查询跳闸记录 
        if("ALL".equals(gqpym)||gqpym==null)
        {
   			sql = "select y.ydsgbm, to_char(y.bgsj,'yyyy-mm-dd hh24:mi:ss') as bgsj, g.gqmc, k.kgh, y.chzzt, y.sgjl,y.gzms " 
				+ " from z_xxgx_ydgzbg y, j_gdgy_kx k , j_gyjc_gqzd g "
	    		+ " where y.bhzzdm=k.bhzzdm and  y.gqpym = g.gqpym and g.gqdm = k.gqdm  and ( trunc(bgsj) between to_date('"
				+ ymd_begin + "','yyyy-mm-dd') and to_date('" + ymd_end + "','yyyy-mm-dd')) ";   
		}
		else
		{
			sql = "select y.ydsgbm, to_char(y.bgsj,'yyyy-mm-dd hh24:mi:ss') as bgsj, g.gqmc, k.kgh, y.chzzt, y.sgjl,y.gzms " 
				+ " from z_xxgx_ydgzbg y, j_gdgy_kx k , j_gyjc_gqzd g "
	    		+ " where y.bhzzdm=k.bhzzdm and  y.gqpym = g.gqpym and g.gqdm = k.gqdm  and ( trunc(bgsj) between to_date('"
				+ ymd_begin + "','yyyy-mm-dd') and to_date('" + ymd_end + "','yyyy-mm-dd')) and y.gqpym = '" + gqpym + "'";
		} 
		System.out.println("Select StID_SQL: "+sql);
        myRs= db_connection.executeQuery(sql);
      	
       	int row = 4;	 	 	 //列      
       	int serialNum=1;;		 //序号
       	String status="";	 	 //重合闸状态
       		
        while (myRs.next()) 
        {     
            if(myRs.getString("chzzt").equals("0"))
            	status="失败";
			else if(myRs.getString("chzzt").equals("1"))
				status="成功";
			else if(myRs.getString("chzzt").equals("2"))
			    status="不定态";    				    		           
			
			//超过了cell中设计初始的既有的行数，插入新行，初始值是30行，方法如下：
           	//void InsertRow(long startrow, long count, long sheetindex);
           	if(row>30){
           		out.println("DCellWeb1.InsertRow(" + row + ",1,0)");
           	}
           	
          	out.println("DCellWeb1.SetCellString(1," + row + ",0,"+serialNum++ + ");");
           	out.println("DCellWeb1.SetCellString(2," + row + ",0,'" + myRs.getString("ydsgbm").replaceAll("\r\n","\\\\r\\\\n")+"');");  
            out.println("DCellWeb1.SetCellString(3," + row + ",0,'" + myRs.getString("bgsj").replaceAll("\r\n","\\\\r\\\\n")+"');");
           	out.println("DCellWeb1.SetCellString(4," + row + ",0,'" + myRs.getString("gqmc").replaceAll("\r\n","\\\\r\\\\n")+"');");
           	out.println("DCellWeb1.SetCellString(5," + row + ",0,'" + myRs.getString("kgh").replaceAll("\r\n","\\\\r\\\\n")+"');");    		
           	out.println("DCellWeb1.SetCellString(6," + row + ",0,'" + status.replaceAll("\r\n","\\\\r\\\\n")+"');");       
           	out.println("DCellWeb1.SetCellString(7," + row + ",0,'" + myRs.getString("sgjl").replaceAll("\r\n","\\\\r\\\\n")+"');");
           	out.println("DCellWeb1.SetCellString(8," + row + ",0,'" + myRs.getString("gzms").replaceAll("\r\n","\\\\r\\\\n")+"');");          	
           	//设置适合的行高，方法如下：
            //long GetRowBestHeight(long row);	
            //void SetRowHeight(long type, long h, long row, long sheet)
           	out.println("DCellWeb1. SetRowHeight(1, DCellWeb1.GetRowBestHeight("+row+")+5, "+row+", 0);");
		    row++;          	
        }
        db_connection.close();
    } catch (Exception ex) {
		System.out.println(ex.getMessage());
    }
%>
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
	<form  name="form1" method="post" action="dlqzdtzjl.jsp">	
		<font color="#000000"><b>起始日期</b></font>
		<input type="hidden" name="act" value="0">
		<input type="text" name="ymd1" onfocus="setdayoff(this,document.all.ymd1)" size="10" value="<%=ymd_begin%>">
		<font color="#000000"><b>结束日期</b></font>
		<input type="text" name="ymd2" onfocus="setdayoff(this,document.all.ymd2)" size="10" value="<%=ymd_end%>">
		<font color="#000000"><b>所亭</b></font>
		<select name="StID" >		
			<option value="ALL" >所有所亭</option>		
			<%
			for(int i=0;v!=null&&i<v.size();i++){
				String[] ary=(String[])v.get(i);
				out.print("<option value="+ary[1]+" >"+ary[0]+"</option>");
			}
			 %>
			
		</select>
		<input type="submit" name="query" value="查  询" onClick="set_act(1)">			
		<input type=button id=button1 name=button2 onClick="button2_onclick()"  value="打  印">
		<input type=button id=button1 name=button1 onClick="button1_onclick()"  value="预  览">
		<input type=button id=button3 name=button3 onClick="button3_onclick()"  value="另  存">
		<font color="#000000"><b>比例</b></font>
		<select name="scale" onChange="set_cellScale()">		
			<option value="0.7" >70%</option>
			<option value="0.8">80%</option>
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
