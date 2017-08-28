//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.util;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class UpLoadFile {
    private String uploadPath = "";
    private String return_name = "";
    private static int BUFSIZE = 10240;
    public static String RealPath = "";
    final long MAX_SIZE = 8388608L;

    public UpLoadFile() {
    }

    public String FileUpload(HttpServletRequest request, String SavePath, String Name) {
        try {
            SavePath = SavePath.replaceAll("\\\\", "/");
            if(SavePath.indexOf("/") == 0) {
                SavePath = SavePath.substring(1, SavePath.length());
            }

            if(SavePath.lastIndexOf("/") != SavePath.length() - 1) {
                SavePath = SavePath + "/";
            }

            this.uploadPath = RealPath + SavePath;
            System.out.println("用于存放上传文件的目录 " + this.uploadPath);
            request.setCharacterEncoding("utf-8");
            String[] allowedExt = new String[]{"jpg", "jpeg", "gif", "txt", "doc", "dwf", "mp3", "avi", "mpeg", "pdf"};
            DiskFileItemFactory dfif = new DiskFileItemFactory();
            dfif.setSizeThreshold(BUFSIZE);
            File file = new File(RealPath + "UploadTemp");
            if(!file.exists()) {
                file.mkdir();
            }

            dfif.setRepository(file);
            ServletFileUpload sfu = new ServletFileUpload(dfif);
            sfu.setSizeMax(8388608L);
            List fileList = null;

            try {
                fileList = sfu.parseRequest(request);
            } catch (FileUploadException var26) {
                System.out.println("处理文件尺寸过大异常 " + var26);
                return "";
            }

            if(fileList != null && fileList.size() != 0) {
                Iterator fileItr = fileList.iterator();
                int var10 = 0;

                while(true) {
                    while(fileItr.hasNext()) {
                        FileItem fileItem = null;
                        String path = null;
                        long size = 0L;
                        fileItem = (FileItem)fileItr.next();
                        ++var10;
                        if(fileItem != null && !fileItem.isFormField()) {
                            path = fileItem.getName();
                            size = fileItem.getSize();
                            if("".equals(path) || size == 0L) {
                                System.out.println("上传完整路径 " + path + "大小" + size);
                                return "";
                            }

                            String t_name = path.substring(path.lastIndexOf("\\") + 1);
                            String t_ext = t_name.substring(t_name.lastIndexOf(".") + 1);
                            int allowFlag = 0;

                            int allowedExtCount;
                            for(allowedExtCount = allowedExt.length; allowFlag < allowedExtCount && !allowedExt[allowFlag].equalsIgnoreCase(t_ext); ++allowFlag) {
                                ;
                            }

                            if(allowFlag == allowedExtCount) {
                                System.out.println("文件格式非法 ");
                                return "";
                            }

                            long now = System.currentTimeMillis();
                            if(Name != null && Name.length() > 0) {
                                if(Name.indexOf(".") > -1) {
                                    Name = Name.substring(0, Name.indexOf("."));
                                }
                            } else {
                                Name = String.valueOf(now);
                            }

                            String prefix = String.valueOf(now);
                            this.return_name = Name + "." + t_ext;
                            String u_name = this.uploadPath + Name + "." + t_ext;
                            File u_file = new File(u_name);
                            if(u_file.exists()) {
                                u_file.delete();
                            }

                            try {
                                fileItem.write(new File(u_name));
                            } catch (Exception var25) {
                                var25.printStackTrace();
                            }
                        } else {
                            System.out.println(fileItem.getFieldName());
                        }
                    }

                    return this.return_name;
                }
            } else {
                System.out.println("没有文件上传 ");
                return "";
            }
        } catch (Exception var27) {
            System.out.println("文件上传失败！" + var27);
            return "";
        }
    }

    public boolean DelFile(String SavePath, String Name) {
        try {
            SavePath = SavePath.replaceAll("\\\\", "/");
            if(SavePath.indexOf("/") == 0) {
                SavePath = SavePath.substring(1, SavePath.length());
            }

            if(SavePath.lastIndexOf("/") != SavePath.length() - 1) {
                SavePath = SavePath + "/";
            }

            String uploadPath = RealPath + SavePath;
            System.out.println("要删除的文件  " + uploadPath + Name);
            System.out.println("开始进行文件删除");
            File file = new File(uploadPath + Name);
            if(file.exists()) {
                return file.delete();
            } else {
                System.out.println("文件删除成功！");
                return true;
            }
        } catch (Exception var5) {
            System.out.println("文件删除失败！" + var5);
            return false;
        }
    }
}
