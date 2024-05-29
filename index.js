// POST DATE
const months=['січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень'],monthMin = ['','','','','','','','','','','',''],days = ['неділя','понеділок','вівторок','середа','четвер','п\'ятниця','субота'],daysMin = ['','','','','','',''],seasons = ['зима','весна','літо','осінь'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// CHAT SCRIPT
setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function () {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});

const OFFER = "OFFER";
const path = window.cdn_path || 'files/';

let now = new Date,
    mm =  (now.getMonth() + 1) < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1,
    day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;


function getResult() {
    const firstResult = ' ==нет симтомов== То, что у вас нет симптомов гипертонии это просто замечательно. Но, к сожалению, никто не застрахован от появления этой болезни и вы находитесь в группе риска. Поэтому, просто для профилактики, я могу порекомендовать вам препарат Tonuplex. Также от себя дам Вам скидку в 50% на первую покупку, потому что очень важно своевременно заняться своим здоровьем.'
    const secondResult = '==есть симтомов== Ваши ответы указывают на то, что есть высокий риск наличия у вас гипертонии. Поэтому я рекомендую Вам препарат Tonuplex для профилактики заболевания и нормализации давления. Также от себя я предоставлю Вам скидку в 50% на первую покупку, чтобы Вы могли его протестировать.'

    const currentBranch = localStorage.getItem('branch')

    if (currentBranch === '1') {
        // localStorage.setItem('branch', '2')
        return firstResult
    }

    if (currentBranch === '2') {
        // localStorage.setItem('branch', '1')
        return secondResult
    }
}


function startChat() {


    const withSymptoms= 'Válaszai azt jelzik, hogy önnél magas a hipertónia kockázata. Ezért javaslom a Tonuplexet a betegség megelőzésére és a vérnyomás normalizálására. Az első vásárláskor 50% kedvezményt is biztosítok önnek, hogy kipróbálhassa.'
    const withoutSymptoms = 'Az, hogy nincsenek magas vérnyomásra utaló tünetei, nagyszerű. De sajnos senki sem immunis a betegség kialakulása ellen, és ön a kockázati csoportba tartozik. Ezért a megelőzés érdekében ajánlom önnek a Tonuplexet. Az első vásárláskor 50% kedvezményt is biztosítok, mert nagyon fontos, hogy időben gondoskodjon az egészségéről. '

    const answerOptions = {
        question1: ['Muž','Žena'],
        question2: ['Méně než 40 let','40-45 let','46-50 let','Více než 50 let'],
        question3: ['Méně než 50 kg','50-60 kg','61-70 kg','Více než 70 kg'],
        question4: ['Ano, často','Někdy','Ne'],

        question5: ['Ano, ztratil jsem chuť k jídlu','Ano, chci jíst více než dříve','Ne, nic se nezměnilo'],
        question6: ['Ano, často','Někdy', 'Zřídka', 'Ne'],
        question7: ['Ano, často','Někdy','Ne'],
        question8: ['Ano, často','Někdy','Ne'],
        question9: ['Ano','Ne'],
    }


    const massange = [
        {
            m: "Dobrý den! Jmenuji se Tomáš Dragan. Jsem hepatolog s dvacetiletou praxí."
        }, {
            m: "Trápí vás pálení žáhy, diskomfort v žaludku, únava, poruchy trávicího traktu? Už jste si zvykli na hořkost v ústech, nadýmání a nevolnost? Přítomnost i jen 2-3 problémů z tohoto seznamu může svědčit o problémech s játry."
        }, {
            m: "Každý 25. člověk na světě umírá na onemocnění jater. Ve většině případů k tomu dojde proto, že lidé příliš pozdě reagují na přítomné příznaky. V 47 % případů lze vývoj nemoci předcházet, pokud se vyberou účinné prostředky."
        }, {
            m: "Doporučuji vám odpovědět na několik otázek a získat doporučení, jak zlepšit stav svých játer!"
        }, {
            m: '<p class="quest">Jaké je vaše pohlaví?</p>'
        }, {
            m: '<p class="quest">Kolik je vám let?</p>'
        }, {
            m: '<p class="quest">Jaká je vaše hmotnost?</p>'
        }, {
            m: '<p class="quest">Máte bolesti nebo nepříjemné pocity v pravé horní části břicha?</p>'
        }, {
            m: '<p class="quest">Zaznamenali jste nějaké změny v chuti k jídlu, včetně ztráty nebo zvýšení chuti k jídlu?</p>'
        }, {
            m: '<p class="quest">Cítíte se po jídle těžcí nebo nafouklí?</p>'
        }, {
            m: '<p class="quest">Trápí vás po jídle pálení žáhy?</p>'
        }, {
            m: '<p class="quest">Cítíte se často unavení nebo slabí?</p>'
        }, {
            m: "Děkujeme vám za těch pár minut, které jste již začali věnovat svému zdraví!"
        },{
            m: `
            Vaše odpovědi naznačují, že vaše játra potřebují pomoc. Její práce je v současné době poněkud problematická, což ovlivňuje vaši pohodu. Pokud svému tělu poskytnete potřebnou podporu, budete schopni vše normalizovat. V opačném případě by to mohlo mít katastrofální následky: 
           
            <ul class="components">
                <li class="components__item">Cirhóza</li>
                <li class="components__item">Hepatitida</li>
                <li class="components__item">Onemocnění tukem</li>
                <li class="components__item">Rakovina</li>
                <li class="components__item">a dokonce i smrt</li>
            </ul>  
            `
        }, {
            m: "Doporučuji, abyste se o své zdraví začali starat co nejdříve!"
        },{
            m: '<p class="quest">Chcete získat moje doporučení pro udržení zdraví jater?</p>'
        }, {
            m: 'Osobní vývoj mého týmu je <span class="accent">Heparix</span>. Pro větší pohodlí je vytvořen ve formě kapslí a pro bezpečnost a účinnost obsahuje pouze přírodní složky - ostropestřec mariánský, kořen pampelišky, listy artyčoku a kurkumu.'
        },  {
            m: `
                <picture>
                    <source media="(max-width: 600px)" srcset="${path}images/pack.png">
                    <source srcset="${path}images/prod-live.webp" type="image/webp">
                    <img class="chat-photo" src="${path}images/prod-live.png" alt="product">
                </picture>`
        },{
            m: `
            Působení složek přípravku Heparix je zaměřeno na:
           
            <ul class="components">
                <li class="components__item">čištění jater</li>
                <li class="components__item">obnovení a udržení normálního fungování</li>
                <li class="components__item">zlepšení metabolismu</li>
                <li class="components__item">posílení imunity</li>
                <li class="components__item">zlepšení celkového zdravotního stavu</li>
         
            </ul>  
            `
        }, {
            m: "Je důležité pomoci játrům se zotavit po konzumaci alkoholu, aby nedošlo k rozvoji komplikací. Heparix je přírodní prostředek, který je vhodný pro každého a bezpečně upravuje fungování organismu. Začněte pečovat o svá játra už teď!"
        },


        {
            m: 'Objednejte si  <span class="accent">Heparix</span> a <b>využijte jedinečnou 50% slevu ode mě.</b>'
        },
    ];

    let mass_id = 0,
        length_mass = 0,
        lengt_num_mas = 0,
        text = "",
        speedtext = 20, //40
        process = !0;

    function app() {
        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        if ($(".chat").height() + 100 > $(".content").height()) {
            $("#scroll_id").removeClass("hide");
            let n = $(".inp").val();
            $(".inp").val(++n)
        }
        const c =
            '<div class="chat-content-item manager ">' +
            '<div class="chat-content-desc">' +
            '<div class="chat-content-desc-item manager">' +
            '<p class="message-time" id="time">' + t + '</p>' +
            '<p class="text" id="mass' + mass_id + '"></p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $(`.chat-content-list`).append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    }

    function myMassange(e) {
        let s = new Date,
            t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
        $(`.chat-content-list`).append(n), $(".content").animate({
            scrollTop: $(`.chat-content-list`).height()
        }, 700), $("#scroll_id").addClass("hide")
    }

    function question1() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">${answerOptions.question1[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">${answerOptions.question1[1]}</span></div></div>`)
    }
    function choise1() {
        $(".question1M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question1[0]}`), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question1W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question1[1]}`), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question2() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">${answerOptions.question2[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">${answerOptions.question2[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">${answerOptions.question2[2]}</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">${answerOptions.question2[3]}</span></div></div>`)
    }
    function choise2() {
        $(".question2M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question2[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question2[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question2[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question2[3]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question3() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">${answerOptions.question3[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">${answerOptions.question3[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">${answerOptions.question3[2]}</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">${answerOptions.question3[3]}</span></div></div>`)
    }
    function choise3() {
        $(".question3M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question3[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question3[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question3[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question3[3]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question4() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">${answerOptions.question4[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">${answerOptions.question4[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">${answerOptions.question4[2]}</span></div></div>`)
    }
    function choise4() {
        $(".question4M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question4[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question4W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question4[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question4P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question4[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question5() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">${answerOptions.question5[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">${answerOptions.question5[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">${answerOptions.question5[2]}</span></div></div>`)
    }
    function choise5() {
        $(".question5M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question5[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question5W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question5[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question5P").click(() => {

            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question5[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question6() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">${answerOptions.question6[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">${answerOptions.question6[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question6Q">${answerOptions.question6[2]}</span></div><div class="chat-content-buttons-gender-block"><span class="question6E">${answerOptions.question6[3]}</span></div></div>`)
    }

    function choise6() {
        $(".question6M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question6[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question6[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6Q").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question6[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6E").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question6[3]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question7() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">${answerOptions.question7[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">${answerOptions.question7[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">${answerOptions.question7[2]}</span></div></div>`)
    }
    function choise7() {
        $(".question7M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                 process = !0;

            }, 500)
        }), $(".question7W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                 process = !0;

            }, 500)
        }), $(".question7P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                 process = !0;

            }, 500)
        }), $(".question7Q").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[3]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                 process = !0;

            }, 500)
        }), $(".question7E").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[4]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                 process = !0;

            }, 500)
        }), $(".question7R").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question7[5]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0;

            }, 500)
        }), $(".question7T").click(() => {
            massange[12].m = withoutSymptoms
            document.querySelector(".chat-content-buttons-gender").style.display = "none",
                myMassange(`${answerOptions.question7[6]}`),
                $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0;
            }, 500)
        })
    }
    function question8() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question8M">${answerOptions.question8[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question8W">${answerOptions.question8[1]}</span></div><div class="chat-content-buttons-gender-block"><span class="question8N">${answerOptions.question8[2]}</span></div></div>`)
    }
    function choise8() {
        $(".question8M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question8[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question8W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question8[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question8N").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question8[2]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question9() {
        $(".chat-content-list").append(`<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question9M">${answerOptions.question9[0]}</span></div><div class="chat-content-buttons-gender-block"><span class="question9W">${answerOptions.question9[1]}</span></div></div>`)
    }
    function choise9() {
        $(".question9M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question9[0]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question9W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange(`${answerOptions.question9[1]}`), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }
    function question10() {
        $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question10M">Да</span></div><div class="chat-content-buttons-gender-block"><span class="question10W">Нет</span></div></div>')
    }
    function choise10() {
        $(".question10M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Да"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question10W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Нет"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }



    function displayQuestionAndChoice(questionNumber) {
        if (lengt_num_mas === questionNumber && length_mass === massange[lengt_num_mas].m.length - 1) {
            window[`question${questionNumber + 1}`]();
            process = !1;
            window[`choise${questionNumber + 1}`]();
            $("#scroll_id").addClass("hide-q");
            $(".content").animate({
                scrollTop: $(".chat").height()
            }, 700, function () {
                $("#scroll_id").removeClass("hide-q");
            });
        }
    }

    // Функция для сохранения состояния пользователя
    function saveUserState(state) {
        localStorage.setItem("userState", JSON.stringify(state));
    }

    // Функция для получения состояния пользователя
    function getUserState() {
        const state = localStorage.getItem("userState");
        if (state) {
            return JSON.parse(state);
        }
        return null;
    }

    setTimeout(() => {
        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2);
        const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
        $(`.chat-content-list`).append(t), $("#scroll_id").click(function (e) {
            $(this).removeClass("hide-q"), $(".content").animate({
                scrollTop: $(".chat").height()
            }, 700)
        });
        const n = setInterval(function () {
            if (1 == process)
                if (lengt_num_mas != massange.length) {
                    if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 10 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 11 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question8(), process = !1, choise8(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 15 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question9(), process = !1, choise9(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700),

        
                        $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                        lengt_num_mas++, mass_id++, length_mass = 0, text = "", app();

    
                    }
                } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), setTimeout(() => startAfterChat(),  2000), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
        }, speedtext)
    }, 1e3), $(".content").scroll(function () {
        "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    });
    let $marker = $("#down-box");
    $(".content").scroll(function () {
        $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
    });


}

function startAfterChat() {
    const massange = [
        {
            m: '<p class="quest">Zajímá vás, co o přípravku Heparix říkají moji zákazníci?</p>'
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Zdeněk Bělaška</span> <picture><source srcset="${path}images/feedback-1.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-1.jpeg" alt="product"></picture> <p class="feedback__text">Neustále mě trápilo pálení žáhy, těžkost po jídle, hořkost v ústech a také jsem měla problémy se spánkem. Ukázalo se, že to bylo kvůli problémům s játry. Bylo to děsivé, protože tento orgán je velmi důležité. Heparix v kapslích naštěstí pomohl poměrně rychle normalizovat funkci jater. Jejich zvláštní výhodou je přirozenost a šetrný účinek na tělo. Mohu jej bez obav doporučit svým přátelům pro podporu a prevenci jater.</p></div>`
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Pavel Svoboda</span> <picture><source srcset="${path}images/feedback-2.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-2.jpeg" alt="product"></picture> <p class="feedback__text">K prudkému zhoršení funkce jater došlo po svatební oslavě přítele, a tedy po velkém množství tučného jídla a alkoholu. Měl jsem prudkou bolest v pravé horní části břicha, nevolnost a kvůli těžkosti jsem nemohl nic jíst. Heparix mi pomohl zmírnit negativní pocity a pak jsem ho užíval na normalizaci funkce jater. S tímto produktem jsem opravdu spokojený.</p></div>`
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Helena Loučková</span> <picture><source srcset="${path}images/feedback-3.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-3.jpeg" alt="product"></picture> <p class="feedback__text">Kvůli nabitému pracovnímu programu jsem několik měsíců jedla, co jsem musela, což ovlivnilo fungování celého mého těla. Bohužel to odnesly moje játra. Objevila se bolest v pravém boku, hořkost v ústech a nevolnost. Abych situaci napravila, užívala jsem kapsle Heparix. Hodně mi pomohly, i když jsem předtím výrobkům s čistě přírodním složením moc nevěřila. Doporučuji!</p></div>`
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Veronika Procházková</span> <picture><source srcset="${path}images/feedback-4.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-4.jpeg" alt="product"></picture> <p class="feedback__text">Dlouho jsem hledala příčinu své neustálé slabosti a únavy. Ukázalo se, že játra nezvládají své funkce. Kapsle <span class="accent">Heparix</span> mi pomohly očistit játra od toxinů a normalizovat jejích fungování. Jedná se o velmi dobrý prostředek.</p></div>`
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Jiří Klapil</span> <picture><source srcset="${path}images/feedback-5.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-5.jpeg" alt="product"></picture> <p class="feedback__text">Kapsle Heparix byly pro mě prvním krokem ke zhubnutí. Lidé často hledají příčinu své nadváhy ve vnějších faktorech, zatímco ve skutečnosti by měli zkoumat stav svého těla. V mém případě měly problémy s játry vliv na chuť k jídlu a pomalé trávení. Kapsle Heparix to dokázaly napravit. Produkt, který skutečně účinně pomáhá tělu.</p></div>`
        }, {
            m: `<div class="feedback"><span class="feedback__name text-bold">Alžběta Barešová</span> <picture><source srcset="${path}images/feedback-6.webp" type="image/webp"><img class="feedback__img" src="${path}images/feedback-6.jpeg" alt="product"></picture> <p class="feedback__text">Dlouho jsem měla problémy s játry, které se čas od času vracely. Z tohoto důvodu existuje mnoho zkušeností s užíváním různých prostředků. Heparix je přírodní a účinný, což ho kvalitativně odlišuje od ostatních. Tyto kapsle odstranily nepříjemné příznaky a na dlouhou dobu normalizovaly funkci jater. Jsem ráda, že jsem tento produkt našla.</p></div>`
        },  {
            m: "Je načase pečovat o svá játra, abyste mohli žít aktivně a zdravě! "
        }, {
            m: 'Objednejte si Heparix zde prostřednictvím chatu s <b>50% slevou.</b> Vyplňte formulář a náš konzultant vám zavolá a potvrdí vaši objednávku!'
        },
    ];

    let mass_id = 0,
        length_mass = 0,
        lengt_num_mas = 0,
        text = "",
        speedtext = 40, //40
        process = !0;

    function app() {
        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        if ($(".chat").height() + 100 > $(".content").height()) {
            $("#scroll_id").removeClass("hide");
            let n = $(".inp").val();
            $(".inp").val(++n)
        }
        const c =
            '<div class="chat-content-item manager ">' +
            '<div class="chat-content-desc">' +
            '<div class="chat-content-desc-item manager">' +
            '<p class="message-time" id="time">' + t + '</p>' +
            '<p class="text" id="massA' + mass_id + '"></p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $(`.chat-content-list-after`).append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    }

    function myMassange(e) {
        let s = new Date,
            t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
        $(`.chat-content-list-after`).append(n), $(".content").animate({
            scrollTop: $(`.chat`).height()
        }, 700), $("#scroll_id").addClass("hide")
    }

    function question11() {
        $(".chat-content-list-after").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question11M">Ano</span></div><div class="chat-content-buttons-gender-block"><span class="question11W">Ne</span></div></div>')
    }

    function choise11() {
        $(".question11M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ano"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question11W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ne"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    setTimeout(() => {
        // const savedUserState = getUserState();
        // if (savedUserState) {
        //     lengt_num_mas = savedUserState.lengt_num_mas;
        //     mass_id = savedUserState.mass_id;
        //     length_mass = savedUserState.length_mass;
        //     text = savedUserState.text;
        // }

        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2);
        const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="massA' + mass_id + '"></p></div></div></div>';
        $(`.chat-content-list-after`).append(t), $("#scroll_id").click(function (e) {
            $(this).removeClass("hide-q"), $(".content").animate({
                scrollTop: $(".chat").height()
            }, 700)
        });

        const n = setInterval(function () {
            if (1 == process)
                // console.log($("#massA" + lengt_num_mas).html(text));
            if (lengt_num_mas != massange.length) {
                    if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#massA" + lengt_num_mas).html(text), 0 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question11(), process = !1, choise11(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700),
                        $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                        lengt_num_mas++, mass_id++, length_mass = 0, text = "", app();

                        // Сохраняем состояние пользователя
                        // saveUserState({
                        //   lengt_num_mas: lengt_num_mas,
                        //   mass_id: mass_id,
                        //   length_mass: length_mass,
                        //   text: text
                        // });
                    }
                }
            else clearInterval(n),
                $("#massA" + lengt_num_mas).parent().parent().css("display", "none"),
                setTimeout(() => startChatEnding(),  300),
                $(".iframe-form-bottom").addClass("show"),
                $(".iframe-form").addClass("form-shown--first"),
                $(".btn-top").addClass("show"),



                $(".chat").append($("footer")),
                $("footer").addClass("show");

        }, speedtext)
    }, 1e3), $(".content").scroll(function () {
        "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    });
    let $marker = $("#down-box");
    $(".content").scroll(function () {
        $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
    });
}

function startChatEnding() {
    const massange = [
        {
            m: 'S pozdravem, Tomáš Dragan, hepatolog s dvacetiletou úspěšnou praxí. Byl jsem tu s vámi. Dávejte pozor na své tělo!'
        },
    ];

    let mass_id = 0,
        length_mass = 0,
        lengt_num_mas = 0,
        text = "",
        speedtext = 40, //40
        process = !0;

    function app() {
        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        if ($(".chat").height() + 100 > $(".content").height()) {
            $("#scroll_id").removeClass("hide");
            let n = $(".inp").val();
            $(".inp").val(++n)
        }
        const c =
            '<div class="chat-content-item manager ">' +
            '<div class="chat-content-desc">' +
            '<div class="chat-content-desc-item manager">' +
            '<p class="message-time" id="time">' + t + '</p>' +
            '<p class="text" id="massE' + mass_id + '"></p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $(`.chat-content-list-end`).append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    }

    function myMassange(e) {
        let s = new Date,
            t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
        // console.log($(`.chat-content-list-end`).height());
        $(`.chat-content-list-end`).append(n), $(".content").animate({
            scrollTop: $(`.chat`).height()
        }, 700), $("#scroll_id").addClass("hide")
    }

    function question12() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question12ME">Ano</span></div><div class="chat-content-buttons-gender-block"><span class="question12WE">Ne</span></div></div>')
    }

    function choise12() {
        $(".question12ME").click(() => {
            // console.log(document.querySelector(".chat-content-buttons-gender"));
            document.querySelector(".chat-content-list-end .chat-content-buttons-gender").style.display = "none", myMassange("Ano"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question12WE").click(() => {
            document.querySelector(".chat-content-list-end .chat-content-buttons-gender").style.display = "none", myMassange("Ne"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question2() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Kevesebb, mint 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">60-70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">71-80 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Több mint 80 kg</span></div></div>')
    }

    function choise2() {
        $(".question2M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Kevesebb, mint 60 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("60-70 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("71-80 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question2T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Több mint 80 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question3() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Kevesebb mint 160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">160-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">171-180 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Több mint 180 cm</span></div></div>')
    }

    function choise3() {
        $(".question3M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Kevesebb mint 160 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("160-170 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("171-180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question3T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Több mint 180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question4() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Magas</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Közepes</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Alacsony</span></div></div>')
    }

    function choise4() {
        $(".question4M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Magas"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question4W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Közepes"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question4P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Alacsony"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question5() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Ano</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">Igyekszem betartani</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">Ne</span></div></div>')
    }

    function choise5() {
        $(".question5M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ano"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question5W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Igyekszem betartani"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question5P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ne"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question6() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Ano, gyakran</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">Néha</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">Ritkán</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">Ne</span></div></div>')
    }

    function choise6() {
        $(".question6M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ano, gyakran"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Néha"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ritkán"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question6T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ne"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question7() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Fokozott izzadás</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">Hőhullámok</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">Mindkét opció</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">Nincsenek menopauzás tüneteim</span></div></div>')
    }

    function choise7() {
        $(".question7M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fokozott izzadás"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question7W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Hőhullámok"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question7P").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Mindkét opció"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question7T").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Nincsenek menopauzás tüneteim"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question8() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question8M">Ano</span></div><div class="chat-content-buttons-gender-block"><span class="question8W">Ne</span></div></div>')
    }

    function choise8() {
        $(".question8M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ano"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question8W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ne"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function question9() {
        $(`.chat-content-list-end`).append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question9M">Ano</span></div><div class="chat-content-buttons-gender-block"><span class="question9W">Ne</span></div></div>')
    }

    function choise9() {
        $(".question9M").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ano"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        }), $(".question9W").click(() => {
            document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Ne"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
                process = !0
            }, 500)
        })
    }

    function displayQuestionAndChoice(questionNumber) {
        if (lengt_num_mas === questionNumber && length_mass === massange[lengt_num_mas].m.length - 1) {
            window[`question${questionNumber + 1}`]();
            process = !1;
            window[`choise${questionNumber + 1}`]();
            $("#scroll_id").addClass("hide-q");
            $(".content").animate({
                scrollTop: $(".chat").height()
            }, 700, function () {
                $("#scroll_id").removeClass("hide-q");
            });
        }
    }

    // Функция для сохранения состояния пользователя
    function saveUserState(state) {
        localStorage.setItem("userState", JSON.stringify(state));
    }

    // Функция для получения состояния пользователя
    function getUserState() {
        const state = localStorage.getItem("userState");
        if (state) {
            return JSON.parse(state);
        }
        return null;
    }

    setTimeout(() => {
        // const savedUserState = getUserState();
        // if (savedUserState) {
        //     lengt_num_mas = savedUserState.lengt_num_mas;
        //     mass_id = savedUserState.mass_id;
        //     length_mass = savedUserState.length_mass;
        //     text = savedUserState.text;
        // }

        let e = new Date,
            s = ("0" + e.getMinutes()).slice(-2);
        const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="massE' + mass_id + '"></p></div></div></div>';
        $(`.chat-content-list-end`).append(t), $("#scroll_id").click(function (e) {
            $(this).removeClass("hide-q"), $(".content").animate({
                scrollTop: $(".chat").height()
            }, 700)
        });

        const n = setInterval(function () {
            if (1 == process)
                if (lengt_num_mas != massange.length) {
                    if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#massE" + lengt_num_mas).html(text), 1 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question12(), process = !1, choise12(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700),


                        $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                        lengt_num_mas++, mass_id++, length_mass = 0, text = "", app();

                    }
                } else clearInterval(n), $("#massE" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form-bottom").addClass("show"), $(".iframe-form").addClass("form-shown--second"), $(".btn-top").addClass("show")
        }, speedtext)
    }, 1e3), $(".content").scroll(function () {
        "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    });
    let $marker = $("#down-box");
    $(".content").scroll(function () {
        $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
    });
}

startChat()

//POST request
function showModalMessage(text) {
    const modalWin = document.querySelector('.modal')
    const modalMessage = document.querySelector('.modal__message')

    modalMessage.innerHTML = text
    modalWin.classList.add('modal--active')

    setTimeout(function() {
        modalWin.classList.remove('modal--active')
    }, 4000)
}

function showFormMessage(text) {
    const formWrapper = document.querySelectorAll('.features-wrapper')
    const formBg = document.querySelectorAll('.boxit')
    
    formWrapper.forEach(wrapper => {
        const message = document.createElement('p')

        message.classList.add('form-message')
        message.innerHTML = text

        wrapper.innerHTML = ''
        wrapper.append(message)
    })

    formBg.forEach(bg => bg.classList.add('boxit--gray'))
}

function hideSecondForm() {
    const forms = document.querySelectorAll('form[action="/submit"]')

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const isFirstForm = form.closest('#form')
            const isSecondForm = form.closest('#form-bottom')

            const isPostForm = sessionStorage.getItem('submited')

            if (isFirstForm && isPostForm) {
                document.querySelector('#form').classList.add('form-submitted--first')
                document.querySelector('#form-bottom').style.display = 'none'
            }
            if (isSecondForm && isPostForm) {
                document.querySelector('#form-bottom').classList.add('form-submitted--second')
                document.querySelector('#form').style.display = 'none'
            }

        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // sendForm()
    hideSecondForm()
})