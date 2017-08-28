<%@ page language="java"
contentType="text/html; charset=GB2312"
pageEncoding="GB2312"
%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>



<%

  	  //  DbTrade dbconn_re=new DbTrade();
        String gqid="";
        String myURL="../../errorpage.jsp";
        if(session.getAttribute("userDwid")!=null)
        {
           gqid=session.getAttribute("userDwid").toString();
        }
        else
        {
	       response.sendRedirect(myURL);
        }
        String sql_gq="select * from J_GYJC_GQZD where gqdm='"+gqid+"'";
       // java.sql.ResultSet sult =dbconn_re.executeQuery(sql_gq);
       /// sult.next();
        String dwlb="";
        String gqmc="";
        System.out.println("gqid:"+gqid);
        DbTrade trade=new DbTrade();
       
        java.sql.ResultSet result=trade.executeQuery(sql_gq);
        while(result.next())
        {
               dwlb=result.getString("jglbdm");
               gqmc=result.getString("gqmc");
        }
      
        if(gqmc==""||gqmc==null)
        {
           gqmc="测试工区名称";
        }
        trade.close();
        System.out.println("gqmcgqmc:"+gqmc);
        session.setAttribute("gqmc",gqmc);

if (session.getAttribute("gqmc")!=null)
{
	gqmc=session.getAttribute("gqmc").toString();
	out.print(gqmc);
}
else
{
    out.print("衡阳网工区");
}
%>
