<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
    try {
        String YHDM = request.getParameter("YHDM");
        String json = "{totalRecords:1,root:[";
        DbTrade db_connection = new DbTrade();
        String sql_Query = "select jsdm from j_gyjc_yhjs t where t.yhdm='"+YHDM+"'";
        System.out.println("-----" + sql_Query);
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) {
            json += "{JSDM:'" + listResultSet.getString(1)+
                   "'},";
           
        }
        json = json.substring(0, json.length() - 1);

        json += "]}";
		
        System.out.println(YHDM + "-----" + json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {
    System.out.println("Exception-----" + ex);

    }
%>



