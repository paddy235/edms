<%@ page 
language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>

<html>
<head>
<script src="../Menu_XpStyle/TaskMenu.js"></script>

<%
///��õ�ǰ�û�����Ϣ
String dwjb="";
String dwid="";
String name="";
String ddtdm="";
String ddtmc="";
String dwmc="";
if(session.getAttribute("DWJB")==null||session.getAttribute("DWDM")==null||session.getAttribute("YHMC")==null||session.getAttribute("DDTDM")==null||session.getAttribute("DDTMC")==null)
{
String myURL="../errorpage.jsp";
response.sendRedirect(myURL);
}
else
{
 dwjb=session.getAttribute("DWJB").toString();
 dwid=session.getAttribute("DWDM").toString();
 dwmc=session.getAttribute("DWMC").toString();
 name=session.getAttribute("YHMC").toString();
 ddtdm=session.getAttribute("DDTDM").toString();//���̨����
 ddtmc=session.getAttribute("DDTMC").toString();//���̨����
}

session.setAttribute("userName",name);
session.setAttribute("userDwid",dwid);
session.setAttribute("userdj",dwjb);
session.setAttribute("ddtdm",dwid);
session.setAttribute("ddtmc",ddtmc);

String jb=dwjb;
String isdd="";
String jglbdm="";
if(jb.equals("3"))
{
    DbTrade dbTrade_ddmc=new DbTrade();
    String sql_ddtmc="select * from J_GYJC_DDTZD where ddtdm='"+dwid+"'";
    java.sql.ResultSet relult_ddtmc=dbTrade_ddmc.executeQuery(sql_ddtmc);
    while(relult_ddtmc.next())
    {
       ddtmc=relult_ddtmc.getString("ddtmc");
    }
    session.setAttribute("ddtmc",ddtmc);
    if(dwid.length()==3)
    {
         isdd="1";
    }
    else
    {
       isdd="0";
    }
    dbTrade_ddmc.close();
}
else if(jb.equals("6"))
{
    DbTrade dbTrade_ddmc=new DbTrade();
    String sql_ddtmc="select * from j_gyjc_gqzd where gqdm='"+dwid+"'";
    java.sql.ResultSet relult_ddtmc=dbTrade_ddmc.executeQuery(sql_ddtmc);
    while(relult_ddtmc.next())
    {
       jglbdm=relult_ddtmc.getString("jglbdm");
    }
    dbTrade_ddmc.close();
}
System.out.println("menu_yxgl userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc);

 %>
</head>
<body>
  <input type="hidden" name="qx" value="<%=jb%>">
  <input type="hidden" name="jglbdm" value="<%=jglbdm%>">
  <input type="hidden" name="isdd" value="<%=isdd%>">
    <input type="hidden" name="dwjb" value="<%=dwjb %>">
       <input type="hidden" name="dwid" value="<%=dwid %>">
  <script>
var taskMenu1;
var taskMenu2;
var taskMenu3;
var taskMenu4;

var item1;
var item2;
var item3;
var item4;
var item5;
var item6;
var item7;
var item8;
var item9;
var item10;
var item11;
var item12;
var item13;
var item14;
var item15;
var item16;
var item17;
var item47;
TaskMenu.setStyle("../Menu_XpStyle/Classic/classicStyle.css"); 

window.onload = function()
{
	TaskMenu.setHeadMenuSpecial(false);
	TaskMenu.setScrollbarEnabled(false);
	var qx=document.getElementById("qx").value;
	var isdd=document.getElementById("isdd").value;
	var jglbdm=document.getElementById("jglbdm").value;
		var dwjb=document.getElementById("dwjb").value;
		var dwid=document.getElementById("dwid").value;
	
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////parent.contents.location.href
	item6 = new TaskMenuItem("����ͣ����ҵ�������","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='jcwzycommand_sp/commandsp.jsp'");
    item7 = new TaskMenuItem("����ͣ����ҵ����ִ��","../Menu_XpStyle/Image/write_plan.gif","parent.contents.location.href='jcwzycommand_zx/commandsp.jsp'");
    item8 = new TaskMenuItem("����ͣ����ҵ�����ѯ","../Menu_XpStyle/Image/write_plan.gif","parent.contents.location.href='jcwzycommand_query/command_query.jsp'");
   item08 = new TaskMenuItem("����ͣ����ҵ�����¼","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='jcwzycommand_sp/command.jsp'");
	
   
   
    item9 = new TaskMenuItem("ͣ����ҵ�������","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdszycommand_sp/commandsp.jsp'");
    item10 = new TaskMenuItem("ͣ����ҵ����ִ��","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdszycommand_zx/commandsp.jsp'");
    item11 = new TaskMenuItem("ͣ����ҵ�����ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdszycommand_query/command_query.jsp'");
    item011 = new TaskMenuItem("ͣ����ҵ�����¼","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdszycommand_sp/command.jsp'");

  	item52 = new TaskMenuItem("�Ӵ���������բ�����¼","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='jcwdzcommand_sp/commandsp.jsp'");
    item53 = new TaskMenuItem("������բ����ִ��","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='jcwdzcommand_zx/commandsp.jsp'");
	item54 = new TaskMenuItem("�Ӵ���������բ�����ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='jcwdzcommand_query/command_query.jsp'");

	item55 = new TaskMenuItem("��բ�������","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdsdzcommand_sp/commandsp.jsp'");
    item56 = new TaskMenuItem("��բ����ִ��","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdsdzcommand_zx/commandsp.jsp'");
	item57 = new TaskMenuItem("��բ�����ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdsdzcommand_query/command_query.jsp'");
	item057 = new TaskMenuItem("��բ�����¼","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdsdzcommand_sp/command.jsp'");
	
	item58 = new TaskMenuItem("ϵͳ�����������","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='xtddml/xtddml.jsp'");
	
	item59 = new TaskMenuItem("�����Զ����բ�������","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdsyddzcommand_sp/commandsp.jsp'");
    item60 = new TaskMenuItem("�����Զ����բ�������","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdsyddzcommand_zx/commandsp.jsp'");
	item61 = new TaskMenuItem("�����Զ����բ�����ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='bdsyddzcommand_query/command_query.jsp'");
	item061 = new TaskMenuItem("�����Զ����բ�����¼","../Menu_XpStyle/Image/order.gif","parent.contents.location.href='bdsyddzcommand_sp/command.jsp'");
	 
	////6:��������5�����䣬4���Σ�3�������2���֣�1����
  if(dwjb=="3")
	   { 
		
		

		  
		if(dwid=="021")
		{
			taskMenu4 = new TaskMenu("��բ�������");
		taskMenu4.add(item55);
		taskMenu4.add(item56);
		taskMenu4.add(item57);
		
		taskMenu4.init(); 
		
		
				taskMenu6 = new TaskMenu("�����Զ����բ�������");
     	taskMenu6.add(item59);
		 taskMenu6.add(item60);
		 taskMenu6.add(item61);
//		 taskMenu6.init();
			taskMenu3 = new TaskMenu("ͣ����ҵ�������");
     	taskMenu3.add(item9);
		taskMenu3.add(item10);
		taskMenu3.add(item11);
		taskMenu3.init();
	taskMenu1 = new TaskMenu("������բ�������");
		taskMenu1.add(item52);
		taskMenu1.add(item53);
		taskMenu1.add(item54);
//		taskMenu1.init();
		taskMenu2 = new TaskMenu("�Ӵ���������բ�������");
		taskMenu2.add(item6);
		taskMenu2.add(item7);
		taskMenu2.add(item8);
		taskMenu2.init();

	
		
	

		}
		else{
		
		taskMenu4 = new TaskMenu("ǣ���������բ�������");
		taskMenu4.add(item55);
		//taskMenu4.add(item56);
		taskMenu4.add(item57);
		taskMenu4.add(item057);
		taskMenu4.init();
		
		
		
			
		 taskMenu6 = new TaskMenu("�����Զ����բ�������");
		  taskMenu6.add(item59);
		 //taskMenu6.add(item60);
		 taskMenu6.add(item61);
		 taskMenu6.add(item061);
//		 taskMenu6.init();
		taskMenu3 = new TaskMenu("ͣ����ҵ�������");
     	taskMenu3.add(item9);
		//taskMenu3.add(item10);
		taskMenu3.add(item11);
		 taskMenu3.add(item011);
		taskMenu3.init();

	taskMenu1 = new TaskMenu("�Ӵ���������բ�������");
		taskMenu1.add(item52);
		//taskMenu1.add(item53);
		taskMenu1.add(item54);
		taskMenu1.init();
		taskMenu2 = new TaskMenu("������ҵ�������");
		taskMenu2.add(item6);
		//taskMenu2.add(item7);
		taskMenu2.add(item8);
		taskMenu2.add(item08);
//		taskMenu2.init();


	    
		}
		
		
		
		 taskMenu5 = new TaskMenu("ϵͳ�����������");
     	taskMenu5.add(item58);
 
		taskMenu5.init();
	}
	else if(dwjb=="2")
	{
	
	
	}
	else
	{
	      if(jglbdm=="1")
		  {   
		taskMenu2 = new TaskMenu("������ҵ�������");
		//taskMenu2.add(item6);
		taskMenu2.add(item7);
		taskMenu2.add(item8);
		taskMenu2.init(); 
			
		taskMenu4 = new TaskMenu("������բ�������");
		//taskMenu1.add(item52);
		//taskMenu4.add(item53);
		taskMenu4.add(item54);
		taskMenu4.init();
		  }else
		  {
			taskMenu1 = new TaskMenu("�������բ�������");
		//taskMenu1.add(item55);
		taskMenu1.add(item56);
		taskMenu1.add(item57);
		taskMenu1.init();
			   taskMenu3 = new TaskMenu("�������ҵ�������");
     	//taskMenu3.add(item9);
		taskMenu3.add(item10);
		taskMenu3.add(item11);
		taskMenu3.init();
		
	
		   }
	}
	
}
</script>
</body>



</html>