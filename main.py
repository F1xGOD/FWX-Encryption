import time
import basefwx
import base64
import sys
import pathlib
import os
import time


sys.set_int_max_str_digits(2000000000)

def read(file: str):
    with open(file, 'rb') as file:
        return file.read()
def read_normal(file: str):
    with open(file, 'r') as fil:
        return fil.read()
def write(file: str, content: bytes):
    with open(file, 'wb'):
        pass
    f = open(file, 'r+b')
    f.write(content)
    f.close()
def write_normal(file: str, content: str):
    f = open(file, 'w')
    f.write(content)
    f.close()
def encode(file: str,code: str):
    ext = basefwx.b512encode(pathlib.Path(file).suffix, code)
    en = str(basefwx.b512encode(base64.b64encode(read(file)).decode('utf-8'), code))
    return ext + "A8igTOmG" + en
def decode(content: str, code: str):
    extd = basefwx.b512decode(content.split("A8igTOmG")[0],code)
    return [base64.b64decode(basefwx.b512decode(content.split("A8igTOmG")[1],code)),extd]
def write_fl(nm,cont):
    with open(nm+".fwx", 'wb'):
        pass
    with open(nm+".fwx", 'r+b') as f:
       f.write(cont.encode('utf-8'))
       f.close()
def make_decoded(name, cd):
    os.chmod(pathlib.Path(name), 0o777)
    ct = read_normal(pathlib.Path(name).stem+".fwx")
    write(pathlib.Path(name).stem+decode(ct,cd)[1],decode(ct,cd)[0])
    os.remove(pathlib.Path(name))
def make_encoded(name, cd):
    write_fl(pathlib.Path(name).stem,encode(name,cd))
    os.chmod(pathlib.Path(pathlib.Path(name).stem+".fwx"),0)
    os.remove(pathlib.Path(pathlib.Path(name)))

inp = input("1. Encode\n2. Decode\nChoose An Option: ")
if inp == "1":
    fl = input("File Name: ")
    if pathlib.Path(fl).suffix==".fwx":
        print("Cant Encode More Than Once For Performance Reasons!")
        exit("-1")
    if not os.path.isfile(fl):
        print("File Does Not Seem To Exist!")
        exit("-1")
    pd = input("Enter A Password: ")
    try:
        make_encoded(fl,pd)
    except:
        print("An Error Occurred!")
if inp == "2":
    fl = input("File Name: ")
    if not os.path.isfile(fl):
        print("File Does Not Seem To Exist!")
        exit("-1")
    if not pathlib.Path(fl).suffix==".fwx":
        print("You Need An Encoded File To Decode It!")
        exit("-1")
    pd = input("Enter A Password: ")
    try:
        make_decoded(fl,pd)
    except:
        print("Incorrect Password!")








