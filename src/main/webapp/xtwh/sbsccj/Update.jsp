<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//String start = request.getParameter("start");
//String limit = request.getParameter("limit");
//String education = request.getParameter("action");
String NAME = request.getParameter("NAME");
String ID = request.getParameter("ID");
String GLSB = request.getParameter("GLSB");
System.out.println("startduUUUUUUU:"+ID);


try {
    
   
    
    
    

    DbTrade db_connection=new DbTrade();
	
	
	
	//String sql_Query_count="select count(*) from z_yxgl_zyjh where "+whereclause;
	
	//java.sql.ResultSet grXBIDResultSet_count=db_connection.executeQuery(sql_Query_count);
	//grXBIDResultSet_count.next();
	//totalCount=grXBIDResultSet_count.getInt(1);
	
	//out.println(totalCount);
	
	//String sql_Add="insert into z_yxgl_zyjh values(z_yxgl_zyjhSquence.Nextval,'"+zylb+"','"+sgdd+"',to_date('"+ksrq+"','YYYY-MM-DD'),'01','������ҵ','��ɳ���޹���','60','2','��ɳ�����','Jhon','01',to_date('2009-09-03','YYYY-MM-DD'),'good good good','ע�ⰲȫ','Tom','1','Ӱ�췶Χ',to_date('2009-09-03','YYYY-MM-DD'))";
	String sql_Upd="update J_GDGY_SBSCCJ set NAME='"+NAME+"',GLSB='"+GLSB+"' where ID="+ID;
	//out.println(sql_Query);
	System.out.println(sql_Upd);

	db_connection.executeUpdate(sql_Upd);
    
    
    
   
    //out.println(json);
   
     
     out.print("{success:true,msg:'�޸ĳɹ�'}");
     
} 

catch(Exception ex) {
     out.print("{success:false,msg:'�޸�ʧ�ܣ�'}");
}

%>