<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
<%
String jlbh=request.getParameter("jlbh");
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
    
	String sql_update="update Z_YXGL_WXLQKJL  set jlrq="+jlrq
  											+ ",gqmc="+gqmc
  											+ ",ddnr="+ddnr
  											+ ",pzsj="+pzsj
  											+ ",yqwcsj="+yqwcsj
  											+ ",wxlsj="+wxlsj 
  											+ ",txr="+txr
  											+" where jlbh='"+jlbh +"'";											 											
	System.out.println(sql_update);												  												 
  	if (db_connection.executeUpdate(sql_update))
  	{
   		out.print("{success:true,msg:'数据修改成功！'}");
    }
    db_connection.close();
} 

catch(Exception ex) {
	out.print("{success:failure,msg:'数据修改成功！'}");
	System.out.println("Exception wxlqkjl_update.jsp: " + ex.getMessage());
}

%>
