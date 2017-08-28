<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%!
SimpleDateFormat FormatDate=new SimpleDateFormat("yyyy-MM-dd"); 
String sql="";
String ZbxxGqdm="";
public String GetTime(java.util.Date timeDate)
{ 
  if(timeDate==null)
  {
    return "";
  }
  else
  {
    return FormatDate.format(timeDate).toString();
  }
}
public String CheckSting(String str)
{ 
  if(str==null||str.equals("null"))
  {
    return "";
  }
  else
  {
    return str.replaceAll("\r\n","\\\\r\\\\n");
  }
}

public String CheckSting1(String str)
{ 
  if(str==null||str.equals("null"))
  {
    return "";
  }
  else
  {
    return str;
  }
}

public String CheckSting2(String str)
{ 
  if(str==null||str.equals("null"))
  {
    return "0";
  }
  else
  {
    return str;
  }
}

public String CheckSting3(String str)
{ 
  if(str==null||str.equals("null"))
  {
    return " ";
  }
  else
  {
    return str.replaceAll("\r\n","\\\\r\\\\n");
  }
}

public String CheckDate(String str)
{ 
  if(str==null||str.equals("null"))
  {
    return "";
  }
  else
  {
    return str.substring(0,16);
  }
}

public int CheckExist(String TableName,String GZBH)
{ 
	int totalCount=0;
	if(TableName!=""&&GZBH!="")
	{
		try 
		{
			DbTrade db_connection=new DbTrade(); 
    		sql="select count(*) from "+TableName+ " where GZBH='"+GZBH+"'";
    		ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
    			totalCount=rs.getInt(1);
    		}
    		db_connection.close();
    	}
    	catch (Exception e) {}
	}
	System.out.print(totalCount);
	return totalCount;
}

public String ZdText(String sql)
{ 
	String Text="";
	if(sql!="")
	{
		try 
		{
			DbTrade db_connection=new DbTrade(); 
    		ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
    			Text=rs.getString(2);
    		}
    		db_connection.close();
    	}
    	catch (Exception e) {}
	}
	//System.out.println("2------------"+Text);
	return Text;
}

public String GetYdxx()
{ 
	String Ydxx="";
	String Gzms="";
	String whereclause=" 1=1";
	try 
	{
			DbTrade db_connection=new DbTrade(); 
    		sql="select to_char(y.bgsj,'yyyy-mm-dd hh24:mi') as bgsj,g.GQMC,k.KGH,y.gzms,g.GQDM from Z_XXGX_YDGZBG y,J_GDGY_KX k,J_GYJC_GQZD g where "
				+ whereclause +" and y.BHZZDM=k.BHZZDM and y.GQPYM=g.GQPYM and g.GQDM=k.GQDM and y.CHZZT='0' and y.ZTBZ='0' and rownum<2 order by bgsj desc";
			ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
	    		Ydxx=CheckSting(rs.getString(1))+","+CheckSting(rs.getString(2))+","+CheckSting(rs.getString(3))+",";
	    		Gzms=CheckSting(rs.getString(4));
	    		if(Gzms!=""&&Gzms.length()>74){
	            	Gzms=Gzms.substring(0,74)+"...";
	            }
	            Ydxx=Ydxx+Gzms;
	            
	            
            	ZbxxGqdm=CheckSting(rs.getString(5));
            }
            if(Ydxx=="")
	        {
	            Ydxx=Ydxx+","+Ydxx+","+Ydxx+","+Ydxx;
	        }
            db_connection.close();
    }
    catch (Exception e) {System.out.print("---"+e);}
	System.out.print(Ydxx);
	return Ydxx;
}

public String GetZbxx()
{ 
	int Dwjb=0;
	String Zbxx="";
	String Ddt="";
	String Gdd="";
	String Cj="";
	String Bds="";
	try 
	{
		if(ZbxxGqdm!="")
		{
			DbTrade db_connection=new DbTrade(); 
    		sql="select t.yhdm,t.yhmc,t.dwjb,t.gqdm from v_qxfz_zbxx t where t.gqdm='"+ZbxxGqdm+"' order by t.dwjb,t.login_time";
			ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
	    		if(CheckSting(rs.getString("Dwjb"))!="")
	    		{
		    		Dwjb=Integer.parseInt(rs.getString("Dwjb"));
		    		switch(Dwjb)
		  			{
		  				case 3:
		  					Ddt=CheckSting(rs.getString("yhmc"));	
	  						break;
	  					case 4:
		  					Gdd=CheckSting(rs.getString("yhmc"));	
	  						break;
	  					case 5:
		  					Cj=CheckSting(rs.getString("yhmc"));	
	  						break;
	  					case 6:
		  					Bds=CheckSting(rs.getString("yhmc"));	
	  						break;
	  					default:
	  						break;
		  			}
	  			}
  			}
  			Zbxx=Ddt+","+Gdd+","+Cj+","+Bds;
  			db_connection.close();
  		}
  		else
  		{
  			Zbxx=Ddt+","+Gdd+","+Cj+","+Bds;
  		}
    }
    catch (Exception e) {}
	System.out.print(Zbxx);
	return Zbxx;
}

public String TTYHMC(String DWDM,String DWDJ)
{ 
	String sql="select t.yhmc,t.gwmc,t.dwjb,t.dwdm from j_gyjc_yh t where t.dwdm='"+DWDM+"' and t.dwjb='"+DWDJ+"'";
	String yhmc="";
	if(sql!="")
	{
		try 
		{
			DbTrade db_connection=new DbTrade(); 
    		ResultSet rs=db_connection.executeQuery(sql);
    		while(rs.next())
    		{
    			yhmc=yhmc+rs.getString("yhmc")+"!#";
    		}
    		db_connection.close();
    	}
    	catch (Exception e) {}
	}
	System.out.println(yhmc+"2----"+sql);
	return yhmc;
}
  
%>