<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
String qxid=request.getParameter("qxid");
String dwmc="";
String dwid=request.getParameter("dwid");
String qjbh=request.getParameter("qjmc");
String qjmc=request.getParameter("qjmc");
String xb=request.getParameter("xb");
String gh=request.getParameter("gh");
String fxsj=request.getParameter("fxsj");
String sbmc=request.getParameter("sbmc");
String qxnr=request.getParameter("qxnr");
String qxdj=request.getParameter("qxdj");
String fkr=request.getParameter("fkr");
String fkbm=request.getParameter("fkbm");
String zrr=request.getParameter("zrr");
String zrbm=request.getParameter("zrbm");
String cljg=request.getParameter("cljg");
String xjsj=request.getParameter("xjsj");
String xlbgr=request.getParameter("xlbgr");
String clfzr=request.getParameter("clfzr");
String clcs=request.getParameter("clcs");
String clgc=request.getParameter("clgc");


//处理提交值
if (dwid!=null) {dwid="'" + dwid + "'" ;}  else{dwid="''";}
if (dwmc!=null) {dwmc="'" + dwmc + "'" ;}  else{dwmc="''";} 
if (qjbh!=null) {qjbh="'" + qjbh + "'" ;}  else{qjbh="''";}
if (qjmc!=null) {qjmc="'" + qjmc + "'" ;}  else{qjmc="''";}
if (xb!=null) {xb="'" + xb + "'" ;}  else{xb="''";}
if (gh!=null) {gh="'" + gh + "'" ;}  else{gh="''";}
if (fxsj!=null) {fxsj="to_date('" + fxsj + "','YYYY-MM-DD hh24:mi')" ;}  else{fxsj="''";}
if (sbmc!=null) {sbmc="'" + sbmc + "'" ;}  else{sbmc="''";}
if (qxnr!=null) {qxnr="'" + qxnr + "'" ;}  else{qxnr="''";}
if (qxdj!=null) {qxdj="'" + qxdj + "'" ;}  else{qxdj="''";}
if (fkr!=null) {fkr="'" + fkr + "'" ;}  else{fkr="''";}
if (fkbm!=null) {fkbm="'" + fkbm + "'" ;}  else{fkbm="''";}
if (zrr!=null) {zrr="'" + zrr + "'" ;}  else{zrr="''";}
if (zrbm!=null) {zrbm="'" + zrbm + "'" ;}  else{zrbm="''";}
if (cljg!=null) {cljg="'" + cljg + "'" ;}  else{cljg="''";}
if (xjsj!=null) {xjsj="to_date('" + xjsj + "','YYYY-MM-DD hh24:mi')" ;}  else{xjsj="''";}
if (xlbgr!=null) {xlbgr="'" + xlbgr + "'" ;}  else{xlbgr="''";}
if (clfzr!=null) {clfzr="'" + clfzr + "'" ;}  else{clfzr="''";}
if (clcs!=null) {clcs="'" + clcs + "'" ;}  else{clcs="''";}
if (clgc!=null) {clgc="'" + clgc + "'" ;}  else{clgc="''";}



DbTrade db_connection=new DbTrade();
try {
    String sql_Query_dwmc="select dwjc from v_j_gyjc_yhdw where dwdm="+dwid;
	      
			java.sql.ResultSet gridResultSet_count=db_connection.executeQuery(sql_Query_dwmc);
			if(gridResultSet_count.next()){
				dwmc="'"+gridResultSet_count.getString(1)+"'";
			}
	String sql_update="update z_yxgl_qxgl  set dwid="+dwid 
  											+ ",dwmc="+dwmc
  											+ ",qjbh="+qjbh
  											+ ",qjmc="+qjmc
  											+ ",xb="+xb
  											+ ",gh="+gh
  											+ ",fxsj="+fxsj 
  											+ ",sbmc="+sbmc
  											+ ",qxnr="+qxnr
  											+ ",qxdj="+qxdj
  											+ ",fkr="+fkr
  											+ ",fkbm="+fkbm
  											+ ",zrr="+zrr 
  											+ ",zrbm="+zrbm
  											+ ",cljg="+cljg
  											+ ",xjsj="+xjsj
  											+ ",xlbgr="+xlbgr
  											+ ",clfzr="+clfzr
  											+ ",clcs="+clcs
  											+ ",clgc="+clgc
  											+" where qxid="+qxid;
  												
  												
  												
  											
  	if (db_connection.executeUpdate(sql_update))
  	{
  
   		out.print("{success:true,msg:'数据修改成功！'}");
    }
    db_connection.close();
} 

catch(Exception ex) {
}

%>
