def solution(rsp):
    answer = ''
    rsp_dic = {
        "2" : "0",
        "0" : "5",
        "5" : "2"
    }
    for c in rsp:
        answer += rsp_dic[c]
    return answer