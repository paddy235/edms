<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%

    try {
String myURL="../../../errorpage.jsp";
	if(session.getAttribute("DWDM")==null)
	{
		response.sendRedirect(myURL);
	}
        String userdj=session.getAttribute("userdj").toString();
        String userDwid=session.getAttribute("DWDM").toString();
        String all = request.getParameter("all");
        String zt=request.getParameter("zt");
        if(zt==null)
        {
           zt=" 1=1 ";
        }
        String sql_Query="select * from j_gyjc_gqzd t";
        String whr="";
        if(userdj.equals("6"))
        {
           whr=" where t.gqdm like '"+userDwid+"%'";
        }
        else if(userdj.equals("3"))
        {
           whr=" where t.ddtdm like '"+userDwid+"%'";
        }
        else 
        {
          whr=" where t.cjdm like '"+userDwid+"%'";
        }
        sql_Query=sql_Query+whr+" and jglbdm='1' and "+zt;
        System.out.println("dwSql£º:::::::::::::::::::::"+sql_Query);
       
         String json = "{root:[";
        if(all!=null&&all.equalsIgnoreCase("all")){
        	 json = json+"{value:'ALL',text:'È«²¿'},";
        }
        DbTrade db_connection = new DbTrade();       
        java.sql.ResultSet listResultSet = db_connection
                .executeQuery(sql_Query);
        while (listResultSet.next()) {
            json += "{value:'" + listResultSet.getString("gqdm") + "',text:'" + listResultSet.getString("gqmc")+"'},";
        }
        json = json.substring(0, json.length() - 1);

        json += "]}";

        System.out.println("share/combo_list-----"+json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {

    }
%>


