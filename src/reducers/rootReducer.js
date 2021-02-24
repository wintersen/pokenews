const initState = {
    stories: [
        {
            id: '1',
            headline: 'New Fossil Discovered at Meteor Falls',
            tagline: 'Scientists are working to determine if this might be a new species of prehistoric Pokemon',
            genre: ['Science'],
            author: 'Maribelle Weathers',
            date: 'February 24th, 2021',
            storyImg: 'https://cdn.segmentnext.com/wp-content/uploads/2016/11/Pokemon-Sun-and-Moon-Fossil-Pokemon.jpg',
            eyecatch: 'On February 23rd, archaeologists were shocked to uncover a new fossil at a long-excavated site.',
            body: 'Meteor Falls is known for its beautiful waterfalls made of a stardust-like powder, but its better known in the scientific community for its rich geologic history and volcanic activity.  Not too long ago teams were researching seismic activity at the falls, and researchers commonly use meteor fragments found there in their investigation on Clefairy, a Pokemon theorized to come from space.  A new team of researchers made the trip out with the same intent, but during their dig they discovered a small pocket uncovered by the meteorite they unearthed.  Taking a deeper look inside, they found a small, complete Pokemon fossil hiding.  Unable to immediately identify the fossil, Prof. Rowan took ti back to the labs for further investigation. <br/> "We haven\'t quite figured it out yet," says Prof. Rowan. "We may be looking at a completely new species of Pokemon!" Prof. Rowan\'s aides say that identification could take another few weeks before they can confirm what kind of fossil is in their hands.'
        },
        {
            id: '156',
            headline: 'Crown Tundra is Open for Exploration!',
            tagline: 'Get your snow gear and pokeballs ready',
            genre: ['Breaking'],
            author: 'Lief Greene',
            date: 'February 10th, 2021',
            storyImg: 'https://cdn.gamer-network.net/2020/articles/2020-09-28-23-43/it-looks-like-more-details-on-pokemon-sword-and-shields-crown-tundra-expansion-are-coming-tomorrow-1601333008493.jpg/EG11/thumbnail/1920x1078/format/jpg/quality/80',
            eyecatch: 'Officials are finally opening the Tundra for all trainers starting this weekend.',
            body: 'Ever since legendary sightings within the Crown Tundra surged in the last few months, trainers have been itching to get out and explore the frozen snowlands. The region, previously locked off for all except climbers, researchers, and ace trainers, is a tantalizing new opportunity for trainers to catch rare Pokemon not commonly seen in Galar.  In addition to a new slew of Pokemon, the region has become famous for recurring sightings of legendary and mythic Pokemon, a sight that has been considered incredibly rare for many generations. Many are itching to try and catch a glimpse of one of these one-of-a-kind Pokemon, including a young trainer named Joey.  "I\'ve gotta get out there with my Ratatta! Maybe I can find an ice-type Pokemon!" Other professional trainers have something a little more daunting in mind, however: catching one of these powerful creatures.  There are many who oppose the capturing of such Pokemon, especially as some are represented in religious cultures within the regions, as well as due to the concern that these powerful Pokemon could be used for crime.  Time will tell if any of these trainers will be able to even find any of these behemoth Pokemon, but if they do, the Littleroot Inquirer will be there for an exclusive interview!'
        }
    ]
};

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;