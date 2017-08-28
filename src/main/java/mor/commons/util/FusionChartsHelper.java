//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import javax.servlet.http.HttpServletResponse;

public class FusionChartsHelper {
    int FC_ColorCounter = 0;
    String[] arr_FCColors = new String[]{"1941A5", "AFD8F8", "F6BD0F", "8BBA00", "A66EDD", "F984A1", "CCCC00", "999999", "0099CC", "FF0000", "006F00", "0099FF", "FF66CC", "669966", "7C7CB4", "FF9933", "9900FF", "99FFCC", "CCCCFF", "669900"};

    public FusionChartsHelper() {
    }

    public String getFCColor() {
        ++this.FC_ColorCounter;
        return this.arr_FCColors[this.FC_ColorCounter % this.arr_FCColors.length];
    }

    public static String addCacheToDataURL(String strDataURL) {
        Calendar nowCal = Calendar.getInstance();
        Date now = nowCal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy HH_mm_ss a");
        String strNow = sdf.format(now);

        String cachedURL;
        try {
            if(strDataURL.indexOf("?") > 0) {
                cachedURL = strDataURL + "&FCCurrTime=" + URLEncoder.encode(strNow, "UTF-8");
            } else {
                cachedURL = strDataURL + "?FCCurrTime=" + URLEncoder.encode(strNow, "UTF-8");
            }
        } catch (UnsupportedEncodingException var7) {
            var7.printStackTrace();
            cachedURL = strDataURL + "?FCCurrTime=" + strNow;
        }

        return cachedURL;
    }

    public String encodeDataURL(String strDataURL, String addNoCacheStr, HttpServletResponse response) {
        String encodedURL = strDataURL;
        if(addNoCacheStr.equals("true")) {
            Calendar nowCal = Calendar.getInstance();
            Date now = nowCal.getTime();
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy HH_mm_ss a");
            String strNow = sdf.format(now);
            if(strDataURL.indexOf("?") > 0) {
                (new StringBuilder(String.valueOf(strDataURL))).append("&FCCurrTime=").append(strNow).toString();
            } else {
                strDataURL = strDataURL + "?FCCurrTime=" + strNow;
            }

            encodedURL = response.encodeURL(strDataURL);
        }

        return encodedURL;
    }
}
