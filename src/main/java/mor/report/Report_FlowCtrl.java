//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mor.commons.db.DbConn;

public class Report_FlowCtrl extends HttpServlet {
    String path_root = "/tjbb";
    private BaseDataBean lnkBaseDataBean;

    public Report_FlowCtrl() {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.performTask(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.performTask(request, response);
    }

    public String getServletInfo() {
        return super.getServletInfo();
    }

    private String getInifile(int id) {
        String s = null;

        try {
            String path = this.getServletConfig().getServletContext().getRealPath(this.path_root + "/jd_config.ini");
            BufferedReader in = new BufferedReader(new FileReader(path));

            String Line;
            while ((Line = in.readLine()) != null) {
                if (Line.trim().length() != 0) {
                    String[] pair = Line.split("=", 2);
                    if (pair[0].trim().equals(String.valueOf(id))) {
                        s = pair[1].trim();
                        break;
                    }
                }
            }

            in.close();
        } catch (Exception var7) {
            var7.printStackTrace();
        }

        return s;
    }

    public void performTask(HttpServletRequest request, HttpServletResponse response) {
        try {
            request.setCharacterEncoding("gb2312");
        } catch (UnsupportedEncodingException var19) {
            System.out.println("编码错，异常：" + var19.toString());
        }

        int tableid = 0;
        String sid = request.getParameter("tableid");
        if (sid != null) {
            tableid = Integer.parseInt(sid);
        }

        try {
            String ymd = null;
            SimpleDateFormat Bean;
            if (request.getParameter("ymd") != null) {
                ymd = request.getParameter("ymd");
            } else {
                Calendar today = Calendar.getInstance();
                Bean = new SimpleDateFormat("yyyy-MM-dd");
                ymd = Bean.format(today.getTime());
            }

            String rq = ymd.replaceAll("-", "");
            request.setAttribute("ymd", ymd);
            Bean = null;
            DataBean dateBean = new DataBean(tableid, this.getInifile(tableid));
            String subtables = request.getParameter("subtables");
            if (subtables != null && subtables.length() > 0) {
                dateBean.setSubId(subtables);
                dateBean.subtables = new Vector();
                String[] subids = subtables.split(",", -1);

                for (int i = 0; i < subids.length; ++i) {
                    int subid = Integer.parseInt(subids[i]);
                    dateBean.subtables.add(new DataBean(subid, "id_" + subid + ".ini"));
                }
            }

            String _fjdm = request.getParameter("fjdm");
            String ConfigURL = this.path_root + "/query";
            if (_fjdm != null) {
                ConfigURL = this.path_root + "/fj_query";
                dateBean.setFJCode(_fjdm);
            }

            String calc = request.getParameter("recalc");
            if (calc != null && calc.equalsIgnoreCase("true")) {
                dateBean.setRecalc(true);
            }

            String realPath = this.getServletConfig().getServletContext().getRealPath(ConfigURL) + "/";
            dateBean.setLocalPath(realPath);
            dateBean.LoadConfig();
            dateBean.isShift();
            Connection conn = null;

            try {
                conn = DbConn.getConnection();
            } catch (SQLException var18) {
                var18.printStackTrace();
            }

            dateBean.setConn(conn);
            String shift;
            if (dateBean.GetShift()) {
                shift = request.getParameter("shift");
                if (shift == null) {
                    Calendar c = Calendar.getInstance();
                    SimpleDateFormat sdf = new SimpleDateFormat("HH");
                    int hh = Integer.parseInt(sdf.toString());
                    if (hh <= 20 && hh >= 8) {
                        shift = "01";
                    }
                }

                rq = rq + shift;
            }

            dateBean.setRQ(rq);
            dateBean.setMDate();
            shift = request.getParameter("PostBack");
            String url;
            if (shift != null && shift.equals("true")) {
                url = request.getParameter("oldData");
                String newData = request.getParameter("newData");
                dateBean.SaveData(url, newData);
            } else {
                dateBean.LoadData();
            }

            if (_fjdm != null) {
                dateBean.LoadOther();
            }

            dateBean.close();
            request.setAttribute("DataBean", dateBean);
            url = this.path_root + "/query/ShowCell.jsp";
            if (_fjdm != null) {
                url = this.path_root + "/fj_query/ShowCell.jsp";
                dateBean.QueryParam = "?fjdm=" + _fjdm;
            }

            this.getServletConfig().getServletContext().getRequestDispatcher(url).forward(request, response);
        } catch (Throwable var20) {
            System.out.println("HD_FlowCtrl 异常：" + var20.toString());
            var20.printStackTrace();
        }

    }
}
