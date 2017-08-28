<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String sgid = request.getParameter("sgid");
String sqsj = request.getParameter("sqsj");
String sgkssj = request.getParameter("sgkssj");
String sgjssj = request.getParameter("sgjssj");
String sgsj = request.getParameter("sgsj");
String sgdd = request.getParameter("sgdd");
String sgnr = request.getParameter("sgnr");
String tdfw = request.getParameter("tdfw");
String fstkxl = request.getParameter("fstkxl");
String gdc = request.getParameter("gdc");
String bz = request.getParameter("bz");
String sqr = request.getParameter("sqr");
System.out.println("Save.jsp:"+sqsj+sgkssj+sgjssj+sgsj+sqr);




try {
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update z_tsdqr_sgsq set sqsj=to_date('"+sqsj+"','yyyy-mm-dd hh24:mi'),sgkssj=to_date('"+sgkssj+"','yyyy-mm-dd hh24:mi'),sgjssj=to_date('"+sgjssj+"','yyyy-mm-dd hh24:mi'),sgsj='"+sgsj+"',sgdd='"+sgdd+"',sgnr='"+sgnr+"',tdfw='"+tdfw+"',fstkxl='"+fstkxl+"',gdc='"+gdc+"',bz='"+bz+"',sqr='"+sqr+"' where sgid='"+sgid+"'";
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
