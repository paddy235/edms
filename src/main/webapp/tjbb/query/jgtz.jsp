<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>����֪ͨ</title>
<%
/***************��õ�ǰjsp�ļ�����·������������cell��ģ���ļ���һ��ֻҪ***************/
/***************ģ�屣����jsp����·����templetĿ¼�У��Һ�jsp�ļ�ͬ�������ﲻ��Ҫ�޸�***/
String Uri=request.getRequestURI();
Uri=Uri.substring(0,Uri.lastIndexOf("/"))+"/templet"+Uri.substring(Uri.lastIndexOf("/"),Uri.lastIndexOf("."))+".cll";

/******ִ�ж����жϣ�����������������ɣ���ִ�д洢���ߴ洢����*************/
String act=request.getParameter("act");
if(act==null)act="1";
String tzid = request.getParameter("tzid");
		    if (tzid == null)
		        tzid = "";
System.out.println("����û�����Ǹ���ť:"+tzid);


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
		DCellWeb1.ShowTopLabel(0,1);		//�����Ƿ���ʾ�б�
		DCellWeb1.ShowSideLabel(0,1);		//�����Ƿ���ʾ�б�
		DCellWeb1.ShowHScroll(1,0);		//�����Ƿ���ʾˮƽ������
		DCellWeb1.ShowVScroll(1,0);		//�����Ƿ���ʾ��ֱ������
		DCellWeb1.ShowSheetLabel(1,0);		//�����Ƿ���ʾҳǩ
		set_cellScale();	//�ڳ�ʼ��ʱ������ٷֱ���ʾ
	//*****************����cell�ؼ�����۳���Ƭ��**********************	
	//��д����
	write_DATA();
	//�������й�ʽ
	DCellWeb1.CalculateAll();	
	//��д���ڡ���ͷ����˵���Ϣ
	write_Title();	
	//�ƶ����㵽��ʱ��λ�ã�Ϊ�˽�������
	DCellWeb1.MoveToCell(9,2);
}

void function  write_Title(){
//��д����	
<%System.out.println("������Է���java���룬�����ݿ��ж�ȡ��Ϣ�����������������cell�������д");%>	
//	DCellWeb1.SetCellString(9,2,0,"<%=tzid%>");
}
void function  write_DATA(){
<%	try {
        DbTrade db_connection = new DbTrade();
        ResultSet myRs =null;
   		String sql="select tzbh,ksjtwz,t_zbjgb,t_jgb,jgb,sgb,gdddy,xdy,pdqk,jgyy,bz,to_char(tzsj,'yyyy-mm-dd') rq, to_char(tzsj,'hh24:mi') sj,to_char(ccsj,'yyyy-mm-dd') ccrq, to_char(ccsj,'hh24:mi') ccsj from Z_YXGL_JGTZ where tzid="+tzid+"";    
        myRs= db_connection.executeQuery(sql);  
        while (myRs.next()) {   
          	//    ��һ   
           	out.println("DCellWeb1.SetCellString(9,2,0,'"+CheckSting(myRs.getString("tzbh"))+"');");
           	out.println("DCellWeb1.SetCellString(2,4,0,'"+CheckSting(myRs.getString("ksjtwz"))+"');");
           	out.println("DCellWeb1.SetCellString(2,5,0,'"+CheckSting(myRs.getString("t_zbjgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,6,0,'"+CheckSting(myRs.getString("t_jgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,7,0,'"+CheckSting(myRs.getString("jgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,8,0,'"+CheckSting(myRs.getString("sgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,9,0,'"+CheckSting(myRs.getString("gdddy"))+"');");
           	out.println("DCellWeb1.SetCellString(9,9,0,'"+CheckSting(myRs.getString("xdy"))+"');");
           	out.println("DCellWeb1.SetCellString(5,4,0,'"+CheckSting(myRs.getString("pdqk"))+"');");
           	out.println("DCellWeb1.SetCellString(6,7,0,'"+CheckSting(myRs.getString("bz"))+"');");
        	out.println("DCellWeb1.SetCellString(4,9,0,'"+CheckSting(myRs.getString("rq"))+"');");
          	out.println("DCellWeb1.SetCellString(7,9,0,'"+CheckSting(myRs.getString("sj"))+"');");  
          	//    ����  
            out.println("DCellWeb1.SetCurSheet(1);");			//��ǰ��ҳΪ0��
           	out.println("DCellWeb1.SetCellString(2,4,1,'"+CheckSting(myRs.getString("ksjtwz"))+"');");
           	out.println("DCellWeb1.SetCellString(2,5,1,'"+CheckSting(myRs.getString("t_zbjgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,6,1,'"+CheckSting(myRs.getString("t_jgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,7,1,'"+CheckSting(myRs.getString("jgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,8,1,'"+CheckSting(myRs.getString("sgb"))+"');");
           	out.println("DCellWeb1.SetCellString(2,9,1,'"+CheckSting(myRs.getString("gdddy"))+"');");
           	out.println("DCellWeb1.SetCellString(8,9,1,'"+CheckSting(myRs.getString("xdy"))+"');");
            out.println("DCellWeb1.SetCellString(4,9,1,'"+CheckSting(myRs.getString("ccrq"))+"');");
          	out.println("DCellWeb1.SetCellString(6,9,1,'"+CheckSting(myRs.getString("ccsj"))+"');");  
       	    out.println("DCellWeb1.SetCellString(8,2,1,'"+(myRs.getInt("tzbh")+1)+"');");
       		out.println("DCellWeb1.SetCurSheet(0);");	
       	 }
        db_connection.close();
    } catch (Exception ex) {
		System.out.println("jgtz:"+ex);
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
	<form  name="form1" method="post" action="jgtz.jsp">	
		
						<input type=button id=button1 name=button2
							onClick="button2_onclick()" value="��  ӡ">
						<input type=button id=yulan name=yulan
							onClick="button1_onclick()" value="Ԥ  ��">
						<input type=button id=button3 name=button3
							onClick="button3_onclick()" value="��  ��">	<font color="#000000"><b>����</b></font>
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
