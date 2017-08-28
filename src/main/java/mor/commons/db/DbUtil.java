//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DbUtil {
    public DbUtil() {
    }

    public static void closeRs(ResultSet rs) {
        try {
            if(rs != null) {
                rs.close();
                rs = null;
            }
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }

    public static void closeConn(Connection conn) {
        try {
            if(conn != null && !conn.isClosed()) {
                conn.close();
                conn = null;
            }
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }

    public static void closeStmt(Statement stmt) {
        try {
            if(stmt != null) {
                stmt.close();
                stmt = null;
            }
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }

    public static void close(ResultSet rs, Statement stmt, Connection conn) {
        closeRs(rs);
        closeStmt(stmt);
        closeConn(conn);
    }

    public static void fillStatement(PreparedStatement stmt, Object[] params) throws SQLException {
        if(params != null) {
            for(int i = 0; i < params.length; ++i) {
                if(params[i] != null) {
                    stmt.setObject(i + 1, params[i]);
                } else {
                    stmt.setNull(i + 1, 12);
                }
            }

        }
    }

    public static String fieldNameToPropertyName(String fieldName) {
        String tempStr = fieldName.toLowerCase();
        String[] splitNames = tempStr.split("_");
        StringBuffer result = new StringBuffer();

        for(int i = 0; i < splitNames.length; ++i) {
            if(i == 0) {
                result.append(splitNames[0]);
            } else {
                String firstChar = String.valueOf(splitNames[i].charAt(0));
                result.append(firstChar.toUpperCase()).append(splitNames[i].substring(1));
            }
        }

        return result.toString();
    }
}
