<%@ page language="java" contentType="text/html; charset=GB2312"
	pageEncoding="GB2312"%>
<%@page import="mor.commons.db.DbTrade"%>
 
<%
     
    String dwid=request.getParameter("dwid");
    String LTYPE=request.getParameter("LTYPE");
    String mlh="-1";

    try {

        String sql_Query =" select max(mlh) from J_GDGY_MLH where dwid='"+dwid+"' and ltype='"+LTYPE+"'";
        String sql_del=" delete J_GDGY_MLH where dwid='"+dwid+"' and ltype='"+LTYPE+"'";
   
 
         String json = "{root:[";
        
        DbTrade db_connection = new DbTrade();   
        DbTrade dbTrade=new DbTrade();
         DbTrade dbTrade1=new DbTrade();    
        java.sql.ResultSet listResultSet = db_connection.executeQuery(sql_Query);
          System.out.println("share/combo_listkpkpkpkpkp-----"+sql_Query);

        while (listResultSet.next()) { 
        
        mlh=String.valueOf(Integer.parseInt(listResultSet.getString(1)==null?"-1":listResultSet.getString(1)));
        }
      
        //判断如果是电调一台
        if(dwid.equals("02101"))
        { 
            //停电作业命令
	        if(LTYPE.equals("1"))
	        { 
	                if(Integer.parseInt(mlh)>750||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于750，首先删除这个电调这个号段的命令号
	                      dbTrade.executeUpdate(sql_del); 
	                    
	                      //删除成功后，在插入一条新的调度命令号，从501开始
	                     mlh="501";
	                      
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
	        }//变电所倒闸
	        else if(LTYPE.equals("2"))
	        {
	              	if(Integer.parseInt(mlh)>350||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于350，首先删除这个电调这个号段的命令号
	                       dbTrade.executeUpdate(sql_del); 
	                      
	                      //删除成功后，在插入一条新的调度命令号，从201开始
	                        mlh="201";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);

	                }
	        }//工区倒闸
	        else if(LTYPE.equals("3"))
	        { 
	                if(Integer.parseInt(mlh)>50||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于50，首先删除这个电调这个号段的命令号
	                        dbTrade.executeUpdate(sql_del); 
	                      
	                      //删除成功后，在插入一条新的调度命令号，从1开始
	                        mlh="1";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
	        }

        }//电调二台
        else
        {     //停电作业命令
              if(LTYPE.equals("1"))
              {
              if(Integer.parseInt(mlh)>999||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于999，首先删除这个电调这个号段的命令号
	                      dbTrade.executeUpdate(sql_del); 
	                      //删除成功后，在插入一条新的调度命令号，从751开始
	                      mlh="751";
	                      
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
              }//变电所倒闸
              else if(LTYPE.equals("2"))
              {
              if(Integer.parseInt(mlh)>500||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于500，首先删除这个电调这个号段的命令号
	                      dbTrade.executeUpdate(sql_del); 
	                      //删除成功后，在插入一条新的调度命令号，从351开始
	                     mlh="351";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
              }//工区倒闸
              else if(LTYPE.equals("3"))
              { if(Integer.parseInt(mlh)>99||Integer.parseInt(mlh)<0)
	                {
	                      //如果命令号大于99，首先删除这个电调这个号段的命令号
	                      dbTrade.executeUpdate(sql_del); 
	                      //删除成功后，在插入一条新的调度命令号，从51开始
	                     mlh="51";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }}
        }

        
                
                
                
                
                
                
                
                
                
        
            json += "{value:'" + mlh + "'}";
         
   

        json += "]}";

 
out.print("{success:true,msg:'"+mlh+"'}");
 String sql_insert =" insert into J_GDGY_MLH values('"+dwid+"','"+LTYPE+"','"+mlh+"')";
 dbTrade.executeUpdate(sql_insert); 
        db_connection.close();
    } catch (Exception ex) {

    }
%>


