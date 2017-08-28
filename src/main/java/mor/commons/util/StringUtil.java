//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.util;

import java.net.URLEncoder;

public class StringUtil {
    public StringUtil() {
    }

    public static String replace(String value, String key, String replaceValue) {
        if(value != null && key != null && replaceValue != null) {
            int pos = value.indexOf(key);
            if(pos >= 0) {
                int length = value.length();
                int end = pos + key.length();
                if(length == key.length()) {
                    value = replaceValue;
                } else if(end == length) {
                    value = value.substring(0, pos) + replaceValue;
                } else {
                    value = value.substring(0, pos) + replaceValue + replace(value.substring(end), key, replaceValue);
                }
            }
        }

        return value;
    }

    public static boolean isBlank(String value) {
        boolean ret = false;
        if(value != null && value.equals("")) {
            ret = true;
        }

        return ret;
    }

    public static boolean isNull(String value) {
        return value == null;
    }

    public static boolean isNullOrBlank(String value) {
        return isNull(value) || isBlank(value);
    }

    public static String encodeStr(String str, String srcCode, String targetCode) {
        try {
            if(str == null) {
                return null;
            } else {
                byte[] bytesStr = str.getBytes(srcCode);
                return new String(bytesStr, targetCode);
            }
        } catch (Exception var4) {
            return str;
        }
    }

    public static String encodeStr(String str, String targetCode) {
        try {
            if(str == null) {
                return null;
            } else {
                byte[] bytesStr = str.getBytes();
                return new String(bytesStr, targetCode);
            }
        } catch (Exception var3) {
            return str;
        }
    }

    public static String convertNullToBlank(String str) {
        return str == null?"":str;
    }

    public static String left(String str, int length) {
        if(str == null) {
            throw new IllegalArgumentException("字符串参数值不能为null");
        } else if(length < 0) {
            throw new IllegalArgumentException("整型参数长度不能小于0");
        } else if(str.length() < length) {
            throw new IllegalArgumentException("字符串参数长度不能小于" + length);
        } else {
            return str.substring(0, length);
        }
    }

    public static String right(String str, int length) {
        if(str == null) {
            throw new IllegalArgumentException("字符串参数值不能为null");
        } else if(length < 0) {
            throw new IllegalArgumentException("整型参数长度不能小于0");
        } else if(str.length() < length) {
            throw new IllegalArgumentException("字符串参数长度不能小于" + length);
        } else {
            return str.substring(str.length() - length);
        }
    }

    public static String mid(String str, int beginIdex, int endIndex) {
        if(str == null) {
            throw new IllegalArgumentException("字符串参数值不能为null");
        } else {
            return str.substring(beginIdex - 1, endIndex);
        }
    }

    public static String genNextSerialNo(String currSerialNo, int length) {
        String result = "";
        if(currSerialNo.length() < length) {
            String zeroStr = "";

            for(int i = length - currSerialNo.length(); i > 0; --i) {
                zeroStr = zeroStr + "0";
            }

            currSerialNo = zeroStr + currSerialNo;
        }

        long currMaxSerialNo = Long.parseLong("1" + currSerialNo) + 1L;
        result = String.valueOf(currMaxSerialNo).substring(1);
        return result;
    }

    public static String trimWords(String str, int length) {
        if(str == null) {
            return "";
        } else if(str.length() <= length) {
            return str;
        } else {
            String wordStr = left(str, length);
            wordStr = wordStr + "...";
            return wordStr;
        }
    }

    public static String encodeUrl(String url) {
        String encodeUrl = "";
        if(isNullOrBlank(url)) {
            return "";
        } else {
            try {
                encodeUrl = replace(URLEncoder.encode(url, "GBK"), "+", "%20");
            } catch (Exception var3) {
                var3.printStackTrace();
            }

            return encodeUrl;
        }
    }

    public static void main(String[] args) {
        System.out.println("测试产生最大顺序号：" + genNextSerialNo("1", 6));
        System.out.println("测试trimWords()：" + trimWords("测试产生最大顺序号", 6));
    }
}
