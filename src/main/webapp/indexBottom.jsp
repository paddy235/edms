<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%><%@page import="mor.commons.db.DbTrade"%>
<html>
<head>
<link href="css/bodyStyle.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�й�����˷��·�ֹ�˾������ȹ�����Ϣϵͳ</title> 

<script language="JavaScript">

function switchSysBar(){
    if (switchPoint.innerText==7){
        switchPoint.innerText=8
            document.all("frmTitle").style.display="none"
        }else{
            switchPoint.innerText=7
            document.all("frmTitle").style.display=""
        }
    }
    function show() {
		alert("bottom.jsp");
	}
</SCRIPT>
<style type="text/css">
<!--
.style1 {
	font-size: 12px;
	color: #ffffff;
}
-->
</style>
</head>
<body  leftMargin="0" topMargin="0" rightmargin="0" bottommargin="0" bgColor=464646>
<table align="center" width="100%"  border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="210" height="22" align="center" valign="middle"  ><span class="style1"> ��¼��Ա:<%=(String)session.getAttribute("GWMC")+"  "+(String)session.getAttribute("YHMC") %> </span></td>
  	<td width="180" height="22" align="center" valign="middle"  ><span class="style1"> ������λ:<%=(String)session.getAttribute("DWMC")%> </span></td>
	<td  height="22" align="center"  valign="middle"><span class="style1">��½ʱ��:<%=(String) session.getAttribute("LOGIN_TIME")%></span></td>
    <td  height="22" align="right" valign="middle"><span class="style1">��Ȩ���У��й�����˷��·�ֹ�˾ &nbsp;&nbsp;&nbsp;����֧�֣���������ʢ����ѯ���޹�˾ ��ϵ����&nbsp; </span></td>
  </tr>
</table>
</body>
</html>
