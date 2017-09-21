<%@ page language="java"
         contentType="text/html; charset=GB2312"
         pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade" %>


<%
    //String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
    String YHDM = request.getParameter("YHDM");
    String YHMC = request.getParameter("YHMC");
    String YHMM = request.getParameter("YHMM");
    String YHIP = request.getParameter("YHIP");
    String GWMC = request.getParameter("GWMC");
    String DWJB = request.getParameter("DWJB");
    String DWDM = request.getParameter("DWDM");
    String BZ = request.getParameter("BZ");
    String DDTDM = request.getParameter("DDTDM");
    System.out.println("Save.jsp:" + YHDM + YHMC + YHMM);


    try {


        DbTrade db_connection = new DbTrade();


        //String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;

        //java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
        //gridResultSet_count.next();
        //totalCount=gridResultSet_count.getInt(1);

        //out.println(totalCount);

        String sql_Add = "insert into J_GYJC_YH(YHDM,YHMC,YHMM,YHIP,GWMC,DWJB,DWDM,BZ,DDTDM) values('" + YHDM + "','" + YHMC + "','" + YHMM + "','" + YHIP + "','" + GWMC + "','" + DWJB + "','" + DWDM + "','" + BZ + "','" + DDTDM + "')";

        //out.println(sql_Query);
        System.out.println(sql_Add);
        //java.sql.ResultSet gridResultSet=

        //sql_Add ="alter table z_tsdqr_tdtz modify(TDGDB varchar(500))";
        db_connection.executeUpdate(sql_Add);


        //out.println(json);


        out.print("{success:true,msg:'保存成功！'}");

    } catch (Exception ex) {
        ex.printStackTrace();
        out.print("{success:false,msg:'保存失败！'}");
    }

%>
