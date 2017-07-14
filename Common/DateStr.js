/**
 * Created by LinGaunnan on 7/4/2017.
 */



function Date2Str(format) {
    var date = new Date();
    var Year = date.getFullYear();

    var Month = date.getMonth() + 1;
    if (Month < 10) Month = "0" + Month;

    var Day = date.getDate();
    if (Day < 10) Day = "0" + Day;

    var Dat = date.getDay();

    var Hour = date.getHours();
    if (Hour < 10) Hour = "0" + Hour;

    var Minute = date.getMinutes();
    if (Minute < 10) Minute = "0" + Minute;

    var Second = date.getSeconds();
    if (Second < 10) Second = "0" + Second;

    format = format.replace('yyyy', Year);
    format = format.replace('MM', Month);
    format = format.replace('dd', Day);
    format = format.replace('HH', Hour);
    format = format.replace('hh', (Hour + 12) % 12);
    format = format.replace('mm', Minute);
    format = format.replace('ss', Second);
    format = format.replace('DD', Dat);
    return format;
}
module.exports = Date2Str;