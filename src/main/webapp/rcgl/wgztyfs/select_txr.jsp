<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%

    try {
String myURL="../../../errorpage.jsp";
	if(session.getAttribute("DWDM")==null)
	{
		response.sendRedirect(myURL);
	}

        String sql_Query="select distinct djr from z_yxgl_wgztyfs t";

        System.out.println("Sql£º:::::::::::::::::::::"+sql_Query);
       
        String json = "{root:[";
         
        DbTrade db_connection = new DbTrade();       
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) 
        {
        	if(listResultSet.getString(1)!=null)
            	json += "{value:'" + listResultSet.getString(1) + "',text:'" + listResultSet.getString(1)+"'},";
        }
        json = json.substring(0, json.length() - 1);

        json += "]}";

        System.out.println("txr/combo_list-----"+json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {

    }
%>


