<%@ page contentType="text/html; charset=gb2312" language="java"  errorPage="" %>

<%@ page import="mor.report.*"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>���ȱ���</title>
<%
String Uri=request.getRequestURI();
BaseDataBean Bean=(BaseDataBean)request.getAttribute("DataBean");
Uri=Uri.substring(0,Uri.lastIndexOf("/"))+"/templet/"+Bean.getCellFile();

/***************����һЩ���Ʊ���***************************/
//ʱ�䶨��
String ymd=request.getParameter("ymd");
if(ymd==null){
	java.util.Calendar c = java.util.Calendar.getInstance();
	java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
	ymd=sdf.format(c.getTime());
}
%>


<SCRIPT language="JavaScript1.2">
<!--cell�ؼ�ʹ��javascript

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
//����ע�ắ��
	if (DCellWeb1.Login( "����������Ϣƽ̨", "", "13040352", "1460-1706-0167-6005" ) == 0){
		alert("ע��ʧ��!");
	}
	//*****************����cell�ؼ�����۳���Ƭ��**********************	
		set_width_height();			//���ÿ�Ⱥ͸߶�
		DCellWeb1.OpenFile("http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=Uri%>", "");
		DCellWeb1.SetCurSheet(0);			//��ǰ��ҳΪ0��
		DCellWeb1.ShowTopLabel(0,0);		//�����Ƿ���ʾ�б�
		DCellWeb1.ShowSideLabel(0,0);		//�����Ƿ���ʾ�б�
		DCellWeb1.ShowHScroll(1,0);		//�����Ƿ���ʾˮƽ������
		DCellWeb1.ShowVScroll(1,0);		//�����Ƿ���ʾ��ֱ������
		DCellWeb1.ShowSheetLabel(0,0);		//�����Ƿ���ʾҳǩ
		set_cellScale();	//�ڳ�ʼ��ʱ������ٷֱ���ʾ
	//*****************����cell�ؼ�����۳���Ƭ��**********************	
	//��д����
	
	write_date();
	timeOutVar=setTimeout('write_data()', 200);
}
function set_cellScale() {
//����cell�ؼ�����ʾ����
	var scale=document.form1.scale.value;
	DCellWeb1.SetScreenScale(0, scale);
}
function write_data() {
//��д����
	parent.status="���ڼ������ݣ����Ե�.................";
	<%=Bean.SettingCell()%>
	form1.oldData.value=SaveToCSV(<%=Bean.getArea()%>);
	DCellWeb1.CalculateAll();
	parent.status="����ϣ�";
}
void function  write_date(){
//��д����
	DCellWeb1.SetCellString(<%=Bean.getDateCell()%>,0,"<%=ymd%>");
}

void function insert1row(_row){
	var TotalRows = DCellWeb1.GetRows(0)-1;	
		DCellWeb1.InsertRow(TotalRows,1,0);
}


void function  button1_onclick(){
//��ӡԤ���Ĺ���
		DCellWeb1.PrintPreview(1,DCellWeb1.GetCurSheet);
}
function window_onresize() {
	set_width_height();
}
function set_width_height() {
//���ÿ�Ⱥ͸߶ȵķ���
	var lWidth = document.body.offsetWidth;
	if( lWidth <= 0) lWidth = 1;
	DCellWeb1.style.width =lWidth-10;
	var lHeight = document.body.offsetHeight - parseInt(DCellWeb1.style.top);
	if( lHeight <= 0 ) lHeight = 1;
	DCellWeb1.style.height = lHeight-1;
}
void function  button2_onclick(){
//��ӡ�Ĺ���
		DCellWeb1.PrintSheet(1,2);
}
void function  button3_onclick(){
//����ļ�����
		DCellWeb1.SaveFile();
}
void function  button4_onclick(){
//���浽���ݿ�
		//DCellWeb1.SaveFile();
		form1.newData.value=SaveToCSV(<%=Bean.getArea()%>);
		form1.PostBack.value="true";
			form1.submit();
}
void function  buttonjs_onclick(){
//����
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
		<font color="#ee0000"><b>�� ��</b></font>
		<input class="time_input"  name="ymd" onfocus="setdayoff(this,document.all.ymd)" size="9" value="<%=ymd%>">
		
		<input type="submit" name="query" value="��  ѯ">		
		<input type="button" id="button4" name="button4" onClick="button4_onclick()"  value="��  ��" OnMouseOver="ExitEdit()">
		<input type="button" name="buttonjs" value="��  ��" onClick="buttonjs_onclick()">
		<input type="button" id="button2" name="button2" onClick="button2_onclick()"  value="��  ӡ">
		<input type="button" id="button1" name="button1" onClick="button1_onclick()"  value="Ԥ  ��">
		<input type="button" id="button3" name="button3" onClick="button3_onclick()"  value="��  ��" OnMouseOver="ExitEdit()">
		
		<font color="#ee00ff"><b>����</b></font>
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
<!--**************************����cell����**************************-->
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
	parent.status="�����";
</script>
<script language="JavaScript" src="calender/calender_new.js"></script>
</body> 
</html> 