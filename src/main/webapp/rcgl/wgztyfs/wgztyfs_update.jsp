<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>

<%
String seq = request.getParameter("seq");
String fssj = request.getParameter("fssj");
String fsdd = request.getParameter("fsdd");
String fsyy = request.getParameter("fsyy");
String fsnr = request.getParameter("fsnr");
String djr = request.getParameter("djr");
String jcsj = request.getParameter("jcsj");
String jcr = request.getParameter("jcr");
String bz = request.getParameter("bz");
System.out.println("SEQ: " + seq);

//处理提交值
if (fssj!=null) {fssj="to_date('" + fssj + "','YYYY-MM-DD hh24:mi')" ;}  else{fssj="''";}
if (fsdd!=null) {fsdd="'" + fsdd + "'" ;}  else{fsdd="''";} 
if (fsyy!=null) {fsyy="'" + fsyy + "'" ;}  else{fsyy="''";} 
if (fsnr!=null) {fsnr="'" + fsnr + "'" ;}  else{fsnr="''";}
if (djr!=null) {djr="'" + djr + "'" ;}  else{djr="''";}
if (jcsj!=null) {jcsj="to_date('" + jcsj + "','YYYY-MM-DD hh24:mi')" ;}  else{jcsj = "''";}
if (jcr!=null) {jcr="'" + jcr + "'" ;}  else{jcr="''";}
if (bz!=null) {bz="'" + bz + "'" ;}  else{bz="''";}
String sql_update = " ";
DbTrade db_connection=new DbTrade();
try {
	sql_update = "update z_yxgl_wgztyfs set fssj=" + fssj +", fsyy=" + fsyy + ", fsnr=" + fsnr + ", djr=" + djr + ", jcsj=" + jcsj + ", bz=" + bz + ",jcr=" + jcr + ", fsdd="+ fsdd 
				+ " where seq= " + seq ;    										
	System.out.println(sql_update);		
	db_connection.executeUpdate(sql_update)	;
   		out.print("{success:true,msg:'数据修改成功！'}");
    db_connection.close();
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'数据修改失败！'}");
	System.out.println("wgztyfs_update.jsp: " + ex.getMessage());
}

%>
