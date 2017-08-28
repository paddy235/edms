<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
    String JLID = request.getParameter("JLID");
    String flag = request.getParameter("flag");
    String DJRQ = request.getParameter("DJRQ");
    String GQDM = request.getParameter("GQDM");
    String LB = request.getParameter("LB");
    String SBMC = request.getParameter("SBMC");
    String GK = request.getParameter("GK");
    String BZ = request.getParameter("BZ");
    String DJR = request.getParameter("DJR");
    String HFRQ = request.getParameter("HFRQ");
    String TXR = request.getParameter("TXR");
    System.out.println("Save.jsp---------------:" + JLID + GQDM);
    String rq = "null";
    try {
        DbTrade db_connection = new DbTrade();
        if (!HFRQ.equalsIgnoreCase("")) {
            rq = "to_date('" + HFRQ + "','yyyy-mm-dd hh24:mi:ss')";
        }
        String sql_Add = "insert into z_yxgl_stgz values(sq_Z_YXGL_stgz.Nextval,"
                + "to_date('"
                + DJRQ
                + "','yyyy-mm-dd hh24:mi:ss'),'"
                + GQDM
                + "','"
                + LB
                + "','"
                + SBMC
                + "','"
                + GK
                + "','"
                + BZ + "','" + DJR + "'," + rq + ",'" + TXR + "')";
        String sql_update = "update z_yxgl_stgz set DJRQ="
                + "to_date('" + DJRQ
                + "','yyyy-mm-dd hh24:mi:ss'),GQDM='" + GQDM + "',LB='"
                + LB + "',SBMC='" + SBMC + "',GK='" + GK + "',BZ='"
                + BZ + "',DJR='" + DJR + "',HFRQ=" + rq + ",TXR='"
                + TXR + "' WHERE JLID=" + JLID;
        if (flag.equals("1")||JLID.equalsIgnoreCase("")) {
            System.out.println(sql_Add);
            db_connection.executeUpdate(sql_Add);
        } else {
            System.out.println(sql_update);
            db_connection.executeUpdate(sql_update);
        }
        out.print("{success:true,msg:'±£´æ³É¹¦'}");
    }

    catch (Exception ex) {
        System.out.println("Save.jsp----:" + ex);
    }
%>
