<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%!
        private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } 
    
    private String convertTime(java.sql.Time value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("HH:mm");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } %>

 <%!
 public String SetNull(String str)
{
  if(str==null)
  {
    return"";
  }
  else
  {
    return str;
  }
}
 
 
  %>
<%
	String jhid = request.getParameter("jhid");
	String jhlb = request.getParameter("jhlb");
	System.out.println("BDSjhid=:" + jhid);
	String dwmc =session.getAttribute("gqmc").toString();
%>
<%
	 String id = request.getParameter("id");

	 System.out.println("id=:" + id);
	 DbTrade db_connection=new DbTrade();
	 String sql="select * from z_yxgl_gzpbds_black where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 System.out.println("id=:" + sql);
	 //�õ���ҵ��Ա������
	 String sql_zyry="select * from z_yxgl_zyry where ryb='bds_black' and gzpid="+id;
	 ResultSet resultSet1=db_connection.executeQuery(sql_zyry);
	 
	   
	 List mcList=new ArrayList();
	 List jbList=new ArrayList();
	 try{
	 
	   while(resultSet1.next())
	   {
	     mcList.add(resultSet1.getString("rymc").toString());
	     System.out.println("afsdfasdfasdfasdf  "+sql_zyry);
	     jbList.add(resultSet1.getString("rydj").toString());
	   }
	   System.out.println("rrrrrrr"+mcList.size());
	   int j=mcList.size();
	   for(int i=1;i<(20-j);i++)
	   {
	     mcList.add("");
	     jbList.add("");
	   }
	   System.out.println("afsdfasdfasdfasdf  "+mcList.get(0).toString()+"   j:"+jbList.get(0).toString());
	      
	 }catch(Exception ex) {
	 
	 }
	
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
	     {//���б����ķǿ���֤
	           var gzph=document.getElementById("txtGZPH").value;
	       
	            if(gzph=="")
	            {
	               //alert("NONO");gzphmesage  fprmesage fpsjmesage
	               document.getElementById("gzphmesage").style.display="block";
	            } 
	            else
	            {   
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
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	       }

	       document.getElementById("cyTotal").value=(zry+1)+" ";
	     }
		</script>
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="/edms/gzp/ticket/css/Calendar.js" type="text/javascript"></script>
  <link rel="stylesheet" href="css/GZP.css" type="text/css"></link>
  <link rel="stylesheet" href="css/StyleSheet3.css" type="text/css"></link></head>
  
 <BODY>
<form action="gzp_BdsblackUpdate.jsp" name="Register" method="post">
  <%
	  
	      try{
	        while(resultSet.next())
	        {
	   %>
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
      value="<%=resultSet.getString("gzph") %>" name=txtGZPH>��</TD></TR>
  <TR>
    <TD style="HEIGHT: 21px" colSpan=2>
      <DIV style="TEXT-ALIGN: center">
      <TABLE class=tbl style="WIDTH: 750px" cellSpacing=0 cellPadding=0 
border=1>
        <TBODY>
        <TR>
          <TD style="WIDTH: 100px" rowspan="4">��ҵ�ص�����</TD>
          <TD align=left colSpan=4 rowspan="4"><INPUT class=TextUnderCss id=txtZYDDNR 
            style="WIDTH: 420px" maxLength=100 value="<%=resultSet.getString("ZYDDJNR") %>" 
            name=txtZYDDNR><SPAN id=RequiredFieldValidator4 
            style="DISPLAY: none; COLOR: red">��ҵ�ص㼰���ݲ���Ϊ�գ�</SPAN></TD></TR>
        <TR>
          
          <TD style="WIDTH: 100px">��Ʊ�� </TD>
          <TD style="WIDTH: 98px" align=left>&nbsp;<INPUT class=TextUnderCss2 
            id=txt_FBR style="WIDTH: 74px" 
            value="<%=resultSet.getString("FPR") %>" name=txtFBR>  </TD></TR>
        <TR>
           <TR>
          <TD style="WIDTH: 100px">��&nbsp; Ʊ &nbsp;��&nbsp; ��</TD>
          <TD align=left colSpan=2><INPUT class=TextUnderCss id=txtFprq 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("fpsj"))%>" name=txtFprq> </TD>
         </TR><tr>
          <TD style="WIDTH: 100px">�� &nbsp;��&nbsp; ʱ&nbsp; ��</TD>
          <TD align=left colSpan=6>��<INPUT class=TextUnderCss id=inputGZSJQ 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("KSYXSJ"))+" "+convertTime(resultSet.getTime("KSYXSJ"))%>" 
            name=inputGZSJQ>��<INPUT class=TextUnderCss id=inputGZSJZ 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("JSYXSJ"))+" "+convertTime(resultSet.getTime("JSYXSJ"))%>" 
            name=inputGZSJZ>ֹ</TD></TR>
        <TR>
          <TD style="WIDTH: 100px">�� �� �� �� ��</TD>
          <TD style="WIDTH: 100px">���� </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtLDRXM_txtTitle style="WIDTH: 70px" 
            value="<%=resultSet.getString("GZLDR") %>" name=txtLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> </TD>
          <TD style="WIDTH: 100px">��ȫ�ȼ�</TD>
          <TD style="WIDTH: 98px" align=left colSpan=23><INPUT class=TextUnderCss 
            id=txtLDRJB maxLength=4 size=5 value=" <%=resultSet.getString("LDRDJ")%>" name=txtLDRJB> <SPAN 
            id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�����Ϊ�գ�</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">�쵼�˵ȼ�Ҫ������Ϊ3��</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px" rowSpan=4>�� ҵ �� �� Ա<BR>��������ȫ�ȼ�</TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy1_txtTitle style="WIDTH: 70px"  value="<%=mcList.get(0).toString() %>" onblur="allnum()"
            name=cy1> </TD>
          <TD style="HEIGHT: 21px" align=left cls><INPUT class=TextUnderCss 
            id=cy2_txtTitle style="WIDTH: 70px"  value="<%=mcList.get(1).toString() %>" onblur="allnum()"
            name=cy2>    </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy3_txtTitle style="WIDTH: 70px" onblur="allnum()"  value="<%=mcList.get(2).toString() %>"
            name=cy3> <SPAN 
            id=cy3_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy4_txtTitle style="WIDTH: 70px"  onblur="allnum()" value="<%=mcList.get(3).toString() %>"
            name=cy4> </TD>
             <TD style="HEIGHT: 21px" align=left colSpan=2><INPUT class=TextUnderCss 
            id=cy5_txtTitle style="WIDTH: 70px"  onblur="allnum()" value="<%=mcList.get(4).toString() %>"
            name=cy5> </TD>
            </TR>
            
        <TR>
          <TD align=left><INPUT class=TextUnderCss id=cy6_txtTitle  value="<%=mcList.get(5).toString() %>"
            style="WIDTH: 70px" name=cy6 onblur="allnum()">  </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy7_txtTitle  value="<%=mcList.get(6).toString() %>"
            style="WIDTH: 70px" onblur="allnum()"  name=cy7> <SPAN 
            id=cy6_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy6_DDLTitle onblur=hiddeDl(this) style="WIDTH: 70px" 
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
            style="DISPLAY: none; COLOR: red"></SPAN> <SPAN id=RegularExpressionValidator7 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator7 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy8_txtTitle onblur="allnum()"  value="<%=mcList.get(7).toString() %>"
            style="WIDTH: 70px"  name=cy8> <SPAN 
            id=cy7_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy7_DDLTitle onblur=hiddeDl(this) style="WIDTH: 70px" 
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
            style="DISPLAY: none; COLOR: red"></SPAN> <SPAN 
            id=RegularExpressionValidator8 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator8 
            style="DISPLAY: none; COLOR: red">��ҵ���Ա�ȼ�Ҫ������Ϊ2��</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy9_txtTitle onblur="allnum()"   value="<%=mcList.get(8).toString() %>"
            style="WIDTH: 70px"  name=cy9>  </TD>
               <TD align=left colSpan=2><INPUT class=TextUnderCss id=cy10_txtTitle onblur="allnum()" 
            style="WIDTH: 70px"  value="<%=mcList.get(9).toString() %>" name=cy10> </TD></TR>
        <TR>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy11_txtTitle style="WIDTH: 70px" onblur="allnum()" value="<%=mcList.get(10).toString() %>"
            name=cy11> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy12_txtTitle style="WIDTH: 70px"  onblur="allnum()" value="<%=mcList.get(11).toString() %>"
            name=cy12></TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy13_txtTitle style="WIDTH: 70px" onblur="allnum()" value="<%=mcList.get(12).toString() %>"
            name=cy13></TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy14_txtTitle style="WIDTH: 70px" onblur="allnum()" value="<%=mcList.get(13).toString() %>"
            name=cy14>  </TD>
             <TD style="HEIGHT: 21px" align=left colSpan=2><INPUT class=TextUnderCss 
            id=cy15_txtTitle style="WIDTH: 70px" onblur="allnum()" value="<%=mcList.get(14).toString() %>"
            name=cy15> </TD></TR>
        <TR>
         
          <TD align=right colspan="6">����<INPUT class=TextUnderCss id=cyTotal 
           size=10 value="<%=resultSet.getString("cgrs")%> " name=cyTotal>��
            <div style="display: none; color: red;" id="divmesg">
														��ȫ�ȼ�����Ϊ�գ�
													</div>
            </TD></TR>
            <TR>
          <TD style="WIDTH: 100px" align="center">�ⵥλ����ʱ<br>������໤��</TD>
          <TD style="WIDTH: 100px">���� </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtWLLDRXM_txtTitle style="WIDTH: 50px" 
            value="<%=resultSet.getString("WLLDRXM") %>" name=txtWLLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> </TD>
          <TD style="WIDTH: 100px">��ȫ�ȼ�</TD>
          <TD style="WIDTH: 98px" align=left colSpan=3><INPUT class=TextUnderCss 
            id=txtWLLDRJB maxLength=4 size=5  value=" <%=SetNull(resultSet.getString("WLLDRJB"))%> " name=txtWLLDRJB> <SPAN 
            id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�����Ϊ�գ�</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">�쵼�˵ȼ�Ҫ������Ϊ3��</SPAN> </TD></TR>
            <TR>
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
                 <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >1��ע����ҵ�ص㸽�������豸��<TEXTAREA id=txtAQCS style="WIDTH: 98%; HEIGHT: 150px" name=txtAQCS><%=SetNull(resultSet.getString("CQAQCS")) %></TEXTAREA></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >1����ע����ҵ�ص㸽�������豸��<TEXTAREA id=txtYZAQCS style="WIDTH: 96%; HEIGHT: 150px" name=txtYZAQCS><%=SetNull(resultSet.getString("WCAQCS")) %></TEXTAREA></TD></TR>
                <TR>
                <TD class=td3 
                style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; WIDTH: 50%; HEIGHT: 150px; BORDER-RIGHT-WIDTH: 0px; BORDER-RIGHT-COLOR: black" 
                vAlign=top >2��������ȫ��ʩ<TEXTAREA id=txtAQCS style="WIDTH: 98%; HEIGHT: 150px" name=txtAQCS1><%=SetNull(resultSet.getString("AQCS1")) %></TEXTAREA></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top >2���Ѿ���ɵ�������ȫ��ʩ<TEXTAREA id=txtYZAQCS style="WIDTH: 96%; HEIGHT: 150px" name=txtYZAQCS1><%=SetNull(resultSet.getString("YZAQCS1")) %></TEXTAREA></TD></TR>
                
                </TBODY></TABLE></DIV></TD></TR>
        <TR>
        
          <TD class=td1 style="HEIGHT: 21px" align=left 
            colSpan=5>�����ð�ȫ��ʩ׼����<INPUT class=TextUnderCss2 id=txtGZS 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("ZYKSSJ"))+" "+convertTime(resultSet.getTime("ZYKSSJ"))%>"
            name=txtGZS>��ʼ������</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>ֵ��Ա<INPUT class=TextUnderCss2 value="<%=SetNull(resultSet.getString("ZYZBYQZ")) %>"
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
            class=TextUnderCss2 id=txtGZZXSJ onclick="showcalendar(this,true)"  value="<%=convertDate(resultSet.getDate("KSGZSJ"))+" "+convertTime(resultSet.getTime("KSGZSJ"))%>"
            value="" name=txtGZZXSJ>��ʼ����</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>�����쵼��<INPUT class=TextUnderCss2 
            id=txtGZLDR_txtTitle style="WIDTH: 80px"  value="<%=SetNull(resultSet.getString("KSGZLDRQZ")) %>"
            value="" name=txtGZLDR>��ǩ�֣� <br>������໤��<INPUT class=TextUnderCss2 value="<%=SetNull(resultSet.getString("BDSJHR")) %>"
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
            colSpan=5>�����ҵ���Ա��¼<INPUT class=TextUnderCss2 id=txtBGJL value="<%=SetNull(resultSet.getString("ZYRYBGJL")) %>"
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
            class=TextUnderCss2 id=txtBGLDR_txtTitle style="WIDTH: 80px" value="<%=SetNull(resultSet.getString("BGLDRQZ")) %>"
             name=txtBGLDR>��ǩ�֣�<br>��Ʊ��<INPUT 
            class=TextUnderCss2 id=txtBGFBR_txtTitle style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BGFPRQZ")) %>"
            onclick=showDl(this) name=txtBGFBR>��ǩ�֣� <br>��Ʊ��<INPUT 
            class=TextUnderCss2 id=txtBGFBR1_txtTitle style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BGFBR1")) %>"
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
            class=TextUnderCss2 id=txtJSSJ onclick="showcalendar(this,true)"  value="<%=convertDate(resultSet.getDate("JSSJ"))+" "+convertTime(resultSet.getTime("JSSJ"))%>"
             name=txtJSSJ>ȫ������</TD>
          <TD class=td1 style="HEIGHT: 25px" align=right colSpan=5><br>�����쵼��<INPUT 
            class=TextUnderCss2 id=txtJSLDR_txtTitle style="WIDTH: 80px" value="<%=SetNull(resultSet.getString("JSLDRQZ")) %>"
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
          <TD class=td1 align=left colSpan=5>��ҵ�ص�����������������Ʊ��<INPUT 
            class=TextUnderCss2 id=txtZYQL onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("GZPJSSJ"))+" "+convertTime(resultSet.getTime("GZPJSSJ"))%>"
              name=txtZYQL>����</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=7>ֵ��Ա<INPUT class=TextUnderCss2 
            id=txtZYQLZBY_txtTitle style="WIDTH: 80px" value="<%=SetNull(resultSet.getString("ZBYQZ")) %>"
              name=txtZYQLZBY>��ǩ�֣� </TD></TR></TBODY></TABLE></DIV><SPAN id=Label1></SPAN><BR>
      <TABLE WIDTH="100%">
        <TBODY>
    							<tr>
								<td align="right">

									<input type="hidden" value="<%=jhid%>" name="jhid" />
                                      <input type="hidden" value="<%=id%>" name="gzpid" />
								<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="�޸�" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="����" name=btnFB>
								</td>
							<tr></TBODY></TABLE>&nbsp; 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</TD></TR></TBODY></TABLE></DIV>
<DIV id=hiden 
style="Z-INDEX: 999; LEFT: -1000px; WIDTH: 200px; POSITION: absolute; TOP: -1000px"><INPUT 
id=inputZycyAqdj name=inputZycyAqdj> <INPUT id=inputBdsid name=inputBdsid> 
<INPUT id=inputGzpid name=inputGzpid> </DIV>		<%}
	      }catch(Exception ex) {
} %>
</form>
</BODY>
</html>