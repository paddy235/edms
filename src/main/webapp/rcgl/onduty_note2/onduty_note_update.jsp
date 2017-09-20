<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//获取客户端提交的字段值
String dwid="01000";
String dwmc="武广客专电调";
//String dwmc=request.getParameter("dwmc");
System.out.println(dwmc);	

String jsid=request.getParameter("jsid");
//update所用primary key
	
String tq=request.getParameter("tq");
String jssj=request.getParameter("jssj");
String sfjbrqr=request.getParameter("sfjbrqr");
String jsnr=request.getParameter("jsnr");
String jbrqr=request.getParameter("jbrqr");

//处理提交值
if (dwid!=null) {dwid="'" + dwid + "'" ;}  else{dwid="''";}
if (dwmc!=null) {dwmc="'" + dwmc + "'" ;}  else{dwmc="''";} 
if (tq!=null) {tq="'" + tq + "'" ;}  else{tq="''";}
if (jssj!=null) {jssj="to_date('" + jssj + "','YYYY-MM-DD hh24:mi')" ;}  else{jssj="''";}
if (sfjbrqr!=null) {sfjbrqr="'" + sfjbrqr + "'" ;}  else{sfjbrqr="''";}
if (jsnr!=null) {jsnr="'" + jsnr + "'" ;}  else{jsnr="''";}
if (jbrqr!=null) {jbrqr="'" + jbrqr + "'" ;}  else{jbrqr="''";}


DbTrade db_connection=new DbTrade();
try {
    
	String sql_update="update z_yxgl_zbjs2  set dwid="+dwid
  											+ ",dwmc="+dwmc
  											+ ",tq="+tq
  											+ ",jssj="+jssj
  											+ ",sfjbrqr="+sfjbrqr
  											+ ",jsnr="+jsnr
  											+ ",jbrqr="+jbrqr 
  											+" where jsid="+jsid;
  												
  												
  												
  											
	System.out.println(sql_update);												  												
  												
  
  
  	if (db_connection.executeUpdate(sql_update))
  	{
  
   		out.print("{success:true,msg:'数据修改成功！'}");
    }
    db_connection.close();
} 

catch(Exception ex) {
}

%>
