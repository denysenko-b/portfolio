export const seo = {
    title: 'Sergey Denisenko Portfolio',
    description: 'Product Designer, UI/UX Designer, Mobile App Designer & Web Designer',
    // keywords: ["Portfolio", "asd"]
}
export const DOMAIN = 'localhost:3000';
export const URL = `http://${DOMAIN}`;
export const SITENAME = 'Portfolio';
export const EMAIL = 'denisenko.des@gmail.com';
export const CHARACTERISTICS = {
    skills: ['User Experience', 'User Interface', 'Visual Design', 'Prototyping', 'Design System creator', 'Wireframing', 'Interaction Design', 'Apple Human Guidelines & Google Material Des.'],
    tools: ['Figma', 'Photoshop', 'Marvel App, Invision', 'Zeplin, Avocode', 'Trello, Jira, Asana', 'Hubstaff, Toptracker']
}

export const DRIBBBLE = "https://dribbble.com/workshopdesigner";
export const BEHANCE = "https://www.behance.net/den1senko";
export const INSTAGRAM = "https://www.instagram.com/workshopdesigner";

export const LINKS = {
    design: DRIBBBLE,
    haloLab: 'https://www.halo-lab.com/',
    games: 'https://steamcommunity.com/profiles/76561198339627224/',
    anime: 'https://yummyanime.club/users/id373634',
    music: 'https://open.spotify.com/playlist/1RoFQ6onJSF2HpSI7DxYMM?si=16078575a61f45b7',

    dribbble: DRIBBBLE,
    behance: BEHANCE,
    instagram: INSTAGRAM
}

export const social =  {
    url: URL,
    sitename: SITENAME,
    title: seo.title,
    description: seo.description,
    image: {
        url: `${URL}/social.jpg`,
        height: 1600,
        width: 800,
        alt: seo.description
    }
}

export default {
    ...seo,
    social,
    DOMAIN,
    URL,
    SITENAME,
    email: EMAIL,
    characteristics: CHARACTERISTICS,
    links: LINKS
}
