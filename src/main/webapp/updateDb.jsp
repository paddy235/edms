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
        String sql = "drop table Z_JCSJ_BYQ";
        db_connection.executeUpdate(sql);

        sql = "create table Z_JCSJ_BYQ\n" +
                "(\n" +
                "  ID     NUMBER not null,\n" +
                "  SZDW   VARCHAR2(200),\n" +
                "  BM     VARCHAR2(100),\n" +
                "  ZW     VARCHAR2(100),\n" +
                "  ZY     VARCHAR2(100),\n" +
                "  XM     VARCHAR2(100),\n" +
                "  GH     VARCHAR2(100),\n" +
                "  XB     VARCHAR2(100),\n" +
                "  JG     VARCHAR2(200),\n" +
                "  MZ     VARCHAR2(100),\n" +
                "  HKXZ   VARCHAR2(150),\n" +
                "  CSD    VARCHAR2(150),\n" +
                "  CSRQ   DATE,\n" +
                "  SFZH   VARCHAR2(180),\n" +
                "  WHCD   VARCHAR2(100),\n" +
                "  ZZMM   VARCHAR2(100),\n" +
                "  HYZK   VARCHAR2(100),\n" +
                "  GZ     VARCHAR2(200),\n" +
                "  AQDJ   VARCHAR2(100),\n" +
                "  YDSGDJ VARCHAR2(160),\n" +
                "  JSDJ   VARCHAR2(160),\n" +
                "  BC     VARCHAR2(100)\n" +
                ")";
        db_connection.executeUpdate(sql);

        db_connection.close();
        out.print("{success:true,msg:'更新成功！'}");
    } catch (Exception e) {
        e.printStackTrace();
        out.print("{success:false,msg:'更新失败！'}");
    }
%>
