<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
//��ȡ�ͻ����ύ���ֶ�ֵ
String fssj=request.getParameter("fssj");
String fsdd=request.getParameter("fsdd");
String fsyy=request.getParameter("fsyy");
String fsnr=request.getParameter("fsnr");
String djr=request.getParameter("djr");
String jcsj=request.getParameter("jcsj");
String jcr=request.getParameter("jcr");
String bz=request.getParameter("bz");
//�����ύֵ
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
   		out.print("{success:true,msg:'������ӳɹ���'}");
    }
    db_connection.close();   
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'�������ʧ�ܣ�'}");
	System.out.println("Exception wgztyfs_Save.jsp: " + ex.getMessage());
}

%>
