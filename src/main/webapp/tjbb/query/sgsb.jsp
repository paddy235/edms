<%@ page contentType="text/html; charset=gb2312" language="java"
	errorPage=""%>
<%@page import="mor.commons.db.DbTrade"%>
<%@ include file="../../share/CheckDateorStr.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
		<title>事故速报表</title>
		<%
		    /***************获得当前jsp文件所在路径，用来查找cell的模板文件，一般只要***************/
		    /***************模板保存在jsp所在路径中templet目录中，且和jsp文件同名，这里不需要修改***/
		    String Uri = request.getRequestURI();
		    Uri = Uri.substring(0, Uri.lastIndexOf("/")) + "/templet"
		            + Uri.substring(Uri.lastIndexOf("/"), Uri.lastIndexOf("."))
		            + ".cll";

		   
		    String sgbh = request.getParameter("sgbh");
		    if (sgbh == null)
		        sgbh = "";
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
	//为了美观，把cell的焦点给其他对象,目前还不好使
	//document.form1.sgbh.focus();
	
}

void function  write_Title(){
//填写日期	
<%System.out.println("这里可以放入java代码，从数据库中读取信息，按照下面的样子往cell表格中填写");%>	
	DCellWeb1.SetCellString(2,3,0,"<%=sgbh%>");
}
void function  write_DATA(){
<%
   /********真正的业务逻辑在这里*******/
   DbTrade myDbt = new DbTrade();
   ResultSet myRs =null;  
   int i=0;
   String sql="select GZSZTLJ,GDD,XB,ZL,TQ,GZDD,to_char(FSSJ,'yyyy-mm-dd hh24:mi') FSSJ,"
   +" TDQD,to_char(FXSJ,'yyyy-mm-dd hh24:mi')FXSJ,YXFW,to_char(TZQXSJ,'yyyy-mm-dd hh24:mi') TZQXSJ,"
   +" YXCC,ZZCDGQMC,to_char(ZZCDGQSJ,'mm-dd hh24:mi') ZZCDGQSJ,ZZCDGQRS,ZZDDGQMC,"
   +" to_char(ZZDDGQSJ,'mm-dd hh24:mi') ZZDDGQSJ,ZZDDGQRS,QXLDR,ZW,ZRS,to_char(TDQSSJ,'yyyy-mm-dd hh24:mi') TDQSSJ,"
   +" to_char(TDJSSJ,'mm-dd hh24:mi') TDJSSJ,TDSC,to_char(QXQSSJ,'yyyy-mm-dd hh24:mi') QXQSSJ, "
   +" to_char(QXJSSJ,'mm-dd hh24:mi') QXJSSJ,QXSC,DQYXFS,SBSHJRYSWQK,YYJCS,GDDDY,"
   +" to_char(TBSJ,'yyyy-mm-dd') TBSJ from v_z_qxfz_gzsb v where v.gzbh='"+sgbh+"'";
   System.out.println(sql);
   try {       
        myRs= myDbt.executeQuery(sql);
        while (myRs.next()) {  
            //故障所在铁路局        
           	out.println("DCellWeb1.SetCellString(3,2,0,'"+myRs.getString("GZSZTLJ")+"')");
           	//供电段        
           	out.println("DCellWeb1.SetCellString(6,2,0,'"+myRs.getString("GDD")+"')"); 
           	//线别        
           	out.println("DCellWeb1.SetCellString(3,4,0,'"+myRs.getString("XB")+"')");
          	//故障种类        
           	out.println("DCellWeb1.SetCellString(5,4,0,'"+myRs.getString("ZL")+"')");
           	//天气        
           	out.println("DCellWeb1.SetCellString(7,4,0,'"+myRs.getString("TQ")+"')");
           	//故障地点        
           	out.println("DCellWeb1.SetCellString(3,5,0,'"+myRs.getString("GZDD")+"')");
           	//发生时间        
           	out.println("DCellWeb1.SetCellString(5,5,0,'"+myRs.getString("FSSJ")+"')");
        	//停电范围       
           	out.println("DCellWeb1.SetCellString(3,6,0,'"+myRs.getString("TDQD")+"')");
           	//发现时间        
           	out.println("DCellWeb1.SetCellString(5,6,0,'"+myRs.getString("FXSJ")+"')");
        	//影响范围       
           	out.println("DCellWeb1.SetCellString(3,7,0,'"+myRs.getString("YXFW")+"')");
        	//通知抢修时间        
           	out.println("DCellWeb1.SetCellString(5,7,0,'"+myRs.getString("TZQXSJ")+"')");
        	//影响行车        
           	out.println("DCellWeb1.SetCellString(3,8,0,'"+myRs.getString("YXCC")+"')");
        	
        	//最早出动班组        
           	out.println("DCellWeb1.SetCellString(3,10,0,'"+myRs.getString("ZZCDGQMC")+"')");
        	//最早出动时间        
           	out.println("DCellWeb1.SetCellString(5,10,0,'"+myRs.getString("ZZCDGQSJ")+"')");
        	//最早出动人数        
           	out.println("DCellWeb1.SetCellString(7,10,0,'"+myRs.getString("ZZCDGQRS")+"')");
        	//最早到达班组        
           	out.println("DCellWeb1.SetCellString(3,11,0,'"+myRs.getString("ZZDDGQMC")+"')");
        	//最早到达时间        
           	out.println("DCellWeb1.SetCellString(5,11,0,'"+myRs.getString("ZZDDGQSJ")+"')");
        	//最早到时人数        
           	out.println("DCellWeb1.SetCellString(7,11,0,'"+myRs.getString("ZZDDGQRS")+"')");
        	//抢修领导        
           	out.println("DCellWeb1.SetCellString(3,12,0,'"+myRs.getString("QXLDR")+"')");
        	//领导职务        
           	out.println("DCellWeb1.SetCellString(5,12,0,'"+myRs.getString("ZW")+"')");
        	//总人数        
           	out.println("DCellWeb1.SetCellString(7,12,0,'"+myRs.getString("ZRS")+"')");
        	//停电时间        
           	out.println("DCellWeb1.SetCellString(3,13,0,'"+myRs.getString("TDQSSJ")+"')");
           	//至        
           	out.println("DCellWeb1.SetCellString(5,13,0,'"+myRs.getString("TDJSSJ")+"')");
           	//共计        
           	out.println("DCellWeb1.SetCellString(7,13,0,'"+myRs.getString("TDSC")+"')");
           	//抢修时间        
           	out.println("DCellWeb1.SetCellString(3,14,0,'"+myRs.getString("QXQSSJ")+"')");
           	//至        
           	out.println("DCellWeb1.SetCellString(5,14,0,'"+myRs.getString("QXJSSJ")+"')");
           	//共计        
           	out.println("DCellWeb1.SetCellString(7,14,0,'"+myRs.getString("QXSC")+"')");
           	//当前运行方式        
           	out.println("DCellWeb1.SetCellString(3,15,0,'"+myRs.getString("DQYXFS")+"')");
           	//设备损坏及人员伤亡情况        
           	out.println("DCellWeb1.SetCellString(3,16,0,'"+myRs.getString("SBSHJRYSWQK")+"')");
           	//原因及措施        
           	out.println("DCellWeb1.SetCellString(3,17,0,'"+myRs.getString("YYJCS")+"')");
           	//供电调度员        
           	out.println("DCellWeb1.SetCellString(3,34,0,'"+myRs.getString("GDDDY")+"')");
           	//填报时间        
           	out.println("DCellWeb1.SetCellString(5,34,0,'"+myRs.getString("TBSJ")+"')");
          }
   		sql="select to_char(QXSJ,'mm-dd hh24:mi') QXSJ,QXJL from z_qxfz_qxgc where gzbh='"+sgbh+"' order by qxsj";
   		myRs= myDbt.executeQuery(sql);
        while (myRs.next()) {  
            //时间  
            out.println("DCellWeb1.SetCellString(2,"+(20+i)+",0,'"+CheckSting(myRs.getString("QXSJ"))+"')");
            //抢修内容记录 
            out.println("DCellWeb1.SetCellString(3,"+(20+i)+",0,'"+CheckSting(myRs.getString("QXJL"))+"')");
           	i++;
        }        
    } catch (Exception ex) {
    	System.out.println("事故速报异常 " + ex);
    }finally {
        try {           
            if (myRs != null)
                myRs.close();
            if (myDbt != null)
                myDbt.close();
        } catch (Exception e) {
		System.out.println("事故速报关闭连接异常 " + e);
        }
    }
    /********真正的业务逻辑在这里*******/
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
	<body bgcolor="DFE8F6" topmargin="0" leftmargin="2"
		onresize="return window_onresize()" onLoad="window_onload()">
		<br>
		<table>
			<tr>
				<td>
					<!-- form的action需要修改成本jsp界面 -->
					<form name="form1" method="post" action="sgsb.jsp">
						<font color="#000000"><b>事故编号</b> </font>
						<input type="hidden" name="act" value="0">
						<input type="text" name="sgbh" id="sgbh" size="10"
							value="<%=sgbh %>">
						<input type="submit" name="query" value="查  询"
							onClick="set_act(1)">
						<!--input type=submit name=save value=保  存 onClick=set_act(2) -->
						<!-- input type=submit name=gen value=生  成 onClick=set_act(3) -->
						<input type=button id=button1 name=button2
							onClick="button2_onclick()" value="打  印">
						<input type=button id=yulan name=yulan onClick="button1_onclick()"
							value="预  览">
						<input type=button id=button3 name=button3
							onClick="button3_onclick()" value="另  存">
						<font color="#000000"><b>比例</b> </font>
						<select name="scale" onChange="set_cellScale()">
							<option value="0.8">
								80%
							</option>
							<option value="0.7">
								70%
							</option>
							<option value="1" selected>
								100%
							</option>
							<option value="1.5">
								150%
							</option>
						</select>
					</form>
				</td>
			</tr>
			<tr>
				<td>
					<!--**************************声明cell对象**************************-->
					<OBJECT classid=clsid:3F166327-8030-4881-8BD2-EA25350E574A
						id=DCellWeb1 style="LEFT: 5px; top: 66px; POSITION: absolute;"
						CODEBASE="http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=request.getContextPath()%>/cell/cellweb5.cab#Version=5,1,3,1222">
						<PARAM NAME="_Version" VALUE="65536">
						<PARAM NAME="_ExtentX" VALUE="15770">
						<PARAM NAME="_ExtentY" VALUE="11192">
						<PARAM NAME="_StockProps" VALUE="0">
					</OBJECT>
				</td>
			</tr>
		</table>
		<script language="JavaScript">
	parent.status="打开完毕";
</script>
		<script language="JavaScript" src="../../calender/calender_new.js"></script>
	</body>
</html>
