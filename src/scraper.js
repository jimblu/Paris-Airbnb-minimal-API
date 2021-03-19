const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const fetchData = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://www.airbnb.fr/s/Paris/homes?flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=march&source=structured_search_input_header&search_type=filter_change&tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&flexible_trip_lengths%5B%5D=weekend_trip&price_max=54&room_types%5B%5D=Entire%20home%2Fapt&room_types%5B%5D=Private%20room&superhost=true&neighborhood_ids%5B%5D=1980&neighborhood_ids%5B%5D=1981&neighborhood_ids%5B%5D=1982&neighborhood_ids%5B%5D=1983&neighborhood_ids%5B%5D=1984&neighborhood_ids%5B%5D=1985&neighborhood_ids%5B%5D=1986&neighborhood_ids%5B%5D=1988&neighborhood_ids%5B%5D=1989&neighborhood_ids%5B%5D=1990&neighborhood_ids%5B%5D=1991&neighborhood_ids%5B%5D=1992&neighborhood_ids%5B%5D=1993&neighborhood_ids%5B%5D=1994&neighborhood_ids%5B%5D=1995&neighborhood_ids%5B%5D=1996&neighborhood_ids%5B%5D=1997&neighborhood_ids%5B%5D=1999&neighborhood_ids%5B%5D=2000&neighborhood_ids%5B%5D=2001&place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ');

    const content = await page.content();
    const $ = cheerio.load(content);
    let rooms = [];
    try{
        const parent = $('._fhph4u');
        parent.children().each((i, e) => {
            let commentsNum = $(e).find($('._a7a5sx')).text().trim();
            rooms.push({
                title: $(e).find($('._b14dlit')).text(),
                subtitle: $(e).find($($('._bzh5lkq'))).text(),
                info: $($(e).find($('._kqh46o'))[0]).text(),
                addInfo: $($(e).find($('._kqh46o'))[1]).text(),
                stars: parseFloat($(e).find($('._10fy1f8')).text()),
                comments: parseInt(commentsNum.split('').slice(1, commentsNum.length -1).join('')),
                image: $(e).find('img').attr('src')

            })
        });
        return rooms;
    } catch (err) {
        console.log(err);
    }
    await browser.close();
}
module.exports = fetchData;