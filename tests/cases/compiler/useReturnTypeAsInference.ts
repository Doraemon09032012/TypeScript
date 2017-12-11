interface SmartPhone {
    color: 'silver' | 'black';
}

var a:SmartPhone[] = [];
a = [1,2,3,4,5].map(v=>({color:'silver'}));

