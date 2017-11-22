<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade" %>
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="java.util.Date" %>
<%@page import="java.text.*" %>
<%@page import="java.sql.*" %>
<%
    //连接数据库
    DbTrade db_connection = new DbTrade();
//得到主键
    try {
        String sql = "alter table Z_TSDQR_TDTZ modify(TDSF varchar(255))";
        db_connection.executeUpdate(sql);
        sql = "alter table Z_TSDQR_SDTZ modify(SDSF varchar(255))";
        db_connection.executeUpdate(sql);

        db_connection.close();
        out.print("{success:true,msg:'更新成功！'}");
    } catch (Exception e) {
        e.printStackTrace();
        out.print("{success:false,msg:'更新失败！+" + e.getMessage() + "'}");
    }
%>
