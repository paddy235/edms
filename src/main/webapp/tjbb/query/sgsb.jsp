<%@ page contentType="text/html; charset=gb2312" language="java"
	errorPage=""%>
<%@page import="mor.commons.db.DbTrade"%>
<%@ include file="../../share/CheckDateorStr.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
		<title>�¹��ٱ���</title>
		<%
		    /***************��õ�ǰjsp�ļ�����·������������cell��ģ���ļ���һ��ֻҪ***************/
		    /***************ģ�屣����jsp����·����templetĿ¼�У��Һ�jsp�ļ�ͬ�������ﲻ��Ҫ�޸�***/
		    String Uri = request.getRequestURI();
		    Uri = Uri.substring(0, Uri.lastIndexOf("/")) + "/templet"
		            + Uri.substring(Uri.lastIndexOf("/"), Uri.lastIndexOf("."))
		            + ".cll";

		   
		    String sgbh = request.getParameter("sgbh");
		    if (sgbh == null)
		        sgbh = "";
		%>
		<SCRIPT language="JavaScript1.2">
<!--cell�ؼ�ʹ��javascript
void function  window_onload() {
//����ע�ắ��
	if (DCellWeb1.Login( "����������Ϣƽ̨", "", "13040352", "1460-1706-0167-6005" ) == 0){
		alert("ע��ʧ��!");
	}
	//*****************����cell�ؼ�����۳���Ƭ��**********************	
		set_width_height();			//���ÿ��Ⱥ͸߶�
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
	//Ϊ�����ۣ���cell�Ľ������������,Ŀǰ������ʹ
	//document.form1.sgbh.focus();
	
}

void function  write_Title(){
//��д����	
<%System.out.println("������Է���java���룬�����ݿ��ж�ȡ��Ϣ�����������������cell��������д");%>	
	DCellWeb1.SetCellString(2,3,0,"<%=sgbh%>");
}
void function  write_DATA(){
<%
   /********������ҵ���߼�������*******/
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
            //����������·��        
           	out.println("DCellWeb1.SetCellString(3,2,0,'"+myRs.getString("GZSZTLJ")+"')");
           	//�����        
           	out.println("DCellWeb1.SetCellString(6,2,0,'"+myRs.getString("GDD")+"')"); 
           	//�߱�        
           	out.println("DCellWeb1.SetCellString(3,4,0,'"+myRs.getString("XB")+"')");
          	//��������        
           	out.println("DCellWeb1.SetCellString(5,4,0,'"+myRs.getString("ZL")+"')");
           	//����        
           	out.println("DCellWeb1.SetCellString(7,4,0,'"+myRs.getString("TQ")+"')");
           	//���ϵص�        
           	out.println("DCellWeb1.SetCellString(3,5,0,'"+myRs.getString("GZDD")+"')");
           	//����ʱ��        
           	out.println("DCellWeb1.SetCellString(5,5,0,'"+myRs.getString("FSSJ")+"')");
        	//ͣ�緶Χ       
           	out.println("DCellWeb1.SetCellString(3,6,0,'"+myRs.getString("TDQD")+"')");
           	//����ʱ��        
           	out.println("DCellWeb1.SetCellString(5,6,0,'"+myRs.getString("FXSJ")+"')");
        	//Ӱ�췶Χ       
           	out.println("DCellWeb1.SetCellString(3,7,0,'"+myRs.getString("YXFW")+"')");
        	//֪ͨ����ʱ��        
           	out.println("DCellWeb1.SetCellString(5,7,0,'"+myRs.getString("TZQXSJ")+"')");
        	//Ӱ���г�        
           	out.println("DCellWeb1.SetCellString(3,8,0,'"+myRs.getString("YXCC")+"')");
        	
        	//�����������        
           	out.println("DCellWeb1.SetCellString(3,10,0,'"+myRs.getString("ZZCDGQMC")+"')");
        	//�������ʱ��        
           	out.println("DCellWeb1.SetCellString(5,10,0,'"+myRs.getString("ZZCDGQSJ")+"')");
        	//�����������        
           	out.println("DCellWeb1.SetCellString(7,10,0,'"+myRs.getString("ZZCDGQRS")+"')");
        	//���絽�����        
           	out.println("DCellWeb1.SetCellString(3,11,0,'"+myRs.getString("ZZDDGQMC")+"')");
        	//���絽��ʱ��        
           	out.println("DCellWeb1.SetCellString(5,11,0,'"+myRs.getString("ZZDDGQSJ")+"')");
        	//���絽ʱ����        
           	out.println("DCellWeb1.SetCellString(7,11,0,'"+myRs.getString("ZZDDGQRS")+"')");
        	//�����쵼        
           	out.println("DCellWeb1.SetCellString(3,12,0,'"+myRs.getString("QXLDR")+"')");
        	//�쵼ְ��        
           	out.println("DCellWeb1.SetCellString(5,12,0,'"+myRs.getString("ZW")+"')");
        	//������        
           	out.println("DCellWeb1.SetCellString(7,12,0,'"+myRs.getString("ZRS")+"')");
        	//ͣ��ʱ��        
           	out.println("DCellWeb1.SetCellString(3,13,0,'"+myRs.getString("TDQSSJ")+"')");
           	//��        
           	out.println("DCellWeb1.SetCellString(5,13,0,'"+myRs.getString("TDJSSJ")+"')");
           	//����        
           	out.println("DCellWeb1.SetCellString(7,13,0,'"+myRs.getString("TDSC")+"')");
           	//����ʱ��        
           	out.println("DCellWeb1.SetCellString(3,14,0,'"+myRs.getString("QXQSSJ")+"')");
           	//��        
           	out.println("DCellWeb1.SetCellString(5,14,0,'"+myRs.getString("QXJSSJ")+"')");
           	//����        
           	out.println("DCellWeb1.SetCellString(7,14,0,'"+myRs.getString("QXSC")+"')");
           	//��ǰ���з�ʽ        
           	out.println("DCellWeb1.SetCellString(3,15,0,'"+myRs.getString("DQYXFS")+"')");
           	//�豸�𻵼���Ա�������        
           	out.println("DCellWeb1.SetCellString(3,16,0,'"+myRs.getString("SBSHJRYSWQK")+"')");
           	//ԭ�򼰴�ʩ        
           	out.println("DCellWeb1.SetCellString(3,17,0,'"+myRs.getString("YYJCS")+"')");
           	//�������Ա        
           	out.println("DCellWeb1.SetCellString(3,34,0,'"+myRs.getString("GDDDY")+"')");
           	//�ʱ��        
           	out.println("DCellWeb1.SetCellString(5,34,0,'"+myRs.getString("TBSJ")+"')");
          }
   		sql="select to_char(QXSJ,'mm-dd hh24:mi') QXSJ,QXJL from z_qxfz_qxgc where gzbh='"+sgbh+"' order by qxsj";
   		myRs= myDbt.executeQuery(sql);
        while (myRs.next()) {  
            //ʱ��  
            out.println("DCellWeb1.SetCellString(2,"+(20+i)+",0,'"+CheckSting(myRs.getString("QXSJ"))+"')");
            //�������ݼ�¼ 
            out.println("DCellWeb1.SetCellString(3,"+(20+i)+",0,'"+CheckSting(myRs.getString("QXJL"))+"')");
           	i++;
        }        
    } catch (Exception ex) {
    	System.out.println("�¹��ٱ��쳣 " + ex);
    }finally {
        try {           
            if (myRs != null)
                myRs.close();
            if (myDbt != null)
                myDbt.close();
        } catch (Exception e) {
		System.out.println("�¹��ٱ��ر������쳣 " + e);
        }
    }
    /********������ҵ���߼�������*******/
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
//���ÿ��Ⱥ͸߶ȵķ���
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
//�����ļ�����
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
					<!-- form��action��Ҫ�޸ĳɱ�jsp���� -->
					<form name="form1" method="post" action="sgsb.jsp">
						<font color="#000000"><b>�¹ʱ��</b> </font>
						<input type="hidden" name="act" value="0">
						<input type="text" name="sgbh" id="sgbh" size="10"
							value="<%=sgbh %>">
						<input type="submit" name="query" value="��  ѯ"
							onClick="set_act(1)">
						<!--input type=submit name=save value=��  �� onClick=set_act(2) -->
						<!-- input type=submit name=gen value=��  �� onClick=set_act(3) -->
						<input type=button id=button1 name=button2
							onClick="button2_onclick()" value="��  ӡ">
						<input type=button id=yulan name=yulan onClick="button1_onclick()"
							value="Ԥ  ��">
						<input type=button id=button3 name=button3
							onClick="button3_onclick()" value="��  ��">
						<font color="#000000"><b>����</b> </font>
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
					<!--**************************����cell����**************************-->
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
	parent.status="�����";
</script>
		<script language="JavaScript" src="../../calender/calender_new.js"></script>
	</body>
</html>