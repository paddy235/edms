<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
    try {
        String sql_Query = " select DDTDM,DDTMC from J_GYJC_DDTZD order by ddtdm";
        String all = "all";
         String json = "{root:[";
        if(all!=null&&all.equalsIgnoreCase("all")){
        	 json = json+"{value:'ALL',text:'ȫ��'},{value:'002',text:'��רǣ��̨'},{value:'003',text:'��ר����̨'},";
        }
        DbTrade db_connection = new DbTrade();       
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) {
            json += "{value:'" + listResultSet.getString(1) + "',text:'" + listResultSet.getString(2)+"'},";
        }
        json = json.substring(0, json.length() - 1);

        json += "]}";

        System.out.println("asdfasdfadfasdfadsfadfasdfasdfadfasdfasdfafsd/combo_list-----"+json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {

    }
%>


