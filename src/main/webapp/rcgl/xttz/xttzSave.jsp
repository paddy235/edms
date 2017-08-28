<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
    String ymd = request.getParameter("ymd");
    String days = request.getParameter("days");
    String priority = request.getParameter("priority");
    String title = request.getParameter("title");
    String content = request.getParameter("content");
    String auther = request.getParameter("auther");
    String flag = request.getParameter("flag");

    try {
        DbTrade db_connection = new DbTrade();
        String sql_Upd = "update z_yxgl_xttz set days=" + days
                + ",priority=" + priority + ",title='" + title
                + "',content='" + content + "',auther='" + auther
                + "',flag='" + flag
                + "' where to_char(ymd,'yyyy-mm-dd hh24:mi:ss')='" + ymd+"'";
        System.out.println(sql_Upd);
        if (!db_connection.executeUpdate(sql_Upd)) {
            sql_Upd = "insert into z_yxgl_xttz(ymd,days,priority,title,content,auther,flag) values(to_date('"
                    + ymd
                    + "','yyyy-mm-dd hh24:mi:ss'),"
                    + days
                    + ","
                    + priority
                    + ",'"
                    + title
                    + "','"
                    + content
                    + "','"
                    + auther + "','" + flag + "')";
            System.out.println(sql_Upd);
            db_connection.executeUpdate(sql_Upd);
        }
        out.print("{success:true,msg:'³É¹¦'}");

    }
    catch (Exception ex) {
    out.print("{success:false,msg:'Ê§°Ü'}");
    }
%>
