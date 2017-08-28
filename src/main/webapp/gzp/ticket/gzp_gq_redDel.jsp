<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
   String gzpid=request.getParameter("id");
   String jhid=request.getParameter("jhid");
   String jhtype=request.getParameter("jhlb");
   System.out.println("gzpid:"+gzpid);
   DbTrade dbTrade=new DbTrade();
   DbTrade dbtrade1=new DbTrade();
   String sql="delete z_yxgl_gzpgq_red where gzpid="+gzpid;
   String sql_zyry="delete z_yxgl_zyry where ryb='gq_red'  and  gzpid="+gzpid;
   System.out.println("sql:"+sql);
    System.out.println("sql:"+sql_zyry);
   if(dbTrade.executeUpdate(sql))
   {
      dbtrade1.executeUpdate(sql_zyry);
      dbTrade.close();
      dbtrade1.close();
      response.sendRedirect("../gqddzygzpsq/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
   }
   
 %>