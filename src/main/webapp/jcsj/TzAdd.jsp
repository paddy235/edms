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
     <label>����ǰ��λ�ã���������---->ͼֽ����/�༭</label>
     <hr>
    <TABLE id="mytable" style="WIDTH:80%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD>������λ:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>��ҶνӴ�������</OPTION> 
              <OPTION value=000002>���ݹ��������</OPTION></SELECT>
           </TD> 
            <TD>�����豸:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
              <OPTION value=000001 selected>�Ӵ���</OPTION> 
              <OPTION value=000002>֧��</OPTION></SELECT></TD>
         </TR>
         <TR>
           <TD>ͼֽ����:</TD> 
          <TD><INPUT id=txtTzmc style="WIDTH: 140px" value="�Ӵ�����·ͼ"></TD>
          <TD>ͼ&nbsp; &nbsp; ��:</TD> 
           <TD><INPUT id=txtTh style="WIDTH: 140px" value="0001-01"></TD> 
         </TR>
          <TR>
          <TD>ר&nbsp; &nbsp;ҵ:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>�Ӵ���</OPTION> 
              <OPTION value=000002>�����</OPTION>
              <OPTION value=000002>����</OPTION></SELECT>
           </TD> 
            <TD>ͼֽ����:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
              <OPTION value=000001 selected>��·ͼ</OPTION> 
              <OPTION value=000002>ƽ��ͼ</OPTION>
              <OPTION value=000002>װ��ͼ</OPTION></SELECT>
          </TD>
         </TR>
          <TR>
            <TD>ͼֽ����:</TD> 
          <TD><INPUT id=txtTzcd style="WIDTH: 140px" value="30"></TD>
          <TD>ͼֽ���:</TD> 
           <TD><INPUT id=txtTzkd style="WIDTH: 140px" value="10"></TD> 
          </TR>
          <TR>
             <TD>ͼֽ����:</TD> 
             <TD colspan="3"><INPUT id=txtTzbl style="WIDTH: 140px" value="1:1000">
             </TD> 
          </TR>
          <TR>
             <TD>ͼֽ����:</TD> 
             <TD colspan="3">  <textarea id="txtTzjs" style="WIDTH: 100%;HEIGHT: 60px"></textarea>
             </TD> 
          </TR>
          <TR>
          <TD>ͼֽ�ϴ�:</TD> 
          <TD colspan="3"> <input id="Tzsc" type="file" style="WIDTH: 100%" name="fileTp" value="" /> </TD> 
        </TR>
        </TABLE> 
         <BR>
       <DIV align="RIGHT" style="WIDTH:81%;">
       <INPUT id=SaveButton type=submit value=���� name=AddButton/> 
       <INPUT id=CancelButton type=Button value=���� name=CancelButton onclick="window.location.href='Tz.jsp';"/>
	  </DIV>
  </body>
</html>
