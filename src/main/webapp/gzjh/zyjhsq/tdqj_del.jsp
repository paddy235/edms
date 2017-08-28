<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>


<%


String tdqjid = request.getParameter("tdqjid");
System.out.println("tdqjid:"+tdqjid);




//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
try {
    
  String sql_del="delete z_yxgl_zyjh_Tdqd where tdqjid='"+tdqjid+"'";
  dbTrade.executeUpdate(sql_del);
   out.print("{success:true,msg:'数据删除成功！'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
