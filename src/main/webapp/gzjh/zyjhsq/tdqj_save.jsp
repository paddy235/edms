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
  //�����ͣ�����Σ���Ҫ�����������ͣ�������
  String sql_ml="insert into z_yxgl_cmd_bdsdz values (z_yxgl_cmd_bdsdzSquence.Nextval,'1010111010','dwmc','"+jhid+"','20090916','0101010101','"+dwmc+"',' ',' ','"+tdqdmc+"','','','','','','','','1','ͣ������','','Զ������')";
  String sql_ml1="insert into z_yxgl_cmd_bdsdz values (z_yxgl_cmd_bdsdzSquence.Nextval,'1010111010','dwmc','"+jhid+"','20090916','0101010101','"+dwmc+"',' ',' ','"+tdqdmc+"','','','','','','','','1','�͵�����','','Զ������')";
 
 // System.out.println("�����ͣ�����Σ���Ҫ�����������ͣ�������:"+sql_ml);
  //System.out.println("�����ͣ�����Σ���Ҫ�����������ͣ�������:"+sql_ml1);

  //dbTrade.executeUpdate(sql_ml1);
  //dbTrade.executeUpdate(sql_ml);
  dbTrade.close();
   out.print("{success:true,msg:'���ݱ���ɹ���'}");
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
	System.out.println(ex.toString());
	 dbTrade.close();
	 out.print("{success:true,msg:'���ݱ���ʧ�ܣ�'}");
}

%>
