<%@ page language="java"contentType="text/html;charset=GBK"pageEncoding="GBK"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.sql.*"%>
<%
	//String start = request.getParameter("start");
	//String limit = request.getParameter("limit");
	//String education = request.getParameter("action");
	
	///��õ�ǰ�û������֣���λid
    String username=session.getAttribute("userName").toString();
    String userdwid=session.getAttribute("userDwid").toString();
	
	
	request.setCharacterEncoding("GBK");
	String gzpid = request.getParameter("gzpid");
	System.out.println("gzpid:"+gzpid);
	String jhid=request.getParameter("jhid");
	String jhtype = "2";
	String dwid = "0101010101";
	String dwmc =request.getParameter("txtdwmc"); 

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
	//String  AQJL= request.getParameter("txtAQJL");
	//String ZYQFHZS = request.getParameter("txtZYQFHZS");
	String QTAQCS = request.getParameter("txtQTAQCS");
	String CYBGJL = request.getParameter("txtCYBGJL");
	String GZPJSSJ = request.getParameter("txtGZPJSSJ");
	String LDRQZ = request.getParameter("txtLDRQZ");
	String FPRQZ = request.getParameter("txtFPRQZ");

	Date nowDate = new Date();
	SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	DbTrade dbconn = new DbTrade();
   if (YXQS.equals(" ")) {
       System.out.println("))))))))))))))))))))))))))))))))))))))))))))))))))");
		YXQS = "''";
	} else {
		YXQS = "to_date('" + YXQS + "','YYYY-MM-DD HH24:MI')";
	}
    if(YXQZ.equals(" "))
    {
       YXQZ="''";
    } else {
		YXQZ = "to_date('" + YXQZ + "','YYYY-MM-DD HH24:MI')";
	}
    if(GZPJSSJ.equals(" "))
    {
       GZPJSSJ="''";
    } else {
		GZPJSSJ = "to_date('" + GZPJSSJ + "','YYYY-MM-DD HH24:MI')";
	}
	//�õ�������Ա����Ϣ

	String sql = "update z_yxgl_gzpgq_black set gzph='" + gzph
			+ "',zydd='" + zydd + "',fpr='" + FPR + "',zynr='" + ZYNR
			+ "',fpsj=to_date('" + FPRQ
			+ "','yyyy-mm-dd hh24:mi'),t_yxsj=to_date('" + YXQS
			+ "','yyyy-mm-dd hh24:mi'),e_yxsj=to_date('" + YXQZ
			+ "','yyyy-mm-dd hh24:mi'),gzldr='" + LDRXM + "',ldrdj='"
			+ LDRJB + "',cgrs='" + zrs + "',tdsb='" + XTDSB
			+ "',aqcs='"
			+ QTAQCS + "',bgzyryjl='" + CYBGJL + "',jssj=to_date('" + GZPJSSJ
			+ "','yyyy-mm-dd hh24:mi'),ldrqz='"+LDRQZ+"',fprqz='" + FPRQZ + "',gzpzt='2' where gzpid="+gzpid;

	System.out.println("red:sql:"+sql);

	if (dbconn.executeUpdate(sql)) {
		//ɾ����ҵ��Ա�����²���
		String delsql = "delete z_yxgl_zyry where ryb='gq_black' and  gzpid="+gzpid;
		System.out.println(delsql);
		
		 dbconn.executeUpdate(delsql);
		
	
		for (int i = 1; i < 20; i++) {
			String xm = request.getParameter("txtCY" + i);
			String jb = request.getParameter("txtAQJB" + i);
			if (xm != "" && jb != "") {//���빤����Ա��
				System.out.println(xm + ":" + jb + "    ");
				String sql_zyry = "insert into z_yxgl_zyry values(z_yxgl_zyrySq.Nextval,'"
						+ gzpid + "','" + xm + "','" + jb + "','gq_black')";
				dbconn.executeUpdate(sql_zyry);
			}
		}
		
		
		//����ͨ�������Ҫ��ֵ����־������룬��־��Ϣ
            String sql_zbrz="insert into z_yxgl_zbrz values(z_yxgl_zbrzsquence.nextval,'"+userdwid+"','��ɳ���̨','����"+dwmc+" ��"+gzph+"��Զ����ҵ����Ʊ',to_date('"+formater.format(nowDate)+"','yyyy-mm-dd hh24:mi'),'0101010101','"+dwmc+"','"+username+"')";
            System.out.println(sql_zbrz);
            dbconn.executeUpdate(sql_zbrz);
		//�ر����ݿ�����
		dbconn.close();
		response.sendRedirect("../bdsdyzgzpsp/gzpsp.jsp?myid=" + jhid
				+ "&jhtype=" + jhtype);
	}
%>
