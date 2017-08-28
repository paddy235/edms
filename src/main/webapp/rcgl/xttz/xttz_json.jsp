<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
    String start = request.getParameter("start");
    String limit = request.getParameter("limit");
    String whereclause = request.getParameter("whereclause");
    System.out.println("whereclause" + whereclause);
    try {
        int index = Integer.parseInt(start);
        int pageSize = Integer.parseInt(limit);
        int totalCount = 0;
        DbTrade db_connection = new DbTrade();
        String tablename = "z_yxgl_xttz";

        String sql_Query_count = "select count(*) from " + tablename
                + " where " + whereclause;
        java.sql.ResultSet gridResultSet_count = db_connection
                .executeQuery(sql_Query_count);
        gridResultSet_count.next();
        totalCount = gridResultSet_count.getInt(1);

        String sql_Query = "select * from (select rownum xh,temp.* from (select * from "
                + tablename
                + " where "
                + whereclause
                + " order by ymd desc) temp) where xh between "
                + (index + 1) + " and " + (pageSize + index);      
        System.out.println("sql_Query" + sql_Query);
        java.sql.ResultSet gridResultSet = db_connection
                .executeQuery(sql_Query);

        String json = "{totalCount:" + totalCount + ",root:[";
        
        while (gridResultSet.next()) {           
            json += "{ymd:'"
                    + gridResultSet.getString(2).substring(0,
                            gridResultSet.getString(2).length() - 2) + "'"                   
                    + ",days:'" + gridResultSet.getString(3) + "'"
                    + ",priority:'" + gridResultSet.getString(4) + "'"
                    + ",title:'" + gridResultSet.getString(5) + "'"
                    + ",content:'" + gridResultSet.getString(6).replaceAll("\\r\\n","\\\\r\\\\n") + "'"
                    + ",auther:'" + gridResultSet.getString(7) + "'"
                    + ",flag:'" + ((gridResultSet.getString(8)==null)?"0":gridResultSet.getString(8)) + "'},";
        }
        if (totalCount != 0) {
            json = json.substring(0, json.length() - 1);
        }
        json += "]}";
		db_connection.close();
		System.out.println("json:" + json);
        response.getWriter().write(json);
     
    } catch (Exception ex) {
    }
%>
