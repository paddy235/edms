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
String jglbdm="dd";
if(dwid.equals("023")){
	jglbdm="xd";
}
//System.out.println("menu_yxgl userName:"+name+"  userDwid: "+dwid+"  userdj:"+dwjb+"ddtdm:"+ddtdm+"ddtmc:"+ddtmc);

//session.setAttribute("userName","���ĸ�");
//session.setAttribute("userDwid","17010201");//�����
//session.setAttribute("userDwid","17010102");//������
//session.setAttribute("userDwid","00301");//���̨
//session.setAttribute("userdj","3");
//session.setAttribute("ddtdm","00301");
//session.setAttribute("ddtmc","��רһ̨");

//String jb="3";

 
 %>
</head>
<body>
  <input type="hidden" name="qx" value="<%=jb%>">
  <input type="hidden" name="jglbdm" value="<%=jglbdm%>">
  <input type="hidden" name="isdd" value="<%=isdd%>">
  <script>
var taskMenu1;
var taskMenu2;
var taskMenu3;
var taskMenu4;
var taskMenu5;
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
	 
	//TaskMenu.setAutoBehavior(false);
	////////////////////////////////////////////////parent.contents.location.href
	item1 = new TaskMenuItem("��ҵ�ƻ���д","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item7 = new TaskMenuItem("��ҵ�ƻ�����","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item8 = new TaskMenuItem("��ҵ�ƻ��ϱ�","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhsq/zyjhsq.jsp'");
	item2 = new TaskMenuItem("��ҵ�ƻ�����","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhsp/zyjhsp.jsp'");
	item3 = new TaskMenuItem("��ҵ�ƻ���ѯ","../Menu_XpStyle/Image/search.gif","parent.contents.location.href='taskplan_query/taskplan_query.jsp'");
	item4 = new TaskMenuItem("��ҵ�ƻ��鵵","../Menu_XpStyle/Image/apply_plan.gif","parent.contents.location.href='zyjhgd/zyjhgd.jsp'");
	item5 = new TaskMenuItem("������������","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='zyjhxdsp/zyjhxdsp.jsp'");      
	item6 = new TaskMenuItem("ʩ���ƻ���ѯ","../Menu_XpStyle/Image/review.gif","parent.contents.location.href='sgjh_query/taskplan_query.jsp'");      
	
	////6:��������5�����䣬4���Σ�3�������2���֣�1����
	taskMenu1 = new TaskMenu("��ҵ�ƻ��");
	taskMenu2 = new TaskMenu("��ҵ�ƻ�����");
	taskMenu3 = new TaskMenu("��ҵ�ƻ���ѯ");
	taskMenu4 = new TaskMenu("������������");
	taskMenu5 = new TaskMenu("��ҵ�ƻ���д");
	taskMenu6 = new TaskMenu("ʩ���ƻ���ѯ");
	   //��ҵ�ƻ�
	   taskMenu1.add(item1);
	   taskMenu1.add(item8);
       
	   taskMenu5.add(item1);
	   taskMenu5.add(item7);
		taskMenu2.add(item1);
	   taskMenu2.add(item2);
	   taskMenu2.add(item4);

	   taskMenu4.add(item5);

	   taskMenu3.add(item3);
	   taskMenu6.add(item6);
	if(jglbdm=='xd'){
		taskMenu4.init();
	}else{
		if(qx=='6'||qx=='5'){			
			taskMenu5.init();
			taskMenu6.init();
		}else if(qx=='4'){
			taskMenu1.init();
			taskMenu6.init();
		}else{
			taskMenu2.init();
			taskMenu6.init();
		}
		taskMenu3.init();
		taskMenu6.init();
	}
}
</script>
</body>



</html>