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
//�������ݿ�
DbTrade db_connection=new DbTrade();  
String sql="";
String Name="";
int maxid=0;
//�¹�ͼƬ  ----��������ᴩ����������
if(albm!=""&&tpmc.trim()!="")
{
	//�õ�����
	try 
	{
		if(tplj.lastIndexOf("\\")>1)
   	    {	
			sql="select max(id) maxid from z_dxsg_sgtp";
	   		ResultSet rs=db_connection.executeQuery(sql);
	   		while(rs.next()){
		   		maxid=rs.getInt("maxid")+1;
	   		}

	   		String SavePath="dxsg\\Images\\";//���ڴ���ϴ��ļ���Ŀ¼;
	   		Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
		
			if(Name!="")
			{
				//�����¹�ͼƬ����
				sql="insert into z_dxsg_sgtp(id,tpmc,tplx,tpms,tplj,scsj,sjc,albm) values('"
					+maxid+"','"+tpmc+"','"+tplx+"','"+tpms+"','"+Name+"',sysdate,sysdate,'"+albm+"')";
	    		db_connection.executeUpdate(sql);
	    		
	    		db_connection.close();
	    		out.print("{success:true,msg:'����ɹ���'}");
	    	}
    	}
    	else
    	{
    		out.print("{success:true,msg:'��ѡ��ͼƬ'}");
    	}
    }
 	catch (Exception e) {System.out.println(e);}
}
System.out.println(sql);
%>
