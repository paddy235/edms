//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.util;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Hashtable;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;

public class CopyOfUpLoadFile {
    private HttpServletRequest request = null;
    private String uploadPath = null;
    private static int BUFSIZE = 8192;
    private Hashtable paramHt = new Hashtable();
    private ArrayList updFileArr = new ArrayList();
    public static String RealPath = "";

    public CopyOfUpLoadFile() {
    }

    public boolean FileUpload(HttpServletRequest req, String SavePath, String Name) {
        try {
            SavePath = SavePath.replaceAll("\\\\", "/");
            if (SavePath.indexOf("/") == 0) {
                SavePath = SavePath.substring(1, SavePath.length());
            }

            if (SavePath.lastIndexOf("/") != SavePath.length() - 1) {
                SavePath = SavePath + "/";
            }

            this.uploadPath = RealPath + SavePath;
            System.out.println("req  " + req.getContentType());
            this.setRequest(req);
            System.out.println("开始进行文件上传");
            this.process();
            System.out.println("文件上传成功！");
            return true;
        } catch (Exception var5) {
            System.out.println("文件上传失败！" + var5);
            return false;
        }
    }

    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    public void setUploadPath(String path) {
        this.uploadPath = path;
    }

    public int process() {
        int status = this.preCheck();
        if (status != 0) {
            return status;
        } else {
            try {
                String name = null;
                String value = null;
                boolean fileFlag = false;
                File tmpFile = null;
                String fName = null;
                FileOutputStream baos = null;
                BufferedOutputStream bos = null;
                this.paramHt = new Hashtable();
                this.updFileArr = new ArrayList();
                byte[] buffs = new byte[BUFSIZE * 8];
                String contentType = this.request.getContentType();
                int index = contentType.indexOf("boundary=");
                String boundary = "--" + contentType.substring(index + 9);
                String endBoundary = boundary + "--";
                ServletInputStream sis = this.request.getInputStream();

                while (true) {
                    while (true) {
                        String strBuff;
                        int fIndex;
                        int fLastIndex;
                        do {
                            int rtnPos;
                            label70:
                            do {
                                while ((rtnPos = sis.readLine(buffs, 0, buffs.length)) != -1) {
                                    strBuff = new String(buffs, 0, rtnPos);
                                    Object obj;
                                    ArrayList al;
                                    if (strBuff.startsWith(boundary)) {
                                        if (name != null && name.trim().length() > 0) {
                                            if (fileFlag) {
                                                bos.flush();
                                                baos.close();
                                                bos.close();
                                                baos = null;
                                                bos = null;
                                                this.updFileArr.add(fName);
                                            } else {
                                                obj = this.paramHt.get(name);
                                                al = new ArrayList();
                                                if (obj != null) {
                                                    al = (ArrayList) obj;
                                                }

                                                al.add(value);
                                                System.out.println(value);
                                                this.paramHt.put(name, al);
                                            }
                                        }

                                        name = new String();
                                        value = new String();
                                        fileFlag = false;
                                        fName = new String();
                                        rtnPos = sis.readLine(buffs, 0, buffs.length);
                                        continue label70;
                                    }

                                    if (strBuff.startsWith(endBoundary)) {
                                        if (name != null && name.trim().length() > 0) {
                                            if (fileFlag) {
                                                bos.flush();
                                                baos.close();
                                                bos.close();
                                                baos = null;
                                                bos = null;
                                                this.updFileArr.add(fName);
                                            } else {
                                                obj = this.paramHt.get(name);
                                                al = new ArrayList();
                                                if (obj != null) {
                                                    al = (ArrayList) obj;
                                                }

                                                al.add(value);
                                                this.paramHt.put(name, al);
                                            }
                                        }
                                    } else if (fileFlag) {
                                        if (baos == null && bos == null) {
                                            tmpFile = new File(this.uploadPath + "a.jpg");
                                            baos = new FileOutputStream(tmpFile);
                                            bos = new BufferedOutputStream(baos);
                                        }

                                        bos.write(buffs, 0, rtnPos);
                                        baos.flush();
                                    } else {
                                        System.out.println("test :" + value + "--" + strBuff);
                                        value = value + strBuff;
                                    }
                                }

                                return status;
                            } while (rtnPos == -1);

                            strBuff = new String(buffs, 0, rtnPos);
                            if (strBuff.toLowerCase().startsWith("content-disposition: form-data; ")) {
                                fIndex = strBuff.toLowerCase().indexOf("name=\"");
                                fLastIndex = strBuff.toLowerCase().indexOf("\"", fIndex + 6);
                                name = strBuff.substring(fIndex + 6, fLastIndex);
                            }

                            fIndex = strBuff.toLowerCase().indexOf("filename=\"");
                        } while (fIndex == -1);

                        fileFlag = true;
                        fLastIndex = strBuff.toLowerCase().indexOf("\"", fIndex + 10);
                        fName = strBuff.substring(fIndex + 10, fLastIndex);
                        fName = this.getFileName(fName);
                        if (fName != null && fName.trim().length() != 0) {
                            fName = this.getFileNameByTime(fName);
                            sis.readLine(buffs, 0, buffs.length);
                            sis.readLine(buffs, 0, buffs.length);
                        } else {
                            fileFlag = false;
                            sis.readLine(buffs, 0, buffs.length);
                            sis.readLine(buffs, 0, buffs.length);
                            sis.readLine(buffs, 0, buffs.length);
                        }
                    }
                }
            } catch (IOException var19) {
                status = 4;
                return status;
            }
        }
    }

    private int preCheck() {
        int errCode = 0;
        if (this.request == null) {
            return 1;
        } else if (this.uploadPath != null && this.uploadPath.trim().length() != 0) {
            File tmpF = new File(this.uploadPath);
            if (!tmpF.exists()) {
                return 2;
            } else {
                String contentType = this.request.getContentType();
                return contentType.indexOf("multipart/form-data") == -1 ? 3 : errCode;
            }
        } else {
            return 2;
        }
    }

    public String getParameter(String name) {
        String value = "";
        if (name != null && name.trim().length() != 0) {
            value = this.paramHt.get(name) == null ? "" : (String) ((ArrayList) this.paramHt.get(name)).get(0);
            return value;
        } else {
            return value;
        }
    }

    public String[] getParameters(String name) {
        if (name != null && name.trim().length() != 0) {
            if (this.paramHt.get(name) == null) {
                return null;
            } else {
                ArrayList al = (ArrayList) this.paramHt.get(name);
                String[] strArr = new String[al.size()];

                for (int i = 0; i < al.size(); ++i) {
                    strArr[i] = (String) al.get(i);
                }

                return strArr;
            }
        } else {
            return null;
        }
    }

    public int getUpdFileSize() {
        return this.updFileArr.size();
    }

    public String[] getUpdFileNames() {
        String[] strArr = new String[this.updFileArr.size()];

        for (int i = 0; i < this.updFileArr.size(); ++i) {
            strArr[i] = (String) this.updFileArr.get(i);
        }

        return strArr;
    }

    private String getFileName(String input) {
        int fIndex = input.lastIndexOf("\\");
        if (fIndex == -1) {
            fIndex = input.lastIndexOf("/");
            if (fIndex == -1) {
                return input;
            }
        }

        input = input.substring(fIndex + 1);
        return input;
    }

    private String getFileNameByTime(String input) {
        int index = input.indexOf(".");
        Date dt = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        return input.substring(0, index) + sdf.format(dt) + input.substring(index);
    }

    public boolean DelFile(String SavePath, String Name) {
        try {
            SavePath = SavePath.replaceAll("\\\\", "/");
            if (SavePath.indexOf("/") == 0) {
                SavePath = SavePath.substring(1, SavePath.length());
            }

            if (SavePath.lastIndexOf("/") != SavePath.length() - 1) {
                SavePath = SavePath + "/";
            }

            String uploadPath = RealPath + SavePath;
            System.out.println("要删除的文件  " + uploadPath + Name);
            System.out.println("开始进行文件删除");
            File file = new File(uploadPath + Name);
            if (file.exists()) {
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
