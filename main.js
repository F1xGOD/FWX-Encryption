class basefwx{

    static b64encode(string){}
    static pb512encode(string, code) {
        function mdcode(string) {
          let st = String(string);
          let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
          let end = "";
          for (let bb of binaryvals) {
            end += String(parseInt(bb,2)).length + String(parseInt(bb,2));
          }
          return String(end);
        }
      
        function mainenc(string) {
          return String(BigInt(mdcode(string)) - BigInt(mdcode(code))).replace("-", "0");
        }
      
        return mainenc(string);
      };
    static pb512decode(string, code) {
        function mcode(strin) {
          let end = strin;
          let eand = Array.from(end);
          let finish = "";
          let ht = 0;
          let len = 0;
          let oht = 0;
          for (let een of eand) {
            ht += 1;
            if (een !== "") {
              if (ht === 1) {
                len = parseInt(een);
                finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
                oht = ht;
              }
              if (ht !== 1 && len + oht + 1 === ht) {
                len = parseInt(een);
                finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
                oht = ht;
              }
            }
          }
          return finish;
        }
    
        function mdcode(string) {
          let st = String(string);
          let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
          let end = "";
          for (let bb of binaryvals) {
            end += String(String(parseInt(bb,2)).length + String(parseInt(bb, 2)));
          }
          return String(end);
        }
    
        function maindc(string) {
          let result = "";
          let string2 = string;
          if (string2[0] === "0") {
            string2 = "-" + string2.slice(0,1);
          }
          result = mcode(String(BigInt(string2) + BigInt(mdcode(code))));
          return result;
        }
    
        return maindc(string);
      };
    
    static b512encode(string){
    function code(string) { const mapping = {'a':'e*1','b':'&hl','c':'*&Gs','d':'*YHA','e':'K5a{','f':'(*HGA(','g':'*&GD2','h':'+*jsGA','i':'(aj*a','j':'g%','k':'&G{A','l':'/IHa','m':'*(oa','n':'*KA^7','o':')i*8A','p':'*H)PA-G','q':'*YFSA','r':'O.-P[A','s':'{9sl','t':'*(HARR','u':'O&iA6u','v':'n):u','w':'&^F*GV','x':'(*HskW','y':'{JM','z':'J.!dA','A':'(&Tav','B':'t5','C':'*TGA3','D':'*GABD','E':'{A','F':'pW','G':'*UAK(','H':'&GH+','I':'&AN)','J':'L&VA','K':'(HAF5','L':'&F*Va','M':'^&FVB','N':'(*HSA$i','O':'*IHda&gT','P':'&*FAl','Q':')P{A]','R':'*Ha$g','S':'G)OA&','T':'|QG6','U':'Qd&^','V':'hA','W':'8h^va','X':'_9xlA','Y':'*J','Z':'*;pY&','':'R7a{','-':'}F','=':'OJ)_A','+':'}J','&':'%A','%':'y{A3s','#':'.aGa!','@':'l@','!':'/A','^':'OIp*a','*':'(U','(':'I*Ua]',')':'{0aD','{':'Av[','}':'9j','[':'[a)',']':'*&GBA','|':']Vc!A','/':')*HND_','~':'(&*GHA',';':'K}N=O',':':'YGOI&Ah','?':'Oa','.':'8y)a','>':'0{a9','<':'v6Yha',',':'I8ys#','0':'(HPA7','1':'}v','2':'*HAl%','3':'_)JHS','4':'IG(A','5':'(*GFD','6':'IU(&V','7':'(JH*G','8':'*GHBA','9':'U&G*C','\"':'I(a-s'};
    for (const [char, replacement] of Object.entries(mapping)) { string = string.split(char).join(replacement); };
    return string; };}
    
    }