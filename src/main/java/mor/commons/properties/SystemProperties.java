//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.properties;

import java.io.Serializable;
import java.util.Properties;

public class SystemProperties implements Serializable {
    private static final long serialVersionUID = -4639989224438153051L;
    private static Properties sysProperties = new Properties();
    public static final String LINE_SEPARATOR = System.getProperty("line.separator");
    public static final String FILE_SEPARATOR = System.getProperty("file.separator");
    public static final String ORACLE = "Oracle";
    public static final String SYBASE = "Sybase";
    public static final String SQLSERVER = "SqlServer";
    public static final String DB_TYPE_NAME_KEY = "DB_TYPE_NAME";
    public static final String DB_USERNAME_KEY = "DB_USERNAME";
    public static final String DB_PASSWORD_KEY = "DB_PASSWORD";
    public static final String DB_URL_KEY = "DB_URL";
    public static final String DS_JNDI_NAME_KEY = "DS_JNDI_NAME";
    public static final String SOCD_DS_JNDI_NAME_KEY = "SOCD_DS_JNDI_NAME";
    public static final String FUEL_SOCD_DS_JNDI_NAME_KEY = "FUEL_SOCD_DS_JNDI_NAME";
    public static final String DUTYREC_SOCD_DS_JNDI_NAME_KEY = "DUTYREC_SOCD_DS_JNDI_NAME";
    public static final String DB_SCHEMA_NAME_KEY = "DB_SCHEMA_NAME";
    public static final String REQUIRED_JDK_VERSION_KEY = "REQUIRED_JDK_VERSION";
    public static final String LOGIN_USER_SESSION_NAME_KEY = "LOGIN_USER_SESSION_NAME";
    public static final String PAGE_SIZE_KEY = "PAGE_SIZE";
    public static final String ROWSET_MAX_ROWS_KEY = "ROWSET_MAX_ROWS";
    private static final String FETCH_SIZE_KEY = "FETCH_SIZE";
    private static final String UPLOAD_FILE_MAX_SIZE_KEY = "UPLOAD_FILE_MAX_SIZE";

    public SystemProperties() {
    }

    public static String getProperty(String key) {
        return sysProperties.getProperty(key);
    }

    public static void setSysProperties(Properties p) {
        sysProperties = p;
    }

    public static String getDbType() {
        return getProperty("DB_TYPE_NAME");
    }

    public static String getDbUrl() {
        return getProperty("DB_URL");
    }

    public static String getDbUsername() {
        return getProperty("DB_USERNAME");
    }

    public static String getDbPassword() {
        return getProperty("DB_PASSWORD");
    }

    public static String getDsJndiName() {
        return getProperty("DS_JNDI_NAME");
    }

    public static String getDbSchemaName() {
        return getProperty("DB_SCHEMA_NAME");
    }

    public static float getRequiredJDKVersion() {
        return (new Float(getProperty("REQUIRED_JDK_VERSION"))).floatValue();
    }

    public static String getLoginUserSessionName() {
        return getProperty("LOGIN_USER_SESSION_NAME");
    }

    public static int getPageSize() {
        return Integer.parseInt(getProperty("PAGE_SIZE"));
    }

    public static int getRowSetMaxRows() {
        return Integer.parseInt(getProperty("ROWSET_MAX_ROWS"));
    }

    public static int getFetchSize() {
        return Integer.parseInt(getProperty("FETCH_SIZE"));
    }

    public static int getUploadFileMaxSize() {
        return Integer.parseInt(getProperty("UPLOAD_FILE_MAX_SIZE"));
    }

    public static String getRootAddress() {
        return getProperty("ROOTADDRESS");
    }
}
