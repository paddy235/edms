<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade" %>
<%@page import="java.text.SimpleDateFormat" %>


<%!
    private String convertNull(String value) {
        //System.out.println("value:"+value);
        if (value == null) {
            //System.out.println("value:"+value);
            return "";
        } else {
            return value.replaceAll("\r\n", "\\\\r\\\\n").trim();
        }
    }

    private String convertDate(java.sql.Date value) {
        //System.out.println("value:"+value);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        if (value == null) {
            //System.out.println("value:"+value);
            return " ";
        } else {
            return dateFormat.format(value);
        }
    }
%>


<%
    String start = request.getParameter("start");
    String limit = request.getParameter("limit");


//String education = request.getParameter("action");
//System.out.println("chenzhen:");

    String whereclause_onduty = "";

    System.out.println("json session:" + session.getAttribute("whereclause_onduty"));

    if ((session.getAttribute("whereclause_onduty") != null) && (!session.getAttribute("whereclause_onduty").equals(""))) {
        whereclause_onduty = session.getAttribute("whereclause_onduty").toString();
        //System.out.println("session:"+whereclause);
        //session.removeAttribute("whereclause");
    } else {
        //session.setAttribute("whereclause","");
//        whereclause_onduty = " 1=1 ";
        whereclause_onduty = request.getParameter("whereclause");
    }


    try {


        int index = Integer.parseInt(start);
        int pageSize = Integer.parseInt(limit);

        System.out.println("index:" + index);
        System.out.println("pageSize:" + pageSize);


        int totalCount = 0;

        DbTrade db_connection = new DbTrade();


        String sql_Query_count = "select count(*) from z_yxgl_zbjs2 where " + whereclause_onduty;

        System.out.println("sql_Query_count:" + sql_Query_count);

        java.sql.ResultSet gridResultSet_count = db_connection.executeQuery(sql_Query_count);
        gridResultSet_count.next();
        totalCount = gridResultSet_count.getInt(1);

        System.out.println(sql_Query_count);

        //解决分页最后一条记录更新问题
        if ((totalCount != 0) && (totalCount < index + 1)) {
            index = index - pageSize;
        }

        //System.out.println(0%10);


        String sql_Query = "select * from (select rownum xh,temp.* from (select * from z_yxgl_zbjs2 where " + whereclause_onduty + " order by jssj desc) temp) where xh between " + (index + 1) + " and " + (pageSize + index);

        //out.println(sql_Query);
        System.out.println(sql_Query);
        java.sql.ResultSet gridResultSet = db_connection.executeQuery(sql_Query);


        String json = "{totalCount:" + totalCount + ",root:[";

        while (gridResultSet.next()) {

            //System.out.println(gridResultSet.getString("lcddy"));

            //System.out.println("lcddy:"+convertNull(gridResultSet.getString("lcddy")));

            json += "{xh:" + gridResultSet.getLong("xh") +
                    ",jsid:" + gridResultSet.getLong("jsid") +
                    ",dwid:'" + convertNull(gridResultSet.getString("dwid")) + "'" +
                    ",dwmc:'" + convertNull(gridResultSet.getString("dwmc")) + "'" +
                    ",tq:'" + convertNull(gridResultSet.getString("tq")) + "'" +
                    ",jssj:'" + convertDate(gridResultSet.getDate("jssj")) + "'" +
                    ",sfjbrqr:'" + convertNull(gridResultSet.getString("sfjbrqr")) + "'" +
                    ",jsnr:'" + convertNull(gridResultSet.getString("jsnr")) + "'" +
                    ",jbrqr:'" + convertNull(gridResultSet.getString("jbrqr")) + "'},";
        }

        if (totalCount != 0) {
            json = json.substring(0, json.length() - 1);
        }
        json += "]}";

        db_connection.close();
        System.out.println(json);
        response.getWriter().write(json);

    } catch (Exception ex) {
    }

%>
