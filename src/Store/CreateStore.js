import React, { createContext, useState } from 'react'

export const Bucket = createContext();

function CreateStore(props) {

    const [data, setData] = useState([
        {
            id: 1,
            source: "bollywood",
            author: "etimes.in",
            title: "Naseeruddin: I don't intend to watch The Kerala Story",
            description: "Naseeruddin Shah reveals that he has not seen 'The Kerala Story' and has no intention of watching it either.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/naseeruddin-shah-calls-the-success-of-the-kerala-story-a-dangerous-trend-says-i-dont-intend-to-see-it/articleshow/100648980.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100648980,width-1070,height-580,imgsize-24432,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T10:50:58Z",
            content: "Nothing new that Hindi film industry is keeping mum on important issues: Naseeruddin ShahNaseeruddin Shah sheds light on the not-so-pretty truth of Bollywood, saying the industry has never been a fan… [+37 chars]"
        },
        {
            id: 2,
            source: "fitness",
            author: "John Doe Bodybuilding",
            title: "10 Tips to Transform Your Body",
            description: "When I say “transform your body” here, I'm talking about looking like a totally different person within a relatively short time period. This is definitely easier said than done, but not impossible if you're willing to put in the work and make your body transf…",
            url: "https://johndoebodybuilding.com/10-tips-to-transform-your-body/",
            urlToImage: "https://johndoebodybuilding.com/wp-content/uploads/2023/06/10-tips-to-transform-your-body.jpg",
            publishedAt: "2023-06-01T11:23:42Z",
            content: "Skip to content\r\nWhen I say “transform your body” here, I’m talking about looking like a totally different person within a relatively short time period. This is definitely easier said than done, but … [+26572 chars]"
        },
        {
            id: 3,
            source: "food",
            author: "Julie Chiou",
            title: "Crack Pie",
            description: "This crack pie is a homemade version and copycat recipe of Milk Bar's famous pie by Christina Tosi! It's irresistibly salty, sweet, and gooey!",
            url: "https://www.tablefortwoblog.com/crack-pie/",
            urlToImage: "https://www.tablefortwoblog.com/wp-content/uploads/2023/05/crack-pie-recipe-photo-tablefortwoblog-15-scaled.jpg",
            publishedAt: "2023-06-01T11:00:00Z",
            content: "Crack Pie has an oatmeal cookie crust that’s topped with the most incredible sweet and salty filling! This is a homemade copycat version of the famous Milk Bar pie and it always hits the spot. Serve … [+9455 chars]"
        },
        {
            id: 4,
            source: "hollywood",
            author: "Economist",
            title: "Moviemaking and gamemaking are converging",
            description: "But game developers have a better business model than Hollywood",
            url: "https://www.livemint.com/industry/media/moviemaking-and-gamemaking-are-converging-11685610888335.html",
            urlToImage: "https://www.livemint.com/lm-img/img/2023/06/01/600x338/2020-12-19T164552Z_219118427_RC2GQK9KBBHN_RTRMADP__1685611045964_1685611046084.JPG",
            publishedAt: "2023-06-01T09:25:38Z",
            content: "High technology fills the headquarters of NCSoft, a South Korean developer of such popular video games as Lineage\". But in a basement studio, Lee Seung-gi is a master of low-tech tools. Mr Lee, who s… [+9299 chars]"
        },
        {
            id: 5,
            source: "technology",
            author: "Preslav Mladenov",
            title: "Grab Samsung's stylish ANC, AKG-powered Galaxy Buds Live at an exceptional discount from Amazon",
            description: "The earbuds offer great sound, nice ANC, and can now be yours for even less",
            url: "https://www.phonearena.com/news/galaxy-buds-live-discount-amazon_id147866",
            urlToImage: "https://m-cdn.phonearena.com/images/article/147866-wide-two_1200/Grab-Samsungs-stylish-ANC-AKG-powered-Galaxy-Buds-Live-at-an-exceptional-discount-from-Amazon.jpg",
            publishedAt: "2023-06-01T11:22:32Z",
            content: "If you are on the hunt for a new pair of nice-looking and sounding wireless earbuds, then we have great news for you. Amazon is currently offering the amazing Samsung Galaxy Buds Live at a huge disco… [+1906 chars]"
        },
        {
            id: 6,
            source: "bollywood",
            author: "Subhash K Jha",
            title: "Priyanka's Citadel connection with SRK",
            description: "Ever since Priyanka Chopra did the two films in the Don series with Shah Rukh Khan, it had been speculated that she has been dying to do her own version of the superslick action hero.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/priyanka-chopras-citadel-connection-with-shah-rukh-khan/articleshow/100639204.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100639144,width-1070,height-580,imgsize-28902,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T05:02:47Z",
            content: "Twitterati slam Aamir Khan, Priyanka Chopra and other Bollywood stars for silence on #WrestlersProtest: You profited off their storyTwitterati slam Aamir Khan, Priyanka Chopra and other Bollywood sta… [+438 chars]"
        },
        {
            id: 7,
            source: "fitness",
            author: "Tporpora",
            title: "She left a career in the cosmetics industry to open her own Staten Island Pilates studio",
            description: "'Pilates is a low impact exercise that focuses on making that mind-body connection. Doing Pilates daily can help improve mobility, flexibility, and most importantly, core strength.'",
            url: "https://www.silive.com/business/2023/06/she-left-a-career-in-the-cosmetics-industry-to-open-her-own-staten-island-pilates-studio.html",
            urlToImage: "https://www.silive.com/resizer/FHkstM8fmQtj0zz-pOnZmcrMMvA=/1280x0/filters:focal(413x48:423x38)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ZZAXUNVUJJCLNCHFM3W6WACRFY.png",
            publishedAt: "2023-06-01T11:11:05Z",
            content: "STATEN ISLAND, N.Y. -- During the 2020 coronavirus (COVID-19) pandemic, Kristie Nunez, 33 -- who formerly worked in the cosmetic industry -- had time to reflect on her career and focus on her fitness… [+3190 chars]"
        },
        {
            id: 8,
            source: "food",
            author: "Tom Perkins",
            title: "Plastic containers still distributed across the US are a potential health disaster",
            description: "The Environmental Protection Agency is suing the manufacturer, even as the company continues to make and sell its toxic products",
            url: "https://www.theguardian.com/environment/2023/jun/01/pfas-lawsuit-epa-plastic-containers-health-danger",
            urlToImage: "https://i.guim.co.uk/img/media/b1f5f4074f713cea34f81c33f51502a495657fc3/0_187_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d81ff4d3334b0728a948138594d8430f",
            publishedAt: "2023-06-01T10:22:40Z",
            content: "Consumer groups are blasting the Environmental Protection Agency (EPA) for allowing plastic containers made with toxic PFAS forever chemicals to continue being distributed across the economy even tho… [+7505 chars]"
        },
        {
            id: 9,
            source: "hollywood",
            author: "Sen. Tim Scott",
            title: "America is a land of opportunity, not a land of oppression",
            description: "America is a land of opportunity, not a land of oppression. Biden liberals’ awful view of our nation cheapens my grandfather’s journey and my mother’s sacrifice.",
            url: "https://www.foxnews.com/opinion/america-land-opportunity-land-oppression",
            urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/Tim-Scott-NHIOP-town-hall-May-8-2023.jpg",
            publishedAt: "2023-06-01T06:00:51Z",
            content: "The Democratic Party and its allies in the media, academia, Hollywood and corporate America are weaponizing race to divide our country and win political power. According to the radical left, racism i… [+4257 chars]"
        },
        {
            id: 10,
            source: "technology",
            author: "newsfeedback@fool.com (Timothy Green)",
            title: "How Intel Could Benefit From NVIDIA's AI Boom",
            description: "Intel has multiple ways to win in AI.",
            url: "https://www.fool.com/investing/2023/06/01/how-intel-could-benefit-from-nvidias-ai-boom/",
            urlToImage: "https://g.foolcdn.com/editorial/images/734574/robotic-arms-with-silicon-wafers-for-semiconductor-manufacturing.jpg",
            publishedAt: "2023-06-01T11:20:00Z",
            content: "Demand for NVIDIA's (NVDA -5.68%) AI chips is proving insatiable. The launch of ChatGPT from OpenAI late last year opened the AI floodgates by demonstrating the power and potential of generative AI. … [+3411 chars]"
        },
        {
            id: 11,
            source: "bollywood",
            author: "Sudha Ramachandran",
            title: "Bollywood Returns to Big Screens in Bangladesh",
            description: "The recent release of the movie “Pathaan” in Bangladesh’s cinema theaters is the outcome of the lobbying of Bangladeshi film exhibitors.",
            url: "https://thediplomat.com/2023/05/bollywood-returns-to-big-screens-in-bangladesh/",
            urlToImage: "https://thediplomat.com/wp-content/uploads/2023/05/sizes/td-story-s-2/thediplomat_2023-05-30-044235.jpeg",
            publishedAt: "2023-05-30T12:18:58Z",
            content: "Advertisement\r\nIt was fantastic, The king is back, and It was so good to see Shah Rukh Khan on the big screen. These are some of the comments from Bangladeshi Bollywood fans, who were able to watch t… [+6849 chars]"
        },
        {
            id: 12,
            source: "fitness",
            author: "Amaral",
            title: "IMPULSE FITNESS",
            description: "A sudden, strong, and often winning, need to do something describes the character of this new Portuguese brand in the...",
            url: "https://retaildesignblog.net/2023/06/01/impulse-fitness/",
            urlToImage: "https://retaildesignblog.net/wp-content/uploads/2023/05/estudio-amatam-architecture-interiors-fitness-Impulse-Braga-017-720x540.jpg",
            publishedAt: "2023-06-01T09:00:05Z",
            content: "A sudden, strong, and often winning, need to do something describes the character of this new Portuguese brand in the world of fitness.IMPULSE has a unique identity, and its success starts with the m… [+544 chars]"
        },
        {
            id: 13,
            source: "food",
            author: "Zack Walsh",
            title: "The global polycrisis reflects a civilizational crisis that calls for systemic alternatives",
            description: "Exploring pathways for systems transformation amidst the global polycrisis is therefore essential for our shared future.",
            url: "https://www.resilience.org/stories/2023-06-01/the-global-polycrisis-reflects-a-civilizational-crisis-that-calls-for-systemic-alternatives/",
            urlToImage: "https://www.resilience.org/wp-content/uploads/2023/06/raph-howald-GSCtoEEqntQ-unsplash-1.jpg",
            publishedAt: "2023-06-01T10:23:55Z",
            content: "This article is part of a collaboration between Commonweal and Polycrisis Transition Consultancy with support from One Project. In this article, we situate emerging definitions of polycrisis within c… [+25180 chars]"
        },
        {
            id: 14,
            source: "hollywood",
            author: "Catherine Armecin",
            title: "James Corden Drops By Meghan Markle, Prince Harry's Montecito Home During US Visit: Report",
            description: "James Corden was reportedly spotted dropping by Prince Harry and Meghan Markle's mansion in California Tuesday.",
            url: "https://www.ibtimes.com/james-corden-drops-meghan-markle-prince-harrys-montecito-home-during-us-visit-report-3696934",
            urlToImage: "https://d.ibtimes.com/en/full/3529998/prince-harry-meghan-markle.jpg",
            publishedAt: "2023-06-01T05:31:26Z",
            content: "LONDON, ENGLAND - JUNE 03: Meghan, Duchess of Sussex and Prince Harry, Duke of Sussex attend the National Service of Thanksgiving at St Paul's Cathedral on June 03, 2022 in London, England. The Plati… [+3737 chars]"
        },
        {
            id: 15,
            source: "technology",
            author: "Sean Goulding Carroll",
            title: "To prevent outages, EU scientists want electric vehicles and the grid to talk",
            description: "EU scientists are exploring how electric cars and smart grids across Europe can better communicate, in a bid to prevent power outages caused by millions of vehicles charging simultaneously.",
            url: "https://www.euractiv.com/section/road-transport/news/to-prevent-outages-eu-scientists-want-electric-vehicles-and-the-grid-to-talk/",
            urlToImage: "https://www.euractiv.com/wp-content/uploads/sites/2/2023/06/charging_car-800x450.jpg",
            publishedAt: "2023-06-01T11:19:00Z",
            content: "EU scientists are exploring how electric cars and smart grids across Europe can better communicate, in a bid to prevent power outages caused by millions of vehicles charging simultaneously.\r\nWhile Eu… [+4646 chars]"
        },
        {
            id: 16,
            source: "bollywood",
            author: "etimes.in",
            title: "Did you know Anushka-Sakshi were classmates?",
            description: "Anushka and Sakhi were in same school as kids when they were in Assam",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/did-you-know-that-anushka-sharma-and-sakshi-dhoni-were-classmates/articleshow/100624046.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100623956,width-1070,height-580,imgsize-38712,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-30T11:43:07Z",
            content: "\"What a team,\" Anushka Sharma lauds team on cricket match winTaking to Instagram stories, Bollywood actor Anushka Sharma shared a picture and wrote, \"What an exciting game! What a win! What a team\"."
        },
        {
            id: 17,
            source: "fitness",
            author: "Heidi Summerfield",
            title: "Healthy competition to be named Warrington’s Best for Fitness 2023",
            description: "FITNESS fanatics have been our focus over the past few days as we searched for Warrington’s best fitness or gym instructor.",
            url: "https://www.warringtonguardian.co.uk/news/23557169.healthy-competition-named-warringtons-best-fitness-2023/",
            urlToImage: "https://www.warringtonguardian.co.uk/resources/images/16832991/?type=og-image",
            publishedAt: "2023-06-01T08:57:36Z",
            content: "Whether its yoga or pilates, body pump or spin, Zumba or Clubbercise, there is something for everyone when it comes to fitness.\r\nBut which fitness or gym instructor in Warrington is the best?\r\nWho ha… [+5465 chars]"
        },
        {
            id: 18,
            source: "food",
            author: "Simon Speakman Cordall",
            title: "Despair in Ettadhamen: The harsh reality of Tunisia’s economy",
            description: "'This ... system, goes back to the beys who needed to keep their courtiers happy to maintain their rule', analyst says.",
            url: "https://www.aljazeera.com/news/2023/6/1/despair-in-ettadhamen-the-harsh-reality-of-tunisias-economy",
            urlToImage: "https://www.aljazeera.com/wp-content/uploads/2023/05/Chokri-Ben-Hadj-1-1685256572.jpg?resize=1200%2C675",
            publishedAt: "2023-06-01T10:26:16Z",
            content: "Ettadhamen sits on the outskirts of Tunis. Built in the 1950s for the agricultural poor of Tunisias hinterland, the area has found recent distinction as fertile ground for recruiting fighters for vio… [+8728 chars]"
        },
        {
            id: 19,
            source: "hollywood",
            author: "David Propper",
            title: "Tupac to be honored with posthumous star on Hollywood Walk of Fame",
            description: "The famous hip-hop artist will be posthumously honored next Wednesday, becoming the 2,758th star to land on the historic landmark in Los Angeles that's been visited by millions of people since it opened in 1960.",
            url: "https://nypost.com/2023/06/01/tupac-to-be-honored-on-las-hollywood-walk-of-fame-next-week/",
            urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2023/06/walk-of-fame.jpg?quality=75&strip=all&1685581808&w=1024",
            publishedAt: "2023-06-01T05:10:40Z",
            content: "Iconic rapper Tupac Shakur will be immortalized on the Hollywood Walk of Fame more than 26 years after his death. \r\nThe famous hip-hop artist will be posthumously honored next Wednesday, becoming the… [+1599 chars]"
        },
        {
            id: 20,
            source: "technology",
            author: "Gaurav Tewari, Forbes Councils Member, \n Gaurav Tewari, Forbes Councils Member\n https://www.forbes.com/sites/forbesbusinesscouncil/people/gauravtewari/",
            title: "How Companies Can Determine Potential Generative AI Use Cases",
            description: "While generative AI presents opportunities for some types of businesses, it creates serious challenges for others.",
            url: "https://www.forbes.com/sites/forbesbusinesscouncil/2023/06/01/how-companies-can-determine-potential-generative-ai-use-cases/",
            urlToImage: "https://imageio.forbes.com/specials-images/imageserve/63ff5b3599f2634f6eaa9372/0x0.jpg?format=jpg&width=1200",
            publishedAt: "2023-06-01T11:15:00Z",
            content: "Gaurav Tewari, founder and Managing Partner of Omega Venture Partners.\r\ngetty\r\nRecent advancements in generative AI have unleashed a paradigm shift that is poised to disrupt and create opportunities … [+6928 chars]"
        },
        {
            id: 21,
            source: "bollywood",
            author: "etimes.in",
            title: "Know what actors charge for paid Insta posts",
            description: "Bollywood celebrities use their social media accounts as powerful tools for promotions. Brand collaborations bring in a lot of moolah for stars.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/priyanka-chopra-alia-bhatt-deepika-padukone-charge-rs-2-crore-for-every-paid-instagram-post-report/articleshow/100620697.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100620744,width-1070,height-580,imgsize-58882,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-30T10:13:27Z",
            content: "Savarkar, The Kerala Story, The Kashmir Files: Moies accused of fuelling propaganda"
        },
        {
            id: 22,
            source: "fitness",
            author: "Lifestyle Desk",
            title: "Planks vs push-ups: Know the differences, and which is better for beginners",
            description: "Adapting the exercises to suit an individual's present fitness level helps prevent unnecessary strain or potential injuries, said Aminder Singh, a fitness expert",
            url: "https://indianexpress.com/article/lifestyle/fitness/planks-pushups-benefits-caution-tips-8635088/",
            urlToImage: "https://images.indianexpress.com/2023/05/planks.jpg",
            publishedAt: "2023-06-01T07:50:47Z",
            content: "Planks and push-ups are two popular bodyweight exercises that mainly target the core muscle. Both can be done nearly anywhere as neither do they require any equipment, or much space. But is one exerc… [+3265 chars]"
        },
        {
            id: 23,
            source: "food",
            author: "Rosa Bertoli",
            title: "Zara Home and Vincent Van Duysen’s second collection is a hymn to conviviality",
            description: "Zara Home+ by Vincent Van Duysen Collection 02 is the second chapter of the sophisticated collaboration and is focused on dining, featuring furniture, tableware and accessories",
            url: "https://www.wallpaper.com/design-interiors/zara-home-vincent-van-duysen-dining-room-furniture-accessories",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/jDizpnioRALkmYCjH5PVX6-1200-80.jpg",
            publishedAt: "2023-06-01T10:30:00Z",
            content: "Zara Home and Vincent Van Duysen launch a new collection, following their collaborative debut in 2022. The inaugural collection was based on the living room, with a focus on upholstered seating, tabl… [+3803 chars]"
        },
        {
            id: 24,
            source: "hollywood",
            author: "Adam S. Levy",
            title: "Raven-Symoné says she asked her wife Miranda Pearman-Maday to sign an NDA before they got involved",
            description: "The 37-year-old entertainer, appearing last week on the podcast Howie Mandel Does Stuff , opened up about the circumstances of the awkward request.",
            url: "https://www.dailymail.co.uk/tvshowbiz/article-12146859/Raven-Symon-says-asked-wife-Miranda-Pearman-Maday-sign-NDA-got-involved.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/05/71638501-0-image-a-55_1685593599053.jpg",
            publishedAt: "2023-06-01T05:00:21Z",
            content: "Raven-Symoné says she had her wife Miranda Pearman-Maday sign a non-disclosure agreement prior to them getting romantically involved.\r\nThe 37-year-old entertainer, appearing last week on the podcast … [+3165 chars]"
        },
        {
            id: 25,
            source: "technology",
            author: "David Blekhman, Contributor, \n David Blekhman, Contributor\n https://www.forbes.com/sites/davidblekhman/",
            title: "Nikola Builds Its Own Hydrogen Ecosystem",
            description: "Nikola Corp. is taking a unique approach to address current market challenges by focusing on the hydrogen infrastructure and its supply. First 100 trucks are ordered.",
            url: "https://www.forbes.com/sites/davidblekhman/2023/06/01/nikola-builds-its-own-hydrogen-ecosystem/",
            urlToImage: "https://imageio.forbes.com/specials-images/imageserve/64783bbe133a3947df0e1090/0x0.jpg?format=jpg&width=1200",
            publishedAt: "2023-06-01T11:15:00Z",
            content: "Nikiola truck on display at ACT Expo 2022\r\nDavid Blekhman via Forbes\r\nIt might be worthwhile to examine the progress and challenges of the hydrogen economy, and its heavy duty side, in a separate art… [+4051 chars]"
        },
        {
            id: 26,
            source: "bollywood",
            author: "Entertainment Desk",
            title: "Sonam Bajwa says she refused Bollywood films as she didn’t want to kiss on screen: ‘Is my family going to understand?’",
            description: "Sonam Bajwa said that in hindsight, she should've perhaps given it some more thought before turning down the opportunities. Her parents didn't mind, as she discovered years later.",
            url: "https://indianexpress.com/article/entertainment/bollywood/sonam-bajwa-refused-bollywood-films-didnt-want-to-kiss-on-screen-8636165/",
            urlToImage: "https://images.indianexpress.com/2023/05/sonam-bajwa.jpg",
            publishedAt: "2023-05-30T09:20:29Z",
            content: "Actor Sonam Bajwa, who is best known for her work in Punjabi cinema, said that she deliberately turned down opportunities in Hindi movies because she was concerned how it would affect her image in Pu… [+1711 chars]"
        },
        {
            id: 27,
            source: "fitness",
            author: "Team Latestly",
            title: "Shehnaaz Gill Gives Major Fitness Goals As She Drops New Pics From Her Yoga Session! |  LatestLY",
            description: "Shehnaaz Gill has sported biker shorts and crop top for her yoga session. While sharing the pics she captioned it as, “Letting my body calm and relax”.",
            url: "https://www.latestly.com/socially/entertainment/bollywood/shehnaaz-gill-gives-major-fitness-goals-as-she-drops-new-pics-from-her-yoga-session-5169436.html",
            urlToImage: "https://st1.latestly.com/wp-content/uploads/2023/06/Shehnaaz-Gill-Yoga-Pics-784x441.jpg",
            publishedAt: "2023-06-01T07:32:56Z",
            content: "Shehnaaz Gill has been sharing pics of her workout session from the time she has started her yoga journey. The actress, who was last seen in the film, Kisi Ka Bhai Kisi Ki Jaan, is giving major fitne… [+658 chars]"
        },
        {
            id: 28,
            source: "food",
            author: "Paul du Quenoy",
            title: "Target Is the Latest Proof—Going Woke Means Going Broke | Opinion",
            description: "Across the corporate world, the lesson is clear. Messaging support for radical ideologies antagonizes far more Americans than it attracts.",
            url: "https://www.newsweek.com/target-latest-proofgoing-woke-means-going-broke-opinion-1803675",
            urlToImage: "https://d.newsweek.com/en/full/2241330/pride-merchandise-target.jpg",
            publishedAt: "2023-06-01T10:30:01Z",
            content: "\"I think those are just good business decisions, and it's the right thing for society, and it's the great thing for our brand.\" That's how Target CEO Brian Cornell described his company's diversity, … [+5501 chars]"
        },
        {
            id: 29,
            source: "hollywood",
            author: "Catherine Armecin",
            title: "Danny Masterson Net Worth: 'That '70s Show' Star Found Guilty Of Rape",
            description: "Danny Masterson, who faces up to 30 years in prison, is reportedly worth $8 million.",
            url: "https://www.ibtimes.com/danny-masterson-net-worth-that-70s-show-star-found-guilty-rape-3696916",
            urlToImage: "https://d.ibtimes.com/en/full/2996001/danny-masterson-pictured-2008-has-denied-charges-sexual-assault-past.jpg",
            publishedAt: "2023-06-01T04:51:30Z",
            content: "Danny Masterson (pictured 2008) has denied charges of sexual assault in the pastAFP / Chris DELMAS\r\nKEY POINTS\r\n<ul><li>Danny Masterson built his fortune from his TV and movie roles</li><li>He was ac… [+2966 chars]"
        },
        {
            id: 30,
            source: "technology",
            author: "Reuters",
            title: "Google leads funding round for Indian space startup Pixxel",
            description: "Alphabet Inc's Google is leading a $36 million funding round for Bengaluru-based Pixxel, a satellite-image startup, in the first major investment in the...",
            url: "https://finance.yahoo.com/news/google-leads-funding-round-indian-111454792.html",
            urlToImage: "https://media.zenfs.com/en/reuters-finance.com/ac01d3e90d8b3567fee14a72b2c711bb",
            publishedAt: "2023-06-01T11:14:54Z",
            content: "BENGALURU (Reuters) - Alphabet Inc's Google is leading a $36 million funding round for Bengaluru-based Pixxel, a satellite-image startup, in the first major investment in the Indian space sector sinc… [+2531 chars]"
        },
        {
            id: 31,
            source: "bollywood",
            author: "etimes.in",
            title: "#WrestlersProtest: B'wood slammed for silence",
            description: "\"Stars make movies on wrestling but they didn't want to support the wrestlers of our nation,\" said angry netizens as they slammed Bollywood actors for their silence on wrestlers' protest.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/twitterati-slam-aamir-khan-priyanka-chopra-and-other-bollywood-stars-for-silence-on-wrestlersprotest-you-profited-off-their-story/articleshow/100615196.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100618032,width-1070,height-580,imgsize-154726,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-30T08:54:27Z",
            content: "Police detain protesting wrestlers, file FIR, clear protest site at Jantar MantarIn what could bring about an abrupt end to the wrestlers' protest at Jantar Mantar, the Delhi police detained Vinesh P… [+161 chars]"
        },
        {
            id: 32,
            source: "fitness",
            author: "Nissi Icasiano",
            title: "Megaworld Lifestyle Malls Set To Bring Finland's SuperPark To Philippines",
            description: "Megaworld Lifestyle Malls will spearhead the opening of the first-ever SuperPark in the Philippines.",
            url: "https://www.ibtimes.com/megaworld-lifestyle-malls-set-bring-finlands-superpark-philippines-3697001",
            urlToImage: "https://d.ibtimes.com/en/full/4462154/superpark-philippines.jpg",
            publishedAt: "2023-06-01T06:01:27Z",
            content: "SuperPark is enjoyed by its patrons all over the world for its fun and high-energy indoor activities that can be enjoyed by people of all ages. SuperPark Philippines\r\nKEY POINTS\r\n<ul><li>Two SuperPar… [+3789 chars]"
        },
        {
            id: 33,
            source: "food",
            author: "Fritz Hahn, Olivia McCormack, Sophia Solano",
            title: "D.C.’s 10 best bottomless brunches",
            description: "Whether you're celebrating a birthday, planning a weekend date or looking for a place to bring your pup, these all-you-can-drink brunches are the perfect fit.",
            url: "https://www.washingtonpost.com/dc-md-va/2023/06/01/best-bottomless-brunch-dc/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HQTYJY2FSCHIJWDYZQBPI5KLM4.JPG&w=1440",
            publishedAt: "2023-06-01T10:30:33Z",
            content: "Return to menuLe Mont Royal, 1815 Adams Mill Rd. NW. lemontdc.com.\r\nWhen: Saturday and Sunday from noon to 4 p.m.\r\nWhats bottomless: $30 for mimosas; $50 for mimosas, Caesars (a.k.a. Canadian bloody … [+1860 chars]"
        },
        {
            id: 34,
            source: "hollywood",
            author: "Ross A. Lincoln",
            title: "Arnold Schwarzenegger Wishes Clint Eastwood Happy 93rd Birthday: ‘You’ve Inspired Me, You’ve Mentored Me’",
            description: "\"And you're a wonderful friend,\" Schwarzenegger writes about the acclaimed actor-director",
            url: "http://www.thewrap.com/arnold-schwarzenegger-clint-eastwood-93rd-birthday-fubar/",
            urlToImage: "https://www.thewrap.com/wp-content/uploads/2023/02/fubar-arnold-schwarzenegger.jpg",
            publishedAt: "2023-06-01T04:44:13Z",
            content: "Hollywood icon and literal living legend Clint Eastwood turned 93 on Wednesday, marking yet another amazing milestone in a life full of them. And in honor of the “Unforgiven” director’s big day, fell… [+1747 chars]"
        },
        {
            id: 35,
            source: "technology",
            author: "Abdullah",
            title: "New list of Xiaomi smartphones that will no longer receive updates",
            description: "Xiaomi, a prominent player in the smartphone industry, garners both praise and criticism regarding its update policies. The Chinese manufacturer has discontinued support for models ...\nThe post New list of Xiaomi smartphones that will no longer receive update…",
            url: "https://www.gizchina.com/2023/06/01/new-list-of-xiaomi-smartphones-that-will-no-longer-receive-updates/",
            urlToImage: "https://www.gizchina.com/wp-content/uploads/images/2023/05/miui-15-list-1200x675.jpg",
            publishedAt: "2023-06-01T11:13:18Z",
            content: "Xiaomi, a prominent player in the smartphone industry, garners both praise and criticism regarding its update policies. The Chinese manufacturer has discontinued support for models incapable of runni… [+4795 chars]"
        },
        {
            id: 36,
            source: "bollywood",
            author: "etimes.in",
            title: "Bollywood celebs who had an arranged marriage",
            description: "Shahid Kapoor, Madhuri Dixit, Vivek Oberoi: Bollywood celebs who opted for arranged marriage",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/shahid-kapoor-madhuri-dixit-vivek-oberoi-bollywood-celebs-who-opted-for-arranged-marriage/photostory/100613962.cms",
            urlToImage: "https://static.toiimg.com/photo/100614086.cms",
            publishedAt: "2023-05-30T08:30:00Z",
            content: "When we talk about the traditional arranged marriage, the top name that pops up in our minds is of Shahid Kapoor. The actor broke millions of hearts after he got hitched to a simple young girl named … [+572 chars]"
        },
        {
            id: 37,
            source: "fitness",
            author: "Fox News",
            title: "Ok to bring my dog to the gym? Man asks Reddit for advice on taking puppy for workouts",
            description: "A reported 22-year-old man on Reddit is asking if he’s wrong for bringing his dog to his members-only gym.",
            url: "https://nypost.com/2023/06/01/reddit-user-asks-if-hes-wrong-for-bringing-dog-to-gym/",
            urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-27298059-1685596222471.jpg?quality=75&strip=all&1685582018&w=1024",
            publishedAt: "2023-06-01T05:23:58Z",
            content: "A reported 22-year-old man on Reddit is asking if hes wrong for bringing his dog to his members-only gym.\r\nThe anonymous Reddit user, GymAITADogThrow1, consulted the “Am I the A—–e” subreddit, an onl… [+5339 chars]"
        },
        {
            id: 38,
            source: "food",
            author: "Reuters",
            title: "El Nino may hammer Asian farms",
            description: "SINGAPORE: Early signs of hot, dry weather caused by El Nino are threatening food producers across Asia, while American growers are counting on heavier summer rains from the weather phenomenon to alleviate the impact of severe drought.",
            url: "https://www.bangkokpost.com/world/2583176/el-nino-may-hammer-asian-farms",
            urlToImage: "https://static.bangkokpost.com/media/content/20230601/c1_2583176_230601174249_700.jpeg",
            publishedAt: "2023-06-01T10:38:00Z",
            content: "SINGAPORE: Early signs of hot, dry weather caused by El Nino are threatening food producers across Asia, while American growers are counting on heavier summer rains from the weather phenomenon to all… [+4370 chars]"
        },
        {
            id: 39,
            source: "hollywood",
            author: "Lucia Lamoury, Ffion Haf",
            title: "It's become the very image of female power. No wonder royals love Chanel...",
            description: "Understated and elegant, a Chanel outfit has long been something of a uniform for the world's most influential women.\nAnd royals are no exception...",
            url: "https://www.dailymail.co.uk/femail/article-12128599/Its-image-female-power-No-wonder-royals-love-Chanel.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/05/30/12/71563073-0-image-a-7_1685444464812.jpg",
            publishedAt: "2023-06-01T05:30:49Z",
            content: "Understated and always elegant, a Chanel outfit has long been something of a uniform for the world's most influential women.\r\nAs First Lady, Jackie Kennedy was noted for wearing Chanel.\r\nAnd royals a… [+9115 chars]"
        },
        {
            id: 40,
            source: "technology",
            author: "dave.james@futurenet.com (Dave James)",
            title: "Adata's shown its 1600W PSU can power four 450W RTX 4090s and that it really doesn't care for maths",
            description: "Topping 2200W of potential power, this isn't your average 1600W PSU.",
            url: "https://www.pcgamer.com/adatas-shown-its-1600w-psu-can-power-four-450w-rtx-4090s-and-that-it-really-doesnt-care-for-maths/",
            urlToImage: "https://cdn.mos.cms.futurecdn.net/JvyJM4GV2fM2Ybz34YDcp9-1200-80.jpg",
            publishedAt: "2023-06-01T11:11:20Z",
            content: "At Computex this week Adata has been showing off the extreme capacity of its nominally 1600W Fusion Titanium power supply. And it's been doing that by running four of Nvidia's most powerful graphics … [+1464 chars]"
        },
        {
            id: 41,
            source: "bollywood",
            author: "PTI",
            title: "Qawwali singer Rahat Fateh Ali Khan pays tribute to Sidhu Moosewala on first death anniversary",
            description: "Moosewala, whose real name was Shubhdeep Singh, was shot dead last year on May 29 in Punjab's Mansa district.",
            url: "https://economictimes.indiatimes.com/magazines/panache/qawwali-singer-rahat-fateh-ali-khan-pays-tribute-to-sidhu-moosewala-on-first-death-anniversary/articleshow/100617231.cms",
            urlToImage: "https://img.etimg.com/thumb/msid-100617283,width-1070,height-580,imgsize-20524,overlay-etpanache/photo.jpg",
            publishedAt: "2023-05-30T08:26:03Z",
            content: "Renowned Pakistani qawwali singer Rahat Fateh Ali Khan has paid homage to Sidhu Moosewala on the Punjabi singer's first death anniversary. During one of his concerts in the US, the Pakistani musician… [+974 chars]"
        },
        {
            id: 42,
            source: "fitness",
            author: "Roker Report",
            title: "Fan Letters: “Sunderland’s merchandising is nowhere near good enough!”",
            description: "Thoughts on some of our off-field issues, a possible starting XI for next year, and Ross Stewart’s contractual situation are in the RR mailbox today! Got something to say? Email us! RokerReport@yahoo.co.uk",
            url: "https://rokerreport.sbnation.com/2023/6/1/23742085/fan-letters-sunderlands-merchandising-is-nowhere-near-good-enough",
            urlToImage: "https://cdn.vox-cdn.com/thumbor/Swf3qXRqat_CTkwSr5vpAsGCzeA=/0x729:7752x4788/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24691385/1489876646.jpg",
            publishedAt: "2023-06-01T05:02:00Z",
            content: "Photo by George Wood/Getty Images\r\n\n \n\n\n Thoughts on some of our off-field issues, a possible starting XI for next year, and Ross Stewart’s contractual situation are in the RR mailbox today! Got some… [+6496 chars]"
        },
        {
            id: 43,
            source: "food",
            author: "Prince Of Petworth",
            title: "Random Reader Rant and/or Revel",
            description: "photo by LaTur You can talk about whatever is on your mind – quality of life issues, a beautiful tree you spotted, scuttlebutt, or any random questions/thoughts you may have. But please no personal attacks and no need to correct people’s grammar. This is a pl…",
            url: "https://www.popville.com/2023/06/random-reader-rant-and-or-revel-1399/",
            urlToImage: "https://s26552.pcdn.co/wp-content/uploads/2023/05/dc_neighborhood_news-20.jpg",
            publishedAt: "2023-06-01T10:45:20Z",
            content: "Cherry Blossom Healing Arts is Washington DC’s best acupuncture and herbal medicine clinic. Located in Woodley Park, DC, we practice integrative medicine and take a personalized approach to your heal… [+725 chars]"
        },
        {
            id: 44,
            source: "hollywood",
            author: "mirrornews@mirror.co.uk (Dan Marsh)",
            title: "Ryan Reynolds and Rob McElhenney help Wrexham star in business venture after chance meeting",
            description: "Wrexham striker Ollie Palmer has played a crucial role on the pitch since joining the club from AFC Wimbledon, but he's also had his hands full with a new business venture",
            url: "https://www.mirror.co.uk/sport/football/news/wrexham-reynolds-mcelhenney-ollie-palmer-30112006",
            urlToImage: "https://i2-prod.mirror.co.uk/incoming/article30117676.ece/ALTERNATES/s1200/0_FYC-Red-Carpet-For-FXs-Welcome-To-Wrexham-Red-Carpet-And-Panel.jpg",
            publishedAt: "2023-06-01T06:00:00Z",
            content: "When he was pitched the most unique project in football by Phil Parkinson back in January 2022, Ollie Palmer was under no illusions: he knew he was signing up for something special.\r\nAfter all, Wrexh… [+7731 chars]"
        },
        {
            id: 45,
            source: "technology",
            author: "Jon Oltsik",
            title: "6 ways Amazon Security Lake could boost data security",
            description: "Amazon's new security-focused data lake holds promise -- including possibly changing the economics around secure data storage.",
            url: "https://www.techtarget.com/searchdatamanagement/opinion/6-ways-Amazon-Security-Lake-could-boost-data-security",
            urlToImage: "https://cdn.ttgtmedia.com/rms/onlineimages/security_a135187239.jpg",
            publishedAt: "2023-06-01T11:08:00Z",
            content: "Like many other security analysts, I got my first peak at the Amazon Security Lake (ASL) last week in a private briefing ahead of the official release on May 30.\r\nSo just what is this ASL thing, and … [+5941 chars]"
        },
        {
            id: 46,
            source: "bollywood",
            author: "Pramod Gaikwad",
            title: "Disha Patani's gym pics will make you sweat",
            description: "Disha Patani is one of the fittest actresses in Bollywood. A look into her workout sessions that will surely make you sweat.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/web-stories/disha-patanis-workout-pictures-that-will-make-you-sweat/photostory/100629387.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100629395,imgsize-69610,width-900,height-1200,resizemode-6/100629395.jpg",
            publishedAt: "2023-05-30T16:25:16Z",
            content: "Disha shows off her toned legs wearing her pink gym shorts post workout session."
        },
        {
            id: 47,
            source: "fitness",
            author: "Crictracker Staff",
            title: "When you look at Rohit Sharma, you realise that fitness is one aspect where he can be a lot better: Salman Butt",
            description: "The Mahendra Singh Dhoni-led Chennai Super Kings won the Indian Premier League 2023 title on Monday night as they defeated the defending champions Gujarat Titans. CSK earned a record-equalling fifth I",
            url: "https://www.crictracker.com/cricket-news/when-you-look-at-rohit-sharma-you-realise-that-fitness-is-one-aspect-where-he-can-be-a-lot-better-salman-butt/",
            urlToImage: "https://media.crictracker.com/media/attachments/1685511737275_Rohit-Sharma-and-Salman-Butt.jpeg",
            publishedAt: "2023-06-01T03:26:59Z",
            content: "The Mahendra Singh Dhoni-led Chennai Super Kings won the Indian Premier League 2023 title on Monday night as they defeated the defending champions Gujarat Titans. CSK earned a record-equalling fifth … [+2047 chars]"
        },
        {
            id: 48,
            source: "food",
            author: "Mews",
            title: "Mews Open API enables hoteliers to build and connect 1,000 bespoke solutions to transform hotel operations",
            description: "Mews, the industry-leading hospitality cloud, is transforming the way hotels operate thanks to its open APIs, which have enabled customers to build and connect more than 1,000 of their custom applications to the hospitality management platform.",
            url: "https://www.hospitalitynet.org/news/4116669.html",
            urlToImage: "https://www.hospitalitynet.org/picture/social_153156699.jpg?t=1685609477",
            publishedAt: "2023-06-01T10:52:00Z",
            content: "PRAGUE - Mews, the industry-leading hospitality cloud, is transforming the way hotels operate thanks to its open APIs, which have enabled customers to build and connect more than 1,000 of their custo… [+3016 chars]"
        },
        {
            id: 49,
            source: "hollywood",
            author: "Isobel Lewis",
            title: "Hannah Waddingham says she’s still in the dark about Ted Lasso ‘ending’: ‘I genuinely don’t know’",
            description: "Actor said ‘there was lots of snotty, heavy breathing’ as cast watched finale together this week",
            url: "https://www.independent.co.uk/arts-entertainment/tv/news/hannah-waddingham-ted-lasso-ending-season-4-b2349420.html",
            urlToImage: "https://static.independent.co.uk/2023/06/01/07/newFile-1.jpg?quality=75&width=1200&auto=webp",
            publishedAt: "2023-06-01T06:24:10Z",
            content: "Sign up to our free IndyArts newsletter for all the latest entertainment news and reviews\r\nSign up to our free IndyArts newsletter\r\nHannah Waddingham has admitted that shes still in the dark over the… [+2699 chars]"
        },
        {
            id: 50,
            source: "technology",
            author: "Agence France-Presse",
            title: "European Union, US Working Towards Common Code of Conduct for AI Amid Growing Privacy, Civil Liberties Concerns",
            description: "The EU and US said Wednesday that they would soon release a voluntary code of conduct on artificial intelligence, hoping to develop common standards among democracies as China makes rapid gains. Both political and technology industry leaders have been warning…",
            url: "https://www.gadgets360.com/internet/news/ai-regulation-eu-us-common-code-of-conduct-artificial-intelligence-democracy-privacy-civil-liberties-china-4085339",
            urlToImage: "https://i.gadgets360cdn.com/large/ai_reuters_2_1685616485844.jpg",
            publishedAt: "2023-06-01T11:06:31Z",
            content: "The European Union and the United States said Wednesday that they would soon release a voluntary code of conduct on artificial intelligence, hoping to develop common standards among democracies as Ch… [+4798 chars]"
        },
        {
            id: 51,
            source: "bollywood",
            author: "etimes.in",
            title: "Kangana reacts to PC's statement on pay parity",
            description: "Kangana Ranaut shared her reaction on Priyanka Chopra's statement on giving up pay parity in Bollywood.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kangana-ranaut-reacts-to-priyanka-chopras-statement-on-pay-parity-in-bollywood-most-female-a-listers-work-for-free-and-offer-other-favours/articleshow/100630474.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100630629,width-1070,height-580,imgsize-24738,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-30T17:39:09Z",
            content: "Did you know Kangana Ranaut was not allowed to enter the Vatican City premises for THIS reason?Kangana Ranaut recently shares an anecdote from her Vatican vacation where she was not allowed to enter … [+12 chars]"
        },
        {
            id: 52,
            source: "fitness",
            author: "Moneycontrol News",
            title: "He is first one to turn up for training and leaves last: Josh Hazlewood praises RCB teammate Virat Kohli ahead of WTC showdown",
            description: "Josh Hazlewood, who has been battling with multiple injuries over the last six months, had to cut short his IPL stint with a side issue. However, he feels he is not far from bowling full tilt as Australia gear up for the big final.",
            url: "https://www.moneycontrol.com/news/trends/sports/he-is-first-one-to-turn-up-for-training-and-leaves-last-josh-hazlewood-praises-rcb-teammate-virat-kohli-ahead-of-wtc-showdown-10718441.html",
            urlToImage: "https://images.moneycontrol.com/static-mcnews/2023/04/8-virat-kohli-4th-t20-scorer-770x433.jpg",
            publishedAt: "2023-06-01T02:28:47Z",
            content: "Australia pacer Josh Hazlewood has spoken highly of Royal Challengers Bangalore teammates Virat Kohli and Mohammed Siraj ahead of the World Test Championship final against India at The Oval starting … [+3226 chars]"
        },
        {
            id: 53,
            source: "food",
            author: "Danya Bazaraa",
            title: "Children today have never tried classic teatime staples like toad in the hole and spaghetti hoops",
            description: "Half (50 per cent) of parents insisted many of the things they ate as a child are simply not healthy enough. Modern children are more likely to be fed more superfoods like avocado and fish.",
            url: "https://www.dailymail.co.uk/news/article-12147711/Children-today-never-tried-classic-teatime-staples-like-toad-hole-spaghetti-hoops.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/11/71648823-0-image-a-41_1685616632043.jpg",
            publishedAt: "2023-06-01T10:57:07Z",
            content: "Classic childhood dinners such as jacket potatoes and chicken dippers are in danger of vanishing as parents feed their children avocado and fish instead.\r\nA new survey has revealed that a quarter of … [+3008 chars]"
        },
        {
            id: 54,
            source: "hollywood",
            author: "Tom May",
            title: "New movie Mind, Body & Soul explores how Satan could be rebranded in 2023",
            description: "An existential documentary about Satan trying to adapt again to a modern society.",
            url: "https://www.creativeboom.com/inspiration/mind-body-soul/",
            urlToImage: "https://www.creativeboom.com/uploads/articles/29/29fa7adaf8bbafe5467d422e5f4605951ba84e67_800.jpg",
            publishedAt: "2023-06-01T06:30:00Z",
            content: "Whether you're religious or just intrigued by the idea of one man personifying all evil, Satan has fascinated humanity and been a central figure in art and literature for centuries. Even today, he's … [+3721 chars]"
        },
        {
            id: 55,
            source: "technology",
            author: "Ben Linders",
            title: "How Big Tech Lost Its Way - Regulation and Freedom",
            description: "Technology plays an ever increasing part in our lives, yet big tech seems to be running out of control, showing behavior that is at odds with its principles. Regulation is starting to develop, but laws are rarely applied. The leaders of big tech companies sho…",
            url: "https://www.infoq.com/news/2023/06/big-tech-regulation-freedom/",
            urlToImage: "https://res.infoq.com/news/2023/06/big-tech-regulation-freedom/en/headerimage/generatedHeaderImage-1685524903129.jpg",
            publishedAt: "2023-06-01T11:06:00Z",
            content: "Technology plays an ever increasing part in our lives, yet big tech seems to be running out of control, showing behavior that is at odds with its principles. Regulation is starting to develop, but la… [+4102 chars]"
        },
        {
            id: 56,
            source: "bollywood",
            author: "ET Online",
            title: "10 months after 'Laal Singh Chaddha' tanked at box-office, Aamir Khan not 'emotionally ready' for new film",
            description: "Aamir Khan, Bollywood's superstar, has stated that he is not \"emotionally ready\" to work in his next film yet. Following the weak response to his latest film, 'Laal Singh Chaddha,' the actor decided to take a break from acting to prioritise his family.",
            url: "https://economictimes.indiatimes.com/magazines/panache/10-months-after-laal-singh-chaddha-tanked-at-box-office-aamir-khan-not-emotionally-ready-for-new-film/articleshow/100637104.cms",
            urlToImage: "https://img.etimg.com/thumb/msid-100637751,width-1070,height-580,imgsize-40850,overlay-etpanache/photo.jpg",
            publishedAt: "2023-05-31T03:17:42Z",
            content: "It's been almost a year since Bollywood superstar Aamir Khan's 'Laal Singh Chaddha' was released. Last year around the same time, the highly-aspirational Hindi remake of Tom Hanks's 1994 film 'Forres… [+1998 chars]"
        },
        {
            id: 57,
            source: "fitness",
            author: "John Hawks",
            title: "Springfield man looks to win national Mr. Health and Fitness competition",
            description: "The Strongman competitor, Ian Currie, hopes to win the $20,000 grand prize to open a community strength and conditioning gym in Windsor, VT.",
            url: "https://www.mynbc5.com/article/springfield-man-looks-to-win-national-mr-health-and-fitness-competition/44055879",
            urlToImage: "https://kubrick.htvapps.com/vidthumb/9765f4e9-e783-4d61-8a84-7f1d0df31cda/b78a8123-3fd4-41f3-8a84-0b613abd0d69.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            publishedAt: "2023-06-01T01:21:05Z",
            content: "SPRINGFIELD, Vt. —Thirty-seven-year-old Ian Currie is a retired Army infantryman from Springfield. He fell off a military vehicle while serving overseas. \r\nI suffered a pretty rough back injury that … [+1963 chars]"
        },
        {
            id: 58,
            source: "food",
            author: "Julie Chiou",
            title: "Crack Pie",
            description: "This crack pie is a homemade version and copycat recipe of Milk Bar's famous pie by Christina Tosi! It's irresistibly salty, sweet, and gooey!",
            url: "https://www.tablefortwoblog.com/crack-pie/",
            urlToImage: "https://www.tablefortwoblog.com/wp-content/uploads/2023/05/crack-pie-recipe-photo-tablefortwoblog-15-scaled.jpg",
            publishedAt: "2023-06-01T11:00:00Z",
            content: "Crack Pie has an oatmeal cookie crust that’s topped with the most incredible sweet and salty filling! This is a homemade copycat version of the famous Milk Bar pie and it always hits the spot. Serve … [+9455 chars]"
        },
        {
            id: 59,
            source: "hollywood",
            author: "Kamal Sultan",
            title: "Danny Masterson victim speaks out after guilty verdict and calls on others to 'tell the truth'",
            description: "One of Danny Masterson's victims has spoken out for the first time since the That 70s Show star was convicted of two counts of rape in a Los Angeles court on Wednesday.",
            url: "https://www.dailymail.co.uk/news/article-12147023/Danny-Masterson-victim-speaks-guilty-verdict-calls-tell-truth.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/07/71641063-0-image-a-2_1685600788698.jpg",
            publishedAt: "2023-06-01T06:31:09Z",
            content: "One of Danny Masterson's victims has spoken out for the first time since the That 70s Show star was convicted of two counts of rape in a Los Angeles court on Wednesday. \r\nIn a brief statement to jour… [+13841 chars]"
        },
        {
            id: 60,
            source: "technology",
            author: "Aria Alamalhodaei",
            title: "Pixxel's hyperspectral orbital imagery attracts investment from Google",
            description: "Hyperspectral imagery startup Pixxel has raised $36 million as it prepares to roll out new remote sensing and analytics capabilities.",
            url: "https://techcrunch.com/2023/06/01/pixxels-hyperspectral-orbital-imagery-attracts-google-cash/",
            urlToImage: "https://techcrunch.com/wp-content/uploads/2023/06/pixxel.jpeg?resize=1200,660",
            publishedAt: "2023-06-01T11:01:16Z",
            content: "Hyperspectral imagery startup Pixxel has closed $36 million in funding as it prepares to roll out new remote sensing and analytics capabilities to customers.\r\nThe L.A. and Bangalore-based startup als… [+4439 chars]"
        },
        {
            id: 61,
            source: "bollywood",
            author: "etimes.in",
            title: "When Varun Dhawan made fun of Alia's walk",
            description: "In an old video from Koffee with Karan, Varun is seen making fun of Alia Bhatt's walk and said, \" sorry Sonia aunty, Mahesh sir. They didn’t teach her how to walk\"",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/throwback-when-varun-dhawan-made-fun-of-alia-bhatts-walk-said-her-parents-did-not-teach-her-how-to-do-it-properly/articleshow/100638436.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100638375,width-1070,height-580,imgsize-26774,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T04:37:43Z",
            content: "\"What a team,\" Anushka Sharma lauds team on cricket match winTaking to Instagram stories, Bollywood actor Anushka Sharma shared a picture and wrote, \"What an exciting game! What a win! What a team\"."
        },
        {
            id: 62,
            source: "fitness",
            author: "Kylie Stevens, Candace Sutton",
            title: "Endeavour Hills stabbing: Monique Lezsak's friends reveal her daughter's brave act",
            description: "Monique Lezsak died from stab wounds at her parents' home in Endeavour Hills in Melbourne's south-east. Her two children were home at the time.",
            url: "https://www.dailymail.co.uk/news/article-12146241/Endeavour-Hills-stabbing-Monique-Lezsaks-friends-reveal-daughters-brave-act.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/01/71634657-0-image-a-35_1685580803696.jpg",
            publishedAt: "2023-06-01T01:05:02Z",
            content: "An injured girl has been hailed a hero after she tried valiantly to protect her mum  involved in an alleged confrontation with her partner.\r\nSven Lindemann, 52, a German-born fitness fanatic, remains… [+5858 chars]"
        },
        {
            id: 63,
            source: "food",
            author: "Katy McGuinness",
            title: "Bramley review: ‘Michelin-star chef brings fine dining to Laois and I predict it won’t be long until the inspectors come calling’",
            description: "Abbeyleix is one of those rare, handsome Irish towns and, with the newly opened Bramley, it now has a smart restaurant worthy of its wide main street. When I phone chef-owner Sam Moody a few days after my visit to check some details, he is delighted by the re…",
            url: "https://www.independent.ie/life/food-drink/food-reviews/bramley-review-michelin-star-chef-brings-fine-dining-to-laois-and-i-predict-it-wont-be-long-until-the-inspectors-come-calling/a1460764418.html",
            urlToImage: "https://focus.independent.ie/thumbor/daeP1nq-CdCwInZeKsk4rKUWIU4=/155x0:1085x620/930x620/prod-mh-ireland/172c4774-df85-491e-816a-7b395f80856b/8e5b6043-e8e5-4d5a-afdd-26803273cf60/172c4774-df85-491e-816a-7b395f80856b.jpg",
            publishedAt: "2023-06-01T11:00:00Z",
            content: "Our food critic is impressed by the excellent food and friendly service at Abbeyleixs newest restaurant\r\nAbbeyleix is one of those rare, handsome Irish towns and, with the newly opened Bramley, it no… [+360 chars]"
        },
        {
            id: 64,
            source: "hollywood",
            author: "mirrornews@mirror.co.uk (Scarlett O'Toole)",
            title: "Kim Kardashian 'spent hours' working as Kanye's 'clean-up crew' as he 'hit rock bottom'",
            description: "Kim Kardashian and Kanye West had a turbulent relationship, but the reality star has admitted she initially tried to save his public image after his racist outbursts",
            url: "https://www.mirror.co.uk/3am/us-celebrity-news/kim-kardashian-spent-hours-working-30127282",
            urlToImage: "https://i2-prod.mirror.co.uk/incoming/article30127385.ece/ALTERNATES/s1200/0_Kim-Kardashian.jpg",
            publishedAt: "2023-06-01T07:05:25Z",
            content: "Kim Kardashian has opened up about the breakdown of her marriage to Kanye West and said he needed \"to hit rock bottom\" alone. \r\n The 42-year-old reality star, who dated the rapper for 10 years, admit… [+2094 chars]"
        },
        {
            id: 65,
            source: "technology",
            author: "Esther Ajao",
            title: "Automation Anywhere infuses RPA platform with generative AI",
            description: "The RPA vendor unveiled new features for its AI Success platform aimed at expanding the number of automation applications while providing users with a choice of cloud providers.",
            url: "https://www.techtarget.com/searchenterpriseai/news/366539033/Automation-Anywhere-infuses-RPA-platform-with-generative-AI",
            urlToImage: "https://cdn.ttgtmedia.com/rms/onlineimages/chatbot_g1150454068.jpg",
            publishedAt: "2023-06-01T11:01:00Z",
            content: "Automation Anywhere is infusing generative AI into its Automation Success Platform.\r\nOn June 1, the robotic process automation (RPA) vendor unveiled three new generative AI features within its automa… [+4306 chars]"
        },
        {
            id: 66,
            source: "bollywood",
            author: "Subhash K Jha",
            title: "Priyanka's Citadel connection with SRK",
            description: "Ever since Priyanka Chopra did the two films in the Don series with Shah Rukh Khan, it had been speculated that she has been dying to do her own version of the superslick action hero.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/priyanka-chopras-citadel-connection-with-shah-rukh-khan/articleshow/100639204.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100639144,width-1070,height-580,imgsize-28902,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T05:02:47Z",
            content: "Twitterati slam Aamir Khan, Priyanka Chopra and other Bollywood stars for silence on #WrestlersProtest: You profited off their storyTwitterati slam Aamir Khan, Priyanka Chopra and other Bollywood sta… [+438 chars]"
        },
        {
            id: 67,
            source: "fitness",
            author: "Codie Bullen",
            title: "Davina McCall showcases her washboard abs in a black sports bra in sizzling workout video",
            description: "The TV presenter, 55, donned a pair of purple shorts and pulled them down slightly, flaunting her impressive physique.",
            url: "https://www.dailymail.co.uk/tvshowbiz/article-12146321/Davina-McCall-showcases-washboard-abs-black-sports-bra-sizzling-workout-video.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/01/71633089-0-image-a-59_1685579660365.jpg",
            publishedAt: "2023-06-01T01:00:00Z",
            content: "She is well-known for being a fitness fanatic and often shows off her exercise regime on social media.\r\nAnd Davina McCall showed off her washboard abs in a black sports bra during her latest gruellin… [+4198 chars]"
        },
        {
            id: 68,
            source: "food",
            author: "Esquire Editors",
            title: "The Best Bars in America, 2023",
            description: "From a space-themed bar in San Diego, to conjuring the 70s through wine in New Orleans, and reinventing the quintessential dive in New York, here are all the new spots to order another round or three.",
            url: "https://www.esquire.com/food-drink/bars/a43989427/best-bars-america-2023/",
            urlToImage: "https://hips.hearstapps.com/hmg-prod/images/social-64765cbe771a9.jpg?crop=0.998xw:1.00xh;0.00160xw,0&resize=1200:*",
            publishedAt: "2023-06-01T11:00:00Z",
            content: "Birds were on every page. Pretty ones. Ugly ones. Downright strange-looking ones. I was perusing the avian-themed cocktail menu at Meadowlark, an old library-like spot in Chicagos Logan Hill neighbor… [+29401 chars]"
        },
        {
            id: 69,
            source: "hollywood",
            author: "Ashley Hume",
            title: "Johnny Depp mounts career comeback one year after Amber Heard trial",
            description: "One year after Johnny Depp and Amber Heard's explosive trial came to an end, the 59-year-old actor is making his comeback.",
            url: "https://www.foxnews.com/entertainment/johnny-depp-mounts-career-comeback-one-year-after-amber-heard-trial",
            urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/johnny2.jpg",
            publishedAt: "2023-06-01T08:00:16Z",
            content: "Johnny Depp spent the last year proving he is still a major force in Hollywood. \r\nHis highly publicized defamation trial with ex-wife Amber Heard came to a conclusion exactly one year ago. \r\nDuring t… [+10920 chars]"
        },
        {
            id: 70,
            source: "technology",
            author: "Pedro",
            title: "Ikea Skadis Headphone Holder #3DThursday #3DPrinting",
            description: "zdonnellyd shares: This is an Ikea Skadis headphone holder that is intended to occupy one “slot” of an Ikea skadis pegboard with as small of a footprint as possible. The two versions allow for the printing of the holder that more closely resembles the geometr…",
            url: "https://blog.adafruit.com/2023/06/01/ikea-skadis-headphone-holder-3dthursday-3dprinting/",
            urlToImage: "https://cdn-blog.adafruit.com/uploads/2023/05/Ikea-Skadis-Headphone-Holder-1.jpeg",
            publishedAt: "2023-06-01T11:00:39Z",
            content: "June 1, 2023 AT 7:00 am\r\nIkea Skadis Headphone Holder #3DThursday #3DPrinting\r\nzdonnellyd shares: \r\nThis is an Ikea Skadis headphone holder that is intended to occupy one “slot” of an Ikea skadis peg… [+4490 chars]"
        },
        {
            id: 71,
            source: "bollywood",
            author: "Entertainment Desk",
            title: "Former Bigg Boss contestant Mandana Karimi opens up about scarring Bollywood experience: ‘If I had a daughter, I would be worried…’",
            description: "Mandana Karimi explained why her time in Bollywood left her scarred. She said that she felt 'disrespected', and was labelled 'difficult to work with'.",
            url: "https://indianexpress.com/article/entertainment/bollywood/bigg-boss-contestant-mandana-karimi-opens-up-about-scarring-bollywood-experience-8638223/",
            urlToImage: "https://images.indianexpress.com/2020/11/mandana1200.jpg",
            publishedAt: "2023-05-31T06:36:50Z",
            content: "Iranian actor Mandana Karimi, who is best known for appearing in the reality show Bigg Boss and playing a supporting role in Kya Kool Hain Hum 3, said that she has quit Bollywood because it was getti… [+2074 chars]"
        },
        {
            id: 72,
            source: "fitness",
            author: "The Chalkboard Editorial Team",
            title: "16 Healthy Father’s Day Gifts For Your Dad’s Well-Being",
            description: "Whether he's a gym rat, a home chef or in need of an expanded sense of connection, we've got healthy Father's Day gift ideas for every dad out there! Whether you want to encourage healthy new habits or support him in his favorite health pursuit lately, we've …",
            url: "http://thechalkboardmag.com/healthy-fathers-day-gifts-2023/",
            urlToImage: "https://thechalkboardmag.com/wp-content/uploads/2023/05/fathers-day-gift-guide-2023.jpg",
            publishedAt: "2023-06-01T00:00:40Z",
            content: "Whether he’s a gym rat, a home chef or in need of an expanded sense of connection, we’ve got healthy Father’s Day gift ideas for every dad out there! Whether you want to encourage healthy new habits … [+4952 chars]"
        },
        {
            id: 73,
            source: "food",
            author: "Jessica Terrell",
            title: "‘A historic moment’: Illinois to provide halal and kosher meals to schoolkids",
            description: "A bill passed the state legislature that will require state-funded institutions to provide halal and kosher meals on requestAs a student at Sullivan high school in Chicago, Ridwan Rashid frequently skipped lunch and was distracted by hunger, even though his s…",
            url: "https://www.theguardian.com/environment/2023/jun/01/illinois-halal-kosher-school-meals",
            urlToImage: "https://i.guim.co.uk/img/media/3533124efbae4235ff7a3b6c2abccc7b2b594cda/0_0_1272_763/master/1272.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4d31c41e7315e82e672664cdde54ac0",
            publishedAt: "2023-06-01T11:00:31Z",
            content: "As a student at Sullivan high school in Chicago, Ridwan Rashid frequently skipped lunch and was distracted by hunger, even though his school offered free meals to all students. Rashid is Muslim, as a… [+10583 chars]"
        },
        {
            id: 74,
            source: "hollywood",
            author: "Alexi Duggins, Hannah Verdier, Hollie Richardson and Ella Braidwood",
            title: "Stars spill their secrets to an interviewing icon on The Louis Theroux Show",
            description: "The legendary documentary-maker meets celebrities from Shania Twain to Craig David in his new show. Plus: five of the best LGBTQ+ history podcasts<ul><li>Don’t get Hear Here delivered to your inbox? Sign up here</li></ul>It takes a remarkable true crime podca…",
            url: "https://www.theguardian.com/tv-and-radio/2023/jun/01/hear-here-the-louis-theroux-podcast-spotify",
            urlToImage: "https://i.guim.co.uk/img/media/9e13df503514fd22e9247d6c64a3f75c75f97ec2/0_351_3840_2302/master/3840.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a37947c0344f9481cd798811912329f",
            publishedAt: "2023-06-01T08:45:28Z",
            content: "It takes a remarkable true crime podcast to bring something new to a case. When a crime happened years ago and has most likely already undergone a detailed investigation its no mean feat to unearth t… [+12714 chars]"
        },
        {
            id: 75,
            source: "technology",
            author: "Timothy B. Lee",
            title: "The “death of self-driving cars” has been greatly exaggerated",
            description: "GM’s Cruise aims to turn self-driving into a billion-dollar business.",
            url: "https://arstechnica.com/cars/2023/06/the-death-of-self-driving-cars-is-greatly-exaggerated/",
            urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2023/05/IPACE_3.jpg",
            publishedAt: "2023-06-01T11:00:37Z",
            content: "Enlarge/ The latest iteration of Waymo's self-driving technology is based on the Jaguar I-PACE.\r\n5 with \r\nSeven years ago, hype about self-driving cars was off the charts. It wasnt just Tesla CEO Elo… [+3837 chars]"
        },
        {
            id: 76,
            source: "bollywood",
            author: "ANI",
            title: "Nargis begins shooting next in Varanasi",
            description: "On Wednesday, Nargis Fakhri treated fans with glimpses of her exciting new journey, she posted Instagram stories from the shoot location.",
            url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/nargis-fakhri-begins-shooting-for-her-next-project-in-varanasi/articleshow/100642751.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100642751,width-1070,height-580,imgsize-315494,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T07:04:44Z",
            content: "Ranbir Kapoor says THIS superstar can be a perfect babysitter for his daughter Raha KapoorRanbir Kapoor reveals the name of a Bollywood superstar who, according to him, can be a perfect babysitter fo… [+26 chars]"
        },
        {
            id: 77,
            source: "fitness",
            author: "Points, Miles & Martinis",
            title: "Hotel Review: The Langley, a Luxury Collection Hotel, Buckinghamshire",
            description: "The Langley, a Luxury Collection Hotel, Buckinghamshire is located in the former manor home of the third Duke of Marlborough in the town of Slough. The property is a 45 minutes drive to Central London, and only 15 minutes from London Heathrow. This boutique p…",
            url: "https://pointsmilesandmartinis.boardingarea.com/2023/05/hotel-review-the-langley-a-luxury-collection-hotel-buckinghamshire/",
            urlToImage: "https://pointsmilesandmartinis.boardingarea.com/wp-content/uploads/2023/05/The-Langley-1-730x502.png",
            publishedAt: "2023-05-31T23:24:05Z",
            content: "Our site may contain affiliate links. Read Advertiser Disclosure policy here.\r\nThe Langley, a Luxury Collection Hotel, Buckinghamshire is located in the former manor home of the third Duke of Marlbor… [+2336 chars]"
        },
        {
            id: 78,
            source: "food",
            author: "Mavis Butterfield",
            title: "Broad Arrow Farm Market",
            description: "<table><tr><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>\r\nAfter meeting up with The Kiln Guy and The Chef for lunch last week at Bet’s Fish Fry, we decided to check out Broad Arrow Farm Market in nearby Bristol for a look around…",
            url: "https://www.onehundreddollarsamonth.com/broad-arrow-farm-market/",
            urlToImage: "https://www.onehundreddollarsamonth.com/wp-content/uploads/2023/06/maine-store-scaled.jpg",
            publishedAt: "2023-06-01T11:00:58Z",
            content: "After meeting up with The Kiln Guy and The Chef for lunch last week at Bets Fish Fry, we decided to check out Broad Arrow Farm Market in nearby Bristol for a look around. \r\nThe Broad Arrow Farm Marke… [+1261 chars]"
        },
        {
            id: 79,
            source: "hollywood",
            author: "Niomi Harris",
            title: "Inside Maya Jama's love life: We take a look back at the Love Island host's relationship history",
            description: "Inside Maya Jama's love life: As the single Love Island host is linked to ex Stormzy again, we take a look back at her relationship history",
            url: "https://www.dailymail.co.uk/tvshowbiz/article-12147637/Inside-Maya-Jamas-love-life-look-Love-Island-hosts-relationship-history.html",
            urlToImage: "https://i.dailymail.co.uk/1s/2023/06/01/09/71644815-0-image-a-15_1685609725062.jpg",
            publishedAt: "2023-06-01T09:01:33Z",
            content: "She's set to make a sizzling return to screens on Monday as a new crop of sexy singletons enter the Love Island villa in a bid to find true love.\r\nBut while she helps the newest islanders find their … [+8389 chars]"
        },
        {
            id: 80,
            source: "technology",
            author: "Press Trust of India",
            title: "World's first 3D printed Hindu temple being built in Telangana by Apsuja",
            description: "The world's first 3D printed Hindu temple is being built in Telangana. Situated within Charvitha Meadows, a gated villa community at Burugupally in Siddipet, the 3D printed temple is a three-part structure being built in an area of 3,800 square feet by city-b…",
            url: "https://www.business-standard.com/india-news/world-s-first-3d-printed-hindu-temple-being-built-in-telangana-by-apsuja-123060100626_1.html",
            urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/29/full/1682748089-0587.jpg",
            publishedAt: "2023-06-01T11:00:36Z",
            content: "The world's first 3D printed Hindu temple is being built in Telangana. Situated within Charvitha Meadows, a gated villa community at Burugupally in Siddipet, the 3D printed temple is a three-part str… [+2046 chars]"
        },
        {
            id: 81,
            source: "bollywood",
            author: "REDIFF MOVIES",
            title: "'Only I get paid like male actors'",
            description: "'Most A-listers (women) do films for free along with offering other favours...'",
            url: "https://www.rediff.com/movies/report/kangana-ranaut-only-i-get-paid-like-male-actors-and-no-one-else/20230531.htm",
            urlToImage: "https://im.rediff.com/movies/2023/may/31kangana2.jpg",
            publishedAt: "2023-05-31T07:22:29Z",
            content: "'Most A-listers (women) do films for free along with offering other favours...'\r\n \r\nPhotographs: Kind courtesy Kangana Ranaut/ Priyanka Chopra /Instagram\r\nMove aside Karan Johar, Kangana Ranaut seems… [+1571 chars]"
        },
        {
            id: 82,
            source: "fitness",
            author: "Olivia Cigliano",
            title: "The 8 Best Nike Workout Shoes for Every Activity",
            description: "Hit the gym with kicks that cater to your workout routine.",
            url: "http://footwearnews.com/shop/best-nike-workout-shoes-1203292707/",
            urlToImage: "https://footwearnews.com/wp-content/uploads/2023/05/Best-Nike-Workout-Shoes.png",
            publishedAt: "2023-05-31T23:10:00Z",
            content: "All products and services featured are independently chosen by editors. However, Footwear News may receive a commission on orders placed through its retail links, and the retailer may receive certain… [+21558 chars]"
        },
        {
            id: 83,
            source: "food",
            author: "Richard Partington Economics correspondent",
            title: "Food producers and retailers lobby to delay UK household recycling reforms",
            description: "Firms are due to share cost of recycling waste from April but say it will add £1.7bn to food billsBritain’s biggest retailers and food manufacturers are stepping up lobbying on the government to delay landmark environmental reforms that would force them to pa…",
            url: "https://www.theguardian.com/business/2023/jun/01/food-producers-retailers-lobby-to-household-recycling-reforms",
            urlToImage: "https://i.guim.co.uk/img/media/c4e8edab36efcb0939d3f73d4f5ab0db899f18a1/0_124_3840_2304/master/3840.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3cd0e0363e8b8a05e38b905e51f90331",
            publishedAt: "2023-06-01T11:01:22Z",
            content: "Britains biggest retailers and food manufacturers are stepping up lobbying on the government to delay landmark environmental reforms that would force them to pay for the collection and recycling of h… [+9691 chars]"
        },
        {
            id: 84,
            source: "hollywood",
            author: "Jacob Stolworthy",
            title: "Kim Cattrall and Sarah Jessica Parker feud: A timeline of the beef between Sex and the City co-stars",
            description: "Actors starred together in the long-running HBO series ‘Sex and the City’, as well as in two feature films",
            url: "https://www.independent.co.uk/arts-entertainment/tv/news/kim-cattrall-sarah-jessica-parker-feud-timeline-b2349466.html",
            urlToImage: "https://static.independent.co.uk/2023/06/01/09/Sarah-Jessica-Parker-Kim-Cattralljpg.jpg?quality=75&width=1200&auto=webp",
            publishedAt: "2023-06-01T09:14:37Z",
            content: "Sign up to our free IndyArts newsletter for all the latest entertainment news and reviews\r\nSign up to our free IndyArts newsletter\r\nThe feud between Kim Cattrall and Sarah Jessica Parker seems as tho… [+7454 chars]"
        },
        {
            id: 85,
            source: "technology",
            author: "Joshua Adegoke",
            title: "14 Must-Listen Podcasts Every Web Developer Should Subscribe To",
            description: "Listening to experienced devs and designers is a great way of learning and keeping up with web technology. These podcasts are all worth a listen.",
            url: "https://www.makeuseof.com/web-developer-podcasts-must-listen-subscribe/",
            urlToImage: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/closeup-of-podcasting-gadgets.jpg",
            publishedAt: "2023-06-01T11:00:18Z",
            content: "Podcasts are instrumental for anyone looking to upgrade their web development skills. Their conversational nature makes them interesting and educational, placing them among the best ways to boost you… [+7608 chars]"
        },
        {
            id: 86,
            source: "bollywood",
            author: "IANS",
            title: "Sonakshi reveals her favourite scene from Dahaad",
            description: "News News: Bollywood actress Sonakshi Sinha, who is receiving a lot of positive response for her streaming debut in 'Dahaad', shared her favourite moment from th.",
            url: "https://timesofindia.indiatimes.com/web-series/news/hindi/sonakshi-reveals-her-favourite-scene-from-dahaad-it-was-empowering-as-an-actor/articleshow/100647624.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-100647624,width-1070,height-580,imgsize-21490,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2023-05-31T10:05:36Z",
            content: "Tejasswi Prakash to Rupali Ganguly; TV's top highest-paid actors"
        },
        {
            id: 87,
            source: "fitness",
            author: "Jonathan Wilson at the Puskás Aréna",
            title: "José Mourinho fights the bad fight, but ends up on the losing side | Jonathan Wilson",
            description: "The Europa League final between Sevilla and Roma lasted 146 minutes. It felt longer, but no one got their money’s worthJosé Mourinho, perhaps, is a pleasure better remembered than experienced. We chuckled at him wearing a wire, at him laying into Daniel Levy …",
            url: "https://www.theguardian.com/football/blog/2023/may/31/nihilist-jose-mourinho-fights-the-bad-fight-but-ends-up-on-losing-side",
            urlToImage: "https://i.guim.co.uk/img/media/937bd84c7bedf5a148b10f37317d1cc41c961a47/49_104_3117_1871/master/3117.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c4a6e7050193f58fbd2de553afaad59a",
            publishedAt: "2023-05-31T22:57:12Z",
            content: "José Mourinho, perhaps, is a pleasure better remembered than experienced. We chuckled at him wearing a wire, at him laying into Daniel Levy with the scorn that only he can muster, progressing through… [+10434 chars]"
        },
        // {
        //     id: 88,
        //     source: "food",
        //     author: "Felicia Wilson",
        //     title: "Precautions to Follow While Taking Kratom for Pain Relieving",
        //     description: "Kratom is making waves, and rightfully so; it is natural and has healing qualities. Mainly praised as a mood enhancer, energy booster, pain reliever, and opioid withdrawal antidote.  When administered in low doses, it acts as a stimulant for those with low en…",
        //     url: "https://curiousmindmagazine.com/precautions-to-follow-while-taking-kratom-for-pain-relieving/",
        //     urlToImage: "https://curiousmindmagazine.com/wp-content/uploads/2023/06/Kratom-for-Pain-Relieving.jpg",
        //     publishedAt: "2023-06-01T11:06:23Z",
        //     content: "Kratom is making waves, and rightfully so; it is natural and has healing qualities. Mainly praised as a mood enhancer, energy booster, pain reliever, and opioid withdrawal antidote. \r\nWhen administer… [+9472 chars]"
        // },
        {
            id: 89,
            source: "hollywood",
            author: "https://www.facebook.com/bbcnews",
            title: "Tupac Shakur: Rapper 2Pac to get star on Hollywood Walk of Fame",
            description: "The hip-hop star will be honoured with a ceremony on the prestigious Los Angeles walkway on 7 June.",
            url: "https://www.bbc.co.uk/news/entertainment-arts-65769938",
            urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/54D3/production/_129951712_2pacgettyimages-76154363.jpg",
            publishedAt: "2023-06-01T09:41:20Z",
            content: "Tupac Shakur is to receive a star on the Hollywood Walk of Fame, 26 years after the rapper's death.\r\nThe hip-hop star will be honoured with a ceremony on the prestigious Los Angeles walkway on 7 June… [+969 chars]"
        },
        {
            id: 90,
            source: "technology",
            author: "Mediawire",
            title: "IIM Kozhikode, TimesPro launch 16th batch of Executive Post Graduate Programme in Management",
            description: "The IIM Kozhikode and TimesPro have announced the 16th batch of the two-year Executive Post Graduate Programme in Management (EPGP) for working professionals.",
            url: "https://economictimes.indiatimes.com/industry/services/education/iim-kozhikode-timespro-launch-16th-batch-of-executive-post-graduate-programme-in-management/articleshow/100677906.cms",
            urlToImage: "https://img.etimg.com/thumb/msid-100677906,width-1070,height-580,imgsize-742423,overlay-economictimes/photo.jpg",
            publishedAt: "2023-06-01T11:00:16Z",
            content: "The two-year MBA will enable working professionals to acquire holistic managerial competencies to boost career growth &amp; stay industry ready. \r\nThe Indian Institute of Management Kozhikode and Tim… [+5594 chars]"
        },
        // {
        //     id: 91,
        //     source: "technology",
        //     author: "Dustin Long",
        //     title: "NASCAR weekend schedule at Gateway, Portland",
        //     description: "Weekend schedules for Cup and Trucks at World Wide Technology Raceway at Gateway and the Xfinity Series at Portland International Raceway.",
        //     url: "https://nascar.nbcsports.com/2023/06/01/nascar-weekend-schedule-at-gateway-portland/",
        //     urlToImage: "https://nascar.nbcsports.com/wp-content/uploads/sites/9/2023/05/GettyImages-1241216009-e1685551326696.jpg",
        //     publishedAt: "2023-06-01T11:00:09Z",
        //     content: "After the fireworks from the Coca-Cola 600, NASCAR heads to World Wide Technology Raceway, a 1.25-mile speedway just outside of St. Louis. Sundays race (3:30 p.m. ET on FS1) marks the second time the… [+2589 chars]"
        // },
        {
            id: 92,
            source: "technology",
            author: "Nancy Collamer",
            title: "How Your Hobbies Can Make You Money in Retirement",
            description: "After decades of hard work, you're nearing retirement age and looking forward to long days spent outdoors, online and on the road. But, maybe you haven't...",
            url: "https://finance.yahoo.com/news/hobbies-money-retirement-110003361.html",
            urlToImage: "https://s.yimg.com/ny/api/res/1.2/ytoTtMiEdznwP4bvwAJkNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/b85a69b164b683e7f08094ea50d359b2",
            publishedAt: "2023-06-01T11:00:03Z",
            content: "DuxX / Getty Images/iStockphoto\r\nAfter decades of hard work, you're nearing retirement age and looking forward to long days spent outdoors, online and on the road. But, maybe you haven't decided how … [+7666 chars]"
        },
        {
            id: 93,
            source: "technology",
            author: "news@motorauthority.com (Viknesh Vijayenthiran), Viknesh Vijayenthiran",
            title: "Porsche reveals revised logo ready for digital age",
            description: "Porsche on Thursday revealed a revised design for its iconic crest logo that will start appearing on the automaker's vehicles from late 2023. The basic design hasn't changed but elements have been simplified to make 2D versions of the logo, like those used in…",
            url: "https://www.motorauthority.com/news/1139805_porsche-reveals-revised-logo-ready-for-digital-age",
            urlToImage: "https://images.hgmsites.net/hug/revised-porsche-crest-logo--june-2023_100887161_h.jpg",
            publishedAt: "2023-06-01T11:00:00Z",
            content: "Porsche on Thursday revealed a revised design for its iconic crest logo that will start appearing on the automaker's vehicles from late 2023.\r\nThe basic design hasn't changed but elements have been s… [+1893 chars]"
        },


    ])
    return (
        <>
        <Bucket.Provider value={[data, setData]}>
            {props.children}
        </Bucket.Provider>
        </>
    )
}

export default CreateStore





