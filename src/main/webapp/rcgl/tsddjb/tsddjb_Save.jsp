<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String TDSBH = request.getParameter("TDSBH");
String TSDRQ = request.getParameter("TSDRQ");
String QZSJ = request.getParameter("QZSJ");
String T_GDDDY = request.getParameter("T_GDDDY");
String QJDD = request.getParameter("QJDD");
String TDDY = request.getParameter("TDDY");
String BK = request.getParameter("BK");
String ZT ="0"; //request.getParameter("GZLCBS");

DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);   
String sql="",TDSMAXBH="";
int bool=0,maxid=0;
if(TSDRQ.trim()!="")
{
    //得到主键
	try 
	{
		//连接数据库
		DbTrade db_connection=new DbTrade(); 
   		sql="select max(TDSBH) maxid from z_tjbb_tsddjb";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//案例编码贯穿其它两个表
		TDSMAXBH=frmString.format(maxid);//格式化案例编码
		sql="insert into z_tjbb_tsddjb(TDSBH,TSDRQ,QJDD,TDDY,QZSJ,T_GDDDY,BK,ZT) values('"
			+TDSMAXBH+"',to_date('"+TSDRQ+"','yyyy-mm-dd'),'"+QJDD+"','"+TDDY+"','"+QZSJ+"','"+T_GDDDY+"','"+BK+"','"+ZT+"')";
		System.out.println("++"+sql);
		db_connection.executeUpdate(sql);
		db_connection.close();
		//session.setAttribute("albm", albm);
		out.print("{success:true,msg:'保存成功'}");		
	}
 	catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'保存失败'}");		
 	}
}
System.out.println(sql);
%>
