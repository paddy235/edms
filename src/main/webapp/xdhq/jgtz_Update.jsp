<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String tzid=request.getParameter("tzid");
String tzsj=request.getParameter("tzsj");//֪ͨʱ��
String ccsj=request.getParameter("ccsj");//����ʱ��
String gdddy=request.getParameter("ddy");//���Ա
String xdy=request.getParameter("xdy");//�е�Ա
String sgmlh=request.getParameter("sgmlh");//���������
String JGDDY=request.getParameter("JGDDY");
String JGXDY=request.getParameter("JGXDY");
String ZT =request.getParameter("zt");//request.getParameter("GZLCBS");
System.out.println("22"+ZT);
String msg="";
try {
    DbTrade db_connection=new DbTrade();
    String sql_Upd="";
    ZT=String.valueOf(Integer.parseInt(ZT)+1);
    if(ZT.equals("2"))//�е�ǩ��
    {
    	msg="ǩ��";
      	sql_Upd="update z_yxgl_jgtz set ZT='"+ZT+"' where tzid='"+tzid+"'";
    	//sql_Upd="update z_yxgl_jgtz set tzsj=to_date('"+tzsj+"','yyyy-mm-dd hh24:mi'),xdy='"+xdy+"',ZT='"+ZT+"' where tzid='"+tzid+"'";
      	//sql_Upd="update z_tjbb_tsddjb set tzsj=to_date('"+tzsj+"','yyyy-mm-dd hh24:mi'),ccsj=to_date('"+ccsj+"','yyyy-mm-dd hh24:mi'),xdy='"+xdy+"',ZT='"+ZT+"',sgmlh='"+sgmlh+"' where tzid='"+tzid+"'";
	}
	else if(ZT.equals("3"))//�е�ǩ��
	{
		msg="ǩ��";
      	sql_Upd="update z_yxgl_jgtz set tzsj=to_date('"+tzsj+"','yyyy-mm-dd hh24:mi'),xdy='"+xdy+"',ZT='"+ZT+"' where tzid='"+tzid+"'";
    }
	else if(ZT.equals("4"))//���ǩ��
	{
		msg="ǩ��";
		sql_Upd="update z_yxgl_jgtz set ZT='"+ZT+"' where tzid='"+tzid+"'";
		//sql_Upd="update z_yxgl_jgtz set ccsj=to_date('"+ccsj+"','yyyy-mm-dd hh24:mi'),xdy='"+xdy+"',ZT='"+ZT+"',sgmlh='"+sgmlh+"' where tzid='"+tzid+"'";
	}
	else if(ZT.equals("5"))//������ͳ���
	{
		msg="����";
		sql_Upd="update z_yxgl_jgtz set ccsj=to_date('"+ccsj+"','yyyy-mm-dd hh24:mi'),JGDDY='"+JGDDY+"',ZT='"+ZT+"',sgmlh='"+sgmlh+"' where tzid='"+tzid+"'";
	}
	else if(ZT.equals("6"))//�е�ǩ��
    {
    	msg="ǩ��";
      	sql_Upd="update z_yxgl_jgtz set ZT='"+ZT+"' where tzid='"+tzid+"'";
	}
	else if(ZT.equals("7"))//�е�ǩ��
    {
    	msg="ǩ��";
      	sql_Upd="update z_yxgl_jgtz set ccsj=to_date('"+ccsj+"','yyyy-mm-dd hh24:mi'),JGXDY='"+JGXDY+"',ZT='"+ZT+"',sgmlh='"+sgmlh+"' where tzid='"+tzid+"'";
	}
	else if(ZT.equals("8"))//�е�ǩ��
    {
    	msg="ǩ��";
      	sql_Upd="update z_yxgl_jgtz set ZT='"+ZT+"' where tzid='"+tzid+"'";
	}
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'"+msg+"�ɹ���'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'"+msg+"ʧ�ܣ�'}");		
 	}
%>
