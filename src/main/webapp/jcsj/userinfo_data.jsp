<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>


<html>
  <head>
    <title>My JSP 'userinfo_manage.jsp' starting page</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="default.css"> 
 <script type="text/javascript" src="mycalendar2.js"></script>
  </head>
  
  <body>
   <form>   
    <TABLE id="mytable" style="WIDTH:100%" cellSpacing=0 cellPadding=0 border=0>	 
    <tbody> 	
   		<tr>
   		<td width="10%">��������: </td><td><select name="r1" style="WIDTH: 80px" id="" value="">
   		       <OPTION>����</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		       <td width="10%">�������Ʊ�: </td><td><select name="jg" style="WIDTH: 130px" id="" value="">
   		       <OPTION>�人���Ӵ�������</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		<td width="10%">רҵ: </td><td ><SELECT id=DrlSgszDw style="WIDTH: 100px" > 
               <OPTION value=0018410201>�Ӵ���</OPTION> 
               <OPTION value=0018410201>�����</OPTION> 
               <OPTION value=0018410204>����</OPTION></SELECT></td>
               </tr>
        <tr>	
        <td width="10%">��������: </td><td><select name="jg" style="WIDTH: 130px" id="" value="">
   		       <OPTION>�人���Ӵ�������</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		<td width="10%">ְԱְ��:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>����</OPTION> 
               <OPTION value=0018410201></OPTION> 
               <OPTION value=0018410204></OPTION> 
               <OPTION value=0018410203></OPTION></SELECT></td>
   		
   		</tr>  
   		<tr>
   		<td width="10%"> ְԱ����: </td><td><input name="n1" type="text" id="" value=""></td>
   		<td width="10%"> ְԱ����: </td><td><input name="c1" type="text" id="" value=""></td>
   		</tr>            
     </tbody>
     </table> 
     <hr><caption>��ϸ��Ϣ</caption>
     
     <TABLE id="mytable" cellSpacing=0 cellPadding=0 border=0 width="998" height="111" style="height: 111px;">  
         <TR>
          <td width="10%">�Ա�:</td><td>
          <SELECT id=Sex_id style="WIDTH: 50px" > 
               <OPTION value=1>��</OPTION> 
               <OPTION value=2>Ů</OPTION> 
              </SELECT></td>
           <td width="10%"> ����: </td><td><input name="jiguan" type="text" id="" value=""></td>
           <td width="10%"> ����: </td><td><input name="nation" type="text" id="" value=""></td>
           <td width="10%"> ��������: </td><td><input name="hukou" type="text" id="" value=""></td>
           </TR>
           <TR>
           <td width="10%"> ������: </td><td><input name="birth_p" type="text" id="" value=""></td>
           <td width="10%"> ��������: </td><td><input name="birth_d" type="text" id="" value=""></td>
           <td width="10%"> ���֤����: </td><td><input name="identify_no" type="text" id="" value=""></td>
           <td width="10%"> ����״��: </td><td><input name="Marital_Status" type="text" id="" value=""></td>
         </TR>
         <TR>
          <td width="10%">�Ļ��̶�:</td><td>
          <SELECT id=Sex_id style="WIDTH: 80px" > 
               <OPTION value=0></OPTION> 
               <OPTION value=1>����</OPTION> 
               <OPTION value=2>ְҵ��ר</OPTION>
               <OPTION value=3>����</OPTION> 
               <OPTION value=4>�о���</OPTION>
               <OPTION value=1>��ʿ��</OPTION> 
              </SELECT></td>
           <td width="10%">������ò:</td><td>
              <SELECT id=Sex_id style="WIDTH: 80px" > 
               <OPTION value=1>Ⱥ��</OPTION>
               <OPTION value=2>��Ա</OPTION>
               <OPTION value=3>��Ա</OPTION>
               </SELECT></td>
               <td width="10%">��Ա���:</td><td>
              <SELECT id=people_kind style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION>
               </SELECT></td>
               <td width="10%">����:</td><td>
               <SELECT id=work_type style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION>
               </SELECT></td>
               <TR>
               <td width="10%">��ȫ�ȼ�:</td><td>
               <SELECT id=scurity_level style="WIDTH: 80px" > 
               <OPTION value=1>5</OPTION>
               <OPTION value=2>4</OPTION>
               <OPTION value=3>3</OPTION>
               <option value=4>2</option>
               <option value=5>1</option></SELECT></td>
               <td width="10%">��Ӧ�¹ʵȼ�:</td><td>
               <SELECT id=accident_level style="WIDTH: 80px" > 
               <OPTION value=1>D</OPTION>
               <OPTION value=2>C</OPTION>
               <OPTION value=3>B</OPTION>
               <option value=4>A</option></SELECT></td>
               <td width="10%">�����ȼ�:</td><td>
               <SELECT id=skill_Level style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION></SELECT></td>
               <td width="10%">��λ����:</td><td>
               <SELECT id=work_type style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION></SELECT></td>
               </TR>
               <TR>
           <td width="10%"> �칫�ҵ绰: </td><td><input name="birth_p" type="text" id="" value=""></td>
           <td width="10%"> �ֻ�����: </td><td><input name="birth_d" type="text" id="" value=""></td>
           <td width="10%"> סլ�绰: </td><td><input name="identify_no" type="text" id="" value=""></td>
         </TR>        
       </TABLE> 
       <TABLE border="0" width="100%" cellspacing="1" align="center">
	<TBODY>
		<TR>
			<TD><TABLE border="0" width="100%" bgcolor="#a6caf0" cellspacing="0">
				<TBODY>
					<TR class="header">
						<TD width="30%"><INPUT type="hidden" name="act" value="ddd"></TD>
						<TD width="20%" align="center"><INPUT type="button" name="save" value="�� ��"
							onclick="submitform('save')"></TD>
						<TD width="20%" align="center"><INPUT type="reset" name="recover" value="�� ��"></TD>
						<TD align="right" width="30%"></TD>
					</TR>
				</TBODY>
			</TABLE>
			</TD>
		</TR>
	</TBODY>
</TABLE>        
    </form>   
  </body>
</html>
