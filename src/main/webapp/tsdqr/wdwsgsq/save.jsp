<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>



<%

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
	
	String sql_Add="insert into z_tsdqr_sgsq (sgid,sqsj,sgkssj,sgjssj,sgsj,sgdd,sgnr,tdfw,fstkxl,gdc,bz,sqr) values(Z_QXFZ_SGSBSQUENCE.Nextval,to_date('"+sqsj+"','yyyy-mm-dd hh24:mi'),to_date('"+sgkssj+"','yyyy-mm-dd hh24:mi'),to_date('"+sgjssj+"','yyyy-mm-dd hh24:mi'),'"+sgsj+"','"+sgdd+"','"+sgnr+"','"+tdfw+"','"+fstkxl+"','"+gdc+"','"+bz+"','"+sqr+"')";
	//out.println(sql_Query);
	System.out.println(sql_Add);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Add);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'数据保存成功！'}");
     
} 

catch(Exception ex) {
    out.print("{success:false,msg:'数据保存失败！'}");
}

%>
