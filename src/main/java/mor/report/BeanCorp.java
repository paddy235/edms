//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.report;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import mor.commons.db.DbConn;

public class BeanCorp {
    private String ljzd = "ljzd";
    private String fjzd = "fjzd";
    public static boolean inited = false;
    public static String fj = "85";
    public static String lj = "J";
    public static String fj_name = "兰州分局";

    public BeanCorp() {
    }

    public String getCorpID(String mark) {
        if(!inited) {
            this.init_data();
        }

        return mark.equalsIgnoreCase("lj")?lj:fj;
    }

    public void init_data() {
        Connection conn = null;

        try {
            conn = DbConn.getConnection();
        } catch (SQLException var14) {
            var14.printStackTrace();
        }

        try {
            String sqlstr = "select dm,corp_id,corp_name from zd$_corp";
            Statement st = conn.createStatement();

            ResultSet rs;
            for(rs = st.executeQuery(sqlstr); rs.next(); fj_name = rs.getString(3)) {
                fj = rs.getString(1);
                lj = rs.getString(2);
            }

            rs.close();
            rs = null;
            st.close();
            st = null;
        } catch (SQLException var15) {
            System.out.print(var15.toString());
        } finally {
            try {
                conn.close();
            } catch (Exception var13) {
                System.out.print(var13.toString());
            }

        }

        inited = true;
    }

    public String getAdminCode() {
        return this.getCorpID("lj");
    }

    public String getSunAdminCode() {
        return this.getCorpID("fj");
    }

    public String getFjzd() {
        return this.fjzd;
    }

    public String getLjzd() {
        return this.ljzd;
    }

    public void setFjzd(String fjzd) {
        this.fjzd = fjzd;
    }

    public void setLjzd(String ljzd) {
        this.ljzd = ljzd;
    }

    public String getFj_name() {
        if(!inited) {
            this.init_data();
        }

        return fj_name;
    }

    public void setFj_name(String fj_name) {
    }
}
