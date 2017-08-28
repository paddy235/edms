<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
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
   String sql="delete z_yxgl_gzpgq_green where gzpid="+gzpid;
   if(dbTrade.executeUpdate(sql))
   {
   dbTrade.close();
      response.sendRedirect("../gqtdzygzpsq_dd/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+"&jhnr=");
   }
   
 %>