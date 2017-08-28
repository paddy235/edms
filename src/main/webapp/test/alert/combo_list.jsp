<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
    try {
        String action = request.getParameter("action");
        String json = "{root:[{listitem1:'all',listitem2:'È«²¿'},";
        DbTrade db_connection = new DbTrade();
        String sql_Query = "select * from tabs";
        if (action == null || action.equalsIgnoreCase("")) {
            sql_Query = "select * from tabs";
        } else if (action.equalsIgnoreCase("bds")) {
            sql_Query = "select distinct bds from z_xxgx_pscada";
        }
        else if (action.equalsIgnoreCase("ddt")) {
            sql_Query = "select distinct ddt from z_xxgx_xdxx";
        }
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) {
            json += "{listitem1:'" + listResultSet.getString(1) + "',listitem2:'" + listResultSet.getString(1)+"'},";

        }
        json = json.substring(0, json.length() - 1);

        json += "]}";

        System.out.println(action+"-----"+json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {

    }
%>


