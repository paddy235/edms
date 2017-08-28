<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String TDSBH = request.getParameter("TDSBH");
String TSDRQ = request.getParameter("TSDRQ");
String QZSJ = request.getParameter("QZSJ");
String T_GDDDY = request.getParameter("T_GDDDY");
String QJDD = request.getParameter("QJDD");
String TDDY = request.getParameter("TDDY");

String LD_TDQZSJ = request.getParameter("LD_TDQZSJ");
String LD_TDQZSJ1 = request.getParameter("LD_TDQZSJ1");
String LD_DDY = request.getParameter("LD_DDY");

String SD_SF = request.getParameter("SD_SF");
String SD_GDDDY = request.getParameter("SD_GDDDY");

String SD_LCDDY = request.getParameter("SD_LCDDY");

String BK = request.getParameter("BK");
String ZT =request.getParameter("ZT");//request.getParameter("GZLCBS");

String msg="";
try {
    DbTrade db_connection=new DbTrade();
    String sql_Upd="";
    ZT=String.valueOf(Integer.parseInt(ZT)+1);
    if(ZT.equals("2"))//行调签收
    {
    	msg="签收";
      	sql_Upd="update z_tjbb_tsddjb set ZT='"+ZT+"',BK='"+BK+"' where TDSBH='"+TDSBH+"'";
	}
	else if(ZT.equals("3"))//行调签认
    {
    	msg="签认";
      	sql_Upd="update z_tjbb_tsddjb set LD_TDQZSJ=to_date('"+LD_TDQZSJ+"','yyyy-mm-dd hh24:mi'),LD_TDQZSJ1=to_date('"+LD_TDQZSJ1+"','yyyy-mm-dd hh24:mi'),LD_DDY='"+LD_DDY+"',ZT='"+ZT+"',BK='"+BK+"', xdqrsj=sysdate where TDSBH='"+TDSBH+"'";
	}
	else if(ZT.equals("4"))//电调签收
    {
    	msg="签收";
      	sql_Upd="update z_tjbb_tsddjb set ZT='"+ZT+"',BK='"+BK+"' where TDSBH='"+TDSBH+"'";
    }
	else if(ZT.equals("5"))//电调发送送电时间
	{
		msg="发送";
		sql_Upd="update z_tjbb_tsddjb set SD_SF=to_date('"+SD_SF+"','yyyy-mm-dd hh24:mi'),SD_GDDDY='"+SD_GDDDY+"',ZT='"+ZT+"',BK='"+BK+"',ddqrsj=sysdate where TDSBH='"+TDSBH+"'";
	}
	else if(ZT.equals("6"))//行调签收
    {
    	msg="签收";
      	sql_Upd="update z_tjbb_tsddjb set ZT='"+ZT+"',BK='"+BK+"' where TDSBH='"+TDSBH+"'";
	}
	else if(ZT.equals("7"))//行调签认
    {
    	msg="签认";
      	sql_Upd="update z_tjbb_tsddjb set SD_LCDDY='"+SD_LCDDY+"',ZT='"+ZT+"',BK='"+BK+"' where TDSBH='"+TDSBH+"'";// , xdqrsj=sysdate
      	System.out.println("*******************************************"+sql_Upd);
	}
	else if(ZT.equals("8"))//行调签收
    {
    	msg="签收";
      	sql_Upd="update z_tjbb_tsddjb set ZT='"+ZT+"',BK='"+BK+"' where TDSBH='"+TDSBH+"'";
	}
	System.out.println(sql_Upd);
	db_connection.executeUpdate(sql_Upd);
	db_connection.close();
    //out.println(json);
     out.print("{success:true,msg:'"+msg+"成功！'}");
} 

catch (Exception e) {
 		System.out.println(e);
 		out.print("{success:true,msg:'"+msg+"失败！'}");		
 	}
%>
