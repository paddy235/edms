//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.properties;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.SQLException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import mor.commons.db.DbConn;
import mor.commons.db.DbUtil;
import mor.commons.util.UpLoadFile;
import org.apache.log4j.Logger;

public class DbConnInitServlet extends HttpServlet {
    private static final long serialVersionUID = -4480793053507680265L;
    private static Logger logger = Logger.getLogger(DbConnInitServlet.class);

    public DbConnInitServlet() {
    }

    public final void init(ServletConfig servletConfig) throws ServletException {
        super.init(servletConfig);
        String realPath = this.getServletContext().getRealPath("/");
        realPath = realPath.replaceAll("\\\\", "/");
        System.out.println("[系统运行路径]  " + realPath);
        UpLoadFile.RealPath = realPath;
        Connection conn = null;

        try {
            conn = DbConn.getConnection();
            if(conn != null) {
                DatabaseMetaData meta = conn.getMetaData();
                logger.info("[系统初始化][初始化数据库连接提供类]edms数据库连接提供类实例化正常，edms数据库连接正常。");
                logger.info("[系统初始化][初始化数据库连接提供类]edms数据库JDBC驱动程序版本：" + meta.getDriverName() + " " + meta.getDriverVersion());
                logger.info("[系统初始化][初始化数据库连接提供类]edms数据库版本：" + meta.getDatabaseProductName() + " " + meta.getDatabaseProductVersion());
            } else {
                logger.warn("[系统初始化][初始化数据库连接提供类]edms数据库连接不正常，请检查。");
            }
        } catch (SQLException var8) {
            logger.warn("[系统初始化][数据库连接提供类初始化]edms数据库连接不正常：" + var8.getMessage());
        } finally {
            DbUtil.closeConn(conn);
        }

    }
}
