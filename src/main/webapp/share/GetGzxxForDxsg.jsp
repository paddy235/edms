<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%!
public String CheckSting(String str)
{ 
  if(str==null)
  {
    return "";
  }
  else
  {
    return str.replaceAll("\r\n","\\\\r\\\\n");
  }
}
public int GetGzxxForDxsg(String GZBH)
{ 
	int num=0;
	String sql="";
	String InsSql="";
	try 
	{
		if(GZBH!="")
		{
			DbTrade db_connection=new DbTrade(); 
    		sql="select a.mc||a.ZZH||'֧������'||','||a.LXMC almc,a.xldm,to_char(a.GZFSSJ,'yyyy-mm-dd hh24:mi:ss') fssj,a.mc||a.ZZH||'֧������' dd, "
 				+" '�Ӵ���' zl,a.GZLXBM,substr((select gqdm from j_gyjc_qjzczd where qjbm=a.QJZC),0,4) gdd,a.zbddy,"
 				+" '����ʱ�䣺'||to_char(a.GZFSSJ,'yyyy-mm-dd hh24:mi:ss')||';  �ص㣺'||a.mc||a.ZZH||'֧������;'||a.LXMC||';  ͣ�����Σ�'||a.TDQD||';  ��Χ��'||a.XCXZFW gzxx,"
 				+" '����ָ���ˣ�'||a.ldxm||';  ��ҵ����'||a.zych||';  ���޹�����'||a.GQMC2||';  ����������'||a.zzddrs||';  ���������ˣ�'||a.gqfzr||';  �����Ͼߣ�'||a.sdlj||';  ���豸��'||a.shsb||','||a.sbshcd||';  ����ͨ�����룺'||a.jgtgjl||';  ��ǰ���з�ʽ��'||a.dqyxfs gzqx,"
 				+" 'ԭ��'||a.mc||a.ZZH||'֧������'||a.LXMC||';  Ӱ�죺'||a.yxxcfw yyjyx,a.GZYLWT "
				+" from v_z_qxfz_gzxx a where a.GZBH='"+GZBH+"' and a.GZLCBS!='8'";
			System.out.println("-"+sql);
			ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("almc"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("xldm"))+"',";
	    		InsSql=InsSql+"to_date('"+CheckSting(rs.getString("fssj"))+"','yyyy-mm-dd HH24:mi:ss'),";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("dd"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("zl"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("GZLXBM"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("gdd"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("zbddy"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("gzxx"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("gzqx"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("yyjyx"))+"',";
	    		InsSql=InsSql+"'"+CheckSting(rs.getString("GZYLWT"))+"'";
	    		
  			}
			System.out.println("--"+InsSql);
  			if(InsSql!="")
  			{
  				 //�õ�����
  				String albm="";
  				DecimalFormat frmString=new DecimalFormat("0000"); 
  				sql="select max(id) maxid from z_dxsg_sgbg";
  				int maxid=0;
   			    rs=db_connection.executeQuery(sql);
   				while(rs.next()){
	   				maxid=rs.getInt("maxid")+1;
   				}
				albm=frmString.format(maxid);
				
  				InsSql="insert into z_dxsg_sgbg(id,albm,almc,xbbm,fssj,dd,sgfl,sglx,sgszdw,zbddy,gzxx,gzqx,sgyyjcs,ylwt,sfgd,sjc) "
  					  +" values('"+maxid+"','"+albm+"',"+InsSql+",'0',sysdate)";
  			    System.out.println("---"+InsSql);
  				db_connection.executeUpdate(InsSql);
  				num=1;
  			}
  			db_connection.close();
  		}
    }
    catch (Exception e) { System.out.println(e); }
	return num;
}
%>