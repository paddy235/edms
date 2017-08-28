<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>


<%


String jhid = request.getParameter("jhid");
System.out.println("jhid:"+jhid);
String dwmc=request.getParameter("dwmc");

String tdqdmc=request.getParameter("tdqdmc");

System.out.println("dwmc:"+dwmc);


//String education = request.getParameter("action");
DbTrade dbTrade=new DbTrade();
try {
    
  String sql_save="insert into z_yxgl_zyjh_Tdqd values(Z_YXGL_ZYJH_tdqj.Nextval,'"+jhid+"','"+dwmc+"','"+dwmc+"','"+tdqdmc+"','"+tdqdmc+"')";
  dbTrade.executeUpdate(sql_save);
  //添加了停电区段，就要在命令里插入停电的命令
  String sql_ml="insert into z_yxgl_cmd_bdsdz values (z_yxgl_cmd_bdsdzSquence.Nextval,'1010111010','dwmc','"+jhid+"','20090916','0101010101','"+dwmc+"',' ',' ','"+tdqdmc+"','','','','','','','','1','停电命令','','远动操作')";
  String sql_ml1="insert into z_yxgl_cmd_bdsdz values (z_yxgl_cmd_bdsdzSquence.Nextval,'1010111010','dwmc','"+jhid+"','20090916','0101010101','"+dwmc+"',' ',' ','"+tdqdmc+"','','','','','','','','1','送电命令','','远动操作')";
 
 // System.out.println("添加了停电区段，就要在命令里插入停电的命令:"+sql_ml);
  //System.out.println("添加了停电区段，就要在命令里插入停电的命令:"+sql_ml1);

  //dbTrade.executeUpdate(sql_ml1);
  //dbTrade.executeUpdate(sql_ml);
  dbTrade.close();
   out.print("{success:true,msg:'数据保存成功！'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
	System.out.println(ex.toString());
	 dbTrade.close();
	 out.print("{success:true,msg:'数据保存失败！'}");
}

%>
