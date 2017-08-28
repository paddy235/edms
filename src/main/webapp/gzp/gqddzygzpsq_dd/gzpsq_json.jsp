<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.Date"%>

<%!
public String SetNull(String Str)
    {
    //System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null)
      {
        return " ";
      }
      else
      {
       return Str.replaceAll("\r\n","\\\\r\\\\n");
     }
    }
        private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return " ";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } 
    
    private String convertTime(java.sql.Time value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("HH:mm");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return " ";
      	}
      	else
      	{
       		return dateFormat.format(value);
     	}
    } %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
         String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String jhid=request.getParameter("jhid");
String jhlb= request.getParameter("jhlb");
String dwlb= request.getParameter("dwlb");
String gqid= request.getParameter("gqid");
System.out.println("json:jhlb:"+dwlb);
//dwlb:是判断网工区还是变电所的，以后还要加代码默认0：网工区

String table="";
//网工区
if(dwlb.equals("1"))
{
   if(jhlb.equals("0"))//停电作业
   {
     table="z_yxgl_gzpGq_Green";
   }
   else if(jhlb.equals("1"))//带电作业
   {
     table="z_yxgl_gzpGQ_red";
   }
   else //远离作业
   {
     table="z_yxgl_gzpGq_black";
   }
}
else//变电所
{
   //table="z_yxgl_gzpbds_green";
   if(jhlb.equals("0"))//停电作业
   {
     table="z_yxgl_gzpbds_green";
   }
   else if(jhlb.equals("1"))//带电作业
   {
     table="z_yxgl_gzpbds_red";
   }
   else //远离作业
   {
     table="z_yxgl_gzpbds_black";
   }
}
//String education = request.getParameter("action");
System.out.println("jhlb:"+jhlb);

try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from "+table+" where (gzpzt='100' ) and dwid='"+gqid+"'";
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select * from "+table+" where (gzpzt='100') and dwid='"+gqid+"' order by gzpid desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    
    
    String json = "{totalCount:" +totalCount +",root:[";
   // System.out.pringln();
    while(gridResultSet.next()){
		json += "{xh:" +gridResultSet.getLong("xh")  + 
				",gzpid:"+gridResultSet.getLong("gzpid") +
        		",gzph:'"+gridResultSet.getString("gzph") +"'" +
        		",fpr:'"+ gridResultSet.getString("fpr")+"'"+
        		",fpsj:'"+convertDate(gridResultSet.getDate("fpsj"))+" "+convertTime(gridResultSet.getTime("fpsj"))+"'"+
        		",gzldr:'"+ gridResultSet.getString("gzldr")+"'"+
        		",cgrs:'"+ gridResultSet.getString("cgrs")+"'"+
        		",zynr:'"+ gridResultSet.getString("zynr")+"'"+
        		 ",DDSHY:'"+  SetNull(gridResultSet.getString("DDSHY"))+"'"+
        		",SPSJ:'"+ convertDate(gridResultSet.getDate("SPSJ"))+" "+convertTime(gridResultSet.getTime("SPSJ"))+"'"+
              ",jssj:'"+ convertDate(gridResultSet.getDate("jssj"))+" "+convertTime(gridResultSet.getTime("jssj"))+"'"+
        		",gzpzt:'"+ gridResultSet.getString("gzpzt")+"'"+
        		",sjc:'"+ convertDate(gridResultSet.getDate("sjc"))+" "+convertTime(gridResultSet.getTime("sjc"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    
      System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
