<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%
	String jhid = request.getParameter("jhid");
	String jhlb = request.getParameter("jhlb");
	System.out.println("BDSjhid=:" + jhid);
	String dwmc =session.getAttribute("gqmc").toString();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'operationTicket_Electric_black.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
			<script type="text/javascript">
		 function registerSubmit()
	     {//���б��ķǿ���֤
	           var gzph=document.getElementById("txtGZPH").value;
	           var ldr=document.getElementById("txtLDRXM").value;
	           
	            if(gzph=="")
	            {
	               //alert("NONO");gzphmesage  fprmesage fpsjmesage
	               document.getElementById("gzphmesage").style.display="block";
	            }
	            else if(ldr=="")
	            {
	            document.getElementById("ldrmessage").style.display="block";
	            }
	            else
	            {
	             document.getElementById("gzphmesage").style.display="none";
	             document.getElementById("ldrmessage").style.display="none";
	             document.Register.submit();
	            }
	        
	     }
		
		
		
		
		function allnum()
	     {
	       var zry=0;
	       var jb=0;
	       for(var i=1;i<16;i++)
	       {
	         var txtcy= document.getElementById("cy"+i+"_txtTitle").value;
	         var txtAQJB= document.getElementById("Aqdj"+i).value;
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	         if(txtAQJB!="")
	         {
	          jb=jb+1;
	         }
	       }
	       if(jb==zry)
	       {
	         document.getElementById("divmesg").style.display="none";
	       }
	       else
	       {
	        document.getElementById("divmesg").style.display="block";
	       }
	       document.getElementById("cyTotal").value=" "+(zry+1);
	     }
		</script>
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="/edms/gzp/ticket/css/Calendar.js" type="text/javascript"></script>
  <link rel="stylesheet" href="css/GZP.css" type="text/css"></link>
  <link rel="stylesheet" href="css/StyleSheet3.css" type="text/css"></link></head>
  
 <BODY>
<form action="gzp_Bds_blackSave.jsp" name="Register" method="post">
<DIV style="TEXT-ALIGN: center">
<TABLE>
  <TBODY>
  <TR>
    <TD style="TEXT-ALIGN: right" colSpan=2></TD></TR>
  <TR>
    <TD colSpan=2 align="center"><SPAN style="FONT-SIZE: 14pt"><STRONG>������������ֹ���Ʊ</STRONG></SPAN></TD></TR>
  <TR>
    <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss id=txtDWBM 
      style="WIDTH: 141px" readOnly size=10 value="<%=dwmc %>" name=txtDWBM><SPAN 
      id=RequiredFieldValidator3 
      style="DISPLAY: none; COLOR: red">��λ����Ϊ�գ�</SPAN>��(ͤ)</TD>
    <TD align=right>
    <SPAN id=gzphmesage	style="DISPLAY: none; COLOR: red">����Ʊ�Ų���Ϊ�գ�</SPAN>
    ��<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 60px" 
      value="" name=txtGZPH>��</TD></TR>
  <TR>
    <TD style="HEIGHT: 21px" colSpan=2>
      <DIV style="TEXT-ALIGN: center">
      <TABLE class=tbl style="WIDTH: 751px" cellSpacing=0 cellPadding=0 
border=1>
        <TBODY>
        <TR>
          <TD style="WIDTH: 100px" rowspan="3">��ҵ�ص�����</TD>
          <TD align=left rowspan="3" colSpan=4><INPUT class=TextUnderCss id=txtZYDDNR 
            style="WIDTH: 410px" maxLength=100 value="" 
            name=txtZYDDNR><SPAN id=RequiredFieldValidator4 
            style="DISPLAY: none; COLOR: red">��ҵ�ص㼰���ݲ���Ϊ�գ�</SPAN></TD></TR>
        
         <tr>
          <TD style="WIDTH: 100px">��Ʊ�� </TD>
          <TD style="WIDTH: 98px" align=left>&nbsp;<INPUT class=TextUnderCss2 
            id=txt_FBR style="WIDTH: 74px" 
            value="" name=txtFBR>  </TD>
         </tr>
         <TR>
          <TD style="WIDTH: 100px">��&nbsp; Ʊ &nbsp;��&nbsp; ��</TD>
          <TD align=left colSpan=2><INPUT class=TextUnderCss id=txtFprq 
            onclick="showcalendar(this,true)" value="" name=txtFprq> </TD>
         </TR>
        <TR>
          <TD style="WIDTH: 100px" align="center"> �� ��  Ʊ<br>�� Ч ��</TD>
          <TD align=left colSpan=6>��<INPUT class=TextUnderCss id=inputGZSJQ 
            onclick="showcalendar(this,true)" value="" 
            name=inputGZSJQ>��<INPUT class=TextUnderCss id=inputGZSJZ 
            onclick="showcalendar(this,true)" value="" 
            name=inputGZSJZ>ֹ</TD></TR>
        <TR>
          <TD style="WIDTH: 100px">�� �� �� �� ��</TD>
          <TD style="WIDTH: 100px">���� </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtLDRXM_txtTitle style="WIDTH: 50px" 
            value="" name=txtLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> </TD>
          <TD style="WIDTH: 100px">��ȫ�ȼ�</TD>
          <TD style="WIDTH: 98px" align=left colSpan=3><INPUT class=TextUnderCss 
            id=txtLDRJB   size=5 value="" name=txtLDRJB> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px" rowSpan=4>�� ҵ �� �� Ա<BR>��������ȫ�ȼ�</TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy1_txtTitle style="WIDTH: 40px"  value="" onblur="allnum()"
            name=cy1>  &nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj1 style="WIDTH: 13px"   onblur="allnum()"
            name=Aqdj1>) 
	
            
            
            </TD>
          <TD style="HEIGHT: 21px" align=left cls><INPUT class=TextUnderCss 
            id=cy2_txtTitle style="WIDTH: 40px"  value="" onblur="allnum()"
            name=cy2> &nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj2 style="WIDTH: 13px" maxLength=1 value="" onblur="allnum()"
            name=Aqdj2>)  </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy3_txtTitle style="WIDTH: 40px" onblur="allnum()" 
            name=cy3> <SPAN 
            id=cy3_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj3 style="WIDTH: 13px" maxLength=1 name=Aqdj3 onblur="allnum()">) </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy4_txtTitle style="WIDTH: 40px"  onblur="allnum()"
            name=cy4> <SPAN id=cy4_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy4_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj4 style="WIDTH: 13px" maxLength=1 name=Aqdj4 onblur="allnum()">) <SPAN 
            id=RegularExpressionValidator5 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator5 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
             <TD style="HEIGHT: 21px" align=left colSpan=2><INPUT class=TextUnderCss 
            id=cy5_txtTitle style="WIDTH: 40px"  onblur="allnum()"
            name=cy5> <SPAN id=cy4_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy4_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj5 style="WIDTH: 13px" maxLength=1 name=Aqdj5 onblur="allnum()">) <SPAN 
            id=RegularExpressionValidator5 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator5 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
            </TR>
            
        <TR>
          <TD align=left><INPUT class=TextUnderCss id=cy6_txtTitle 
            style="WIDTH: 40px" name=cy6 onblur="allnum()"> <SPAN 
            id=cy5_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy5_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy5$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> <OPTION 
              value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> <OPTION 
              value=000783>������</OPTION> <OPTION value=000784>��С��</OPTION> 
              <OPTION value=000782>������</OPTION> <OPTION 
              value=000785>������</OPTION> <OPTION value=000786>�ﺣ��</OPTION> 
              <OPTION value=000787>������</OPTION> <OPTION 
              value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> <OPTION 
              value=001453>������</OPTION> <OPTION value=001454>����ɺ</OPTION> 
              <OPTION value=001455>���޺�</OPTION> <OPTION 
            value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy5_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj6 style="WIDTH: 13px" maxLength=1 
            name=Aqdj6 onblur="allnum()">) <SPAN id=RegularExpressionValidator6 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator6 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy7_txtTitle 
            style="WIDTH: 40px" onblur="allnum()"  name=cy7> <SPAN 
            id=cy6_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy6_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy6$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> <OPTION 
              value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> <OPTION 
              value=000783>������</OPTION> <OPTION value=000784>��С��</OPTION> 
              <OPTION value=000782>������</OPTION> <OPTION 
              value=000785>������</OPTION> <OPTION value=000786>�ﺣ��</OPTION> 
              <OPTION value=000787>������</OPTION> <OPTION 
              value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> <OPTION 
              value=001453>������</OPTION> <OPTION value=001454>����ɺ</OPTION> 
              <OPTION value=001455>���޺�</OPTION> <OPTION 
            value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy6_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj7 style="WIDTH: 13px" maxLength=1 onblur="allnum()"
            name=Aqdj7>) <SPAN id=RegularExpressionValidator7 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator7 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy8_txtTitle onblur="allnum()"
            style="WIDTH: 40px"  name=cy8> <SPAN 
            id=cy7_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy7_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy7$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> <OPTION 
              value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> <OPTION 
              value=000783>������</OPTION> <OPTION value=000784>��С��</OPTION> 
              <OPTION value=000782>������</OPTION> <OPTION 
              value=000785>������</OPTION> <OPTION value=000786>�ﺣ��</OPTION> 
              <OPTION value=000787>������</OPTION> <OPTION 
              value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> <OPTION 
              value=001453>������</OPTION> <OPTION value=001454>����ɺ</OPTION> 
              <OPTION value=001455>���޺�</OPTION> <OPTION 
            value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy7_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj8 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj8>) <SPAN 
            id=RegularExpressionValidator8 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator8 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy9_txtTitle onblur="allnum()" 
            style="WIDTH: 40px"  name=cy9> <SPAN 
            id=cy8_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy8_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj9 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj9>) <SPAN 
            id=RegularExpressionValidator9 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator9 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
               <TD align=left colSpan=2><INPUT class=TextUnderCss id=cy10_txtTitle onblur="allnum()" 
            style="WIDTH: 40px"  name=cy10> <SPAN 
            id=cy8_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy8_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj10 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj10>) <SPAN 
            id=RegularExpressionValidator9 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator9 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD></TR>
        <TR>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy11_txtTitle style="WIDTH: 40px" onblur="allnum()"
            name=cy11> <SPAN id=cy9_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy9_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy9$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> <OPTION 
              value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> <OPTION 
              value=000783>������</OPTION> <OPTION value=000784>��С��</OPTION> 
              <OPTION value=000782>������</OPTION> <OPTION 
              value=000785>������</OPTION> <OPTION value=000786>�ﺣ��</OPTION> 
              <OPTION value=000787>������</OPTION> <OPTION 
              value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> <OPTION 
              value=001453>������</OPTION> <OPTION value=001454>����ɺ</OPTION> 
              <OPTION value=001455>���޺�</OPTION> <OPTION 
            value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy9_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj11 style="WIDTH: 13px" maxLength=1 onblur="allnum()"
            name=Aqdj11>) <SPAN id=RegularExpressionValidator10 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator10 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy12_txtTitle style="WIDTH: 40px"  onblur="allnum()"
            name=cy12> <SPAN id=cy10_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy10_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy10$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy10_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj12 style="WIDTH: 13px" maxLength=1  onblur="allnum()"
            name=Aqdj12>) <SPAN id=RegularExpressionValidator11 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator11 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy13_txtTitle style="WIDTH: 40px" onblur="allnum()"
            name=cy13> <SPAN id=cy11_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy11_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy11$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=cy11_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj13 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj13>) <SPAN 
            id=RegularExpressionValidator12 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator12 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy14_txtTitle style="WIDTH: 40px" onblur="allnum()"
            name=cy14> <SPAN id=cy12_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy12_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj14 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj14>) <SPAN 
            id=RegularExpressionValidator13 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator13 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
             <TD style="HEIGHT: 21px" align=left colSpan=2><INPUT class=TextUnderCss 
            id=cy15_txtTitle style="WIDTH: 40px" onblur="allnum()"
            name=cy15> <SPAN id=cy12_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"> </SPAN><SPAN 
            id=cy12_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj15 style="WIDTH: 13px" maxLength=1 onblur="allnum()" name=Aqdj15>) <SPAN 
            id=RegularExpressionValidator13 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator13 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD></TR>
        <TR>
         
          <TD align=right colspan="6">����<INPUT class=TextUnderCss id=cyTotal 
            maxLength=100 size=2 value="1" name=cyTotal>��
            <div style="display: none; color: red;" id="divmesg">
														��ȫ�ȼ�����Ϊ�գ�
													</div>
            </TD></TR>
            <TR>
          <TD style="WIDTH: 100px" align="center">�ⵥλ����ʱ<br>������໤��</TD>
          <TD style="WIDTH: 100px">���� </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtWLLDRXM_txtTitle style="WIDTH: 50px" 
            value="" name=txtWLLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> </TD>
          <TD style="WIDTH: 100px">��ȫ�ȼ�</TD>
          <TD style="WIDTH: 98px" align=left colSpan=3><INPUT class=TextUnderCss 
            id=txtWLLDRJB value="" name=txtWLLDRJB> <SPAN 
            id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�����Ϊ�գ�</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">�쵼�˵ȼ�Ҫ������Ϊ3��</SPAN> </TD></TR>
        <TR>
          <TD class=td1 style="WIDTH: 100%; HEIGHT: 100%" colSpan=7>
            <DIV style="TEXT-ALIGN: center">
            <TABLE class=tbl style="WIDTH: 100%; HEIGHT: 100%">
              <TBODY>
                      <TR>
                <TD class=td3 
                 vAlign=top align=middle>�����ȡ�İ�ȫ��ʩ<BR>(�����ɷ�Ʊ����д)<br></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD  vAlign=top align=middle>�Ѿ���ɵİ�ȫ��ʩ<BR>(������ֵ��Ա��д)</TD></TR>
                <TR>
              <TR>
                 <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >1��ע����ҵ�ص㸽�������豸��<TEXTAREA id=txtAQCS style="WIDTH: 98%; HEIGHT: 150px" name=txtAQCS></TEXTAREA></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >1����ע����ҵ�ص㸽�������豸��<TEXTAREA id=txtYZAQCS style="WIDTH: 96%; HEIGHT: 150px" name=txtYZAQCS></TEXTAREA></TD></TR>
                <TR>
                <TD class=td3 
                style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; WIDTH: 50%; HEIGHT: 150px; BORDER-RIGHT-WIDTH: 0px; BORDER-RIGHT-COLOR: black" 
                vAlign=top >2��������ȫ��ʩ<TEXTAREA id=txtAQCS style="WIDTH: 98%; HEIGHT: 150px" name=txtAQCS1></TEXTAREA></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >2���Ѿ���ɵ�������ȫ��ʩ<TEXTAREA id=txtYZAQCS style="WIDTH: 96%; HEIGHT: 150px" name=txtYZAQCS1></TEXTAREA></TD></TR>
                
                </TBODY></TABLE></DIV></TD></TR>
        <TR>
        
          <TD class=td1 style="HEIGHT: 21px" align=left 
            colSpan=5>�����ð�ȫ��ʩ׼����<INPUT class=TextUnderCss2 id=txtGZS 
            onclick="showcalendar(this,true)" value="" 
            name=txtGZS>��ʼ������</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>ֵ��Ա<INPUT class=TextUnderCss2 
            id=txtZBY_txtTitle style="WIDTH: 80px" 
            value="" name=txtZBY>��ǩ�֣� <SPAN id=txtZBY_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtZBY_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtZBY$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=txtZBY_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red">ֵ��Ա����Ϊ�գ�</SPAN> </TD></TR>
        <TR>
          <TD class=td1 align=left colSpan=5>����鰲ȫ��ʩ�����ã�����<INPUT 
            class=TextUnderCss2 id=txtGZZXSJ onclick="showcalendar(this,true)" 
            value="" name=txtGZZXSJ>��ʼ����</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>�����쵼��<INPUT class=TextUnderCss2 
            id=txtGZLDR_txtTitle style="WIDTH: 80px"  
            value="" name=txtGZLDR>��ǩ�֣� <br>������໤��<INPUT class=TextUnderCss2 
            id=txtBDSJHR_txtTitle style="WIDTH: 80px"  
            value="" name=txtBDSJHR>��ǩ�֣� <SPAN id=txtGZLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtGZLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtGZLDR$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=txtGZLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 21px" align=left 
            colSpan=5>�����ҵ���Ա��¼<INPUT class=TextUnderCss2 id=txtBGJL 
            style="WIDTH: 400px" maxLength=100 name=txtBGJL></TD></TR>
        <TR>
          <TD align=left colSpan=5></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 18px" align=right colSpan=5><SPAN 
            id=txtBGFBR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtBGFBR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtBGFBR$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=txtBGFBR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD>
          <TD class=td1 style="HEIGHT: 18px" align=right colSpan=5>�����쵼��<INPUT 
            class=TextUnderCss2 id=txtBGLDR_txtTitle style="WIDTH: 80px" 
             name=txtBGLDR>��ǩ�֣�<br>��Ʊ��<INPUT 
            class=TextUnderCss2 id=txtBGFBR_txtTitle style="WIDTH: 74px" 
            onclick=showDl(this) name=txtBGFBR>��ǩ�֣� <br>��Ʊ��<INPUT 
            class=TextUnderCss2 id=txtBGFBR1_txtTitle style="WIDTH: 74px" 
            onclick=showDl(this) name=txtBGFBR1>��ǩ�֣�  <SPAN 
            id=txtBGLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtBGLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtBGLDR$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=txtBGLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 25px" align=left colSpan=3>��������<INPUT 
            class=TextUnderCss2 id=txtJSSJ onclick="showcalendar(this,true)" 
            value="" name=txtJSSJ>ȫ������</TD>
          <TD class=td1 style="HEIGHT: 25px" align=right colSpan=5><br>�����쵼��<INPUT 
            class=TextUnderCss2 id=txtJSLDR_txtTitle style="WIDTH: 80px" 
             value="" name=txtJSLDR> ��ǩ�֣�<SPAN 
            id=txtJSLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtJSLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtJSLDR$DDLTitle> <OPTION value=0 selected>��ѡ����Ա</OPTION> 
              <OPTION value=000514>����</OPTION> <OPTION value=000515>����˳</OPTION> 
              <OPTION value=000783>������</OPTION> <OPTION 
              value=000784>��С��</OPTION> <OPTION value=000782>������</OPTION> 
              <OPTION value=000785>������</OPTION> <OPTION 
              value=000786>�ﺣ��</OPTION> <OPTION value=000787>������</OPTION> 
              <OPTION value=001386>κ����</OPTION> <OPTION value=001388>�²�</OPTION> 
              <OPTION value=001453>������</OPTION> <OPTION 
              value=001454>����ɺ</OPTION> <OPTION value=001455>���޺�</OPTION> 
              <OPTION value=001456>¬��</OPTION></SELECT> </SPAN><SPAN 
            id=txtJSLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 align=left colSpan=5>��ҵ�ص����������������Ʊ��<INPUT 
            class=TextUnderCss2 id=txtZYQL onclick="showcalendar(this,true)" 
            value="" name=txtZYQL>����</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>ֵ��Ա<INPUT class=TextUnderCss2 
            id=txtZYQLZBY_txtTitle style="WIDTH: 80px" 
            value="" name=txtZYQLZBY>��ǩ�֣� </TD></TR></TBODY></TABLE></DIV><SPAN id=Label1></SPAN><BR>
      <TABLE WIDTH="100%">
        <TBODY>
    							<tr>
								<td align="right">

									<input type="hidden" value="<%=jhid%>" name="jhid" />
                                      <input type="hidden" value="<%=jhlb%>" name="jhlb" />

									<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="�ύ" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="����" name=btnFB>
								</td>
							<tr></TBODY></TABLE>&nbsp; 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</TD></TR></TBODY></TABLE></DIV>
<DIV id=hiden 
style="Z-INDEX: 999; LEFT: -1000px; WIDTH: 200px; POSITION: absolute; TOP: -1000px"><INPUT 
id=inputZycyAqdj name=inputZycyAqdj> <INPUT id=inputBdsid name=inputBdsid> 
<INPUT id=inputGzpid name=inputGzpid> </DIV>
</form>
</BODY>
</html>
