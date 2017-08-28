<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.WebService.*"%>

<%@page import="net.sf.json.*"%>
<%@page import="java.util.*"%>

<%@page import="java.text.SimpleDateFormat"%>
<%!   public static Object[] getJsonToArray(String str) {  
     JSONArray jsonArray = JSONArray.fromObject(str);  
     return jsonArray.toArray();  
 } 
 
 %>
<%
String dates=request.getParameter("whereclause");
 System.out.println(dates); 
 if(dates==null)
 {
 SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
 Date now = new Date(); 
 dates=dateFormat.format(now);
 }
  String strMessage=WebServiceUtils.invokeDemo(dates)[0].toString();
  System.out.println(strMessage); 
  JSONArray array = JSONArray.fromObject("["+strMessage+"]");
  JSONObject object = JSONObject.fromObject(array.get(0));
  //System.out.println(object.get("object1"));  
  Object[] obj=getJsonToArray(object.get("object1").toString());  
  
  String json = "{totalCount:" +obj.length +",root:"; 
      json+=object.get("object1").toString(); 
 json += "}";
   response.getWriter().write(json);
%>
