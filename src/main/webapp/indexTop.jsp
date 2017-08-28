<%@ page contentType="text/html;charset=gb2312"%>

<HTML>
<HEAD>
<TITLE>中国神华神朔铁路分公司供电调度管理信息系统</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<SCRIPT language=JavaScript type=text/JavaScript>
function Show_Hide_Top()  
{
	if( tabTitle.style.display == "none")
	{
		tabTitle.style.display = "";
		frm.picUpDown.src = "images/frm_images/top_off.gif";
		frm.picUpDown.title = "最大化区域";
		parent.frmall.rows = "82,*,22";
	}
	else{
		tabTitle.style.display = "none";
		frm.picUpDown.src = "images/frm_images/top_on.gif";
		frm.picUpDown.title = "还原区域";
		parent.frmall.rows = "22,*,22";
	}
}
function Show_Topic(idx)
{
	alert(document.all("td1").bgcolor);
	document.all("td1").style.bgcolor="green";
}
</SCRIPT>
<SCRIPT language=JavaScript type=text/JavaScript>
var mark=9;
<!--

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function gb(){
	if(confirm("确认退出吗？")==1){
	
		parent.window.close();
	}
}
function void1(){
	return;
}
function chaxun(){	
	frm.submit();
}
function set_bq(i){	
	frm.topic.value=i;
}
function tiaojian_on(){	
	frm.tiaojian.focus();
}
//-->
</SCRIPT>
<script language="JavaScript">
    function show() {
		alert("top.jsp");
	}
</SCRIPT>
</HEAD>
<STYLE type=text/css>
.td-style{	
 	font-size: 14px;
} 
<!--
a {  
	TEXT-DECORATION: none;
}

a:active {
	FONT-SIZE: 9pt; 
	COLOR: #00ff00; 
	TEXT-DECORATION: none
}

a:link {
	FONT-SIZE: 9pt; 
	COLOR: #00ff00;
	TEXT-DECORATION: none
}

a:visited {
	FONT-SIZE: 9pt; 
	COLOR: #5F72AE;
}

a:hover {
	FONT-SIZE: 9pt;
	COLOR: #ff6600; 
	TEXT-DECORATION: none;
}
.input{
	BORDER-COLLAPSE: collapse;
	BORDER-BOTTOM: solid windowtext .5pt;
	BORDER-LEFT:none;
	BORDER-RIGHT:solid windowtext .5pt;
	BORDER-TOP: none;
	background-image:url(images/login_iamges/top2.gif);
	border-color:#000000; 
	font-size:13px;
}
-->
</style>  
<%
String jb=(String)session.getAttribute("DWJB");
%>
<BODY width=100% align="center" text=#000000 bgColor=#464646 leftMargin=0 topMargin=0 onload="MM_preloadImages()">
<FORM name=frm method=post action="indexMenu_online.jsp" target="online">
<input type="hidden" name="topic" value="chexing">
<TABLE align=center width=100% border=0 cellPadding=0 cellSpacing=0 id=tabTitle>
<TBODY><TR vAlign=top align=left>
<TD><IMG height=60 src="images/frm_images/top1280.jpg" width=100%></TD>
</TR></TBODY>
</TABLE>
<TABLE cellSpacing=0 borderColorDark=#ffffff cellPadding=0 width="100%" 
align=center bgColor=ffffff borderColorLight=#808080 border=0>
  <TBODY>
        <TR>
         
          <TD class="td-style"  align="left">
		   <TABLE cellSpacing=0 cellPadding=0 border=0><tr >
		    <td width="1" bgColor=#ffffff>
		    <font size="1px;">&nbsp;</font></td>

            <td width="81">
			<a href="indexMain.jsp?menu=gzjh/Menu_gzjh.jsp&deft=gzjh/image.jsp" target="middle" onmouseover="mouse_over(1)" 
            onmouseout="mouse_out()" onClick="click_keep(1)">
			<IMG SRC="images/main_menu_images/bq1.gif" ALT="" name="bq1" WIDTH=80 HEIGHT=25 border="0"></a></td>

			<td width="81">
			<a href="indexMain.jsp?menu=gzp/Menu_gzp.jsp&deft=gzp/image.jsp" target="middle" onmouseover="mouse_over(4)" 
            onmouseout="mouse_out()" onClick="click_keep(4)">
			<IMG SRC="images/main_menu_images/bq4.gif" ALT="" name="bq4" WIDTH=80 HEIGHT=25 border="0"></a></td>

			<td width="81">
			<a href="indexMain.jsp?menu=rcgl/Menu_rcgl.jsp&deft=rcgl/image.jsp" target="middle" onmouseover="mouse_over(2)" 
            onmouseout="mouse_out()" onClick="click_keep(2)">
			<IMG SRC="images/main_menu_images/bq2.gif" ALT="" name="bq2" WIDTH=80 HEIGHT=25 border="0"></a></td>
			
			<td width="81">
			<a href="indexMain.jsp?menu=ddml/Menu_ddml.jsp&deft=ddml/image.jsp" target="middle" onmouseover="mouse_over(3)" 
            onmouseout="mouse_out()" onClick="click_keep(3)">
			<IMG SRC="images/main_menu_images/bq3.gif" ALT="" name="bq3" WIDTH=80 HEIGHT=25 border="0"></a></td>		
			
		
			<td width="81">
			<a href="indexMain.jsp?menu=tsdqr/Menu_tsdqr.jsp&deft=tsdqr/image.jsp" target="middle" onmouseover="mouse_over(5)" 
            onmouseout="mouse_out()" onClick="click_keep(5)">
			<IMG SRC="images/main_menu_images/bq5.gif" ALT="" name="bq5" WIDTH=80 HEIGHT=25 border="0"></a></td>
			
					
			<td width="81">
			<a href="indexMain.jsp?menu=qxya/Menu_qxya.jsp&deft=deft.jsp" target="middle" onmouseover="mouse_over(7)" 
            onmouseout="mouse_out()" onClick="click_keep(7)">
			<IMG SRC="images/main_menu_images/bq7.gif" ALT="" name="bq7" WIDTH=80 HEIGHT=25 border="0"></a></td>
					
			<td width="81">
			<a href="indexMain.jsp?menu=jcsj/Menu_jcsj.jsp&deft=deft.jsp" target="middle" onmouseover="mouse_over(8)" 
            onmouseout="mouse_out()" onClick="click_keep(8)">
			<IMG SRC="images/main_menu_images/bq8.gif" ALT="" name="bq8" WIDTH=80 HEIGHT=25 border="0"></a></td>

			<td width="81">
			<a href="indexMain.jsp?menu=tjbb/Menu_tjbb.jsp&deft=deft.jsp" target="middle" onmouseover="mouse_over(9)" 
            onmouseout="mouse_out()" onClick="click_keep(9)">
			<IMG SRC="images/main_menu_images/bq9.gif" ALT="" name="bq9" WIDTH=80 HEIGHT=25 border="0"></a></td>

			<td width="81">
		 	<a href="indexMain.jsp?menu=xtwh/Menu_xtwh.jsp&deft=deft.jsp" target="middle" onmouseover="mouse_over(10)" 
            onmouseout="mouse_out()" onClick="click_keep(10)">
			<IMG SRC="images/main_menu_images/bq10.gif" ALT="" name="bq10" WIDTH=80 HEIGHT=25 border="0"></a></td>		
			
			<td width="81">
		 	<a href="indexMain.jsp?menu=yhbz/Menu_yhbz.jsp&deft=deft.jsp" target="middle" onmouseover="mouse_over(11)" 
            onmouseout="mouse_out()" onClick="click_keep(11)">
			<IMG SRC="images/main_menu_images/bq11.gif" ALT="" name="bq11" WIDTH=80 HEIGHT=25 border="0"></a></td>		
			
			<td width="81">
		 	<a href="logout.jsp" target="_parent" onmouseover="mouse_over(12)" 
            onmouseout="mouse_out()">
			<IMG SRC="images/main_menu_images/bq12.gif" ALT="" name="bq12" WIDTH=80 HEIGHT=25 border="0"></a></td>		
		
			<td  WIDTH=10>&nbsp;&nbsp;</td>
		   </tr></table>
          </TD>
          
         
		</TR>
  </TBODY>
</TABLE>
</FORM>
<script language="JavaScript" type="text/JavaScript">
var mm=0;
// MM_swapImage('bq'+mark,'','images/main_menu_images/bq'+mark+'_1.gif',1);
function mouse_over(i) { //v3.0
	MM_swapImage('bq'+mark,'','images/main_menu_images/bq'+mark+'.gif',1);
	MM_swapImgRestore();
	MM_swapImage('bq'+i,'','images/main_menu_images/bq'+i+'_1.gif',1);
}
function mouse_out() { //v3.0
	MM_swapImgRestore();
	//if(mm==1)
	MM_swapImage('bq'+mark,'','images/main_menu_images/bq'+mark+'_1.gif',1);
}
function click_keep(i) { //v3.0
	//alert(i);
	mark=i;
	mm=1;
	input_loco.style.display="";
	MM_swapImage('bq'+mark,'','images/main_menu_images/bq'+mark+'_1.gif',1);
}
function click_xtwh() { //v3.0
	mouse_over(1);
	mm=0;
	mouse_out();
}
timerID = setTimeout("click_keep(1);",1);
timerID = setTimeout("mouse_over(1);",1);
</script>
</BODY></HTML>
