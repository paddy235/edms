<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade" %>
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="java.util.Date" %>
<%@page import="java.text.*" %>
<%@page import="java.sql.*" %>
<%
    //�������ݿ�
    DbTrade db_connection = new DbTrade();
//�õ�����
    try {
        String sql = "alter table Z_TSDQR_TDTZ modify(TDSF varchar(255))";
        db_connection.executeUpdate(sql);
        sql = "alter table Z_TSDQR_SDTZ modify(SDSF varchar(255))";
        db_connection.executeUpdate(sql);

        db_connection.close();
        out.print("{success:true,msg:'���³ɹ���'}");
    } catch (Exception e) {
        e.printStackTrace();
        out.print("{success:false,msg:'����ʧ�ܣ�+" + e.getMessage() + "'}");
    }
%>
