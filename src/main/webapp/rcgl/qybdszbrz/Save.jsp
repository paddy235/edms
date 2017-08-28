<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
 String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null)
{
	response.sendRedirect(myURL);
}
String RZSJ=request.getParameter("RZSJ");
String BDS = request.getParameter("BDS");
String ZBR = request.getParameter("ZBR");
String FZR = request.getParameter("FZR");
String CQRS = request.getParameter("CQRS");
String  TQ= request.getParameter("TQ");
String YXKG=request.getParameter("YXKG");

System.out.println("###########时间:"+RZSJ);


DbTrade dbTrade=new DbTrade();
try {
   String sql_insert="insert into Z_YXGL_BDSZBRZ(rzid,rzsj,bds,zbr,fzr,cqrs,tq,yxkg) values(Z_YXGL_BDSZBRZSQ.Nextval,to_date('"+RZSJ+"','yyyy-mm-dd'),'"+BDS+"','"+ZBR+"','"+FZR+"','"+CQRS+"','"+TQ+"','"+YXKG+"')";
   System.out.println("添加sql语句:"+sql_insert);
    dbTrade.executeUpdate(sql_insert);
   dbTrade.close();
   out.print("{success:true,msg:'数据添加成功！'}");
} 

catch(Exception ex) {
}

%>

