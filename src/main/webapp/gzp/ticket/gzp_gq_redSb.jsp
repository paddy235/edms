<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
    if(session.getAttribute("DWDM")==null)
    {
       String myURL="../errorpage.jsp";
      response.sendRedirect(myURL);
    }
   String gzpid=request.getParameter("id");
   String jhid=request.getParameter("jhid");
   String jhtype=request.getParameter("jhlb");
   System.out.println("jhid:"+jhid);
   DbTrade dbTrade=new DbTrade();
   String sql="update z_yxgl_gzpgq_red set gzpzt='1' where gzpid="+gzpid;
      System.out.println("jhid:"+sql);
   if(dbTrade.executeUpdate(sql))
   {
   dbTrade.close();
      response.sendRedirect("../gqddzygzpsq/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+"&jhnr=");
   }
   
 %>