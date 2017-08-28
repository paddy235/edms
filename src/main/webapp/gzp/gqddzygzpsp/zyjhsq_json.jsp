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
    }
     %>
<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
         String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String userDwid="";
if(session.getAttribute("userDwid")!=null)
{
   userDwid=session.getAttribute("userDwid").toString();
}
else
{
   response.sendRedirect("../../login.jsp");
}
System.out.println("userDwid:"+userDwid);
//System.out.println("TYPEdddddddddddddddddd:"+type);

String whereclause="";
if (session.getAttribute("whereclause")!=null){
	whereclause=" trim(wxxm)='"+session.getAttribute("whereclause").toString().trim()+"'";
System.out.println("session:"+whereclause);

}
else
{
//session.setAttribute("whereclause","");
whereclause=" gq.gqdm=jh.dwid and wxxmmc.id=jh.wxxm and jhlx.sxid=jh.jhlx and xb.xldm=jh.xb and  jh.zt='1' and 1=1 order by jhsj desc ";
}
session.removeAttribute("whereclause");
try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	String sql_Query_count="select count(*) from  z_yxgl_zyjh jh,J_gyjc_xlzd xb,J_GDGY_SXZD jhlx,j_gdgy_wxxm wxxmmc,(select gqzd.gqdm from J_GYJC_GQZD gqzd where ddtdm like '"+userDwid+"%' and (jglbdm='1' or jglbdm='2'))  gq where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	String sql_Query="select * from (select rownum xh,temp.* from (select jh.*,xb.xlm,jhlx.sxmc,wxxmmc.name from z_yxgl_zyjh jh,J_gyjc_xlzd xb,J_GDGY_SXZD jhlx,j_gdgy_wxxm wxxmmc,(select gqzd.gqdm from J_GYJC_GQZD gqzd where ddtdm like '"+userDwid+"%' and (jglbdm='1' or jglbdm='2'))  gq where "+ whereclause +") temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    
    
    SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
    
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
        		",nrjyq:'"+ SetNull(gridResultSet.getString("nrjyq"))+"'"+
        		",bz:'"+ SetNull(gridResultSet.getString("bz"))+"'"+
        		",spr:'"+ gridResultSet.getString("spr")+"'"+
        		",zt:'"+ gridResultSet.getString("zt")+"'"+
        		",yxfw:'"+ SetNull(gridResultSet.getString("yxfw"))+"'"+
        		 ",dwmc:'"+ SetNull(gridResultSet.getString("dwmc"))+"'"+
        		",xlm:'"+ SetNull(gridResultSet.getString("xlm"))+"'"+
        		",sxmc:'"+ SetNull(gridResultSet.getString("sxmc"))+"'"+
        		",wxxmmc:'"+ SetNull(gridResultSet.getString("name"))+"'"+
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
