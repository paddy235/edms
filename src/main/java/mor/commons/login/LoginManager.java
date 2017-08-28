//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.login;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mor.commons.db.DbConn;
import mor.commons.db.DbTrade;

public class LoginManager extends HttpServlet {
    String name = null;

    public LoginManager() {
    }

    public void destroy() {
        super.destroy();
    }

    public void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.dealRequst(req, resp);
    }

    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.dealRequst(req, resp);
    }

    public void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.dealRequst(req, resp);
    }

    public String getServletInfo() {
        return super.getServletInfo();
    }

    public void init() throws ServletException {
        super.init();
    }

    public String toString() {
        return super.toString();
    }

    public void dealRequst(HttpServletRequest req, HttpServletResponse resp) {
        DbTrade db_connection = new DbTrade();
        ResultSet rs = null;
        boolean suceed = false;
        String YHMC = null;
        String YHDM = null;
        String YHMM = null;
        String YHIP = null;
        String GWMC = null;
        String DWJB = null;
        String DWJB_MC = null;
        String DWDM = null;
        String DWJC = null;
        String DWMC = null;
        String DDTDM = null;
        String DDTMC = null;
        String BZ = null;
        String LOGIN_TIME = null;
        Vector ROLE = new Vector();
        Vector SXFW = new Vector();

        try {
            req.setCharacterEncoding("gb2312");
            resp.setContentType("text/html; charset=gb2312");
            this.name = req.getParameter("userID");
            String pass = req.getParameter("userPWD");
            String sql = "select yhmc,yhdm,yhmm,yhip,gwmc,dwjb,dwjb_mc,dwdm,dwjc,dwmc,bz,ddtdm,ddtmc,to_char(sysdate,'yyyy-mm-dd hh24:mi:ss') login_time from v_j_gyjc_login  where  yhdm=?";
            String sql1 = "select JSDM from j_gyjc_yhjs where YHDM = ?";
            String sql2 = "select GQDM from j_gyjc_yhgq where YHDM = ?";
            if (this.name != null && this.name.length() > 0) {
                PreparedStatement psmt = DbConn.getConnection().prepareStatement(sql);
                psmt.setString(1, this.name);
                rs = psmt.executeQuery();
                if (rs.next()) {
                    YHMC = rs.getString(1);
                    YHDM = rs.getString(2);
                    YHMM = rs.getString(3);
                    YHIP = rs.getString(4);
                    GWMC = rs.getString(5);
                    DWJB = rs.getString(6);
                    DWJB_MC = rs.getString(7);
                    DWDM = rs.getString(8);
                    DWJC = rs.getString(9);
                    DWMC = rs.getString(10);
                    BZ = rs.getString(11);
                    DDTDM = rs.getString(12);
                    DDTMC = rs.getString(13);
                    LOGIN_TIME = rs.getString(14);
                    if (DDTDM == null || DDTDM.equalsIgnoreCase("") || DDTDM.equalsIgnoreCase("null")) {
                        DDTDM = "";
                        DDTMC = "";
                    }

                    if (YHMM.length() != 32) {
                        if (pass.equalsIgnoreCase(YHMM)) {
                            suceed = true;
                            ROLE = this.getVector(db_connection, sql1);
                            SXFW = this.getVector(db_connection, sql2);
                        }
                    } else if (JDBCMD5.getMD5String(pass).equalsIgnoreCase(YHMM)) {
                        suceed = true;
                        ROLE = this.getVector(db_connection, sql1);
                        SXFW = this.getVector(db_connection, sql2);
                    }
                }
            }

            if (suceed) {
                req.getSession().setAttribute("YHMC", YHMC);
                req.getSession().setAttribute("YHDM", YHDM);
                req.getSession().setAttribute("YHIP", YHIP);
                req.getSession().setAttribute("GWMC", GWMC);
                req.getSession().setAttribute("DWJB", DWJB);
                req.getSession().setAttribute("DWJB_MC", DWJB_MC);
                req.getSession().setAttribute("DWDM", DWDM);
                req.getSession().setAttribute("DWJC", DWJC);
                req.getSession().setAttribute("DDTDM", DDTDM);
                req.getSession().setAttribute("DDTMC", DDTMC);
                req.getSession().setAttribute("DWMC", DWMC);
                req.getSession().setAttribute("LOGIN_TIME", LOGIN_TIME);
                req.getSession().setAttribute("ROLE", ROLE);
                req.getSession().setAttribute("SXFW", SXFW);
                req.getSession().setAttribute("BZ", BZ);
                sql = "insert into j_gyjc_yhlog(yhdm,location_ip,login_time,memo) values(?,?,?,?)";
                Date utilDate = new Date();
                java.sql.Date date = new java.sql.Date(utilDate.getTime());
                PreparedStatement psmt = DbConn.getConnection().prepareStatement(sql);
                psmt.setString(1, YHDM);
                psmt.setString(2, req.getRemoteAddr());
                psmt.setDate(3, date);
                psmt.setString(4, YHMC);
                psmt.executeQuery();
                System.out.println("login suceed");
                resp.sendRedirect("indexFrame.jsp");
            } else {
                req.getSession().setAttribute("YHDM", this.name);
                System.out.println("login error");
                resp.sendRedirect("login.jsp");
            }
        } catch (UnsupportedEncodingException var41) {
            System.out.println(var41);
        } catch (SQLException var42) {
            System.out.println(var42);
        } catch (IOException var43) {
            System.out.println(var43);
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }

                if (db_connection != null) {
                    db_connection.close();
                }
            } catch (SQLException var40) {
                System.out.println("login error" + var40);
            }

        }

    }

    private Vector getVector(DbTrade db_connection, String sql) {
        Vector v = new Vector();

        try {
            PreparedStatement psmt = DbConn.getConnection().prepareStatement(sql);
            psmt.setString(1, this.name);
            ResultSet rs = psmt.executeQuery();

            while (rs.next()) {
                v.add(rs.getString(1));
            }

            rs.close();
        } catch (SQLException var6) {
            System.out.println("load role error" + sql);
        }

        return v;
    }
}
