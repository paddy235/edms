<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String LJDM = request.getParameter("LJDM");
String LJPYM = request.getParameter("LJPYM");
String LJQC = request.getParameter("LJQC");
String LJJC = request.getParameter("LJJC");
String LJPXM = request.getParameter("LJPXM");
System.out.println("startduUUUUUUU:"+LJDM);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_count);
	//gridResultSet_count.next();
	//totalCount=gridResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	//String sql_Add="insert into z_yxgl_zyjh values(z_yxgl_zyjhSquence.Nextval,'"+zylb+"','"+sgdd+"',to_date('"+ksrq+"','YYYY-MM-DD'),'01','������ҵ','��ɳ���޹���','60','2','��ɳ�����','Jhon','01',to_date('2009-09-03','YYYY-MM-DD'),'good good good','ע�ⰲȫ','Tom','1','Ӱ�췶Χ',to_date('2009-09-03','YYYY-MM-DD'))";
	String sql_Upd="update J_GYJC_LJZD set LJPYM='"+LJPYM+"',LJQC='"+LJQC+"',LJJC='"+LJJC+"',LJPXM='"+LJPXM+"' where LJDM="+LJDM;
	//out.println(sql_Query);
	System.out.println(sql_Upd);
	//java.sql.ResultSet gridResultSet=
	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'�޸ĳɹ�!'}");
     
} 

catch(Exception ex) {
      //System.out.println("�޸�ʧ�ܣ�"+ex.getMessage() );
     out.print("{success:false,msg:'�޸�ʧ�ܣ�'}");
}

%>
