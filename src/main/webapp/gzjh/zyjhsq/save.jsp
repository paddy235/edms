<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>

<%
String dwid = request.getParameter("dwid");
String dwmc = request.getParameter("dwid");
String jhh = request.getParameter("jhh");
String jhsj = request.getParameter("jhsj");
String xianb = request.getParameter("xianb");
String xingb = request.getParameter("xingb");
String jhlb = request.getParameter("jhlb");

String jhlx = request.getParameter("jhlx");
String wxxm = request.getParameter("wxxm");
String ydsj = request.getParameter("ydsj");
String phdw = request.getParameter("phdw");
String fzr = request.getParameter("fzr");
String tbsj = request.getParameter("tbsj");
String sgdd = request.getParameter("sgdd");
String nrjyq = request.getParameter("nrjyq");
String bz = request.getParameter("bz");

//新加
String mlh=request.getParameter("mlh");
String ylz=request.getParameter("ylz");
String fsfw=request.getParameter("fsfw");
String jhnr=request.getParameter("jhnr");
String gdcnr=request.getParameter("gdcnr");
//System.out.println( request.getParameter("jhid"));
//存储填报人 修改了时间戳的复制方式
String yxfw=(String)session.getAttribute("YHMC");

SimpleDateFormat formater=new SimpleDateFormat("yyyy-MM-dd");
Date nowDate =new Date();
    	 
			DbTrade dbTrade=new DbTrade();
			try
			{

			String sql_Query_dwmc="select dwjc from v_j_gyjc_yhdw where dwdm='"+dwid+"'";
	
			java.sql.ResultSet gridResultSet_count=dbTrade.executeQuery(sql_Query_dwmc);
			if(gridResultSet_count.next()){
				dwmc=gridResultSet_count.getString(1);
			}
	
		String sqlString="insert into z_yxgl_zyjh (id,dwid,jhh,jhsj,xb,"+
    	  "xingb,jhlb,sgdd,ydsj,wxxm,phdw,fzr,jhlx,tbsj,nrjyq,bz,spr,zt,yxfw,sjc,mlh,ylz,fsfw,jhnr,dwmc,gdcnr)"+
    	  " values(z_yxgl_zyjhSquence.Nextval,'"+dwid+"','"+jhh+"',"+
    	  "to_date('"+jhsj+"','YYYY-MM-DD hh24:mi'),  '"+xianb+"','"+xingb+"','"+jhlb+"','"+sgdd+"',"+
    	  "'"+ydsj+"','"+wxxm+"','"+phdw+"','"+fzr+"','"+jhlx+"',to_date('"+tbsj+"','YYYY-MM-DD hh24:mi'),"+
    	  "'"+nrjyq+"','"+bz+"','','0','"+yxfw+" ',sysdate,'"+mlh+"','"+ylz+"','"+fsfw+"','"+jhnr+"','"+dwmc+"','"+gdcnr+"')";
    	  //System.out.println(sqlString);
			 dbTrade.executeUpdate(sqlString);
			 dbTrade.close();
			 out.print("{success:true,msg:'数据保存成功！'}");
			}catch(Exception ex)
			{
			  dbTrade.close();
			  out.print("{success:true,msg:'数据保存失败！'}");
			}





%>
