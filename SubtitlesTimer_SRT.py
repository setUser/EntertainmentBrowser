import io
import re
#-----------------------------------------------------------------------------------------------------------------------------------------
print("Rute = D:\\Downloads\\", end = "")
rute = "D:\\Downloads\\"+input()+".srt"
print("Increase or Decrease Seconds (+/-) = ", end = "")
change = float(input())
#-----------------------------------------------------------------------------------------------------------------------------------------
def under10 (x):
    return "0"+str(x) if int(x) < 10 else str(x)
def under100 (x):
    return "0"+str(x) if int(x) < 100 else str(x)
txt = ""
file = open(rute, "r")
for line in file.readlines():
    #             00000000001111111111222222222
    #             01234567890123456789012345678
    #             Hr:Mn:Sc:MSc --> Hr:Mn:Sc:MSc
    if re.search("..:..:..,... --> ..:..:..,...", line) :
        m1 = int(line[3:5])
        s1 = int(line[6:8])+int(change)
        ms1 = int((change-int(change))*1000)+int(line[9:12])
        while ms1 < 0:
            s1 -= 1
            ms1 += 1000
        while ms1 > 999:
            s1 += 1
            ms1 -= 1000
        while s1 < 0:
            m1 -= 1
            s1 += 60
        while s1 > 59:
            m1 += 1
            s1 -= 60
        #--------------------------------------------------------
        m2 = int(line[20:22])
        s2 = int(line[23:25])+int(change)
        ms2 = int((change-int(change))*1000)+int(line[26:29])
        while ms2 < 0:
            s2 -= 1
            ms2 += 1000
        while ms2 > 999:
            s2 += 1
            ms2 -= 1000
        while s2 < 0:
            m2 -= 1
            s2 += 60
        while s2 > 59:
            m2 += 1
            s2 -= 60
        #--------------------------------------------------------
        m1 = under10(m1)
        s1 = under10(s1)
        ms1 = under100(ms1)
        ms1 = under10(ms1)
        m2 = under10(m2)
        s2 = under10(s2)
        ms2 = under100(ms2)
        ms2 = under10(ms2)
        #--------------------------------------------------------
        txt += line[0:3] + m1 + ':' + s1 + ',' + ms1 + " --> " + line[17:20] + m2 + ':' + s2 + "," + ms2 + '\n'
    else :
        txt += line
file.close
file = open(rute, "w")
file.write(txt)
file.close
print("\nDone !!!")