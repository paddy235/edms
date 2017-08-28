//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package mor.commons.login;

import java.security.MessageDigest;

public class JDBCMD5 {
    public JDBCMD5() {
    }

    private static String byte2hex(byte[] b) {
        String hs = "";
        String stmp = "";

        for(int n = 0; n < b.length; ++n) {
            stmp = Integer.toHexString(b[n] & 255);
            if(stmp.length() == 1) {
                hs = hs + "0" + stmp;
            } else {
                hs = hs + stmp;
            }
        }

        return hs.toUpperCase();
    }

    public static String getMD5String(String oriStr) {
        try {
            MessageDigest alga = MessageDigest.getInstance("MD5");
            alga.update(oriStr.getBytes());
            byte[] digesta = alga.digest();
            return byte2hex(digesta);
        } catch (Exception var3) {
            var3.printStackTrace();
            return "";
        }
    }
}
