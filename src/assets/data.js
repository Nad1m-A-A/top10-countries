export const buttonsContext = [
"Wealthy",
"Poor",
"Dangerous",
"Intelligent",
"At_War",
"High_Salary",
];
export const listContext = [
"Flag",
"Name",
"Continent",
// "Language",
"Numbers",
"Description",
];

export const top_10s = {
// numbers here are in trillion
    wealthy: [
        {
        country: "China",
        numbers: "17.73",
        description:
            "China is a big market and most importantly, China has brought foreign technology to develop further.",
        },

        {
        country: "United States",
        numbers: "22.99",
        description:
            "A culture of entrepreneurship and a financial system that supports it, abundant energy, smaller and more decentralized government, long work hours.",
        },

        {
        country: "Japan",
        numbers: "4.93",
        description:
            "Primary industries, including agriculture. Its growth was led by the application of efficient industrial techniques.",
        },

        {
        country: "Germany",
        numbers: "4.22",
        description:
            "Germany's economy is largely based on exports, which account for 46 percent of its gross domestic product.",
        },

        {
        country: "United Kingdom",
        numbers: " 3.18",
        description:
            "Its economy is a highly developed social market, producing a lot of high value goods and services.",
        },

        {
        country: "France",
        numbers: "2.93",
        description:
            "The chemical industry is a key sector for France, helping to develop other manufacturing activities and contributing to economic growth.",
        },

        {
        country: "India",
        numbers: "3.17",
        description:
            "Micro, Small & Medium Enterprises, Mining, Chemicals and Petrochemicals, Corporate Governance, all play a role in India's high numbers.",
        },

        {
        country: "Canada",
        numbers: "1.99",
        description:
            "Fueled in part by its vast natural resources, sizable manufacturing base, and vibrant seafood industry.",
        },

        {
        country: "Italy",
        numbers: "2.10",
        description:
            "Italy is a large manufacturer and exporter of a variety of products like: machinery, vehicles, pharmaceuticals, furniture, food and clothing.",
        },

        {
        country: "Australia",
        numbers: "1.54",
        description:
            "Its mineral and energy resources continue to power Asia's industrialisation, and its agricultural commodities and premium food are meeting the region's demand for clean, green and safe products..",
        },
    ],

    // numbers her eare in billion
    poor: [
        {
        country: "Madagascar",
        numbers: "13.72",
        description:
            "Reliant primarily on agriculture, the vulnerability of the industry, lack of potent farming land, and the growing population only make their economic situation worse and worse over time",
        },

        {
        country: "Liberia",
        numbers: "3.49",
        description:
            "Having just been subject to a 14-year-long political conflict that not only ravaged lands, the nation was left economically crumbled by the civil war.",
        },

        {
        country: "Malawi",
        numbers: "12.63",
        description:
            "Because the nation is unable to develop in general, they’re for all intents and purposes stuck with trying to drive their economy using only the most primitive levels of agriculture.",
        },

        {
        country: "Niger",
        numbers: "13.68",
        description:
            "Niger’s economy is driven by two main forces: the extraction of valuable natural resources (including gold, uranium, and even oil), and small-scale agriculture. Unfortunately, both of these economic sources can easily be devastated by random shifts in climate and weather,",
        },

        {
        country: "Mozambique",
        numbers: "16.10",
        description:
            "Mozambique has plenty of arable land and water, and plenty of energy and mineral resources. Despite that, it’s one of the poorest countries in the world due to corruption, severe climate conditions, and political instability.",
        },

        {
        country: "DR Congo",
        numbers: "48.99",
        description:
            "This country is actually very rich in valuable natural resources and a great expanse of farmable lands and waters. However, it has been subject to a very unstable, corrupt political system that has been holding back the potential of the nation’s wealth drastically",
        },

        {
        country: "Central African Republic",
        numbers: "2.30",
        description:
            "Like Liberia, it has in the past been the victim of war and significant political instability. The landlocked central African nation also supports very, very poor infrastructure, thus limiting the efficiency of the distribution of the nation’s resources.",
        },

        {
        country: "Somalia",
        numbers: "95.00",
        description:
            "Decades of droughts and floods coupled with massive levels of unemployment, especially among young people, have made Somalia one of the world’s poorest nations. According to UNDP statistics, the country has a poverty rate of 73%.",
        },

        {
        country: "South Sudan",
        numbers: "3.68",
        description:
            "Once part of Sudan, they had separated to form a separate nation in 2011. Just two years later, a conflict broke out after the president accused his former deputy of staging a coup. As a result, nearly 400,000 people were killed.",
        },

        {
        country: "Burundi",
        numbers: "3.43",
        description:
            "Having suffered from recurring violence and political disputes, it is no surprise that Burundi ranks as the second poorest nation in the world. The nation ravaged by war holds very little farmable land.",
        },
    ],

    // numbers here are 'crime index'
    dangerous: [
        {
            country: 'Venezuela',
            numbers: 83.76,
            description: "Venezuela's high crime rates have been attributed to reasons including government corruption, a flawed judiciary system, and the breakdown of the Rule of Law.",
        },

        {
            country: 'Papua New Guinea',
            numbers: 80.79,
            description: 'Rapid social, economic, and political changes, Raskol gangs, and corruption contribute in Guinea high crime rate. Moreover, its geography makes it appealing for drug and human trafficking',
        },

        {
            country: 'South Africa',
            numbers: 76.86,
            description: 'South Africa has a notably high rate of assaults, rape, homicides, and other violent crimes. This has been attributed to several factors, including high levels of poverty, inequality, unemployment, and social exclusion.',
        },

        {
            country: 'Afghanistan',
            numbers: 76.31,
            description: "Crime is present in various forms, including corruption, assassinations/contract killings, drug trafficking, kidnapping, and money laundering. (Afghanistan supplied 85% of the world's illicit opium in 2020.)",
        },

        {
            country: 'Honduras',
            numbers: 74.54,
            description: "Honduras's peak of violent crime was in 2012, where the country experienced about 20 homicides per day, typically carried out by gun-toting gangs such as Barrio 18 or Mara Salvatrucha. Also, weak domestic law enforcement has made the country an easy point of entry for the illegal drug trade",
        },

        {
            country: 'Trinidad and Tobago',
            numbers: 71.63,
            description: "Rinidad and Tobago's government faces several challenges in its effect to reduce crime, such as bureaucratic resistance to change, the negative influence of gangs, drugs, economic recession, and an overburdened legal system. There is a great demand for illegal weapons as well",
        },

        {
            country: 'Guyana',
            numbers: 68.74,
            description: 'The use of weapons by criminals is common. Domestic violence happens regularly in Guyana, as the enforcement of domestic violence laws is weak. Additionally, tourists are often the victims of hotel break-ins, robberies, and assaults.',
        },

        {
            country: 'El Salvador',
            numbers: 67.79,
            description: 'Organized crime is a massive problem in El Salvador, contributing to most social violence, with its two largest gangs, MS-13 and Barrio 18. In addition to gangs, high unemployment rates and low wages in El Salvador have pushed families into marginalized areas where crimes are common.',
        },

        {
            country: 'Brazil',
            numbers: 67.49,
            description: "Brazil's most massive problem is organized crime, as organized crime has expanded in recent years, and violence between rival groups is a common occurrence. Drug trafficking, corruption, and domestic violence are all pervasive issues in Brazil.",
        },

        {
            country: 'Jamaica',
            numbers: 67.42,
            description: "Jamaica is plagued by government corruption, gang activity, and high levels of violent crime, including sexual assault. The U.S. Overseas Security Advisory Council describes the Jamaican police force as understaffed and possessed of limited resources.",
        },
    ],

    // numbers here are average IQ
    intelligent: [
        {
            country: 'Sweden',
            numbers: 101,
            description: "Sweden has a good education system, with many education costs covered by the government so that education is accessible to anyone with the mental aptitude.",
        },

        {
            country: 'Netherlands',
            numbers: 103,
            description: 'The Netherlands has a very good education system for children, ranking in ninth when it comes to the test scores of school-aged children in the fields of math and science.',
        },

        {
            country: 'Italy',
            numbers: 102,
            description: 'The tradition of innovation in science and technology in Italy goes back hundreds of years and it is being carried till today with above-average progress in the fields of math, science, physics, and other areas.',
        },

        {
            country: 'Germany',
            numbers: 102,
            description: "Germany has the third-highest number of people graduating with STEM degrees, despite the fact that their population isn’t really that large compared with many other countries.",
        },

        {
            country: 'Austria',
            numbers: 102,
            description: "Austria is said to be a country with one of the best education systems in the world. Austria has the second-highest percentage of people with PhDs who are in the workforce of any country.",
        },

        {
            country: 'Singapore',
            numbers: 103,
            description: "Singapore is an important area for technology, as well as business and finance. Its students are always around the top in the world when it comes to performance in the fields of math and science.",
        },

        {
            country: 'Taiwan',
            numbers: 104,
            description: 'The country is world-renowned for its advances in technology, as well as for its devotion to its public education system. Many people in Taiwan are also bilingual. This has to do with the fact that the country’s biggest trading partner is the United States.',
        },

        {
            country: 'Japan',
            numbers: 105,
            description: "Japan's progress in automation is extraordinary; It has successfully integrated artificial intelligence with daily living (robots have become increasingly popular in the restaurant sector). Moreover, Japan is using a facial recognition system for immigration services.",
        },

        {
            country: 'South Korea',
            numbers: 106,
            description: "South Korea is said to be the most “innovative” of all countries in the world. Their students have the third-best test scores of any country, and they spend a lot of money on research and development projects.",
        },

        {
            country: 'China',
            numbers: 107,
            description: "Hong Kong highly contibutes in China's high level of intellegence. Hong Kong’s students receive the second-best math and science test scores of any country and are said to have the second-best education system after Finland.",
        },
    ],

    high_salary: [
        {
            country: 'Norway',
            numbers: 54.02,
            description: "The country has a thriving gas and petroleum industry which brings in the most money. Norway is also a well-known exporter of fish, timber, textiles and aquaculture.",
        },

        {
            country: 'Australia',
            numbers: 54.40,
            description: 'The nation has a bustling tourism industry, well-developed financial services, steel and industrial equipment and mining. Australia also has quite stringent immigration rules and only accepts skilled workers into the country.',
        },

        {
            country: 'Belgium',
            numbers: 55.59,
            description: 'The country is most famous for its beer, chocolates, transportation, engineering, car assembly, scientific instruments, textiles, and tourism.',
        },

        {
            country: 'Germany',
            numbers: 56.36,
            description: "The country has a solid infrastructure, well-developed schooling system, some of the best health care facilities globally, and equal distribution of wealth.",
        },

        {
            country: 'Netherlands',
            numbers: 56.55,
            description: "The Netherlands has an exceptional agriculture and fishing industry, advanced electrical and mechanical engineering industries, pharmaceuticals, tourism and microelectronics.",
        },

        {
            country: 'Denmark',
            numbers: 57.15,
            description: "Denmark’s industries focus primarily on mining, metals, food and beverages, transportation, furniture, shipbuilding and pharmaceuticals.",
        },

        {
            country: 'United States',
            numbers: 65.83,
            description: 'The country excels in various fields, including aerospace, engineering, mining, automobile manufacturing, farming and more.',
        },

        {
            country: 'Switzerland',
            numbers: 66.56,
            description: "Switzerland may be a landlocked nation, but it has excelled in many areas, including finance, banking, chocolates, electronics, pharmaceuticals, watches and tourism.",
        },

        {
            country: 'Iceland',
            numbers: 68.37,
            description: "One area where Iceland leads the world is its use of geothermal and hydropower energy. The most important industries for the island economy consist of tourism, fishing, hydropower and mining.",
        },

        {
            country: 'Luxembourg',
            numbers: 68.68,
            description: "Like Switzerland, Luxembourg is landlocked, and most of its citizens speak at least two languages. The primary industries include banking, finance, steel, mining, telecommunications and tourism.",
        },
    ],

    // numbers here are in thousands 'fatilities'
    at_war: [
        {
            country: 'Syria',
            numbers: 610.000,
            description: "Civil War",
        },

        {
            country: 'Russia',
            numbers: 14.400,
            description: 'Russo-Ukrainian War',
        },

        {
            country: 'Mexico',
            numbers: 100.000,
            description: 'Drug War',
        },

        {
            country: 'Myanmar',
            numbers: 23.52,
            description: "Civil War",
        },

        {
            country: 'Republic of Colombia ', // this country is not rendered
            numbers: 220.000,
            description: "Civil War/Drug War",
        },

        {
            country: 'Yemen',
            numbers: 250.000,
            description: "Civil War",
        },

        {
            country: 'Afghanistan',
            numbers: 145.000,
            description: 'Islamic State–Taliban conflict',
        },

        {
            country: 'Ethiopia',
            numbers: 500.000,
            description: "Civil War",
        },

        {
            country: 'Palestine',
            numbers: 27.000,
            description: "Israeli–Palestinian conflict",
        },

        {
            country: 'India',
            numbers: 200.000,
            description: "Indo-Pakistani Wars",
        },
    ]
};
