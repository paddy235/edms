<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@ include file="../../share/CheckDateorStr.jsp"%>
<%@page import="java.util.Date"%>
<%
    String tpmc = request.getParameter("tpmc");
    String SavePath = "dxsg\\Images\\";//���ڴ���ϴ��ļ���Ŀ¼;
    System.out.println("��ʼ���ϴ���"+tpmc);
    boolean b = new UpLoadFile().FileUpload(request, SavePath, tpmc);
    System.out.println("�ϴ�����");
    if (b) {
        out.print("{success:true,msg:'����ɹ���'}");
    } else {
        out.print("{success:true,msg:'����ʧ�ܣ�'}");
    }
%>
