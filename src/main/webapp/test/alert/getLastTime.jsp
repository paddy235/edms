<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
    try {
        String action = request.getParameter("action");
        String json = "";
        DbTrade db_connection = new DbTrade();
        String sql_Query = "select * from tabs";
        if (action == null || action.equalsIgnoreCase("")) {
            sql_Query = "select * from tabs";
        } else if (action.equalsIgnoreCase("last_time")) {
            sql_Query = "select max(rk_date) from z_xxgx_xdxx";
        }
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) {
            json =  listResultSet.getString(1).substring(0,
                            listResultSet.getString(1).length() - 2) ;

        }
        out.print( json );

        db_connection.close();
    } catch (Exception ex) {

    }
%>
