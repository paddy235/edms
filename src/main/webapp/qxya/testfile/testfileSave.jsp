<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp"%>
<%@page import="java.util.Date"%>
<%
    String tpmc = request.getParameter("tpmc");
    String SavePath = "dxsg\\Images\\";//用于存放上传文件的目录;
    System.out.println("开始调上传类"+tpmc);
    boolean b = new UpLoadFile().FileUpload(request, SavePath, tpmc);
    System.out.println("上传结束");
    if (b) {
        out.print("{success:true,msg:'保存成功！'}");
    } else {
        out.print("{success:true,msg:'保存失败！'}");
    }
%>
