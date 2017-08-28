<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>


<html>
  <head>
    <title>My JSP 'gzbg.jsp' starting page</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css"> 
 <script type="text/javascript" src="mycalendar2.js"></script>
  </head>
<SCRIPT language="JavaScript1.2">

void function  input_onclick(url){
//录入过程		
//alert(url);
		open_window(url,700,400,1);
}


function open_window(url,thisWidth,thisHeight,scrollbar){
//打开一居中窗口
    var left = 0;/*(screen.width-thisWidth)/3;*/
    var top = (screen.height-thisHeight)/3;
   left=left+300;   
  window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
}
</SCRIPT>   
  <body>
   <form>      
    <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
      <tbody> 
        <tr height="400px">
          <td style="width:70%"><img style="width:100%;height:100%" src="ss1.bmp"></td><td style="width:30%"><img style="width:100%;height:100%" src="ss2.bmp"></td>
        </tr>
      </tbody>
    </table>   
    <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
     <tbody> 
        <tr height="50px">
        <td align="center">
       <font size="3"> 预案名称:<input type="text"></font>
       
       </td>
       </tr>
    </tbody>
    </table> 
    <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
     <tbody> 
        <tr height="100px">
        <td align="center">
        <INPUT class=blueButtonCss onclick="input_onclick('<%=request.getContextPath()%>/qxya/glqxya.jsp')" id=SrcButton style="width:70px" type=button value=关联预案 name=SrcButton>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
        <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=保存  name=SrcButton>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  
       <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=重置 name=SrcButton>
       
       </td>
       </tr>
    </tbody>
    </table>         
    </form>  
  </body>
</html>
