<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String start = request.getParameter("start");
String limit = request.getParameter("limit");
String whereclause = request.getParameter("whereclause");
System.out.println("whereclause" + whereclause);


try {
    
    int index = Integer.parseInt(start);
    int pageSize = Integer.parseInt(limit);
    
    
    int totalCount=0;

    DbTrade db_connection=new DbTrade();
	
	
	
	String sql_Query_count="select count(*) from z_qxfz_sgsb where "+whereclause;
	
	java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	gridResultSet_count.next();
	totalCount=gridResultSet_count.getInt(1);
	
	
	String sql_Query="select * from (select rownum xh,temp.* from (select gzid,to_char(gzfssj,'yyyy-mm-dd hh24:mi')gzfssj,gzdd,(select name from j_gdgy_wxxm m where m.id=gzlb)as gzlbname,gzlb,tdqd,yxfw,zrbz,to_char(gstzsj,'yyyy-mm-dd hh24:mi')gstzsj,to_char(ysdtzsj,'yyyy-mm-dd hh24:mi')ysdtzsj,to_char(bztzsj,'yyyy-mm-dd hh24:mi')bztzsj,yxlc,zzcdbz,to_char(sj1,'yyyy-mm-dd hh24:mi')sj1,rs1,zzddbz,to_char(sj2,'yyyy-mm-dd hh24:mi')sj2,rs2,qxldr,zw,zrs,to_char(tdkssj,'yyyy-mm-dd hh24:mi')tdkssj,to_char(tdjssj,'yyyy-mm-dd hh24:mi')tdjssj,ztdsj,to_char(qxkssj,'yyyy-mm-dd hh24:mi')qxkssj,to_char(qxjssj,'yyyy-mm-dd hh24:mi')qxjssj,zqxsj,sbqk,cljg,yy,jxqkjl,zbddy,to_char(tbsj,'yyyy-mm-dd hh24:mi')tbsj from z_qxfz_sgsb where "+ whereclause +" order by tbsj desc) temp) where xh between "+ (index+1) +" and "+ (pageSize + index);
	
	System.out.println(sql_Query);
	java.sql.ResultSet gridResultSet=db_connection.executeQuery(sql_Query);
   //System.out.println("kjshoie");

    
    String json = "{totalCount:" +totalCount +",root:[";
    
    while(gridResultSet.next()){
		System.out.println("###########Êý¾ÝÄØ:"+gridResultSet.getString(32));
		
		json += "{gzfssj:'"+gridResultSet.getString("gzfssj")+"'" +
		        ",gzid:"+gridResultSet.getLong("gzid") +
        		",gzdd:'"+ gridResultSet.getString("gzdd")+"'"+
        		",gzlb:'"+ gridResultSet.getString("gzlb")+"'"+
        		",gzlbname:'"+ gridResultSet.getString("gzlbname")+"'"+
        		",tdqd:'"+ (gridResultSet.getString("tdqd")==null?"":gridResultSet.getString("tdqd"))+"'"+
        		",yxfw:'"+ (gridResultSet.getString("yxfw")==null?"":gridResultSet.getString("yxfw"))+"'"+
        		",zrbz:'"+ (gridResultSet.getString("zrbz")==null?"":gridResultSet.getString("zrbz"))+"'"+
        		",gstzsj:'"+ (gridResultSet.getString("gstzsj")==null?"":gridResultSet.getString("gstzsj"))+"'"+
        		",ysdtzsj:'"+ (gridResultSet.getString("ysdtzsj")==null?"":gridResultSet.getString("ysdtzsj"))+"'"+
        		",bztzsj:'"+ (gridResultSet.getString("bztzsj")==null?"":gridResultSet.getString("bztzsj"))+"'"+
        		",yxlc:'"+ (gridResultSet.getString("yxlc")==null?"":gridResultSet.getString("yxlc"))+"'"+
        		",zzcdbz:'"+ (gridResultSet.getString("zzcdbz")==null?"":gridResultSet.getString("zzcdbz"))+"'"+
        		",sj1:'"+ (gridResultSet.getString("sj1")==null?"":gridResultSet.getString("sj1"))+"'"+
        		",rs1:'"+ (gridResultSet.getString("rs1")==null?"":gridResultSet.getString("rs1"))+"'"+
        		",zzddbz:'"+ (gridResultSet.getString("zzddbz")==null?"":gridResultSet.getString("zzddbz"))+"'"+
        		",sj2:'"+ (gridResultSet.getString("sj2")==null?"":gridResultSet.getString("sj2"))+"'"+
        		",rs2:'"+ (gridResultSet.getString("rs2")==null?"":gridResultSet.getString("rs2"))+"'"+
        		",qxldr:'"+ (gridResultSet.getString("qxldr")==null?"":gridResultSet.getString("qxldr"))+"'"+
        	    ",zw:'"+ (gridResultSet.getString("zw")==null?"":gridResultSet.getString("zw"))+"'"+
        	    ",zrs:'"+ (gridResultSet.getString("zrs")==null?"":gridResultSet.getString("zrs"))+"'"+
        	    ",tdkssj:'"+ (gridResultSet.getString("tdkssj")==null?"":gridResultSet.getString("tdkssj"))+"'"+
        	    ",tdjssj:'"+ (gridResultSet.getString("tdjssj")==null?"":gridResultSet.getString("tdjssj"))+"'"+
        	    ",ztdsj:'"+ (gridResultSet.getString("ztdsj")==null?"":gridResultSet.getString("ztdsj"))+"'"+
        	    ",qxkssj:'"+ (gridResultSet.getString("qxkssj")==null?"":gridResultSet.getString("qxkssj"))+"'"+
        	    ",qxjssj:'"+ (gridResultSet.getString("qxjssj")==null?"":gridResultSet.getString("qxjssj"))+"'"+
        	    ",zqxsj:'"+ (gridResultSet.getString("zqxsj")==null?"":gridResultSet.getString("zqxsj"))+"'"+
        	    ",sbqk:'"+ (gridResultSet.getString("sbqk")==null?"":gridResultSet.getString("sbqk"))+"'"+
        	    ",cljg:'"+ (gridResultSet.getString("cljg")==null?"":gridResultSet.getString("cljg"))+"'"+
        	    ",yy:'"+ (gridResultSet.getString("yy")==null?"":gridResultSet.getString("yy"))+"'"+
        	    ",jxqkjl:'"+ (gridResultSet.getString("jxqkjl")==null?"":gridResultSet.getString("jxqkjl"))+"'"+
        	    ",zbddy:'"+ (gridResultSet.getString("zbddy")==null?"":gridResultSet.getString("zbddy"))+"'"+
        		",tbsj:'"+ (gridResultSet.getString("tbsj")==null?"":gridResultSet.getString("tbsj"))+"'},";
    }
    if (totalCount!=0)
    {
    	json=json.substring(0,json.length()-1);
  	}
    json += "]}";
    
    System.out.println(json);
    response.getWriter().write(json);
     //out.print("{success:true,msg:'"+education+ "'}");
} 

catch(Exception ex) {
}

%>
