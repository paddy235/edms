<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
    <title>�촰��Ϣ</title>
    
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
						&nbsp;����������λ��: ��ҳ--&gt;�ճ����� --&gt;�촰��Ϣ&nbsp;
					</TD>
				</TR>
				<tr>
					<TD class=tableHeadText style="HEIGHT: 24px" align=middle>
						�촰��Ϣ
					</TD>
				</TR>
				<tr>
				  <td>
				  
				   <TABLE  width="100%" >
        <TBODY>
        <TR>
          <TD>��λ���ƣ�<SELECT class=grayinput id=SBBM_DropDownList1 
            name=SBBM$DropDownList1> <OPTION value="" selected>��ѡ��λ</OPTION> 
           <option>��ɳ�����</option>
            <option>�عر����</option>
             </SELECT> </TD>
         
          <TD>��ʼʱ�䣺 <INPUT class=grayinput id=txtFXSJ style="WIDTH: 90px" 
            onclick=showcalendar(this) value=2009-08-24 name=txtFXSJ></TD>
            <TD>�� <INPUT class=grayinput id=txtFXSJ style="WIDTH: 90px" 
            onclick=showcalendar(this) value=2009-08-24 name=txtFXSJ></TD>
          <TD><INPUT class=blueButtonCss id=Button1 type=submit value=��ѯ name=Button1>&nbsp;
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
          <TH scope=col>���</TH>
          <TH scope=col>ʩ����λ</TH>
          <TH scope=col>ʩ���ص�</TH>
          <TH scope=col>ͣ�緶Χ</TH>
          <TH scope=col>��������</TH>
          <TH scope=col>�е�����ʱ��</TH>
          <TH scope=col>�����ͣ�絹բʱ��</TH>
          <TH scope=col>������͵絹բʱ��</TH>
          <TH scope=col>�����ͣ��ʱ��</TH>
          <TH scope=col>��׼��ҵʱ��</TH>
          <TH scope=col>Ҫ�����ʱ��</TH>
          <TH scope=col>����ʱ��</TH>
          <TH scope=col>������ҵʱ��</TH>
          <TH scope=col>������</TH>
          <TH scope=col>������</TH>
          <TH style="WHITE-SPACE: nowrap" scope=col>������%</TH>
            <TH scope=col>����Ա����</TH>
             <TH scope=col>��ע</TH>
          </TR>
        <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>1</LABEL> </TD>
          <TD style="WIDTH: 10%">���������� </TD>
          <TD style="WIDTH: 10%">2387��·��վ��վ��</TD>
          <TD style="WIDTH: 10%">���򹵡����ɽ </TD>
          <TD style="WIDTH: 10%">�Ӵ����豸ά�ޣ�������ʴ���ҡ�б���� </TD>
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
            <TD style="WIDTH: 10%">������</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>2</LABEL> </TD>
          <TD style="WIDTH: 10%">Ƽ�������� </TD>
          <TD style="WIDTH: 10%">2387��·��վ��վ��</TD>
          <TD style="WIDTH: 10%">���򹵡����ɽ </TD>
          <TD style="WIDTH: 10%">�Ӵ����豸ά�ޣ�������ʴ���ҡ�б���� </TD>
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
            <TD style="WIDTH: 10%">������</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          <TR>
          <TD style="WIDTH: 20px"><LABEL id=GridView1_ctl02_XH>3</LABEL> </TD>
          <TD style="WIDTH: 10%">���������� </TD>
          <TD style="WIDTH: 10%">2387��·��վ��վ��</TD>
          <TD style="WIDTH: 10%">���򹵡����ɽ </TD>
          <TD style="WIDTH: 10%">�Ӵ����豸ά�ޣ�������ʴ���ҡ�б���� </TD>
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
            <TD style="WIDTH: 10%">������</TD>
          <TD style="WHITE-SPACE: nowrap"></TD></TR>
          
          </TBODY></TABLE>
		
		
   
  </body>
</html>
