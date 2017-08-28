<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
    String start = request.getParameter("start");
    String limit = request.getParameter("limit");
    String education = request.getParameter("action");
    System.out.println("xdxx_json.jsp:" + education);

    String whereclause = " 1=1 ";
    if (session.getAttribute("xdxx_whereclause") != null) {
        whereclause = whereclause
                + session.getAttribute("xdxx_whereclause").toString()
                        .trim();
        System.out.println("session:" + whereclause);
    }
    session.setAttribute("xdxx_whereclause", null);
    session.removeAttribute("whereclause");
    try {

        int index = Integer.parseInt(start);
        int pageSize = Integer.parseInt(limit);

        int totalCount = 0;

        DbTrade db_connection = new DbTrade();
        String tablename = "z_xxgx_xdxx";

        String sql_Query_count = "select count(*) from " + tablename
                + " where " + whereclause;

        java.sql.ResultSet gridResultSet_count = db_connection
                .executeQuery(sql_Query_count);
        gridResultSet_count.next();
        totalCount = gridResultSet_count.getInt(1);

        //out.println(totalCount);

        String sql_Query = "select * from (select rownum xh,temp.* from (select * from "
                + tablename
                + " where "
                + whereclause
                + " order by rk_date desc) temp) where xh between "
                + (index + 1) + " and " + (pageSize + index);

        //out.println(sql_Query);
        System.out.println("sql_Query" + sql_Query);
        java.sql.ResultSet gridResultSet = db_connection
                .executeQuery(sql_Query);

        String json = "{totalCount:" + totalCount + ",root:[";
        
        while (gridResultSet.next()) {           
            json += "{rk_date:'"
                    + gridResultSet.getString(3).substring(0,
                            gridResultSet.getString(3).length() - 2)
                    + "'"
                    + ",bg_date:'"
                    + gridResultSet.getString(4).substring(0,
                            gridResultSet.getString(4).length() - 2)
                    + "'" + ",ddt:'" + gridResultSet.getString(5) + "'"
                    + ",train_id:'" + gridResultSet.getString(6) + "'"
                    + ",train_num:'" + gridResultSet.getString(7) + "'"
                    + ",station_name:'" + gridResultSet.getString(8) + "'"
                     + ",arrive_time:'"
                    + gridResultSet.getString(9).substring(5,
                            gridResultSet.getString(9).length() - 2)
                    + "'" 
                    + ",arrive_time_type:'" + gridResultSet.getString(10) + "'"
                     + ",depart_time:'"
                    + gridResultSet.getString(11).substring(5,
                            gridResultSet.getString(11).length() - 2)
                    + "'" 
                    + ",depart_time_type:'" + gridResultSet.getString(12) + "'},";
        }
        if (totalCount != 0) {
            json = json.substring(0, json.length() - 1);
        }
        json += "]}";
        //out.println(json);

        System.out.println("json " + json);
        response.getWriter().write(json);
        //out.print("{success:true,msg:'"+education+ "'}");
        db_connection.close();
    }

    catch (Exception ex) {
    }
%>
