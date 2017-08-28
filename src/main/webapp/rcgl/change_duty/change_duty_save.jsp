<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>


<%
	//获取客户端提交的字段值
	String dwid = session.getAttribute("DWDM").toString();
	String dwmc = session.getAttribute("DWMC").toString();
	//String dwmc=request.getParameter("dwmc");
	System.out.println(dwmc);

	String jbr = request.getParameter("jbr");
	String jiaobr = request.getParameter("jiaobr");
	String jbsj = request.getParameter("jbsj");
	String jszlgz = request.getParameter("jszlgz");
	String ddsbzt = request.getParameter("ddsbzt");
	String bp = request.getParameter("bp");
	String ws = request.getParameter("ws");
	String zdsx = request.getParameter("zdsx");
	String tq = request.getParameter("tq");
	System.out.println(jbsj);
	String jsid = "";
   if(session.getAttribute("jsid")==null)
   {
   
   }else
   {
   jsid=session.getAttribute("jsid").toString();
	System.out.println("jsid:jsid:" + jsid);
	String[] ary_js = jsid.split(",");
	String sql_js = "update z_yxgl_zbjs set  jbrqr='" + jbr + "' where dwid="+dwid+" and (";
	System.out.print("IOIOIOI:"+ary_js.length);
	if (ary_js.length > 0) {
		DbTrade js_connection = new DbTrade();
		for (int i = 0; i < ary_js.length; i++) {
			sql_js = sql_js + "jsid=" + ary_js[i].toString() + " or ";
		}
		sql_js = sql_js + "1=1)";
		System.out.println("sql:::::::::" + sql_js);
		js_connection.executeUpdate(sql_js);
		js_connection.close();
	}
	}
    //session.removeAttribute("jsid");
	//处理提交值
	if (dwid != null) {
		dwid = "'" + dwid + "'";
	} else {
		dwid = "''";
	}
	if (dwmc != null) {
		dwmc = "'" + dwmc + "'";
	} else {
		dwmc = "''";
	}
	if (jbr != null) {
		jbr = "'" + jbr + "'";
	} else {
		jbr = "''";
	}
	if (jiaobr != null) {
		jiaobr = "'" + jiaobr + "'";
	} else {
		jiaobr = "''";
	}
	if (jbsj != null) {
		jbsj = "to_date('" + jbsj + "','YYYY-MM-DD HH24:MI')";
	} else {
		jbsj = "''";
	}
	if (jszlgz != null) {
		jszlgz = "'" + jszlgz + "'";
	} else {
		jszlgz = "''";
	}
	if (ddsbzt != null) {
		ddsbzt = "'" + ddsbzt + "'";
	} else {
		ddsbzt = "''";
	}
	if (bp != null) {
		bp = "'" + bp + "'";
	} else {
		bp = "''";
	}
	if (ws != null) {
		ws = "'" + ws + "'";
	} else {
		ws = "''";
	}
    if (zdsx != null) {
		zdsx = "'" + zdsx + "'";
	} else {
		zdsx = "''";
	}
	if (tq != null) {
		tq = "'" + tq + "'";
	} else {
		tq = "''";
	}
	DbTrade db_connection = new DbTrade();
	try {

		String sql_save = "insert into z_yxgl_jjbjl values(Z_YXGL_JJBJLSQUENCE.nextval,"
				+ dwid
				+ ","
				+ dwmc
				+ ","
				+ jbr
				+ ","
				+ jiaobr
				+ ","
				+ jbsj
				+ ","
				+ jszlgz
				+ ","
				+ ddsbzt
				+ ","
				+ bp
				+ ","
				+ ws 
				+ ","
				+ zdsx 
				+ ","
				+tq+")";
		System.out.println("----------------"+sql_save);

		db_connection.executeUpdate(sql_save);

		out.print("{success:true,msg:'接班成功！'}");

		db_connection.close();

	}

	catch (Exception ex) {
	    out.print("{success:true,msg:'接班失败！'}");
	}
%>
