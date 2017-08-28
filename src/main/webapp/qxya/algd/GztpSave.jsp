<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
request.setCharacterEncoding("GB2312");
String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();
String tpmc = new String(request.getParameter("tpmc_id").getBytes("ISO8859-1"),"GB2312");
String tplx = request.getParameter("tplx_id");
String tpms = new String(request.getParameter("tpms_id").getBytes("ISO8859-1"),"GB2312");
String tplj = new String(request.getParameter("tplj_id").getBytes("ISO8859-1"),"GB2312");
 
DecimalFormat frmString=new DecimalFormat(""); 
//连接数据库
DbTrade db_connection=new DbTrade();  
String sql="";
String Name="";
int maxid=0;
//事故图片  ----案例编码贯穿其它两个表
if(albm!=""&&tpmc.trim()!="")
{
	//得到主键
	try 
	{
		if(tplj.lastIndexOf("\\")>1)
   	    {	
			sql="select max(id) maxid from z_dxsg_sgtp";
	   		ResultSet rs=db_connection.executeQuery(sql);
	   		while(rs.next()){
		   		maxid=rs.getInt("maxid")+1;
	   		}

	   		String SavePath="dxsg\\Images\\";//用于存放上传文件的目录;
	   		Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
		
			if(Name!="")
			{
				//插入事故图片数据
				sql="insert into z_dxsg_sgtp(id,tpmc,tplx,tpms,tplj,scsj,sjc,albm) values('"
					+maxid+"','"+tpmc+"','"+tplx+"','"+tpms+"','"+Name+"',sysdate,sysdate,'"+albm+"')";
	    		db_connection.executeUpdate(sql);
	    		
	    		db_connection.close();
	    		out.print("{success:true,msg:'保存成功！'}");
	    	}
    	}
    	else
    	{
    		out.print("{success:true,msg:'请选择图片'}");
    	}
    }
 	catch (Exception e) {System.out.println(e);}
}
System.out.println(sql);
%>
