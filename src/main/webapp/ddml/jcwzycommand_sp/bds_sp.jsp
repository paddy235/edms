<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%> 
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.*"%>
<%@page import="java.text.*" %>
<%!
SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");

public String gettime(Date timeDate)
{ 
  if(timeDate==null)
  {
    return "";
  }
  else
  {
    return dateFormat.format(timeDate).toString();
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
 String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
String ddtdm=session.getAttribute("ddtdm").toString();
String ddtmc=session.getAttribute("ddtmc").toString();

String commadid = request.getParameter("commdid");
String mlh = request.getParameter("mlh");
String sldwid = request.getParameter("sldwid");
String sldwmc = request.getParameter("sldwmc");
String flsj = request.getParameter("flsj");
String pzsj = request.getParameter("pzsj");
String slr = request.getParameter("slr");
String flr = request.getParameter("flr");
String mllx = request.getParameter("mllx");
String czkah = request.getParameter("czkah");
String mlnr = request.getParameter("mlnr");
String czkpmc = request.getParameter("czkpmc");
String tsdqj = request.getParameter("tsdqj");
String mlbz = request.getParameter("mlbz");
String xlsj = request.getParameter("xlsj");
String xlr = request.getParameter("xlr");
String ddy = request.getParameter("ddy");
String czlx=request.getParameter("czlx");
String jhid=request.getParameter("jhid");
System.out.println("jhid:"+jhid);
String pcl=request.getParameter("pcl");

System.out.println("pcl:"+pcl);
String [] str_pcl =pcl.split(",");
System.out.println(str_pcl.length);


System.out.println("czlx:"+czlx);
System.out.println("czkah:"+czkah);
//String education = request.getParameter("action");
DbTrade dbTrade_sp=new DbTrade();
String sql_upd="";
if(czkpmc.equals("")||mlnr.equals(""))
{
    for(int i=0;i<str_pcl.length;i++)
    {
      sql_upd=sql_upd+"update z_yxgl_cmd_bdsdz set mlzt='2',ddy='',czlx='"+czlx+"' where commdid='"+str_pcl[i]+"';";
    }
    sql_upd="Begin "+sql_upd+" End;";
}
else
{
    sql_upd=sql_upd+"update z_yxgl_cmd_bdsdz set czkah='"+czkpmc+"',mlnr='"+mlnr+"',mlzt='2',ddy='',czlx='"+czlx+"' where commdid='"+commadid+"';";
}
System.out.println("pcl:::::::"+sql_upd);
///添加停送电统计薄
  //1、根据计划查找要插入的内容  z_tjbb_tsddjb
  String sql_tdtjb="select * from z_yxgl_zyjh where id='"+jhid+"'";
  java.sql.ResultSet gridResultSet_jh=dbTrade_sp.executeQuery(sql_tdtjb);
  gridResultSet_jh.next();
  String tzb_tddd=gridResultSet_jh.getString("sgdd");
  String tzb_tddy=gridResultSet_jh.getString("nrjyq");
  String tzb_qzsj=gettime(gridResultSet_jh.getDate("jhsj"));
  System.out.println("________+++++++");
  String tzb_ydsj=gridResultSet_jh.getString("ydsj");
  String tzb_tgdddy=(String)session.getAttribute("YHMC");
  System.out.println(" tddd"+tzb_tddd+"  tddy:"+tzb_tddy+"  qzsj:"+tzb_qzsj+"   _tgdddy"+tzb_tgdddy);
  gridResultSet_jh.close();
  //连接数据库
		DbTrade db_connection=new DbTrade(); 
		int maxid=0;
   		String sql_tsd="select max(TDSBH) maxid from z_tjbb_tsddjb";
   		ResultSet rs=db_connection.executeQuery(sql_tsd);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}
   		DecimalFormat frmString=new DecimalFormat("0000"); 
		//案例编码贯穿其它两个表
		String TDSMAXBH=frmString.format(maxid);//格式化案例编码
		String sql_int="insert into z_tjbb_tsddjb(TDSBH,TSDRQ,QJDD,TDDY,QZSJ,T_GDDDY,BK,ZT) values('"
			+TDSMAXBH+"',to_date('"+tzb_qzsj+"','yyyy-mm-dd'),'"+tzb_tddd+"','"+tzb_tddy+"','"+tzb_ydsj+"','"+tzb_tgdddy+"','','0')";
		System.out.println("+++++"+sql_int);
		db_connection.executeUpdate(sql_int);
		db_connection.close();
		//session.setAttribute("albm", albm);
	
try {
 
  System.out.println("asdfadfadfs:"+sql_upd);
  dbTrade_sp.executeUpdate(sql_upd);
  //查看计划对应的所有的命令是否全部审核通过
  String sql_count_bds="select count(*) from z_yxgl_cmd_bdsdz where jhid="+jhid;
  String sql_count_bds_sp="select count(*) from z_yxgl_cmd_bdsdz where mlzt='2' and jhid="+jhid;
  String sql_count_kg="select count(*) from z_yxgl_cmd_glkgdz where jhid="+jhid;
  String sql_count_kg_sp="select count(*) from z_yxgl_cmd_glkgdz where mlzt='2'and jhid="+jhid;
  String sql_count_zy="select count(*) from z_yxgl_cmd_jcwzy where jhid="+jhid;
  String sql_count_zy_sp="select count(*) from z_yxgl_cmd_jcwzy where mlzt='2' and jhid="+jhid;
  java.sql.ResultSet resultset_bds_count=dbTrade_sp.executeQuery(sql_count_bds);
  java.sql.ResultSet resultset_bds_count_all=dbTrade_sp.executeQuery(sql_count_bds_sp);
  java.sql.ResultSet resultset_kg_count=dbTrade_sp.executeQuery(sql_count_kg);
  java.sql.ResultSet resultset_kg_count_all=dbTrade_sp.executeQuery(sql_count_kg_sp);
  java.sql.ResultSet resultset_zy_count=dbTrade_sp.executeQuery(sql_count_zy);
  java.sql.ResultSet resultset_zy_count_all=dbTrade_sp.executeQuery(sql_count_zy_sp);
  resultset_bds_count.next();
  resultset_bds_count_all.next();
  resultset_kg_count.next();
  resultset_kg_count_all.next();
  resultset_zy_count.next();
  resultset_zy_count_all.next();
  int bds_count=resultset_bds_count.getInt(1);
  int bds_count_all=resultset_bds_count_all.getInt(1);
  int kg_count=resultset_kg_count.getInt(1);
  int kg_count_all=resultset_kg_count_all.getInt(1);
  int zy_count=resultset_zy_count.getInt(1);
  int zy_count_all=resultset_zy_count_all.getInt(1);
  System.out.println("bds_count:"+bds_count+"bds_count_all:"+bds_count_all+"kg_count:"+kg_count+"kg_count_all:"+kg_count_all+"zy_count:"+zy_count+"zy_count_all:"+zy_count_all);
  //命令全部通过审批，计划的状态改变
  if(bds_count==bds_count_all&&kg_count==kg_count_all&&zy_count==zy_count_all)
  {
     String sql_update_jh="update z_yxgl_zyjh set zt='6' where id="+jhid;
     dbTrade_sp.executeUpdate(sql_update_jh);
  }
  dbTrade_sp.close();
  out.print("{success:true,msg:'命令审批成功！'}");
} 

catch(Exception ex) {
}

%>
