const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const nightmare = Nightmare({show:false});


module.exports.snapdeal = (req,res) =>{
    nightmare
    .goto('https://www.snapdeal.com')
    .wait('body')
    .type('input#inputValEnter','book')
    .click('button.searchformButton')
    .wait('div#products')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end()
    .then(html =>{
        data=[];
        var name = String;
        var pr = "";
        var haha=0;
        const $ = cheerio.load(html);
        $('div#products').find('section>div').each((r,elem)=>{
            $(elem).find('p.product-title').each((row,title)=>{
                if (row==0){
                    name=$(title).text();
                }
            });
            $(elem).find('div.product-price-row>div>span').each((row,priceitem)=>{
                if (row==1){
                    pr=$(priceitem).text().substring(3);
                }
            });
            link=$(elem).find('a').attr('href');                    //for now this is working only one is undefined
                // img_link=$(elem).find('img.product-image').attr('src');
            
            img_link=$(elem).find('source').attr('srcset');
            
            if (name){
                data.push({
                    title: name,
                    price: pr,
                    img: img_link,
                    redirect: link
                });
            }
            pr="";
            name="";
        });
        return res.status(200).json({'status':true,'data':data});
    })
    .catch(err =>{
        return res.status(200).json({'status':false,'error':err})
    });
}