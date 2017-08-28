
<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
    DbTrade db = new DbTrade();
    System.out.println((String) session.getAttribute("YHDM")
            + " logout");
     String sql="update J_GYJC_YHLOG set LOGOUT_TIME=sysdate where YHDM='"
                    + (String) session.getAttribute("YHDM")
                    + "' and to_char(login_time,'yyyy-mm-dd hh24:mi:ss')='"
                    + (String) session.getAttribute("LOGIN_TIME") + "'";
    db.executeUpdate(sql);
    db.close();
    session.invalidate();
    response.sendRedirect("login.jsp");
%>