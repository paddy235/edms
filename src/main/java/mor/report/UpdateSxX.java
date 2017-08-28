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

public class UpdateSxX {
    private Connection connection = null;

    public UpdateSxX() {
        if(this.connection == null) {
            try {
                this.connection = DbConn.getConnection();
            } catch (SQLException var2) {
                var2.printStackTrace();
            }
        }

    }

    public static void main(String[] args) {
        UpdateSxX aa = new UpdateSxX();
        aa.update_sxx("20050821");
    }

    public int update_sxx(String date_id) {
        String[] table = new String[]{"jd_train", "jd_real_train"};
        int count = 0;

        for(int m = 0; m < 2; ++m) {
            try {
                Statement statement = this.connection.createStatement();
                Statement statement1 = this.connection.createStatement();
                ResultSet resultSet = statement.executeQuery("select train_code,rowid from " + table[m] + " where date_id>=" + date_id + " and sxx=-1");
                int i = 0;

                while(resultSet.next()) {
                    ++i;
                    String update_sql = "update " + table[m] + " set sxx=" + this.get_update_str(resultSet.getString("train_code")) + " where rowid='" + resultSet.getString("rowid") + "'";
                    statement1.executeUpdate(update_sql);
                }

                count += i;
                statement1.close();
                statement.close();
                this.connection.commit();
            } catch (SQLException var11) {
                System.out.println("更新速度指标表出错\n" + var11);
            }
        }

        try {
            if(this.connection != null) {
                this.connection.close();
            }

            this.connection = null;
        } catch (SQLException var10) {
            ;
        }

        return count;
    }

    private String get_update_str(String cc) {
        String temp = "-1";
        if(cc == null || cc.equalsIgnoreCase("")) {
            temp = "-1";
        }

        try {
            int a = Integer.parseInt(cc.substring(cc.length() - 1, cc.length()));
            temp = String.valueOf(a % 2);
        } catch (Exception var6) {
            try {
                int a = Integer.parseInt(cc.substring(cc.length() - 2, cc.length() - 1));
                temp = String.valueOf(a % 2);
            } catch (Exception var5) {
                temp = "-1";
            }
        }

        return temp;
    }
}
