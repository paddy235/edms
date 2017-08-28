<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
//获取客户端提交的字段值
String tzid=request.getParameter("tzid");
//update所用primary key
//获取客户端提交的字段值
String dwid="";
String dwmc="";

String myURL="../../errorpage.jsp";
if(session.getAttribute("DWDM")==null||session.getAttribute("YHMC")==null)
{System.out.println("&*&*&*&*&*");
	response.sendRedirect(myURL);
}
else
{
 dwid=session.getAttribute("DWDM").toString();
 dwmc=session.getAttribute("DWMC").toString();
}
String tzbh=request.getParameter("mlh");//命令号
String lcddy=request.getParameter("lcddy");
String ksjtwz=request.getParameter("jgdd");//降弓地点
String jsjtwz=request.getParameter("jsjtwz");
String xb=request.getParameter("xb");//行别
String m_ksjtwx=request.getParameter("m_ksjtwx");
String m_jsjtwx=request.getParameter("m_jsjtwx");
String t_zbjgb=request.getParameter("zbjg");//准备降弓标
String t_jgb=request.getParameter("tjg");//T降弓标
String zbjgb=request.getParameter("zbjgb");
String jgb=request.getParameter("jg");//降弓标
String sgb=request.getParameter("sg");//升弓标
String pdqk=request.getParameter("pdqk");//坡度情况
String bz=request.getParameter("bz");//备注
String tzsj=request.getParameter("tzsj");//通知时间
String ccsj=request.getParameter("ccsj");//撤出时间
String gdddy=request.getParameter("ddy");//电调员
String xdy=request.getParameter("xdy");//行调员
String jgyy=request.getParameter("jgyy");
String sgmlh=request.getParameter("sgmlh");//升弓命令号
System.out.println(ccsj+"22");	
//处理提交值
if (dwid!=null) {dwid="'" + dwid + "'" ;}  else{dwid="''";}
if (dwmc!=null) {dwmc="'" + dwmc + "'" ;}  else{dwmc="''";} 
if (tzbh!=null) {tzbh="'" + tzbh + "'" ;}  else{tzbh="''";}
if (lcddy!=null) {lcddy="'" + lcddy + "'" ;}  else{lcddy="''";}
if (ksjtwz!=null) {ksjtwz="'" + ksjtwz + "'" ;}  else{ksjtwz="''";}
if (jsjtwz!=null) {jsjtwz="'" + jsjtwz + "'" ;}  else{jsjtwz="''";}
if (xb!=null) {xb="'" + xb + "'" ;}  else{xb="''";}
if (m_ksjtwx!=null) {m_ksjtwx="'" + m_ksjtwx + "'" ;}  else{m_ksjtwx="''";}
if (m_jsjtwx!=null) {m_jsjtwx="'" + m_jsjtwx + "'" ;}  else{m_jsjtwx="''";}
if (t_zbjgb!=null) {t_zbjgb="'" + t_zbjgb + "'" ;}  else{t_zbjgb="''";}
if (t_jgb!=null) {t_jgb="'" + t_jgb + "'" ;}  else{t_jgb="''";}
if (zbjgb!=null) {zbjgb="'" + zbjgb + "'" ;}  else{zbjgb="''";}
if (jgb!=null) {jgb="'" + jgb + "'" ;}  else{jgb="''";}
if (sgb!=null) {sgb="'" + sgb + "'" ;}  else{sgb="''";}
if (tzsj==null||tzsj.equals("")) {tzsj="''";}  else {tzsj="to_date('" + tzsj + "','YYYY-MM-DD hh24:mi')" ;}
if (ccsj==null||ccsj.equals("")) {ccsj="''";}  else {ccsj="to_date('" + ccsj + "','YYYY-MM-DD hh24:mi')" ;}  
if (gdddy!=null) {gdddy="'" + gdddy + "'" ;}  else{gdddy="''";}
if (xdy!=null) {xdy="'" + xdy + "'" ;}  else{xdy="''";}
if (pdqk!=null) {pdqk="'" + pdqk + "'" ;}  else{pdqk="''";}
if (bz!=null) {bz="'" + bz + "'" ;}  else{bz="''";}
if (jgyy!=null) {jgyy="'" + jgyy + "'" ;}  else{jgyy="''";}
if (sgmlh!=null) {sgmlh="'" + sgmlh + "'" ;}  else{sgmlh="''";}

//session.setAttribute("jhid", jhid);


DbTrade db_connection=new DbTrade();
try {
    
	String sql_update="update z_yxgl_jgtz  set dwid="+dwid 
  											+ ",dwmc="+dwmc
  											+ ",tzbh="+tzbh
  											+ ",lcddy="+lcddy
  											+ ",ksjtwz="+ksjtwz
  											+ ",jsjtwz="+jsjtwz
  											+ ",xb="+xb 
  											+ ",m_ksjtwx="+m_ksjtwx
  											+ ",m_jsjtwx="+m_jsjtwx
  											+ ",t_zbjgb="+t_zbjgb
  											+ ",t_jgb="+t_jgb
  											+ ",zbjgb="+zbjgb
  											+ ",jgb="+jgb 
  											+ ",sgb="+sgb
  											+ ",tzsj="+tzsj
  											+ ",ccsj="+ccsj
  											+ ",gdddy="+gdddy
  										    + ",xdy="+xdy
  											+ ",pdqk="+pdqk
  											+ ",bz="+bz
  											+ ",jgyy="+jgyy
  											//+ ",sgmlh="+sgmlh
  											+" where tzid="+tzid;
  												
  		System.out.println(sql_update);																			
  		db_connection.executeUpdate(sql_update);			
    db_connection.close();
   		out.print("{success:true,msg:'数据修改成功！'}");
    
  
} 

catch(Exception ex) {
	out.print("{success:true,msg:'数据修改失败！'}");
}

%>
