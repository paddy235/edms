<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
    <title>天窗信息</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <link rel="stylesheet" href="css/default.css" type="text/css"></link></head>
  
  <body>
		<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
			<TBODY>

				<TR>
					<TD style="HEIGHT: 24px" align=left>
						&nbsp;您现在所在位置: 首页--&gt;日常管理 --&gt;天窗信息&nbsp;
					</TD>
				</TR>
				<tr>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						天窗信息
					</TD>
				</TR>
				<tr>
				  <td>
				  
				   <TABLE  width="100%" >
        <TBODY>
        <TR>
          <TD>单位名称：<SELECT class=grayinput id=SBBM_DropDownList1 
            name=SBBM$DropDownList1> <OPTION value="" selected>请选择单位</OPTION> 
           <option>长沙变电所</option>
            <option>韶关变电所</option>
             </SELECT> </TD>
         
          <TD>起始时间： <INPUT class=grayinput id=txtFXSJ style="WIDTH: 90px" 
            onclick=showcalendar(this) value=2009-08-24 name=txtFXSJ></TD>
            <TD>至 <INPUT class=grayinput id=txtFXSJ style="WIDTH: 90px" 
            onclick=showcalendar(this) value=2009-08-24 name=txtFXSJ></TD>
          <TD><INPUT class=blueButtonCss id=Button1 type=submit value=查询 name=Button1>&nbsp;
          </TD></TR></TBODY></TABLE>
				  </td>
				</tr>
			</TBODY>
		</TABLE>
		<br>
		 <TABLE class=table_without_detail_lines id=GridView1 
      style="WIDTH: 99%; BORDER-COLLAPSE: collapse" cellSpacing=0 rules=cols 
      border=1>
        <TBODY>
        <TR>
          <TH scope=col>序号</TH>
          <TH scope=col>施工单位</TH>
          <TH scope=col>施工地点</TH>
          <TH scope=col>停电范围</TH>
          <TH scope=col>检修内容</TH>
          <TH scope=col>列调给点时间</TH>
          <TH scope=col>变电所停电倒闸时间</TH>
          <TH scope=col>变电所送电倒闸时间</TH>
          <TH scope=col>变电所停电时间</TH>
          <TH scope=col>批准作业时间</TH>
          <TH scope=col>要求完成时间</TH>
          <TH scope=col>消令时间</TH>
          <TH scope=col>工区作业时间</TH>
          <TH scope=col>上网人</TH>
          <TH scope=col>出勤人</TH>
          <TH style="WHITE-SPACE: nowrap" scope=col>上网率%</TH>
            <TH scope=col>调度员姓名</TH>
             <TH scope=col>备注</TH>
          </TR>
        <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>1</LABEL> </TD>
          <TD style="WIDTH: 10%">郴州网工区 </TD>
          <TD style="WIDTH: 10%">2387线路所站（站）</TD>
          <TD style="WIDTH: 10%">龙津沟～凤凰山 </TD>
          <TD style="WIDTH: 10%">接触网设备维修：更换锈蚀吊弦、斜拉线 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 60px">2009-08-21 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">79</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH:10%">6:58:00</TD>
          <TD style="WIDTH: 10%">70</TD>
          <TD style="WIDTH: 60px">22</TD>
        
           <TD style="WIDTH: 60px">23</TD>
            <TD style="WIDTH: 60px">95.7</TD> 
            <TD style="WIDTH: 10%">王晓飞</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>2</LABEL> </TD>
          <TD style="WIDTH: 10%">萍乡网工区 </TD>
          <TD style="WIDTH: 10%">2387线路所站（站）</TD>
          <TD style="WIDTH: 10%">龙津沟～凤凰山 </TD>
          <TD style="WIDTH: 10%">接触网设备维修：更换锈蚀吊弦、斜拉线 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 60px">2009-08-21 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">79</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH:10%">6:58:00</TD>
          <TD style="WIDTH: 10%">70</TD>
          <TD style="WIDTH: 60px">22</TD>
        
           <TD style="WIDTH: 60px">23</TD>
            <TD style="WIDTH: 60px">95.7</TD> 
            <TD style="WIDTH: 10%">王晓飞</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>3</LABEL> </TD>
          <TD style="WIDTH: 10%">衡阳网工区 </TD>
          <TD style="WIDTH: 10%">2387线路所站（站）</TD>
          <TD style="WIDTH: 10%">龙津沟～凤凰山 </TD>
          <TD style="WIDTH: 10%">接触网设备维修：更换锈蚀吊弦、斜拉线 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 60px">2009-08-21 </TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH: 10%">79</TD>
          <TD style="WIDTH: 10%">6:58:00</TD>
          <TD style="WIDTH:10%">6:58:00</TD>
          <TD style="WIDTH: 10%">70</TD>
          <TD style="WIDTH: 60px">22</TD>
        
           <TD style="WIDTH: 60px">23</TD>
            <TD style="WIDTH: 60px">95.7</TD> 
            <TD style="WIDTH: 10%">王晓飞</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          
          </TBODY></TABLE>
		
		
   
  </body>
</html>
