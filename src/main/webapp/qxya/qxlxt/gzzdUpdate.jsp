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
System.out.println("��ʼ�����޸ġ���");

String xiu_id = request.getParameter("xiu_id");
String ZYZDSMC =new String(request.getParameter("ZYZDSMC_id").getBytes("ISO8859-1"),"GB2312");
 
String fbrq =new String(request.getParameter("FBRQ_id").getBytes("ISO8859-1"),"GB2312"); 
 

String gzzdPath = request.getParameter("tppath");
 
String sql_Upd="";
 
String Name="";
DbTrade db_connection=new DbTrade();
 
try {
   	int num=gzzdPath.lastIndexOf("\\");
	if(num>1)
	{   
	  //(id,CPSMSMC,FBRQ,ZYFL,CPLB,CPXH,SCCJ,CPYXJSTGCJ,SMSLJ)
   		String SavePath="jcsj\\sbzds\\zds\\";//���ڴ���ϴ��ļ���Ŀ¼;
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
           writeFile =request.getRealPath("/")+"jcsj\\qxlxt\\lxt\\"+ xiu_id+"."+fileName.substring(fileName.lastIndexOf(".")+1);//�ļ���ȫ·��        
           System.out.println(writeFile);       
           File file = new File(writeFile); 
          
           try
           { 
           item.write(file);//�ϴ��ļ� 
           Name=xiu_id+"."+fileName.substring(fileName.lastIndexOf(".")+1);     
           }catch(Exception ex)
           {
               System.out.println("�ϴ��ļ�ʧ�ܣ�" + ex.getMessage());
           }}}}}
           
	   	sql_Upd="update Z_JCSJ_qxlxt set ZYZDSMC='"+ZYZDSMC+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd'),GZZDLJ='"+Name+"' where ID='"+xiu_id+"'";
	}
	else
	{
    		sql_Upd="update Z_JCSJ_qxlxt set ZYZDSMC='"+ZYZDSMC+"',fbrq=to_date('"+fbrq+"','yyyy-MM-dd') where ID='"+xiu_id+"'";
	}
    if(Name!=""||(num<2&&Name==""))
	{
    	
		System.out.println(sql_Upd);
		db_connection.executeUpdate(sql_Upd);
		db_connection.close();
    	out.print("{success:true,msg:'�޸ĳɹ���'}");
    	 
    }
} 

catch(Exception ex) {
 System.out.println("�޸�ʧ�ܣ�"+ex.getMessage() );
}

%>
