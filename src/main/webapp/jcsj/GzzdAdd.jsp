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
     <label>您当前的位置：技术资料---->规章制度新增/编辑</label>
     <hr>
    <TABLE id="mytable" style="WIDTH:80%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD>发布单位:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>铁道部</OPTION> 
              <OPTION value=000002>广州供电调度室</OPTION></SELECT>
           </TD> 
           <TD>名&nbsp; &nbsp;称:</TD> 
          <TD><INPUT id=txtTzmc style="WIDTH: 140px" value="接触网故障抢修规则"></TD>
         </TR>
         <TR>
          <TD>专业分类:</TD> 
          <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
              <OPTION value=000001 selected>接触网</OPTION> 
              <OPTION value=000002>变电所</OPTION>
              <OPTION value=000002>电力</OPTION></SELECT>
           </TD> 
            <TD>类型名称:</TD> 
          <TD><SELECT id=DrlGlsb style="WIDTH: 140px" > 
               <OPTION value=0018410201>抢修</OPTION>
                <OPTION value=0018410201>调度</OPTION>
               <OPTION value=0018410201>检修</OPTION>
               <OPTION value=0018410201>安全</OPTION></SELECT>
          </TD>
         </TR>
          <TR>
            <TD>发布时间:</TD> 
            <TD  colspan="3"><INPUT id=txtFssj style="WIDTH: 140px" onfocus="setday(this)"></TD>
          </TR>
          <TR>
             <TD>规章制度简述:</TD> 
             <TD colspan="3">  <textarea id="txtTzjs" style="WIDTH: 100%;HEIGHT: 60px"></textarea>
             </TD> 
          </TR>
          <TR>
          <TD>规章制度上传:</TD> 
          <TD colspan="3"> <input id="Tzsc" type="file" style="WIDTH: 100%" name="fileTp" value="" /> </TD> 
        </TR>
        </TABLE> 
         <BR>
       <DIV align="RIGHT" style="WIDTH:81%;">
       <INPUT id=SaveButton type=submit value=保存 name=AddButton/> 
       <INPUT id=CancelButton type=Button value=返回 name=CancelButton onclick="window.location.href='Gzzd.jsp';"/>
	  </DIV>
  </body>
</html>
