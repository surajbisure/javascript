function register()
{
    var uid=document.reg.uid;
    var password=document.reg.pass;
    var mobile=document.reg.mob;
    var address=document.reg.add;
    var age=document.reg.age;

    if (uid.value.length<3 || uid.value.length>15)
    {
        window.alert("please enter min 3 and max 15 character of user id");
        uid.focus();
        return false;
    }
    if(password.value.length<8)
    {
        window.alert("please enter min 8 character password")
        password.focus();
        return false;
    }
    if(mobile.value.length!=10)
    {
        window.alert("please enter 10 digit mob no");
        mobile.focus();
        return false;
    }
    if(age.value<18 || age.value>100)
    {
        window.alert("please enter age between 18 to 100")
        age.focus();
        return false;
    }
    return true;
}