<%@ page contentType="text/html; charset=gb2312" language="java" errorPage="" %>
<%@ page import="java.sql.*,org.jdom.*,java.io.*,java.util.*"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>xxx�������</title>
<%
	/***************��õ�ǰjsp�ļ�����·������������cell��ģ���ļ���һ��ֻҪ***************/
	/***************ģ�屣����jsp����·����templetĿ¼�У��Һ�jsp�ļ�ͬ�������ﲻ��Ҫ�޸�***/
	String Uri = request.getRequestURI();
	Uri = Uri.substring(0, Uri.lastIndexOf("/")) + "/templet"
			+ Uri.substring(Uri.lastIndexOf("/"), Uri.lastIndexOf("."))
			+ ".cll";

	/******ִ�ж����жϣ�����������������ɣ���ִ�д洢���ߴ洢����*************/
	String act = request.getParameter("act");
	if (act == null)
		act = "1";
	System.out.println("����û�����Ǹ���ť:" + act);
    Vector v=new Vector();
	/****վ�����壬��ȡ��ѡվ��****/
	String gqpym = request.getParameter("StID");
	System.out.println(gqpym);

	/****ʱ�䶨�壬��ȡ��ǰʱ��********/
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
<%System.out.println("������Է���java���룬�����ݿ��ж�ȡ��Ϣ�����������������cell�������д");%>	
	//alert(<%=ymd_begin%>);
	var ymd_begin_end = "<%=ymd_begin%>" +" �� " + "<%=ymd_end%>";
	DCellWeb1.SetCellString(2,2,0,ymd_begin_end);
}

void function  write_DATA(){
<%
	try {
        DbTrade db_connection = new DbTrade();
        ResultSet myRs =null;        
        String sql;
        
        //��д�����б�
        sql = "select distinct gqmc, gqpym from j_gyjc_gqzd  where jglbdm not in('1','3')";
        myRs= db_connection.executeQuery(sql);
        while (myRs.next()) {   
            String[] ary=new String[2];
            ary[0]=myRs.getString("gqmc");
            ary[1]=myRs.getString("gqpym");
            v.add(ary); 
        }
        myRs.close();
       
       //����վ����ѯ��բ��¼ 
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
      	
       	int row = 4;	 	 	 //��      
       	int serialNum=1;;		 //���
       	String status="";	 	 //�غ�բ״̬
       		
        while (myRs.next()) 
        {     
            if(myRs.getString("chzzt").equals("0"))
            	status="ʧ��";
			else if(myRs.getString("chzzt").equals("1"))
				status="�ɹ�";
			else if(myRs.getString("chzzt").equals("2"))
			    status="����̬";    				    		           
			
			//������cell����Ƴ�ʼ�ļ��е��������������У���ʼֵ��30�У��������£�
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
           	//�����ʺϵ��иߣ��������£�
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
<body  bgcolor="DFE8F6" topmargin="0" leftmargin="2"  onresize="return window_onresize()" onLoad="window_onload()">
<br>
<table>
<tr><td>
	<!-- form��action��Ҫ�޸ĳɱ�jsp���� -->
	<form  name="form1" method="post" action="dlqzdtzjl.jsp">	
		<font color="#000000"><b>��ʼ����</b></font>
		<input type="hidden" name="act" value="0">
		<input type="text" name="ymd1" onfocus="setdayoff(this,document.all.ymd1)" size="10" value="<%=ymd_begin%>">
		<font color="#000000"><b>��������</b></font>
		<input type="text" name="ymd2" onfocus="setdayoff(this,document.all.ymd2)" size="10" value="<%=ymd_end%>">
		<font color="#000000"><b>��ͤ</b></font>
		<select name="StID" >		
			<option value="ALL" >������ͤ</option>		
			<%
			for(int i=0;v!=null&&i<v.size();i++){
				String[] ary=(String[])v.get(i);
				out.print("<option value="+ary[1]+" >"+ary[0]+"</option>");
			}
			 %>
			
		</select>
		<input type="submit" name="query" value="��  ѯ" onClick="set_act(1)">			
		<input type=button id=button1 name=button2 onClick="button2_onclick()"  value="��  ӡ">
		<input type=button id=button1 name=button1 onClick="button1_onclick()"  value="Ԥ  ��">
		<input type=button id=button3 name=button3 onClick="button3_onclick()"  value="��  ��">
		<font color="#000000"><b>����</b></font>
		<select name="scale" onChange="set_cellScale()">		
			<option value="0.7" >70%</option>
			<option value="0.8">80%</option>
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
