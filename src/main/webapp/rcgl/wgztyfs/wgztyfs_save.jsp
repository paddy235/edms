<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
//获取客户端提交的字段值
String fssj=request.getParameter("fssj");
String fsdd=request.getParameter("fsdd");
String fsyy=request.getParameter("fsyy");
String fsnr=request.getParameter("fsnr");
String djr=request.getParameter("djr");
String jcsj=request.getParameter("jcsj");
String jcr=request.getParameter("jcr");
String bz=request.getParameter("bz");
//处理提交值
if (fssj!=null) {fssj="to_date('" + fssj + "','YYYY-MM-DD hh24:mi')" ;}  else{fssj="''";}
if (fsdd!=null) {fsdd="'" + fsdd + "'" ;}  else{fsdd="''";} 
if (fsyy!=null) {fsyy="'" + fsyy + "'" ;}  else{fsyy="''";} 
if (fsnr!=null) {fsnr="'" + fsnr + "'" ;}  else{fsnr="''";}
if (djr!=null) {djr="'" + djr + "'" ;}  else{djr="''";}
if (jcsj!=null) {jcsj="to_date('" + jcsj + "','YYYY-MM-DD hh24:mi')" ;}  else{jcsj="''";}
if (jcr!=null) {jcr="'" + jcr + "'" ;}  else{jcr="''";}
if (bz!=null) {bz="'" + bz + "'" ;}  else{bz="''";}
DbTrade db_connection=new DbTrade();
try {   
	 String sql_save="insert into z_yxgl_wgztyfs(seq,fssj,fsyy,fsnr,djr,jcsj,bz,jcr,fsdd) values(WGZTYFS_SEQ.nextval," 
  												+ fssj +","  												
  												+ fsyy +","
												+ fsnr +","
  												+ djr +","
												+ jcsj +","
  												+ bz +","
  												+ jcr +","
  												+ fsdd +")";
	System.out.println(sql_save);												  												
	if (db_connection.executeUpdate(sql_save))
  	{  
   		out.print("{success:true,msg:'数据添加成功！'}");
    }
    db_connection.close();   
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'数据添加失败！'}");
	System.out.println("Exception wgztyfs_Save.jsp: " + ex.getMessage());
}

%>
