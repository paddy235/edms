<%@ page language="java"
         contentType="text/html; charset=GB2312"
         pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade" %>
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="java.sql.*" %>
<%@page import="java.util.Date" %>

<%
    String myURL = "../../errorpage.jsp";
    if (session.getAttribute("DWDM") == null) {
        response.sendRedirect(myURL);
    }
    String ddy = request.getParameter("ddy");
    String gqmc = request.getParameter("gqdm");//Ҫ���ݵ�λ������ƴ����
    String gqpym = "";
    String kgh = request.getParameter("kgh");
    String lb = request.getParameter("lb");
    String sgjl = request.getParameter("sgjl");
    String bhzzdm = request.getParameter("tddy");//��Ӧ���Ǳ���װ�õ�dm
    String bhzzdm_mc = request.getParameter("bhzzmc");//����װ�õ�����
    String sjgzdd = request.getParameter("sjgzdd");//ʵ�ʹ��ϵص�
    String chzzt = request.getParameter("chzzt");//�غ�բ״̬tdqd
    String bgsj = request.getParameter("bgsj");
    String fhsj = request.getParameter("fhsj");
    String tdsf = request.getParameter("tdsf");
    String gzms = request.getParameter("gzms");
    String tzyy = request.getParameter("tzyy");
    String bz = request.getParameter("bz");
    String xb = request.getParameter("xb_add");
    String shr = request.getParameter("shr");
    System.out.println("xbxbxb" + sgjl);
    String tdqd = request.getParameter("tdqd");
    DbTrade dbTrade = new DbTrade();
    String sql_gqpym = "select * from j_gyjc_gqzd where gqdm='" + gqmc + "'";
    java.sql.ResultSet gridResultSet = dbTrade.executeQuery(sql_gqpym);
    if (gridResultSet.next()) {
        gqpym = gridResultSet.getString("gqpym");
    }
    gridResultSet.close();
    System.out.println("gqpym:" + gqpym);
    try {
        String sql_insert = "insert into Z_XXGX_YDGZBG2(YDSGBM,YDBGBH,BGSJ,GQPYM,BHZZDM,GZMS,SGJL,TZYY,CHZZT,FHSJ,TDSF,LB,BZ,DDY,bhzzmc , kgh) values(YDGZBGSEQ.Nextval,'',to_date('" + bgsj
                + "','yyyy-mm-dd hh24:mi:ss'),'" + gqpym + "','1','" + gzms + "','" + sgjl + "','" + tzyy + "','" + chzzt + "',to_date('" + fhsj + "','yyyy-mm-dd hh24:mi:ss'),'" + tdsf + "','" + lb + "','" + bz + "','" + ddy + "','" + bhzzdm_mc + "','" + kgh + "')";
        System.out.println("insert:" + sql_insert);
        dbTrade.executeUpdate(sql_insert);
        dbTrade.close();
        out.print("{success:true,msg:'������ӳɹ���'}");
    } catch (Exception ex) {
    }

%>
