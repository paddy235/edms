<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<html>
  <head>    
    <title>My JSP 'Algd.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css">   
    <script type="text/javascript" src="mycalendar2.js"></script>
    </head>
   <body>
    <form >
      <label>����ǰ��λ�ã���������---->�����ƶ�</label>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
            <TD>������λ:</TD> 
            <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
               <OPTION value=0018410201>���ݹ��������</OPTION> 
               <OPTION value=0018410201>��ҶνӴ�������</OPTION></SELECT>
            </TD>
            <TD>רҵ����:</TD> 
            <TD><SELECT id=DrlLx style="WIDTH: 80px" > 
               <OPTION value=0018410201>�Ӵ���</OPTION>
               <OPTION value=0018410201>�����</OPTION> 
               <OPTION value=0018410201>����</OPTION></SELECT>
            </TD>
            <TD>��������:</TD> 
            <TD><SELECT id=DrlLx style="WIDTH: 80px" >
               <OPTION value=0018410201>����</OPTION>
                <OPTION value=0018410201>����</OPTION>
               <OPTION value=0018410201>����</OPTION>
               <OPTION value=0018410201>��ȫ</OPTION></SELECT>
            </TD>
            <TD>��&nbsp; &nbsp;��:</TD> 
            <TD><INPUT id=txtmc style="WIDTH: 120px">
            </TD>    
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=��ѯ name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=���� name=AddButton  onclick="window.location.href='GzzdAdd.jsp';"/></TD>
        </TR>
        <TR>
          <TD bgColor=#003366 colSpan=10 height=2></TD>
        </TR>
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="10" style="width:100%" align="left" valign="middle">�����ƶ���Ϣ</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >���</td>
            <td nowrap>����</td>
            <td>רҵ����</td>
            <td>��������</td>
            <td nowrap width="40%">�����ƶȼ���</td>
            <td>������λ</td>
            <td>����ʱ��</td>
            <td>�ϴ�ʱ��</td>
            <td nowrap>�����ƶ���ʾ</td> 
            <td>����</td>
         </tr>
          <tr>
            <td>1</td>
            <td>�Ӵ����������޹���</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>�Ӵ���....</td>
            <td>������</td>
            <td>2009-09-01</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="Gzzd.doc">�����ƶ�</a></td>
            <td><a href="GzzdAdd.jsp" target="_self">�༭</a>  <a href="#" target="_self">ɾ��</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>��·���硢ˮ����ȹ���</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>�Ӵ���....</td>
            <td>������</td>
            <td>2009-09-01</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="Gzzd1.doc">�����ƶ�</a></td>
            <td><a href="GzzdAdd.jsp" target="_self">�༭</a>  <a href="#" target="_self">ɾ��</a>
            </td>
          </tr>
        </TABLE>  
       </form>       
    </body>
</html>
