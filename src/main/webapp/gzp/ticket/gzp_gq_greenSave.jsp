<%@ page language="java" contentType="text/html;charset=GBK" pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
String myURL="../../errorpage.jsp";
if(session.getAttribute("userDwid")==null||session.getAttribute("ddtmc")==null||session.getAttribute("ddtmc")==null)
{
	response.sendRedirect(myURL);
}
	//String start = request.getParameter("start");
	//String limit = request.getParameter("limit");
	//String education = request.getParameter("action");
	request.setCharacterEncoding("GBK");
	String jhid = request.getParameter("jhid");
     String jhtype=request.getParameter("jhlb");
	String dwid =session.getAttribute("userDwid").toString();// "0101010101";
	String dwmc =session.getAttribute("gqmc").toString();// "��ɳ����ͤ";

	//�õ�����Ʊ����Ϣ
	String gzph = request.getParameter("txtGZPH");

	String zydd = request.getParameter("ZYDD");
	String FPR = request.getParameter("txtFPR");
	String ZYNR = request.getParameter("txtZYNR");
	String FPRQ = request.getParameter("txtFPRQ");
	String YXQS = request.getParameter("txtYXQS");
	String YXQZ = request.getParameter("txtYXQZ");
	String LDRXM = request.getParameter("txtLDRXM");
	String LDRJB = request.getParameter("txtLDRJB");
	String zrs = request.getParameter("txtzrs");
	String XTDSB = request.getParameter("txtXTDSB");
	String ZSJDXWZ = request.getParameter("txtZSJDXWZ");
	String ZYQFHZS = request.getParameter("txtZYQFHZS");
	String QTAQCS = request.getParameter("txtQTAQCS");
	String CYBGJL = request.getParameter("txtCYBGJL");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ");
	String LDRQZ = request.getParameter("txtLDRQZ");
	String FPRQZ = request.getParameter("txtFPRQZ");
	String TCWDXYY= request.getParameter("txtTCWDXYY");

	String AQY= request.getParameter("txtAQY");
	String CJGB= request.getParameter("txtCJGB");
	String DD= request.getParameter("txtDD");
	
	String AQYSJ= request.getParameter("txtAQYSJ");
	String CJGBSJ= request.getParameter("txtCJGBSJ");
	String DDSJ= request.getParameter("txtDDSJ");
	
	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");

	
	DbTrade dbconn = new DbTrade();
	
	//�õ�������Ա����Ϣ
	

	String sql = "insert into z_yxgl_gzpgq_green values(z_yxgl_gzpgq_greensq.nextval,'"
			+ jhid
			+ "','ͣ����ҵ','"
			+ dwid
			+ "','"
			+ dwmc
			+ "','"
			+ gzph
			+ "','"
			+ zydd
			+ "','"
			+ FPR
			+ "','"
			+ ZYNR
			+ "',to_date('"
			+ FPRQ
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ YXQS
			+ "','yyyy-mm-dd hh24:mi'),to_date('"
			+ YXQZ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ LDRXM
			+ "','"
			+ LDRJB
			+ "','"
			+ zrs
			+ "','"
			+ XTDSB
			+ "','"
			+ ZSJDXWZ
			+ "','"
			+ ZYQFHZS
			+ "','"
			+ QTAQCS
			+ "','"
			+ CYBGJL
			+ "',to_date('"
			+ GZPJSSJ
			+ "','yyyy-mm-dd hh24:mi'),'"
			+ LDRQZ
			+ "','"
			+ FPRQZ
			+ "','0',to_date('"
			+ formater.format(nowDate)
			+ "','yyyy-mm-dd hh24:mi'),'0','"+TCWDXYY+"','"+AQY+"','"+CJGB+"','"+DD+"',to_date('"+AQYSJ+"','yyyy-mm-dd hh24:mi'),to_date('"+CJGBSJ+"','yyyy-mm-dd hh24:mi'),to_date('"+DDSJ+"','yyyy-mm-dd hh24:mi'),'',to_date('','yyyy-mm-dd hh24:mi'))";	System.out.println("^^^^^^^^^^"+sql);

	dbconn.executeUpdate(sql);
		//�õ����Ĺ���Ʊid
		String sql_max = "select max(gzpid) from z_yxgl_gzpgq_green";
		ResultSet resultSet = dbconn.executeQuery(sql_max);
		String maxid = "";
		try {
			while (resultSet.next()) {

				maxid = String.valueOf(resultSet.getInt(1));
			}
		} catch (Exception ex) {
		}
        for(int i=1;i<25;i++)
        {
            String xm = request.getParameter("txtCY"+i);
            String jb="111";//request.getParameter("txtAQJB"+i); 
            if(!xm.equalsIgnoreCase(""))
            {//���빤����Ա��
             
              String sql_zyry="insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"+maxid+"','"+xm+"','"+jb.trim()+"','gq_green')";
              dbconn.executeUpdate(sql_zyry);
            }
        }
        //�ر����ݿ�����
        dbconn.close();
		response.sendRedirect("../gqtdzygzpsq/gzpsq.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype+"&gzdd="+" "+"&jhnr="+" ");
	
%>
