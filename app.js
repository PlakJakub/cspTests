const quizzes = [
  {
    name: "ŚPB",
    quiz: [
    {
        "question": "Policjant może nałożyć osobie kajdanki na ręce trzymane z przodu jeżeli:",
        "a": "Prewencyjnie używa kajdanek.",
        "b": "Istnieje duże prawdopodobieństwo podjęcia ucieczki.",
        "c": "Istnieje duże prawdopodobieństwo stawiania czynnego oporu",
        "d": "Istnieje duże prawdopodobieństwo wystąpienia zachowania mogącego zagrażać mieniu",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Kaftana bezpieczeństwa lub pasa obezwładniającego używa się jeżeli użycie innych środków przymusu bezpośredniego jest niemożliwe, w celu:",
        "a": "Pokonania biernego oporu.",
        "b": "Odparcia bezprawnego zamachu na życie",
        "c": "Wyegzekwowania zachowania zgodnego z wydanym poleceniem.",
        "d": "Przeciwdziałania czynnościom zmierzającym bezpośrednio do zamachu na wolność policjanta.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Kask zabezpieczający można użyć w przypadku:",
        "a": "Pokonania czynnego oporu",
        "b": "Przeciwdziałania niszczeniu mienia",
        "c": "Zapewnienia bezpieczeństwa konwoju",
        "d": "Przeciwdziałania czynnościom zmierzającym do autoagresji.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Środków przymusu bezpośredniego używa się:",
        "a": "Stosując najbardziej efektywny z nich.",
        "b": "Proporcjonalnie do wieku i wzrostu osoby.",
        "c": "W sposób najlepszy do osiągnięcia celów tego użycia",
        "d": "Wybierając środek o możliwie jak najmniejszej dolegliwości",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Podstawą prawną wykorzystania środków przymusu bezpośredniego jest:",
        "a": "Ustawa z dnia 26 maja 2013 r. o środkach przymusu bezpośredniego i broni palnej.",
        "b": "Ustawa z dnia 24 maja 2013 r. o środkach przymusu bezpośredniego i broni palnej.",
        "c": "Rozporządzenie Rady Ministrów z dnia 26 kwietnia 2013 r. o środkach przymusu bezpośredniego",
        "d": "Rozporządzenie Rady Ministrów Z dnia 26 maja 2013 r. o środkach przymusu bezpośredniego i bp.",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Przekazanie notatki przełożonemu w przypadku wykorzystania Śpb następuje, gdy doszło do:",
        "a": "Zranienie osoby",
        "b": "Zagubienia środka przymusu bezpośredniego.",
        "c": "Zniszczenia środka przymusu bezpośredniego.",
        "d": "Wystąpienia innych nie widocznych objawów zagrożenia zdrowia.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Pojazd służbowy poruszający się jako pojazd uprzywilejowany można wykorzystać jako środek przymusu bezpośredniego w przypadku:",
        "a": "Przeciwdziałania czynnościom zmierzającym do autoagresji.",
        "b": "Wyegzekwowania wymaganego prawem zachowania zgodnie z wydanym przez uprawnionego poleceniem",
        "c": "Przecíwdziałania bezpośredniemu zamachowi na ochraniane przez policjanta obszary obiekty lub urządzenia.",
        "d": "Przeciwdziałania czynnościom zmierzającym bezpośrednio do zamachu na życie, zdrowie lub wolność uprawnionego lub innej osoby.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Środki przeznaczone do pokonywania zamknięć budowlanych i innych przeszkód",
        "a": "Pokonania czynnego oporu.",
        "b": "Zapewnienia bezpieczeństwa konwoju i doprowadzenia.",
        "c": "Umożliwienia uprawnionym wejścia do pomieszczeń lub innych miejsc.się go z micjsca zatrzymania.",
        "d": "Zatrzymania pojazdu albo unieruchomienia zatrzymanego pojazdu, gdy zachodzi obawa oddalenia się go z miejsca zatrzymania.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Do środków pirotechnicznych o właściwościach ogłuszających lub olśniewających zalicza się w szczególności:",
        "a": "Granaty ogłuszające i granaty olśniewające.",
        "b": "Petardy z zawartością gazu łzawiącego i granaty hukowo-błyskowe.",
        "c": "Granaty obezwładniające, granaty olśniewające, petardy oraz granaty dymne.",
        "d": "Granaty hukowo-błyskowe, także z zawartością gazu łzawiącego, petardy oraz granaty dymne.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Siatkę obezwładniającą używa się lub wykorzystuje w celu unieruchomienia:",
        "a": "Tylko osób.",
        "b": "Pojazdu i osoby.",
        "c": "Osoby i zwierzęcia.",
        "d": "pojazdu i zwierzęcia.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Pałki służbowej NIE używa się w celu:",
        "a": "Zapewnienia bezpieczeństwa konwoju lub doprowadzenia.",
        "b": "Przeciwdziałania czynnościom zmierzającym do autoagresji.",
        "c": "Ujęcia osoby, udaremnienia jej ucieczki lub pościgu za tą osobą",
        "d": "Przeciwdziałania naruszeniu porządku lub bezpieczeństwa publicznego",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Wodnych środków obezwładniających można użyć lub wykorzystać przez zastosowanie urządzeń do tego przeznaczonych, w przypadku:",
        "a": "Przeciwdziałania niszczeniu mienia",
        "b": "Zapewnienia bezpieczeństwa konwoju lub doprowadzenia.",
        "c": "Ujęcia osoby, udaremnienia jej ucieczki lub pościgu za tą osobą",
        "d": "Zatrzymania osoby, udaremnienia jej ucieczki lub pościgu za tą osobą.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Użycie lub wykorzystanie środków przymusu bezpośredniego przez pododdział zwarty następuje:",
        "a": "Na rozkaz dowódcy tego oddziału",
        "b": "Na rozkaz Komendanta Głównego Policji.",
        "c": "Na rozkaz właściwego miejscowo komendanta wojewódzkiego (Stołecznego) Policji",
        "d": "Na polecenie właściwego miejscowo komendanta wojewódzkiego (Stołecznego) Policji.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Wobec nieletniego doprowadzonego do policyjnej izby dziecka NIE wolno użyć w przypadku",
        "a": "Pałki służbowej",
        "b": "Kajdanek zespolonych.",
        "c": "Kajdanek zakładanych na nogi.",
        "d": "Przedmiotów przeznaczonych do obezwładniania za pomocą energii elektrycznej",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku użycia środków przymusu bezpośrednich go wobec nieletniego umieszczonego policyjnej izbie dziecka uprawniony:",
        "a": "Dokonując tylko zapisu w notatniku służbowym.",
        "b": "Każdorazowo przekazuje przełożonemu notatkę, niezależnie od rodzaju i skutków użycia środka przymusu bezpośredniego",
        "c": "Każdorazowo przekazuje przełożonemu raport z użycia Środka przymusu bezpośredniego, niezależnie od rodzaju i skutku tego użycia",
        "d": "przekazuje przełożonemu notatkę w przypadku, gdy w wyniku użycia środka przymusu bezpośredniego doszło do zranienia, śmierci nieletniego lub szkody w mieniu.",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku skutkowego użycia śpb policjant może odstąpić od udzielenia pierwszej pomocy w przypadku, gdy:",
        "a": "Policjant nie posiada przy sobie rękawiczek gumowych.",
        "b": "Udzielenie tej pomocy może zagrozić życiu lub zdrowiu osoby poszkodowanej.",
        "c": "Udzielenie pomocy osobie poszkodowanej zostało zapewnione przez inne osoby.",
        "d": "Jest to kobieta o widocznej ciąży i został wezwany podmiot świadczący medyczne czynności ratunkowe.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku, gdy w wyniku wykorzystania śpb nastąpiło zranienie zwierzęcia policjant ma obowiązek:",
        "a": "Zabezpieczyć ślady do badań biologicznych.",
        "b": "Ogranicza się jedynie do ustalenia świadków zdarzenia",
        "c": "Zawiadomić o zdarzeniu właściwego przełożonego lub osobę pełniącą służbę dyżurną",
        "d": "W każdym przypadku wykorzystać następnie broń palną do uśmiercenia zwierzęcia w celu skrócenia jego cierpień.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku, gdy w wyniku użycia śpb nastąpiło zranienie osoby, właściwy przełożony lub osoba pełniąca służbę dyżurną między innymi ma obowiązek zapewnić policjantowi, który użył tego środka:",
        "a": "Wymianę środka przymusu bezpośredniego",
        "b": "Uzyskane odszkodowania za poniesione straty.",
        "c": "Udział w szkoleniu z zakresu stosowania środka, którego użyt",
        "d": "Niezbędną pomoc w szczególności psychologiczną lub prawna.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Siłę fizyczną można użyć lub wykorzystać w następujących przypadkach:",
        "a": "Naruszenia ładu i bezpieczeństwa publicznego.",
        "b": "Przeciwdziałaniu naruszeniu porządku społecznego",
        "c": "Przeciwdziałaniu tylko bezpieczeństwa publicznego",
        "d": "Przeciwdziałania naruszeniu porządku lub bezpieczeństwa publicznego.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Konia służbowego jako środka przymusu bezpośredniego można użyć w celu:",
        "a": "Ujęcia osoby",
        "b": "Przestraszenia osób.",
        "c": "Udaremnienia ucieczki osoby zatrzymanej",
        "d": "Przeciwdziałania naruszeniu porządku lub bezpieczeństwa publicznego",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Decyzję o użyciu lub wykorzystaniu środków przymusu bezpośredniego w postaci pasa obezwładniającego podczas konwoju wydaje:",
        "a": "Dowódca konwoju.",
        "b": "Komendant Gł6wny Policji.",
        "c": "Komendant Wojewódzki Policji.",
        "d": "Kierownik jednostki organizacyjnej Policji albo osoby przez niego upoważnione, a w razie ich nieobecności dyżurny jednostki",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Z użycia i wykorzystania środków przymusu bezpośredniego i broni palnej policjant sporządza:",
        "a": "Notatkę",
        "b": "Zapisek służbowy.",
        "c": "Nie ma obowiązku dokumentowania.",
        "d": "Notatke służbowa tylko w przypadku skutkowego użycia środków przymusu bezpośredniego",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Używając siły fizycznej nie wolno zadawać uderzeń, chyba, że policjant działa:",
        "a": "Przeciwdziałania napaści.",
        "b": "Wyłącznie w obronie własnej.",
        "c": "W celu odparcia zamachu na życie lub zdrowie.",
        "d": "W sytuacji zagrożenia naruszenia porządku publicznego",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Pałki służbowej NIE stosuje się wobec osób w stosunku do których użyto:",
        "a": "Kajdanek.",
        "b": "Siły fizycznej.",
        "c": "Psa służbowego.",
        "d": "Chemicznych środków obezwładniających.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Wolno zadawać uderzenia i pchnięcia pałką służbową we wszystkie części ciała w celu:",
        "a": "Odparcia bezprawnego zamachu na mienie.",
        "b": "Odparcia bezpośredniego zamachu na dobro prawne chronione",
        "c": "Odparcia bezpośredniego zamachu na życie lub zdrowie własne lub innej osoby",
        "d": "Odparcia pośredniego i prawnego zamachu na życie lub zdrowie własne lub innej osoby.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Kierownik jednostki organizacyjnej Policji albo osoby przez niego upoważnione, a w razie ich nieobecności - dyżurny jednostki podejmuje decyzję o użyciu lub wykorzystaniu środków przymusu bezpośredniego w postaci",
        "a": "Siatki obezwładniającej",
        "b": "kasku zabezpieczającego.",
        "c": "pocisków niepenetracyjnych.",
        "d": "wodnych środków obezwładniających.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Siatki obezwładniającej policjant może użyć lub ją wykorzystać w celu",
        "a": "odpierania czynnej napaści.",
        "b": "przeciwdziałania niszczeniu mienia.",
        "c": "pokonania czynnego i biernego oporu.",
        "d": "przeciwdziałania naruszeniom porządku lub bezpieczeństwa publicznego.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Pałki służbowej policjant może użyć lub wykorzystać w celu",
        "a": "uspokojenia osoby.",
        "b": "pokonania biernego oporu.",
        "c": "przeciwdziałania autoagresji.",
        "d": "przeciwdziałania niszczeniu mienia",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Komendant Główny Policji, Komendant CBŚP Policji, Komendant BSW Policji, dowódca Centralnego Pododdziału Kontrterrorystycznego Policji „BOA\", Komendant Centralnego Biura Zwalczania Cyberprzestępczości, właściwy miejscowo komendant wojewódzki (Stołeczny) Policji lub osoby przez nich upoważnione, podejmują decyzję o użyciu lub wykorzystaniu środków przymusu bezpośredniego w postaci",
        "a": "konia służbowego.",
        "b": "pojazdu służbowego.",
        "c": "środków pirotechnicznych.",
        "d": "wodnych środków obezwładniających.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Psa służbowego policjant może użyć w celu",
        "a": "pokonania biernego oporu.",
        "b": "przeciwdziałania niszczeniu mienia.",
        "c": "przeciwdziałania czynnościom zmierzającym do autoagresji.",
        "d": "ujęcia osoby, udaremnienia jej ucieczki lub pościgu za tą osobą.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Konia służbowego policjant może użyć się w celu",
        "a": "zapewnienia bezpieczeństwa konwoju lub doprowadzenia.",
        "b": "ujęcia osoby, udaremnienia jej ucieczki, lub pościgu za ta osoba.",
        "c": "kontroli przemieszczania się grupy osób, wykorzystując jego masę.",
        "d": "zatrzymania osoby, udaremnienia jej ucieczki, lub pościgu za ta osobą.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant używając pocisków niepenetracyjnych w celu obezwładnienia osoby nie powinien celować w",
        "a": "ręce.",
        "b": "nogi.",
        "c": "Poniżej pasa.",
        "d": "Głowę lub szyję.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Przedmiotów przeznaczonych do obezwładniania osób za pomocą energii elektrycznej policjant może użyć w stosunku do osób co do których wcześniej użył",
        "a": "kajdanek.",
        "b": "Kaftana bezpieczeństwa.",
        "c": "pasa obezwładniającego.",
        "d": "chemicznych środków obezwładniających.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Przedmioty przeznaczone do obezwładniania osób za pomocą energii elektrycznej nie stosuje się w celu:",
        "a": "pokonania biernego oporu.",
        "b": "pokonania czynnego oporu.",
        "c": "przeciwdziałania niszczeniu mienia.",
        "d": "zapewnienia bezpieczeństwa konwoju lub doprowadzenia.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Kolczatkę drogowa policjant może wykorzystać w celu",
        "a": "Ochrony porządku lub bezpieczeństwa na obszarach lub obiektach chronionych",
        "b": "odparcia bezpośredniego zamachu na życie, zdrowie lub wolność policjanta lub innej osoby",
        "c": "unieszkodliwienia zwierzęcia, którego zachowanie zagraża życiu i zdrowiu policjanta lub innych osób.",
        "d": "zatrzymania motocyklisty, który jest sprawca rozboju z użyciem niebezpiecznego przedmiotu i jedzie z dużą prędkością.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Pojazdu służbowego policjant nie wykorzystuje w celu",
        "a": "przeciwdziałania niszczeniu mienia.",
        "b": "zapewnienia bezpieczeństwa konwoju lub doprowadzenia.",
        "c": "ujęcia osoby, udaremnienia jej ucieczki lub pościgu za tą osoba.",
        "d": "zatrzymania osoby, udaremnienia jej ucieczki lub pościgu za tą osobą.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Użycie środka przymusu bezpośredniego należy rozumieć jako zastosowanie środka przymusu bezpośredniego wobec",
        "a": "osoby.",
        "b": "pojazdu.",
        "c": "zwierzęcia.",
        "d": "przeszkody.",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku konieczności przeciwdziałania naruszeniu porządku lub bezpieczeństwa publicznego policjant może użyć",
        "a": "psa służbowego.",
        "b": "konia służbowego.",
        "c": "kolczatki drogowej.",
        "d": "kask zabezpieczający.",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Zakazy podmiotowe użycia środków przymusu bezpośredniego z wyjątkiem siły fizycznej w postaci technik obezwładniania dotyczą",
        "a": "starców.",
        "b": "inwalidów.",
        "c": "Kobiet o widocznej ciąży.",
        "d": "osób niepełnosprawnych.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Wykorzystanie środka przymusu bezpośredniego należy rozumieć jako zastosowanie środka przymusu bezpośredniego wobec",
        "a": "osoby",
        "b": "starców.",
        "c": "inwalidów.",
        "d": "zwierzęcia.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Przed użyciem środka przymusu bezpośredniego policjant powinien",
        "a": "zawsze wezwać osobę do zachowania zgodnego z prawem.",
        "b": "zawsze uprzedzić o użyciu środka przymusu bezpośredniego",
        "c": "Użyć środków przymusu bezpośredniego bez uprzedzenia, jeżeli występuje bezpośrednie zagrożenie życia, zdrowia lub wolności policjanta lub innej osoby.",
        "d": "uprzedzić o użyciu środków przymusu bezpośredniego, jeżeli zwłoka groziłaby niebezpieczeństwem dla dobra chronionego prawem, a środków przymusu bezpośredniego używa się prewencyjnie.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Prewencyjnie policjant może użyć środki przymusu bezpośredniego w postaci",
        "a": "Siatka obezwładniająca",
        "b": "kaftana bezpieczeństwa.",
        "c": "siły fizycznej w postaci technik obrony",
        "d": "siły fizycznej w postaci technik obezwładniania.",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Siłę fizyczną policjant może użyć lub wykorzystać w celu",
        "a": "unieruchomienia pojazdu.",
        "b": "zapobieżenia biernego oporu.",
        "c": "neutralizacji przedmiotów i urządzeń.",
        "d": "pokonania biernego i czynnego oporu.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Siły fizycznej policjant można użyć prewencyjnie w postaci technik",
        "a": "ataku.",
        "b": "obrony.",
        "c": "obezwładnienia.",
        "d": "transportowych.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Kajdanek policjant może użyć w celu pokonania",
        "a": "przeszkody.",
        "b": "biernego oporu.",
        "c": "czynnego oporu.",
        "d": "czynnego i biernego oporu.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Wobec kobiety w widocznej ciąży leżącej na torach tramwajowych i niepodporządkowującej się wezwaniu do ich opuszczenia policjant ma prawo użyć środka przymusu bezpośredniego w postaci",
        "a": "kaftana bezpieczeństwa.",
        "b": "pasa obezwładniającego.",
        "c": "siły fizycznej w postaci technik obezwładnienia.",
        "d": "kajdanek zakładanych na ręce trzymane z przodu.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Kajdanek zakładanych na nogi używa się równocześnie z",
        "a": "kaftanem bezpieczeństwa.",
        "b": "kajdankami zespolonymi.",
        "c": "pasem obezwładniającym.",
        "d": "kajdankami zakładanymi na ręce.",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Kajdanek zespolonych lub kajdanek zakładanych na nogi policjant może użyć wyłącznie wobec osób",
        "a": "nietrzeźwych.",
        "b": "zatrzymanych.",
        "c": "pozbawionych wolności.",
        "d": "stawiających czynny opór.",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Obrona konieczna polega na odpieraniu ............. na jakiekolwiek dobro chronione prawem:",
        "a": "bezpośredniego i nagłego",
        "b": "niebezpiecznego i bezprawnego",
        "c": "bezpośredniego i bezprawnego",
        "d": "bezpośredniego i groźnego",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Siłę fizyczną prewencyjnie można stosować w postaci technik:",
        "a": "ataku",
        "b": "obezwładniania",
        "c": "obrony",
        "d": "transportowych",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Użycie śpb- należy przez to rozumieć:",
        "a": "zastosowanie śpb wobec osoby",
        "b": "zastosowanie śpb wobec zwierzęcia",
        "c": "unieruchomienie pojazdu lub pokonanie przeszkody",
        "d": "zablokowanie pojazdu",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "W przypadku użycia śpb wobec nieletniego umieszczonego w PID, jeżeli skutkiem tego użycia nie było zranienie osoby, policjant przekazuje notatkę:",
        "a": "nie jest wymagane sporządzenie notatki",
        "b": "przełożonemu",
        "c": "dyżurnemu jednostki",
        "d": "sędziemu rodzinnemu",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Kaftana bezpieczeństwa używa się w przypadkach:",
        "a": "przeciwdziałania niszczeniu mienia",
        "b": "pokonanie biernego oporu",
        "c": "zapewnienie bezpieczeństwa konwoju",
        "d": "przeciwdziałania naruszeniu porządku i bezpieczeństwa publicznego",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "W wyniku zastosowania przez policjanta pałki służbowej, osoba doznała zranienia. Fakt ten policjant dokumentuje w:",
        "a": "notatce",
        "b": "notatniku służbowym",
        "c": "tylko w raporcie",
        "d": "tylko w notatniku",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Bezwzględnie zabrania się używania kolczatki drogowej do zatrzymania",
        "a": "wózka inwalidzkiego",
        "b": "trójkołowego pojazdu samochodowego",
        "c": "pojazdu jednośladowego",
        "d": "motocykla z bocznym wózkiem",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Osoba skazana to:",
        "a": "osoba skazana prawomocnym wyrokiem Sądu",
        "b": "osoba przebywająca w zakładzie karnym",
        "c": "osoba tymczasowo aresztowana",
        "d": "osoba ukrywająca się przed wymiarem sprawiedliwości",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Decyzję o użyciu wodnych środków przymusu bezpośredniego podejmuje:",
        "a": "Komendant Powiatowy Policji",
        "b": "dowódca operacji",
        "c": "Komendant Główny Policji",
        "d": "dyżurny jednostki Policji",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "Kajdanek zespolonych lub kajdanek zakładanych na nogi można użyć wyłącznie wobec osób:",
        "a": "wulgarnych",
        "b": "nie wykonujących polecenia policjanta",
        "c": "zatrzymanych",
        "d": "agresywnych",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Zasada która mówi o użyciu lub wykorzystaniu środków przymusu bezpośredniego, od którego należy odstąpić, gdy cel ich użycia lub wykorzystania został osiągnięty to zasada:",
        "a": "ostrzeżenia",
        "b": "celowości",
        "c": "niezbędności",
        "d": "minimalizacji skutków",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Zastosowanie kolczatki drogowej należy poprzedzić wstrzymaniem ruchu i oznaczeniem wykorzystywanego środka na odległość nie mniejszą niż:",
        "a": "200 metrów w kierunku nadjeżdżającego pojazdu",
        "b": "100 metrów w kierunku nadjeżdżającego pojazdu",
        "c": "200 metrów w obu kierunkach",
        "d": "100 metrów w obu kierunkach",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Konia służbowego używa się do kontroli przemieszczania się grup osób, wykorzystując jego:",
        "a": "siłę",
        "b": "masę",
        "c": "wielkość",
        "d": "szybkość",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Polecenie zastosowania kaftana bezpieczeństwa wydaje:",
        "a": "komendant wojewódzki policji",
        "b": "dowódca jednostki policji",
        "c": "lekarz",
        "d": "dyżurny jednostki policji",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "ŚPB z wyjątkiem siły fizycznej w postaci technik obezwładniania nie można stosować wobec:",
        "a": "osób w zaawansowanym wieku",
        "b": "kobiet w widocznej ciąży",
        "c": "dzieci, których wygląd wskazuje na wiek do 15 lat",
        "d": "osób niepełnosprawnych",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjanci mogą użyć ŚPB w postaci siły fizycznej w postaci technik:",
        "a": "ataku",
        "b": "samoobrony",
        "c": "transportu",
        "d": "obezwładniających",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Przekroczenie granic obrony koniecznej może przybrać postać tzw.:",
        "a": "ekscesu ekstensywnego",
        "b": "ekscesu intensywnego",
        "c": "stresu intensywnego",
        "d": "ekscesu ekstremalnego",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Użycie i wykorzystanie środka przymusu bezpośredniego uprawniony dokumentuje w:",
        "a": "raporcie",
        "b": "notatce",
        "c": "notatce służbowej",
        "d": "notatce urzędowej",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant przed użyciem ŚPB ma obowiązek:",
        "a": "poinformować osobę o podstawie prawnej i faktycznej interwencji",
        "b": "wezwać osobę do zachowania zgodnego z prawem",
        "c": "ustalić świadków zdarzenia",
        "d": "poinformować dyżurnego Policji",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Użycie lub wykorzystanie ŚPB przez pododdział zwarty następuję na rozkaz:",
        "a": "Właściwego miejscowo komendanta wojewódzkiego (stołecznego)",
        "b": "Dowódcy tego pododdziału",
        "c": "Dyżurnego jednostki",
        "d": "Komendanta głównego policji, właściwego miejscowo komendanta wojewódzkiego (stołecznego) albo osoby przez nich upoważnione",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Eksces intensywny polega na:",
        "a": "Niezachowaniu proporcjonalności sposobu obrony do odparcia zamachu",
        "b": "Obronie przedwczesnej lub spóźnionej",
        "c": "Niezachowaniu proporcjonalności, działanie spóźnione",
        "d": "Niezachowaniu proporcjonalności, działanie przedwczesne",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Używając przedmiotów przeznaczonych do obezwładniania osób za pomocą energii elektrycznej nie celuję się:",
        "a": "Miejsca intymne",
        "b": "Miejsca szczególnie wrażliwe",
        "c": "W brzuch",
        "d": "W głowę",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Czynem karalnym jest czyn zabroniony przez ustawę jako wykroczenie określone w następujących przepisach kodeksu wykroczeń:",
        "a": "Art. 63a kw- nielegalne ogłoszenia",
        "b": "Art. 69 kw- niszczenie znaku ???",
        "c": "Art. 58 kw- żebranie",
        "d": "Art. 65 kw- fałszywe dane osobowe",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "ŚPB używa się lub wykorzystuję z zachowaniem szczególnej ostrożności uwzględniając ich właściwości które mogą stanowić zagrożenie życia lub zdrowia uprawnionego lub innej osoby, jest to zasada:",
        "a": "Niezbędności",
        "b": "Minimalizacji skutków",
        "c": "Ostrzeżenia",
        "d": "Ostrożności",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant może odstąpić od udzielania pierwszej pomocy gdy:",
        "a": "Nie został przeszkolony z udzielania pierwszej pomocy",
        "b": "Oczekuje na przyjazd karetki pogotowia",
        "c": "Udzielenie pomocy spowodowałoby zaniechanie czynności służbowych w tym legitymowania",
        "d": "Udzielenie pomocy może zagrozić życiu, zdrowiu lub bezpieczeństwu",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant nie może użyć kajdanek w przypadku:",
        "a": "Pokonaniu biernego oporu",
        "b": "Pokonaniu czynnego oporu",
        "c": "Przeciwdziałanie bezpośredniemu zamachowi na ochraniane przez uprawnionego obiekty, obszary lub urządzenia",
        "d": "Przeciwdziałania czynnościom zmierzającym do autoagresji",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Przez wykorzystanie ŚPB należy rozumieć:",
        "a": "Zastosowanie ŚPB wobec osoby",
        "b": "Zastosowanie ŚPB wobec zwierzęcia albo zastosowanie go w celu zatrzymania, zablokowania lub unieruchomienia pojazdu lub pokonania przeszkody",
        "c": "Zastosowanie ŚPB wobec zwierzęcia, przedmiotu oraz osoby",
        "d": "Zastosowanie ŚPB wobec niebezpiecznego zwierzęcia, uśmiercenie zwierzęcia w celach humanitarnych albo zastosowanie w celu zatrzymania osoby w pościgu lub zablokowania pojazdu oraz pokonania przeszkody",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Funkcjonariusz policji użył prewencyjnie kajdanek w celu zapobieżenia ucieczce osoby ujętej, postępowanie było:",
        "a": "Prawidłowe, można użyć prewencyjnie kajdanek w celu zapobieżenia ucieczce osoby",
        "b": "Nieprawidłowe, nie można użyć kajdanek w celu zapobieżenia ucieczce osoby",
        "c": "Dopuszczalne, ale tylko w sytuacji, gdy jest to sprawca zbrodni",
        "d": "Zakazane, wobec osoby ujętej",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Funkcjonariusz pełniący służbę w wydziale ochrony placówek dyplomatycznych KSP użył ŚPB w postaci siły fizycznej wobec osoby niepodporządkowującej się wezwaniu do zachowania zgodnego z prawem. W wyniku podjętych czynności nastąpiło zniszczenie mienia w postaci zerwania złotego łańcuszka z nadgarstka osoby która nie wykonywała polecenia. Następnie funkcjonariusz poinformował o zdarzeniu swojego przełożonego oraz osobę pełniącą służbę dyżurną ale odstąpił od ustalenia świadków zdarzenia i zabezpieczenia miejsca zdarzenia. Policjant postąpił:",
        "a": "Prawidłowo, może odstąpić od powyższych czynności w przypadku gdy, spowodowałoby to konieczność zaniechania przez uprawnionego czynności ochronnych ???",
        "b": "Nieprawidłowo, w tej sytuacji zawsze ustala świadków zdarzenia i zabezpiecza się miejsce",
        "c": "Nieprawidłowo, zawsze ustala się świadków",
        "d": "Nieprawidłowo, zawsze zabezpiecza miejsce zdarzenia",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Funkcjonariusz policji w sytuacji wystąpienia bezpośredniego zagrożenia życia używa ŚPB bez wezwania osoby do zachowania się zgodnie z prawem oraz nie uprzedził o zamiarze użycia tych środków, postąpienie policjanta było:",
        "a": "Nieprawidłowe, ponieważ za każdym razem przed użyciem ŚPB wzywa się osobę do zachowania zgodnego z prawem oraz uprzedza się o użyciu ŚPB",
        "b": "Prawidłowe, w sytuacji zagrożenia życia można użyć ŚPB bez wcześniejszego wezwania do zachowania zgodnego z prawem oraz uprzedzania o użyciu ŚPB",
        "c": "Nieprawidłowe, ŚPB można użyć bez uprzedzania tylko w sytuacji gdy zwłoka groziłaby niebezpieczeństwem dla dobra chronionego prawem",
        "d": "Zabronione prawnie",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Siły fizycznej używa się w postaci techniki:",
        "a": "Każdej znanej policjantowi",
        "b": "Obrony, transportowych, ataku, obezwładnienia",
        "c": "Transportowych i parterowych",
        "d": "Boksu, judo i brazylijskiego jiu-jitsu",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Wodnych środków obezwładniających nie można użyć lub wykorzystać przez zastosowanie urządzeń do tego przeznaczonych w przypadkach:",
        "a": "Odparcia bezpośredniego, bezprawnego zamachu na życie, zdrowie lub wolność policjanta lub innej osoby",
        "b": "Zatrzymania osoby, udaremnienia jej ucieczki",
        "c": "Pokonaniu biernego oporu",
        "d": "Pokonaniu czynnego oporu",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Przedmiotów przeznaczonych do obezwładniania osób za pomocą energii elektrycznej nie można użyć w przypadku:",
        "a": "Pokonaniu czynnego oporu",
        "b": "Pokonaniu biernego oporu",
        "c": "Przeciwdziałania niszczeniu mienia",
        "d": "Zapewnianiu bezpieczeństwa konwoju lub doprowadzenia",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Kajdanek zespolone lub kajdanek zakładanych na nogi można użyć wobec osoby:",
        "a": "Agresywnych, zatrzymanych, doprowadzonych na badania psychiatryczne",
        "b": "Agresywnych, zatrzymanych w związku z podejrzeniem popełnienia przestępstwa z użyciem broni palnej, pozbawionych wolności, materiałów wybuchowych",
        "c": "Wszystkich, decyzję podejmuje policjant",
        "d": "Wszystkich, decyzję podejmuje kierownik jednostki, a w razie jego nieobecności dyżurny jednostki",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Sygnał do zatrzymania pojazdu przy użyciu kolczatki drogowej podaję umundurowany funkcjonariusz policji w:",
        "a": "Sposób zrozumiały i widoczny dla kierującego zatrzymywanym pojazdem",
        "b": "Odległości nie mniejszej niż 100m od kolczatki drogowej",
        "c": "Odległości nie mniejszej niż 150 m od kolczatki drogowej",
        "d": "Odległości nie mniejszej niż 300m od kolczatki drogowej",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Decyzje o użyciu kaftana bezpieczeństwa podejmuje:",
        "a": "Każdy policjant",
        "b": "Kierownik jednostki organizacyjnej po zasięgnięciu opinii dyżurnego jednostki",
        "c": "Kierownik jednostki organizacyjnej albo osoby przez niego upoważnione, a w razie ich nieobecności- dyżurny jednostki",
        "d": "Kierownik jednostki organizacyjnej policji, dyżurny jednostki, a w przypadku jego nieobecności dowódca patrolu",
        "answer": "c",
        "answerConfirmedBy": []
    },
    {
        "question": "ŚPB nie jest:",
        "a": "Cela zabezpieczająca",
        "b": "Cela izolacyjna",
        "c": "Pokój izolacyjny",
        "d": "Pokój przejściowy",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "ŚPB można użyć po uprzednim bezskutecznym wezwaniu osoby do zachowania się zgodnie z prawem oraz po uprzedzeniu jej o zamiarze użycia tych środków. Można odstąpić od tych czynności w przypadku gdy:",
        "a": "Występuje bezpośrednie zagrożenie dla mienia w wielkich rozmiarach",
        "b": "Zwłoka groziłaby niebezpieczeństwem dla dobra chronionego prawem, a ŚPB używa się prewencyjnie",
        "c": "Osoba jest w stanie pod wpływem alkoholu lub innego podobnie działającego środka albo z innych powodów ma zakłóconą świadomość",
        "d": "Sytuacja jest dynamiczna i wymaga tego potrzeba służby",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Wobec nieletniego doprowadzonego do policyjnej izby dziecka nie można użyć:",
        "a": "Siły fizycznej",
        "b": "Kajdanek",
        "c": "Przedmiotów przeznaczonych do obezwładniania za pomocą energii elektrycznej",
        "d": "Pasu służbowego",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant założył zatrzymanemu kajdanki na nogi. Postępowanie policjanta było:",
        "a": "Właściwe, kajdanki zakłada się na ręce lub nogi",
        "b": "Niewłaściwie, na nogi można założyć kajdanki tylko zespolone",
        "c": "Zabronione",
        "d": "Dopuszczalne tylko w przypadku zatrzymania osoby poniżej lat 13",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Policjant wykorzystał siatkę obezwładniającą w celu unieruchomienia zwierzęcia. Postępowanie policjant było:",
        "a": "Nieprawidłowe, siatki obezwładniającej można użyć tylko w stosunku do osoby",
        "b": "Prawidłowe",
        "c": "Nieprawidłowe, w stosunku do zwierząt używamy tylko siły fizycznej",
        "d": "Niedopuszczalne",
        "answer": "b",
        "answerConfirmedBy": []
    },
    {
        "question": "Przedmiotów przeznaczonych do obezwładniania za pomocą energii elektrycznej można użyć wobec osoby, w stosunku do których użyto:",
        "a": "Kajdanek",
        "b": "Pasa obezwładniającego",
        "c": "Siatki obezwładniającej",
        "d": "Siły fizycznej",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Zakazem przedmiotowym użycia ŚPB jest:",
        "a": "Użycie wobec osób posiadających immunitet",
        "b": "Użycie wobec kobiety o widocznej ciąży, osób których wiek wskazuję do lat 13, osób o widocznej niepełnosprawności",
        "c": "Użycie wobec kobiety o widocznej ciąży, osób których wiek wskazuję do lat 13, osób o widocznym kalectwie",
        "d": "Użycie siły fizycznej, nie zadając uderzeń, chyba że działa się w celu odparcia zamachu na życie lub zdrowie własne lub innych osób albo na mienie lub przeciwdziałanie ucieczce",
        "answer": "d",
        "answerConfirmedBy": []
    },
    {
        "question": "Nieletni, który nie ukończył 14 lat, może być umieszczony w izbie izolacyjnej do:",
        "a": "12 godzin",
        "b": "24 godziny",
        "c": "48 godzin",
        "d": "72 godziny",
        "answer": "a",
        "answerConfirmedBy": []
    },
    {
        "question": "Siły fizycznej policjant może użyć prewencyjnie w postaci technik",
        "a": "Ataku",
        "b": "Obrony",
        "c": "Obezwładnienia",
        "d": "Transportowych",
        "answer": "d",
        "answerConfirmedBy": []
    }
]
  },
  {
    name: "Informatyka",
    quiz: [
        {
    "question": "Podstawowym zadaniem biura SIRENE jest wymiana informacji:",
    "a": "Dodatkowych",
    "b": "Uzupełniających",
    "c": "Szczegółowych",
    "d": "Szczególnych",
    "answer": "b",
    "answerConfirmedBy": []
  },
  {
    "question": "Systemem łączności INTERPOLU jest:",
    "a": "Interpol 24",
    "b": "SIENA",
    "c": "I-24/7",
    "d": "EIS",
    "answer": "c",
    "answerConfirmedBy": []
  },
  {
    "question": "Europejski Urząd Policji funkcjonuje od:",
    "a": "1 stycznia 2003 r.",
    "b": "1 listopada 2004 r.",
    "c": "1 lipca 1999 r.",
    "d": "1 czerwca 1997 r.",
    "answer": "c",
    "answerConfirmedBy": []
  }
    ]
  }
];

const state = {
  selectedQuizIndex: 0,
  currentQuestionIndex: 0,
  correct: 0,
  wrong: 0,
  answered: false,
  shuffledOrder: []
};

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const quizList = document.getElementById("quizList");
const quizTitle = document.getElementById("quizTitle");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const progressCount = document.getElementById("progressCount");
const percentageCount = document.getElementById("percentageCount");
const gradeCount = document.getElementById("gradeCount");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const speechToggle = document.getElementById("speechToggle");
const speechRate = document.getElementById("speechRate");
const speechRateValue = document.getElementById("speechRateValue");
const speechVoice = document.getElementById("speechVoice");

function shuffleArray(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getCurrentQuiz() {
  return quizzes[state.selectedQuizIndex];
}

function getCurrentQuestion() {
  if (!state.shuffledOrder.length) {
    return null;
  }
  const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
  return getCurrentQuiz().quiz[questionIndex];
}

function getGrade(percentage) {
  if (percentage === 100) return 6;
  if (percentage > 90) return 5;
  if (percentage > 80) return 4;
  if (percentage > 75) return 3;
  if (percentage >= 70) return 2;
  return 1;
}

function updateCounts() {
  correctCount.textContent = state.correct;
  wrongCount.textContent = state.wrong;
  const currentQuiz = getCurrentQuiz();
  const totalQuestions = currentQuiz.quiz.length;
  const answeredQuestions = state.correct + state.wrong;
  const percentage = answeredQuestions ? Math.round((state.correct / answeredQuestions) * 100) : 0;
  const progressValue = Math.min(state.currentQuestionIndex + 1, totalQuestions);
  progressCount.textContent = `${progressValue}/${totalQuestions}`;
  percentageCount.textContent = `${percentage}%`;
  gradeCount.textContent = answeredQuestions ? getGrade(percentage) : "-";
}

function renderQuizList() {
  quizList.innerHTML = quizzes
    .map((quiz, index) => {
      const activeClass = index === state.selectedQuizIndex ? "active" : "";
      return `<li><button class="quiz-item ${activeClass}" type="button" data-index="${index}">${quiz.name}</button></li>`;
    })
    .join("");

  document.querySelectorAll(".quiz-item").forEach((button) => {
    button.addEventListener("click", () => {
      const quizIndex = Number(button.dataset.index);
      selectQuiz(quizIndex);
    });
  });
}

function updateSpeechValue() {
  speechRateValue.textContent = `${Number(speechRate.value).toFixed(1)}x`;
}

function populateVoiceList() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const polishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("pl"));

  if (!polishVoices.length) {
    speechVoice.innerHTML = '<option value="">Brak polskich głosów</option>';
    speechVoice.disabled = true;
    return;
  }

  speechVoice.disabled = false;
  const currentSelection = speechVoice.value;

  speechVoice.innerHTML = polishVoices
    .map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
    .join("");

  const selectedVoice = polishVoices.find((voice) => voice.name === currentSelection) || polishVoices[0];
  speechVoice.value = selectedVoice.name;
}

function speakQuestion() {
  const isSpeechEnabled = speechToggle.checked;
  if (!isSpeechEnabled || !("speechSynthesis" in window)) {
    window.speechSynthesis?.cancel();
    return;
  }

  const question = getCurrentQuestion();
  if (!question) return;

  const text = [
    question.question,
    `A: ${question.a}`,
    `B: ${question.b}`,
    `C: ${question.c}`,
    `D: ${question.d}`
  ].join(". ");

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pl-PL";
  utterance.rate = Number(speechRate.value);

  const voices = window.speechSynthesis.getVoices();
  const polishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("pl"));
  const selectedVoiceName = speechVoice.value;
  const chosenVoice = polishVoices.find((voice) => voice.name === selectedVoiceName) || polishVoices[0] || voices[0];

  if (chosenVoice) {
    utterance.voice = chosenVoice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function prepareShuffledOrder() {
  state.shuffledOrder = shuffleArray(Array.from({ length: getCurrentQuiz().quiz.length }, (_, index) => index));
}

function renderQuestion() {
  const currentQuiz = getCurrentQuiz();
  const currentQuestion = getCurrentQuestion();

  if (!currentQuestion) {
    questionText.textContent = "Quiz został zakończony.";
    answersContainer.innerHTML = "";
    nextQuestionBtn.hidden = true;
    return;
  }

  state.answered = false;
  nextQuestionBtn.hidden = true;
  quizTitle.textContent = currentQuiz.name;
  questionText.textContent = currentQuestion.question;

  const options = ["a", "b", "c", "d"];
  answersContainer.innerHTML = options
    .map((letter) => {
      const text = currentQuestion[letter];
      return `
        <button class="answer-option" type="button" data-letter="${letter}" aria-label="Odpowiedź ${letter.toUpperCase()}">
          <span class="option-letter">${letter.toUpperCase()}</span>
          <span class="option-text">${text}</span>
        </button>
      `;
    })
    .join("");

  answersContainer.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button.dataset.letter));
  });

  updateCounts();
  speakQuestion();
}

function selectQuiz(index) {
  state.selectedQuizIndex = index;
  state.currentQuestionIndex = 0;
  state.correct = 0;
  state.wrong = 0;
  prepareShuffledOrder();
  renderQuizList();
  renderQuestion();
}

function handleAnswer(selectedLetter) {
  if (state.answered) return;

  window.speechSynthesis?.cancel();

  const question = getCurrentQuestion();
  const optionButtons = Array.from(document.querySelectorAll(".answer-option"));
  state.answered = true;

  optionButtons.forEach((button) => {
    const letter = button.dataset.letter;
    button.disabled = true;
    button.classList.remove("selected");
    button.classList.remove("correct");
    button.classList.remove("wrong");

    if (letter === selectedLetter) {
      button.classList.add("selected");
    }
  });

  setTimeout(() => {
    optionButtons.forEach((button) => {
      const letter = button.dataset.letter;
      button.classList.remove("selected");

      if (letter === question.answer) {
        button.classList.add("correct");
      }

      if (letter === selectedLetter && letter !== question.answer) {
        button.classList.add("wrong");
      }
    });

    if (selectedLetter === question.answer) {
      state.correct += 1;
      updateCounts();

      setTimeout(() => {
        if (state.currentQuestionIndex < state.shuffledOrder.length - 1) {
          state.currentQuestionIndex += 1;
          renderQuestion();
        } else {
          nextQuestion();
        }
      }, 800);
      return;
    }

    state.wrong += 1;
    updateCounts();
    nextQuestionBtn.hidden = false;
  }, 500);
}

function nextQuestion() {
  const currentQuiz = getCurrentQuiz();

  if (state.currentQuestionIndex < state.shuffledOrder.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  const total = state.correct + state.wrong;
  const percentage = total ? Math.round((state.correct / total) * 100) : 0;
  questionText.textContent = `Quiz zakończony. Wynik: ${state.correct}/${total} poprawnych odpowiedzi (${percentage}%). Ocena: ${getGrade(percentage)}.`;
  answersContainer.innerHTML = "";
  nextQuestionBtn.hidden = true;
}

speechToggle.addEventListener("change", () => {
  if (!speechToggle.checked) {
    window.speechSynthesis?.cancel();
    return;
  }
  speakQuestion();
});

speechRate.addEventListener("input", () => {
  updateSpeechValue();
  if (speechToggle.checked) {
    speakQuestion();
  }
});

speechRate.addEventListener("change", () => {
  updateSpeechValue();
  if (speechToggle.checked) {
    speakQuestion();
  }
});

speechVoice.addEventListener("change", () => {
  if (speechToggle.checked) {
    speakQuestion();
  }
});

window.speechSynthesis?.addEventListener("voiceschanged", () => {
  populateVoiceList();
  if (speechToggle.checked) {
    speakQuestion();
  }
});

nextQuestionBtn.addEventListener("click", nextQuestion);

updateSpeechValue();
populateVoiceList();
prepareShuffledOrder();
renderQuizList();
renderQuestion();
