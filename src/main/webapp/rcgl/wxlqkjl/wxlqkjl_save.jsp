<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
//获取客户端提交的字段值

String jlrq=request.getParameter("jlrq");
String gqmc=request.getParameter("gqmc");
String ddnr=request.getParameter("ddnr");
String pzsj=request.getParameter("pzsj");
String yqwcsj=request.getParameter("yqwcsj");
String wxlsj=request.getParameter("wxlsj");
String txr=request.getParameter("txr");


//处理提交值
if (jlrq!=null) {jlrq="to_date('" + jlrq + "','YYYY-MM-DD')" ;}  else{jlrq="''";}
if (gqmc!=null) {gqmc="'" + gqmc + "'" ;}  else{gqmc="''";} 
if (ddnr!=null) {ddnr="'" + ddnr + "'" ;}  else{ddnr="''";}
if (pzsj!=null) {pzsj="'" + pzsj + "'" ;}  else{pzsj="''";}
if (yqwcsj!=null) {yqwcsj="'" + yqwcsj + "'" ;}  else{yqwcsj="''";}
if (wxlsj!=null) {wxlsj="'" + wxlsj + "'" ;}  else{wxlsj="''";}
if (txr!=null) {txr="'" + txr + "'" ;}  else{txr="''";}

DbTrade db_connection=new DbTrade();
try {    
	String sql_save="insert into Z_YXGL_WXLQKJL values(Z_YXGL_WXLQKJL_SEQ.nextval," 
  												+ jlrq +","
  												+ gqmc +","
												+ ddnr +","
  												+ pzsj +","
												+ yqwcsj +","
  												+ wxlsj +","
  												+ txr +")";
	System.out.println(sql_save);												  												
	if (db_connection.executeUpdate(sql_save))
  	{  
   		out.print("{success:true,msg:'数据保存成功！'}");
    }
    db_connection.close();   
} 

catch(Exception ex) {
	out.print("{failure:true,msg:'数据保存失败！'}");
	System.out.println("Exception wxlqkjl_save.jsp: " + ex.getMessage());
}

%>
