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
    <SCRIPT language="JavaScript1.2">
void function  input_onclick3(url)
{
    //alert(url);
	open_window(url,900,500,1);
}

function open_window(url,thisWidth,thisHeight,scrollbar){
//��һ���д���
    var left =(screen.width-thisWidth)/2;
    var top = (screen.height-thisHeight)/2;
    //left=300;   
    window.open(url,"","left="+left+",top="+top+",height="+thisHeight+",width="+thisWidth+",toolbar=no,location=no,directories=no,menubar=no,scrollbars="+scrollbar+",resizable=yes,status=1,center:yes");
}
</SCRIPT> 
<script language="JScript"> 
var n=0; 
function go(url){ 
n==0?new function(){frames("frame1").location=url,n=1}:null; 
document.all("frame1").readyState!="complete"?setTimeout(go,10):so(); 
function so(){frames("frame1").document.execCommand("SaveAs"),n=0}; 
} 
</script> 
    </head>
   <body>
    <form >
        <div style="width:100%">    
           <div style="float:left; width:30%"> <label>����ǰ��λ�ã���������---->ͼֽ</label></div>
           <div style="float:right;width:60%" align="right">
             <iframe id="frame1" style="display:none"> </iframe> 
           <a href="javascript:go('ktcj.msi')">��ͼ���</a>       
         </div>
       </div>
      <hr>
      <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
       <TBODY> 
        <TR>
            <TD>��&nbsp; &nbsp;λ:</TD> 
            <TD><SELECT id=DrlDw style="WIDTH: 140px" > 
               <OPTION value=0018410201>���ݹ��������</OPTION> 
               <OPTION value=0018410201>��ҶνӴ�������</OPTION></SELECT>
            </TD>
            <TD>ר&nbsp; &nbsp;ҵ:</TD> 
            <TD><SELECT id=DrlZy style="WIDTH: 80px" > 
               <OPTION value=0018410201>�Ӵ���</OPTION> 
               <OPTION value=0018410201>�����</OPTION>
               <OPTION value=0018410201>����</OPTION></SELECT>
            </TD>
            <TD>ͼֽ����:</TD> 
            <TD><SELECT id=DrlZy style="WIDTH: 80px" > 
               <OPTION value=0018410201>��·ͼ</OPTION>
               <OPTION value=0018410201>ƽ��ͼ</OPTION> 
               <OPTION value=0018410201>װ��ͼ</OPTION></SELECT>
            </TD>
            <TD>ͼֽ����:</TD> 
            <TD><INPUT id=txtTzmc style="WIDTH: 120px">
            </TD>    
          <TD style="HEIGHT: 20px"><INPUT class=blueButtonCss id=SrcButton type=button value=��ѯ name=SrcButton>&nbsp;</TD>
          <TD style="HEIGHT: 20px" align="right"><INPUT class=blueButtonCss id=AddButton type=button value=���� name=AddButton  onclick="window.location.href='TzAdd.jsp';"/></TD>
        </TR>
        <TR>
          <TD bgColor=#003366 colSpan=10 height=2></TD>
        </TR>
      </TABLE>        
	  <br>
      <TABLE id="mytable1" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
        <TR>
          <TD colspan="14" style="width:100%" align="left" valign="middle">ͼֽ��Ϣ</TD>
        </TR>
         <tr bgcolor="#8080ff" align="center" height="28px">           
            <td >���</td>
            <td nowrap>ͼֽ����</td>
            <td>ͼ��</td>
            <td>רҵ</td>
            <td>ͼֽ����</td>
            <td>����</td>
            <td>����</td>
            <td>���</td>
            <td nowrap width="40%">ͼֽ����</td>
            <td>�����豸</td>
            <td>������λ</td>
            <td>�ϴ�ʱ��</td>
            <td nowrap>ͼֽ��ʾ</td> 
            <td>����</td>
         </tr>
          <tr>
            <td>1</td>
            <td>�Ӵ�����·ͼ</td>
            <td>0001-01</td>
            <td>�Ӵ���</td>
            <td>��·ͼ</td>
            <td>1��1000</td>
            <td>30</td>
            <td>10</td>
            <td>��Ҷ��������Ӵ�����·ͼ....</td>
            <td>�Ӵ���</td>
            <td align="center">��Ҷ�������</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="#" onclick="javascript:input_onclick3('ShowTz.jsp')">ͼֽ</a></td>
            <td><a href="TzAdd.jsp" target="_self">�༭</a>  <a href="#" target="_self">ɾ��</a>
            </td>
          </tr>
           <tr>
            <td>2</td>
            <td>�Ӵ�����·ͼ</td>
            <td>0002-02</td>
            <td>�Ӵ���</td>
            <td>��·ͼ</td>
            <td>1��1000</td>
            <td>30</td>
            <td>10</td>
            <td>��Ҷ��������Ӵ�����·ͼ....</td>
            <td>�Ӵ���</td>
            <td align="center">��Ҷ�������</td>
            <td>2009-09-01</td>
            <td><a id="prevLink03" href="#" onclick="javascript:input_onclick3('ShowTz.jsp')">ͼֽ</a></td>
            <td><a href="TzAdd.jsp" target="_self">�༭</a>  <a href="#" target="_self">ɾ��</a>
            </td>
          </tr>
        </TABLE>
       </form>       
    </body>
</html>
