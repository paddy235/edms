//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {
    public static final String TIME_FORMAT = "HH:mm:ss:SS";
    public static final String DEFAULT_SHORT_DATE_FORMAT = "yyyy-MM-dd";
    public static final String DEFAULT_SHORT_DATE_FORMAT_ZH = "yyyy年M月d日";
    public static final String DEFAULT_LONG_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss:SS";
    public static final String JAVA_MIN_SHORT_DATE_STR = "1970-01-01";
    public static final String JAVA_MIN_LONG_DATE_STR = "1970-01-01 00:00:00:00";
    public static final Timestamp JAVA_MIN_TIMESTAMP = convertStrToTimestamp("1970-01-01 00:00:00:00");

    public DateUtil() {
    }

    public static Timestamp convertStrToTimestamp(String dateStr) {
        return convertStrToTimestamp(dateStr, false);
    }

    public static Timestamp convertStrToTimestampZero(String dateStr) {
        return convertStrToTimestamp(dateStr, true);
    }

    public static Timestamp convertStrToTimestamp(String dateStr, boolean addZeroTime) {
        if(dateStr == null) {
            return null;
        } else {
            String dStr = dateStr.trim();
            if(dStr.indexOf(" ") == -1) {
                if(addZeroTime) {
                    dStr = dStr + " 00:00:00:00";
                } else {
                    dStr = dStr + " " + getCurrDateStr("HH:mm:ss:SS");
                }
            }

            Date utilDate = null;
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SS");

            try {
                utilDate = simpleDateFormat.parse(dStr);
            } catch (Exception var6) {
                throw new RuntimeException("DateUtil.convertStrToTimestamp(): " + var6.getMessage());
            }

            return new Timestamp(utilDate.getTime());
        }
    }

    public static Timestamp getCurrTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }

    public static String getCurrDateStr(String dateFormat) {
        return convertDateToStr(new Date(), dateFormat);
    }

    public static String convertDateToStr(Date date, String dateFormat) {
        if(date == null) {
            return "";
        } else {
            SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
            return sdf.format(date);
        }
    }

    public static String convertStrToWeek(String dateStr, String dateFormat) {
        return dateStr != null && !dateStr.equals("")?convertDateToStr(convertStrToDate(dateStr, dateFormat), "E"):null;
    }

    public static Date convertStrToDate(String dateStr, String dateFormat) {
        if(dateStr != null && !dateStr.equals("")) {
            SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);

            try {
                return sdf.parse(dateStr);
            } catch (Exception var4) {
                throw new RuntimeException("DateUtil.convertStrToDate():" + var4.getMessage());
            }
        } else {
            return null;
        }
    }

    public static java.sql.Date convertToSqlDate(Date date) {
        if(date == null) {
            return null;
        } else {
            String dateStr = convertDateToStr(date, "yyyy-MM-dd");
            return java.sql.Date.valueOf(dateStr);
        }
    }

    public static double dateDiff(String datepart, Date startdate, Date enddate) {
        if(datepart != null && !datepart.equals("")) {
            double distance = (double)((enddate.getTime() - startdate.getTime()) / 86400000L);
            Calendar cal = Calendar.getInstance();
            cal.setTimeInMillis(enddate.getTime() - startdate.getTime());
            if(datepart.equals("yy")) {
                distance /= 365.0D;
            } else if(datepart.equals("MM")) {
                distance /= 30.0D;
            } else {
                if(!datepart.equals("dd")) {
                    throw new IllegalArgumentException("DateUtil.dateDiff()方法非法参数值：" + datepart);
                }

                distance = (double)((enddate.getTime() - startdate.getTime()) / 86400000L);
            }

            return distance;
        } else {
            throw new IllegalArgumentException("DateUtil.dateDiff()方法非法参数值：" + datepart);
        }
    }

    public static Date addDate(String datepart, int number, Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        if(datepart.equals("yy")) {
            cal.add(1, number);
        } else if(datepart.equals("MM")) {
            cal.add(2, number);
        } else {
            if(!datepart.equals("dd")) {
                throw new IllegalArgumentException("DateUtil.addDate()方法非法参数值：" + datepart);
            }

            cal.add(5, number);
        }

        return cal.getTime();
    }

    public static void main(String[] args) {
        System.out.println(getCurrDateStr("yyyy年M月d日"));
        System.out.println(convertDateToStr((Date)null, "yyyy-MM-dd HH:mm:ss:SS"));
    }
}
