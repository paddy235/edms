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
	
	String id = request.getParameter("id");
	System.out.println("id=:" + id);
	 DbTrade db_connection=new DbTrade();
	 String sql="select * from z_yxgl_gzpbds_green where gzpid="+id;
	 ResultSet resultSet=db_connection.executeQuery(sql);
	 
	 //�õ���ҵ��Ա������
	 String sql_zyry="select * from z_yxgl_zyry where ryb='bds_green' and gzpid="+id;
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
	   for(int i=1;i<(26-j);i++)
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


		<title>My JSP 'operationPlan_Electric.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link rel="stylesheet" href="css/calendar-skin.css" type="text/css"></link>
		<script src="css/Calendar.js" type="text/javascript"></script>
		<link rel="stylesheet" href="css/BdsgzpGreen.css"
			type="text/css"></link>


		<script type="text/javascript">
		 function registerSubmit()
	     {//���б��ķǿ���֤
	       
	        
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
	       for(var i=1;i<26;i++)
	       {
	         var txtcy= document.getElementById("cy"+i+"_txtTitle").value; 
	         if(txtcy!="")
	         {
	         zry=zry+1;
	         }
	         
	       } 
	       document.getElementById("cyTotal").value=" "+(zry+1);
	     }
		</script>










	</head>

	
	<BODY>
		<form action="gzp_Bds_greenUpdate.jsp" name="Register" method="post">
				   <%
	  
	      try{
	        while(resultSet.next())
	        {
	   %>
			<div>
				<DIV style="TEXT-ALIGN: center">
					<TABLE style="WIDTH: 100%">
						<TBODY>
							<TR>
								<TD style="COLOR: #000000; TEXT-ALIGN: left" colSpan=3></TD>
							</TR>
							<TR>
								<TD style="TEXT-ALIGN: center" colSpan=3>
								
									<STRONG>&nbsp; <SPAN style="FONT-SIZE: 14pt">&nbsp;�������һ�ֹ���Ʊ</SPAN>
									</STRONG>
								</TD>
							</TR>
							<TR>
								<TD  colSpan="4">
									<TABLE style="WIDTH: 100%">
										<TBODY>
											<TR>
												<TD align=left>
													<INPUT class=TextUnderCss id=inputBdsname
														style="WIDTH: 141px" readOnly value=<%=resultSet.getString("dwmc") %> name=Bdsname>
													����ͤ)
												</TD>
												<TD align=right>
													<SPAN id=gzphmesage
														style="DISPLAY: none; COLOR: red">����Ʊ�Ų���Ϊ�գ�</SPAN>��&nbsp;
													<INPUT class=TextUnderCss id=txtGZPH style="WIDTH: 48px" value="<%=resultSet.getString("gzph") %>"
														name=txtGZPH>
													&nbsp;��
												</TD>
											</TR>
										</TBODY>
									</TABLE>
								</TD>
								<TD align=right colSpan=2></TD>
							</TR>
							<TR>
								<TD style="WIDTH: 525px; HEIGHT: 400px" vAlign=top>
									<TABLE class=tbl id=TABLE1 style="WIDTH: 525px; HEIGHT: 400px"
										cellSpacing=0 cellPadding=0 border=1>
										<TBODY>
											<TR>
												<TD style="WIDTH: 48px" align=middle>
													��ҵ�ص㼰����
												</TD>
												<TD style="WIDTH: 255px; HEIGHT: 20px" align=left colSpan=3>
													<INPUT class=TextUnderCss id=txtZYDDNR  value="<%=resultSet.getString("zynr") %>" 
														style="WIDTH: 240px; HEIGHT: 32px" name=txtZYDDNR>
													<SPAN id=RequiredFieldValidator4
														style="DISPLAY: none; COLOR: red">��ҵ�ص㼰���ݲ���Ϊ�գ�</SPAN>
												</TD>
												<TD style="WIDTH: 188px" align=middle>
													������Դ
												</TD>
												<TD style="WIDTH: 105px; HEIGHT: 20px" align=left colSpan=5>
													<INPUT class=TextUnderCss id=txtZYDDNR value="<%=SetNull(resultSet.getString("RWLY")) %>" 
														style="WIDTH: 100px; HEIGHT: 32px" name=txtRWLY> 
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 48px; HEIGHT: 29px" align=middle>
													����ʱ��
												</TD>
												<TD style="WIDTH: 375px; HEIGHT: 29px" align=left colSpan=5>
													��
													<INPUT class=TextUnderCss id=inputGZSJQ
														onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("ksyxsj"))+" "+convertTime(resultSet.getTime("ksyxsj"))%>" name=txtGZSJQ>
													��
													<INPUT class=TextUnderCss id=inputGZSJZ
														onclick="showcalendar(this,true)"  value="<%=convertDate(resultSet.getDate("jsyxsj"))+" "+convertTime(resultSet.getTime("jsyxsj"))%>" name=txtGZSJZ>
													ֹ
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 48px; HEIGHT: 39px" align=middle>
													�����쵼��
												</TD>
												<TD style="WIDTH: 375px; HEIGHT: 39px" align=left colSpan=5>
													����:
													<INPUT class=TextUnderCss id=txtLDRXM  value="<%=resultSet.getString("gzldr") %>"
														style="WIDTH: 151px" name=LDRXM>
													<SPAN id=ldrmessage
														style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> ��ȫ�ȼ�:
													<INPUT class=TextUnderCss id=inputLDRJB maxLength=1 size=4 value="<%=resultSet.getString("ldrdj") %>"
														name=LDRJB>
													<SPAN id=RequiredFieldValidator3
														style="DISPLAY: none; COLOR: red">��ȫ�ȼ�����Ϊ�գ�</SPAN>
													<SPAN id=RegularExpressionValidator1
														style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN>
													<SPAN id=CompareValidator1
														style="DISPLAY: none; COLOR: red">�쵼�˵ȼ�Ҫ������Ϊ3��</SPAN>
												</TD>
											</TR>
											
											<TR>
												<TD style="WIDTH: 188px" align=middle rowSpan=6>
													��ҵ���Ա��������ȫ�ȼ�
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy1_txtTitle
														style="WIDTH: 43px" onblur="allnum()" value="<%=mcList.get(0).toString() %>" name=cy1>
													 

												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy2_txtTitle value="<%=mcList.get(1).toString() %>"
														style="WIDTH: 43px" onblur="allnum()" name=cy2>
													 

												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy3_txtTitle value="<%=mcList.get(2).toString() %>"
														style="WIDTH: 43px" onblur="allnum()"  name=cy3>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy4_txtTitle onblur="allnum()" value="<%=mcList.get(3).toString() %>"
														style="WIDTH: 43px" name=cy4>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy5_txtTitle onblur="allnum()" value="<%=mcList.get(4).toString() %>"
														style="WIDTH: 43px" name=cy5>
												 
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy6_txtTitle onblur="allnum()" value="<%=mcList.get(5).toString() %>"
														style="WIDTH: 43px" name=cy6>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy7_txtTitle onblur="allnum()" value="<%=mcList.get(6).toString() %>"
														style="WIDTH: 43px" name=cy7>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy8_txtTitle onblur="allnum()" value="<%=mcList.get(7).toString() %>"
														style="WIDTH: 43px" name=cy8>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy9_txtTitle onblur="allnum()" value="<%=mcList.get(8).toString() %>"
														style="WIDTH: 43px" name=cy9>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy10_txtTitle onblur="allnum()" value="<%=mcList.get(9).toString() %>"
														style="WIDTH: 43px" name=cy10>
													 
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy11_txtTitle onblur="allnum()" value="<%=mcList.get(10).toString() %>"
														style="WIDTH: 43px" name=cy11>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy12_txtTitle onblur="allnum()" value="<%=mcList.get(11).toString() %>"
														style="WIDTH: 43px" name=cy12>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy13_txtTitle onblur="allnum()" value="<%=mcList.get(12).toString() %>"
														style="WIDTH: 43px" name=cy13>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy14_txtTitle onblur="allnum()" value="<%=mcList.get(13).toString() %>"
														style="WIDTH: 43px" name=cy14>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy15_txtTitle onblur="allnum()" value="<%=mcList.get(14).toString() %>"
														style="WIDTH: 43px" name=cy15>
													 
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy16_txtTitle onblur="allnum()" value="<%=mcList.get(15).toString() %>"
														style="WIDTH: 43px" name=cy16>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy17_txtTitle onblur="allnum()" value="<%=mcList.get(16).toString() %>"
														style="WIDTH: 43px" name=cy17>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy18_txtTitle onblur="allnum()" value="<%=mcList.get(17).toString() %>"
														style="WIDTH: 43px" name=cy18>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy19_txtTitle onblur="allnum()" value="<%=mcList.get(18).toString() %>"
														style="WIDTH: 43px" name=cy19>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy20_txtTitle onblur="allnum()" value="<%=mcList.get(19).toString() %>"
														style="WIDTH: 43px" name=cy20>
													 
												</TD>
											</TR>
											<TR>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy21_txtTitle onblur="allnum()" value="<%=mcList.get(20).toString() %>"
														style="WIDTH: 43px" name=cy21>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy22_txtTitle onblur="allnum()" value="<%=mcList.get(21).toString() %>"
														style="WIDTH: 43px" name=cy22>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy23_txtTitle onblur="allnum()" value="<%=mcList.get(22).toString() %>"
														style="WIDTH: 43px" name=cy23>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy24_txtTitle onblur="allnum()" value="<%=mcList.get(23).toString() %>"
														style="WIDTH: 43px" name=cy24>
													 
												</TD>
												<TD style="WIDTH: 100px; HEIGHT: 25px" align=left>
													<INPUT class=TextUnderCss id=cy25_txtTitle onblur="allnum()" value="<%=mcList.get(24).toString() %>"
														style="WIDTH: 43px" name=cy25>
													 
												</TD>
											</TR>
											<TR>
												<TD colSpan=4>
													 
													<INPUT class=TextUnderCss id=AQJCY_txtTitle
														style="WIDTH: 151px" name=txtAQJCY>
												 
												</TD>
												<TD style="WIDTH: 100px" align=right>
													����
													<INPUT class=TextUnderCss id=cyTotal maxLength=100 size=2 value=" <%=SetNull(resultSet.getString("cgrs")) %>"
														name=cyTotal>
													��
													<div style="display: none; color: red;" id="divmesg">
														 
													</div>
												</TD>
											</TR>
											<TR>
          <TD align="center">�ⵥλ����ʱ<br>������໤��</TD>
          <TD style="WIDTH: 100px">���� </TD>
          <TD style="WIDTH: 100px" align=left><INPUT class=TextUnderCss 
            id=txtWLLDRXM_txtTitle style="WIDTH: 50px" value="<%=SetNull(resultSet.getString("WLLDRXM")) %>"
             name=txtWLLDRXM><SPAN id=ldrmessage style="DISPLAY: none; COLOR: red">�����쵼�˲���Ϊ�գ�</SPAN> </TD>
          <TD style="WIDTH: 100px">��ȫ�ȼ�</TD>
          <TD style="WIDTH: 98px" align=left colSpan=3><INPUT class=TextUnderCss 
            id=txtWLLDRJB value="<%=SetNull(resultSet.getString("WLLDRXMDJ")) %>" name=txtWLLDRJB> <SPAN 
            id=RequiredFieldValidator2 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�����Ϊ�գ�</SPAN> <SPAN 
            id=RegularExpressionValidator1 
            style="DISPLAY: none; COLOR: red">��ȫ�ȼ�Ҫ��Ϊ���֣�</SPAN> <SPAN 
            id=CompareValidator1 
            style="DISPLAY: none; COLOR: red">�쵼�˵ȼ�Ҫ������Ϊ3��</SPAN> </TD></TR>
											<TR>
												<TD style="HEIGHT: 347px;WIDTH:800px;" vAlign=top colSpan=4>
													<DIV style="TEXT-ALIGN: left">
														<TABLE style="WIDTH: 100%" class=tbl>
															<TBODY>
																<TR>
																	<TD align=middle>
																		�����ȡ�İ�ȫ��ʩ
																		<BR>
																		<BR>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		1���Ͽ��Ķ�·���͸��뿪��:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 58px">
																		<TEXTAREA id=txtDKGH
																			style="WIDTH: 258px; HEIGHT: 85px" name=txtDKGH><%=SetNull(resultSet.getString("cq_dlqhkg")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 10px">
																		2����װ�ӵ��ߵ�λ��:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 30px">
																		<TEXTAREA id=txtJDXWZ
																			style="WIDTH: 258px; HEIGHT: 90px" name=txtJDXWZ><%=SetNull(resultSet.getString("cq_jdxwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		3��װ�����դ�����ұ�ʾ�Ƶ�λ��
																	</TD>
																</TR>
																<TR>
																	<TD >
																		<TEXTAREA id=txtZBH style="WIDTH: 258px; HEIGHT: 90px"
																			name=txtBSPWZ><%=SetNull(resultSet.getString("cq_bspwz")) %></TEXTAREA>
																	</TD>
																</TR>
																
															</TBODY>
														</TABLE>
													</DIV>
												</TD>
												<TD style="HEIGHT: 397px" vAlign=top colSpan=2>
													<DIV style="TEXT-ALIGN: left">
														<TABLE style="WIDTH: 100%" class=tbl>
															<TBODY>
																<TR>
																	<TD align=middle>
																		�Ѿ���ɵİ�ȫ��ʩ
																		<BR>
																		<BR>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		1���ѶϿ�:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 58px">
																		<TEXTAREA id=txtYDKGH
																			style="WIDTH: 198px; HEIGHT: 85px" name=txtYDKGH><%=SetNull(resultSet.getString("wc_dlqhkg")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		2���Ѱ�װ�ӵ��ߺ���:
																	</TD>
																</TR>
																<TR>
																	<TD style="HEIGHT: 30px">
																		<TEXTAREA id=txtYJDXWZ
																			style="WIDTH: 198px; HEIGHT: 90px" name=txtYJDXWZ><%=SetNull(resultSet.getString("wc_jdxwz")) %></TEXTAREA>
																	</TD>
																</TR>
																<TR>
																	<TD>
																		3����װ��:
																	</TD>
																</TR>
																<TR>
																	<TD style="WIDTH: 198px;">
																		<TEXTAREA id=txtYZBH
																			style="WIDTH: 198px; HEIGHT: 90px" name=txtYBSPWZ><%=SetNull(resultSet.getString("wc_bspwz")) %></TEXTAREA>
																	</TD>
																</TR>
																
															</TBODY>
														</TABLE>
													</DIV>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
								</TD>
								<TD style="WIDTH: 10px" vAlign=top></TD>
								<TD style="WIDTH: 475px; HEIGHT: 300px" vAlign=top>
									<TABLE class=tbl style="WIDTH: 475px; HEIGHT: 400px"
										cellSpacing=0 cellPadding=0 border=1>
										<TBODY>
										<TR>
																	<TD>
																		4��ע����ҵ�ص㸽���е���豸��:
																		<br>
																		<TEXTAREA lang=100 id=inputYZDDSB style="WIDTH: 260px;HEIGHT: 80px"
																			name=txtDDSB type="text" size="22"><%=SetNull(resultSet.getString("cq_ydsb")) %></TEXTAREA>
																
																	</TD>
																 
																	<TD>
																		4������ȷע����ҵ�ص㸽���е���豸��:
															 
																		<TEXTAREA lang=100 id=inputYZDDSB style="WIDTH: 260px;HEIGHT: 80px"
																			name=txtYDDSB type="text" size="22"><%=SetNull(resultSet.getString("wc_ydsb")) %></TEXTAREA>
																 
																</TR>
																 
											<TR>
												<TD vAlign=top align=left>
													5��������ȫ��ʩ:
													<BR>
													<TEXTAREA lang=200 id=inputAQCS
														style="WIDTH: 270px; HEIGHT: 80px" name=txtAQCS
														type="text" size="35"><%=SetNull(resultSet.getString("cq_qtaqcs")) %></TEXTAREA>
												</TD>
												<TD style="WIDTH: 289px; HEIGHT: 150px" vAlign=top
													>
													5��������������ȫ��ʩ:
													<BR>
													<TEXTAREA lang=200 id=intputYZAQCS
														style="WIDTH: 270px; HEIGHT: 80px" name=txtYAQCS
														type="text" size="35"><%=SetNull(resultSet.getString("wc_qtaqcs")) %></TEXTAREA>
													<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ֵ��Ա <INPUT class=TextUnderCss2 id=txtFBR_txtAQCSZBY
															value="<%=SetNull(resultSet.getString("AQCSZBY")) %>" 			style="WIDTH: 74px" name=txtAQCSZBY>��ǩ�֣�<br>
																		&nbsp;�����쵼�ˣ������ˣ� <INPUT class=TextUnderCss2 id=txtFBR_txtAQCSZBY
																	value="<%=SetNull(resultSet.getString("AQCSLDR")) %>" 		style="WIDTH: 74px" name=txtAQCSZBY>��ǩ�֣�
																		</TD>
											</TR>
											<TR>
												<TD colSpan=2>
													<TABLE style="WIDTH: 100%; HEIGHT: 320px" class=tbl>
														<TBODY>
															<TR>
																<TD align=left>
																	��Ʊ����
																	<INPUT class=TextUnderCss2 id=txtFPRQ
																		onclick="showcalendar(this,true)" value="<%=convertDate(resultSet.getDate("fpsj"))+" "+convertTime(resultSet.getTime("fpsj"))%>"
																		name=txtFPRQ>
																	&nbsp;&nbsp;
																</TD>
																<TD style="WIDTH: 40%" align=right>
																	�� Ʊ ��
																
																	<INPUT class=TextUnderCss2 id=txtFBR_txtTitle value="<%=SetNull(resultSet.getString("fpr")) %>"
																		style="WIDTH: 74px" name=txtFBR>��ǩ�֣�
																	<SPAN id=txtFBR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red">��Ʊ�˲���Ϊ�գ�</SPAN>
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	���ݹ������Ա�ĵ�
																	<INPUT class=TextUnderCss2 id=txtDDMLH value="<%=SetNull(resultSet.getString("gjmlh")) %>"
																		style="WIDTH: 60px" name=txtDDMLH>
																	������׼����
																	<INPUT class=TextUnderCss2 id=txtGZS value="<%=convertDate(resultSet.getDate("zygzsj"))+" "+convertTime(resultSet.getTime("zygzsj"))%>"
																		onclick="showcalendar(this,true)" name=txtZYKSSJ>
																	��ʼ������
																</TD>
															</TR>
															<TR>
																<TD style="WIDTH: 60%; HEIGHT: 16px" align=left>
																	Ҫ�����ʱ��
																	<INPUT class=TextUnderCss2 id=txtGZZ value="<%=convertDate(resultSet.getDate("qygzsj"))+" "+convertTime(resultSet.getTime("qygzsj"))%>"
																		onclick="showcalendar(this,true)" name=txtZYJSSJ>
																	 
																</TD>
																<TD style="WIDTH: 40%; HEIGHT: 16px" align=right>
																	ֵ&nbsp; ��&nbsp; Ա
																	<INPUT class=TextUnderCss2 id=txtZBY_txtTitle value="<%=SetNull(resultSet.getString("zyzbyqz")) %>" 
																		style="WIDTH: 74px" name=txtZYZBYQZ>��ǩ�֣�
																	<SPAN id=txtZBY_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 23px" align=left colSpan=2>
																	����鰲ȫ��ʩ������,����
																	<INPUT class=TextUnderCss2 id=txtGZZXSJ value="<%=convertDate(resultSet.getDate("ksgzsj"))+" "+convertTime(resultSet.getTime("ksgzsj"))%>"
																		onclick="showcalendar(this,true)" name=txtKSGZSJ>
																	��ʼ������
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2>
																	�����쵼��
																	<INPUT class=TextUnderCss2 id=txtGZLDR_txtTitle value="<%=SetNull(resultSet.getString("ksgzldrqz")) %>"
																		style="WIDTH: 74px"
																		 name=txtKSGZLDRQZ>(ǩ��)<br>
																		 ������໤��
																	<INPUT class=TextUnderCss2 id=txtGZLDR_txtTitle
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BDJHR")) %>" 
																		 name=txtBDSJHR1>��ǩ�֣�
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 5px" align=left colSpan=2>
																	�����ҵ���Ա��¼
																	<INPUT class=TextUnderCss2 id=txtBGJL value="<%=SetNull(resultSet.getString("zyrybgjl")) %>"
																		style="WIDTH: 320px" maxLength=50 name=txtBGJL>
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2 rowSpan=2>
																	��&nbsp; Ʊ&nbsp; ��
																	
																	<INPUT class=TextUnderCss2 id=txtBGFPR_txtTitle value="<%=SetNull(resultSet.getString("rybgfqrqz")) %>"
																		style="WIDTH: 74px" name=txtBGFPRQZ>(ǩ��)<br> ������໤��
																	<INPUT class=TextUnderCss2 
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BDJHR1")) %>" 
																		 name=txtBDSJHR2>��ǩ�֣� 
																	<SPAN id=txtBGFPR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			class=grayinput id=txtBGFPR_DDLTitle
																			onblur=hiddeDl(this) style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtBGFPR$DDLTitle>
																			<OPTION value=0 selected>
																				��ѡ����Ա
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtBGFPR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																	<BR>
																	
																	�����쵼��
																	<INPUT class=TextUnderCss2 id=txtBGLDR_txtTitle value="<%=SetNull(resultSet.getString("rybgldrqz")) %>"
																		style="WIDTH: 74px" name=txtBGLDRQZ>(ǩ��)
																	<SPAN id=txtBGLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtBGLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtBGLDR$DDLTitle>
																			<OPTION value=0 selected>
																				��ѡ����Ա
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtBGLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR></TR>
															<TR>
																<TD style="HEIGHT: 23px" align=left colSpan=2>
																	���������Ա
																	<INPUT class=TextUnderCss2 id=txtYCTY_txtTitle value="<%=SetNull(resultSet.getString("ddyxm")) %>"
																		style="WIDTH: 50px" onclick=showDl(this)
																		name=txtGDDDY>
																	<SPAN id=txtYCTY_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtYCTY_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 50px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtYCTY$DDLTitle>
																			<OPTION value=0 selected>
																				��ѡ����Ա
																			</OPTION>
																		</SELECT> </SPAN>ͬ��,����Ʊ��Ч���ӳ���
																	<INPUT class=TextUnderCss2 id=inputYCSJZ  value="<%=convertDate(resultSet.getDate("ycdsj"))+" "+convertTime(resultSet.getTime("ycdsj"))%>"
																		onclick="showcalendar(this,true)" name=txtYCSJ>
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 25px" align=right colSpan=2 rowSpan=2>
																	ֵ&nbsp; ��&nbsp; Ա
																	<INPUT class=TextUnderCss2 id=txtYCZBY_txtTitle value="<%=SetNull(resultSet.getString("yczbyqz")) %>"
																		style="WIDTH: 74px" name=txtYCZBYQZ>(ǩ��)
																	 
																 
																	<BR>
																	�����쵼��
																	<INPUT class=TextUnderCss2 id=txtYCLDR_txtTitle value="<%=SetNull(resultSet.getString("ycgzldrqz")) %>"
																		style="WIDTH: 74px" name=txtYCLDRQZ>(ǩ��)<br> 
																		������໤��
																	<INPUT class=TextUnderCss2 
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BDJHR2")) %>" 
																		 name=txtBDSJHR3>��ǩ�֣� 
																	<SPAN id=txtYCLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtYCLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtYCLDR$DDLTitle>
																			<OPTION value=0 selected>
																				��ѡ����Ա
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtYCLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR></TR>
															<TR>
																<TD style="HEIGHT: 16px" align=left colSpan=2>
																	��������
																	<INPUT class=TextUnderCss2 id=txtJSSJ value="<%=convertDate(resultSet.getDate("wcsj"))+" "+convertTime(resultSet.getTime("wcsj"))%>"
																		onclick="showcalendar(this,true)" name=txtJSSJ>
																	<SPAN id=CompareValidator29
																		style="VISIBILITY: hidden; COLOR: red">ʱ������</SPAN>
																	<SPAN id=CompareValidator30
																		style="VISIBILITY: hidden; COLOR: red">ʱ������</SPAN>
																	ȫ��������
																</TD>
															</TR>
															<TR>
																<TD align=right colSpan=2>
																	�����쵼��
																	<INPUT class=TextUnderCss2 id=txtJSLDR_txtTitle value="<%=SetNull(resultSet.getString("wcgzldrqz")) %>"
																		style="WIDTH: 74px" name=txtJSLDRQZ>(ǩ��)<br>
																		������໤��
																	<INPUT class=TextUnderCss2 
																		style="WIDTH: 74px" value="<%=SetNull(resultSet.getString("BDJHR3")) %>" 
																		 name=txtBDSJHR4>��ǩ�֣� 
																	<SPAN id=txtJSLDR_dlshow
																		style="DISPLAY: none; Z-INDEX: 1; VERTICAL-ALIGN: bottom; CURSOR: hand; POSITION: relative"><SELECT
																			id=txtJSLDR_DDLTitle onblur=hiddeDl(this)
																			style="WIDTH: 74px"
																			onchange=addTxtTanto(this,this.options[this.selectedIndex].innerText,false)
																			name=txtJSLDR$DDLTitle>
																			<OPTION value=0 selected>
																				��ѡ����Ա
																			</OPTION>
																		</SELECT> </SPAN><SPAN id=txtJSLDR_RequiredFieldValidator1
																		style="DISPLAY: none; COLOR: red"></SPAN>
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	�ӵ��߹�
																	
																	<INPUT class=TextUnderCss2 id=JG style="WIDTH: 20px" value="<%=SetNull(resultSet.getString("jdxgs")) %>"
																		name=txtJDXG>
																	������ʱ����դ����ʾ���Ѳ��,���ָ��˳������դ�ͱ�ʾ�ơ�<br>
																</TD>
															</TR>
															<TR>
																<TD align=left colSpan=2>
																	����Ʊ��<INPUT class=TextUnderCss2 id=txtCDXSJ value="<%=convertDate(resultSet.getDate("jssj"))+" "+convertTime(resultSet.getTime("jssj"))%>"
																		onclick="showcalendar(this,true)" name=txtGZPJSSJ>
																	  ������
																</TD>
															</TR>
															<TR>
																<TD style="HEIGHT: 25px" align=right colSpan=2>
																	ֵ&nbsp; �� &nbsp;Ա
																	<INPUT class=TextUnderCss2 id=txtCDXZBY_txtTitle value="<%=SetNull(resultSet.getString("zbrqz")) %>"
																		style="WIDTH: 74px" name=txtZBYQZ_E>
																</TD>
															</TR>
														</TBODY>
													</TABLE>
												</TD>
											</TR>
											<TR></TR>
										</TBODY>
									</TABLE>
								</TD>
							</TR>
							<tr>
								<td align="right">

										<input type="hidden" value="<%=id%>" name="gzpid" />

								<INPUT class=blueButtonCss style="WIDTH: 93px" type=button
										onclick="registerSubmit()" value="�޸�" />
									<INPUT class=blueButtonCss id=btnFB onclick=history.back();
										style="WIDTH: 93px" type=button value="����" name=btnFB>
								</td>
							<tr>
						</TBODY>
					</TABLE>
				</DIV>	<%}
	      }catch(Exception ex) {
} %>															
			</div>
		</form>
	</BODY>
</html>
