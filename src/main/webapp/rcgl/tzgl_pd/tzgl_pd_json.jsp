<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>


<%!   
	private String convertNull(String value)
    {
    	//System.out.println("value:"+value);
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
      	}
      	else
      	{
       		return value.replaceAll("\r\n","\\\\r\\\\n");
     	}
    }
    
    private String convertDate(java.sql.Date value)
    {
    	//System.out.println("value:"+value);
    	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
      	if(value==null)
      	{
       		//System.out.println("value:"+value);
       		return "";
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
       		return "";
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
String whereclause=request.getParameter("whereclause");

//String education = request.getParameter("action");
//System.out.println("chenzhen:");





try {
    
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
   
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	String sql_Query_count="select count(*) from (select yd.*,gq.gqdm as dm,gq.ddtdm from Z_YXGL_DLGZJL yd,j_gyjc_gqzd gq where gq.gqdm=yd.gqpym and yd.ztbz='0') gz,j_gyjc_gqzd gq where  gz.gqpym=gq.gqdm and "+whereclause;
	
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select gz.*,to_char(gz.bgsj,'yyyy-mm-dd hh24:mi') bgsj1,to_char(gz.fhsj,'yyyy-mm-dd hh24:mi') fhsj1,to_char(gz.rksj,'yyyy-mm-dd hh24:mi') rksj1,to_char(gz.hfsj,'yyyy-mm-dd hh24:mi') hfsj1,gq.gqmc,gq.gqdm from  (select yd.*,gq.gqdm as dm from Z_YXGL_DLGZJL yd,j_gyjc_gqzd gq where gq.gqdm=yd.gqpym and yd.ztbz='0') gz,j_gyjc_gqzd gq where  gz.gqpym=gq.gqdm  and "+ whereclause +" order by gz.bgsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	//out.println(sql_Query);
	//System.out.println("totalcount"+sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
    String json = "{totalCount:" +totalCount +",root:[";
    while(gridResultSet.next()){
		json += "{xh:" +gridResultSet.getLong("xh")  +
				",ydsgbm:" +gridResultSet.getLong("ydsgbm")  + 
        		",ydbgbh:'"+convertNull(gridResultSet.getString("ydbgbh")) +"'" +
        		",rksj:'"+ convertNull(gridResultSet.getString("rksj1"))+"'"+
        		",bgsj:'"+ convertNull(gridResultSet.getString("bgsj1"))+"'"+
        		",gqpym:'"+ convertNull(gridResultSet.getString("GQPYM"))+"'"+
        		",bhzzdm:'"+ convertNull(gridResultSet.getString("bhzzdm"))+"'"+//保护
        		",gzms:'"+ convertNull(gridResultSet.getString("gzms"))+"'"+
        		",sgjl:'"+ convertNull(gridResultSet.getString("sgjl"))+"'"+
        		",ztbz:'"+ convertNull(gridResultSet.getString("ztbz"))+"'"+
        		",chzzt:'"+ convertNull(gridResultSet.getString("chzzt"))+"'"+
        		",gzbh:'"+ convertNull(gridResultSet.getString("gzbh"))+"'"+
        		",gqmc:'"+ convertNull(gridResultSet.getString("gqmc"))+"'"+
        		",gqdm:'"+ convertNull(gridResultSet.getString("gqdm"))+"'"+
        		",kgh:'"+ convertNull(gridResultSet.getString("kgh"))+"'"+
        		",tzyy:'"+ convertNull(gridResultSet.getString("tzyy"))+"'"+
        		",fhsj:'"+ convertNull(gridResultSet.getString("fhsj1"))+"'"+
        		",tdsf:'"+ convertNull(gridResultSet.getString("tdsf"))+"'"+
        		",lb:'"+ convertNull(gridResultSet.getString("lb"))+"'"+
        		",bz:'"+ convertNull(gridResultSet.getString("bz"))+"'"+
        		",ddy:'"+ convertNull(gridResultSet.getString("ddy"))+"'"+
        		",sjgzdd:'"+ convertNull(gridResultSet.getString("sjgzdd"))+"'"+  //实际故障地点
        		",xb_add:'"+ convertNull(gridResultSet.getString("xb"))+"'"+//线别
        		",kgh:'"+ convertNull(gridResultSet.getString("kgh"))+"'"+//线别
        		",bhzzmc:'"+ convertNull(gridResultSet.getString("bhzzmc"))+"'"+//线别
        		",shr:'"+ convertNull(gridResultSet.getString("shr"))+"'"+//审核人
        		",bztzt:'"+ convertNull(gridResultSet.getString("bztzt"))+"'"+//审核人
        		
        		",hfsj:'"+ convertNull(gridResultSet.getString("hfsj1"))+"'"+
        		",djr:'"+ convertNull(gridResultSet.getString("djr"))+"'"+
        		
        		",tdqd:'"+ convertNull(gridResultSet.getString("tdqd"))+"'},";
	}
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    //out.println(json);
    db_connection.close();
    //System.out.println("______"+json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
