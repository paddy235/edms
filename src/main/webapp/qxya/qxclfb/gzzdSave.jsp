<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312" %>
<%@page import="mor.commons.db.DbTrade"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="mor.commons.util.UpLoadFile"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.*" %>
<%@page import="java.sql.*"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="org.apache.commons.fileupload.FileUpload"%>
<%@page import="org.apache.commons.fileupload.FileUploadException"%>
<%@page import="org.apache.commons.fileupload.RequestContext"%>
 <%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletRequestContext"%>
<%@page import="java.util.*"%>
<%@page import="java.io.*"%>
 

<%
//String albm = request.getParameter("albm");
//String albm=session.getAttribute("albm").toString();

//id,gzzdmc,fbdw,fbrq,zyfl,nrfl,jbfl,gzzdjs,gzzdlj
String ZYZDSMC =new String(request.getParameter("ZYZDSMC_id").getBytes("ISO8859-1"),"GB2312");
 
String fbrq =new String(request.getParameter("FBRQ_id").getBytes("ISO8859-1"),"GB2312");  
 
 
Date nowDate =new Date();
SimpleDateFormat frmDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
DecimalFormat frmString=new DecimalFormat("0000"); 
//String nowDateTime=frmDate.format(nowDate);  
//�������ݿ�
DbTrade db_connection=new DbTrade();  
String sql="";

String Name="";
int bool=0,maxid=0;

//�õ�����
	try 
	{
		sql="select max(id) maxid from Z_JCSJ_qxclfb ";
   		ResultSet rs=db_connection.executeQuery(sql);
   		while(rs.next()){
	   		maxid=rs.getInt("maxid")+1;
   		}   		
   		String SavePath="jcsj\\sbsms\\sms\\";//���ڴ���ϴ��ļ���Ŀ¼;
		 
		System.out.println("insertsql="+request);   
		String[] filePaths = null;
         //UpLoadFile upd=new UpLoadFile();
         //upd.FileUpload(request,SavePath,frmString.format(maxid));
        RequestContext ctx = new ServletRequestContext(request);  
        boolean isMultiPart = FileUpload.isMultipartContent(ctx);//������multi�ı�ģʽ����
        System.out.println("content type: " + ctx.getContentType());
        if(isMultiPart){    
         DiskFileItemFactory factory = new DiskFileItemFactory();    
         factory.setSizeThreshold(1000 * 1024); // ���ñ��浽�ڴ��еĴ�С��1M    
         ServletFileUpload upload = new ServletFileUpload(factory);   
         upload.setSizeMax(500 * 1024 * 1024);// ��������ϴ��ļ��Ĵ�С500M 
         List items = upload.parseRequest(ctx);//������������ϴ��ļ���Ԫ    
         
         if(items != null && items.size() > 0)
         {
        	 filePaths = new String[items.size()];
         }
         
         //��ʼ�����ص��ļ�������    
          Iterator it = items.iterator();    
          int flag = -1;
          while (it.hasNext()) 
          {      flag ++;      
          FileItem item = (FileItem) it.next();      
          boolean isForm = item.isFormField();//�Ƿ��Ǳ���      
          if (!isForm) {       //������ʱ��������ļ��ϴ�       
          String fileName = item.getName();//��ȡ�ϴ����ļ���    
              System.out.println(fileName); 
          if (!fileName.equals("")) {        //�������ʱ���ϴ��ļ�������������������ˣ������ϴ��ˣ�����Ҫ���ϴ����ļ��������       
           String writeFile = "" + System.currentTimeMillis();//��ʱ��������֡�        
           filePaths[flag] = writeFile;        
           System.out.println(flag + ": " + filePaths[flag]); 
           // System.out.println(fileName.substring(fileName.indexOf(".")+1)); 
           writeFile =request.getRealPath("/")+"jcsj\\qxclfb\\fbt\\"+ maxid+"."+fileName.substring(fileName.lastIndexOf(".")+1);//�ļ���ȫ·��        
           System.out.println(writeFile);       
           File file = new File(writeFile); 
          
           try
           { 
           item.write(file);//�ϴ��ļ� 
           Name=maxid+"."+fileName.substring(fileName.lastIndexOf(".")+1);     
           }catch(Exception ex)
           {
               System.out.println("�ϴ��ļ�ʧ�ܣ�" + ex.getMessage());
           }
           
          }     

         }
         }
         
         }
        
        
	   //	Name = new UpLoadFile().FileUpload(request,SavePath,frmString.format(maxid));
	   //	System.out.println("Name="+Name);
	   	
	   	
	   	
	   	
	   	
	   	
   		//boolean b=new UpLoadFile().FileUpload(tzpath,SavePath,Name);
		//��������
		if(!Name.equals(""))
		{
		sql="insert into Z_JCSJ_qxclfb(id,ZYZDSMC,fbrq,GZZDLJ) values('"+maxid+"','"+ZYZDSMC+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+Name+"')";
			
			
	
		//sql="insert into z_jcsj_tz(id,tzmc,xb,xzjg,fbrq,zyfl,nrfl,qjzc,th,tzjs,tzlj) values('"+maxid+"','"+tzmc+"','"+xb+"','"+xzjg+"',to_date('"+fbrq+"','yyyy-MM-dd'),'"+zyfl+"','"+nrfl+"','"+qjzc+"','"+th+"','"+tzjs+"','"+Name+"')";
    	db_connection.executeUpdate(sql);
    	db_connection.close();
    	bool=1;
    	}
    	else
    	{bool=3;}
    	
    	
    }
 	catch (Exception e) {bool=0;}

	System.out.println("insertsql="+sql);
//System.out.println(albm);

if(bool==1)
{
    out.print("{success:true,msg:'����ɹ���'}");
}
else if(bool==3)
{out.print("{success:true,msg:'�ļ��ϴ�����'}");}
else
{
	out.print("{success:true,msg:'����ʧ�ܣ�'}");
}
%>
