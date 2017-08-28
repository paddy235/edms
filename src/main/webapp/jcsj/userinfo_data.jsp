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
   		<td width="10%">所属级别: </td><td><select name="r1" style="WIDTH: 80px" id="" value="">
   		       <OPTION>班组</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		       <td width="10%">机构名称别: </td><td><select name="jg" style="WIDTH: 130px" id="" value="">
   		       <OPTION>武汉北接触网工区</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		<td width="10%">专业: </td><td ><SELECT id=DrlSgszDw style="WIDTH: 100px" > 
               <OPTION value=0018410201>接触网</OPTION> 
               <OPTION value=0018410201>变电所</OPTION> 
               <OPTION value=0018410204>电力</OPTION></SELECT></td>
               </tr>
        <tr>	
        <td width="10%">所属部门: </td><td><select name="jg" style="WIDTH: 130px" id="" value="">
   		       <OPTION>武汉北接触网工区</OPTION>
   		       <OPTION></OPTION>
   		       <OPTION></OPTION></td>
   		<td width="10%">职员职务:</td><td><SELECT id=DrlSgszDw style="WIDTH: 155px" > 
               <OPTION value=0018410201>网工</OPTION> 
               <OPTION value=0018410201></OPTION> 
               <OPTION value=0018410204></OPTION> 
               <OPTION value=0018410203></OPTION></SELECT></td>
   		
   		</tr>  
   		<tr>
   		<td width="10%"> 职员姓名: </td><td><input name="n1" type="text" id="" value=""></td>
   		<td width="10%"> 职员工号: </td><td><input name="c1" type="text" id="" value=""></td>
   		</tr>            
     </tbody>
     </table> 
     <hr><caption>详细信息</caption>
     
     <TABLE id="mytable" cellSpacing=0 cellPadding=0 border=0 width="998" height="111" style="height: 111px;">  
         <TR>
          <td width="10%">性别:</td><td>
          <SELECT id=Sex_id style="WIDTH: 50px" > 
               <OPTION value=1>男</OPTION> 
               <OPTION value=2>女</OPTION> 
              </SELECT></td>
           <td width="10%"> 籍贯: </td><td><input name="jiguan" type="text" id="" value=""></td>
           <td width="10%"> 民族: </td><td><input name="nation" type="text" id="" value=""></td>
           <td width="10%"> 户口性质: </td><td><input name="hukou" type="text" id="" value=""></td>
           </TR>
           <TR>
           <td width="10%"> 出生地: </td><td><input name="birth_p" type="text" id="" value=""></td>
           <td width="10%"> 出生日期: </td><td><input name="birth_d" type="text" id="" value=""></td>
           <td width="10%"> 身份证号码: </td><td><input name="identify_no" type="text" id="" value=""></td>
           <td width="10%"> 婚姻状况: </td><td><input name="Marital_Status" type="text" id="" value=""></td>
         </TR>
         <TR>
          <td width="10%">文化程度:</td><td>
          <SELECT id=Sex_id style="WIDTH: 80px" > 
               <OPTION value=0></OPTION> 
               <OPTION value=1>高中</OPTION> 
               <OPTION value=2>职业中专</OPTION>
               <OPTION value=3>本科</OPTION> 
               <OPTION value=4>研究生</OPTION>
               <OPTION value=1>博士生</OPTION> 
              </SELECT></td>
           <td width="10%">政治面貌:</td><td>
              <SELECT id=Sex_id style="WIDTH: 80px" > 
               <OPTION value=1>群众</OPTION>
               <OPTION value=2>团员</OPTION>
               <OPTION value=3>党员</OPTION>
               </SELECT></td>
               <td width="10%">人员类别:</td><td>
              <SELECT id=people_kind style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION>
               </SELECT></td>
               <td width="10%">工种:</td><td>
               <SELECT id=work_type style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION>
               </SELECT></td>
               <TR>
               <td width="10%">安全等级:</td><td>
               <SELECT id=scurity_level style="WIDTH: 80px" > 
               <OPTION value=1>5</OPTION>
               <OPTION value=2>4</OPTION>
               <OPTION value=3>3</OPTION>
               <option value=4>2</option>
               <option value=5>1</option></SELECT></td>
               <td width="10%">对应事故等级:</td><td>
               <SELECT id=accident_level style="WIDTH: 80px" > 
               <OPTION value=1>D</OPTION>
               <OPTION value=2>C</OPTION>
               <OPTION value=3>B</OPTION>
               <option value=4>A</option></SELECT></td>
               <td width="10%">技术等级:</td><td>
               <SELECT id=skill_Level style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION></SELECT></td>
               <td width="10%">岗位属性:</td><td>
               <SELECT id=work_type style="WIDTH: 80px" > 
               <OPTION value=1></OPTION>
               <OPTION value=2></OPTION>
               <OPTION value=3></OPTION></SELECT></td>
               </TR>
               <TR>
           <td width="10%"> 办公室电话: </td><td><input name="birth_p" type="text" id="" value=""></td>
           <td width="10%"> 手机号码: </td><td><input name="birth_d" type="text" id="" value=""></td>
           <td width="10%"> 住宅电话: </td><td><input name="identify_no" type="text" id="" value=""></td>
         </TR>        
       </TABLE> 
       <TABLE border="0" width="100%" cellspacing="1" align="center">
	<TBODY>
		<TR>
			<TD><TABLE border="0" width="100%" bgcolor="#a6caf0" cellspacing="0">
				<TBODY>
					<TR class="header">
						<TD width="30%"><INPUT type="hidden" name="act" value="ddd"></TD>
						<TD width="20%" align="center"><INPUT type="button" name="save" value="保 存"
							onclick="submitform('save')"></TD>
						<TD width="20%" align="center"><INPUT type="reset" name="recover" value="重 填"></TD>
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
