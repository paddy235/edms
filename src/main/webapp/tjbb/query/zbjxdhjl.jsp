<%@ page contentType="text/html; charset=gb2312" language="java" errorPage="" %>
<%@ page import="java.sql.*,org.jdom.*,java.io.*,java.util.*"%>
<%@page import="mor.commons.db.DbTrade"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>���䵹����¼</title>
<%
/***************��õ�ǰjsp�ļ�����·������������cell��ģ���ļ���һ��ֻҪ***************/
/***************ģ�屣����jsp����·����templetĿ¼�У��Һ�jsp�ļ�ͬ�������ﲻ��Ҫ�޸�***/
String Uri=request.getRequestURI();
Uri=Uri.substring(0,Uri.lastIndexOf("/"))+"/templet"+Uri.substring(Uri.lastIndexOf("/"),Uri.lastIndexOf("."))+".cll";
String ymd1="";
String ymd2="";
	java.util.Calendar c = java.util.Calendar.getInstance();
	java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
	ymd2=sdf.format(c.getTime());
	c.add(java.util.Calendar.DATE, -30);
	ymd1=sdf.format(c.getTime());

/******ִ�ж����жϣ�����������������ɣ���ִ�д洢���ߴ洢����*************/
String where=request.getParameter("where");
if(where==null||where.equalsIgnoreCase("1=1"))where="DHRQ>=to_date('"+ymd1+"','yyyy-mm-dd') and DHRQ<=to_date('"+ymd2+"','yyyy-mm-dd') ";
String sql="select b.gqmc,to_char(dhrq,'yyyy-mm-dd hh24:mi') dhrq,yxqk from z_yxgl_zbjxdhjl a,j_gyjc_gqzd b where  a.bds=b.gqdm and "+ where+"order by b.ddtdm,a.bds,dhrq";
System.out.println("sql:"+sql);
%>
<SCRIPT language="JavaScript1.2">
<!--cell�ؼ�ʹ��javascript
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
	write_DATA();
	//�������й�ʽ
	DCellWeb1.CalculateAll();	
	//��д���ڡ���ͷ����˵���Ϣ
	write_Title();	
	//�ƶ����㵽��ʱ��λ�ã�Ϊ�˽�������
	DCellWeb1.MoveToCell(3,5);
}

void function  write_Title(){
//��д����	
	
}
void function  write_DATA(){
<%
 try {
        DbTrade db_connection = new DbTrade();
        java.sql.ResultSet rs=db_connection.executeQuery(sql);
        int col=3;     //ÿȡ����
        int bcol=0;    //��˵�����
        int mod=2;     //ȡģ��ÿ����һģ�����ﹲȡ��ģ
        int scol=2;    //��ʼ���ǵڶ���
        int row=2;     //����ڶ��п�ʼ
        int old_row=3; 
        int xh=0;
		String old_bds="";                  //������һ��BDS
	    while(rs.next()){
	    	if(!old_bds.equalsIgnoreCase(rs.getString("gqmc"))){
	    		row++;
	    		bcol=0;
	    		xh=0;
	    		//InsertRow(long startrow, long count, long sheetindex)������
	    		out.println("DCellWeb1.InsertRow("+ (row+1) +",1,0);");
	    		//SetRowHeight(long type, long h, long row, long sheet)���������и߶�
	    		out.println("DCellWeb1.SetRowHeight(1,25,"+ (row+1)+",0);");
	    		out.println("DCellWeb1.SetCellString(1,"+row+",0,'"+rs.getString("gqmc").replaceAll("\r\n","\\\\r\\\\n")+"');");
	    		old_bds=rs.getString("gqmc");
	    		if(row!=old_row){
	    			out.println("DCellWeb1.MergeCells(1,"+ old_row +",1,"+ (row-1) + ");");
	    			old_row=row;
	    		}
	    		//MergeCells(long col1, long row1, long col2, long row2)
	    	}
	    	xh++;
	    	out.println("DCellWeb1.SetCellString("+ (scol+(col*bcol)) +","+ row + ",0,"+ xh + ");");
	    	out.println("DCellWeb1.SetCellString("+ (scol+1+(col*bcol)) +","+row+",0,'"+rs.getString("dhrq").replaceAll("\r\n","\\\\r\\\\n")+"');");
	    	out.println("DCellWeb1.SetCellString("+ (scol+2+(col*bcol)) +","+row+",0,'"+rs.getString("yxqk").replaceAll("\r\n","\\\\r\\\\n")+"');");
		    
		    bcol++;
		    if(bcol==mod){
		    	bcol=0;row++;
		    	out.println("DCellWeb1.InsertRow("+ (row+1) +",1,0);");
		    	out.println("DCellWeb1.SetRowHeight(1,25,"+ (row+1)+",0);");
		    }
		    
	    }
	    out.println("DCellWeb1.MergeCells(1,"+ old_row +",1,"+ row + ");");
	    //DeleteRow(long startcol,long count,long sheetindex)
	    out.println("DCellWeb1.DeleteRow("+(row+1)+",2,0);");
        db_connection.close();
    } catch (Exception ex) {
			System.out.println(ex.getMessage());
    }
%>
}

void function  button1_onclick(){
//��ӡԤ���Ĺ���
		DCellWeb1.PrintPreview(1,DCellWeb1.GetCurSheet);
}
void function  button2_onclick(){
//��ӡ�Ĺ���
		DCellWeb1.PrintSheet(1,2);
}
function window_onresize() {
	set_width_height();
}
function set_cellScale() {
//����cell�ؼ�����ʾ����
	//alert(document.form1.scale.value);
	var scale=document.form1.scale.value;
	DCellWeb1.SetScreenScale(0, scale);
}
function set_width_height() {
//���ÿ�Ⱥ͸߶ȵķ���
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
//��һ���д���
    var left = (screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2-50;
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
}
void function  button3_onclick(){
//����ļ�����
		DCellWeb1.SaveFile();
}
-->
</SCRIPT>
</head>
<body  bgcolor="DFE8F6" topmargin="0" leftmargin="2"  onresize="return window_onresize()" onLoad="window_onload()" scroll="no">
<br>
<table>
<tr><td>
	<!-- form��action��Ҫ�޸ĳɱ�jsp���� -->
	<form  name="form1" method="post" >	
		<input type=button id=button1 name=button2 onClick="button2_onclick()"  value="��  ӡ">
		<input type=button id=button1 name=button1 onClick="button1_onclick()"  value="Ԥ  ��">
		<input type=button id=button3 name=button3 onClick="button3_onclick()"  value="��  ��">
		<font color="#000000"><b>����</b></font>
		<select name="scale" onChange="set_cellScale()">		
			<option value="0.8" >80%</option>
			<option value="0.7">70%</option>
			<option value="1" selected>100%</option>
			<option value="1.5">150%</option>
		</select>
	</form>
</td></tr>
<tr><td>
<!--**************************����cell����**************************-->
<OBJECT classid=clsid:3F166327-8030-4881-8BD2-EA25350E574A id=DCellWeb1  style="LEFT: 5px;top:66px;POSITION:  absolute;" 	CODEBASE="http://<%=request.getServerName()%>:<%=request.getServerPort()%><%=request.getContextPath()%>/cell/cellweb5.cab#Version=5,1,3,1222">
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
<script language="JavaScript" src="../../calender/calender_new.js"></script>
</body> 
</html>  
