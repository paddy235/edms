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
      
        //�ж�����ǵ��һ̨
        if(dwid.equals("02101"))
        { 
            //ͣ����ҵ����
	        if(LTYPE.equals("1"))
	        { 
	                if(Integer.parseInt(mlh)>750||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���750������ɾ������������Ŷε������
	                      dbTrade.executeUpdate(sql_del); 
	                    
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���501��ʼ
	                     mlh="501";
	                      
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
	        }//�������բ
	        else if(LTYPE.equals("2"))
	        {
	              	if(Integer.parseInt(mlh)>350||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���350������ɾ������������Ŷε������
	                       dbTrade.executeUpdate(sql_del); 
	                      
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���201��ʼ
	                        mlh="201";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);

	                }
	        }//������բ
	        else if(LTYPE.equals("3"))
	        { 
	                if(Integer.parseInt(mlh)>50||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���50������ɾ������������Ŷε������
	                        dbTrade.executeUpdate(sql_del); 
	                      
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���1��ʼ
	                        mlh="1";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
	        }

        }//�����̨
        else
        {     //ͣ����ҵ����
              if(LTYPE.equals("1"))
              {
              if(Integer.parseInt(mlh)>999||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���999������ɾ������������Ŷε������
	                      dbTrade.executeUpdate(sql_del); 
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���751��ʼ
	                      mlh="751";
	                      
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
              }//�������բ
              else if(LTYPE.equals("2"))
              {
              if(Integer.parseInt(mlh)>500||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���500������ɾ������������Ŷε������
	                      dbTrade.executeUpdate(sql_del); 
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���351��ʼ
	                     mlh="351";
	                }
	                else
	                {
	                mlh=String.valueOf(Integer.parseInt(mlh)+1);
	                }
              }//������բ
              else if(LTYPE.equals("3"))
              { if(Integer.parseInt(mlh)>99||Integer.parseInt(mlh)<0)
	                {
	                      //�������Ŵ���99������ɾ������������Ŷε������
	                      dbTrade.executeUpdate(sql_del); 
	                      //ɾ���ɹ����ڲ���һ���µĵ�������ţ���51��ʼ
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


