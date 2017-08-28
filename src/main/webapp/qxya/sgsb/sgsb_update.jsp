<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String gzid = request.getParameter("gzid");
String gzfssj=request.getParameter("gzfssj");
String gzdd = request.getParameter("gzdd");//故障地点
String gzlb = request.getParameter("gzlb");
String tdqd = request.getParameter("tdqd");
String yxfw = request.getParameter("yxfw");
String  zrbz= request.getParameter("zrbz");//责任班组
String gstzsj=request.getParameter("gstzsj");//公司通知时间
String ysdtzsj = request.getParameter("ysdtzsj");
String bztzsj= request.getParameter("bztzsj");
String yxlc = request.getParameter("yxlc");
String zzcdbz = request.getParameter("zzcdbz");
String sj1 = request.getParameter("sj1");  
String rs1 = request.getParameter("rs1");
String zzddbz = request.getParameter("zzddbz");
String sj2 = request.getParameter("sj2");
String rs2 = request.getParameter("rs2");
String qxldr = request.getParameter("qxldr");
String zw = request.getParameter("zw");
String zrs = request.getParameter("zrs");
String tdkssj = request.getParameter("tdkssj");
String tdjssj = request.getParameter("tdjssj");
String ztdsj = request.getParameter("ztdsj");
String qxkssj = request.getParameter("qxkssj");
String qxjssj = request.getParameter("qxjssj");
String zqxsj = request.getParameter("zqxsj");
String sbqk = request.getParameter("sbqk");
String cljg = request.getParameter("cljg");
String yy = request.getParameter("yy");
String jxqkjl = request.getParameter("jxqkjl");
String zbddy = request.getParameter("zbddy");
System.out.println("###########值班调度员:"+gzlb);
String tbsj = request.getParameter("tbsj");


try {
    

    DbTrade db_connection=new DbTrade();
	
	
	String sql_Upd="update z_qxfz_sgsb set gzfssj=to_date('"+gzfssj+"','yyyy-mm-dd hh24:mi'),gzdd='"+gzdd+"',gzlb='"+gzlb+"',tdqd='"+tdqd+"',yxfw='"+yxfw+"',zrbz='"+zrbz+"',gstzsj=to_date('"+gstzsj+"','yyyy-mm-dd hh24:mi'),ysdtzsj=to_date('"+ysdtzsj+"','yyyy-mm-dd hh24:mi'),bztzsj=to_date('"+bztzsj+"','yyyy-mm-dd hh24:mi'),yxlc='"+yxlc+"',zzcdbz='"+zzcdbz+"',sj1=to_date('"+sj1+"','yyyy-mm-dd hh24:mi'),rs1='"+rs1+"',zzddbz='"+zzddbz+"',sj2=to_date('"+sj2+"','yyyy-mm-dd hh24:mi'),rs2='"+rs2+"',qxldr='"+qxldr+"',zw='"+zw+"',zrs='"+zrs+"',tdkssj=to_date('"+tdkssj+"','yyyy-mm-dd hh24:mi'),tdjssj=to_date('"+tdjssj+"','yyyy-mm-dd hh24:mi'),ztdsj='"+ztdsj+"',qxkssj=to_date('"+qxkssj+"','yyyy-mm-dd hh24:mi'),qxjssj=to_date('"+qxjssj+"','yyyy-mm-dd hh24:mi'),zqxsj='"+zqxsj+"',sbqk='"+sbqk+"',cljg='"+cljg+"',yy='"+yy+"',jxqkjl='"+jxqkjl+"',zbddy='"+zbddy+"',tbsj=to_date('"+tbsj+"','yyyy-mm-dd hh24:mi') where gzid='"+gzid+"'";
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