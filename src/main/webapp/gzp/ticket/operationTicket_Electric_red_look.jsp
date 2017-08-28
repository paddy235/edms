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

    
    <title>My JSP 'operationTicket_Electric_red.jsp' starting page</title>
    
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
	     {//进行表单的非空验证
	      
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
	       document.getElementById("cyTotal").value=zry+1;
	     }
		</script>
  <link rel="stylesheet" href="css/Bdsgzpblack.css" type="text/css"></link>
  <link rel="stylesheet" href="css/GZP.css" type="text/css"></link></head>
  		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
  <script src="/edms/gzp/ticket/css/Calendar.js" type="text/javascript"></script>
<BODY scroll="yes">

<DIV style="TEXT-ALIGN: center">
<TABLE>
  <TBODY>
  <TR>
    <TD style="COLOR: #000000; TEXT-ALIGN: left" colSpan=3></TD></TR>
  <TR>
    <TD style="TEXT-ALIGN: left" colSpan=3>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      &nbsp;<STRONG>&nbsp; <SPAN 
      style="FONT-SIZE: 14pt">牵引变电所第一种工作票</SPAN></STRONG></TD></TR>
  <TR>
    <TD>
      <TABLE style="WIDTH: 100%">
        <TBODY>
        <TR>
          <TD align=left><INPUT class=TextUnderCss id=inputBdsname 
            style="WIDTH: 141px" readOnly size=10 value="<%=dwmc %>" name=inputBdsname> 
            <SPAN id=RequiredFieldValidator3 
            style="DISPLAY: none; COLOR: red">单位不能为空！</SPAN>所（亭) </TD>
          <TD align=right>第&nbsp; <INPUT 
            class=TextUnderCss   style="WIDTH: 40px" value="" name=txtGZPH
             >&nbsp;号 <div style="display:none; color:red;" id="gzphmesage">工作票号不能空</div></TD></TR></TBODY></TABLE></TD>
    <TD align=right colSpan=2></TD></TR>
  <TR>
    <TD style="WIDTH: 525px; HEIGHT: 400px" vAlign=top>
      <TABLE class=tbl style="WIDTH: 655px; HEIGHT: 509px" cellSpacing=0 
      cellPadding=0 border=1>
        <TBODY>
        <TR>
          <TD style="WIDTH: 80px" align=middle>作业地点及内容</TD>
          <TD style="WIDTH: 375px; HEIGHT: 20px" align=left colSpan=5><INPUT 
            class=TextUnderCss id=txtZYDDNR style="WIDTH: 440px" maxLength=100 
            name=txtZYDDNR> <SPAN id=RequiredFieldValidator4 
            style="DISPLAY: none; COLOR: red">作业地点及内容不能为空！</SPAN></TD></TR>
        <TR>
          <TD style="WIDTH: 48px; HEIGHT: 29px" align=middle>工作时间</TD>
          <TD style="WIDTH: 375px; HEIGHT: 29px" align=left colSpan=5>自<INPUT 
            class=TextUnderCss id=inputGZSJQ value="" onclick="showcalendar(this,true)"
            name=inputGZSJQ>至<INPUT class=TextUnderCss id=inputGZSJZ onclick="showcalendar(this,true)"
            value="" name=inputGZSJZ>止</TD></TR>
        <TR>
          <TD style="WIDTH: 48px; HEIGHT: 39px" align=middle>工作领导人</TD>
          <TD style="WIDTH: 375px; HEIGHT: 39px" align=left 
            colSpan=5>姓名:<INPUT class=TextUnderCss id=txtLDRXM
																		style="WIDTH: 100px"  onblur="allnum()" value=" "
																		name=txtLDRXM>
            <SPAN id=inputLDRXM_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=inputLDRXM_DDLTitle onblur=hiddeDl(this) style="WIDTH: 151px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=inputLDRXM$DDLTitle> <OPTION value=0 
            selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
            id=inputLDRXM_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red">工作领导人不能为空！</SPAN> 安全等级:<INPUT 
            class=TextUnderCss id=inputLDRJB maxLength=1 size=4 name=inputLDRJB> 
            <SPAN id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: black">安全等级不能为空！</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">领导人等级要求至少为3！</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 48px" align=middle rowSpan=5>作业组成员姓名及安全等级</TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY1 onblur="allnum()">  
              ( 	<INPUT class=TextUnderCss id=txtAQJB1
																		style="WIDTH: 15px" maxLength=1 value="" onblur="allnum()" name=txtAQJB1>)    </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY2 onblur="allnum()"> ( <INPUT class=TextUnderCss 
            id=Aqdj2 style="WIDTH: 13px" maxLength=1 name=Aqdj2>)   </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY3 onblur="allnum()">  ( <INPUT class=TextUnderCss 
            id=Aqdj3 style="WIDTH: 13px" maxLength=1 name=Aqdj3>)   </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY4 onblur="allnum()"> ( <INPUT class=TextUnderCss 
            id=Aqdj4 style="WIDTH: 13px" maxLength=1 name=Aqdj4>)   </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY5 onblur="allnum()">  ( <INPUT class=TextUnderCss 
            id=Aqdj5 style="WIDTH: 13px" maxLength=1 name=Aqdj5>)  </TD></TR>
        <TR>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY5 onblur="allnum()"> ( <INPUT 
            class=TextUnderCss id=Aqdj6 style="WIDTH: 13px" maxLength=1 
            name=Aqdj6>)  </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY7 onblur="allnum()"> <SPAN id=cy7_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy7_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy7$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy7_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj7 style="WIDTH: 13px" maxLength=1 name=Aqdj7>) <SPAN 
            id=RegularExpressionValidator8 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator8 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY8 style="WIDTH: 60px"
																		value="" name=txtCY1 onblur="allnum()"><SPAN id=cy8_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy8_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy8$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy8_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj8 style="WIDTH: 13px" maxLength=1 name=Aqdj8>) <SPAN 
            id=RegularExpressionValidator9 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator9 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY9 onblur="allnum()"><SPAN id=cy9_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy9_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy9$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy9_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj9 style="WIDTH: 13px" maxLength=1 name=Aqdj9>) <SPAN 
            id=RegularExpressionValidator10 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator10 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY10 onblur="allnum()"> <SPAN id=cy10_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy10_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy10$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy10_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj10 style="WIDTH: 13px" maxLength=1 name=Aqdj10>) <SPAN 
            id=RegularExpressionValidator11 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator11 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY11 onblur="allnum()"> <SPAN id=cy11_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy11_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy11$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy11_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj11 style="WIDTH: 13px" maxLength=1 
            name=Aqdj11>) <SPAN id=RegularExpressionValidator12 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator12 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY12 onblur="allnum()"> <SPAN id=cy12_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy12_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy12$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy12_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj12 style="WIDTH: 13px" maxLength=1 name=Aqdj12>) <SPAN 
            id=RegularExpressionValidator13 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator13 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY13 onblur="allnum()"> <SPAN id=cy13_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy13_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy13$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy13_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj13 style="WIDTH: 13px" maxLength=1 name=Aqdj13>) <SPAN 
            id=RegularExpressionValidator14 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator14 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY14 onblur="allnum()"><SPAN id=cy14_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy14_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy14$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy14_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj14 style="WIDTH: 13px" maxLength=1 name=Aqdj14>) <SPAN 
            id=RegularExpressionValidator15 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator15 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY15 onblur="allnum()"><SPAN id=cy15_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy15_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy15$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy15_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj15 style="WIDTH: 13px" maxLength=1 name=Aqdj15>) <SPAN 
            id=RegularExpressionValidator16 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator16 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY16 onblur="allnum()"><SPAN id=cy16_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy16_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy16$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy16_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj16 style="WIDTH: 13px" maxLength=1 
            name=Aqdj16>) <SPAN id=RegularExpressionValidator17 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator17 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY17 onblur="allnum()"><SPAN id=cy17_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy17_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy17$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy17_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj17 style="WIDTH: 13px" maxLength=1 name=Aqdj17>) <SPAN 
            id=RegularExpressionValidator18 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator18 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY18 onblur="allnum()"> <SPAN id=cy18_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy18_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy18$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy18_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj18 style="WIDTH: 13px" maxLength=1 name=Aqdj18>) <SPAN 
            id=RegularExpressionValidator19 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator19 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY19 onblur="allnum()"><SPAN id=cy19_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy19_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy19$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy19_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj19 style="WIDTH: 13px" maxLength=1 name=Aqdj19>) <SPAN 
            id=RegularExpressionValidator20 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator20 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY20 onblur="allnum()"><SPAN id=cy20_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy20_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy20$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy20_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj20 style="WIDTH: 13px" maxLength=1 name=Aqdj20>) <SPAN 
            id=RegularExpressionValidator21 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator21 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY21 onblur="allnum()"> <SPAN id=cy21_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy21_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy21$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy21_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj21 style="WIDTH: 13px" maxLength=1 
            name=Aqdj21>) <SPAN id=RegularExpressionValidator22 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator22 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY22 onblur="allnum()"><SPAN id=cy22_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy22_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy22$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy22_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj22 style="WIDTH: 13px" maxLength=1 name=Aqdj22>) <SPAN 
            id=RegularExpressionValidator23 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator23 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY22 onblur="allnum()"><SPAN id=cy23_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy23_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy23$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy23_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj23 style="WIDTH: 13px" maxLength=1 name=Aqdj23>) <SPAN 
            id=RegularExpressionValidator24 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator24 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px; HEIGHT: 25px" align=left><INPUT class=TextUnderCss id=txtCY1 style="WIDTH: 60px"
																		value="" name=txtCY23 onblur="allnum()"><SPAN id=cy24_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy24_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy24$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION></SELECT> 
            </SPAN><SPAN id=cy24_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj24 style="WIDTH: 13px" maxLength=1 name=Aqdj24>) <SPAN 
            id=RegularExpressionValidator25 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator25 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="WIDTH: 100px" align=right>共计<INPUT class=TextUnderCss 
            id=cyTotal maxLength=100 size=2 name=cyTotal>人</TD></TR>
        <TR>
          <TD style="HEIGHT: 327px" vAlign=top colSpan=4>
            <DIV style="TEXT-ALIGN: left">
            <TABLE style="WIDTH: 100%" class=tbl>
              <TBODY>
              <TR>
                <TD align=middle>必须采取的安全措施<BR><BR></TD></TR>
              <TR>
                <TD>1、装设防护栅、悬挂标示牌的位置:</TD></TR>
              <TR>
                <TD style="HEIGHT: 58px"><TEXTAREA id=txtZBH style="WIDTH: 276px; HEIGHT: 51px" name=txtZBH></TEXTAREA></TD></TR>
              <TR>
                <TD style="HEIGHT: 10px">2、注意作业地点附近接地的设备是:</TD></TR>
              <TR>
                <TD style="HEIGHT: 30px"><TEXTAREA id=txtZJDXSB style="WIDTH: 277px; HEIGHT: 50px" name=txtZJDXSB></TEXTAREA></TD></TR>
              <TR>
                <TD>3、注意作业地点附近不同电压的设备是:</TD></TR>
              <TR>
                <TD><TEXTAREA id=txtZDDSB style="WIDTH: 277px; HEIGHT: 48px" name=txtZDDSB></TEXTAREA></TD></TR>
              <TR>
                <TD>4、绝缘工具状态:</TD></TR>
              <TR>
                <TD><TEXTAREA lang=100 id=txtJYGJZT style="WIDTH: 280px; HEIGHT: 67px" name=txtJYGJZT type="text" size="43"></TEXTAREA></TD></TR>
                
                 <TR>
          <TD vAlign=top align=left>5、其它安全措施:<BR><TEXTAREA lang=200 id=txtAQCS style="WIDTH: 280px; HEIGHT: 227px" name=txtAQCS type="text" size="35"></TEXTAREA></TD>
</TR>
     
                
                </TBODY></TABLE></DIV></TD>
          <TD style="HEIGHT: 327px" vAlign=top colSpan=2>
            <DIV style="TEXT-ALIGN: left">
            <TABLE style="WIDTH: 100%" class=tbl>
              <TBODY>
              <TR>
                <TD align=middle>已经完成的安全措施<BR><BR></TD></TR>
              <TR>
                <TD>1、防护栅、标示牌装设的位置:</TD></TR>
              <TR>
                <TD style="HEIGHT: 58px"><TEXTAREA id=txtYZBH style="WIDTH: 267px; HEIGHT: 51px" name=txtYZBH></TEXTAREA></TD></TR>
              <TR>
                <TD>2、注意作业地点附近接地的设备是:</TD></TR>
              <TR>
                <TD style="HEIGHT: 30px"><TEXTAREA id=txtYZJDXSB style="WIDTH: 267px; HEIGHT: 50px" name=txtYZJDXSB></TEXTAREA></TD></TR>
              <TR>
                <TD>3、注意作业地点附近不同电压的设备是:</TD></TR>
              <TR>
                <TD><TEXTAREA id=txtYZDDSB style="WIDTH: 267px; HEIGHT: 48px" name=txtYZDDSB></TEXTAREA></TD></TR>
              <TR>
                <TD>4、绝缘工具状态:</TD></TR>
              <TR>
                <TD style="HEIGHT: 38px"><TEXTAREA lang=100 id=txtYJYGJZT style="WIDTH: 267px; HEIGHT: 65px" name=txtYJYGJZT type="text" size="22"></TEXTAREA></TD></TR>
                
                
                <tr>          <TD style="WIDTH: 239px; HEIGHT: 200px" vAlign=top 
            align=left>5、其它安全措施:<BR><TEXTAREA lang=200 id=txtYZAQCS style="WIDTH: 267px; HEIGHT: 227px" name=txtYZAQCS type="text" size="35"></TEXTAREA><BR></TD></tr>
                </TBODY></TABLE></DIV></TD></TR>
                
                
                <tr><TD colSpan=6>
            <TABLE style="WIDTH: 100%; HEIGHT: 320px" class=tbl>
              <TBODY>
              <TR>
                <TD align=left>发票日期<INPUT class=TextUnderCss2 id=txtFPRQ 
                  value=""  onclick="showcalendar(this,true)"
                  name=txtFPRQ> &nbsp;&nbsp; </TD>
                <TD style="WIDTH: 40%" align=right>发 票 人
                 
                   <INPUT class=TextUnderCss2 id=txtFBR_txtTitle 
                  style="WIDTH: 74px" onclick=showDl(this) name=txtFBR$txtTitle> 
        <SPAN 
                  id=txtFBR_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red">发票人不能为空！</SPAN> </TD></TR>
              <TR>
                <TD align=left colSpan=2>根据供电调度员的第<INPUT class=TextUnderCss2 
                  id=txtDDMLH style="WIDTH: 20px" name=txtDDMLH>号命令准予在<INPUT 
                  class=TextUnderCss2 id=txtGZS onclick="showcalendar(this,true)"
                  name=txtGZS>开始工作要</TD></TR>
              <TR>
                <TD style="WIDTH: 60%; HEIGHT: 16px" align=left>求在<INPUT 
                  class=TextUnderCss2 id=txtGZZ onclick="showcalendar(this,true)"
                  name=txtGZZ>结束工作。</TD>
                <TD style="WIDTH: 40%; HEIGHT: 16px" align=right>值&nbsp; 
                  班&nbsp; 员<INPUT class=TextUnderCss2 id=txtZBY_txtTitle 
                  style="WIDTH: 74px" onclick=showDl(this) name=txtZBY$txtTitle> 
                  <SPAN id=txtZBY_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  id=txtZBY_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtZBY$DDLTitle> <OPTION value=0 
                  selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtZBY_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
              <TR>
                <TD style="HEIGHT: 23px" align=left 
                  colSpan=2>经检查安全措施已做好,并于<INPUT class=TextUnderCss2 id=txtGZZXSJ 
                  onclick="showcalendar(this,true)" name=txtGZZXSJ>开始工作。</TD></TR>
              <TR>
                <TD align=right colSpan=2>工作领导人<INPUT class=TextUnderCss2 
                  id=txtGZLDR_txtTitle style="WIDTH: 74px" onclick=showDl(this) 
                  name=txtGZLDR$txtTitle> <SPAN id=txtGZLDR_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  id=txtGZLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtGZLDR$DDLTitle> <OPTION value=0 
                    selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtGZLDR_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
              <TR>
                <TD style="HEIGHT: 5px" align=left colSpan=2>变更作业组成员记录<INPUT 
                  class=TextUnderCss2 id=txtBGJL style="WIDTH: 320px" 
                  maxLength=50 name=txtBGJL></TD></TR>
              <TR>
                <TD style="HEIGHT: 55px" align=right colSpan=2 
                  rowSpan=2>发&nbsp; 票&nbsp; 人

                   <INPUT class=TextUnderCss2 id=txtBGFPR_txtTitle 
                  style="WIDTH: 74px" onclick=showDl(this) 
                  name=txtBGFPR$txtTitle> <SPAN id=txtBGFPR_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  class=grayinput id=txtBGFPR_DDLTitle onblur=hiddeDl(this) 
                  style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtBGFPR$DDLTitle> <OPTION value=0 
                    selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtBGFPR_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN><BR><BR>工作领导人<INPUT 
                  class=TextUnderCss2 id=txtBGLDR_txtTitle style="WIDTH: 74px" 
                  onclick=showDl(this) name=txtBGLDR$txtTitle> <SPAN 
                  id=txtBGLDR_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  id=txtBGLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtBGLDR$DDLTitle> <OPTION value=0 
                    selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtBGLDR_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
              <TR></TR>
              <TR>
                <TD style="HEIGHT: 23px" align=left colSpan=2></TD></TR>
              <TR>
                <TD style="HEIGHT: 25px" align=right colSpan=2 
rowSpan=2></TD></TR>
              <TR></TR>
              <TR>
                <TD style="HEIGHT: 16px" align=left colSpan=2>工作已于<INPUT 
                  class=TextUnderCss2 id=txtJSSJ onclick="showcalendar(this,true)"
                  name=txtJSSJ>全部结束。</TD></TR>
              <TR>
                <TD align=right colSpan=2>工作领导人 <INPUT class=TextUnderCss2 
                  id=txtJSLDR_txtTitle style="WIDTH: 74px" onclick=showDl(this) 
                  name=txtJSLDR$txtTitle> <SPAN id=txtJSLDR_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  id=txtJSLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtJSLDR$DDLTitle> <OPTION value=0 
                    selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtJSLDR_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
              <TR>
                <TD align=left colSpan=2>临时防护栅及标示牌已拆除,并恢复了常设防护栅和标示牌,工作票于</TD></TR>
              <TR>
                <TD align=left colSpan=2><INPUT class=TextUnderCss2 
                  id=txtCBPJSSJ onclick="showcalendar(this,true)"
              name=txtCBPJSSJ>结束。</TD></TR>
              <TR>
                <TD style="HEIGHT: 25px" align=right colSpan=2>值&nbsp; 班 
                  &nbsp;员<INPUT class=TextUnderCss2 id=txtCBPZBY_txtTitle 
                  style="WIDTH: 74px" onclick=showDl(this) 
                  name=txtCBPZBY$txtTitle> <SPAN id=txtCBPZBY_dlshow 
                  style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
                  id=txtCBPZBY_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
                  onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
                  name=txtCBPZBY$DDLTitle> <OPTION value=0 
                    selected>请选择人员</OPTION></SELECT> </SPAN><SPAN 
                  id=txtCBPZBY_RequiredFieldValidator1 
                  style="DISPLAY: none; COLOR: red"></SPAN></TD></TR></TBODY></TABLE></TD></TR>
        <TR></TR></TBODY></TABLE></TD></TR></tr></TD>
                </tr>
                
                </TBODY></TABLE><tr> <TR>
          
     
    <TD style="HEIGHT: 10px" vAlign=top colSpan=3>&nbsp; 
    <input type="hidden" value="<%=jhid%>" name="jhid" />
                                      <input type="hidden" value="<%=jhlb%>" name="jhlb" />

									<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="修改" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="返回" name=btnFB>
    </TD></TR></TBODY></TABLE></DIV>

</BODY>
</html>
