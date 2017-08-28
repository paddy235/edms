//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.db;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DbTrade {
    Connection conn = null;
    Statement stmt = null;
    ResultSet rset = null;

    public DbTrade() {
        this.openConnection();
    }

    private boolean openConnection() {
        try {
            this.conn = DbConn.getConnection();
            return true;
        } catch (SQLException var2) {
            var2.printStackTrace();
            return false;
        }
    }

    public ResultSet executeQuery(String query) throws SQLException {
        this.stmt = this.conn.createStatement();
        this.rset = this.stmt.executeQuery(query);
        return this.rset;
    }

    public boolean executeUpdate(String query) throws SQLException {
        this.stmt = this.conn.createStatement();
        int i = this.stmt.executeUpdate(query);
        this.stmt.close();
        return i > 0;
    }

    public void executeProcedure(String procedure) throws SQLException {
        procedure = "{call " + procedure + " }";
        CallableStatement cstmt = this.conn.prepareCall(procedure);
        cstmt.executeUpdate();
        cstmt.close();
    }

    public void close() throws SQLException {
        if(this.conn != null) {
            this.conn.close();
        }

        if(this.stmt != null) {
            this.stmt.close();
        }

        if(this.rset != null) {
            this.rset.close();
        }

    }

    protected void finalize() throws Throwable {
        this.close();
    }
}
