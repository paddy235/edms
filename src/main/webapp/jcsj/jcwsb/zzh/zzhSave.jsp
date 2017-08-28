<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
 //ZZHBM,ZZHMC,QJZC,XBBM,SXXBM,ZZGLB,SBXH,ZZLB,ZZCZ,KJ,LCZ,JCXGD,CMXJ,QXBJ,SCCJ,RYRQ,JD,WD,SXH,ZP      
      
//String ZZHBM = request.getParameter("ZZHBM");
String ZZHMC = request.getParameter("ZZHMC");
String QJZC = request.getParameter("QJZC");
String XBBM = request.getParameter("XBBM");
String SXXBM = request.getParameter("SXXBM");
String ZZGLB = request.getParameter("ZZGLB");
String SBXH = request.getParameter("SBXH");
String ZZLB = request.getParameter("ZZLB");
String ZZCZ = request.getParameter("ZZCZ");
String KJ = request.getParameter("KJ");
String LCZ = request.getParameter("LCZ");
String JCXGD = request.getParameter("JCXGD");
String CMXJ = request.getParameter("CMXJ");
String QXBJ = request.getParameter("QXBJ");
String SCCJ = request.getParameter("SCCJ");
String RYRQ = request.getParameter("RYRQ").toString();
String JD = request.getParameter("JD");
String WD = request.getParameter("WD");
String SXH = request.getParameter("SXH");
String ZP = request.getParameter("ZP");




Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
int bool=0,maxid=0;
//得到主键
	try 
	{
   		sql="select max(zzhbm) maxid from Z_GDGY_ZZH";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
  //ZZHBM,ZZHMC,QJZC,XBBM,SXXBM,ZZGLB,SBXH,ZZLB,ZZCZ,KJ,LCZ,JCXGD,CMXJ,QXBJ,SCCJ,RYRQ,JD,WD,SXH,ZP      		
		//插入事故图片数据
		sql="insert into Z_GDGY_ZZH(ZZHBM,ZZHMC,QJZC,XBBM,SXXBM,ZZGLB,SBXH,ZZLB,ZZCZ,KJ,LCZ,JCXGD,CMXJ,QXBJ,SCCJ,RYRQ,JD,WD,SXH,ZP ) values('"
			+maxid+"','"+ZZHMC+"','"+QJZC+"','"+XBBM+"','"+SXXBM+"','"+ZZGLB+"','"+SBXH+"','"+ZZLB+"','"+ZZCZ+"','"+KJ+"','"+LCZ+"','"+JCXGD+"','"+CMXJ+"','"+QXBJ+"','"+SCCJ+"',to_date('"+RYRQ+"','yyyy-MM-dd'),'"+JD+"','"+WD+"','"+SXH+"','"+ZP+"')";
    	System.out.println(sql);
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	
    	
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
