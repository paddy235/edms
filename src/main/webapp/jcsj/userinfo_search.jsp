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
      <label>����ǰ��λ�ã���Ա����---->��Ա��ѯ</label>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
          <TD style="HEIGHT: 20px" align="right" width="7%">ְ Ա �� ��:</TD>
          <TD align="left" style="WIDTH: 160px" nowrap>
          <INPUT id="" style="WIDTH: 140px" onfocus="setday(this)" name=></TD>
           <TD style="HEIGHT: 20px" align="right" width="7%">ְԱ����:</TD>
           <TD align="left" style="WIDTH: 160px" nowrap>
          <INPUT id=txtQsrq style="WIDTH: 140px" onfocus="setday(this)" name=txtQsrq></TD>
          <TD style="HEIGHT: 20px" align="right" width="7%">��������:</TD>
           <TD align="left" style="WIDTH: 80px" nowrap>
          <Select id=txtQsrq style="WIDTH: 60px" onfocus="setday(this)" name=txtQsrq></TD>
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=��ѯ name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=���� name=AddButton  onclick="window.location.href='userinfo_manage.jsp';"/></TD>
        </TR>
        
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="12" style="width:100%" align="left" valign="middle">��Ա��Ϣ</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >���</td>
            <td nowrap>ְԱ����</td>
            <td>��������</td>
            <td>��������</td>
            <td>ְ��</td>
            <td>רҵ</td>
            <td>���ܵȼ�</td>
            <td>��ȫ�ȼ�</td>
            <td>�칫�ҵ绰</td> 
            <td>�ֻ�����</td>
            <td>�鿴</td></tr>
          <tr>
            <td>1</td>
            <td>�����</td>
            <td>�װ�</td>
            <td>�人���Ӵ�������</td>
            <td>����</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">��ϸ����</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>�����</td>
            <td>�װ�</td>
            <td>�人���Ӵ�������</td>
            <td>����</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">��ϸ����</a></td>
          </tr>
                    <tr>
            <td>1</td>
            <td>�����</td>
            <td>�װ�</td>
            <td>�人���Ӵ�������</td>
            <td>����</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">��ϸ����</a></td>
          </tr>
                    <tr>
            <td>1</td>
            <td>�����</td>
            <td>�װ�</td>
            <td>�人���Ӵ�������</td>
            <td>����</td>
            <td>�Ӵ���</td>
            <td>����</td>
            <td>2</td>
            <td align="center">53246</td>
            <td><a href="AlEdit.jsp" target="_self">13987039842</a></td>
            <td><a href="AlEdit.jsp" target="_self">��ϸ����</a></td>
          </tr>           
        </TABLE>  
       </form>       
    </body>
</html>
