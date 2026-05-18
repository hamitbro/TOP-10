const rankingsData = {
    kg: {
        sports: [
            { id: 1, name: "Жоломан Шаршенбеков", category: "Күрөш", score: "Дүйнө чемпиону" },
            { id: 2, name: "Акжол Махмудов", category: "Күрөш", score: "Олимпиада чемпиону" },
            { id: 3, name: "Валентина Шевченко", category: "UFC", score: "7 жолку чемпион" },
            { id: 4, name: "Айсулуу Тыныбекова", category: "Күрөш", score: "Дүйнө чемпиону" },
            { id: 5, name: "Мыктыбек Оролбай", category: "UFC", score: "UFC Мушкери" },
            { id: 6, name: "Мээрим Жуманазарова", category: "Күрөш", score: "Олимпиада призёру" },
            { id: 7, name: "Эрназар Акматалиев", category: "Күрөш", score: "Дүйнө призёру" },
            { id: 8, name: "Амантур Исмаилов", category: "Күрөш", score: "Азия чемпиону" },
            { id: 9, name: "Рафаэль Физиев", category: "UFC", score: "UFC Топ-10" },
            { id: 10, name: "Бусурманкул Абдубаит уулу", category: "MMA", score: "Eagle FC чемпиону" }
        ],
        bloggers: [
            { id: 1, name: "Даирбек Раев", category: "Вайндар", score: "1.5M катталуучу" },
            { id: 2, name: "Элдана Foureyes", category: "Лайфстайл", score: "1.2M катталуучу" },
            { id: 3, name: "Балыкчы Бой", category: "Юмор", score: "800K катталуучу" },
            { id: 4, name: "Адис Канатбеков", category: "Пранктар", score: "700K катталуучу" },
            { id: 5, name: "Саадат Эгембердиева", category: "Сулуулук", score: "600K катталуучу" },
            { id: 6, name: "Нурбек Савитахунов", category: "Музыка", score: "500K катталуучу" },
            { id: 7, name: "Гүлзат Мамытбек", category: "Мотивация", score: "450K катталуучу" },
            { id: 8, name: "Нагима Акиева", category: "Юмор", score: "900K катталуучу" },
            { id: 9, name: "Argen BY", category: "Тренддер", score: "15M катталуучу" },
            { id: 10, name: "Эмил Эсеналиев", category: "Шоу/Юмор", score: "1.1M катталуучу" }
        ],
        rich: [
            { id: 1, name: "Аскар Салымбеков", category: "Бизнес", score: "Дордой Ассоциациясы", image: "images/salymbekov.jpg" },
            { id: 2, name: "Өмүрбек Бабанов", category: "Бизнес/Саясат", score: "АКБ Кыргызстан", image: "images/babanov.jpg" },
            { id: 3, name: "Шаршенбек Абдыкеримов", category: "Өндүрүш", score: "Аю Холдинг", image: "images/sharshenbek.jpg" },
            { id: 4, name: "Динара Исаева", category: "Бизнес", score: "Кыймылсыз мүлк", image: "images/isaeva.jpg" },
            { id: 5, name: "Нариман Түлеев", category: "Бизнес", score: "Соода борборлору", image: "images/tuleev.jpg" },
            { id: 6, name: "Райымбек Матраимов", category: "Мамлекеттик кызмат", score: "Бажы тармагы", image: "images/rayim.jpg" },
            { id: 7, name: "Азиз Сурмаматов", category: "Курулуш", score: "Курулуш компаниялары", image: "images/aziz.jpg" },
            { id: 8, name: "Жалил Атамбаев", category: "Бизнес", score: "Ош аймагы", image: "images/jalil.jpg" },
            { id: 9, name: "Нурлан Сулайманов", category: "Бизнес", score: "Транспорт/Логистика", image: "images/nurlan_s.jpg" },
            { id: 10, name: "Темир Сариев", category: "Саясат/Бизнес", score: "Өндүрүш", image: "images/temir.jpg" }
        ],
        cyber: [
            { id: 1, name: "Бакыт Эмилжанов (Zayac)", category: "Dota 2", score: "Team Liquid / Secret" },
            { id: 2, name: "Айбек Токаев (TA2000)", category: "Dota 2", score: "Quest Esports" },
            { id: 3, name: "Евгений Ри (Blizzy)", category: "Dota 2", score: "Natus Vincere" },
            { id: 4, name: "Кыялбек Тайиров (Dream')", category: "Dota 2", score: "Gambit Esports" },
            { id: 5, name: "Абдималик Сайлау (Malik)", category: "Dota 2", score: "PSG Quest" },
            { id: 6, name: "Бакытжан Рустембеков", category: "CS:GO", score: "Про оюнчу" },
            { id: 7, name: "Hydra Team", category: "Dota 2", score: "Топ Команда" },
            { id: 8, name: "Blacklist International", category: "PUBG Mobile", score: "Топ Команда" },
            { id: 9, name: "Руслан Темиралиев", category: "FIFA", score: "КР чемпиону" },
            { id: 10, name: "Мирлан Мырзаев", category: "Mobile Legends", score: "Топ Стример" }
        ],
        companies: [
            { id: 1, name: "Mbank", category: "Финансы", score: "Эң популярдуу колдонмо" },
            { id: 2, name: "О! (Нур Телеком)", category: "Телеком", score: "Миллиондогон кардар" },
            { id: 3, name: "Beeline", category: "Телеком", score: "Эл аралык тармак" },
            { id: 4, name: "Mega", category: "Телеком", score: "Мамлекеттик байланыш" },
            { id: 5, name: "Оптима Банк", category: "Финансы", score: "Топ Банк" },
            { id: 6, name: "Кумтөр", category: "Өндүрүш", score: "Эң чоң ишкана" },
            { id: 7, name: "Шоро", category: "Суусундук", score: "Улуттук бренд" },
            { id: 8, name: "Куликовский", category: "Кондитер", score: "Топ Кондитер үйү" },
            { id: 9, name: "Elite House", category: "Курулуш", score: "Премиум үйлөр" },
            { id: 10, name: "Avangard Style", category: "Курулуш", score: "Топ Курулуш" }
        ],
        uni: [
            { id: 1, name: "АУца (AUCA)", category: "Эл аралык", score: "Топ 1 Билим" },
            { id: 2, name: "Кыргыз-Түрк 'Манас' университети", category: "Мамлекеттик", score: "Акысыз билим" },
            { id: 3, name: "Медициналык Академия (КГМА)", category: "Медицина", score: "Топ Дарыгерлер" },
            { id: 4, name: "Политех (КГТУ)", category: "Техникалык", score: "Инженерлер ордосу" },
            { id: 5, name: "КРСУ (Славян)", category: "Эл аралык", score: "Орус-Кыргыз билими" },
            { id: 6, name: "КНУ (Улуттук)", category: "Мамлекеттик", score: "Эң эски ЖОЖ" },
            { id: 7, name: "БГУ", category: "Гуманитардык", score: "Тил үйрөнүү" },
            { id: 8, name: "Ала-Тоо (Эл аралык)", category: "Жеке", score: "IT жана Бизнес" },
            { id: 9, name: "ОшМУ (ОшГУ)", category: "Аймактык", score: "Түштүк борбору" },
            { id: 10, name: "Юридикалык Академия (КГЮА)", category: "Укук", score: "Топ Юристтер" }
        ],
        tiktok: [
            { id: 1, name: "Argen BY", category: "Сигма", score: "15M+ Катталуучу" },
            { id: 2, name: "Hommerson", category: "Комедия", score: "5M+ Катталуучу" },
            { id: 3, name: "Kagura", category: "Бий", score: "3M+ Катталуучу" },
            { id: 4, name: "Salavat k", category: "Вайндар", score: "2.5M+ Катталуучу" },
            { id: 5, name: "Adis (Black Shark)", category: "Пранктар", score: "2M+ Катталуучу" },
            { id: 6, name: "Ayan (Ayanvines)", category: "Социалдык", score: "1.8M+ Катталуучу" },
            { id: 7, name: "Eldiyar (Eldivines)", category: "Лайфстайл", score: "1.5M+ Катталуучу" },
            { id: 8, name: "Begimay (Begi)", category: "Сулуулук", score: "1.2M+ Катталуучу" },
            { id: 9, name: "Uluk (Ulukman)", category: "Стрит-арт", score: "1M+ Катталуучу" },
            { id: 10, name: "Chika (Chikavines)", category: "Комедия", score: "900K Катталуучу" }
        ],
        music: [
            { id: 1, name: "Мирбек Атабеков - Мурас", category: "Поп", score: "50M+ Көрүү" },
            { id: 2, name: "Jax 02.14 - 18", category: "Поп-рэп", score: "45M+ Көрүү" },
            { id: 3, name: "Bakr - Отражение", category: "Инди-поп", score: "40M+ Көрүү" },
            { id: 4, name: "Ulukmanapo - Расстояние", category: "Рэп", score: "35M+ Көрүү" },
            { id: 5, name: "Нурлан Насип - Эркелетсемби", category: "Эстрада", score: "30M+ Көрүү" },
            { id: 6, name: "Асел Кадырбекова - Баарын кайрадан", category: "Эстрада", score: "25M+ Көрүү" },
            { id: 7, name: "Гүлжигит Сатыбеков - Лейлектик кыз", category: "Шансон", score: "22M+ Көрүү" },
            { id: 8, name: "Freeman 996 - Кыргызстан", category: "Рэп", score: "20M+ Көрүү" },
            { id: 9, name: "Аяна Касымова - Сүрөтүңө", category: "Ретро-кавер", score: "18M+ Көрүү" },
            { id: 10, name: "Мирбек Атабеков - Моя любовь", category: "Поп", score: "17M+ Көрүү" }
        ],
        kokboru: [
            { id: 1, name: "Ынтымак (Талас)", category: "Команда", score: "КР Чемпиону" },
            { id: 2, name: "Достук (Ош)", category: "Команда", score: "Көп жолку чемпион" },
            { id: 3, name: "Сары-Өзөн (Чүй)", category: "Команда", score: "Топ команда" },
            { id: 4, name: "Манас Ниязов", category: "Оюнчу", score: "Мыкты чабуулчу" },
            { id: 5, name: "Мурас (Талас)", category: "Команда", score: "Жогорку лига" },
            { id: 6, name: "Сейил (Жалал-Абад)", category: "Команда", score: "Топ-5" },
            { id: 7, name: "Биримдик", category: "Команда", score: "Жогорку лига" },
            { id: 8, name: "Өмүрбек Эсен уулу", category: "Оюнчу", score: "Мыкты коргоочу" },
            { id: 9, name: "Айбек Нарматов", category: "Оюнчу", score: "Легендарлуу оюнчу" },
            { id: 10, name: "Күрөң (Ат)", category: "Ат", score: "Эң мыкты ат" }
        ],
        mma: [
            { id: 1, name: "Валентина Шевченко", category: "UFC", score: "Дүйнө чемпиону" },
            { id: 2, name: "Мыктыбек Оролбай", category: "UFC", score: "Топ-15 UFC" },
            { id: 3, name: "Рафаэль Физиев", category: "UFC", score: "Топ Lightweight" },
            { id: 4, name: "Бусурманкул Абдубаит уулу", category: "Eagle FC", score: "Мурдагы чемпион" },
            { id: 5, name: "Антонина Шевченко", category: "UFC", score: "Про-мушкер" },
            { id: 6, name: "Бекзат Алмаз уулу", category: "MMA", score: "Жаш жылдыз" },
            { id: 7, name: "Раззак Бейшекеев", category: "MMA", score: "Перспективалуу" },
            { id: 8, name: "Каныбек Касымов", category: "MMA", score: "Топ мушкер" },
            { id: 9, name: "Төлөгөн Рахманберди уулу", category: "MMA", score: "Регионалдык чемпион" },
            { id: 10, name: "Азатбек Анарбай уулу", category: "MMA", score: "Топ рейтинг" }
        ],
        football: [
            { id: 1, name: "Гүлжигит Алыкулов", category: "Оюнчу", score: "Неман / КР курамасы" },
            { id: 2, name: "Мирлан Мурзаев", category: "Оюнчу", score: "Легендарлуу бомбардир" },
            { id: 3, name: "Алимардан Шукуров", category: "Оюнчу", score: "Топ жарым коргоочу" },
            { id: 4, name: "Абдыш-Ата (Кант)", category: "Клуб", score: "КР Чемпиону" },
            { id: 5, name: "Дордой (Бишкек)", category: "Клуб", score: "Эң көп титулдуу" },
            { id: 6, name: "Валерий Кичин", category: "Оюнчу", score: "Коргоочу / Капитан" },
            { id: 7, name: "Эрбол Атабаев", category: "Оюнчу", score: "Волгарь" },
            { id: 8, name: "Алай (Ош)", category: "Клуб", score: "Топ команда" },
            { id: 9, name: "Мурас Юнайтед", category: "Клуб", score: "Кубок ээси" },
            { id: 10, name: "Бекназ Алмазбеков", category: "Оюнчу", score: "Галатасарай (Жаштар)" }
        ],
        volleyball: [
            { id: 1, name: "Улар (Бишкек)", category: "Клуб", score: "Топ команда" },
            { id: 2, name: "EREM (Ош)", category: "Клуб", score: "Көп жолку чемпион" },
            { id: 3, name: "Онол Каныбек уулу", category: "Оюнчу", score: "Мыкты чабуулчу" },
            { id: 4, name: "Жалын (Жалал-Абад)", category: "Клуб", score: "Күчтүү команда" },
            { id: 5, name: "Мурат Исаков", category: "Оюнчу", score: "Топ блокатор" },
            { id: 6, name: "Салам-Алик", category: "Клуб", score: "Кыз-келиндер чемпиону" },
            { id: 7, name: "Темир Токтоев", category: "Оюнчу", score: "КР курамасы" },
            { id: 8, name: "ОшМУ", category: "Клуб", score: "Жогорку лига" },
            { id: 9, name: "Кыргызстан Курамасы", category: "Команда", score: "Чакырык кубогунун ээси" },
            { id: 10, name: "Нурмухаммед Токтоев", category: "Оюнчу", score: "Жаш талант" }
        ],
        arm: [
            { id: 1, name: "Шамил Исаков", category: "Кол күрөш", score: "Дүйнө чемпиону" },
            { id: 2, name: "Бакыт Догдурбек уулу", category: "Кол күрөш", score: "Азия чемпиону" },
            { id: 3, name: "Александр Ли", category: "Кол күрөш", score: "Дүйнө призёру" },
            { id: 4, name: "Евгений Лукьянов", category: "Кол күрөш", score: "Ветеран чемпион" },
            { id: 5, name: "Мыктыбек Садыков", category: "Кол күрөш", score: "Топ рейтинг" },
            { id: 6, name: "Заур Таиров", category: "Кол күрөш", score: "Азия призёру" },
            { id: 7, name: "Чыңгыз Садыков", category: "Кол күрөш", score: "КР чемпиону" },
            { id: 8, name: "Алишер Каримов", category: "Кол күрөш", score: "Жаш чемпион" },
            { id: 9, name: "Кубатбек уулу Асан", category: "Кол күрөш", score: "Топ-10" },
            { id: 10, name: "Кыргызстан Федерациясы", category: "Уюм", score: "Өнүктүрүүчү" }
        ],
        boxing: [
            { id: 1, name: "Дмитрий Бивол", category: "Бокс", score: "Дүйнө чемпиону (WBA)" },
            { id: 2, name: "Мунарбек Сейитбек уулу", category: "Бокс", score: "Олимпиада призёру" },
            { id: 3, name: "Азат Усеналиев", category: "Бокс", score: "Азия чемпиону" },
            { id: 4, name: "Эркин Адылбек уулу", category: "Бокс", score: "Олимпиада катышуучусу" },
            { id: 5, name: "Санжар Сейдакматов", category: "Бокс", score: "Дүйнө призёру" },
            { id: 6, name: "Өмүрбек Бекжигит уулу", category: "Бокс", score: "Азия призёру" },
            { id: 7, name: "Нуржигит Дүйшөбаев", category: "Бокс", score: "Жаш талант" },
            { id: 8, name: "Мирлан Түркбай уулу", category: "Бокс", score: "Топ-рейтинг" },
            { id: 9, name: "Сыймыкбек Абдыжапар уулу", category: "Бокс", score: "Азия чемпиону" },
            { id: 10, name: "Асылбек Таласбаев", category: "Бокс", score: "Ветеран" }
        ],
        cinema: [
            { id: 1, name: "Актан Арым Кубат", category: "Режиссёр", score: "Эл аралык сыйлыктар" },
            { id: 2, name: "Болот Шамшиев", category: "Режиссёр", score: "Кыргыз керемети (Легенда)" },
            { id: 3, name: "Азамат Уланов", category: "Актёр", score: "Комедия жылдызы" },
            { id: 4, name: "Руслан Акун", category: "Режиссёр", score: "Эң кассалуу фильмдер" },
            { id: 5, name: "Эмил Эсеналиев", category: "Актёр", score: "Элдик сүймөнчүк" },
            { id: 6, name: "Айсулуу Азимбаева", category: "Актриса", score: "Арт-хаус жана Театр" },
            { id: 7, name: "Садык Шер-Нияз", category: "Режиссёр", score: "Курманжан Датка" },
            { id: 8, name: "Болот Тентимышов", category: "Актёр", score: "Драма/Кино" },
            { id: 9, name: "Мирлан Абдулаев", category: "Актёр", score: "Топ боевиктер" },
            { id: 10, name: "Гаухар Шаршекеева", category: "Актриса", score: "Жаш талант" }
        ],
        it: [
            { id: 1, name: "Тилек Мамутов", category: "IT Профи", score: "Google/Out talent" },
            { id: 2, name: "Азис Абакиров", category: "IT Лидер", score: "IT Парк негиздөөчүсү" },
            { id: 3, name: "Эмил Уметалиев", category: "Бизнес/IT", score: "Kyrgyz Concept/High-tech" },
            { id: 4, name: "Динара Руслан", category: "IT Профи", score: "Codify негиздөөчүсү" },
            { id: 5, name: "Codify Academy", category: "Стартап", score: "Топ IT мектеп" },
            { id: 6, name: "Namba One", category: "Супер-апп", score: "Транспорт/Логистика" },
            { id: 7, name: "Growave", category: "SaaS", score: "Эл аралык стартап" },
            { id: 8, name: "AppMarket", category: "Стартап", score: "Жергиликтүү маркетплейс" },
            { id: 9, name: "Данияр Аманалиев", category: "IT/Creative", score: "ololo негиздөөчүсү" },
            { id: 10, name: "Dodo Pizza (KG IT)", category: "Технология", score: "Автоматизация лидер" }
        ],
    },
    ru: {
        sports: [
            { id: 1, name: "Жоломан Шаршенбеков", category: "Борьба", score: "Чемпион мира" },
            { id: 2, name: "Акжол Махмудов", category: "Борьба", score: "Олимпийский чемпион" },
            { id: 3, name: "Валентина Шевченко", category: "UFC", score: "7-кратная чемпионка" },
            { id: 4, name: "Айсулуу Тыныбекова", category: "Борьба", score: "Чемпион мира" },
            { id: 5, name: "Мыктыбек Оролбай", category: "UFC", score: "Боец UFC" },
            { id: 6, name: "Мээрим Жуманазарова", category: "Борьба", score: "Призёр Олимпиады" },
            { id: 7, name: "Эрназар Акматалиев", category: "Борьба", score: "Призёр мира" },
            { id: 8, name: "Амантур Исмаилов", category: "Борьба", score: "Чемпион Азии" },
            { id: 9, name: "Рафаэль Физиев", category: "UFC", score: "Топ-10 UFC" },
            { id: 10, name: "Бусурманкул Абдубаит уулу", category: "ММА", score: "Чемпион Eagle FC" }
        ],
        bloggers: [
            { id: 1, name: "Даирбек Раев", category: "Вайны", score: "1.5M подписчиков" },
            { id: 2, name: "Элдана Foureyes", category: "Лайфстайл", score: "1.2M подписчиков" },
            { id: 3, name: "Балыкчы Бой", category: "Юмор", score: "800K подписчиков" },
            { id: 4, name: "Адис Канатбеков", category: "Пранки", score: "700K подписчиков" },
            { id: 5, name: "Саадат Эгембердиева", category: "Красота", score: "600K подписчиков" },
            { id: 6, name: "Нурбек Савитахунов", category: "Музыка", score: "500K подписчиков" },
            { id: 7, name: "Гульзат Мамытбек", category: "Мотивация", score: "450K подписчиков" },
            { id: 8, name: "Нагима Акиева", category: "Юмор", score: "900K подписчиков" },
            { id: 9, name: "Argen BY", category: "Тренды", score: "15M подписчиков" },
            { id: 10, name: "Эмиль Эсеналиев", category: "Шоу/Юмор", score: "1.1M подписчиков" }
        ],
        rich: [
            { id: 1, name: "Аскар Салымбеков", category: "Бизнес", score: "Ассоциация Дордой", image: "images/salymbekov.jpg" },
            { id: 2, name: "Омурбек Бабанов", category: "Бизнес/Политика", score: "АКБ Кыргызстан", image: "images/babanov.jpg" },
            { id: 3, name: "Шаршенбек Абдыкеримов", category: "Производство", score: "Аю Холдинг", image: "images/sharshenbek.jpg" },
            { id: 4, name: "Динара Исаева", category: "Бизнес", score: "Недвижимость", image: "images/isaeva.jpg" },
            { id: 5, name: "Нариман Тюлеев", category: "Бизнес", score: "Торговые центры", image: "images/tuleev.jpg" },
            { id: 6, name: "Райымбек Матраимов", category: "Госслужба", score: "Таможенная сфера", image: "images/rayim.jpg" },
            { id: 7, name: "Азиз Сурмаматов", category: "Строительство", score: "Строительные компании", image: "images/aziz.jpg" },
            { id: 8, name: "Жалил Атамбаев", category: "Бизнес", score: "Ошский регион", image: "images/jalil.jpg" },
            { id: 9, name: "Нурлан Сулайманов", category: "Бизнес", score: "Транспорт/Логистика", image: "images/nurlan_s.jpg" },
            { id: 10, name: "Темир Сариев", category: "Политика/Бизнес", score: "Производство", image: "images/temir.jpg" }
        ],
        cyber: [
            { id: 1, name: "Бакыт Эмилжанов (Zayac)", category: "Dota 2", score: "Team Liquid / Secret" },
            { id: 2, name: "Айбек Токаев (TA2000)", category: "Dota 2", score: "Quest Esports" },
            { id: 3, name: "Евгений Ри (Blizzy)", category: "Dota 2", score: "Natus Vincere" },
            { id: 4, name: "Кыялбек Тайиров (Dream')", category: "Dota 2", score: "Gambit Esports" },
            { id: 5, name: "Абдималик Сайлау (Malik)", category: "Dota 2", score: "PSG Quest" },
            { id: 6, name: "Бакытжан Рустембеков", category: "CS:GO", score: "Про-игрок" },
            { id: 7, name: "Hydra Team", category: "Dota 2", score: "Топ Команда" },
            { id: 8, name: "Blacklist International", category: "PUBG Mobile", score: "Топ Команда" },
            { id: 9, name: "Руслан Темиралиев", category: "FIFA", score: "Чемпион КР" },
            { id: 10, name: "Мирлан Мырзаев", category: "Mobile Legends", score: "Топ Стример" }
        ],
        companies: [
            { id: 1, name: "Mbank", category: "Финансы", score: "Самое популярное приложение" },
            { id: 2, name: "О! (Нур Телеком)", category: "Телеком", score: "Миллионы клиентов" },
            { id: 3, name: "Beeline", category: "Телеком", score: "Международная сеть" },
            { id: 4, name: "Mega", category: "Телеком", score: "Государственная связь" },
            { id: 5, name: "Оптима Банк", category: "Финансы", score: "Топ Банк" },
            { id: 6, name: "Кумтор", category: "Производство", score: "Крупнейшее предприятие" },
            { id: 7, name: "Шоро", category: "Напитки", score: "Национальный бренд" },
            { id: 8, name: "Куликовский", category: "Кондитерская", score: "Топ Кондитерский дом" },
            { id: 9, name: "Elite House", category: "Строительство", score: "Премиум жилье" },
            { id: 10, name: "Avangard Style", category: "Строительство", score: "Топ Застройщик" }
        ],
        uni: [
            { id: 1, name: "АУца (AUCA)", category: "Международный", score: "Топ 1 Образование" },
            { id: 2, name: "Кыргызско-Турецкий университет 'Манас'", category: "Государственный", score: "Бесплатное образование" },
            { id: 3, name: "Медакадемия (КГМА)", category: "Медицина", score: "Лучшие врачи" },
            { id: 4, name: "Политех (КГТУ)", category: "Технический", score: "Кузница инженеров" },
            { id: 5, name: "КРСУ (Славянский)", category: "Международный", score: "Российско-Кыргызское образование" },
            { id: 6, name: "КНУ (Национальный)", category: "Государственный", score: "Старейший ВУЗ" },
            { id: 7, name: "БГУ", category: "Гуманитарный", score: "Изучение языков" },
            { id: 8, name: "Ала-Тоо (Международный)", category: "Частный", score: "IT и Бизнес" },
            { id: 9, name: "ОшГУ", category: "Региональный", score: "Центр юга" },
            { id: 10, name: "Юракадемия (КГЮА)", category: "Право", score: "Лучшие юристы" }
        ],
        tiktok: [
            { id: 1, name: "Argen BY", category: "Сигма", score: "15M+ Подписчиков" },
            { id: 2, name: "Hommerson", category: "Комедия", score: "5M+ Подписчиков" },
            { id: 3, name: "Kagura", category: "Танцы", score: "3M+ Подписчиков" },
            { id: 4, name: "Salavat k", category: "Вайны", score: "2.5M+ Подписчиков" },
            { id: 5, name: "Adis (Black Shark)", category: "Пранки", score: "2M+ Подписчиков" },
            { id: 6, name: "Ayan (Ayanvines)", category: "Социальное", score: "1.8M+ Подписчиков" },
            { id: 7, name: "Eldiyar (Eldivines)", category: "Лайфстайл", score: "1.5M+ Подписчиков" },
            { id: 8, name: "Begimay (Begi)", category: "Красота", score: "1.2M+ Подписчиков" },
            { id: 9, name: "Uluk (Ulukman)", category: "Стрит-арт", score: "1M+ Подписчиков" },
            { id: 10, name: "Chika (Chikavines)", category: "Комедия", score: "900K Подписчиков" }
        ],
        music: [
            { id: 1, name: "Мирбек Атабеков - Мурас", category: "Поп", score: "50M+ Просмотров" },
            { id: 2, name: "Jax 02.14 - 18", category: "Поп-рэп", score: "45M+ Просмотров" },
            { id: 3, name: "Bakr - Отражение", category: "Инди-поп", score: "40M+ Просмотров" },
            { id: 4, name: "Ulukmanapo - Расстояние", category: "Рэп", score: "35M+ Просмотров" },
            { id: 5, name: "Нурлан Насип - Эркелетсемби", category: "Эстрада", score: "30M+ Просмотров" },
            { id: 6, name: "Асель Кадырбекова - Баарын кайрадан", category: "Эстрада", score: "25M+ Просмотров" },
            { id: 7, name: "Гулжигит Сатыбеков - Лейлектик кыз", category: "Шансон", score: "22M+ Просмотров" },
            { id: 8, name: "Freeman 996 - Кыргызстан", category: "Рэп", score: "20M+ Просмотров" },
            { id: 9, name: "Аяна Касымова - Сүрөтүңө", category: "Ретро-кавер", score: "18M+ Просмотров" },
            { id: 10, name: "Мирбек Атабеков - Моя любовь", category: "Поп", score: "17M+ Просмотров" }
        ],
        kokboru: [
            { id: 1, name: "Ынтымак (Талас)", category: "Команда", score: "Чемпион КР" },
            { id: 2, name: "Достук (Ош)", category: "Команда", score: "Многократный чемпион" },
            { id: 3, name: "Сары-Озон (Чуй)", category: "Команда", score: "Топ команда" },
            { id: 4, name: "Манас Ниязов", category: "Игрок", score: "Лучший нападающий" },
            { id: 5, name: "Мурас (Талас)", category: "Команда", score: "Высшая лига" },
            { id: 6, name: "Сейил (Джалал-Абад)", category: "Команда", score: "Топ-5" },
            { id: 7, name: "Биримдик", category: "Команда", score: "Высшая лига" },
            { id: 8, name: "Омурбек Эсен уулу", category: "Игрок", score: "Лучший защитник" },
            { id: 9, name: "Айбек Нарматов", category: "Игрок", score: "Легендарный игрок" },
            { id: 10, name: "Курен (Конь)", category: "Лошадь", score: "Лучший конь" }
        ],
        mma: [
            { id: 1, name: "Валентина Шевченко", category: "UFC", score: "Чемпион мира" },
            { id: 2, name: "Мыктыбек Оролбай", category: "UFC", score: "Топ-15 UFC" },
            { id: 3, name: "Рафаэль Физиев", category: "UFC", score: "Топ Lightweight" },
            { id: 4, name: "Бусурманкул Абдубаит уулу", category: "Eagle FC", score: "Экс-чемпион" },
            { id: 5, name: "Антонина Шевченко", category: "UFC", score: "Про-боец" },
            { id: 6, name: "Бекзат Алмаз уулу", category: "ММА", score: "Молодая звезда" },
            { id: 7, name: "Раззак Бейшекеев", category: "ММА", score: "Перспективный" },
            { id: 8, name: "Каныбек Касымов", category: "ММА", score: "Топ боец" },
            { id: 9, name: "Тологен Рахманберди уулу", category: "ММА", score: "Региональный чемпион" },
            { id: 10, name: "Азатбек Анарбай уулу", category: "ММА", score: "Топ рейтинг" }
        ],
        football: [
            { id: 1, name: "Гулжигит Алыкулов", category: "Игрок", score: "Неман / Сборная КР" },
            { id: 2, name: "Мирлан Мурзаев", category: "Игрок", score: "Легендарный бомбардир" },
            { id: 3, name: "Алимардан Шукуров", category: "Игрок", score: "Топ полузащитник" },
            { id: 4, name: "Абдыш-Ата (Кант)", category: "Клуб", score: "Чемпион КР" },
            { id: 5, name: "Дордой (Бишкек)", category: "Клуб", score: "Самый титулованный" },
            { id: 6, name: "Валерий Кичин", category: "Игрок", score: "Защитник / Капитан" },
            { id: 7, name: "Эрбол Атабаев", category: "Игрок", score: "Волгарь" },
            { id: 8, name: "Алай (Ош)", category: "Клуб", score: "Топ команда" },
            { id: 9, name: "Мурас Юнайтед", category: "Клуб", score: "Обладатель Кубка" },
            { id: 10, name: "Бекназ Алмазбеков", category: "Игрок", score: "Галатасарай (Молодежка)" }
        ],
        volleyball: [
            { id: 1, name: "Улар (Бишкек)", category: "Клуб", score: "Топ команда" },
            { id: 2, name: "EREM (Ош)", category: "Клуб", score: "Многократный чемпион" },
            { id: 3, name: "Онол Каныбек уулу", category: "Игрок", score: "Лучший нападающий" },
            { id: 4, name: "Жалын (Джалал-Абад)", category: "Клуб", score: "Сильная команда" },
            { id: 5, name: "Мурат Исаков", category: "Игрок", score: "Топ блокирующий" },
            { id: 6, name: "Салам-Алик", category: "Клуб", score: "Чемпион среди женщин" },
            { id: 7, name: "Темир Токтоев", category: "Игрок", score: "Сборная КР" },
            { id: 8, name: "ОшГУ", category: "Клуб", score: "Высшая лига" },
            { id: 9, name: "Сборная Кыргызстана", category: "Команда", score: "Обладатель Кубка вызова" },
            { id: 10, name: "Нурмухаммед Токтоев", category: "Игрок", score: "Юный талант" }
        ],
         arm: [
            { id: 1, name: "Шамиль Исаков", category: "Армрестлинг", score: "Чемпион мира" },
            { id: 2, name: "Бакыт Догдурбек уулу", category: "Армрестлинг", score: "Чемпион Азии" },
            { id: 3, name: "Александр Ли", category: "Армрестлинг", score: "Призер мира" },
            { id: 4, name: "Евгений Лукьянов", category: "Армрестлинг", score: "Чемпион среди ветеранов" },
            { id: 5, name: "Мыктыбек Садыков", category: "Армрестлинг", score: "Топ рейтинг" },
            { id: 6, name: "Заур Таиров", category: "Армрестлинг", score: "Призер Азии" },
            { id: 7, name: "Чынгыз Садыков", category: "Армрестлинг", score: "Чемпион КР" },
            { id: 8, name: "Алишер Каримов", category: "Армрестлинг", score: "Юный чемпион" },
            { id: 9, name: "Кубатбек уулу Асан", category: "Армрестлинг", score: "Топ-10" },
            { id: 10, name: "Федерация Кыргызстана", category: "Организация", score: "Развивающая" }
        ],
        boxing: [
            { id: 1, name: "Дмитрий Бивол", category: "Бокс", score: "Чемпион мира (WBA)" },
            { id: 2, name: "Мунарбек Сейитбек уулу", category: "Бокс", score: "Призер Олимпиады" },
            { id: 3, name: "Азат Усеналиев", category: "Бокс", score: "Чемпион Азии" },
            { id: 4, name: "Эркин Адылбек уулу", category: "Бокс", score: "Участник Олимпиады" },
            { id: 5, name: "Санжар Сейдакматов", category: "Бокс", score: "Призер мира" },
            { id: 6, name: "Омурбек Бекжигит уулу", category: "Бокс", score: "Призер Азии" },
            { id: 7, name: "Нуржигит Дуйшебаев", category: "Бокс", score: "Юный талант" },
            { id: 8, name: "Мирлан Туркбай уулу", category: "Бокс", score: "Топ-рейтинг" },
            { id: 9, name: "Сыймыкбек Абдыжапар уулу", category: "Бокс", score: "Чемпион Азии" },
            { id: 10, name: "Асылбек Таласбаев", category: "Бокс", score: "Ветеран" }
        ],
        cinema: [
            { id: 1, name: "Актан Арым Кубат", category: "Режиссёр", score: "Международные награды" },
            { id: 2, name: "Болот Шамшиев", category: "Режиссёр", score: "Киргизское чудо (Легенда)" },
            { id: 3, name: "Азамат Уланов", category: "Актёр", score: "Звезда комедии" },
            { id: 4, name: "Руслан Акун", category: "Режиссёр", score: "Самые кассовые фильмы" },
            { id: 5, name: "Эмиль Эсеналиев", category: "Актёр", score: "Народный любимец" },
            { id: 6, name: "Айсулуу Азимбаева", category: "Актриса", score: "Арт-хаус и Театр" },
            { id: 7, name: "Садык Шер-Нияз", category: "Режиссёр", score: "Курманжан Датка" },
            { id: 8, name: "Болот Тентимышов", category: "Актёр", score: "Драма/Кино" },
            { id: 9, name: "Мирлан Абдулаев", category: "Актёр", score: "Топ боевиков" },
            { id: 10, name: "Гаухар Шаршекеева", category: "Актриса", score: "Юный талант" }
        ],
        it: [
            { id: 1, name: "Тилек Мамутов", category: "IT Профи", score: "Google/Out talent" },
            { id: 2, name: "Азис Абакиров", category: "IT Лидер", score: "Основатель IT Парка" },
            { id: 3, name: "Эмиль Уметалиев", category: "Бизнес/IT", score: "Kyrgyz Concept/High-tech" },
            { id: 4, name: "Динара Руслан", category: "IT Профи", score: "Основатель Codify" },
            { id: 5, name: "Codify Academy", category: "Стартап", score: "Топ IT школа" },
            { id: 6, name: "Namba One", category: "Супер-апп", score: "Транспорт/Логистика" },
            { id: 7, name: "Growave", category: "SaaS", score: "Международный стартап" },
            { id: 8, name: "AppMarket", category: "Стартап", score: "Местный маркетплейс" },
            { id: 9, name: "Данияр Аманалиев", category: "IT/Креатив", score: "Основатель ololo" },
            { id: 10, name: "Dodo Pizza (KG IT)", category: "Технологии", score: "Лидер автоматизации" }
        ]
    },
    en: {
        sports: [
            { id: 1, name: "Zholaman Sharshenbekov", category: "Wrestling", score: "World Champion" },
            { id: 2, name: "Akzhol Makhmudov", category: "Wrestling", score: "Olympic Champion" },
            { id: 3, name: "Valentina Shevchenko", category: "UFC", score: "7-time Champion" },
            { id: 4, name: "Aisuluu Tynybekova", category: "Wrestling", score: "World Champion" },
            { id: 5, name: "Myktybek Orolbay", category: "UFC", score: "UFC Fighter" },
            { id: 6, name: "Meerim Zhumanazarova", category: "Wrestling", score: "Olympic Medalist" },
            { id: 7, name: "Ernazar Akmataliev", category: "Wrestling", score: "World Medalist" },
            { id: 8, name: "Amantur Ismailov", category: "Wrestling", score: "Asian Champion" },
            { id: 9, name: "Rafael Fiziev", category: "UFC", score: "UFC Top-10" },
            { id: 10, name: "Busurmankul Abdubait uulu", category: "MMA", score: "Eagle FC Champion" }
        ],
        bloggers: [
            { id: 1, name: "Dairbek Raev", category: "Vines", score: "1.5M followers" },
            { id: 2, name: "Eldana Foureyes", category: "Lifestyle", score: "1.2M followers" },
            { id: 3, name: "Balykchi Boy", category: "Humor", score: "800K followers" },
            { id: 4, name: "Adis Kanatbekov", category: "Pranks", score: "700K followers" },
            { id: 5, name: "Saadat Egemberdieva", category: "Beauty", score: "600K followers" },
            { id: 6, name: "Nurbek Savitahunov", category: "Music", score: "500K followers" },
            { id: 7, name: "Gulzat Mamytbek", category: "Motivation", score: "450K followers" },
            { id: 8, name: "Nagima Akieva", category: "Humor", score: "900K followers" },
            { id: 9, name: "Argen BY", category: "Trends", score: "15M followers" },
            { id: 10, name: "Emil Esenaliev", category: "Show/Humor", score: "1.1M followers" }
        ],
        rich: [
            { id: 1, name: "Askar Salymbekov", category: "Business", score: "Dordoi Association", image: "images/salymbekov.jpg" },
            { id: 2, name: "Omurbek Babanov", category: "Business/Politics", score: "AKB Kyrgyzstan", image: "images/babanov.jpg" },
            { id: 3, name: "Sharshenbek Abdykerimov", category: "Manufacturing", score: "Ayu Holding", image: "images/sharshenbek.jpg" },
            { id: 4, name: "Dinara Isaeva", category: "Business", score: "Real Estate", image: "images/isaeva.jpg" },
            { id: 5, name: "Nariman Tyuleev", category: "Business", score: "Shopping Centers", image: "images/tuleev.jpg" },
            { id: 6, name: "Rayimbek Matraimov", category: "Public Service", score: "Customs Sector", image: "images/rayim.jpg" },
            { id: 7, name: "Aziz Surmamatov", category: "Construction", score: "Construction Companies", image: "images/aziz.jpg" },
            { id: 8, name: "Zhalil Atambaev", category: "Business", score: "Osh Region", image: "images/jalil.jpg" },
            { id: 9, name: "Nurlan Sulaimanov", category: "Business", score: "Transport/Logistics", image: "images/nurlan_s.jpg" },
            { id: 10, name: "Temir Sariev", category: "Politics/Business", score: "Manufacturing", image: "images/temir.jpg" }
        ],
        cyber: [
            { id: 1, name: "Bakyt Emilzhanov (Zayac)", category: "Dota 2", score: "Team Liquid / Secret" },
            { id: 2, name: "Aybek Tokayev (TA2000)", category: "Dota 2", score: "Quest Esports" },
            { id: 3, name: "Evgeniy Ri (Blizzy)", category: "Dota 2", score: "Natus Vincere" },
            { id: 4, name: "Kyalbek Taiirov (Dream')", category: "Dota 2", score: "Gambit Esports" },
            { id: 5, name: "Abdimalik Sailau (Malik)", category: "Dota 2", score: "PSG Quest" },
            { id: 6, name: "Bakytzhan Rustembekov", category: "CS:GO", score: "Pro Player" },
            { id: 7, name: "Hydra Team", category: "Dota 2", score: "Top Team" },
            { id: 8, name: "Blacklist International", category: "PUBG Mobile", score: "Top Team" },
            { id: 9, name: "Ruslan Temiraliev", category: "FIFA", score: "KR Champion" },
            { id: 10, name: "Mirlan Myrzaev", category: "Mobile Legends", score: "Top Streamer" }
        ],
        companies: [
            { id: 1, name: "Mbank", category: "Finance", score: "Most popular app" },
            { id: 2, name: "O! (Nur Telecom)", category: "Telecom", score: "Millions of customers" },
            { id: 3, name: "Beeline", category: "Telecom", score: "International network" },
            { id: 4, name: "Mega", category: "Telecom", score: "State communication" },
            { id: 5, name: "Optima Bank", category: "Finance", score: "Top Bank" },
            { id: 6, name: "Kumtor", category: "Manufacturing", score: "Largest enterprise" },
            { id: 7, name: "Shoro", category: "Beverages", score: "National brand" },
            { id: 8, name: "Kulikovsky", category: "Confectionery", score: "Top Pastry House" },
            { id: 9, name: "Elite House", category: "Construction", score: "Premium housing" },
            { id: 10, name: "Avangard Style", category: "Construction", score: "Top Developer" }
        ],
        uni: [
            { id: 1, name: "AUCA", category: "International", score: "Top 1 Education" },
            { id: 2, name: "Kyrgyz-Turkish 'Manas' University", category: "State", score: "Free education" },
            { id: 3, name: "Medical Academy (KSMA)", category: "Medicine", score: "Top Doctors" },
            { id: 4, name: "Polytech (KSTU)", category: "Technical", score: "Engineering hub" },
            { id: 5, name: "KRSU (Slavic)", category: "International", score: "Russian-Kyrgyz education" },
            { id: 6, name: "KNU (National)", category: "State", score: "Oldest University" },
            { id: 7, name: "BSU", category: "Humanities", score: "Language studies" },
            { id: 8, name: "Ala-Tooo (International)", category: "Private", score: "IT and Business" },
            { id: 9, name: "OshSU", category: "Regional", score: "Southern hub" },
            { id: 10, name: "Law Academy (KSLA)", category: "Law", score: "Top Lawyers" }
        ],
        tiktok: [
            { id: 1, name: "Argen BY", category: "Sigma", score: "15M+ Followers" },
            { id: 2, name: "Hommerson", category: "Comedy", score: "5M+ Followers" },
            { id: 3, name: "Kagura", category: "Dance", score: "3M+ Followers" },
            { id: 4, name: "Salavat k", category: "Vines", score: "2.5M+ Followers" },
            { id: 5, name: "Adis (Black Shark)", category: "Pranks", score: "2M+ Followers" },
            { id: 6, name: "Ayan (Ayanvines)", category: "Social", score: "1.8M+ Followers" },
            { id: 7, name: "Eldiyar (Eldivines)", category: "Lifestyle", score: "1.5M+ Followers" },
            { id: 8, name: "Begimay (Begi)", category: "Beauty", score: "1.2M+ Followers" },
            { id: 9, name: "Uluk (Ulukman)", category: "Street Art", score: "1M+ Followers" },
            { id: 10, name: "Chika (Chikavines)", category: "Comedy", score: "900K Followers" }
        ],
        music: [
            { id: 1, name: "Mirbek Atabekov - Muras", category: "Pop", score: "50M+ Views" },
            { id: 2, name: "Jax 02.14 - 18", category: "Pop-rap", score: "45M+ Views" },
            { id: 3, name: "Bakr - Otrazhenie", category: "Indie-pop", score: "40M+ Views" },
            { id: 4, name: "Ulukmanapo - Rasstoyanie", category: "Rap", score: "35M+ Views" },
            { id: 5, name: "Nurlan Nasip - Erkeletsembi", category: "Estrada", score: "30M+ Views" },
            { id: 6, name: "Asel Kadyrbekova - Baaryn kairadan", category: "Estrada", score: "25M+ Views" },
            { id: 7, name: "Gulzhigit Satybekov - Leilektik kyz", category: "Chanson", score: "22M+ Views" },
            { id: 8, name: "Freeman 996 - Kyrgyzstan", category: "Rap", score: "20M+ Views" },
            { id: 9, name: "Ayana Kasymova - Surotuno", category: "Retro-cover", score: "18M+ Views" },
            { id: 10, name: "Mirbek Atabekov - Moya lyubov", category: "Pop", score: "17M+ Views" }
        ],
        kokboru: [
            { id: 1, name: "Yntymak (Talas)", category: "Team", score: "KR Champion" },
            { id: 2, name: "Dostuk (Osh)", category: "Team", score: "Multiple Champion" },
            { id: 3, name: "Sary-Ozon (Chuy)", category: "Team", score: "Top Team" },
            { id: 4, name: "Manas Niyazov", category: "Player", score: "Best Forward" },
            { id: 5, name: "Muras (Talas)", category: "Team", score: "Premier League" },
            { id: 6, name: "Seiyil (Jalal-Abad)", category: "Team", score: "Top-5" },
            { id: 7, name: "Birimdik", category: "Team", score: "Premier League" },
            { id: 8, name: "Omurbek Esen uulu", category: "Player", score: "Best Defender" },
            { id: 9, name: "Aybek Darmatov", category: "Player", score: "Legendary Player" },
            { id: 10, name: "Kuren (Horse)", category: "Horse", score: "Best Horse" }
        ],
        mma: [
            { id: 1, name: "Valentina Shevchenko", category: "UFC", score: "World Champion" },
            { id: 2, name: "Myktybek Orolbay", category: "UFC", score: "UFC Top-15" },
            { id: 3, name: "Rafael Fiziev", category: "UFC", score: "Top Lightweight" },
            { id: 4, name: "Busurmankul Abdubait uulu", category: "Eagle FC", score: "Former Champion" },
            { id: 5, name: "Antonina Shevchenko", category: "UFC", score: "Pro Fighter" },
            { id: 6, name: "Bekzat Almaz uulu", category: "MMA", score: "Young Star" },
            { id: 7, name: "Razzaq Beishekeev", category: "MMA", score: "Prospect" },
            { id: 8, name: "Kanybek Kasymov", category: "MMA", score: "Top Fighter" },
            { id: 9, name: "Tologen Rakhmanberdi uulu", category: "MMA", score: "Regional Champion" },
            { id: 10, name: "Azatbek Anarbay uulu", category: "MMA", score: "Top Rating" }
        ],
        football: [
            { id: 1, name: "Gulzhigit Alykulov", category: "Player", score: "Neman / KR National Team" },
            { id: 2, name: "Mirlan Murzaev", category: "Player", score: "Legendary Top Scorer" },
            { id: 3, name: "Alimardan Shukurov", category: "Player", score: "Top Midfielder" },
            { id: 4, name: "Abdysh-Ata (Kant)", category: "Club", score: "KR Champion" },
            { id: 5, name: "Dordoi (Bishkek)", category: "Club", score: "Most Decorated Club" },
            { id: 6, name: "Valeriy Kichin", category: "Player", score: "Defender / Captain" },
            { id: 7, name: "Erbol Atabaev", category: "Player", score: "Volgar" },
            { id: 8, name: "Alay (Osh)", category: "Club", score: "Top Team" },
            { id: 9, name: "Muras United", category: "Club", score: "Cup Winner" },
            { id: 10, name: "Beknaz Almazbekov", category: "Player", score: "Galatasaray (Youth)" }
        ],
        volleyball: [
            { id: 1, name: "Ular (Bishkek)", category: "Club", score: "Top Team" },
            { id: 2, name: "EREM (Osh)", category: "Club", score: "Multiple Champion" },
            { id: 3, name: "Onol Kanybek uulu", category: "Player", score: "Best Attacker" },
            { id: 4, name: "Zhalyn (Jalal-Abad)", category: "Club", score: "Strong Team" },
            { id: 5, name: "Murat Isakov", category: "Player", score: "Top Blocker" },
            { id: 6, name: "Salam-Alik", category: "Club", score: "Women's League Champion" },
            { id: 7, name: "Temir Toktoev", category: "Player", score: "KR National Team" },
            { id: 8, name: "OshSU", category: "Club", score: "High League" },
            { id: 9, name: "Kyrgyzstan National Team", category: "Team", score: "Challenge Cup Winner" },
            { id: 10, name: "Nurmukhammed Toktoev", category: "Player", score: "Young Talent" }
        ],
        arm: [
            { id: 1, name: "Shamil Isakov", category: "Armwrestling", score: "World Champion" },
            { id: 2, name: "Bakyt Dogdurbek uulu", category: "Armwrestling", score: "Asian Champion" },
            { id: 3, name: "Alexander Lee", category: "Armwrestling", score: "World Prize Winner" },
            { id: 4, name: "Evgeniy Lukyanov", category: "Armwrestling", score: "Veteran Champion" },
            { id: 5, name: "Myktybek Sadykov", category: "Armwrestling", score: "Top Rating" },
            { id: 6, name: "Zaur Tairov", category: "Armwrestling", score: "Asian Prize Winner" },
            { id: 7, name: "Chyngyz Sadykov", category: "Armwrestling", score: "KR Champion" },
            { id: 8, name: "Alisher Karimov", category: "Armwrestling", score: "Youth Champion" },
            { id: 9, name: "Kubatbek uulu Asan", category: "Armwrestling", score: "Top-10" },
            { id: 10, name: "Kyrgyzstan Federation", category: "Organization", score: "Developmental" }
        ],
        boxing: [
            { id: 1, name: "Dmitry Bivol", category: "Boxing", score: "World Champion (WBA)" },
            { id: 2, name: "Munarbeq Seiitbek uulu", category: "Boxing", score: "Olympic Medalist" },
            { id: 3, name: "Azat Usenaliev", category: "Boxing", score: "Asian Champion" },
            { id: 4, name: "Erkin Adylbek uulu", category: "Boxing", score: "Olympic Contestant" },
            { id: 5, name: "Sanzhar Seidakmatov", category: "Boxing", score: "World Prize Winner" },
            { id: 6, name: "Omurbek Bekzhigit uulu", category: "Boxing", score: "Asian Prize Winner" },
            { id: 7, name: "Nurzhigit Duishebaev", category: "Boxing", score: "Young Talent" },
            { id: 8, name: "Mirlan Turkbay uulu", category: "Boxing", score: "Top Rating" },
            { id: 9, name: "Syimykbek Abdyzhapar uulu", category: "Boxing", score: "Asian Champion" },
            { id: 10, name: "Asylbek Talasbaev", category: "Boxing", score: "Veteran" }
        ],
        cinema: [
            { id: 1, name: "Aktan Arym Kubat", category: "Director", score: "International Awards" },
            { id: 2, name: "Bolot Shamshiev", category: "Director", score: "Kyrgyz Miracle (Legend)" },
            { id: 3, name: "Azamat Ulanov", category: "Actor", score: "Comedy Star" },
            { id: 4, name: "Ruslan Akun", category: "Director", score: "Highest-grossing films" },
            { id: 5, name: "Emil Esenaliev", category: "Actor", score: "People's Favorite" },
            { id: 6, name: "Aisuluu Azimbaeva", category: "Actress", score: "Art-house & Theater" },
            { id: 7, name: "Sadyk Sher-Niyaz", category: "Director", score: "Kurmanjan Datka" },
            { id: 8, name: "Bolot Tentimyshov", category: "Actor", score: "Drama/Cinema" },
            { id: 9, name: "Mirlan Abdulaev", category: "Actor", score: "Top Action Movies" },
            { id: 10, name: "Gaukhar Sharshekeeva", category: "Actress", score: "Young Talent" }
        ],
        it: [
            { id: 1, name: "Tilek Mamutov", category: "IT Pro", score: "Google/Out talent" },
            { id: 2, name: "Azis Abakirov", category: "IT Leader", score: "IT Park Founder" },
            { id: 3, name: "Emil Umetaliev", category: "Business/IT", score: "Kyrgyz Concept/High-tech" },
            { id: 4, name: "Dinara Ruslan", category: "IT Pro", score: "Codify Founder" },
            { id: 5, name: "Codify Academy", category: "Startup", score: "Top IT School" },
            { id: 6, name: "Namba One", category: "Super-app", score: "Transport/Logistics" },
            { id: 7, name: "Growave", category: "SaaS", score: "International Startup" },
            { id: 8, name: "AppMarket", category: "Startup", score: "Local Marketplace" },
            { id: 9, name: "Daniyar Amanaliev", category: "IT/Creative", score: "ololo Founder" },
            { id: 10, name: "Dodo Pizza (KG IT)", category: "Technology", score: "Automation Leader" }
        ],
        showmen: [
            { id: 1, name: "Нурлан Насип", category: "Шоумен", score: "Эң көп тойлордо" },
            { id: 2, name: "Мирбек Атабеков", category: "Жылдыз", score: "Эл аралык деңгээл" },
            { id: 3, name: "Санжар Мыкыев", category: "Тамада", score: "Премиум иш-чаралар" },
            { id: 4, name: "Бакыт Байсариев", category: "Алып баруучу", score: "Топ шоумен" },
            { id: 5, name: "Нурзат Токтосунова", category: "Алып баруучу", score: "Оратордук чеберчилик" },
            { id: 6, name: "Максат Довранов", category: "Шоумен", score: "ТВ жылдызы" },
            { id: 7, name: "Азат Ибраев", category: "Тамада", score: "Креативдүү алып баруучу" },
            { id: 8, name: "Эрмек Нурбаев", category: "Шоумен", score: "Азия Mix/КВН" },
            { id: 9, name: "Назира Айтбекова", category: "Алып баруучу", score: "Топ медиа инсан" },
            { id: 10, name: "Урмат Усенов", category: "Продюсер", score: "Маданият ишмери" }
        ]
}
};

// 1. Добуштарды localStorage'ден алуу
let votes = JSON.parse(localStorage.getItem('kg_rankings_votes')) || {};
// 3. Тилдердин сөздүгү (Sidebar жана интерфейс үчүн)
const translations = {
    'kg': {
        'categories-title': 'Категориялар',
        'cat-sports': 'Спорт',
        'cat-bloggers': 'Блогерлер',
        'cat-rich': 'Байлар',
        'cat-cyber': 'Киберспорт',
        'cat-companies': 'Компаниялар',
        'cat-uni': 'ЖОЖдор',
        'cat-tiktok': 'Тиктокерлер',
        'cat-music': 'Хит ырлар',
        'cat-kokboru': 'Көк-бөрү',
        'cat-mma': 'MMA',
        'cat-football': 'Футбол',
        'cat-volleyball': 'Волейбол',
        'cat-arm': 'Кол күрөш',
        'cat-boxing': 'Бокс',
        'cat-cinema': 'Кино & Актёрлор',
        'cat-it': 'IT & Стартаптар',
        'cat-showmen': 'Шоумендер',
        'search-placeholder': 'Лидерлерди издөө...',
        'th-name': 'Аты-жөнү',
        'th-category': 'Багыты',
        'th-score': 'Статус / Упай'
    },
    'ru': {
        'categories-title': 'Категории',
        'cat-sports': 'Спорт',
        'cat-bloggers': 'Блогеры',
        'cat-rich': 'Богатые',
        'cat-cyber': 'Киберспорт',
        'cat-companies': 'Компании',
        'cat-uni': 'ВУЗы',
        'cat-tiktok': 'Тиктокеры',
        'cat-music': 'Хит песни',
        'cat-kokboru': 'Кок-бору',
        'cat-mma': 'MMA',
        'cat-football': 'Футбол',
        'cat-volleyball': 'Волейбол',
        'cat-arm': 'Армрестлинг',
        'cat-boxing': 'Бокс',
        'cat-cinema': 'Кино и Актеры',
        'cat-it': 'IT и Стартапы',
        'cat-showmen': 'Шоумены',
        'search-placeholder': 'Поиск лидеров...',
        'th-name': 'Имя',
        'th-category': 'Направление',
        'th-score': 'Статус / Очки'
    },
    'en': {
        'categories-title': 'Categories',
        'cat-sports': 'Sports',
        'cat-bloggers': 'Bloggers',
        'cat-rich': 'Wealthy',
        'cat-cyber': 'Esports',
        'cat-companies': 'Companies',
        'cat-uni': 'Universities',
        'cat-tiktok': 'TikTokers',
        'cat-music': 'Hit Songs',
        'cat-kokboru': 'Kok-Boru',
        'cat-mma': 'MMA',
        'cat-football': 'Football',
        'cat-volleyball': 'Volleyball',
        'cat-arm': 'Armwrestling',
        'cat-boxing': 'Boxing',
        'cat-cinema': 'Cinema & Actors',
        'cat-it': 'IT & Startups',
        'cat-showmen': 'Showmen',
        'search-placeholder': 'Search leaders...',
        'th-name': 'Name',
        'th-category': 'Category',
        'th-score': 'Status / Score'
    }
};

// Демейки категория - Спорт (анткени маалымат толук)
let currentCategory = 'sports'; 

// ---------------------------------------------------------
// НЕГИЗГИ ФУНКЦИЯ: Таблицаны чийүү
// ---------------------------------------------------------
function renderTable() {
    const lang = localStorage.getItem('selectedLang') || 'kg';
    const tableBody = document.getElementById('leaderboard-body');
    if (!tableBody) return;

    tableBody.innerHTML = ''; 

    // Тандалган тилдеги маалыматты алуу
    // Эгер категория бош болсо, ката бербестен бош массив кайтарат
    const data = (rankingsData[lang] && rankingsData[lang][currentCategory]) ? rankingsData[lang][currentCategory] : [];
    
    // Эгер маалымат жок болсо билдирүү чыгаруу
    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px;">Бул категория боюнча маалымат азырынча жок / Нет данных / No data</td></tr>`;
        return;
    }

    data.forEach((item, index) => {
        const voteId = `${currentCategory}_${item.id}`;
        const currentVotes = votes[voteId] || 0;
        
        // Топ-3 үчүн таажылар
        let crown = '';
        let rankClass = '';
        if (index === 0) { crown = '👑'; rankClass = 'rank-gold'; }
        else if (index === 1) { crown = '🥈'; rankClass = 'rank-silver'; }
        else if (index === 2) { crown = '🥉'; rankClass = 'rank-bronze'; }

        const row = `
            <tr id="row-${voteId}">
                <td class="rank ${rankClass}">${crown} #${index + 1}</td>
                <td class="leader-cell"><strong>${item.name}</strong></td>
                <td>${item.category}</td>
                <td>
                    <div class="vote-container">
                        <button class="vote-btn ${votes[voteId + '_voted'] ? 'active' : ''}" 
                                onclick="handleVote('${voteId}')">❤</button>
                        <span class="vote-count" id="count-${voteId}">${currentVotes}</span>
                    </div>
                    <div class="popularity-bar">
                        <div class="popularity-fill" style="width: ${Math.min(currentVotes * 2, 100)}%"></div>
                    </div>
                    <small style="color: #999; font-size: 0.75rem;">${item.score}</small>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Категориянын атын жазуу
    const catTitle = document.querySelector(`button[onclick="changeCategory('${currentCategory}')"]`);
    if(catTitle) {
        document.getElementById('category-title').innerText = catTitle.innerText;
    }
}

// ---------------------------------------------------------
// ДОБУШ БЕРҮҮ ФУНКЦИЯСЫ
// ---------------------------------------------------------
function handleVote(voteId) {
    if (votes[voteId + '_voted']) {
        votes[voteId]--;
        delete votes[voteId + '_voted'];
    } else {
        votes[voteId] = (votes[voteId] || 0) + 1;
        votes[voteId + '_voted'] = true;
    }

    localStorage.setItem('kg_rankings_votes', JSON.stringify(votes));
    
    // Интерфейсти толук жаңылабай, санды гана өзгөртүү (тез иштөө үчүн)
    renderTable(); 
}

// ---------------------------------------------------------
// ТИЛ ЖАНА КАТЕГОРИЯ БАШКАРУУ
// ---------------------------------------------------------

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    applyLanguage(lang);
    renderTable();
    toggleLangMenu();
}

function changeCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.side-link').forEach(link => {
        link.classList.remove('active');
        // Туура баскычты активдештирүү
        if(link.getAttribute('onclick').includes(`'${category}'`)) {
            link.classList.add('active');
        }
    });
    
    renderTable();
    if(window.innerWidth < 768) { // Мобилдик версияда гана жабуу
        closeNav();
    }
}

// Sidebar жана Издөө
function openNav() { document.getElementById("sidebar").style.width = "250px"; }
function closeNav() { document.getElementById("sidebar").style.width = "0"; }

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const rows = document.getElementById('leaderboard-body').getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let nameCell = rows[i].getElementsByTagName('td')[1];
        if (nameCell) {
            let txtValue = nameCell.textContent || nameCell.innerText;
            rows[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}

// Барак жүктөлгөндө ишке кирчү логика
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'kg';
    applyLanguage(savedLang);
    
    // Башталгыч категорияны активдүү кылуу
    document.querySelector(`button[onclick="changeCategory('${currentCategory}')"]`).classList.add('active');
    
    renderTable();
});