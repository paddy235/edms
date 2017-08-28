//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.properties;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import org.apache.commons.lang.SystemUtils;
import org.apache.log4j.Logger;

public class SysPropertiesLoaderServlet extends HttpServlet {
    private static final long serialVersionUID = 7150736425908346708L;
    public static Logger logger = Logger.getLogger(SysPropertiesLoaderServlet.class);
    private static final String PROPERTIES_PARAMETER = "system.properties.filename";

    public SysPropertiesLoaderServlet() {
    }

    public final void init(ServletConfig servletConfig) throws ServletException {
        super.init(servletConfig);
        String file = this.getInitParameter("system.properties.filename");
        if(logger.isInfoEnabled()) {
            logger.info("[系统初始化][初始化系统属性]开始装载系统属性配置文件 system.properties.filename=" + file);
        }

        if(file != null) {
            InputStream propStream = servletConfig.getServletContext().getResourceAsStream(file);
            if(propStream == null) {
                logger.warn("[系统初始化][初始化系统属性]不能找到文件：" + file);
                System.exit(0);
            }

            Properties props = new Properties();

            try {
                props.load(propStream);
            } catch (IOException var6) {
                throw new ServletException("[系统初始化][初始化系统属性]不能装载" + file + ": " + var6.getMessage(), var6);
            }

            SystemProperties.setSysProperties(props);
            if(logger.isInfoEnabled()) {
                logger.info("[系统初始化][初始化系统属性]完成装载系统属性配置文件" + file);
            }

            if(!SystemUtils.isJavaVersionAtLeast(SystemProperties.getRequiredJDKVersion())) {
                logger.info("[系统初始化][检测JDK版本]安装的JDK版本为" + SystemUtils.JAVA_VERSION_FLOAT + "，系统要求的JDK版本为" + SystemProperties.getRequiredJDKVersion() + "或以上版本。JDK的版本太低，请安装系统所要求的JDK版本。");
                System.exit(0);
            } else {
                logger.info("[系统初始化][检测JDK版本]安装的JDK版本为" + SystemUtils.JAVA_VERSION_FLOAT + "，系统要求的JDK版本为" + SystemProperties.getRequiredJDKVersion() + "或以上版本。检测通过。");
            }
        } else {
            logger.warn("[系统初始化][初始化系统属性]SysPropertiesLoaderServlet初始参数 system.properties.filename没有设置值，请确保正确配置属性装载Servlet。");
            System.exit(0);
        }

    }
}
