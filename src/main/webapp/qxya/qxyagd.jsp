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
  
  <body> 
    <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>	 
    <tbody> 	
   		<tr>
   		<td width="10%">�ƶ�����: </td><td><input name="r1" onfocus="setday(this)" type="text" id="" value=""></td>
   		<td>�ƶ���: </td><td ><input  name="r1"  type="text" id="" value=""></td>	
   		<td>Ԥ������:</td><td><input type="text"></td>
   		</tr>   		
          <tr><td width="10%">רҵ:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>�Ӵ���</OPTION> 
               <OPTION value=0018410201>�����</OPTION> 
               <OPTION value=0018410204>����</OPTION> 
               <OPTION value=0018410203>����ͤ</OPTION></SELECT></td>
          <td width="10%">��������:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>�����Խӵ�</OPTION> 
               <OPTION value=0018410201>˲ʱ�ӵ�</OPTION> 
               <OPTION value=0018410204>�����ӵ�</OPTION> 
               <OPTION value=0018410203>֧����</OPTION></SELECT></td>
          <td width="10%">���Ϸ���</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>�Ӵ��߶���</OPTION> 
               <OPTION value=0018410201>֧����</OPTION></SELECT></td>
     </tr>  
     </tbody>
     </table>
    <table>
      <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
      <tbody> 
        <tr height=300px>
          <td style="width:7%">Ԥ������</td><td style="width:93%"><font size="3"><textarea style="width:100%;height:100%"  >���������߶���ʱ������Ӧ�������߷�����ȷ��λ�ã��Ͽ����������������߲����ķ�Χ�������
1.���߶����𻵷�Χ��С,�Ͽ������޽ϴ����ˡ����Σ�����ֱ�ӽ��߶Խӡ���������������һ��������ڣ�����ӻ�һ�ε��ߣ���ʱ���ڵ�����������һ����ͷ�����Ͻ��¾��߽��������һ����ͷ��
2.���߶����𻵷�Χ�ϴ�ʱ�����Ӿ������ȷ������������г����п���ͨ����������ʱ���ɽ��Ӵ�������ӵز�ȡ����ͨ���ķ����������͵�ͨ��������Ӧ��ѭ����ԭ��
��վ�����߶��ߣ����Ƚ��������𣬱�֤�ʺ����г����͵��ȿ�ͨ���ߡ�վ�����߻�������ߣ��ɽ��������𣬲�ȡ����ͨ���İ취�͵�ͨ����
�����ý��߷�ʽ�͵�ʱ�������װ�����̽��ߣ��Ͻ������������ߵ�ͨ������·��
3�����߶��ߴ���󣬱��뽫��ê��ȫ��Ѳ��һ�飬�ر�������ê�ᡢ�߲�����װ�á�ê�ιؽڵ��豸���Ƿ����ͨ����ͬʱӦ�������±仯ʱ���豸��Ӱ�졣
</textarea></td>
        </tr>
      </tbody>
    </table>
     <table id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>
     <tbody> 
        <tr height="100px">
        <td align="center">
        <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=���� name=SrcButton>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  
       <INPUT class=blueButtonCss id=SrcButton style="width:70px" type=button value=���� name=SrcButton> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
       
       </td>
       </tr>
    </tbody>
    </table>       
  </body>
</html>
