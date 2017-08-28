<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
 
<%
    String ddtdm=session.getAttribute("userDwid").toString();
    String dwid=request.getParameter("dwid");
    String where="";
    if(dwid.equals("0"))
    {
       where ="";
       System.out.print("页面首次加载");
    }
    else 
    {
    System.out.print("页面第二次加载");
       where =" and dwid="+dwid;
    }
    try {
    System.out.println("*******************");
        String sql_Query =" select * from J_gdgy_Czkp kp,(select gq.gqdm from J_GYJC_GQZD gq where ddtdm=\'"+ddtdm+"\') gq where kp.lb='0' and  kp.dwid=gq.gqdm"+where;
        System.out.println("kpkpkp:"+sql_Query);
        String all = request.getParameter("all");
        System.out.println("asdf:"+sql_Query);
        System.out.println("all:"+all);
         String json = "{root:[";
        if(all!=null&&all.equalsIgnoreCase("all")){
        	 json = json+"{value:'全部',text:'全部'},";
        }
        DbTrade db_connection = new DbTrade();       
        java.sql.ResultSet listResultSet = db_connection.executeQuery(sql_Query);
        while (listResultSet.next()) {
            json += "{value:'" + listResultSet.getString(4) + "',text:'" + listResultSet.getString(6)+"'},";
        }
        json = json.substring(0, json.length() - 1);

        json += "]}";

        System.out.println("share/combo_listkpkpkpkpkp-----"+json);

        response.getWriter().write(json);

        db_connection.close();
    } catch (Exception ex) {

    }
%>


