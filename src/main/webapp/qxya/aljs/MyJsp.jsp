<%@ page language="java" contentType="text/html; charset=GB2312" pageEncoding="GB2312"%>   
<%@ page import="org.apache.commons.fileupload.*" %>     
<%@ page import="java.util.*" %>     
<%@ page import="java.util.Iterator" %>     
<%@ page import="java.io.File" %>    
<%   
  String temp=getServletContext().getRealPath("/")+"temp";   //��ʱĿ¼    
  String loadpath=getServletContext().getRealPath("/")+"dir"; //�ϴ��ļ����Ŀ¼
   
  DiskFileUpload fu = new DiskFileUpload();    
  fu.setSizeMax(1*1024*1024*1024);   // ���������û��ϴ��ļ���С,��λ:�ֽ�    
  //fu.setSizeThreshold(409600);   // �������ֻ�������ڴ��д洢������,��λ:�ֽ�    
  //fu.setRepositoryPath(temp); // ����һ���ļ���С����getSizeThreshold()��ֵʱ���ݴ����Ӳ�̵�Ŀ¼    
  
  //��ʼ��ȡ�ϴ���Ϣ    
  List fileItems = fu.parseRequest(request);    
  Iterator iter = fileItems.iterator(); // ���δ���ÿ���ϴ����ļ�    
  
  String name = "";   
    FileItem itemi = (FileItem) iter.next();// �������������ļ�������б���Ϣ 
        
    if (!itemi.isFormField()) {    
         name = itemi.getName();//��ȡ�ϴ��ļ���,����·��  
           
         name=name.substring(name.lastIndexOf("\\")+1);//��ȫ·������ȡ�ļ���    
        // out.println(name);    
         long size = itemi.getSize();    
         if((name==null||name.equals("")) && size==0)    
         return;    
         //out.println(itemi.getName()+"    Size="+itemi.getSize()+"<br>");//����ϴ��ļ���Ϣ    
       //System.out.println(name);   
         File fNew= new File(loadpath, "tempfile.txt");     
          
         itemi.write(fNew);     
  		out.println("{success:true,msg:'File was successfully uploaded.'}");   
 }
 else
 {System.out.println(itemi+"22");  }    
 %>  


