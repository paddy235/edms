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
     <label>您当前的位置：技术资料---->图纸新增/编辑</label>
     <hr>
    <TABLE id="mytable" style="WIDTH:80%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD>所属单位:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>李家段接触网工区</OPTION> 
              <OPTION value=000002>广州供电调度室</OPTION></SELECT>
           </TD> 
            <TD>关联设备:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
              <OPTION value=000001 selected>接触线</OPTION> 
              <OPTION value=000002>支柱</OPTION></SELECT></TD>
         </TR>
         <TR>
           <TD>图纸名称:</TD> 
          <TD><INPUT id=txtTzmc style="WIDTH: 140px" value="接触网线路图"></TD>
          <TD>图&nbsp; &nbsp; 号:</TD> 
           <TD><INPUT id=txtTh style="WIDTH: 140px" value="0001-01"></TD> 
         </TR>
          <TR>
          <TD>专&nbsp; &nbsp;业:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>接触网</OPTION> 
              <OPTION value=000002>变电所</OPTION>
              <OPTION value=000002>电力</OPTION></SELECT>
           </TD> 
            <TD>图纸类型:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
              <OPTION value=000001 selected>线路图</OPTION> 
              <OPTION value=000002>平面图</OPTION>
              <OPTION value=000002>装配图</OPTION></SELECT>
          </TD>
         </TR>
          <TR>
            <TD>图纸长度:</TD> 
          <TD><INPUT id=txtTzcd style="WIDTH: 140px" value="30"></TD>
          <TD>图纸宽度:</TD> 
           <TD><INPUT id=txtTzkd style="WIDTH: 140px" value="10"></TD> 
          </TR>
          <TR>
             <TD>图纸比例:</TD> 
             <TD colspan="3"><INPUT id=txtTzbl style="WIDTH: 140px" value="1:1000">
             </TD> 
          </TR>
          <TR>
             <TD>图纸简述:</TD> 
             <TD colspan="3">  <textarea id="txtTzjs" style="WIDTH: 100%;HEIGHT: 60px"></textarea>
             </TD> 
          </TR>
          <TR>
          <TD>图纸上传:</TD> 
          <TD colspan="3"> <input id="Tzsc" type="file" style="WIDTH: 100%" name="fileTp" value="" /> </TD> 
        </TR>
        </TABLE> 
         <BR>
       <DIV align="RIGHT" style="WIDTH:81%;">
       <INPUT id=SaveButton type=submit value=保存 name=AddButton/> 
       <INPUT id=CancelButton type=Button value=返回 name=CancelButton onclick="window.location.href='Tz.jsp';"/>
	  </DIV>
  </body>
</html>
