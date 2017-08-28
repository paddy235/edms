<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
    String YHDM = request.getParameter("YHMC");
    String ADMIN = request.getParameter("ADMIN");
    String APPROVE = request.getParameter("APPROVE");
    String EDIT = request.getParameter("EDIT");
    String BRWOSE = request.getParameter("BRWOSE");
    String QXFZ = request.getParameter("QXFZ");
    String DDZ = request.getParameter("DDZ");
    System.out.println("Save.jsp:" + YHDM + ADMIN + DDZ);
    try {
        DbTrade db_connection = new DbTrade();
        String sql = "delete j_gyjc_yhjs where yhdm='" + YHDM + "'";
        db_connection.executeUpdate(sql);
        if(ADMIN!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','ADMIN')";
        	db_connection.executeUpdate(sql);
        }
		if(APPROVE!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','APPROVE')";
        	db_connection.executeUpdate(sql);
        }
        if(EDIT!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','EDIT')";
        	db_connection.executeUpdate(sql);
        }
        if(BRWOSE!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','BRWOSE')";
        	db_connection.executeUpdate(sql);
        }
        if(QXFZ!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','QXFZ')";
        	db_connection.executeUpdate(sql);
        }
        if(DDZ!=null){
        	sql = "insert into j_gyjc_yhjs (yhdm,jsdm) values('" + YHDM + "','DDZ')";
        	db_connection.executeUpdate(sql);
        }
        out.print("{success:true,msg:'保存成功！'}");

    } catch (Exception ex) {
        out.print("{success:false,msg:'保存失败！'}");
    }
%>
