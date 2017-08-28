<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
System.out.println("开始保存数据操作……");
String szdw = request.getParameter("szdw");
String bm = request.getParameter("bm");
String zw = request.getParameter("zw");
String zy = request.getParameter("zy");
String xm = request.getParameter("xm");
String gh = request.getParameter("gh");
String xb = request.getParameter("xb");
String jg = request.getParameter("jg");
String mz = request.getParameter("mz");
String hkxz = request.getParameter("hkxz");
String csd = request.getParameter("csd");
String csrq = request.getParameter("csrq").toString();
String sfzh = request.getParameter("sfzh");
String whcd = request.getParameter("whcd");
String zzmm = request.getParameter("zzmm");
String hyzk = request.getParameter("hyzk");
String gz = request.getParameter("gz");
String aqdj = request.getParameter("aqdj");
String ydsgdj = request.getParameter("ydsgdj");
String jsdj = request.getParameter("jsdj");
String bc = request.getParameter("bc");

Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0,maxid=0;
//得到主键
	try 
	{
   		sql="select max(id) maxid from z_jcsj_ry";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//插入数据
		sql="insert into z_jcsj_ry(id,szdw,bm,zw,zy,xm,gh,xb,jg,mz,hkxz,csd,csrq,sfzh,whcd,zzmm,hyzk,gz,aqdj,ydsgdj,jsdj,bc) values('"
			+maxid+"','"+szdw+"','"+bm+"','"+zw+"','"+zy+"','"+xm+"','"+gh+"','"+xb+"','"+jg+"','"+mz+"','"+hkxz+"','"+csd+"',to_date('"+csrq+"','yyyy-MM-dd'),'"+sfzh+"','"+whcd+"','"+zzmm+"','"+hyzk+"','"+gz+"','"+aqdj+"','"+ydsgdj+"','"+jsdj+"','"+bc+"')";
    	System.out.println("插入人员表的SQL语句1："+sql);
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	System.out.println("插入人员表的SQL语句2："+sql);
    	
    }
 	catch (Exception e) {bool=0;}

//System.out.println(sql);
//System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'保存成功！'}");
}
else
{
	out.print("{success:true,msg:'保存失败！'}");
}
%>
