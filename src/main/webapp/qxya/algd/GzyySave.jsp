<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp" %>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%
String albm = request.getParameter("albm");
String yymc = new String(request.getParameter("yymc_id").getBytes("ISO8859-1"),"GB2312");
String yylx = request.getParameter("yylx_id");
String yyms = new String(request.getParameter("yyms_id").getBytes("ISO8859-1"),"GB2312"); 
String yylj = new String(request.getParameter("yylj_id").getBytes("ISO8859-1"),"GB2312");

DecimalFormat frmString=new DecimalFormat("");  
//�������ݿ�
DbTrade db_connection=new DbTrade();  
String sql="";
String Name="";
int maxid=0;
//�¹�Ӱ��  ----��������ᴩ����������
if(albm!=""&&yymc.trim()!="")
{
	//�õ�����
	try 
	{
		if(yylj.lastIndexOf("\\")>1)
   	    {	
	   		sql="select max(id) maxid from z_dxsg_sgyy";
	   		ResultSet rs=db_connection.executeQuery(sql);
	   		while(rs.next()){
		   		maxid=rs.getInt("maxid")+1;
	   		}
	   		
	   		String SavePath="dxsg\\vedio\\";//���ڴ���ϴ��ļ���Ŀ¼;
	   		Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
	   		
			if(Name!="")
			{
				//�����¹�Ӱ������
				sql="insert into z_dxsg_sgyy(id,yymc,yylx,yyms,yylj,scsj,sjc,albm) values('"
					+maxid+"','"+yymc+"','"+yylx+"','"+yyms+"','"+Name+"',sysdate,sysdate,'"+albm+"')";
	    		db_connection.executeUpdate(sql);
	    		db_connection.close();
	    		out.print("{success:true,msg:'����ɹ���'}");
    	    	}
    	}
    	else
    	{
    		out.print("{success:true,msg:'��ѡ��Ӱ��'}");
    	}
    }
 	catch (Exception e) {}
}
System.out.println(sql);
//System.out.println(albm);
%>
