<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
    
String xb = request.getParameter("xb");
String xzjg = request.getParameter("xzjg");
String qjzc = request.getParameter("qjzc");
String glb = request.getParameter("glb");
String jcwgh = request.getParameter("jcwgh");
String dlxgd = request.getParameter("dlxgd");
String dlxxh = request.getParameter("dlxxh");
String dydj = request.getParameter("dydj");
String gs = request.getParameter("gs");
String cqdw = request.getParameter("cqdw");
String cqdwlxr = request.getParameter("cqdwlxr");
String cqdwlxrdh = request.getParameter("cqdwlxrdh");
String xjnf = request.getParameter("xjnf");
String bz = request.getParameter("bz");




Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//�������ݿ�
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0,maxid=0;
//�õ�����
	try 
	{
   		sql="select max(id) maxid from z_jcsj_skx";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		
		//�����¹�ͼƬ����
		sql="insert into z_jcsj_skx(id,xb,xzjg,qjzc,glb,jcwgh,dlxgd,dlxxh,dydj,gs,cqdw,cqdwlxr,cqdwlxrdh,xjnf,bz) values('"
			+maxid+"','"+xb+"','"+xzjg+"','"+qjzc+"','"+glb+"','"+jcwgh+"','"+dlxgd+"','"+dlxxh+"','"+dydj+"','"+gs+"','"+cqdw+"','"+cqdwlxr+"','"+cqdwlxrdh+"','"+xjnf+"','"+bz+"')";
    	System.out.println(sql);
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	
    	
    }
 	catch (Exception e) {bool=0;}

System.out.println(sql);
//System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'����ɹ���'}");
}
else
{
	out.print("{success:true,msg:'����ʧ�ܣ�'}");
}
%>
