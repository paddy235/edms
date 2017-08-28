<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.sql.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%!
        private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return " ";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } 
    
    private String convertTime(java.sql.Time value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("HH:mm");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return " ";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    }
 %>
 %>
 <%!
 public String SetNull(String str)
{
  if(str==null)
  {
    return"";
  }
  else
  {
    return str;
  }
}
 
 
  %>
<%
	System.out.println("()()()()()()()()");
	String id = request.getParameter("id");
	System.out.println("id=:" + id);
	 DbTrade db_connection=new DbTrade();
	 String sql="select * from z_yxgl_gzpbds_black where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 
	 //得到作业人员的数据
	 String sql_zyry="select * from z_yxgl_zyry where ryb='bds_black' and gzpid="+id;
	 ResultSet resultSet1=db_connection.executeQuery(sql_zyry);
	 List mcList=new ArrayList();
	 List jbList=new ArrayList();
	 try{
	
	   while(resultSet1.next())
	   {
	     mcList.add(resultSet1.getString("rymc").toString());
	     jbList.add(resultSet1.getString("rydj").toString());
	   }
	   System.out.println("rrrrrrr"+mcList.size());
	   int j=mcList.size();
	   for(int i=1;i<(20-j);i++)
	   {
	     mcList.add("");
	     jbList.add("");
	   }
	   //System.out.println("afsdfasdfasdfasdf  "+mcList.get(0).toString()+"   j:"+jbList.get(0).toString());
	      
	 }catch(Exception ex) {
	 
	 }
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'operationTicket_Electric_black.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
			<script type="text/javascript">
		 function registerSubmit()
	     {//进行表单的非空验证
	           var gzph=document.getElementById("txtGZPH").value;
	           var ldr=document.getElementById("txtLDRXM").value;
	           
	            if(gzph=="")
	            {
	               //alert("NONO");gzphmesage  fprmesage fpsjmesage
	               document.getElementById("gzphmesage").style.display="block";
	            }
	            else if(ldr=="")
	            {
	            document.getElementById("ldrmessage").style.display="block";
	            }
	            else
	            {
	             document.getElementById("gzphmesage").style.display="none";
	             document.getElementById("ldrmessage").style.display="none";
	             document.Register.submit();
	            }
	        
	     }
		
		
		
		
		function allnum()
	     {
	       var zry=0;
	       var jb=0;
	       for(var i=1;i<16;i++)
	       {
	         var txtcy= document.getElementById("cy"+i+"_txtTitle").value;
	         var txtAQJB= document.getElementById("Aqdj"+i).value;
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	         if(txtAQJB!="")
	         {
	          jb=jb+1;
	         }
	       }
	       if(jb==zry)
	       {
	         document.getElementById("divmesg").style.display="none";
	       }
	       else
	       {
	        document.getElementById("divmesg").style.display="block";
	       }
	       document.getElementById("cyTotal").value=zry+1;
	     }
		</script>
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="/edms/yxgl/ticket/css/Calendar.js" type="text/javascript"></script>
  <link rel="stylesheet" href="css/GZP.css" type="text/css"></link>
  <link rel="stylesheet" href="css/StyleSheet3.css" type="text/css"></link></head>
  
 <BODY>
<form action="gzp_BdsblackUpdate.jsp" name="Register" method="post">
	   <%
	  
	      try{
	        while(resultSet.next())
	        {
	   %>
<DIV style="TEXT-ALIGN: center">
<TABLE>
  <TBODY>
  <TR>
    <TD style="TEXT-ALIGN: right" colSpan=2></TD></TR>
  <TR>
    <TD colSpan=2 align="center"><SPAN style="FONT-SIZE: 14pt"><STRONG>第 三 种 工 作 
      票<input type="hidden" name="jhid" value="<%=resultSet.getString("jhid")%>"></STRONG></SPAN></TD></TR>
  <TR>
    <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss id=txtDWBM 
      style="WIDTH: 141px" readOnly size=10 value="<%=resultSet.getString("dwmc") %>" name=txtDWBM><SPAN 
      id=RequiredFieldValidator3 
      style="DISPLAY: none; COLOR: red">单位不能为空！</SPAN>所(亭)</TD>
    <TD align=right>
    <SPAN id=gzphmesage	style="DISPLAY: none; COLOR: red">工作票号不能为空！</SPAN>
    第<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 60px" 
      value="<%=resultSet.getString("gzph") %>" name=txtGZPH>号</TD></TR>
  <TR>
    <TD style="HEIGHT: 21px" colSpan=2>
      <DIV style="TEXT-ALIGN: center">
      <TABLE class=tbl style="WIDTH: 581px" cellSpacing=0 cellPadding=0 
border=1>
        <TBODY>
        <TR>
          <TD style="WIDTH: 100px">作业地点内容</TD>
          <TD align=left colSpan=4><INPUT class=TextUnderCss id=txtZYDDNR 
            style="WIDTH: 410px" maxLength=100 value="<%=resultSet.getString("zyddjnr") %>"
            name=txtZYDDNR><SPAN id=RequiredFieldValidator4 
            style="DISPLAY: none; COLOR: red">作业地点及内容不能为空！</SPAN></TD></TR>
        <TR>
          <TD style="WIDTH: 100px">发&nbsp; 票 &nbsp;日&nbsp; 期</TD>
          <TD align=left colSpan=2><INPUT class=TextUnderCss id=txtFprq 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("fpsj"))%>" name=txtFprq> </TD>
          <TD style="WIDTH: 100px">发票人 </TD>
          <TD style="WIDTH: 98px" align=left>&nbsp;<INPUT class=TextUnderCss2 
            id=txt_FBR style="WIDTH: 74px" 
            value="<%=resultSet.getString("fpr") %>"name=txtFBR>  </TD></TR>
        <TR>
          <TD style="WIDTH: 100px">工 &nbsp;作&nbsp; 时&nbsp; 间</TD>
          <TD align=left colSpan=4>自<INPUT class=TextUnderCss id=inputGZSJQ 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("ksyxsj"))+" "+convertTime(resultSet.getTime("ksyxsj"))%>"
            name=inputGZSJQ>至<INPUT class=TextUnderCss id=inputGZSJZ 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("jsyxsj"))+" "+convertTime(resultSet.getTime("jsyxsj"))%>" 
            name=inputGZSJZ>止</TD></TR>
        <TR>
          <TD style="WIDTH: 100px">工 作 领 导 人</TD>
          <TD style="WIDTH: 100px">姓名 </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtLDRXM_txtTitle style="WIDTH: 50px" 
            value="<%=resultSet.getString("gzldr") %>" name=txtLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">工作领导人不能为空！</SPAN> </TD>
          <TD style="WIDTH: 100px">安全等级</TD>
          <TD style="WIDTH: 98px" align=left><INPUT class=TextUnderCss 
            id=txtLDRJB maxLength=4 size=5 value="<%=resultSet.getString("ldrdj") %>" name=txtLDRJB> <SPAN 
            id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: red">安全等级不能为空！</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">领导人等级要求至少为3！</SPAN> </TD></TR>
        <TR>
          <TD style="WIDTH: 100px" rowSpan=4>作 业 组 成 员<BR>姓名及安全等级</TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy1_txtTitle style="WIDTH: 40px"  value="<%=mcList.get(0).toString() %>" onblur="allnum()"
            name=cy1>  &nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj1 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(0).toString() %>" onblur="allnum()"
            name=Aqdj1>) </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy2_txtTitle style="WIDTH: 40px"  value="<%=mcList.get(1).toString() %>" onblur="allnum()"
            name=cy2> &nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj2 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(1).toString() %>" onblur="allnum()"
            name=Aqdj2>)  </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy3_txtTitle style="WIDTH: 40px" value="<%=mcList.get(2).toString() %>" onblur="allnum()"
            name=cy3> <SPAN 
            id=cy3_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj3 style="WIDTH: 13px" maxLength=1 name=Aqdj3 value="<%=jbList.get(2).toString() %>" onblur="allnum()">) </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy4_txtTitle style="WIDTH: 40px"  value="<%=mcList.get(3).toString() %>" onblur="allnum()"
            name=cy4> <SPAN id=cy4_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy4_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy4$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy4_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj4 style="WIDTH: 13px" maxLength=1 name=Aqdj4 value="<%=jbList.get(3).toString() %>" onblur="allnum()">) <SPAN 
            id=RegularExpressionValidator5 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator5 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD align=left><INPUT class=TextUnderCss id=cy5_txtTitle 
            style="WIDTH: 40px" name=cy5 value="<%=mcList.get(4).toString() %>" onblur="allnum()"> <SPAN 
            id=cy5_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy5_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy5$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy5_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj5 style="WIDTH: 13px" maxLength=1 
            name=Aqdj5 value="<%=jbList.get(4).toString() %>" onblur="allnum()">) <SPAN id=RegularExpressionValidator6 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator6 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy6_txtTitle 
            style="WIDTH: 40px" value="<%=mcList.get(5).toString() %>" onblur="allnum()"  name=cy6> <SPAN 
            id=cy6_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy6_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy6$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy6_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj6 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(5).toString() %>" onblur="allnum()"
            name=Aqdj6>) <SPAN id=RegularExpressionValidator7 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator7 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy7_txtTitle value="<%=mcList.get(6).toString() %>" onblur="allnum()"
            style="WIDTH: 40px"  name=cy7> <SPAN 
            id=cy7_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy7_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy7$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy7_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj7 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(6).toString() %>" onblur="allnum()" name=Aqdj7>) <SPAN 
            id=RegularExpressionValidator8 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator8 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy8_txtTitle value="<%=mcList.get(7).toString() %>" onblur="allnum()"
            style="WIDTH: 40px"  name=cy8> <SPAN 
            id=cy8_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy8_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy8$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy8_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj8 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(7).toString() %>" onblur="allnum()"" name=Aqdj8>) <SPAN 
            id=RegularExpressionValidator9 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator9 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy9_txtTitle style="WIDTH: 40px" value="<%=mcList.get(8).toString() %>" onblur="allnum()"
            name=cy9> <SPAN id=cy9_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy9_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy9$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> <OPTION 
              value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> <OPTION 
              value=000783>张美琴</OPTION> <OPTION value=000784>李小兰</OPTION> 
              <OPTION value=000782>杨晓燕</OPTION> <OPTION 
              value=000785>刘昌兰</OPTION> <OPTION value=000786>田海琳</OPTION> 
              <OPTION value=000787>陈淑琴</OPTION> <OPTION 
              value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> <OPTION 
              value=001453>孟晓玲</OPTION> <OPTION value=001454>张语珊</OPTION> 
              <OPTION value=001455>刘艳红</OPTION> <OPTION 
            value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy9_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj9 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(8).toString() %>" onblur="allnum()"
            name=Aqdj9>) <SPAN id=RegularExpressionValidator10 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator10 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy10_txtTitle style="WIDTH: 40px" value="<%=mcList.get(9).toString() %>" onblur="allnum()"
            name=cy10> <SPAN id=cy10_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy10_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy10$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy10_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj10 style="WIDTH: 13px" maxLength=1  value="<%=jbList.get(9).toString() %>" onblur="allnum()""
            name=Aqdj10>) <SPAN id=RegularExpressionValidator11 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator11 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy11_txtTitle style="WIDTH: 40px" value="<%=mcList.get(10).toString() %>" onblur="allnum()"
            name=cy11> <SPAN id=cy11_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy11_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy11$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy11_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj11 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(10).toString() %>" onblur="allnum()" name=Aqdj11>) <SPAN 
            id=RegularExpressionValidator12 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator12 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD style="HEIGHT: 21px" align=left><INPUT class=TextUnderCss 
            id=cy12_txtTitle style="WIDTH: 40px" value="<%=mcList.get(11).toString() %>" onblur="allnum()"
            name=cy12> <SPAN id=cy12_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy12_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy12$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy12_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>( <INPUT class=TextUnderCss 
            id=Aqdj12 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(11).toString() %>" onblur="allnum()" name=Aqdj12>) <SPAN 
            id=RegularExpressionValidator13 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator13 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD></TR>
        <TR>
          <TD align=left><INPUT class=TextUnderCss id=cy13_txtTitle 
            style="WIDTH: 40px"  name=cy13 value="<%=mcList.get(12).toString() %>" onblur="allnum()"> <SPAN 
            id=cy13_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy13_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy13$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy13_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj13 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(12).toString() %>" onblur="allnum()"
            name=Aqdj13>) <SPAN id=RegularExpressionValidator14 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator14 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy14_txtTitle 
            style="WIDTH: 40px"  name=cy14 value="<%=mcList.get(13).toString() %>" onblur="allnum()"> <SPAN 
            id=cy14_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=cy14_DDLTitle onblur=hiddeDl(this) style="WIDTH: 40px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=cy14$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=cy14_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN>&nbsp;&nbsp;&nbsp;( <INPUT 
            class=TextUnderCss id=Aqdj14 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(13).toString() %>" onblur="allnum()"
            name=Aqdj14>) <SPAN id=RegularExpressionValidator15 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator15 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=left><INPUT class=TextUnderCss id=cy15_txtTitle 
            style="WIDTH: 40px"  name=cy15 value="<%=mcList.get(14).toString() %>" onblur="allnum()"> ( <INPUT class=TextUnderCss 
            id=Aqdj15 style="WIDTH: 13px" maxLength=1 value="<%=jbList.get(14).toString() %>" onblur="allnum()" name=Aqdj15>) <SPAN 
            id=RegularExpressionValidator16 
            style="DISPLAY: none; COLOR: red">安全等级要求为数字！</SPAN> <SPAN 
            id=CompareValidator16 
            style="DISPLAY: none; COLOR: red">作业组成员等级要求至少为2！</SPAN> </TD>
          <TD align=middle>共计<INPUT class=TextUnderCss id=cyTotal 
            maxLength=100 size=2 value="<%=resultSet.getString("cgrs") %>" name=cyTotal>人
            <div style="display: none; color: red;" id="divmesg">
														安全等级不能为空！
													</div>
            </TD></TR>
        <TR>
          <TD class=td1 style="WIDTH: 100%; HEIGHT: 100%" colSpan=5>
            <DIV style="TEXT-ALIGN: center">
            <TABLE style="WIDTH: 100%; HEIGHT: 100%">
              <TBODY>
              <TR>
                <TD class=td3 
                style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; WIDTH: 50%; HEIGHT: 150px; BORDER-RIGHT-WIDTH: 0px; BORDER-RIGHT-COLOR: black" 
                vAlign=top align=middle>必须采取的安全措施<BR><TEXTAREA id=txtAQCS style="WIDTH: 98%; HEIGHT: 150px" name=txtAQCS><%=SetNull(resultSet.getString("cqaqcs")) %></TEXTAREA></TD>
                <TD style="WIDTH: 1px; BACKGROUND-COLOR: gray"></TD>
                <TD style="WIDTH: 50%; HEIGHT: 150px" vAlign=top>已经完成的安全措施<BR><TEXTAREA id=txtYZAQCS style="WIDTH: 96%; HEIGHT: 150px" name=txtYZAQCS><%=SetNull(resultSet.getString("wcaqcs")) %></TEXTAREA></TD></TR></TBODY></TABLE></DIV></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 21px" align=left 
            colSpan=5>已做好安全措施准予在<INPUT class=TextUnderCss2 id=txtGZS 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("zykssj"))+" "+convertTime(resultSet.getTime("zykssj"))%>"
            name=txtGZS>开始工作，在<INPUT class=TextUnderCss2 id=txtGZZ 
            onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("zyjssj"))+" "+convertTime(resultSet.getTime("zyjssj"))%>"
            name=txtGZZ>结束工作</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=5>值班员<INPUT class=TextUnderCss2 
            id=txtZBY_txtTitle style="WIDTH: 80px" 
            value="<%=resultSet.getString("zyzbyqz") %>" name=txtZBY> <SPAN id=txtZBY_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtZBY_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtZBY$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=txtZBY_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red">值班员不能为空！</SPAN> </TD></TR>
        <TR>
          <TD class=td1 align=left colSpan=5>经检查安全措施已做好，并于<INPUT 
            class=TextUnderCss2 id=txtGZZXSJ onclick="showcalendar(this,true)" 
            value="<%=convertDate(resultSet.getDate("ksgzsj"))+" "+convertTime(resultSet.getTime("ksgzsj"))%>" name=txtGZZXSJ>开始工作</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=5>工作领导人<INPUT class=TextUnderCss2 
            id=txtGZLDR_txtTitle style="WIDTH: 80px"  
            value="<%=resultSet.getString("ksgzldrqz") %>" name=txtGZLDR> <SPAN id=txtGZLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtGZLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtGZLDR$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=txtGZLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 21px" align=left 
            colSpan=5>变更作业组成员记录<INPUT class=TextUnderCss2 id=txtBGJL 
            style="WIDTH: 400px" maxLength=100 value="<%=resultSet.getString("zyrybgjl") %>" name=txtBGJL></TD></TR>
        <TR>
          <TD align=left colSpan=5></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 18px" align=right colSpan=3>发票人<INPUT 
            class=TextUnderCss2 id=txtBGFBR_txtTitle style="WIDTH: 74px" 
            value="<%=resultSet.getString("bgfprqz") %>" name=txtBGFBR> <SPAN 
            id=txtBGFBR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtBGFBR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 74px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtBGFBR$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=txtBGFBR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD>
          <TD class=td1 style="HEIGHT: 18px" align=right colSpan=5>工作领导人<INPUT 
            class=TextUnderCss2 id=txtBGLDR_txtTitle style="WIDTH: 80px" 
            value="<%=resultSet.getString("bgldrqz") %>" name=txtBGLDR> <SPAN 
            id=txtBGLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtBGLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtBGLDR$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=txtBGLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 style="HEIGHT: 25px" align=left colSpan=3>工作已于<INPUT 
            class=TextUnderCss2 id=txtJSSJ onclick="showcalendar(this,true)" 
            value="<%=convertDate(resultSet.getDate("jssj"))+" "+convertTime(resultSet.getTime("jssj"))%>" name=txtJSSJ>结束</TD>
          <TD class=td1 style="HEIGHT: 25px" align=right colSpan=2>工作领导人<INPUT 
            class=TextUnderCss2 id=txtJSLDR_txtTitle style="WIDTH: 80px" 
             value="<%=resultSet.getString("jsldrqz") %>" name=txtJSLDR> <SPAN 
            id=txtJSLDR_dlshow 
            style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT 
            id=txtJSLDR_DDLTitle onblur=hiddeDl(this) style="WIDTH: 80px" 
            onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false) 
            name=txtJSLDR$DDLTitle> <OPTION value=0 selected>请选择人员</OPTION> 
              <OPTION value=000514>雒乐</OPTION> <OPTION value=000515>陈明顺</OPTION> 
              <OPTION value=000783>张美琴</OPTION> <OPTION 
              value=000784>李小兰</OPTION> <OPTION value=000782>杨晓燕</OPTION> 
              <OPTION value=000785>刘昌兰</OPTION> <OPTION 
              value=000786>田海琳</OPTION> <OPTION value=000787>陈淑琴</OPTION> 
              <OPTION value=001386>魏玉明</OPTION> <OPTION value=001388>陈博</OPTION> 
              <OPTION value=001453>孟晓玲</OPTION> <OPTION 
              value=001454>张语珊</OPTION> <OPTION value=001455>刘艳红</OPTION> 
              <OPTION value=001456>卢雯</OPTION></SELECT> </SPAN><SPAN 
            id=txtJSLDR_RequiredFieldValidator1 
            style="DISPLAY: none; COLOR: red"></SPAN></TD></TR>
        <TR>
          <TD class=td1 align=left colSpan=5>作业地点已清理就绪，工作票于<INPUT 
            class=TextUnderCss2 id=txtZYQL onclick="showcalendar(this,true)" 
           value="<%=convertDate(resultSet.getDate("gzpjssj"))+" "+convertTime(resultSet.getTime("gzpjssj"))%>" name=txtZYQL>结束</TD></TR>
        <TR>
          <TD class=td1 align=right colSpan=5>值班员<INPUT class=TextUnderCss2 
            id=txtZYQLZBY_txtTitle style="WIDTH: 80px" 
            value="<%=resultSet.getString("zbyqz") %>" name=txtZYQLZBY> </TD></TR></TBODY></TABLE></DIV><SPAN id=Label1></SPAN><BR>
      <TABLE WIDTH="100%">
        <TBODY>
    							<tr>
								<td align="right">

									<input type="hidden" value="<%=id%>" name="gzpid" />


									<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="修改" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="返回" name=btnFB>
								</td>
							<tr></TBODY></TABLE>&nbsp; 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</TD></TR></TBODY></TABLE></DIV>
<DIV id=hiden 
style="Z-INDEX: 999; LEFT: -1000px; WIDTH: 200px; POSITION: absolute; TOP: -1000px"><INPUT 
id=inputZycyAqdj name=inputZycyAqdj> <INPUT id=inputBdsid name=inputBdsid> 
<INPUT id=inputGzpid name=inputGzpid> </DIV>
													<%}
	      }catch(Exception ex) {
} %>
</form>
</BODY>
</html>
