const moment = require("moment");

const sanTime = {
    showTime: (time) => {
        // console.log(moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'))
        let currentTime = moment();
        let today_time = moment().startOf('day');
        let yestoday_time = moment().subtract(1, 'days').startOf('day');
        let week_time = moment().subtract(1, 'weeks');
        let year_time = moment().startOf('year');
        if (moment(time).isBetween(today_time, currentTime)) {
            return moment(time).format('HH:mm');
        } else if (moment(time).isBetween(yestoday_time, currentTime)) {
            return '昨天';
        } else if (moment(time).isBetween(week_time, currentTime)) {
            return moment(time).format('ddd');
        } else if (moment(time).isBetween(year_time, currentTime)) {
            return moment(time).format('MM-DD');
        } else {
            return moment(time).format('YYYY-MM-DD')
        }
        
    }
}

export default sanTime