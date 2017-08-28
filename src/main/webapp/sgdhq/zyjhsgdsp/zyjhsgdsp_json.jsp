<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>

<%!   public String SetNull(String Str)
    {
    //System.out.println("NUNUNUNNUNUNUU:"+Str);
      if(Str==null)
      {
        return "";
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
    } 
    %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String userDwid="";
if(session.getAttribute("userDwid")!=null)
{
   userDwid=session.getAttribute("userDwid").toString();
}
else
{
   response.sendRedirect("../../login.jsp");
}
//System.out.println("userDwid:"+userDwid);
//System.out.println("start:"+start);
//System.out.println("limit:"+limit);
//String type=request.getParameter("cz");

//String education = request.getParameter("action");
//System.out.println("TYPEdddddddddddddddddd:"+type);

String whereclause="";
//if (session.getAttribute("whereclause")!=null){
	//whereclause=" trim(wxxm)='"+session.getAttribute("whereclause").toString().trim()+"'";
//System.out.println("session:"+whereclause);

//}
//else
//{
//这是一段写死的临时代码，通过单位代码021，判断该用户是电调主任，具备审批3－>4的权限
String zt="4";

whereclause="gq.gqdm=jh.dwid and jhlx.sxid=jh.jhlx and xb.xldm=jh.xb and  jh.zt='"+zt+"' order by jhsj desc";
//System.out.println("TYPEdddddddddddddddddd:"+whereclause);
   
 
session.removeAttribute("whereclause");
try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from z_yxgl_zyjh jh,J_gyjc_xlzd xb,J_GDGY_SXZD jhlx, J_GYJC_GQZD  gq  where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select jh.*,xb.xlm,jhlx.sxmc from z_yxgl_zyjh jh,J_gyjc_xlzd xb,J_GDGY_SXZD jhlx,J_GYJC_GQZD  gq   where "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	//System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
 
 
    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		
		
		json += "{id:" +gridResultSet.getLong("id")  + 
				",xh:"+gridResultSet.getLong("xh") +
        		",dwid:'"+gridResultSet.getString("dwid") +"'" +
        		",jhh:'"+ gridResultSet.getString("jhh")+"'"+
        		",jhsj:'"+ convertDate(gridResultSet.getDate("jhsj"))+" "+convertTime(gridResultSet.getTime("jhsj"))+"'"+
        		",xianb:'"+ gridResultSet.getString("xb")+"'"+
        		",xingb:'"+ gridResultSet.getString("xingb")+"'"+
        		",jhlb:'"+ gridResultSet.getString("jhlb")+"'"+
        		",sgdd:'"+ gridResultSet.getString("sgdd")+"'"+
        		",ydsj:'"+ gridResultSet.getString("ydsj")+"'"+
        		",wxxm:'"+ gridResultSet.getString("wxxm")+"'"+
        		",phdw:'"+ gridResultSet.getString("phdw")+"'"+
        		",fzr:'"+ gridResultSet.getString("fzr")+"'"+
        		",jhlx:'"+ gridResultSet.getString("jhlx")+"'"+
        		",tbsj:'"+ convertDate(gridResultSet.getDate("tbsj"))+" "+convertTime(gridResultSet.getTime("tbsj"))+"'"+
        		",nrjyq:'"+SetNull( gridResultSet.getString("nrjyq"))+"'"+
        		",bz:'"+ SetNull(gridResultSet.getString("bz"))+"'"+
        		",spr:'"+ gridResultSet.getString("spr")+"'"+
        		",zt:'"+ gridResultSet.getString("zt")+"'"+
        		",yxfw:'"+ SetNull(gridResultSet.getString("yxfw"))+"'"+
        		",mlh:'"+ SetNull(gridResultSet.getString("mlh"))+"'"+
        		",ylz:'"+ SetNull(gridResultSet.getString("ylz"))+"'"+
        		",fsfw:'"+ SetNull(gridResultSet.getString("fsfw"))+"'"+
        		",jhnr:'"+ SetNull(gridResultSet.getString("jhnr"))+"'"+
        		 ",dwmc:'"+ SetNull(gridResultSet.getString("dwmc"))+"'"+
        		",xlm:'"+ SetNull(gridResultSet.getString("xlm"))+"'"+
        		",sxmc:'"+ SetNull(gridResultSet.getString("sxmc"))+"'"+
        		",gdcnr:'"+ SetNull(gridResultSet.getString("gdcnr"))+"'"+
        		",sjc:'"+ convertDate(gridResultSet.getDate("sjc"))+" "+convertTime(gridResultSet.getTime("tbsj"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    
   // System.out.println(json);
    response.getWriter().write(json);
    //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
