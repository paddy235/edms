//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import mor.commons.properties.SystemProperties;

public class DbConn {
    public DbConn() {
    }

    public static Connection getConnection() throws SQLException {
        Connection conn = null;

        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String url = SystemProperties.getDbUrl();
            String user = SystemProperties.getDbUsername();
            String password = SystemProperties.getDbPassword();
            conn = DriverManager.getConnection(url, user, password);
        } catch (Exception var4) {
            var4.printStackTrace();
        }

        return conn;
    }
}
