<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String cmdid = request.getParameter("cmdid");
String xtsj=request.getParameter("xtsj");//系统命令时间
String mlbh = request.getParameter("mlbh");//命令编号
String mlnr = request.getParameter("mlnr");
String czmd = request.getParameter("czmd");
String wcsj = request.getParameter("wcsj");//完成时间
String  hbsj= request.getParameter("hbsj");//汇报时间
String xtddy=request.getParameter("xtddy");//系统调度员
String zbddy = request.getParameter("zbddy");


try {
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update z_yxgl_cmd_xtddml set xtsj=to_date('"+xtsj+"','yyyy-mm-dd hh24:mi'),mlbh='"+mlbh+"',mlnr='"+mlnr+"',czmd='"+czmd+"',wcsj=to_date('"+wcsj+"','yyyy-mm-dd hh24:mi'),hbsj=to_date('"+hbsj+"','yyyy-mm-dd hh24:mi'),xtddy='"+xtddy+"',zbddy='"+zbddy+"' where cmdid='"+cmdid+"'";
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'修改成功！'}");
     
} 

catch(Exception ex) {
	out.print("{success:false,msg:'修改失败！'}");
}

%>