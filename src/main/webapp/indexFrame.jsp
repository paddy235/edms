<%@ page contentType="text/html;charset=gb2312"%>
<html>
<head>
<title>�й�����˷��·�ֹ�˾������ȹ�����Ϣϵͳ</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
</head>

<script language="JavaScript">
self.moveTo(0,0)
self.resizeTo(screen.availWidth,screen.availHeight)

</SCRIPT>
<% 
String user=(String)session.getAttribute("YHDM");
String myURL="login.jsp";
if(user==null||user.equalsIgnoreCase("")){
	System.out.println("���ӹ��ڣ������µ�¼");
	response.sendRedirect(myURL);
}
System.out.println("DWMC"+(String)session.getAttribute("DWMC"));
System.out.println("DWJB_MC"+(String)session.getAttribute("DWJB_MC"));
System.out.println("YHMC"+(String)session.getAttribute("YHMC"));
System.out.println("GWMC"+(String)session.getAttribute("GWMC"));
System.out.println("DDTMC"+(String)session.getAttribute("DDTMC"));
System.out.println("DDTDM"+(String)session.getAttribute("DDTDM"));
java.util.Vector ROLE = (java.util.Vector)session.getAttribute("ROLE");


for(int i=0;ROLE!=null&&i<ROLE.size();i++){
	System.out.println("ROLE "+i+" "+ROLE.get(i));
} 
java.util.Vector SXFW = (java.util.Vector)session.getAttribute("SXFW");
for(int i=0;SXFW!=null&&i<SXFW.size();i++){
	System.out.println("SXFW "+i+" "+SXFW.get(i));
}  
String dwdm=(String)session.getAttribute("DWDM");
String xdurl="indexMain.jsp?menu=xdhq/Menu_xdhq.jsp&deft=xdhq/image.jsp";
if(dwdm!=null&&dwdm.indexOf("023")==0){
	response.sendRedirect(xdurl);
}
String sgdurl="indexMain.jsp?menu=sgdhq/Menu_sgdhq.jsp&deft=sgdhq/image.jsp";
if(dwdm!=null&&dwdm.indexOf("022")==0){
	response.sendRedirect(sgdurl);
}
%>
<frameset id=frmall framespacing="0" border="0" frameborder="0" rows="90,*,22,0">
  <frame ID="thetop" name="thetop" scrolling="no" noresize src="indexTop.jsp">
  <frame ID="middle" name="middle" scrolling="no" noresize  src="indexMain.jsp?menu=gzjh/Menu_gzjh.jsp&deft=gzjh/image.jsp">
  <frame ID="buttom" name="buttom" scrolling="no" noresize src="indexBottom.jsp">
  <frame ID="buttom" name="buttom" scrolling="no" noresize src="tishi.jsp">
</frameset> 
<noframes> 
<body bgcolor="#FFFFFF" text="#000000">
�����������֧�ֿ�ܣ�������ȷ���ʱ�ϵͳ
</body>
</noframes> 
</html>