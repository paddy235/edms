//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.properties;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Log4jInitServlet extends HttpServlet {
    private static final long serialVersionUID = 4040142145344192845L;

    public Log4jInitServlet() {
    }

    public void init() throws ServletException {
        String configFile = this.getInitParameter("log4j.init.filename");
        System.out.println("[系统初始化][初始化日志组件]初始参数log4j.init.filename=" + configFile);
        InputStream in = this.getServletContext().getResourceAsStream(configFile);
        if(in == null) {
            System.out.println("[系统初始化][初始化日志组件]找不到日志配置文件：" + configFile);
            System.exit(0);
        }

        try {
            Properties props = new Properties();
            props.load(in);
            in.close();
            PropertyConfigurator.configure(props);
        } catch (IOException var4) {
            System.out.println("[系统初始化][初始化日志组件]初始化log4j失败：" + var4.getMessage());
        }

        Logger logger = Logger.getLogger(Log4jInitServlet.class);
        logger.info("Log4j starts --------------------------");
    }
}
