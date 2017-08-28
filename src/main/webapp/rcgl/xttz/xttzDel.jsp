<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
    String ymd = request.getParameter("ymd");
    try {
        DbTrade db_connection = new DbTrade();
        String sql_Upd = "delete z_yxgl_xttz "
                + " where to_char(ymd,'yyyy-mm-dd hh24:mi:ss')='" + ymd+"'";
        System.out.println(sql_Upd);
        if (db_connection.executeUpdate(sql_Upd)) {
            out.print("{success:true,msg:'É¾³ý³É¹¦'}");
        }else{
        	out.print("{success:false,msg:'Ê§°Ü'}");
        }

    }
    catch (Exception ex) {
    	out.print("{success:false,msg:'Ê§°Ü'}");
    }
%>
