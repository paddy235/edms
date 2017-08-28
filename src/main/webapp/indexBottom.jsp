<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%><%@page import="mor.commons.db.DbTrade"%>
<html>
<head>
<link href="css/bodyStyle.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>中国神华神朔铁路分公司供电调度管理信息系统</title> 

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
    <td width="210" height="22" align="center" valign="middle"  ><span class="style1"> 登录人员:<%=(String)session.getAttribute("GWMC")+"  "+(String)session.getAttribute("YHMC") %> </span></td>
  	<td width="180" height="22" align="center" valign="middle"  ><span class="style1"> 所属单位:<%=(String)session.getAttribute("DWMC")%> </span></td>
	<td  height="22" align="center"  valign="middle"><span class="style1">登陆时间:<%=(String) session.getAttribute("LOGIN_TIME")%></span></td>
    <td  height="22" align="right" valign="middle"><span class="style1">版权所有：中国神华神朔铁路分公司 &nbsp;&nbsp;&nbsp;技术支持：北京华运盛达咨询有限公司 联系我们&nbsp; </span></td>
  </tr>
</table>
</body>
</html>
