<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
    <title>My JSP 'TzAdd.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	 <link rel="stylesheet" type="text/css" href="default.css">   
    <script type="text/javascript" src="mycalendar2.js"></script>
    <script type="text/javascript" src="DivXstp.js"></script>
  </head>
  
  <body>
     <label>����ǰ��λ�ã���������---->�����ƶ�����/�༭</label>
     <hr>
    <TABLE id="mytable" style="WIDTH:80%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD>������λ:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>������</OPTION> 
              <OPTION value=000002>���ݹ��������</OPTION></SELECT>
           </TD> 
           <TD>��&nbsp; &nbsp;��:</TD> 
          <TD><INPUT id=txtTzmc style="WIDTH: 140px" value="�Ӵ����������޹���"></TD>
         </TR>
         <TR>
          <TD>רҵ����:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>�Ӵ���</OPTION> 
              <OPTION value=000002>�����</OPTION>
              <OPTION value=000002>����</OPTION></SELECT>
           </TD> 
            <TD>��������:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
               <OPTION value=0018410201>����</OPTION>
                <OPTION value=0018410201>����</OPTION>
               <OPTION value=0018410201>����</OPTION>
               <OPTION value=0018410201>��ȫ</OPTION></SELECT>
          </TD>
         </TR>
          <TR>
            <TD>����ʱ��:</TD> 
            <TD  colspan="3"><INPUT id=txtFssj style="WIDTH: 140px" onfocus="setday(this)"></TD>
          </TR>
          <TR>
             <TD>�����ƶȼ���:</TD> 
             <TD colspan="3">  <textarea id="txtTzjs" style="WIDTH: 100%;HEIGHT: 60px"></textarea>
             </TD> 
          </TR>
          <TR>
          <TD>�����ƶ��ϴ�:</TD> 
          <TD colspan="3"> <input id="Tzsc" type="file" style="WIDTH: 100%" name="fileTp" value="" /> </TD> 
        </TR>
        </TABLE> 
         <BR>
       <DIV align="RIGHT" style="WIDTH:81%;">
       <INPUT id=SaveButton type=submit value=���� name=AddButton/> 
       <INPUT id=CancelButton type=Button value=���� name=CancelButton onclick="window.location.href='Gzzd.jsp';"/>
	  </DIV>
  </body>
</html>
